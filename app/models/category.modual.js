const sql = require('../config/db');

// constructor
const Category = function (category) {

  this.vCategoryName = category.vCategoryName;
  this.vCategorySlug = category.vCategorySlug;
  this.vCategoryImage = "http://localhost:8080/" + category.vCategoryImage;
  this.iParentCatID = category.iParentCatID;
  this.tCreatedDate = category.tCreatedDate;
  this.tUpdatedDate = category.tUpdatedDate;
};

// POST 

Category.create = (newCategory, result) => {
  sql.query("INSERT INTO tbl_categories SET ?", newCategory, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created categories: ", { uId: res.insertcId, ...newCategory });
    result(null, { cId: res.insertcId, ...newCategory });
  });
};



//GET sub category 

Category.findParentId = (iParentCatID, result) => {
  sql.query(`SELECT * FROM tbl_categories WHERE iParentCatID = ${iParentCatID}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found Category: ", res);
      result(null, res);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

//GET ParentCatagory

Category.getAll = (title, result) => {
  let query = "SELECT * FROM tbl_categories WHERE iParentCatID = 0";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Categories: ", res);
    result(null, res);
  });
};

//PUT

Category.updateById = (cId, category, result) => {
  sql.query(
    "UPDATE tbl_categories SET vCategoryName=?,vCategorySlug=?,vCategoryImage=?,iParentCatID=?,tCreatedDate=?,tUpdatedDate=? WHERE cId=?",
    [category.vCategoryName, category.vCategorySlug, category.vCategoryImage, category.iParentCatID, category.tCreatedDate, category.tUpdatedDate, cId],
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

      console.log("updated categories: ", { cId: cId, ...category });
      result(null, { cId: cId, ...category });
    }
  );
};

// DELET

Category.remove = (cId, result) => {
  sql.query(`DELETE  FROM tbl_categories WHERE cId = ${cId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted categorie with cId: ", cId);
    result(null, res);
  });
};

// get all sub category

Category.subAll = (title, result) => {
  let query = "SELECT * FROM tbl_categories WHERE iParentCatID != 0";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Categories: ", res);
    result(null, res);
  });
};

// get category and subcategory

Category.description = (iParentCatID, result) => {
  sql.query(
    `SELECT cId , vCategoryName, vCategorySlug FROM tbl_categories WHERE iParentCatID = 0`,
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      if (res.length === 0) {
        console.log('data not found');
        result('error', null);
        return;
      }

      const categories = res;

      categories.forEach((category, index) => {
        sql.query(
          `SELECT cId , vCategoryName, vCategorySlug FROM tbl_categories WHERE iParentCatID = ${category.cId}`,
          (err, res) => {
            if (err) {
              console.log('Error:', err);
              result(err, null);
              return;
            }

            categories[index].subCategories = res || [];

            // Check if this is the last category 
            if (index === categories.length - 1) {
              console.log('found categories:', categories);
              result(null, categories);
            }
          }
        );
      });
    }
  );
};

module.exports = Category;