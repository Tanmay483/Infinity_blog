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

//insrt
exports.create = (req, res) => {
  if (!req.body) {
    res.send({
      message: "Content can not be empty!"
    });
  }

  const mode = new Mode({
    language: req.body.language,
  });

  Mode.create(mode, (err, data) => {
    if (err) {
      res.json({
        success: false,
        message: "failed to add mode"
      });
    } else {
      res.status(201).json({
        success: true,
        data: data,
        message: "mode add successfully"
      });
    }
  });
};

//update mode
exports.update = (req, res) => {
    const updatedData = {
      language: req.body.language || '',
    };

    Mode.update(req.params.Id, updatedData, (err, data) => {
      if (err) {
        console.error("Error updating data:", err);
        res.send({ message: "Failed to update data." });
        return;
      } else {
        res.status(200).json({
          status: 1,
          data: data
        });
      }
    });

};

// delete
exports.delete = (req, res) => {
  Mode.remove(req.params.Id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found mode  with id ${req.params.Id}.`
        });
      } else {
        res.send({
          message: "Could not delete mode with id " + req.params.Id
        });
      }
    } else res.status(200).send({ message: `mode was deleted successfully!` });
  });
};