const mongoose = require('mongoose');
const mongoCloudUri = "mongodb+srv://nishantthummar:hello1232@cluster0.aia2uat.mongodb.net/db_mainadmin?retryWrites=true&w=majority"
const connectToMongo = () => {
    mongoose.connect(mongoCloudUri, () => {
        console.log("Connected to mongoDB successfully.")
    })
}
module.exports = connectToMongo
