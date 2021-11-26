const express = require("express");

const router = express.Router();
const blogController = require("../controllers/blogController");

router.get("/", blogController.blog_index);

router.post("/", (req, res) => {
    // console.log(req.body);
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect("/blogs");
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get("/create", (req, res) => {
    res.render("create", { title: "Create a new blog" });
});

router.get("/:id", (req, res) => {
    const id = req.params.id.trim();
    Blog.findById(id)
        .then((result) => {
            res.render("details", { blog: result, title: "Blog Details" });
        })
        .catch((err) => {
            console.log(err);
        });
});
// when you id is not working.. use, .trim() this will take off all the space from your code.

router.delete("/:id", (req, res) => {
    const id = req.params.id.trim();
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: "/blogs" });
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;
