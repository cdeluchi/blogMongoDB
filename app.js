// const express = require("express");
// const app = express();
// const ejs = require("ejs");
// const template = require("./template.ejs");

// app.set("view engine", "ejs");
// app.engine("ejs", require("ejs").__express);

// app.listen(3000);
// app.get("/", (req, res) => {
//     // console.log("get in /");
//     // res.send("<p>home Page</p>");
//     res.render("index", { title: "Home" });
// });
// app.get("/about", (req, res) => {
//     // console.log("get in /");
//     // res.send("<p>about page</p>");
//     res.render("about", { title: "About" });
// });
// app.get("/blogs/create", (req, res) => {
//     res.render("create", { title: "Create a new blog" });
// });

// app.use((req, res) => {
//     res.render("404");
// });

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// const blogRoutes = require("./routes/blogRoutes");
const Blog = require("./models/blog");
const { result } = require("lodash");

const app = express();

const dbURI =
    "mongodb+srv://cdeluchi:mongodbcdeluchi@cdeluchi.lvgtt.mongodb.net/blogMongoDB?retryWrites=true&w=majority";
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// app.get("/add-blog", (req, res) => {
//     const blog = new Blog({
//         title: "new blog 2",
//         snippet: "about my new blog",
//         body: "more about this blog",
//     });
//     blog.save()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get("/all-blogs", (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get("/single-blog", (req, res) => {
//     Blog.findById("619fda58ee17d22451e7f4a5")
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// routes
app.get("/", (req, res) => {
    res.redirect("/blogs");
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a new blog" });
});
// blog routes
// app.use("/blogs", blogRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});
