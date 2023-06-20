const { response } = require("express");
const data = require("../data/data");
const passport = require("passport");


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
}

//  register:(request,response) => {
//   response.render("pages/register")
//  },
 
//  login; (request,response) => {
//   response.render("pages/login")
//  }
// //  register_post;(request, response) => {
// //   User.register({username: username}, password, (error, user) => {
// //     if (error) {
// //       console.log(error);
// //       response.redirect('/register');
// //     } else {
// //       passport.authenticate('local')(request, response, () => {
// //         response.redirect('/login');
// //       });
// //     }
// //   }); 

// //  },
 
// //  login_post; (request,response) => {
// //   const {username, password} = request.body;
// //     const user = new User({
// //       username: username,
// //       password: password
// //     });

// //     request.login(user, (error) => {
// //       if (error) {
// //         console.log(`The error at login is: ${error}`);
// //         response.redirect('/login');
// //       } else {
// //         passport.authenticate('local')(request, response, () => {
// //           response.redirect("/admin");
// //         });
// //       }
// //     });
// //   },
 
// //  logout; (request, response) => {
// //   req.logout(function(err) {
// //       if (err) { return next(err); }
// //       res.redirect("/login");
// //     });
  
  
  
//   google_auth; passport.authenticate("google", {scope: ["openid", "profile", "email"]});
//   google_redirect: [
//     passport.authenticate("google", {failureRedirect: "/login"}),
//     function(request, response) {
//       response.redirect('/admin');
//     }
//   ]

 
