// const { response } = require("express");
const data = require("../data/data");
const passport = require("passport");
const User = require("../models/user-model");

module.exports = {
  index: (request, response) => {
    response.render("pages/index");
  },
  about: (request, response) => {
    response.render("pages/about");
  },
  book: (request, response) => {
    response.render("pages/book");
  },
  herbals:( request, response) =>{
    response.render("pages/herbals")
  },

login: (request,response) => {
  response.render("pages/login")
 },

 login_post: (request,response) => {
  const {username, password, googleId} = request.body;
    const user = new User({
      username: username,
      password: password,
      googleId: googleId,
    });

    request.login(user, (error) => {
      if (error) {
        console.log(`The error at login is: ${error}`);
        response.redirect('/login');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect("/admin");
        });
      }
    });
  
  },
 
 register:(request,response) => {
  response.render("pages/register")
 },
 
 
 register_post:(request, response) => {
  const {username, password} = request.body;
  User.register({username: username}, password, (error, user) => {
    if (error) {
      console.log(error);
      response.redirect('/register');
    } else {
      passport.authenticate('local')(request, response, () => {
        response.redirect('/login');
      });
    }
  }); 

 },
 
 logout: (request, response) => {
  req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect("/login");
    });
 },
  
  
  google_auth: passport.authenticate("google", {scope: ["openid", "profile", "email"]}),
  google_redirect: [
    passport.authenticate("google", {failureRedirect: "/login"}),
    function(request, response) {
      response.redirect('/admin');
    }
  ]

} 
