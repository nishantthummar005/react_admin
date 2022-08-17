const mongoose = require('mongoose');
const { Schema } = mongoose;

const gallerySchema = new Schema({
    title: {
        type: String,
        required: false,
        trim: true
    }, 
    path: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const gallery = mongoose.model('tbl_gallery', gallerySchema);
gallery.createIndexes();   // to make index in table (unique, primary,...)
module.exports = gallery