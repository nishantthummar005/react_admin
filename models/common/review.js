const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    review_date: {
        type: Date,
        required: false,
        trim: true
    },
    review_message: {
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
const review = mongoose.model('tbl_review', reviewSchema);
review.createIndexes();   // to make index in table (unique, primary,...)
module.exports = review