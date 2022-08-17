const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactusSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    }, 
    phone: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required : true,
        trim: true
    },
    message:{
        type: String,
        required : true,
        trim: true
    },
    date:{
        type : Date, 
        default : Date.now
    }
});
const contactus = mongoose.model('tbl_contactus',contactusSchema);
contactus.createIndexes();   // to make index in table (unique, primary,...)
module.exports = contactus