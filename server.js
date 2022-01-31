const express = require("express");
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
});

////////// sing up route POST
app.post("/singup", (req, res) => {
  //get the data
  let { username, email, password, seller } = req.body;

  // console.log(username);
  // console.log(email);
  // console.log(password);
  // console.log(seller);
  //validate the data in back-end also

  if (username.length < 3) {
    return res.json({ alert: "invalid name ,name should be 4 letters" });
  } else if (!email.length) {
    return res.json({ alert: "enter an email " });
  } else if (password.length < 8) {
    return res.json({ alert: "invalid name ,password should be 8 letters" });
  } else {
    ///stor the form data to my database
    let sql = "INSERT INTO users(username,email,password,seller) VALUES(?)";
    let sql2 = "SELECT email from users";
    let values = [username, email, password, seller];
    db.query(sql2, [], (err, result, fields) => {
      if (err) {
        console.log("can't execute select query");
        throw err;
      } else {
        for (i = 0; i < result.length; i++) {
          //console.log(result[i].email);
          if (result[i].email == email) {
            console.log("user already exist ");

            try {
              return res.json({
                alert: "email already exist try another email",
              });
            } catch (err) {
              console.log(err.message);
            }
          }
        }
        db.query(sql, [values]);
        return res.json({ db: "saved in data base" });
      }
    });
  }
  //jason
  //res.json("data recieved");
});

//LOGIN ROUES POST
app.post("/login", (req, res) => {
  let { email, password } = req.body;
  console.log(email);
  console.log(password);

  if ((email.length = 0)) {
    return res.json({ alert: "invalide email" });
  } else if (password.length < 8) {
    return res.json({ alert: "invalid password" });
  } else {
    console.log("check the database if the user exist or not");
    // check the database if the user exist or not
    let sql = `SELECT email from users where email="${email}"`;
    db.query(sql, [], (err, result, fields) => {
      if (err) {
        console.log("can't execute query ");
        throw err;
      } else {
        if (result.length === 1) {
          console.log("user exist in db");
          let sql2 = `SELECT password from users where email="${email}"`;
          db.query(sql2, [], (err, result, fields) => {
            if (err) {
              console.log("can't exucute query 2");
              console.log(err.message);
              throw err;
            } else {
              if (result[0].password === password) {
                console.log("password correct");
                return res.status(200).json({ db: "correct password" });
              } else {
                console.log("password incorrect");
                try {
                  return res.status(400).json({
                    alertpass: " password incorrect try again",
                  });
                } catch (err) {
                  console.log(err.message);
                }
              }
            }
          });
        } else if (result.length === 0) {
          return res.json({ email: "not exist" });
        }
      }
    });
  }
});

//login routes
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

////singup reoutes
app.get("/singup", (req, res) => {
  res.sendFile(__dirname + "/public/singup.html");
});
/////// product routes
app.get("/product", (req, res) => {
  res.sendFile(__dirname + "/public/product.html");
});

///// 404 route

app.use((req, res) => {
  res.sendFile(__dirname + "/public/error404.html");
});

/////listening on port : 3000
app.listen(3000, function () {
  console.log("listening ....");
});
