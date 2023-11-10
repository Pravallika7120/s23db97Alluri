var restaurant = require('../models/restaurant');
// List of all restaurant
exports.restaurant_list = function(req, res) {
res.send('NOT IMPLEMENTED: restaurant list');
};
// for a specific restaurant.

exports.restaurant_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await restaurant.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.restaurant_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await restaurant.findById( req.params.id)
    // Do updates of properties
    if(req.body.name)
    toUpdate.name = req.body.name;
    if(req.body.place) toUpdate.place = req.body.place;
    if(req.body.bill) toUpdate.bill = req.body.bill;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
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

// Handle restaurant create on POST.
exports.restaurant_create_post = async function(req, res) {
console.log(req.body)
let document = new restaurant();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
//{"name":"korry leaves","place":"kansas","bill":7000}
document.name = req.body.name;
document.place = req.body.place;
document.bill = req.body.bill;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
