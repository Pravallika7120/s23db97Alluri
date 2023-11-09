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
