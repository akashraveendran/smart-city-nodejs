var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login');
router.get('/logout');
router.get('/');

router.get('/add-hotel');
router.get('/view-all-hotels');
router.get('/delete-hotel');
router.get('/edit-hotel');

router.get('/add-hospital');
router.get('/view-all-hospitals');
router.get('/delete-hospital');
router.get('/edit-hospital');


router.get('/add-Industry');
router.get('/view-all-Industry');
router.get('/delete-Industry');
router.get('/edit-Industry');


router.get('/add-Job');
router.get('/view-all-Job');
router.get('/delete-Job');
router.get('/edit-Job');


router.get('/add-Library');
router.get('/view-all-Library');
router.get('/delete-Library');
router.get('/edit-Library');


router.get('/add-Theater');
router.get('/view-all-Theater');
router.get('/delete-Theater');
router.get('/edit-Theater');


router.get('/add-Travel-Agency');
router.get('/view-all-Travel-Agency');
router.get('/delete-Travel-Agency');
router.get('/edit-Travel-Agency');


module.exports = router;
