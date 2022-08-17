const express = require('express');
const router = express.Router();
const Review = require('../../models/common/review');
// const { body, validationResult } = require('express-validator');
const admindata = require("../../middleware/admindata");  // for token
const multer = require("multer");  // for file upload
const path = require('path');  // for upload path
const fs = require('fs');    // file system


const storageEngine = multer.diskStorage({
    destination: './authorize/public/upload/review/',
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

// Add Review Controller
router.post('/add', admindata, upload.single('review'), (req, res) => {
    try {
        Review.create({
            title: (req.body.title) ? req.body.title : '',
            review_date: (req.body.review_date) ? req.body.review_date : '',
            review_message: (req.body.review_message) ? req.body.review_message : '',
            path: (req.file) ? './upload/review/' + req.file.filename : ''
        }).then(
            res.status(200).send({ success: true, message: "Yeah, data added successfully." })
        ).catch(
            err => console.log(err.message)
        );
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, some error occured during review!" });
    }
});

// Get All Review Data Controller
router.get('/show', admindata, async (req, res) => {
    // destructure page and limit and set default values
    const { page = 1, limit = 5 } = req.query;

    try {
        // execute query with page and limit values
        const data = await Review.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        // get total documents in the Posts collection 
        const count = await Review.countDocuments();

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

// Update Review & Policy Controller using PUT method
router.put('/updatereview/:id', admindata, upload.single('review'), async (req, res) => {
    try {
        // get the title and message from request body
        const { title, review_date, review_message } = req.body;

        // to get ID from PUT method
        const review_id = req.params.id;
        // find which admin password to be updated and then update it.
        let reviewData = await Review.findById(review_id);
        if (!reviewData) { return res.status(400).json({ success, error: "Oops, data not found!" }); }
        if (req.file && reviewData.path) {
            fs.unlinkSync('./public/' + reviewData.path)   // remove old photo
        }
        // create a new object of note
        const newData = {
            title: (title) ? title : reviewData.title,
            review_date: (review_date) ? review_date : reviewData.review_date,
            review_message: (review_message) ? review_message : reviewData.review_message, 
            path: (req.file) ? './upload/review/' + req.file.filename : reviewData.path
        };
        // update reviewsData by review id and return it to response
        reviewData = await Review.findByIdAndUpdate(review_id, { $set: newData }, { new: true });
        if (reviewData) {
            return res.status(200).json({ success: true, message: "Data has been changed successfully." });
        }
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// Delete Review Controller
router.delete('/deletereview/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const review_id = req.params.id;

        // find which review to be deleted and then update it.
        let review = await Review.findById(review_id);
        if (!review) { return res.status(404).send({ error: "Oops, data not found!" }); }

        (review.path) && fs.unlinkSync('./public/' + review.path)   // remove photo
        // update note by review id and return it to response
        review = await Review.findByIdAndDelete(review_id);
        res.status(200).json({ success: true, message: "Review item has been deleted." });
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// get Editable item
router.get('/getedititem/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const review_id = req.params.id;

        // find which review to be deleted and then update it.
        let review = await Review.findById(review_id);
        if (!review) { return res.status(404).send({ success: false, error: "Oops, data not found!" }); }

        res.status(200).send(review);
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

module.exports = router
