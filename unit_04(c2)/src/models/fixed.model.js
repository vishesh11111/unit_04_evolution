
const mongoose = require("mongoose");

const fixedSchema = new mongoose.Schema(
    {
        account_number: {type: Number, required: true},
        balance: {type: String, default: Date.now},
        startDate: {type: Date, default: Date},
        maturityDate: {type: Number, required: true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
module.exports = mongoose.model("fixed",fixedSchema);