const express = require("express");
const admin = require("firebase-admin");
const bcrypt = require("bcrypt");
const path = require("path");
const mysql = require("mysql");

/////////// connect with the database ;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hazard",
  database: "ecomerce",
});
db.connect(function (err) {
  if (err) {
    console.log("can't connect");
  } else {
    console.log("Connected!");
  }
});

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
    let sql = "INSERT INTO users(username,email,password,seller) VALUES(?)";
    let sql2 = "SELECT email from users";
    let values = [username, email, password, seller];
    db.query(sql2, [], (err, result, fields) => {
      if (err) {
        console.log("can't execute select query");
        throw err;
      } else {
        console.log(result);
        for (i = 0; i < result.length; i++) {
          console.log(result[i].email);
          if (result[i].email == email) {
            console.log("user alredy exist ");
            try {
              return res.status(404).json({
                alert: "email already exist try another email",
              });
            } catch (err) {
              console.log("invalid email");
              console.log(err.message);
            }
          }
        }
        db.query(sql, [values]);
      }
    });
  }
  //jason
  //res.json("data recieved");
});

app.get("/singup", (req, res) => {
  res.sendFile(__dirname + "/public/singup.html");
});

///// 404 route

app.use((req, res) => {
  res.sendFile(__dirname + "/public/error404.html");
});

/////listening on port : 3000
app.listen(3000, function () {
  console.log("listening ....");
});
