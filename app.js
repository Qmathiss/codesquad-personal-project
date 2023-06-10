const express = require("express");
const morgan = require("morgan");
const path = require("path");
const methodOverride = require("method-override");
// const indexRoutes = require("./routes/index-routes");

const app = express();
const PORT = 3000;
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 