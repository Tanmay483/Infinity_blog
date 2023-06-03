const sql = require('../config/db');

// constructor
const Blog = function (blog) {
    this.cId = blog.cId;
    this.iParentCatID = blog.iParentCatID;
    this.vBlogTitle = blog.vBlogTitle;
    this.vBlogTitleSlug = blog.vBlogTitleSlug;
    this.vBlogDescription = blog.vBlogDescription;
    this.vBlogFeatureImage = "http://localhost:8080/"+blog.vBlogFeatureImage.path.replace(/\\/g,'/');
    this.vBlogThumbnailImage = "http://localhost:8080/"+blog.vBlogThumbnailImage.path.replace(/\\/g,'/');
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

Blog.getAll = (title, result) => {
    let query =
        'SELECT tbl_blogs.*,tbl_categories.vCategoryName,tbl_categories.vCategorySlug,tbl_categories.vCategoryImage,tbl_categories.iParentCatID as ParentId FROM tbl_blogs INNER JOIN tbl_categories ON tbl_blogs.cId = tbl_categories.cId ';

    sql.query(query, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(null, err);
            return;
        }

        console.log('Categories: ', res);
        result(null, res);
    });
};

//PUT

Blog.updateById = (bId, blog, result) => {
    sql.query(
        'UPDATE tbl_blogs SET cId=?,iParentCatID=?,vBlogTitle=?,vBlogDescription=?,vBlogFeatureImage=?,vBlogThumbnailImage=?,tCreatedDate=?,tUpdatedDate=? WHERE bId=?',
        [
            blog.cId,
            blog.iParentCatID,
            blog.vBlogTitle,
            blog.vBlogDescription,
            blog.vBlogFeatureImage,
            blog.vBlogThumbnailImage,
            blog.tCreatedDate,
            blog.tUpdatedDate,
            bId,
        ],
        (err, res) => {
            if (err) {
                console.log('error: ', err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                result({ kind: 'not_found' }, null);
                return;
            }

            console.log('updated blog: ', { bId: bId, ...blog });
            result(null, { bId: bId, ...blog });
        }
    );
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
