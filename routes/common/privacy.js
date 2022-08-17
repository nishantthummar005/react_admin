const express = require('express');
const router = express.Router();
const Privacy = require('../../models/common/privacy');
const { body, validationResult } = require('express-validator');
const admindata = require("../../middleware/admindata");

// Add Privacy Controller
router.post('/add', admindata, [
    body('privacy').notEmpty()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, error: errors.array() });
    }
    try {
        Privacy.create({
            privacy: req.body.privacy
        }).then(
            res.status(200).send({ success: true, message: "Yeah, data added successfully." })
        ).catch(
            err => console.log(err.message)
        );
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, some error occured during privacy!" });
    }
});

// Get All Privacy Data Controller
router.get('/show', admindata, async (req, res) => {
    // destructure page and limit and set default values
    const { page = 1, limit = 5 } = req.query;

    try {
        // execute query with page and limit values
        const data = await Privacy.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        // get total documents in the Posts collection 
        const count = await Privacy.countDocuments();

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

// Update Privacy & Policy Controller using PUT method
router.put('/updateprivacy/:id', admindata, [
    body('privac').notEmpty()
], async (req, res) => {
    try {
        // get the title and message from request body
        const { privac } = req.body;

        // create a new object of note
        const newData = {};
        (privac) ? newData.privacy = privac : '';

        // to get ID from PUT method
        const privacid = req.params.id;
        // find which privacData to be updated and then update it.
        let privacData = await Privacy.findById(privacid);
        if (!privacData) { return res.status(404).send({ success: false, error: "Oops, data not found!" }); }

        // update privacData by privacid and return it to response
        privacData = await Privacy.findByIdAndUpdate(privacid, { $set: newData }, { new: true });
        if (privacData) {
            return res.status(200).json({ success: true, message: "Data has been changed successfully." });
        }
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// Delete Privacy Controller
router.delete('/deleteprivacy/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const privacid = req.params.id;

        // find which privacy to be deleted and then update it.
        let privac = await Privacy.findById(privacid);
        if (!privac) { return res.status(404).send({ error: "Oops, data not found!" }); }

        // update note by privacid and return it to response
        privac = await Privacy.findByIdAndDelete(privacid);
        res.status(200).json({ success: true, message: "Privacy item has been deleted." });
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// get Editable item
router.get('/getedititem/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const privacid = req.params.id;

        // find which privacy to be deleted and then update it.
        let privac = await Privacy.findById(privacid);
        if (!privac) { return res.status(404).send({ success: false, error: "Oops, data not found!" }); }

        res.status(200).send(privac);
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

module.exports = router
