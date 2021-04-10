const express = require('express');
var mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const passport = require('passport');
const app = express()
const port = 3000

var userLogin = require('./userLogin');

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/database2")
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log("Error is ", err.message);
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get('/Contact.html', (req, res) => {
  res.sendFile(__dirname + "/Contact.html")
})

app.get('/About.html', (req, res) => {
  res.sendFile(__dirname + "/About.html")
})

app.get('/Locate.html', (req, res) => {
  res.sendFile(__dirname + "/Locate.html")
})

app.get('/Donate.html', (req, res) => {
  res.sendFile(__dirname + "/Donate.html")
})

app.get('/Volunteer.html', (req, res) => {
  res.sendFile(__dirname + "/Volunteer.html")
})

app.get('/login.html', (req, res) => {
  res.sendFile(__dirname + "/login.html")
})

app.get('/Register.html', (req, res) => {
  res.sendFile(__dirname + "/Register.html")
})

app.post("/Register.html", async (req, res) => {
  var newUser = new User({
    email: req.body.email,
    password: req.body.password,
    signUpAs : req.body.signUpAs,
    name : req.body.name,
    nameOfOrganisation :req.body.nameOfOrganisation, 
    phone : req.body.phone,
    pincode : req.body.PinCode,
  });
  await newUser
    .save()
    .then(() => {
      //res.status(200).send(newUser);
      res.redirect('/');
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
    console.log(newUser);
    console.log("Registered Successfully");
});

app.post("/login.html", async (req, res) => {
  var newUser = {};
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  console.log(newUser)
  await User.findOne({ email: newUser.email })
    .then(profile => {
      if (!profile) {
        res.send("User not exist");
        console.log("User does not exist");
      } else {
        if (profile.password == newUser.password) {
          res.send("User authenticated");
          console.log("Authenticated");
        } else {
          res.send("User Unauthorized Access");
          console.log("Unauthorized");
        }
      }
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
