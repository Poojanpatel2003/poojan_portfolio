const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Blog", blogSchema);