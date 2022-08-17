const express = require('express');
const router = express.Router();
const AdminLogin = require('../../models/auth/AdminLogin');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SIGN = "commonAdmin";
const admindata = require("../../middleware/admindata");
const multer = require("multer");
const path = require('path');
const fs = require('fs');    // file system

// Admin Register controller
router.post('/register', [
    body('admin_name').notEmpty(),
    body('email').notEmpty().isEmail(),
    body('phone').notEmpty().isLength({ min: 10, max: 12 }),
    body('password')
        .isLength({ min: 8 })
        .withMessage('must be at least 8 chars long')
], async (req, res) => {
    // check the validation and return message to response
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, error: errors.array() });
    }
    try {
        // check whether the admin is exist with same email
        let admin = await AdminLogin.findOne({ email: req.body.email })
        if (admin) {
            return res.status(409).json({ success, error: "Sorry, admin already exist with the same email!" });
        }

        // Encrypt Password by salt and hash
        var salt = await bcrypt.genSaltSync(10);
        var secPass = await bcrypt.hashSync(req.body.password, salt);

        // storing admin data to register table
        admin = await AdminLogin.create({
            admin_name: req.body.admin_name,
            email: req.body.email,
            phone: req.body.phone,
            password: secPass
        })

        // Generate Json Web Token (JWT) for authentication & send Token to response
        const adminID = {
            admin: {
                id: admin.id
            }
        }
        success = true;
        const authToken = jwt.sign(adminID, JWT_SIGN);
        res.json({ success, authToken });  // send Token to response 
    } catch (error) {
        res.status(500).send({ success, error: "Oops, some error occured during registering a admin!" });
    }
});

// Admin Login Controller
router.post('/login', [
    body('email')
        .isEmail()
        .withMessage('Enter valid email address')
        .normalizeEmail(),
    body('password')
        .isLength({ min: 8 })
        .withMessage('must be at least 8 chars long')
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, error: errors.array() });
    }
    try {
        const { email, password } = req.body;

        // check whether the admin is exist with entered email
        let admin = await AdminLogin.findOne({ email })
        if (!admin) {
            return res.status(400).json({ success, error: "Please try to login with correct credentials!" });
        }

        // Decrypt Password by salt and hash 
        const passCompare = await bcrypt.compare(password, admin.password);
        if (!passCompare) {
            return res.status(400).json({ success, error: "Please try to login with correct credentials!" });
        }

        // Generate Json Web Token (JWT) for authentication & send Token to response
        const adminID = {
            admin: {
                id: admin.id
            }
        }
        const authToken = jwt.sign(adminID, JWT_SIGN);
        success = true;
        res.status(200).json({ success, authToken });  // send Token to response 
    } catch (error) {
        res.status(500).send({ success, error: "Oops, some error occured during login!" });
    }
});

// Get Admin Data controller using Authentication Token
router.get('/getadmin', admindata, async (req, res) => {
    let success = false;
    try {
        // get request admin id from middleware
        const adminid = req.admin.id;
        // fetch admindata accept password from table using adminID
        const admin = await AdminLogin.findById(adminid).select("-password");
        if (!admin) {
            res.status(400).json({ success, error: "Sorry, data not found!" });  // send admindata to response 
        } else {
            success = true
            res.status(200).json({ success, admin });  // send admindata to response 
        }
    } catch (error) {
        res.status(500).send({ success, error: "Oops, internal server error!" });
    }
});

// Update Password Data 
router.put('/update/:id', admindata, [
    body('password')
        .isLength({ min: 8 })
        .withMessage('must be at least 8 chars long'),
    body('new_password')
        .isLength({ min: 8 })
        .withMessage('must be at least 8 chars long')
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, error: errors.array() });
    }
    try {
        // get request admin id from middleware
        // const adminTokenid = req.admin.id;

        // get the password from request body
        const { new_password, password } = req.body;

        // to get ID from PUT method
        const admin_id = req.params.id;
        // find which admin password to be updated and then update it.
        let adminData = await AdminLogin.findById(admin_id);
        if (!adminData) { return res.status(400).json({ success, error: "Oops, data not found!" }); }

        // Decrypt Password by salt and hash 
        const passCompare = await bcrypt.compare(password, adminData.password);
        if (!passCompare) {
            return res.status(400).json({ success, error: "Please try to enter correct password!" });
        }

        // Encrypt Password by salt and hash
        var salt = await bcrypt.genSaltSync(10);
        var secPass = await bcrypt.hashSync(new_password, salt);

        // create a new object of updatable Data
        const updatedData = {};
        (secPass) ? updatedData.password = secPass : '';

        // update admin record by admin_id and return it to response
        adminData = await AdminLogin.findByIdAndUpdate(admin_id, { $set: updatedData }, { new: true });
        if (adminData) {
            success = true;
            return res.status(200).json({ success, message: "Password has been changed successfully." });
        }

    } catch (error) {
        res.status(500).send({ success, error: "Oops, internal server error!" });
    }
});

const storageEngine = multer.diskStorage({
    destination: './public/upload/admin/',
    filename: function (req, file, callback) {
        // callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));  // if you want to give same extension of file
        callback(null, file.fieldname + '-' + Date.now() + ".webp");  // change extension to webp 
    },
});

// file filter for multer
const fileFilter = (req, file, callback) => {
    let pattern = /jpg|png|jpeg|webp|svg/; // reqex
    if (pattern.test(path.extname(file.originalname))) {
        callback(null, true);
    } else {
        callback('Error: not a valid file');
    }
};

// initialize multer
const upload = multer({
    storage: storageEngine,
    fileFilter: fileFilter,
});

// Update Profile & Other Detail
router.put('/updateinfo/:id', admindata, ('profile') && upload.single('profile'), [
    body('project_name').notEmpty(),
    body('admin_name').notEmpty(),
    body('phone').notEmpty().isLength({ min: 10, max: 12 }),
    body('address').notEmpty(),
    body('bio').notEmpty()
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, error: errors.array() });
    }
    try {
        // get the password from request body
        const { project_name, admin_name, phone, address, bio } = req.body;

        // to get ID from PUT method
        const admin_id = req.params.id;
        // find which admin password to be updated and then update it.
        let adminData = await AdminLogin.findById(admin_id);
        if (!adminData) { return res.status(400).json({ success, error: "Oops, data not found!" }); }
        if (req.file && adminData.profile) {
            fs.unlinkSync('./public/' + adminData.profile)   // remove old photo
        }
        // create a new object of updatable Data
        const updatedData = {
            project_name: project_name,
            admin_name: admin_name,
            phone: phone,
            address: address,
            bio: bio,
            profile: (req.file) ? './upload/admin/' + req.file.filename : adminData.profile
        };

        // update admin record by admin_id and return it to response
        adminData = await AdminLogin.findByIdAndUpdate(admin_id, { $set: updatedData }, { new: true });
        if (adminData) {
            success = true;
            return res.status(200).json({ success, message: "Data has been changed successfully." });
        }
    } catch (error) {
        res.status(500).send({ success, error: "Oops, internal server error!" });
    }
});


module.exports = router
