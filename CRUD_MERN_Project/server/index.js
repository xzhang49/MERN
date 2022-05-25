const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const ContactModel = require("./models/Contact");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb://localhost:27017/contact", 
    {
        useNewUrlParser: true,
    }
);

app.post("/insert", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const contact = new ContactModel({ name: name, email: email, phone: phone });

    try {
        await contact.save();
        res.send("inserted data");
    } catch(err) {
        console.log(err);
    }
});

app.get("/read", async (req, res) => {
    ContactModel.find({}, (err, result) => {
        if(err) {
            res.send(err);
        }

        res.send(result);
    });
});

app.put("/update", async (req, res) => {
    const newName = req.body.newName;
    const newEmail = req.body.newEmail;
    const newPhone = req.body.newPhone;
    const id = req.body.id;

    try {
        await ContactModel.findById(id, (err, updatedContact) => {
            updatedContact.name = newName;
            updatedContact.email = newEmail;
            updatedContact.phone = newPhone;
            updatedContact.save();
            res.send("update");
        });
    } catch(err) {
        console.log(err);
    }
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    
    await ContactModel.findByIdAndRemove(id).exec();
    res.send("deleted");

});

app.listen(3001, () => {
    console.log('Server running on port 3001...');
});