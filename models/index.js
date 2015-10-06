var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
mongoose.connect('mongodb://localhost/tripplanner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, "mongodb connection error:"));


var placeSchema = new mongoose.Schema({
  address: [String],
  city: [String],
  state: [ String ],
  phone: [ String ],
  location: [ Number, Number]


});

var min = [1, "The number of stars has to be between one and five"];
var max = [5, "The number of stars has to be between one and five"]

var hotelSchema = new mongoose.Schema({
  name: String, 
  place: [placeSchema],
  num_stars: { type: Number, min: min, max: max },
  amenities: String
})

var activitySchema = new mongoose.Schema({
  name: String,
  place: [placeSchema],
  age_range: { type: String }
})

var restaurantSchema = new mongoose.Schema({
  name: String, 
  place: [placeSchema],
  cuisines: String,
  price: { type: Number, min: min, max: max }
})

Place = mongoose.model("Place", placeSchema);
Hotel = mongoose.model("Hotel", hotelSchema);
Activity = mongoose.model("Activity", activitySchema);
Restaurant = mongoose.model("Restaurant", restaurantSchema)

module.exports = {
  Place: Place,
  Hotel: Hotel, 
  Activity: Activity,
  Restaurant: Restaurant
}