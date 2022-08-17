const express = require('express');
const router = express.Router();
const Video = require('../../models/common/video');
// const { body, validationResult } = require('express-validator');
const admindata = require("../../middleware/admindata");  // for token
const multer = require("multer");  // for file upload
const path = require('path');  // for upload path
const fs = require('fs');    // file system


const storageEngine = multer.diskStorage({
    destination: './public/upload/video/',
    filename: function (req, file, callback) {
        // callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));  // if you want to give same extension of file
        callback(null, file.fieldname + '-' + Date.now() + ".webm");  // change extension to webm  
    },
});

// file filter for multer
const fileFilter = (req, file, callback) => {
    let pattern = /mp4|mov|wmv|avi|mkv|webm/; // reqex
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

// Add Video Controller
router.post('/add', admindata, upload.single('video'), (req, res) => {
    try {
        Video.create({
            title: (req.body.title) ? req.body.title : '',
            type: (req.body.type) ? req.body.type : '',
            path: (req.file) ? './upload/video/' + req.file.filename : req.body.video
        }).then(
            res.status(200).send({ success: true, message: "Yeah, data added successfully." })
        ).catch(
            err => console.log(err.message)
        );
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, some error occured during video!" });
    }
});

// Get All Video Data Controller
router.get('/show', admindata, async (req, res) => {
    // destructure page and limit and set default values
    const { page = 1, limit = 5 } = req.query;

    try {
        // execute query with page and limit values
        const data = await Video.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        // get total documents in the Posts collection 
        const count = await Video.countDocuments();

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

// Update Video & Policy Controller using PUT method
router.put('/updatevideo/:id', admindata, upload.single('video'), async (req, res) => {
    try {
        // get the title and message from request body
        const { title, type } = req.body;

        // to get ID from PUT method
        const video_id = req.params.id;
        // find which admin password to be updated and then update it.
        let videoData = await Video.findById(video_id);
        if (!videoData) { return res.status(400).json({ success, error: "Oops, data not found!" }); }
        if (req.file && videoData.path && videoData.type !== 'online') {
            fs.unlinkSync('./public/' + videoData.path)   // remove old photo
        }
        // create a new object of note
        const newData = {
            title: (title) ? title : videoData.title,
            type: (type) ? type : videoData.type,
            path: (type === 'upload') ? ((req.file) ? './upload/video/' + req.file.filename : videoData.path) : req.body.video
        };
        // update videosData by video id and return it to response
        videoData = await Video.findByIdAndUpdate(video_id, { $set: newData }, { new: true });
        if (videoData) {
            return res.status(200).json({ success: true, message: "Data has been changed successfully." });
        }
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// Delete Video Controller
router.delete('/deletevideo/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const video_id = req.params.id;

        // find which video to be deleted and then update it.
        let video = await Video.findById(video_id);
        if (!video) { return res.status(404).send({ error: "Oops, data not found!" }); }

        (video.path && video.type !== 'online') && fs.unlinkSync('./public/' + video.path)   // remove photo
        // update note by video id and return it to response
        video = await Video.findByIdAndDelete(video_id);
        res.status(200).json({ success: true, message: "Video item has been deleted." });
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// get Editable item
router.get('/getedititem/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const video_id = req.params.id;

        // find which video to be deleted and then update it.
        let video = await Video.findById(video_id);
        if (!video) { return res.status(404).send({ success: false, error: "Oops, data not found!" }); }

        res.status(200).send(video);
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

module.exports = router
