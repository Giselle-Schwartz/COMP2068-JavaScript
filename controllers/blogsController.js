const Blog = require(`../models/blog`);

exports.index = (req, res) => {
    //access the model, find is like saying where in sql. if you do not give find params it is like a SELECT *
    Blog.find()
        .then(blogs => {
            res.render('blogs/index', {
                blogs: blogs,
                title: 'Archive'
            });
        })
        .catch(err => {
            console.error(`ERROR: ${err}`);
        });
};
exports.show = (req, res) => {
    Blog.findById(req.params.id)
        .then(blog => {
            res.render('blogs/show', {
                blog: blog,
                title: blog.title
            });
        })
        .catch(err => {
            console.error(`ERROR: ${err}`);
        });
};
exports.new = (req, res) => {
    res.render('blogs/new', {
        title: 'New Blog Post'
    });
};
//req is from user, res is from 
// for post only req.body, for get, req.params
exports.edit = (req, res) => {
    Blog.findById(req.params.id)
        .then(blog => {
            //interpolate?
            res.render('blogs/edit', {
                blog: blog,
                title: blog.title
            });
        })
        .catch(err => {
            console.error(`ERROR: ${err}`);
        });
};

exports.create = (req, res) => {
    Blog.create(req.body.blog)
    .then(() => {
        res.redirect('/blogs');
    })
    .catch(err => {
        console.error(`ERROR: ${err}`);
    });
};
//post redirect, get render
exports.update = (req, res) => {
    Blog.updateOne({
        _id: req.body.id
    }, req.body.blog, {
        runValidators: true
    })
    .then(() => {
        res.redirect(`/blogs/${reg.body.id}`);
    })
    .catch(err => {
        console.error(`ERROR: ${err}`);
    });
};
exports.destroy = (req, res) => {
    Blog.deleteOne({
        _id: req.body.id
    })
    .then(() => {
        res.redirect('/blogs')
    })
    .catch(err => {
        console.error(`ERROR: ${err}`);
    })
};

//later
exports.drafts = (req, res) => {};
exports.published = (req, res) => {};