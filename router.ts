const router = require("express").Router();

import { Request, Response } from "express";

router.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

router.get("/upload", (req: Request, res: Response) => {
  res.render("./upload.ejs");
});

// import { getStorage, ref, uploadBytes } from "firebase/storage";

// const storage = getStorage();
// const storageRef = ref(storage, "express-sample");
// const os = require("os");
// const multer = require("multer");
// const upload = multer({ dest: os.tmpdir() });

// 'file' comes from the Blob or File API

// router.post("/upload", (req: any, res: Response) => {
//   console.log(req.file);

//   uploadBytes(storageRef.bucket., req.file).then((snapshot) => {
//     console.log("Uploaded a blob or file!");
//   });
//   res.send("uploaded");
// });

module.exports = router;
