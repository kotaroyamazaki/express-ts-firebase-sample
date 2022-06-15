import { Request, Response } from "express";
import multer from "multer";
import { uploadFS } from "./firebase";
const pgp = require("pg-promise")(/* options */);
const connection = {
  host: "localhost",
  port: 5432,
  database: "tocre",
  user: "postgres",
  password: "",
};
const db = pgp(connection);
const router = require("express").Router();

router.get("/", (req: Request, res: Response) => {
  res.render("./upload.ejs");
});

router.post("/upload", multer().single("file"), (req: any, res: Response) => {
  const fileBuf = req.file.buffer;
  const fileRef = `${process.env.UPLOAD_BUCKE}/${req.file.originalname}`;
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

router.get("/users/1", (req: Request, res: Response) => {
  db.one("SELECT * FROM users WHERE id=$1", [1])
    .then((data: any) => {
      res.send(data);
    })
    .catch((error: any) => {
      console.log("ERROR:", error);
    });
});

module.exports = router;
