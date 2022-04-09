var express = require('express');
var router = express.Router();


router.get('/signup');
router.get('/login');
router.get('/');
router.get('/logout');
router.get('/search-hotels');
router.get('/search-theaters');
router.get('/search-travel-agencies');
router.get("/view-map");

module.exports = router;
