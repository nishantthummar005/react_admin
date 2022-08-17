const express = require('express');
const router = express.Router();
const Client = require('../../models/common/client');
// const { body, validationResult } = require('express-validator');
const admindata = require("../../middleware/admindata");  // for token
const multer = require("multer");  // for file upload
const path = require('path');  // for upload path
const fs = require('fs');    // file system


const storageEngine = multer.diskStorage({
    destination: './authorize/public/upload/client/',
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

// Add Client Controller
router.post('/add', admindata, upload.single('client'), (req, res) => {
    try {
        Client.create({
            title: (req.body.title) ? req.body.title : '', 
            path: (req.file) ? './upload/client/' + req.file.filename : ''
        }).then(
            res.status(200).send({ success: true, message: "Yeah, data added successfully." })
        ).catch(
            err => console.log(err.message)
        );
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, some error occured during client!" });
    }
});

// Get All Client Data Controller
router.get('/show', admindata, async (req, res) => {
    // destructure page and limit and set default values
    const { page = 1, limit = 5 } = req.query;

    try {
        // execute query with page and limit values
        const data = await Client.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        // get total documents in the Posts collection 
        const count = await Client.countDocuments();

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

// Update Client & Policy Controller using PUT method
router.put('/updateclient/:id', admindata, upload.single('client'), async (req, res) => {
    try {
        // get the title and message from request body
        const { title } = req.body;

        // to get ID from PUT method
        const client_id = req.params.id;
        // find which admin password to be updated and then update it.
        let clientData = await Client.findById(client_id);
        if (!clientData) { return res.status(400).json({ success, error: "Oops, data not found!" }); }
        if (req.file && clientData.path) {
            fs.unlinkSync('./public/' + clientData.path)   // remove old photo
        }
        // create a new object of note
        const newData = {
            title: (title) ? title : clientData.title, 
            path: (req.file) ? './upload/client/' + req.file.filename : clientData.path
        };
        // update clientsData by client id and return it to response
        clientData = await Client.findByIdAndUpdate(client_id, { $set: newData }, { new: true });
        if (clientData) {
            return res.status(200).json({ success: true, message: "Data has been changed successfully." });
        }
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// Delete Client Controller
router.delete('/deleteclient/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const client_id = req.params.id;

        // find which client to be deleted and then update it.
        let client = await Client.findById(client_id);
        if (!client) { return res.status(404).send({ error: "Oops, data not found!" }); }

        (client.path) && fs.unlinkSync('./public/' + client.path)   // remove photo
        // update note by client id and return it to response
        client = await Client.findByIdAndDelete(client_id);
        res.status(200).json({ success: true, message: "Client item has been deleted." });
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// get Editable item
router.get('/getedititem/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const client_id = req.params.id;

        // find which client to be deleted and then update it.
        let client = await Client.findById(client_id);
        if (!client) { return res.status(404).send({ success: false, error: "Oops, data not found!" }); }

        res.status(200).send(client);
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

module.exports = router
