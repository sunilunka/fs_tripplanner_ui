var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
mongoose.connect('mongodb://localhost/tripplanner');
db.on('error', console.error.bind(console, "mongodb connection error:"));


var placeSchema = new mongoose.Schema({
  address: { type: String },
  city: { type: String },
  state: { type: String },
  phone: { type: String },
  location: { type: }


});