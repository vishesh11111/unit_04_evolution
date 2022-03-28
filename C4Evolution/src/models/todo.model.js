const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    title : {type: String, required: true},
},{
    versionKey: false,
    timestamps: true,
}) ;

module.exports = mongoose.model("todo", userSchema);