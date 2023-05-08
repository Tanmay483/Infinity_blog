const jwt = require('jsonwebtoken')
const User = require('../Modual/user.modal');
let scretKey = 'scretKey';

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const user = new User({
    vUserName:req.body.vUserName,
    vFirstName: req.body.vFirstName,
    vLastName: req.body.vLastName,
    vEmailId: req.body.vEmailId,
    vPassword:req.body.vPassword,
    vMobileNumber: req.body.vMobileNumber,
    tCreatedDate: req.body.tCreatedDate,
    tUpdatedDate: req.body.tUpdatedDate
  });

//   // POST

User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
  });
  jwt.sign({ user }, scretKey, { expiresIn: '300s' }, (err, token) => {
    res.json({
      token
    })
  })
};

// GET all  

exports.findAll = (req, res) => {
  const title = req.query.title;

  User.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user."
      });
    else res.send(data);
  });
};

// GET by Id

exports.findOne = (req, res) => {
  User.findById(req.params.uId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.uId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.uId
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

  User.updateById(
    req.params.uId,
    new User(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.uId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.uId
          });
        }
      } else res.send(data);
    }
  );
};

// DELETE Tutorial 

exports.delete = (req, res) => {
  User.remove(req.params.uId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.uId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with id " + req.params.uId
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });
};