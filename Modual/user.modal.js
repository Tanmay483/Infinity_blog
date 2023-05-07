const sql = require('../config/db');
const jwt = require('jsonwebtoken')

// constructor
const User = function (user) {

  this.vFirstName = user.vFirstName;
  this.vLastName = user.vLastName;
  this.vEmailId = user.vEmailId;
  this.vMobileNumber = user.vMobileNumber;
  this.tCreatedDate = user.tCreatedDate;
  this.tUpdatedDate = user.tUpdatedDate;
  this.vUserName = user.vUserName;
  this.vPassword = user.vPassword
};

// POST 

User.create = (newUser, result) => {
  sql.query("INSERT INTO tbl_users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created tutorial: ", { uId: res.insertuId, ...newUser });
    result(null, { uId: res.insertuId, ...newUser });
  });
};

// GET by ID

User.findById = (uId, result) => {
  sql.query(`SELECT * FROM tbl_users WHERE uId = ${uId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found User: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

//GET All

User.getAll = (title, result) => {
  let query = "SELECT * FROM tbl_users";

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

//PUT

User.updateById = (uId, user, result) => {
  sql.query(
    "UPDATE tbl_users SET vUserName=?,vFirstName=?,vLastName=?,vEmailId=?,vPassword=?,vMobileNumber=?,tCreatedDate=?,tUpdatedDate=? WHERE uId=?",
    [user.vUserName, user.vFirstName, user.vLastName, user.vEmailId, user.vPassword, user.vMobileNumber, user.tCreatedDate, user.tUpdatedDate, uId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("User updated: ", { uId: uId, ...user });
      result(null, { uId: uId, ...user });
    }
  );
};

// DELET

User.remove = (uId, result) => {
  sql.query(`DELETE  FROM tbl_users WHERE uId = ${uId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted user with uId: ", uId);
    result(null, res);
  });
};



module.exports = User;
