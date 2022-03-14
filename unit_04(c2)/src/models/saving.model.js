
const mongoose = require("mongoose");

const savingSchema = new mongoose.Schema(
    {
        // uerId: {type: mongoose.Schema.Types.ObjectId,
        //     ref: "user",
        //     required: true},
        account_number: {type: Number, required: true},
        balance: {type: Number, required: true},
        intrestRate: {type: Number, required: false},
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
module.exports = mongoose.model("saving",savingSchema);