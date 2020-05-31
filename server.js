const express = require("express");
const path = require("path");
// const serverStatic = require("server-static");

const app = express(path.join(__dirname, "dist"));
app.use();

const port = process.env.PORT || 8081;

app.listen(port);
