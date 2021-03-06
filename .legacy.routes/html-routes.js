// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");
const GMAPSAPIKEY = process.env.GMAPS_API_KEY;
const Handlebars = require('handlebars')

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Add if/equals functionality to Handlebars
Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

module.exports = function (app) {

  app.get("/", function (req, res) {

    if (req.user) { logInOut = logoutButton }
    else { logInOut = loginButton };

    res.render("search", {
      pageTitle: 'Search Stores | ThriftBuyer',
      pageSpecificJs: '/js/search.js',
      GMAPSAPIKEY: GMAPSAPIKEY,
      loginLogout: logInOut,
      current: 'home'
    });
  });

  app.get("/addstore", function (req, res) {

    if (req.user) { logInOut = logoutButton }
    else { res.redirect('/login'); return };


    res.render("addstore", {
      pageTitle: 'Add Store | ThriftBuyer',
      pageSpecificJs: '/js/addstore.js',
      loginLogout: logInOut,
      GMAPSAPIKEY: GMAPSAPIKEY,
      current: 'addstore'
    });
  });

  app.get("/stores/:id", function (req, res) {

    // Will be used to add 'disabled' to add category button if user is not logged in
    let addCatDisable;

    if (req.user) {
      logInOut = logoutButton;
      addCatDisable = '';
    }
    else {
      logInOut = loginButton;
      addCatDisable = 'disabled';
    };

    db.Store.findOne({
      where: { id: req.params.id }
    })
      .then((dbData) => {

        if (dbData !== null) {
          let categories = [];
          let addableCategories = ['Fashion', 'Furniture', 'HomeGoods', 'Misc'];
          let possibleCategories = ['Fashion', 'Furniture', 'HomeGoods', 'Misc'];

          for (let i = 0; i < possibleCategories.length; i++) {
            // For each possible category, if it is listed as existing in the entry for the store:
            if (dbData[`has${possibleCategories[i]}`]) {

              // Add it to categories
              let currentPossibleCategory = possibleCategories[i];
              if (currentPossibleCategory === 'HomeGoods') { currentPossibleCategory = 'Home Goods' }
              categories.push(currentPossibleCategory);

              // Remove it from addableCategories
              possCat: for (let j = 0; j < addableCategories.length; j++) {
                if (addableCategories[j] === possibleCategories[i]) {
                  addableCategories.splice(j, 1);
                  break possCat;
                }
              }
            }

          }

          // After constructing our categories list, we'll use the length to determin if the 'add category' button should be displayed or hidden
          // Because the hidden attribute either exists or doesn't we'll supply 'hidden' or simply '' if we want to show the element
          let hidden = '';
          if (categories.length === possibleCategories.length) { hidden = 'hidden' };

          res.render("store", {
            id: dbData.id,
            name: dbData.name,
            address: dbData.address,
            categories: categories,
            pageSpecificJs: '/js/store.js',
            pageTitle: `ThriftShopper - ${dbData.name}`,
            categoryAddShowHide: hidden,
            categoriesToAdd: addableCategories,
            addCatDisable: addCatDisable,
            loginLogout: logInOut,
            googleStoreAddress: dbData.address.split(' ').join('+'),
            fontAwesome: true
          })
        } else {
          // If the server return no data, give the user a page stub informing them that no such store exists
          res.render("store404", { id: req.params.id })
        }
      })
      .catch((error) => {
        console.log(error)
        res.status(500).send('Status 500 - Internal server error')
      })

  });

  app.get("/login", function (req, res) {
    // Figure out where the user came from so that we can send them back there after login (unless they came from external)
    let backURL = req.header('Referer') || '/';
    if ((backURL.indexOf('localhost') === -1 && (backURL.indexOf('tranquil-temple-50803.herokuapp.com/') === -1))) { backURL = '/' };
    if (backURL.includes('signup')) { backURL = '/' } // Avoid wierd redirect loops

    // If the user already has an account, bounce them back to the page they were already one
    if (req.user) {
      res.redirect(backURL);
    } else {
      res.sendFile(path.join(__dirname, "../public/login.html"));
    }
  });

  app.get("/signup", function (req, res) {
    // Figure out where the user came from so that we can send them back there after login (unless they came from external)
    let backURL = '/';

    // If the user already has an account, bounce them back to the page they were already one
    if (req.user) {
      res.redirect(backURL);
    } else {
      res.sendFile(path.join(__dirname, "../public/signup.html"));
    }
  });

  app.get("/about", function (req, res) {
    if (req.user) { logInOut = logoutButton }
    else { logInOut = loginButton };

    res.render("about", {
      pageTitle: 'About | ThriftBuyer',
      loginLogout: logInOut,
      current: 'about'
    });
  });

};


// HTML for rendering the login/logout button as whichever is appropriate
let loginButton = `<a class="nav-link" href="/login">Login</a>`;
let logoutButton = `<a class="nav-link" href="/logout">Logout</a>`;