const express = require('express');
const router = express.Router();
const Subcategory = require('../../models/common/subcategory');
// const { body, validationResult } = require('express-validator');
const admindata = require("../../middleware/admindata");  // for token
const multer = require("multer");  // for file upload
const path = require('path');  // for upload path
const fs = require('fs');    // file system


const storageEngine = multer.diskStorage({
    destination: './authorize/public/upload/subcategory/',
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

// Add Subcategory Controller
router.post('/add', admindata, upload.single('subcategory'), (req, res) => {
    try {
        Subcategory.create({
            title: (req.body.title) ? req.body.title : '',
            parent: (req.body.parent) ? req.body.parent : '',
            path: (req.file) ? './upload/subcategory/' + req.file.filename : ''
        }).then(
            res.status(200).send({ success: true, message: "Yeah, data added successfully." })
        ).catch(
            err => console.log(err.message)
        );
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, some error occured during subcategory!" });
    }
});

// Get All Subcategory Data Controller
router.get('/show', admindata, async (req, res) => {
    // destructure page and limit and set default values
    const { page = 1, limit = 5 } = req.query;

    try {
        // execute query with page and limit values
        const data = await Subcategory.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        // get total documents in the Posts collection 
        const count = await Subcategory.countDocuments();

        // return response with totalItems, data, total pages, and current page
        res.json({
            totalItems: count,
            data,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (err) {
        console.error(err.message);
    }
});

// Update Subcategory & Policy Controller using PUT method
router.put('/updatesubcategory/:id', admindata, upload.single('subcategory'), async (req, res) => {
    try {
        // get the title and message from request body
        const { title, parent } = req.body;

        // to get ID from PUT method
        const subcategory_id = req.params.id;
        // find which admin password to be updated and then update it.
        let subcategoryData = await Subcategory.findById(subcategory_id);
        if (!subcategoryData) { return res.status(400).json({ success, error: "Oops, data not found!" }); }
        if (req.file && subcategoryData.path) {
            fs.unlinkSync('./public/' + subcategoryData.path)   // remove old photo
        }
        // create a new object of note
        const newData = {
            title: (title) ? title : subcategoryData.title,
            parent: (parent) ? parent : subcategoryData.parent,
            path: (req.file) ? './upload/subcategory/' + req.file.filename : subcategoryData.path
        };
        // update subcategorysData by subcategory id and return it to response
        subcategoryData = await Subcategory.findByIdAndUpdate(subcategory_id, { $set: newData }, { new: true });
        if (subcategoryData) {
            return res.status(200).json({ success: true, message: "Data has been changed successfully." });
        }
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// Delete Subcategory Controller
router.delete('/deletesubcategory/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const subcategory_id = req.params.id;

        // find which subcategory to be deleted and then update it.
        let subcategory = await Subcategory.findById(subcategory_id);
        if (!subcategory) { return res.status(404).send({ error: "Oops, data not found!" }); }

        (subcategory.path) && fs.unlinkSync('./public/' + subcategory.path)   // remove photo
        // update note by subcategory id and return it to response
        subcategory = await Subcategory.findByIdAndDelete(subcategory_id);
        res.status(200).json({ success: true, message: "Subcategory item has been deleted." });
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// get Editable item
router.get('/getedititem/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const subcategory_id = req.params.id;

        // find which subcategory to be deleted and then update it.
        let subcategory = await Subcategory.findById(subcategory_id);
        if (!subcategory) { return res.status(404).send({ success: false, error: "Oops, data not found!" }); }

        res.status(200).send(subcategory);
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

module.exports = router
