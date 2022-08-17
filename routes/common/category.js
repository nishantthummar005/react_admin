const express = require('express');
const router = express.Router();
const Category = require('../../models/common/category');
// const { body, validationResult } = require('express-validator');
const admindata = require("../../middleware/admindata");  // for token
const multer = require("multer");  // for file upload
const path = require('path');  // for upload path
const fs = require('fs');    // file system


const storageEngine = multer.diskStorage({
    destination: './authorize/public/upload/category/',
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

// Add Category Controller
router.post('/add', admindata, upload.single('category'), (req, res) => {
    try {
        Category.create({
            title: (req.body.title) ? req.body.title : '', 
            path: (req.file) ? './upload/category/' + req.file.filename : ''
        }).then(
            res.status(200).send({ success: true, message: "Yeah, data added successfully." })
        ).catch(
            err => console.log(err.message)
        );
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, some error occured during category!" });
    }
});

// Get All Category Data Controller
router.get('/show', admindata, async (req, res) => {
    // destructure page and limit and set default values
    const { page = 1, limit = 5 } = req.query;

    try {
        // execute query with page and limit values
        const data = await Category.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        // get total documents in the Posts collection 
        const count = await Category.countDocuments();

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

// Update Category & Policy Controller using PUT method
router.put('/updatecategory/:id', admindata, upload.single('category'), async (req, res) => {
    try {
        // get the title and message from request body
        const { title } = req.body;

        // to get ID from PUT method
        const category_id = req.params.id;
        // find which admin password to be updated and then update it.
        let categoryData = await Category.findById(category_id);
        if (!categoryData) { return res.status(400).json({ success, error: "Oops, data not found!" }); }
        if (req.file && categoryData.path) {
            fs.unlinkSync('./public/' + categoryData.path)   // remove old photo
        }
        // create a new object of note
        const newData = {
            title: (title) ? title : categoryData.title, 
            path: (req.file) ? './upload/category/' + req.file.filename : categoryData.path
        };
        // update categorysData by category id and return it to response
        categoryData = await Category.findByIdAndUpdate(category_id, { $set: newData }, { new: true });
        if (categoryData) {
            return res.status(200).json({ success: true, message: "Data has been changed successfully." });
        }
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// Delete Category Controller
router.delete('/deletecategory/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const category_id = req.params.id;

        // find which category to be deleted and then update it.
        let category = await Category.findById(category_id);
        if (!category) { return res.status(404).send({ error: "Oops, data not found!" }); }

        (category.path) && fs.unlinkSync('./public/' + category.path)   // remove photo
        // update note by category id and return it to response
        category = await Category.findByIdAndDelete(category_id);
        res.status(200).json({ success: true, message: "Category item has been deleted." });
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// get Editable item
router.get('/getedititem/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const category_id = req.params.id;

        // find which category to be deleted and then update it.
        let category = await Category.findById(category_id);
        if (!category) { return res.status(404).send({ success: false, error: "Oops, data not found!" }); }

        res.status(200).send(category);
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

module.exports = router
