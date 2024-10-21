const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { User } = require('../models');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'metamask',
        passwordField: 'password',
      },
      async (metamask, password, done) => {
        try {
          const exUser = await User.findOne({ where: { metamask } });
          if (exUser) {
            done(null, exUser);
          } else {
            done(null, false, 'You are an unregistered member');
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      },
    ),
  );
};
