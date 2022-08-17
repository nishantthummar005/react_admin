const express = require('express');
const router = express.Router();
const Blog = require('../../models/common/blog');
// const { body, validationResult } = require('express-validator');
const admindata = require("../../middleware/admindata");  // for token
const multer = require("multer");  // for file upload
const path = require('path');  // for upload path
const fs = require('fs');    // file system


const storageEngine = multer.diskStorage({
    destination: './public/upload/blog/',
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

// Add Blog Controller
router.post('/add', admindata, upload.single('blog'), (req, res) => {
    try {
        Blog.create({
            title: (req.body.title) ? req.body.title : '',
            description: (req.body.description) ? req.body.description : '',
            meta_title: (req.body.meta_title) ? req.body.meta_title : '',
            meta_keyword: (req.body.description) ? req.body.meta_keyword : '',
            meta_description: (req.body.meta_description) ? req.body.meta_description : '',
            path: (req.file) ? './upload/blog/' + req.file.filename : ''
        }).then(
            res.status(200).send({ success: true, message: "Yeah, data added successfully." })
        ).catch(
            err => console.log(err.message)
        );
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, some error occured during blog!" });
    }
});

// Get All Blog Data Controller
router.get('/show', admindata, async (req, res) => {
    // destructure page and limit and set default values
    const { page = 1, limit = 5 } = req.query;

    try {
        // execute query with page and limit values
        const data = await Blog.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        // get total documents in the Posts collection 
        const count = await Blog.countDocuments();

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

// Update Blog & Policy Controller using PUT method
router.put('/updateblog/:id', admindata, upload.single('blog'), async (req, res) => {
    try {
        // get the title and message from request body
        const { title, description, meta_title, meta_keyword, meta_description } = req.body;

        // to get ID from PUT method
        const blog_id = req.params.id;
        // find which admin password to be updated and then update it.
        let blogData = await Blog.findById(blog_id);
        if (!blogData) { return res.status(400).json({ success, error: "Oops, data not found!" }); }
        if (req.file && blogData.path) {
            fs.unlinkSync('./public/' + blogData.path)   // remove old photo
        }
        // create a new object of note
        const newData = {
            title: (title) ? title : blogData.title,
            description: (description) ? description : blogData.description,
            meta_title: (meta_title) ? meta_title : blogData.meta_title,
            meta_keyword: (meta_keyword) ? meta_keyword : blogData.meta_keyword,
            meta_description: (meta_description) ? meta_description : blogData.meta_description,
            path: (req.file) ? './upload/blog/' + req.file.filename : blogData.path
        };
        // update blogsData by blog id and return it to response
        blogData = await Blog.findByIdAndUpdate(blog_id, { $set: newData }, { new: true });
        if (blogData) {
            return res.status(200).json({ success: true, message: "Data has been changed successfully." });
        }
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// Delete Blog Controller
router.delete('/deleteblog/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const blog_id = req.params.id;

        // find which blog to be deleted and then update it.
        let blog = await Blog.findById(blog_id);
        if (!blog) { return res.status(404).send({ error: "Oops, data not found!" }); }

        (blog.path) && fs.unlinkSync('./public/' + blog.path)   // remove photo
        // update note by blog id and return it to response
        blog = await Blog.findByIdAndDelete(blog_id);
        res.status(200).json({ success: true, message: "Blog item has been deleted." });
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// get Editable item
router.get('/getedititem/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const blog_id = req.params.id;

        // find which blog to be deleted and then update it.
        let blog = await Blog.findById(blog_id);
        if (!blog) { return res.status(404).send({ success: false, error: "Oops, data not found!" }); }

        res.status(200).send(blog);
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

module.exports = router
