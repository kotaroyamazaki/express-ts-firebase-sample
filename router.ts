const router = require("express").Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
// const firebase = require("firebase");
// const firebaseui = require("firebaseui");

// const { initializeApp } = require("firebase/app");
// const firebaseConfig = {
//   apiKey: "AIzaSyAlzR2wCJ6bZ0IkoaOMwizgLMwJmVBMh2U",
//   authDomain: "toytoy-box.firebaseapp.com",
//   projectId: "toytoy-box",
//   storageBucket: "toytoy-box.appspot.com",
//   messagingSenderId: "772796561601",
//   appId: "1:772796561601:web:8286a5a5fde8225aa9bc40",
// };

// const fb = initializeApp(firebaseConfig);

// // Initialize the FirebaseUI Widget using Firebase.
// const ui = new firebaseui.auth.AuthUI(firebase.auth());
// const uiConfig = {
//   callbacks: {
//     // uiShown: function () {
//     //   document.getElementById("loader").style.display = "none";
//     // },
//   },
//   signInFlow: "popup",
//   signInSuccessUrl: "/",
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//   ],
// };

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

// router.get("/fb", (req: any, res: any) => {
//   res.render(ui.start("#firebaseui-auth-container", uiConfig));
// });

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
