const mongoose = require('mongoose');
const { Schema } = mongoose;

const aboutusSchema = new Schema({ 
    aboutus:{
        type: String,
        required : true
    },
    date:{
        type : Date, 
        default : Date.now
    }
});
const aboutus = mongoose.model('tbl_aboutus',aboutusSchema);
aboutus.createIndexes();   // to make index in table (unique, primary,...)
module.exports = aboutus