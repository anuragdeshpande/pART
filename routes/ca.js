var express = require('express');
var request = require('request');
var router = express.Router();
var User = require('../models/user');

/* GET ca page. */
router.post('/connect', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var url = "https://rally1.rallydev.com/slm/webservice/v2.0/security/authorize";
    var auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
    request.get({ url: url, headers: { "Authorization": auth}}, function (error, response, body) {
        body = JSON.parse(body);
        if(body.OperationResult.Errors != null){
            if(body.OperationResult.SecurityToken != null){
                var newUser = new User({

                });
            }
        } else {

        }
    });
});

module.exports = router;