const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
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
const video = mongoose.model('tbl_video', videoSchema);
video.createIndexes();   // to make index in table (unique, primary,...)
module.exports = video