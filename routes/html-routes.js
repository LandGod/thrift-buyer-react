// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"))
  });

  app.get("/stores/:id", function (req, res) {
    res.message(`Store #${req.paramas.id}`)
    //TODO: Figure out this mess:
    // $.ajax({
    //   method: 'GET',
    //   url: path.join(__dirname, `/api/stores`),
    //   body: {id: req.params.id},
    //   success: function (dbData) {

    //     let categories = [];
    //     let possibleCategories = ['Fashion', 'Furniture', 'HomeGoods', 'Misc'];
    //     for (let i = 0; i < possibleCategories.length; i++) {
    //       if (dbData[`has${possibleCategories[i]}`]) { categories.push(possibleCategories[i]) }
    //     }

    //     res.render("store", {
    //       name: dbData.name,
    //       address: dbData.address,
    //       categories: categories,
    //       pageSpecificJs: '/public/js/store.js',
    //       pageTitle: `ThriftShopper - ${dbData.name}`
    //     })
    //   }
    // })
  });

  app.get("/login", function (req, res) {
    // Figure out where the user came from so that we can send them back there after login (unless they came from external)
    let backURL = req.header('Referer') || '/';
    if ((backURL.indexOf('localhost') === -1 && (backURL.indexOf('TODO: Change this to my heroku root url') === -1))) { backURL = '/' };

    // If the user already has an account, bounce them back to the page they were already one
    if (req.user) {
      res.redirect(backURL);
    } else {
      res.sendFile(path.join(__dirname, "../public/login.html"));
    }
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });

};


// Default homepage behavior from template
// We don't want to use this because the app should be useable without logging in.
// The user only needs to log in to make changes or view thier personal notes
// However, I'd like to keep this code around in case I want to use it as a reference later:

// // If the user already has an account send them to the members page
// if (req.user) {
//   res.redirect("/members");
// }
// res.sendFile(path.join(__dirname, "../public/signup.html"));