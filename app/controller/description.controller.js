const Description = require('../models/description.modual');


// Create and Save a new Description
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Description
  const description = new Description({
    bId	:req.body.bId,
    vBlogDescription: req.body.vBlogDescription,
    vBlogImage: req.file.path.replace(/\\/g,'/'),
    tCreatedDate: req.body.tCreatedDate,
    tUpdatedDate:req.body.tUpdatedDate,
  });

//   // POST

Description.create(description, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding the Description."
      });
    else res.send(data);
  });
};

// GET all  

exports.findAll = (req, res) => {
    const title = req.query.title;
  
    Description.getAll(title, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving description."
        });
      else res.send(data);
    });
  };

// GET by Id

exports.findOne = (req, res) => {
  Description.findById(req.params.bId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Description with id ${req.params.bId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving description with id " + req.params.bId
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

  Description.updateById(
    req.params.abId,
    new Description(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found description with id ${req.params.abId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating description with id " + req.params.abId
          });
        }
      } else res.send(data);
    }
  );
};

// DELETE Description 

exports.delete = (req, res) => {
  Description.remove(req.params.abId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Description with id ${req.params.abId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Description with id " + req.params.abId
        });
      }
    } else res.send({ message: `Description was deleted successfully!` });
  });
};