// Controllers for location pages
// Get Home page
const homeList = (req, res) => { // Created named function

    // Takes template name & JS data
    res.render('locations-list', { 
      title: 'Loc8r | Home',
      pageHeader: {
        title: "Loc8r",
        strapline: "Find places to work with Wi-Fi near you!"
      },
      sidebar: "Looking for Wi-Fi with a seat? Loc8r helps find places to work when out and about. Work when out and about. Get some coffee, cake, or even a pint. Let Loc8r help find the place you're looking for.",
      locations: [
        {
          name: "Starcups",
          address: "125 High Street, Reading, RG6 1PS",
          rating: 3,
          facilities: ["Hot Drinks", "Food", "Premium Wifi"],
          distance: "100m",
        },
        {
          name: "Cafe Hero",
          address: "125 High Street, Reading, RG6 1PS",
          rating: 4,
          facilities: ["Hot Drinks", "Food", "Premium Wifi"],
          distance: "200m"
        },
        {
          name: "Burger Queen",
          address: "125 High Street, Reading, RG6 1PS",
          rating: 2,
          facilities: ["Food", "Premium Wifi"],
          distance: "250m"
        }] 
    });
  };

// Get Locations Info page
const locationInfo = (req, res) => { // Created named function

    // Takes template name & JS data
    res.render('location-info', {
      title: 'Loc8r | Starcups',
      pageHeader: {
        title: "Starcups",
        strapline: "Find places to work with wifi near you!"
      },
      sidebar: {
        context: ", looking for Wi-Fi with a seat? Loc8r helps find places to work when out and about. Work when out and about. Get some coffee, cake, or even a pint. Let Loc8r help find the place you're looking for.",
        callToAction: "If you've been and you like it - or if you didn't - please leave a review to help other people just like you. This is just a static Node & Express project. All shop links lead to Starcups. Creation of new pages and adjustments to controllers and routing would have to be made."
      },
      location: {
          name: "Starcups",
          address: "125 High Street, Reading, RG6 1PS",
          rating: 3,
          facilities: ["Hot Drinks", "Food", "Premium Wi-Fi"],
          distance: "100m",
          openingTimes: [{
            days: "Monday - Friday",
            opening: "7:00am",
            closing: "7:00pm",
            closed: false
          }, {
            days: "Saturday",
            opening: "8:00am",
            closing: "5:00pm",
            closed: false
          }, {
            days: "Sunday",
            closed: true
          }],
          reviews: [{
            author: "Simon Holmes",
            rating: 5,
            timestamp: "16 February 2017",
            reviewText:"What a great place."
          },{
            author: "Charlie Chaplin",
            rating: 3,
            timestamp: "14 February 2017",
            reviewText:"It was okay. Coffee wasn't great."
          }]
        } 
    });
  };

  // Get Add Review page
const addReview = (req, res) => { // Created named function

    // Takes template name & JS data
    res.render('location-review-form', { 
      title: 'Loc8r | Add Review',
    pageHeader: {title: "Review Starcups"} 
    });
  };

  module.exports = {
      homeList,
      locationInfo,
      addReview
  };