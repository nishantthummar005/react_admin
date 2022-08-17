const express = require('express');
const router = express.Router();
const Contactus = require('../../models/common/contactus');
const { body, validationResult } = require('express-validator');
const admindata = require("../../middleware/admindata");

// Add Contact Controller
router.post('/add', admindata, [
    body('title').isLength({ min: 3 }),
    body('email').isEmail(),
    body('phone', 'Enter 7 to 10 character').isLength({ min: 7, max: 10 })
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        Contactus.create({
            title: req.body.title,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message
        }).then(contactus => res.json(contactus))
            .catch(err => console.log(err.message));
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: "Oops, some error occured during contact!" });
    }

});

// Get All Contactus Data Controller
router.get('/show', admindata, async (req, res) => {
    // destructure page and limit and set default values
    const { page = 1, limit = 5 } = req.query;

    try {
        // execute query with page and limit values
        const data = await Contactus.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        // get total documents in the Posts collection 
        const count = await Contactus.countDocuments();

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


    // try {
    //     const page = req.params.page;
    //     // const contactusData = await Contactus.find();
    //     console.log(page);
    //     res.send(page);
    // } catch (error) {
    //     console.error(error.message);
    //     res.status(500).send({ error: "Oops, some error occured while fetching contacts!" });
    // }
});

// Delete Contactus Controller
router.delete('/delete/:id', admindata, async (req, res) => {
    try {
        // to get ID from PUT method
        const contactid = req.params.id;

        // find which contact to be deleted and then update it.
        let contact = await Contactus.findById(contactid);
        if (!contact) { return res.status(404).send({ error: "Oops, data not found!" }); }

        // update note by contactid and return it to response
        contact = await Contactus.findByIdAndDelete(contactid);
        res.json({ "Success": "Contact item has been deleted.", contact: contact });

    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: "Oops, internal server error!" });
    }
});

module.exports = router
