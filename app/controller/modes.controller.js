const Mode = require('../models/mode.modual');

// GET all  
exports.findAll = (req, res) => {

  Mode.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user."
      });
    else {
      res.status(200).send({
        message: "Mode retrieved successfully",
        user: data
      });
    }
  });
};

// GET by Id
exports.findOne = (req, res) => {
  Mode.findById(req.params.Id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Mode with id ${req.params.Id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Mode with id " + req.params.Id
        });
      }
    } else {
      res.status(200).send({
        message: "Mode retrieved successfully",
        user: data
      });
    }
  });
};
