const sql = require('../config/db');

// constructor
const Contact = function (contact) {

  this.vFirstname = contact.vFirstname;
  this.vLastname = contact.vLastname;
  this.vEmail = contact.vEmail;
  this.vContactNumber = contact.vContactNumber;
  this.vAddress = contact.vAddress;
};

// POST 
Contact.create = (newcontact, result) => {
  sql.query("INSERT INTO tbl_contact SET ?", newcontact, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created contact: ", { coId: res.insertId, ...newcontact });
    result(null, { coId: res.insertId, ...newcontact });
  });
};


//GET All

Contact.getAll = (title, result) => {
  let query = "SELECT * FROM tbl_contact";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};



module.exports = Contact;
