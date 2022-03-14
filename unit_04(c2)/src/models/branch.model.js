
const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
    {
        MasterId: {type: mongoose.Schema.Types.ObjectId,
            ref: "master",
            required: true},
        IFSC: {type: String, required: false},
        MICR: {type: Number, required: true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
module.exports = mongoose.model("branch",branchSchema);