const mongoose = require('mongoose');
const { Schema } = mongoose;

const subcategorySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    parent: {
        type: String,
        required: true,
        trim: true
    },
    path: {
        type: String,
        required: false,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const subcategory = mongoose.model('tbl_subcategory', subcategorySchema);
subcategory.createIndexes();   // to make index in table (unique, primary,...)
module.exports = subcategory