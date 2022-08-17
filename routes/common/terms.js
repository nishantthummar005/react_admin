const express = require('express');
const router = express.Router();
const Terms = require('../../models/common/terms');
const { body, validationResult } = require('express-validator');
const admindata = require("../../middleware/admindata");

// Add Terms Controller
router.post('/add', admindata, [
    body('terms').notEmpty()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, error: errors.array() });
    }
    try {
        Terms.create({
            terms: req.body.terms
        }).then(
            res.status(200).send({ success: true, message: "Yeah, data added successfully." })
        ).catch(
            err => console.log(err.message)
        );
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, some error occured during terms!" });
    }
});

// Get All Terms Data Controller
router.get('/show', admindata, async (req, res) => {
    // destructure page and limit and set default values
    const { page = 1, limit = 5 } = req.query;

    try {
        // execute query with page and limit values
        const data = await Terms.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        // get total documents in the Posts collection 
        const count = await Terms.countDocuments();

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

// Update Terms & Condition Controller using PUT method
router.put('/updateterms/:id', admindata, [
    body('term').notEmpty()
], async (req, res) => {
    try {
        // get the title and message from request body
        const { term } = req.body;

        // create a new object of note
        const newData = {};
        (term) ? newData.terms = term : '';

        // to get ID from PUT method
        const termid = req.params.id;
        // find which termData to be updated and then update it.
        let termData = await Terms.findById(termid);
        if (!termData) { return res.status(404).send({ success: false, error: "Oops, data not found!" }); }

        // update termData by termid and return it to response
        termData = await Terms.findByIdAndUpdate(termid, { $set: newData }, { new: true });
        if (termData) {
            return res.status(200).json({ success: true, message: "Data has been changed successfully." });
        }
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// Delete Terms Controller
router.delete('/deleteterms/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const termid = req.params.id;

        // find which terms to be deleted and then update it.
        let term = await Terms.findById(termid);
        if (!term) { return res.status(404).send({ error: "Oops, data not found!" }); }

        // update note by termid and return it to response
        term = await Terms.findByIdAndDelete(termid);
        res.status(200).json({ success: true, message: "Terms item has been deleted." });
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

// get Editable item
router.get('/getedititem/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const termid = req.params.id;

        // find which terms to be deleted and then update it.
        let term = await Terms.findById(termid);
        if (!term) { return res.status(404).send({ success: false, error: "Oops, data not found!" }); }

        res.status(200).send(term);
    } catch (error) {
        res.status(500).send({ success: false, error: "Oops, internal server error!" });
    }
});

module.exports = router
