const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
// const secrets = require("./secrets.json");

const { result } = require("lodash");
const { log } = require("console");
const { render } = require("ejs");

const app = express();

const dbURI =
    "mongodb+srv://cdeluchi:mongodbcdeluchi@cdeluchi.lvgtt.mongodb.net/blogMongoDB?retryWrites=true&w=majority";
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// routes
app.get("/", (req, res) => {
    res.redirect("/blogs");
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

// blog routes
app.use(blogRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});
