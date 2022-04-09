var express = require('express');
var router = express.Router();

//CONTROLLER
const { getSignupPage, doSignup, getLoginPage, doLogin, getHomePage, logout, searchLibrary, searchColleges } = require("../controllers/student-controller")

//middleware for authentication
const checkStudent = require('../middleware/checkStudent')



router.route('/').get(getHomePage);
router.route('/signup').get(getSignupPage).post(doSignup);
router.route('/login').get(getLoginPage).post(doLogin);
router.route('/logout').get(checkStudent, logout);
router.route('/search-libraries').get(checkStudent, searchLibrary);
router.route('/search-Colleges').get(checkStudent, searchColleges);
router.route("/view-map");


module.exports = router;
