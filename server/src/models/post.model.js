const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  uri: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;
