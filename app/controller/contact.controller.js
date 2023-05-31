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
    else res.send(data);
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
    else res.send(data);
  });
};