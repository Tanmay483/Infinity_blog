const sql = require('../config/db');

// constructor
const Description = function (description) {

  this.bId = description.bId;
  this.vBlogDescription	 = description.vBlogDescription;
  this.tCreatedDate = description.tCreatedDate;
  this.tUpdatedDate = description.tUpdatedDate;
};

// POST 

Description.create = (newdescription, result) => {
  sql.query("INSERT INTO tbl_additional_blogs_desc SET ?", newdescription, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    
    console.log("created tutorial: ", { abId: res.insertabId, ...newdescription });
    result(null, { abId: res.insertabId, ...newdescription });
  });
};
// console.log(vBlogImage)

// GET by ID

Description.findById = (bId, result) => {
  sql.query(`SELECT * FROM tbl_additional_blogs_desc WHERE bId = ${bId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found description: ", res);
      result(null, res);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

//GET All

Description.getAll = (title, result) => {
  let query = "SELECT * FROM tbl_additional_blogs_desc";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("description: ", res);
    result(null, res);
  });
};

//PUT

Description.updateById = (abId, description, result) => {
  sql.query(
    "UPDATE tbl_additional_blogs_desc SET bId=?,vBlogDescription=?,vBlogImage=?,tCreatedDate=?,tUpdatedDate=? WHERE abId=?",
    [description.bId, description.vBlogDescription, description.vBlogImage,description.tCreatedDate, description.tUpdatedDate, abId],
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

      console.log("updated description: ", { abId: abId, ...description });
      result(null, { abId: abId, ...description });
    }
  );
};

// DELET
Description.remove = (bId, result) => {
  if (!bId) {
    result({ kind: "invalid_request" }, null);
    return;
  }

  const query = "DELETE FROM tbl_additional_blogs_desc WHERE bId = ?";
  sql.query(query, [bId], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Description with bId: ", bId);
    result(null, res);
  });
};



module.exports = Description;
