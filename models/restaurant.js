const mongoose = require("mongoose")
const restaurantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9_]+$/.test(v); // Ensure length of vehicle between 3 and 30
            },
            message: props => `${props.value} is not a valid username! Use only letters, numbers, and underscores.`,
        },
    },
    place: {
        type: String,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9_]+$/.test(v); // Ensure price is non-negative
            },
            message: props => `${props.value} is not a valid place! Place must be a non-negative number.`,
        },
    },
    bill: {
        type: Number,
        validate: {
            validator: function(v) {
                return v >= 0; // Ensure price is non-negative
            },
            message: props => `${props.value} is not a valid bill! Bill must be a non-negative number.`,
        },
    },
})
module.exports = mongoose.model("restaurant",
restaurantSchema)