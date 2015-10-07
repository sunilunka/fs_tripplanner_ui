var express = require('express')
var router = express.Router();
var bodyparser = require('body-parser');
var Hotel = require('../models').Hotel;
var Activity = require('../models').Activity;
var Restaurant = require('../models').Restaurant;
var Place = require('../models').Place;




router.get('/', function(req, res, next){
  Hotel.find({}).exec().then(function(hotels) {
      Restaurant.find({}).exec().then(function(restaurants) {
          Activity.find({}).exec().then(function(activities) {
              res.render('index', {
                  all_hotels: hotels,
                  all_restaurants: restaurants,
                  all_activities: activities
              });
          }).then(null, console.log);
      }).then(null, console.log);
  }).then(null, console.log);
})

























module.exports = router;






