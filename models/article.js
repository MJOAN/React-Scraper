const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Article = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  snippet: String,
  saved: Boolean,
  date: { type: Date, default: Date.now }
});

const Article = mongoose.model("Article", Article);

module.exports = Article;
