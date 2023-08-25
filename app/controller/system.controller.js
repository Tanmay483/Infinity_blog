const System = require('../models/system.modual');


// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const system = new System({
    vProjectName: req.body.vProjectName,
    vProjectLogo: req.files[0],
    vProjectLoginPageBgImage: req.files[1],
    vEmail: req.body.vEmail,
    vMobileNumber: req.body.vMobileNumber,
    vAddress: req.body.vAddress,
    tCreatedDate: req.body.tCreatedDate,
  });

  // POST

  System.create(system, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the system."
      });
    else {
      res.status(201).send({
        message: "Successfully created",
        data: data
      });
    }
  });
};

// GET all  

exports.findAll = (req, res) => {
  const system = req.query.system;

  System.getAll(system, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving system."
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
  System.findById(req.params.sId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found system with id ${req.params.sId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving system with id " + req.params.sId
        });
      }
    } else {
      res.status(200).send({
        message: "successfully retrieved",
        data: data
      });
    }
  });
};

// DELETE Tutorial 

exports.delete = (req, res) => {
  System.remove(req.params.sId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.sId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete system with id " + req.params.sId
        });
      }
    } else res.send({ message: `system was deleted successfully!` });
  });
};