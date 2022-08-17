const mongoose = require('mongoose');
const { Schema } = mongoose;

const bannerSchema = new Schema({
    title: {
        type: String,
        required: false,
        trim: true
    },
    subtitle: {
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
const banner = mongoose.model('tbl_banner', bannerSchema);
banner.createIndexes();   // to make index in table (unique, primary,...)
module.exports = banner