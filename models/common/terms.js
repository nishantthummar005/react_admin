const mongoose = require('mongoose');
const { Schema } = mongoose;

const termsSchema = new Schema({ 
    terms:{
        type: String,
        required : true
    },
    date:{
        type : Date, 
        default : Date.now
    }
});
const terms = mongoose.model('tbl_terms',termsSchema);
terms.createIndexes();   // to make index in table (unique, primary,...)
module.exports = terms