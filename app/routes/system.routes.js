const multer = require('../imageController/system.imageController')
const conn = require('../config/db')
module.exports = app => {
    const system = require('../controller/system.controller');
  
    var router = require("express").Router();
  
    // Create a new blog
    router.post("/",multer, system.create);
  
    // Retrieve all blog
    router.get("/", system.findAll);  

    //Retrive blog by id
    router.get("/:sId",system.findOne)  
  
    // Update a blog with id
    router.put("/:sId", multer, (req, res) => {

        let sId = req.params.sId
        const vProjectName = req.body.vProjectName
        const vEmail = req.body.vEmail;
        const vMobileNumber = req.body.vMobileNumber;
        const vAddress = req.body.vAddress;
        const vProjectLogo =  req.files[0].path.replace(/\\/g, '/');
        const vProjectLoginPageBgImage =  req.files[0].path.replace(/\\/g, '/');;
        const tCreatedDate = req.body.tCreatedDate; 
        
        var sql = "UPDATE `tbl_system` SET `vProjectName`='" + vProjectName + "',`vProjectLogo`='" + vProjectLogo + "',`vProjectLoginPageBgImage` = '"+vProjectLoginPageBgImage+"' ,`vEmail`= '" + vEmail + "',`vMobileNumber`='" + vMobileNumber + "',`vAddress`='"+vAddress+"',`tCreatedDate`='" + tCreatedDate + "'WHERE  sId = '" + sId + "' "
        conn.query(sql, (err, data) => {
            if (err) throw err;
            console.log("project change sucessfully")
        });

        res.json({ message: "Project updated successfully." });
    })
  
    // Delete a blog with id
    router.delete("/:sId", system.delete);  
  
    app.use('/app/system', router);
};