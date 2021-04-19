// Get About page
const about = (req, res) => { // Created named function

    // Takes template name & JS data
    res.render('generic-text', { 
        title: 'Loc8r | About',
        pageHeader: {title: "Review Starcups"}, 
        content: "Loc8r was created to help people fin places to sit down and get a bit of work done."
   
    });
  };

  module.exports = {
      about
  };