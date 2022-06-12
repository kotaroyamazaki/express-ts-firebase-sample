import { Request, Response } from "express";
import multer from "multer";
import { uploadFS } from "./firebase";
const router = require("express").Router();

router.get("/", (req: Request, res: Response) => {
  res.render("./upload.ejs");
});

router.post("/upload", multer().single("file"), (req: any, res: Response) => {
  const fileBuf = req.file.buffer;
  const fileRef = `express-sample/${req.file.originalname}`;
  uploadFS(fileRef, fileBuf)
    .then(() => {
      res.redirect("/success");
    })
    .catch((err: any) => {
      res.send(err);
    });
});

router.get("/success", (req: Request, res: Response) => {
  res.send("upload success");
});

module.exports = router;
