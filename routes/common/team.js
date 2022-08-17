const express = require('express');
const router = express.Router();
const Team = require('../../models/common/team');
// const { body, validationResult } = require('express-validator');
const admindata = require("../../middleware/admindata");  // for token
const multer = require("multer");  // for file upload
const path = require('path');  // for upload path
const fs = require('fs');    // file system


const storageEngine = multer.diskStorage({
    destination: './authorize/public/upload/team/',
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

// Add Team Controller
router.post('/add', admindata, upload.single('team'), (req, res) => {
    try {
        Team.create({
            title: (req.body.title) ? req.body.title : '',
            email: (req.body.email) ? req.body.email : '',
            phone: (req.body.phone) ? req.body.phone : '',
            facebook: (req.body.facebook) ? req.body.facebook : '',
            instagram: (req.body.instagram) ? req.body.instagram : '',
            twitter: (req.body.twitter) ? req.body.twitter : '',
            linkedin: (req.body.linkedin) ? req.body.linkedin : '',
            path: (req.file) ? './upload/team/' + req.file.filename : ''
        }).then(
            res.status(200).send({ success: true, message: "Yeah, data added successfully." })
        ).catch(
            err => console.log(err.message)
        );
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, some error occured during team!" });
    }
});

// Get All Team Data Controller
router.get('/show', admindata, async (req, res) => {
    // destructure page and limit and set default values
    const { page = 1, limit = 5 } = req.query;

    try {
        // execute query with page and limit values
        const data = await Team.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        // get total documents in the Posts collection 
        const count = await Team.countDocuments();

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

// Update Team & Policy Controller using PUT method
router.put('/updateteam/:id', admindata, upload.single('team'), async (req, res) => {
    try {
        // get the title and message from request body
        const { title, email, phone, facebook, instagram, twitter, linkedin } = req.body;

        // to get ID from PUT method
        const team_id = req.params.id;
        // find which admin password to be updated and then update it.
        let teamData = await Team.findById(team_id);
        if (!teamData) { return res.status(400).json({ success, error: "Oops, data not found!" }); }
        if (req.file && teamData.path) {
            fs.unlinkSync('./public/' + teamData.path)   // remove old photo
        }
        // create a new object of note
        const newData = {
            title: (title) ? title : teamData.title,
            email: (email) ? email : teamData.email,
            phone: (phone) ? phone : teamData.phone,
            facebook: (facebook) ? facebook : teamData.facebook,
            instagram: (instagram) ? instagram : teamData.instagram,
            twitter: (twitter) ? twitter : teamData.twitter,
            linkedin: (linkedin) ? linkedin : teamData.linkedin,
            path: (req.file) ? './upload/team/' + req.file.filename : teamData.path
        };
        // update teamsData by team id and return it to response
        teamData = await Team.findByIdAndUpdate(team_id, { $set: newData }, { new: true });
        if (teamData) {
            return res.status(200).json({ success: true, message: "Data has been changed successfully." });
        }
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// Delete Team Controller
router.delete('/deleteteam/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const team_id = req.params.id;

        // find which team to be deleted and then update it.
        let team = await Team.findById(team_id);
        if (!team) { return res.status(404).send({ error: "Oops, data not found!" }); }

        (team.path) && fs.unlinkSync('./public/' + team.path)   // remove photo
        // update note by team id and return it to response
        team = await Team.findByIdAndDelete(team_id);
        res.status(200).json({ success: true, message: "Team item has been deleted." });
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// get Editable item
router.get('/getedititem/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const team_id = req.params.id;

        // find which team to be deleted and then update it.
        let team = await Team.findById(team_id);
        if (!team) { return res.status(404).send({ success: false, error: "Oops, data not found!" }); }

        res.status(200).send(team);
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

module.exports = router
