const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: false,
        trim: true
    },
    facebook: {
        type: String,
        required: false,
        trim: true
    },
    instagram: {
        type: String,
        required: false,
        trim: true
    },
    twitter: {
        type: String,
        required: false,
        trim: true
    },
    linkedin: {
        type: String,
        required: false,
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
const team = mongoose.model('tbl_team', teamSchema);
team.createIndexes();   // to make index in table (unique, primary,...)
module.exports = team