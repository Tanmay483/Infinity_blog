const sql = require('../config/db');

// constructor
const Mode = function (user) {

  this.language = user.language;
};


// GET by ID
Mode.findById = (Id, result) => {
  sql.query(`SELECT * FROM tbl_modes WHERE Id = ${Id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found Mode: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

//GET All
Mode.getAll = (result) => {
  let query = "SELECT * FROM tbl_modes";

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

module.exports = Mode;