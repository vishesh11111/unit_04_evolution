
const mongoose = require("mongoose");

const MasterSchema = new mongoose.Schema(
    {
        // uerId: {type: mongoose.Schema.Types.ObjectId,
        //     ref: "user",
        //     required: true},
        userId: {type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: false},

        savingId : {type: mongoose.Schema.Types.ObjectId,
        ref: "saving",
        required: false},

        fixedId : {type:mongoose.Schema.Types.ObjectId,
        ref: "fixed",
        required: false},

        balance: {type: Number, required: true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
module.exports = mongoose.model("master",MasterSchema);