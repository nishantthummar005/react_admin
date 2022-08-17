const express = require('express');
const router = express.Router();
const Gallery = require('../../models/common/gallery');
// const { body, validationResult } = require('express-validator');
const admindata = require("../../middleware/admindata");  // for token
const multer = require("multer");  // for file upload
const path = require('path');  // for upload path
const fs = require('fs');    // file system


const storageEngine = multer.diskStorage({
    destination: './authorize/public/upload/gallery/',
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

// Add Gallery Controller
router.post('/add', admindata, upload.single('gallery'), (req, res) => {
    try {
        Gallery.create({
            title: (req.body.title) ? req.body.title : '', 
            path: (req.file) ? './upload/gallery/' + req.file.filename : ''
        }).then(
            res.status(200).send({ success: true, message: "Yeah, data added successfully." })
        ).catch(
            err => console.log(err.message)
        );
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, some error occured during gallery!" });
    }
});

// Get All Gallery Data Controller
router.get('/show', admindata, async (req, res) => {
    // destructure page and limit and set default values
    const { page = 1, limit = 5 } = req.query;

    try {
        // execute query with page and limit values
        const data = await Gallery.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        // get total documents in the Posts collection 
        const count = await Gallery.countDocuments();

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

// Update Gallery & Policy Controller using PUT method
router.put('/updategallery/:id', admindata, upload.single('gallery'), async (req, res) => {
    try {
        // get the title and message from request body
        const { title } = req.body;

        // to get ID from PUT method
        const gallery_id = req.params.id;
        // find which admin password to be updated and then update it.
        let galleryData = await Gallery.findById(gallery_id);
        if (!galleryData) { return res.status(400).json({ success, error: "Oops, data not found!" }); }
        if (req.file && galleryData.path) {
            fs.unlinkSync('./public/' + galleryData.path)   // remove old photo
        }
        // create a new object of note
        const newData = {
            title: (title) ? title : galleryData.title, 
            path: (req.file) ? './upload/gallery/' + req.file.filename : galleryData.path
        };
        // update gallerysData by gallery id and return it to response
        galleryData = await Gallery.findByIdAndUpdate(gallery_id, { $set: newData }, { new: true });
        if (galleryData) {
            return res.status(200).json({ success: true, message: "Data has been changed successfully." });
        }
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// Delete Gallery Controller
router.delete('/deletegallery/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const gallery_id = req.params.id;

        // find which gallery to be deleted and then update it.
        let gallery = await Gallery.findById(gallery_id);
        if (!gallery) { return res.status(404).send({ error: "Oops, data not found!" }); }

        (gallery.path) && fs.unlinkSync('./public/' + gallery.path)   // remove photo
        // update note by gallery id and return it to response
        gallery = await Gallery.findByIdAndDelete(gallery_id);
        res.status(200).json({ success: true, message: "Gallery item has been deleted." });
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// get Editable item
router.get('/getedititem/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const gallery_id = req.params.id;

        // find which gallery to be deleted and then update it.
        let gallery = await Gallery.findById(gallery_id);
        if (!gallery) { return res.status(404).send({ success: false, error: "Oops, data not found!" }); }

        res.status(200).send(gallery);
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

module.exports = router
