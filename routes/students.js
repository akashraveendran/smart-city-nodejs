var express = require('express');
var router = express.Router();

//CONTROLLER
const { getSignupPage, doSignup } = require("../controllers/student-controller")




router.route('/');
router.route('/signup').get(getSignupPage).post(doSignup);
router.route('/login');
router.route('/logout');
router.route('/search-libraries');
router.route('/search-Colleges');
router.route('/search-hospitals');
router.route("/view-map");


module.exports = router;
