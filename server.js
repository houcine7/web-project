const express = require("express");
const admin = require("firebase-admin");
const bcrypt = require("bcrypt");
const path = require("path");

/////////
let pathstat = path.join(__dirname, "public");
//////int express
const app = express();
app.use(express.json());
app.use(express.static(__dirname));
app.use(express.static(pathstat));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  console.log("geeeeeeeeeeeeeeeeet");
});

////////// sing up route
app.post("/singup", (req, res) => {
  //get the data
  let { username, email, password, seller } = req.body;

  console.log(username);
  console.log(email);
  console.log(password);
  console.log(seller);
  //validate the data in back-end also

  if (username.length < 3) {
    return res.json({ alert: "invalid name ,name should be 4 letters" });
  } else if (!email.length) {
    return res.json({ alert: "enter an email " });
  } else if (password.length < 8) {
    return res.json({ alert: "invalid name ,name should be 4 letters" });
  } else {
    ///stor the form data to my database
    console.log("the data is good to go to the database");
  }
  //jason
  res.json("data recieved");
});

app.get("/singup", (req, res) => {
  res.sendFile(__dirname + "/public/singup.html");
});

///// 404 route
app.get("/error404", (req, res) => {
  res.sendFile(__dirname + "/public/error404.html");
});

app.use((req, res) => {
  res.redirect("error404");
});

/////listening on port : 3000
app.listen(3000, function () {
  console.log("listening ....");
});
