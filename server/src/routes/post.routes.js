const express = require("express");
const multer = require("multer");
const postController = require("../controllers/post.controller");

const upload = multer({
  storage: multer.memoryStorage(),
});
const router = express.Router();

router.post("/upload", upload.single("music"), postController.createPost);
router.post("/album", postController.createAlbum);

module.exports = router;
