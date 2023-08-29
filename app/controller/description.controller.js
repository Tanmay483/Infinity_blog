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
    tCreatedDate: req.body.tCreatedDate,
    tUpdatedDate:req.body.tUpdatedDate,
    Mode: req.body.Mode
  });

//   // POST

Description.create(description, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding the Description."
      });
    else {
      res.status(201).send({
        message: "Added description",
        data: data
      });
    }
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
      else {
        res.status(200).send({
          message: "successfully retrieved",
          data: data
        });
      }
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

// DELETE Description 

exports.delete = (req, res) => {
  const bId = req.params.bId; // Get the bId value from request parameters

  Description.remove(bId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Description with id ${bId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Description with id " + bId
        });
      }
    } else {
      res.send({ message: `Description was deleted successfully!` });
    }
  });
};

