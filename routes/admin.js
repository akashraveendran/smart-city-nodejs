var express = require('express');
const router = express.Router()
const {
    adminLoginPage,
    adminLogin,
    adminPanel,

    addHotelForm,
    addNewHotel,
    viewAllHotel,
    deleteHotel,
    editHotelForm,
    editHotel,
    addHospitalForm,
    addNewHospital,
    viewAllHospital,
    deleteHospital,
    editHospitalForm,
    editHospital,
    addCollegeForm,
    addNewCollege,
    viewAllColleges,
    deleteCollege,
    editCollegeForm,
    editCollege,

    addIndustryForm,
    addNewIndustry,
    viewAllIndustries,
    deleteIndustry,
    editIndustryForm,
    editIndustry,

    addJobForm,
    addNewJob,
    viewAllJobs,
    deleteJob,
    editJobForm,
    editJob,

    addTheaterForm,
    addNewTheater,
    viewAllTheaters,
    deleteTheater,
    editTheaterForm,
    editTheater,

    addTravelAgencyForm,
    addNewTravelAgency,
    viewAllTravelAgencies,
    deleteTravelAgency,
    editTravelAgencyForm,
    editTravelAgency,
    addLibraryForm,
    addNewLibrary,
    viewAllLibraries,
    deleteLibrary,
    editLibraryForm,
    editLibrary

} = require("../controllers/admin-controller")

/* GET users listing. */
router.route('/login').get(adminLoginPage).post(adminLogin);
router.route('/logout');
router.route('/').get(adminPanel);

router.route('/add-hotel').get(addHotelForm).post(addNewHotel);
router.route('/view-all-hotels').get(viewAllHotel);
router.route('/delete-hotel/:id').get(deleteHotel);
router.route('/edit-hotel/:id').get(editHotelForm).post(editHotel);

router.route('/add-hospital').get(addHospitalForm).post(addNewHospital);
router.route('/view-all-hospitals').get(viewAllHospital);
router.route('/delete-hospital/:id').get(deleteHospital);
router.route('/edit-hospital/:id').get(editHospitalForm).post(editHospital);

router.route('/add-college').get(addCollegeForm).post(addNewCollege);
router.route('/view-all-colleges').get(viewAllColleges);
router.route('/delete-college/:id').get(deleteCollege);
router.route('/edit-college/:id').get(editCollegeForm).post(editCollege);


router.route('/add-Industry').get(addIndustryForm).post(addNewIndustry);
router.route('/view-all-industries').get(viewAllIndustries);
router.route('/delete-Industry/:id').get(deleteIndustry);
router.route('/edit-Industry/:id').get(editIndustryForm).post(editIndustry);


router.route('/add-Job').get(addJobForm).post(addNewJob);
router.route('/view-all-Jobs').get(viewAllJobs);
router.route('/delete-Job/:id').get(deleteJob)
router.route('/edit-Job/:id').get(editJobForm).post(editJob);

router.route('/add-library').get(addLibraryForm).post(addNewLibrary);
router.route('/view-all-libraries').get(viewAllLibraries);
router.route('/delete-library/:id').get(deleteLibrary)
router.route('/edit-library/:id').get(editLibraryForm).post(editLibrary);

router.route('/add-theater').get(addTheaterForm).post(addNewTheater);
router.route('/view-all-theaters').get(viewAllTheaters);
router.route('/delete-theater/:id').get(deleteTheater)
router.route('/edit-theater/:id').get(editTheaterForm).post(editTheater);
//pending
router.route('/add-travel-agency').get(addTravelAgencyForm).post(addNewTravelAgency);
router.route('/view-all-travel-agency').get(viewAllTravelAgencies);
router.route('/delete-travel-agency/:id').get(deleteTravelAgency)
router.route('/edit-travel-agency/:id').get(editTravelAgencyForm).post(editTravelAgency);


module.exports = router;
