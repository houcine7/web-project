// import

// const select inputs
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btn = document.querySelector(".btn");

// select alert box
let alertbox = document.querySelector(".alert");
const exitbtn = document.querySelector(".closebtn");

/// handl events

// exit button
exitbtn.addEventListener("click", function () {
  alertbox.style.display = "none";
});

// login button

btn.addEventListener("click", function () {
  if (!email.value.length) {
    showMyAlert("please enter an email");
  } else if (password.value.length < 8) {
    showMyAlert("please enter a validz password should be 8 letters");
  } else {
    dataSender("/login", {
      email: email.value,
      password: password.value,
    });
  }
});

/////// datasender  fetch the data and send it to the server
const dataSender = function (path, data) {
  fetch(path, {
    method: "post",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      processMyData(data);
    });
};

// process the data commes from the sever as a promise
const processMyData = function (data) {
  if (data.alertpass) {
    console.log("password incorrect");
    showMyAlert(data.alertpass);
  } else if (data.db) {
    location.replace("/");
  } else if (data.email) {
    console.log("email does'nt exist please singup");
    showMyAlert("email does'nt exist please singup");
  }
};
////////function Myalert to not block the page

const showMyAlert = function (msg) {
  let alertbox = document.querySelector(".alert");
  let alertmsg = document.querySelector(".errormsg");

  alertmsg.innerHTML = msg;
  alertbox.style.display = "inherit";

  setTimeout(function () {
    alertbox.style.display = "none";
  }, 4000);
};

///////////
const msg = document.querySelector(".message a");
console.log(msg);

msg.addEventListener("click", () => {
  location.replace("/singup");
});
