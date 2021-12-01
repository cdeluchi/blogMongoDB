//blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const Blog = require("../models/blog");

const blog_index = (req, res) => {
    Blog.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.render("blogs/index", { blogs: result, title: "All blogs" });
        })
        .catch((err) => {
            console.log(err);
        });
};

const blog_details = (req, res) => {
    const id = req.params.id.trim(); // when you id is not working.. use, .trim() this will take off all the space from your code.
    Blog.findById(id)
        .then((result) => {
            res.render("blogs/details", {
                blog: result,
                title: "Blog Details",
            });
        })
        .catch((err) => {
            res.render("404", { title: "Blog not found" });
        });
};

const blog_create_get = (req, res) => {
    res.render("blogs/create", { title: "Create a new blog" });
};

const blog_create_post = (req, res) => {
    // console.log(req.body);
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect("/blogs");
        })
        .catch((err) => {
            console.log(err);
        });
};

const blog_delete = (req, res) => {
    const id = req.params.id.trim();
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: "/blogs" });
        })
        .catch((err) => {
            console.log(err);
        });
};
module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete,
};
