const mongoose = require("mongoose")
const restaurantSchema = mongoose.Schema({
    name: String, 
    place: String,
    bill: Number
})
module.exports = mongoose.model("restaurant",
restaurantSchema)