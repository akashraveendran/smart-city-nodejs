var express = require('express');
var router = express.Router();


router.get('/signup');
router.get('/login');
router.get('/');
router.get('/logout');
router.get('/search-jobs');
router.get('/search-Industries');
router.get('/search-hospitals');
router.get("/view-map");

module.exports = router;
