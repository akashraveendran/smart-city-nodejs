var express = require('express');
var router = express.Router();



//controllers
const { searchByCategory, getSignupPage, doSignup, getLoginPage, doLogin, getHomePage, logout, searchHotel, searchHospital, searchTheater, searchLibrary } = require("../controllers/tourist-controller")
const checkTourist = require('../middleware/checkTourist')

router.route('/').get(checkTourist, getHomePage);
router.route('/signup').get(getSignupPage).post(doSignup);
router.route('/login').get(getLoginPage).post(doLogin);
router.route('/logout').get(checkTourist, logout);
router.route('/search-hotels').get(checkTourist, searchHotel);
router.route('/search-hospitals').get(checkTourist, searchHospital);
router.route('/search-theaters').get(checkTourist, searchTheater);
router.route('/search-libraries').get(checkTourist, searchLibrary);
router.route('/search').post(checkTourist, searchByCategory);

module.exports = router;
