const mongoose = require('mongoose');
const { Schema } = mongoose;

const privacySchema = new Schema({ 
    privacy:{
        type: String,
        required : true
    },
    date:{
        type : Date, 
        default : Date.now
    }
});
const privacy = mongoose.model('tbl_privacy',privacySchema);
privacy.createIndexes();   // to make index in table (unique, primary,...)
module.exports = privacy