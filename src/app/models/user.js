const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema(
  {
    userName: { type: String },
    password: { type: String },
    fullName: { type: String },
    role: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", User);
