var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main');

// const homepageController = (req, res) => { // Created named function

//   // Takes template name & JS data
//   res.render('index', { title: 'Express' });
// };

//  GET home page. Anonymous function method
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', ctrlMain.index );


module.exports = router;
