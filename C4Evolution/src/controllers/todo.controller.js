const express = require("express");

const router = express.Router();

const todos = require("../models/todo.model");
let authenticate = require("../middlewares/authenticate");

router.post("", authenticate, async(req,res)=>{
    req.body.userId = req.user._id
    try {
        const todo = await todos.create(req.body);

        return res.status(200).send(todo);

    } catch (error) {
        return res.status(500).send({msg: error.msg});

    }

});


router.get("", async(req, res)=>{
    try {
        const todo = await todos.find().lean().exec();
        return res.status(200).send(todo);

    } catch (error) {
        return res.status(500).send({msg : error.msg});

    }
});


router.patch("/:id", async(req, res)=>{
    try {
        const todo = await todos.findByIdAndUpdate(req.body, req.params.id,{
            new: true
        }).lean().exec();
        return res.status(200).send(todo);

    } catch (error) {
        return res.status(500).send({msg : error.msg});

    }
});

router.delete("/:id", async(req, res)=>{
    try {
        const todo = await todos.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(todo);

    } catch (error) {
        return res.status(500).send({msg : error.msg});

    }
});

module.exports = router;
