var express = require('express');
var router = express.Router();




router.get('/signup');
router.get('/login');
router.get('/');
router.get('/logout');
router.get('/search-libraries');
router.get('/search-Colleges');
router.get('/search-hospitals');
router.get("/view-map");


module.exports = router;
