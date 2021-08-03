const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Show = new Schema(
  {
    title: { type: String },
    descript: { type: String },
    video: { type: String },
    image: { type: String },
    count: { type: Number, min: 0 },
    slug: { type: String, slug: "title", unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("data2", Show);