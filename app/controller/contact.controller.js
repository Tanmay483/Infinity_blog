const Contact = require('../models/contact.modual');

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const contact = new Contact({
    vFirstname: req.body.vFirstname,
    vLastname: req.body.vLastname,
    vEmail: req.body.vEmail,
    vContactNumber: req.body.vContactNumber,
    vAddress: req.body.vAddress,
  });

  //POST

  Contact.create(contact, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred .',
      });
    else {
      res.status(201).send({
        message: "successfully created",
        data: data
      });
    }
  });
};

// GET all  

exports.findAll = (req, res) => {
  const title = req.query.title;

  Contact.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user."
      });
    else {
      res.status(200).send({
        message: "successfully retrieved",
        data: data
      });
    }
  });
};

// delete
exports.delete = (req, res) => {
  Contact.remove(req.params.conId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found contact  with id ${req.params.conId}.`
        });
      } else {
        res.send({
          message: "Could not delete contact with id " + req.params.conId
        });
      }
    } else res.status(200).send({ message: `contact was deleted successfully!` });
  });
};