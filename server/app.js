const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');
const path = require('path');
const hpp = require('hpp');
const helmet = require('helmet');

const { sequelize } = require('./models');
const passportConfig = require('./passport');

dotenv.config();

const Router = require('./routes');

const app = express();

app.set('port', process.env.PORT || 8000);
passportConfig();

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Database connection successful');
  })
  .catch(err => {
    console.error(err);
  });

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
  app.use(hpp());
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(
    cors({
      origin: 'http://3.34.10.114/3000',
      credentials: true,
    }),
  );
} else {
  app.use(morgan('dev'));
  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );
}

app.use(express.static(path.join(__dirname, '')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', Router);

/* 404 process */
app.use((req, res, next) => {
  const error = new Error(`There is no ${req.method} ${req.url} router.`);
  error.status = 404;
  next(error);
});

/* error process */
app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  console.log(err.status);
  res.status(err.status || 500).json({ err });
});

app.listen(app.get('port'), () => {
  console.log(`Waiting on ${app.get('port')}port`);
});
