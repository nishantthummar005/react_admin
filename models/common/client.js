const mongoose = require('mongoose');
const { Schema } = mongoose;

const clientSchema = new Schema({
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
const client = mongoose.model('tbl_client', clientSchema);
client.createIndexes();   // to make index in table (unique, primary,...)
module.exports = client