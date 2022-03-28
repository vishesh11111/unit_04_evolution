const express = require("express");

const router = express.Router();

const Product = require("../models/todo.model");
let authenticate = require("../middlewares/authenticate");

router.post("", authenticate, async(req,res)=>{
    req.body.userId = req.user._id
    try {
        const product = await Product.create(req.body);

        return res.status(200).send(product);

    } catch (error) {
        return res.status(500).send({msg: error.msg});

    }

});


router.get("", async(req, res)=>{
    try {
        const product = await Product.find().lean().exec();
        return res.status(200).send(product);

    } catch (error) {
        return res.status(500).send({msg : error.msg});

    }
});


router.patch("", async(req, res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.body, req.params.id,{
            new: true
        }).lean().exec();
        return res.status(200).send(product);

    } catch (error) {
        return res.status(500).send({msg : error.msg});

    }
});

router.delete("", async(req, res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(product);

    } catch (error) {
        return res.status(500).send({msg : error.msg});

    }
});

module.exports = router;