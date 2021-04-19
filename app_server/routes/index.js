// Use const for things that won't chnage
const express = require('express');
const router = express.Router();

// Controllers
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

// const ctrlMain = require('../controllers/main');

// const homepageController = (req, res) => { // Created named function

//   // Takes template name & JS data
//   res.render('index', { title: 'Express' });
// };

//  GET home page. Anonymous function method
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// Locations Pages , define routes & map to controller functions
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

// Others Pages
router.get('/about', ctrlOthers.about);

// router.get('/', ctrlMain.index );

module.exports = router;
