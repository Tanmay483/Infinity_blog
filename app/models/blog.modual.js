const sql = require('../config/db');

// constructor
const Blog = function (blog) {
  this.cId = blog.cId;
  this.iParentCatID = blog.iParentCatID;
  this.vBlogTitle = blog.vBlogTitle;
  this.vBlogTitleSlug = blog.vBlogTitleSlug;
  this.vBlogDescription = blog.vBlogDescription;
  this.vBlogFeatureImage =  blog.vBlogFeatureImage.path.replace(/\\/g, '/');
  this.vBlogThumbnailImage =  blog.vBlogThumbnailImage.path.replace(/\\/g, '/');
  this.tCreatedDate = blog.tCreatedDate;
  this.tUpdatedDate = blog.tUpdatedDate;
  this.Mode = blog.Mode
};


// POST
Blog.create = (newblog, result) => {
  sql.query('INSERT INTO tbl_blogs SET ?', newblog, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log('created blog: ', { bId: res.insertId, ...newblog });
    result(null, { bId: res.insertId, ...newblog });
  });
};

//GET blog by id

Blog.findId = (vBlogTitleSlug, result) => {
  sql.query(`SELECT * FROM tbl_blogs WHERE vBlogTitleSlug = '${vBlogTitleSlug}'`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log('found blog: ', res);
      result(null, res[0]);
      return;
    }
    result({ kind: 'not_found' }, null);
  });
};

// GET all

Blog.getAll = (vCategorySlug, result) => {
  if (vCategorySlug) {
   let query = `SELECT * FROM tbl_categories WHERE vCategorySlug = '${vCategorySlug}' `;
    sql.query(query, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }
      else if(res.length === 0){
        result(null, {
          message : "Category Not Found"
        })
      }
      else{
        for (let i = 0; i < res.length; i++) {
          const category = res[i];
          let Query;
          if(category.iParentCatID === 0){
            Query = "SELECT * FROM tbl_blogs where iParentCatID = ?";
          }
          else{
            Query = "SELECT * FROM tbl_blogs where cId = ?"
          }
          sql.query(Query, category.cId, (err,resp) => {
            if(err){
              throw err;
            }
            else if(resp.length === 0){
              result(null,{
                message : "No result found"
              })
            }
            else{
              let categoryCount = 0;
              let subcategoryCount = 0;
              resp.forEach(categoryItem => {
                let subcategoryQuery = "SELECT * FROM tbl_categories WHERE cId = ?";
                sql.query(subcategoryQuery, categoryItem.cId, (err,subcategories) => {
                  if (err) {
                    throw err;
                  }
                  categoryItem.vSubCategoryName = subcategories[0].vCategoryName;
                  categoryItem.vCategorySlug = subcategories[0].vCategorySlug;
                  subcategoryCount++;
                  if (subcategoryCount === resp.length && categoryCount === resp.length) {
                    result(null, resp);
                  }
                  return;
                })
                let categoryQuery = "SELECT * FROM tbl_categories WHERE cId = ?"
                sql.query(categoryQuery, categoryItem.iParentCatID, (err, categories) => {
                  if(err){
                    throw err;
                  }
                  else{
                    console.log(categories)
                    categoryItem.vSubCategoryName = categories[0].vCategoryName;
                    categoryItem.vSubCategorySlug = categories[0].vCategorySlug;
                    categoryCount++;
                    if (subcategoryCount === resp.length && categoryCount === resp.length) {
                      result(null, resp);
                    }
                    return;
                  }
                })
              });
            }
          })
        } 
      }
    });
  } 
  else {
    let query = `SELECT * FROM tbl_blogs`;
    sql.query(query, (err,resp) => {
      if(err){
        throw err;
      }
      else{
        let categoryCount = 0;
        let subcategoryCount = 0;
        resp.forEach(categoryItem => {
          let subcategoryQuery = "SELECT * FROM tbl_categories WHERE cId = ?";
          sql.query(subcategoryQuery, categoryItem.cId, (err,subcategories) => {
            if (err) {
              throw err;
            }
            categoryItem.vSubCategoryName = subcategories[0].vCategoryName
            categoryItem.vSubCategorySlug = subcategories[0].vCategorySlug
            subcategoryCount++;
            if (subcategoryCount === resp.length && categoryCount === resp.length) {
              result(null, resp);
            }
            return;
          })
          let categoryQuery = "SELECT * FROM tbl_categories WHERE cId = ?"
          sql.query(categoryQuery, categoryItem.iParentCatID, (err, categories) => {
            if(err){
              throw err;
            }
            else{
              console.log(categories)
              categoryItem.vCategoryName = categories[0].vCategoryName;
              categoryItem.vCategorySlug = categories[0].vCategorySlug;
              categoryCount++;
              if (subcategoryCount === resp.length && categoryCount === resp.length) {
                result(null, resp);
              }
              return;
            }
          })
        });
      }
    })
  }
};



// DELET

Blog.remove = (bId, result) => {
  sql.query(`DELETE  FROM tbl_blogs WHERE bId = ${bId}`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: 'not_found' }, null);
      return;
    }
    console.log('deleted categorie with bId: ', bId);
    result(null, res);
  });
};

// get cid from category

Blog.description = (bId, result) => {
  sql.query(
    `SELECT * FROM tbl_blogs WHERE bId = ${bId}`,
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

      const blog = res[0];

      sql.query(
        `SELECT * FROM tbl_additional_blogs_desc WHERE bId = ${bId}`,
        (err, res) => {
          if (err) {
            console.log('Error:', err);
            result(err, null);
            return;
          }

          const additionalDesc = res.length > 0 ? res : [];

          const resultData = {
            blog: blog,
            additionalDesc: additionalDesc
          };

          console.log('found blog:', resultData);
          result(null, resultData);
        }
      );
    }
  );
};


module.exports = Blog;
