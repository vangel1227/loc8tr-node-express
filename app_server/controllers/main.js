// Get Homepage
const index = (req, res) => { // Created named function

    // Takes template name & JS data
    res.render('index', { title: 'Express' });
  };

  module.exports = {
      index
  };