const mongoose = require("mongoose");
// configure app- install and require passport
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const {Schema} = mongoose;
const GoogleStrategy = require ("passport-google-oauth20").Strategy;
const findOrCreate = require ("mongoose-findorcreate");



const userSchema = new Schema ({
username:{
    type: String,
},
password:{
    type: String,
},
googleId: {
    type: String,
}
});

// // plugin --> connects the scheme to mongoose before going in collection have to add here so it can initialize
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// // variable User contains collection name and Schema

const User = mongoose.model ("User", userSchema);

// // passport.use to add the createStrategy method
passport.use(User.createStrategy());

// // use passport to run the  serializeUser() method
passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id, username: user.username, name: user.displayName });
    });
  });
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });

// use passport.use() to create a new GoogleStrategy
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/admin",
  },
  function(accessToken, refreshToken, email, cb) {
    User.findOrCreate({ googleId: email.id }, function (err, user) {
      return cb(err, user);
    });
  }
  ));

 module.exports = User;

