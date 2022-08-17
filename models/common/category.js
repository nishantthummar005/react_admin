const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    title: {
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
const category = mongoose.model('tbl_category', categorySchema);
category.createIndexes();   // to make index in table (unique, primary,...)
module.exports = category