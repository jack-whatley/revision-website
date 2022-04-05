const express = require("express");
const path = require("path")
const app = express();

app.use(express.static("public"));
app.use(express.static(".account"));
app.use(express.static(".subjects"));

app.get("/", (req, res) => {

    res.redirect("/home");

});

app.get("/home", (req, res) => {

    res.sendFile(path.join(__dirname, "index.html"));

});

app.get("/login", (req, res) => {

    res.sendFile(path.join(__dirname + "/.account/login.html"));

});

app.get("/forgot-pass", (req, res) => {

    res.sendFile(path.join(__dirname + "/.account/forgot.html"));

});

app.get("/subjects", (req, res) => {

    res.sendFile(path.join(__dirname + "/.subjects/subjects.html"));

});

app.listen(5000)