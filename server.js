const express = require("express");
const path = require("path")
const app = express();

app.use(express.static("public"));
app.use(express.static("account"));

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "index.html"));

});

app.get("/login", (req, res) => {

    res.sendFile(path.join(__dirname + "/account/login.html"));

});

/*app.get("/forgot-pass", (req, res) => {



});*/

app.listen(5000)