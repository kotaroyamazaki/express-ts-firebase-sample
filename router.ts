const router = require("express").Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  "mylogin",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    (
      username: string,
      password: string,
      done: (arg0: null, arg1: boolean) => any
    ) => {
      // ログイン処理本体
      // formから受け取ったusernameが"user"、passwordが"password"ならばログイン成功とする
      if (username === "user" && password === "password") {
        return done(null, !!username);
      }
      return done(null, false);
    }
  )
);

router.use(passport.initialize());

router.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

router.get("/login", (req: any, res: any) => {
  res.render("./login.ejs");
});

router.post(
  "/login",
  passport.authenticate("mylogin", {
    successRedirect: "/ok",
    failureRedirect: "/login",
    session: false,
  })
);

router.get("/ok", (req: any, res: any) => {
  res.render("./ok.ejs");
});

module.exports = router;
