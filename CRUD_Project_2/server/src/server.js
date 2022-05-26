const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const contact = require("./Routers/contactRouter");

const app = express();
const port = process.env.PORT || 8000;

const db = "mongodb://localhost:27017/contact";
mongoose.connect(db).then(() => {
    console.log("connection is successfully setup..");
}).catch((e)=>{
    console.log(e);
    console.log("connection is not build...");
});

app.use(express.json());
app.use(cors());

app.use(contact);

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
});