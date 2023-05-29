const Blog = require('../models/blog.modual');

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!',
        });
    }

    // Create a Tutorial
    const blog = new Blog({
        cId: req.body.cId,
        iParentCatID: req.body.iParentCatID,
        vBlogTitle: req.body.vBlogTitle,
        vBlogTitleSlug: req.body.vBlogTitleSlug,
        vBlogDescription: req.body.vBlogDescription,
        vBlogFeatureImage: 'hello',
        vBlogThumbnailImage: 'hello',
        tCreatedDate: req.body.tCreatedDate,
        tUpdatedDate: req.body.tUpdatedDate,
    });
    // POST

    Blog.create(blog, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while creating the blog.',
            });
        else res.send(data);
    });
};

// GET all  categories

exports.findAll = (req, res) => {
    const title = req.query.title;

    Blog.getAll(title, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while retrieving Categories.',
            });
        else res.send(data);
    });
};

//GET by blog title

exports.findId = (req, res) => {
    Blog.findId(req.params.vBlogTitleSlug, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Not found blog with Title ${req.params.vBlogTitleSlug}.`,
                });
            } else {
                res.status(500).send({
                    message: 'Error retrieving blog with Title ' + req.params.vBlogTitleSlug,
                });
            }
        } else res.send(data);
    });
};

// PUT

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!',
        });
    }

    console.log(req.body);

    Blog.updateById(req.params.bId, new Blog(req.body), (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Not found blog with id ${req.params.bId}.`,
                });
            } else {
                res.status(500).send({
                    message: 'Error updating blog with id ' + req.params.bId,
                });
            }
        } else res.send(data);
    });
};

// DELETE Tutorial

exports.delete = (req, res) => {
    Blog.remove(req.params.bId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Not found blog with id ${req.params.bId}.`,
                });
            } else {
                res.status(500).send({
                    message: 'Could not delete blog with id ' + req.params.bId,
                });
            }
        } else res.send({ message: `blog was deleted successfully!` });
    });
};

// get cid category
exports.description = (req, res) => {
    Blog.description(req.params.bId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Not found blog with id ${req.params.bId}.`,
                });
            } else {
                res.status(500).send({
                    message: 'Error retrieving blog with Id ' + req.params.bId,
                });
            }
        } else res.send(data);
    });
    
};
