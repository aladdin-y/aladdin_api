const config = require("../../config")


var request = require('request');
const InfoControl = async(req, res, next) => {



    res.status(200).end(JSON.stringify({
        all_versions:"v1",
        discord:"https://discord.gg/ywPgjE96Z8",
        developer:"aladdin",
        docs:config.docs
    }));
};

module.exports = {InfoControl};
