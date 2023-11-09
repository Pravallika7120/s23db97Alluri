var restaurant = require('../models/restaurant');
// List of all restaurant
exports.restaurant_list = function(req, res) {
res.send('NOT IMPLEMENTED: restaurant list');
};
// for a specific restaurant.
exports.restaurant_detail = function(req, res) {
res.send('NOT IMPLEMENTED: restaurant detail: ' + req.params.id);
};
// Handle restaurant create on POST.
exports.restaurant_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: restaurant create POST');
};
// Handle restaurant delete form on DELETE.
exports.restaurant_delete = function(req, res) {
res.send('NOT IMPLEMENTED: restaurant delete DELETE ' + req.params.id);
};
// Handle restaurant update form on PUT.
exports.restaurant_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: restaurant update PUT' + req.params.id);
};


// List of all restaurant
exports.restaurant_list = async function(req, res) {
    try{
    therestaurant = await restaurant.find();
    res.send(therestaurant);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// VIEWS
// Handle a show all view
exports.restaurant_view_all_Page = async function(req, res) {
try{
therestaurant = await restaurant.find();
res.render('restaurant', { title: 'restaurant Search Results', results: therestaurant });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
    