const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')
require('dotenv').config();

connectToMongo();
const app = express()
app.use(cors())
const port = process.env.PORT || 4000

app.use(express.json());   // middleware for use of request body - If you want to use request body then you have to include it.

// Admin Auth Routes
app.use('/auth/admin/', require('./routes/auth/admin'));

// Common Page Routes
app.use('/api/aboutus/', require('./routes/common/aboutus'));
app.use('/api/banner/', require('./routes/common/banner'));
app.use('/api/blog/', require('./routes/common/blog'));
app.use('/api/category/', require('./routes/common/category'));
app.use('/api/client/', require('./routes/common/client'));
app.use('/api/contactus/', require('./routes/common/contactus'));
app.use('/api/gallery/', require('./routes/common/gallery'));
app.use('/api/privacy/', require('./routes/common/privacy'));
app.use('/api/review/', require('./routes/common/review'));
app.use('/api/subcategory/', require('./routes/common/subcategory'));
app.use('/api/team/', require('./routes/common/team'));
app.use('/api/terms/', require('./routes/common/terms'));
app.use('/api/video/', require('./routes/common/video'));

app.get('/', (req, res) => {
    res.send("Hello world")
})

// set frontend app
if (process.env.NODE_ENV === "production") {
    app.use(express.static("authorize/build/"))
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})