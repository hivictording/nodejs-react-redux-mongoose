const passport = require("passport");
const googlePassport = require("passport-google-oauth20").Strategy;

const { googleAuth } = require("../../config/env");
const { User } = require("../models");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserializeUser will do: req.user = user returned by findById
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new googlePassport(
    {
      clientID: googleAuth.clientID,
      clientSecret: googleAuth.clientSecret,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ userId: profile.id });

        if (user) {
          return done(null, user);
        }

        const newUser = new User({ userId: profile.id }).save();
        done(null, newUser);
      } catch (error) {
        console.log(error.message);
      }
    }
  )
);
