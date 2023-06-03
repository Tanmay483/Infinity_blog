const Category = require('../models/category.modual');

// Create and Save a new category
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a category
  const category = new Category({
     vCategoryName : req.body.vCategoryName,
     vCategorySlug : req.body.vCategorySlug,
     iParentCatID : req.body.iParentCatID,
     vCategoryImage : req.file.path.replace(/\\/g,'/'),
     tCreatedDate : req.body.tCreatedDate,
     tUpdatedDate : req.body.tUpdatedDate,
  });

// POST

Category.create(category, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Categories."
      });
    else res.send(data);
  });
};

// GET all  categories

exports.findAll = (req, res) => {
  const title = req.query.title;

  Category.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Categories."
      });
    else res.send(data);
  });
};

//GET sub category

exports.findParentId = (req, res) => {
  Category.findParentId(req.params.iParentCatID, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Categories with id ${req.params.iParentCatID}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Categories with iParentCatID " + req.params.iParentCatID
          });
        }
      } else res.send(data);
    });
  };

// PUT 

exports.update = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Category.updateById(
    req.params.cId,
    new Category(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Categories with id ${req.params.cId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Categories with id " + req.params.cId
          });
        }
      } else res.send(data);
    }
  );
};

// DELETE category 

exports.delete = (req, res) => {
  Category.remove(req.params.cId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Categories with id ${req.params.cId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Categories with id " + req.params.cId
        });
      }
    } else res.send({ message: `Categories was deleted successfully!` });
  });
};

// get all sub category
exports.subAll = (req, res) => {
  const title = req.query.title;

  Category.subAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Categories."
      });
    else res.send(data);
  });
};