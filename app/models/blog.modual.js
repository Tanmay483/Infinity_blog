const sql = require('../config/db');

// constructor
const Blog = function (blog) {
  this.cId = blog.cId;
  this.iParentCatID = blog.iParentCatID;
  this.vBlogTitle = blog.vBlogTitle;
  this.vBlogTitleSlug = blog.vBlogTitleSlug;
  this.vBlogDescription = blog.vBlogDescription;
  this.vBlogFeatureImage = "http://localhost:8080/" + blog.vBlogFeatureImage.path.replace(/\\/g, '/');
  this.vBlogThumbnailImage = "http://localhost:8080/" + blog.vBlogThumbnailImage.path.replace(/\\/g, '/');
  this.tCreatedDate = blog.tCreatedDate;
  this.tUpdatedDate = blog.tUpdatedDate;
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
      result(null, res);
      return;
    }
    result({ kind: 'not_found' }, null);
  });
};

// GET all

Blog.getAll = (vBlogTitleSlug, result) => {
  let query;
  if (vBlogTitleSlug) {
    query = `SELECT * FROM tbl_blogs WHERE vBlogTitleSlug = '${vBlogTitleSlug}' `;
  } else {
    query = `SELECT * FROM tbl_blogs`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }
    const response = [];
    let completedBlogs = 0;
    for (let i = 0; i < res.length; i++) {
      const blog = res[i];
      // Retrieve categories for each blog
      let categoryQuery = 'SELECT vCategoryName, vCategorySlug FROM `tbl_categories` WHERE cId = ?';
      sql.query(categoryQuery, blog.cId, (err, categoryRes) => {
        if (err) {
          console.log('error: ', err);
          result(null, err);
          return;
        }
        // Retrieve subcategory
        let additionalFieldsQuery = 'SELECT vCategoryName as vSubCategoryName, vCategorySlug AS vSubCategorySlug FROM `tbl_categories` WHERE cId   = ?';
        sql.query(additionalFieldsQuery, blog.iParentCatID, (err, additionalFieldsRes) => {
          if (err) {
            console.log('error: ', err);
            result(null, err);
            return;
          }
          // add SubCategory
          let CatName = '';
          let CatSlug = '';
          let SubCatName = '';
          let SubCatSlug = '';
          if (blog.iParentCatID == 0) {
            CatName = categoryRes[0].vCategoryName;
            CatSlug = categoryRes[0].vCategorySlug;
            SubCatName = '';
            SubCatSlug = '';
          } else {
            if (categoryRes.length === 0) {
              console.log('cId not found in tbl_categories');
            } else {
              SubCatName = categoryRes[0].vCategoryName;
              SubCatSlug = categoryRes[0].vCategorySlug;
            }

            if (additionalFieldsRes.length === 0) {
              console.log('cId not found in tbl_categories for subcategory');
            } else {
              CatName = additionalFieldsRes[0].vSubCategoryName;
              CatSlug = additionalFieldsRes[0].vSubCategorySlug;
            }
          }
          const blogWithCategoriesAndFields = {
            ...blog,
            vCategoryName: CatName,
            vCategorySlug: CatSlug,
            vSubCategoryName: SubCatName,
            vSubCategorySlug: SubCatSlug
          };

          response.push(blogWithCategoriesAndFields);
          completedBlogs++;
          // Check if all blogs have been processed
          if (completedBlogs === res.length) {
            console.log('Response:', response);
            result(null, response);
          }
        });
      });
    }
  });
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
