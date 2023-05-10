const sql = require('../config/db');

// constructor
const Blog = function (blog) {

    this.cId = blog.cId;
    this.iParentCatID = blog.iParentCatID;
    this.vBlogTitle = blog.vBlogTitle;
    this.vBlogDescription = blog.vBlogDescription;
    this.vBlogFeatureImage = blog.vBlogFeatureImage;
    this.vBlogThumbnailImage = blog.vBlogThumbnailImage;
    this.tCreatedDate = blog.tCreatedDate;
    this.tUpdatedDate = blog.tUpdatedDate;
};

// POST 

Blog.create = (newblog, result) => {
    sql.query("INSERT INTO tbl_blogs SET ?", newblog, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created categories: ", { bId: res.insertbId, ...newblog });
        result(null, { bId: res.insertbId, ...newblog });
    });
};



//GET blog by id 

Blog.findId = (bId, result) => {
    sql.query(`SELECT * FROM tbl_blogs WHERE bId = ${bId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found blog: ", res);
            result(null, res);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

// GET all

Blog.getAll = (title, result) => {
    let query = "SELECT tbl_blogs.*,tbl_categories.vCategoryName,tbl_categories.vCategorySlug,tbl_categories.vCategoryImage,tbl_categories.iParentCatID as ParentId FROM tbl_blogs INNER JOIN tbl_categories ON tbl_blogs.cId = tbl_categories.cId ";

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

Blog.updateById = (bId, blog, result) => {
    sql.query(
        "UPDATE tbl_blogs SET cId=?,iParentCatID=?,vBlogTitle=?,vBlogDescription=?,vBlogFeatureImage=?,vBlogThumbnailImage=?,tCreatedDate=?,tUpdatedDate=? WHERE bId=?",
        [blog.cId, blog.iParentCatID, blog.vBlogTitle,blog.vBlogDescription, blog.vBlogFeatureImage,blog.vBlogThumbnailImage,blog.tCreatedDate,blog.tUpdatedDate, bId],
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

            console.log("updated categories: ", { bId: bId, ...blog });
            result(null, { bId: bId, ...blog });
        }
    );
};

// DELET

Blog.remove = (bId, result) => {
    sql.query(`DELETE  FROM tbl_blogs WHERE bId = ${bId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted categorie with bId: ", bId);
        result(null, res);
    });
};

// get cid from category

Blog.category = (cId, result) => {
    sql.query(`SELECT tbl_blogs.*,tbl_categories.vCategoryName,tbl_categories.vCategorySlug,tbl_categories.vCategoryImage,tbl_categories.iParentCatID as ParentId FROM tbl_blogs INNER JOIN tbl_categories ON tbl_blogs.cId = tbl_categories.cId WHERE tbl_blogs.cId = ${cId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found blog: ", res);
            result(null, res);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

module.exports = Blog;