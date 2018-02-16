const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticlesSchema = new Schema({
  headline: {
    type: String,
    required: true,
  },
  // url, a string, must be entered
  snippet: {
    type: String,
    required: true
  },
  // url, a string, must be entered
  web_url: {
    type: String,
    required: true
  },
  // date is just a string
  pub_date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  }
});

console.log("article schema created!")
const Articles = mongoose.model("Articles", ArticlesSchema);
module.exports = Articles;
