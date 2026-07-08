const jwt = require("jsonwebtoken");
const postModel = require("../models/post.model");
const { uploadFile } = require("../services/storage.service");

async function createPost(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Authentication Required",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "artist") {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    const { title } = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString("base64"));

    const post = await postModel.create({
      uri: result.url,
      title,
      artist: decoded.id,
    });

    res.status(201).json({
      message: "Music created successfully",
      music: {
        id: post._id,
        uri: post.uri,
        title: post.title,
        artist: post.artist,
      },
    });
  } catch (e) {
    console.log(e);
    return res.status(401).json({
      message: "Authentication Required",
    });
  }
}

module.exports = { createPost };
