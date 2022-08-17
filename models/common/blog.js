const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    path: {
        type: String,
        required: false,
        trim: true
    },
    meta_title: {
        type: String,
        required: false,
        trim: true
    },
    meta_keyword: {
        type: String,
        required: false,
        trim: true
    },
    meta_description: {
        type: String,
        required: false,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const blog = mongoose.model('tbl_blog', blogSchema);
blog.createIndexes();   // to make index in table (unique, primary,...)
module.exports = blog