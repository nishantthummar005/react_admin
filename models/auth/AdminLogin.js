const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
    project_name: {
        type: String,
        required: false,
        trim: true
    },
    admin_name: {
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
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: false,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    profile: {
        type: String,
        required: false
    },
    lastseen: {
        type: Date,
        required: false
    },
    status: {
        type: Boolean,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const admin = mongoose.model('tbl_admin', adminSchema);
admin.createIndexes();   // to make index in table (unique, primary,...)
module.exports = admin