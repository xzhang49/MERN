const express = require("express")
const contact = require("./../models/contact")

const router = express.Router();

//create records
router.post("/contact", async (req, res) => {
    console.log(req.body)
    const data = new contact(req.body)
    const result = await data.save()

    if (!result) {
        res.json({
            status: "FAILED",
            message: "contact not record successfully...."
        })
    }
    else {
        res.json({
            status: "SUCCESS",
            message: "contact record successfully....",
            data: result
        })
    }
})

//get records 
router.get("/contact", async (req, res) => {
    try {
        const result = await contact.find()
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Not found record"
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Records found",
                data: result
            })
        }
    }
    catch (e) {
        console.log(e)
    }
})

//get single record
router.get("/contact/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await contact.findById(_id);
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Record not found on this ID"
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Records found",
                data: result
            })
        }
    }
    catch (e) {
        res.send(e)
    }
})
// update records 
router.put("/contact/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await contact.findByIdAndUpdate(_id,req.body,{new: true});
        console.log(result)
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Records not Update....",
                data: result
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Record is Updated successfully...",
                data: result
            })
        }
    }
    catch (e) {
        res.send(e)
    }
})
// Delete Records 
router.delete("/contact/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await contact.findByIdAndDelete(_id);
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Record not Delete..."
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Record is Delete successfully..."
            })
        }
    }
    catch (e) {
        res.send(e)
    }
})


module.exports = router