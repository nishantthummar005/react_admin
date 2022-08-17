const express = require('express');
const router = express.Router();
const Aboutus = require('../../models/common/aboutus');
const { body, validationResult } = require('express-validator');
const admindata = require("../../middleware/admindata");

// Add Aboutus Controller
router.post('/add', admindata, [
    body('aboutus').notEmpty()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, error: errors.array() });
    }
    try {
        Aboutus.create({
            aboutus: req.body.aboutus
        }).then(
            res.status(200).send({ success: true, message: "Yeah, data added successfully." })
        ).catch(
            err => console.log(err.message)
        );
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, some error occured during aboutus!" });
    }
});

// Get All Aboutus Data Controller
router.get('/show', admindata, async (req, res) => {
    // destructure page and limit and set default values
    const { page = 1, limit = 5 } = req.query;

    try {
        // execute query with page and limit values
        const data = await Aboutus.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        // get total documents in the Posts collection 
        const count = await Aboutus.countDocuments();

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

// Update About us Controller using PUT method
router.put('/updateaboutus/:id', admindata, [
    body('about').notEmpty()
], async (req, res) => {
    try {
        // get the title and message from request body
        const { about } = req.body;

        // create a new object of note
        const newData = {};
        (about) ? newData.aboutus = about : '';

        // to get ID from PUT method
        const aboutid = req.params.id;
        // find which aboutData to be updated and then update it.
        let aboutData = await Aboutus.findById(aboutid);
        if (!aboutData) { return res.status(404).send({ success: false, error: "Oops, data not found!" }); }

        // update aboutData by aboutid and return it to response
        aboutData = await Aboutus.findByIdAndUpdate(aboutid, { $set: newData }, { new: true });
        if (aboutData) {
            return res.status(200).json({ success: true, message: "Data has been changed successfully." });
        }

    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// Delete Aboutus Controller
router.delete('/deleteaboutus/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const aboutid = req.params.id;

        // find which aboutus to be deleted and then update it.
        let about = await Aboutus.findById(aboutid);
        if (!about) { return res.status(404).send({ success: false, error: "Oops, data not found!" }); }

        // update note by aboutid and return it to response
        about = await Aboutus.findByIdAndDelete(aboutid);
        if (about) {
            res.status(200).json({ success: true, message: "About item has been deleted." });
        }
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// get Editable item
router.get('/getedititem/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const aboutid = req.params.id;

        // find which aboutus to be deleted and then update it.
        let about = await Aboutus.findById(aboutid);
        if (!about) { return res.status(404).send({ success: false, error: "Oops, data not found!" }); }

        res.status(200).send(about);
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

module.exports = router
