
const express = require("express");

const User = require("../models/branch.model");

const router = express.Router();

router.get("", async (req, res) => {
    try {
        const usrs = await User.find()
        .populate({path: "MasterId", select:{_id: 0},
         populate:{path:"userId"},
         populate:{path: "savingId"},
         populate:{path: "fixedId"}
    })
        .lean().exec();
        return res.status(200).send({ contomer: usrs });
    } catch (error) {
        return res
            .status(500)
            .send({ massage: error.massage });
    }
});

router.post("", async (req, res) => {
    try {
        const usrs = await User.create(req.body)
            .lean().exec();
        return res.status(200).send({ contomer: usrs });
    } catch (error) {
        return res
            .status(500)
            .send({ massage: error.massage });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const usrs = await User.find(req.params.id)
        .populate({path: "MasterId", select:{_id: 0},
        populate:{path:"userId"},
        populate:{path: "savingId"},
        populate:{path: "fixedId"}})
        .lean().exec();
        return res.status(200).send({ contomer: usrs });
    } catch (error) {
        return res
            .status(500)
            .send({ massage: error.massage });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const usrs = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        }).lean().exec();
        return res.status(200).send({ contomer: usrs });
    } catch (error) {
        return res
            .status(500)
            .send({ massage: error.massage });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const usrs = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send({ contomer: usrs });
    } catch (error) {
        return res
            .status(500)
            .send({ massage: error.massage });
    }
});

module.exports = router;
