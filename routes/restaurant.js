var express = require('express');
const restaurant_controlers= require('../controllers/restaurant');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}

/* GET restaurant */
router.get('/', restaurant_controlers.restaurant_view_all_Page );
/* GET detail restaurant page */
router.get('/detail', restaurant_controlers.restaurant_view_one_Page);
/* GET create restaurant page */
router.get('/create', secured, restaurant_controlers.restaurant_create_Page);
/* GET update restaurant page */
router.get('/update', secured, restaurant_controlers.restaurant_update_Page);
/* GET delete restaurant page */
router.get('/delete', secured, restaurant_controlers.restaurant_delete_Page);
module.exports = router;

