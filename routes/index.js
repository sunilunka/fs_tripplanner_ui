var express = require('express')
var router = express.Router();
var bodyparser = require('body-parser');


router.get('/', function(req, res, next){
  res.render("index", function(err, data){
    res.status(200).send(data);
  })
})























module.exports = router;






