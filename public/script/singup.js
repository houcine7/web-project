//const { response } = require("express");

const btn = document.querySelector("#btn");

const username = document.querySelector("#userName");

const email = document.querySelector("#email");

const password = document.querySelector("#password");

const loader = document.querySelector(".loader");
let seller;
///////////////alert box
let alertbox = document.querySelector(".alert");
alertbox.style.display = "none";
const exitbtn = document.querySelector(".closebtn");

exitbtn.addEventListener("click", function () {
  alertbox.style.display = "none";
});

///////////
btn.addEventListener("click", function () {
  if (username.value.length < 4) {
    showMyAlert("enter your user name please");
  } else if ((email.value.length = 0)) {
    showMyAlert("enter your email please");
  } else if (password.value.length < 8) {
    showMyAlert("invalid password , should be 8 letters");
  } else {
    loader.style.display = "block";
    dataSender("/singup", {
      username: username.value,
      email: email.value,
      password: password.value,
      seller: false,
    });
  }
});

/// get the data and communicate with the server :request to the server and load the information in the webpages using fech(url ,options) methode js

const dataSender = function (path, data) {
  fetch(path, {
    method: "post",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      processMyData(response);
    });
};

//////////// function process the data

const processMyData = function (data) {
  setTimeout(function () {
    loader.style.display = "none";
  }, 2000);

  if (data.alert) {
    showMyAlert(data.alert);
  }
};

////////function Myalert to not block the page

const showMyAlert = function (msg) {
  let alertbox = document.querySelector(".alert");
  let alertmsg = document.querySelector(".errormsg");

  alertmsg.innerHTML = msg;
  alertbox.style.display = "inherit";
  console.log("cliiiiiiiiiiiiiicked");

  setTimeout(function () {
    alertbox.style.display = "none";
  }, 2000);
};
