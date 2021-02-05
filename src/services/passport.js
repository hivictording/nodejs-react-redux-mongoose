const passport = require("passport");
const googlePassport = require("passport-google-oauth20").Strategy;

const { googleAuth } = require("../../config/env");
const { User } = require("../models");

passport.use(
  new googlePassport(
    {
      clientID: googleAuth.clientID,
      clientSecret: googleAuth.clientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ userId: profile.id }).save();
    }
  )
);
