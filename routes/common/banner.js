const express = require('express');
const router = express.Router();
const Banner = require('../../models/common/banner');
// const { body, validationResult } = require('express-validator');
const admindata = require("../../middleware/admindata");  // for token
const multer = require("multer");  // for file upload
const path = require('path');  // for upload path
const fs = require('fs');    // file system


const storageEngine = multer.diskStorage({
    destination: './public/upload/banner/',
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

// Add Banner Controller
router.post('/add', admindata, upload.single('banner'), (req, res) => {
    try {
        Banner.create({
            title: (req.body.title) ? req.body.title : '',
            subtitle: (req.body.subtitle) ? req.body.subtitle : '',
            path: (req.file) ? './upload/banner/' + req.file.filename : ''
        }).then(
            res.status(200).send({ success: true, message: "Yeah, data added successfully." })
        ).catch(
            err => console.log(err.message)
        );
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, some error occured during banner!" });
    }
});

// Get All Banner Data Controller
router.get('/show', admindata, async (req, res) => {
    // destructure page and limit and set default values
    const { page = 1, limit = 5 } = req.query;

    try {
        // execute query with page and limit values
        const data = await Banner.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        // get total documents in the Posts collection 
        const count = await Banner.countDocuments();

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

// Update Banner & Policy Controller using PUT method
router.put('/updatebanner/:id', admindata, upload.single('banner'), async (req, res) => {
    try {
        // get the title and message from request body
        const { title, subtitle } = req.body;

        // to get ID from PUT method
        const banner_id = req.params.id;
        // find which admin password to be updated and then update it.
        let bannerData = await Banner.findById(banner_id);
        if (!bannerData) { return res.status(400).json({ success, error: "Oops, data not found!" }); }
        if (req.file && bannerData.path) {
            fs.unlinkSync('./public/' + bannerData.path)   // remove old photo
        }
        // create a new object of note
        const newData = {
            title: (title) ? title : bannerData.title,
            subtitle: (subtitle) ? subtitle : bannerData.subtitle,
            path: (req.file) ? './upload/banner/' + req.file.filename : bannerData.path
        };
        // update bannersData by banner id and return it to response
        bannerData = await Banner.findByIdAndUpdate(banner_id, { $set: newData }, { new: true });
        if (bannerData) {
            return res.status(200).json({ success: true, message: "Data has been changed successfully." });
        }
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// Delete Banner Controller
router.delete('/deletebanner/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const banner_id = req.params.id;

        // find which banner to be deleted and then update it.
        let banner = await Banner.findById(banner_id);
        if (!banner) { return res.status(404).send({ error: "Oops, data not found!" }); }

        (banner.path) && fs.unlinkSync('./public/' + banner.path)   // remove photo
        // update note by banner id and return it to response
        banner = await Banner.findByIdAndDelete(banner_id);
        res.status(200).json({ success: true, message: "Banner item has been deleted." });
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// get Editable item
router.get('/getedititem/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const banner_id = req.params.id;

        // find which banner to be deleted and then update it.
        let banner = await Banner.findById(banner_id);
        if (!banner) { return res.status(404).send({ success: false, error: "Oops, data not found!" }); }

        res.status(200).send(banner);
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

module.exports = router
