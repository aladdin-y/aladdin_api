const config = require("../../config")
const fs = require("fs");
const path = require("path");

var request = require('request');
const show = async(req, res, next) => {

    try {
        let pageNumber = req.query.image_name; 
        let type = req.query.image_type; 
        console.log(pageNumber + type)
        // if (!validateRequest(pageNumber)) {
        //   res.status(404).send("Page Not found");
        //   return;
        // }
  
        const file = `./banner.png`;
        var img = fs.readFileSync(file);
        res.writeHead(200, { "Content-Type": "image/png" });
        res.end(img, "binary");
      } catch (ex) {
        return next(ex);
      }
};

module.exports = {show};
