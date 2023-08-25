const sql = require('../config/db');

// constructor
const System = function (system) {

  this.vProjectName = system.vProjectName;
  this.vProjectLogo = system.vProjectLogo.path.replace(/\\/g,'/');
  this.vProjectLoginPageBgImage = system.vProjectLoginPageBgImage.path.replace(/\\/g,'/');
  this.vEmail = system.vEmail;
  this.vMobileNumber = system.vMobileNumber;
  this.vAddress	= system.vAddress;
  this.tCreatedDate	 = system.tCreatedDate;
};

// POST 

System.create = (newSystem, result) => {
  sql.query("INSERT INTO tbl_system SET ?", newSystem, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created system: ", { sId: res.insertsId, ...newSystem });
    result(null, { sId: res.insertsId, ...newSystem });
  });
};

// GET by ID

System.findById = (sId, result) => {
    sql.query(`SELECT * FROM tbl_system WHERE sId = ${sId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found system: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    });
  };

//GET All

System.getAll = (title, result) => {
  let query = "SELECT * FROM tbl_system";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("System: ", res);
    result(null, res);
  });
};

//PUT

System.updateById = (sId, system, result) => {
  sql.query(
    "UPDATE tbl_system SET vProjectName=?,vProjectLogo=?,vProjectLoginPageBgImage=?,vEmail=?,vMobileNumber=?,vAddress=?,tCreatedDate=? WHERE sId=?",
    [system.vProjectName, system.vProjectLogo, system.vProjectLoginPageBgImage, system.vEmail, system.vMobileNumber, system.vAddress, system.tCreatedDate,sId],
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

      console.log("updated system: ", { sId: sId, ...system });
      result(null, { sId: sId, ...system });
    }
  );
};

// DELET

System.remove = (sId, result) => {
  sql.query(`DELETE FROM tbl_system WHERE sId = ${sId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted system with sId: ", sId);
    result(null, res);
  });
};



module.exports = System;
