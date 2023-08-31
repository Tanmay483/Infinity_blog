const sql = require('../config/db');

// constructor
const Mode = function (mode) {
  this.language = mode.language;
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

// insert
Mode.create = (mode, result) => {
  sql.query("INSERT INTO tbl_modes SET ?", mode, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created mode: ", { Id: res.insertId, ...mode });
    result(null, { Id: res.insertId, ...mode });
  });
};

//update mode
Mode.update = (Id, mode, result) => {
  let query = `UPDATE tbl_modes SET language = ? WHERE id = ?`
  const queryParams = [
    mode.language,
    Id
  ]
  sql.query(query, queryParams, (err, res) => {
    if (err) {
      throw err
    }
    if (res.affectedRows == 0) {
      result("data not found with id " + Id)
    }
    else {
      console.log("Data Updated Scessfully", { Id: Id, res })
      result(null, "Data Updated Scessfully", { Id: Id, res })
    }
  })

}

// DELET
Mode.remove = (Id, result) => {
  sql.query(`DELETE  FROM tbl_modes WHERE Id = ${Id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted ad with Id: ", Id);
    result(null, res);
  });
};
module.exports = Mode;