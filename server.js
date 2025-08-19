// Install Command:
// npm init
// npm i express express-handlebars body-parser mongoose hbs bcrypt passport passport-local express-session express-flash dotenv method-override jsonwebtoken

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const server = express();

const methodOverride = require('method-override');
const flash = require('express-flash');
const session = require('express-session');
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const hbsHelpers = require('./components/hbsHelpers.js');

// Routers
const logRouter = require('./controller/log.js');
const profileRouter = require('./controller/profile.js');
const communityRouter = require('./controller/community.js');
const postRouter = require('./controller/post.js');
const actionRouter = require('./controller/action.js');

// Models
const userModel = require('./model/schema/users.js');
const postModel = require('./model/schema/posts.js');
const communityModel = require('./model/schema/community.js');

// Passport initialization
const initializePassport = require('./public/commons/javascripts/passport-config.js');
initializePassport(passport);

// Middleware
server.use(methodOverride('_method'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(flash());
server.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      expires: new Date(Date.now() + 60 * 60 * 1000),
    },
  })
);
server.use(passport.initialize());
server.use(passport.session());

// View engine
server.set('view engine', 'hbs');
server.engine(
  'hbs',
  handlebars.engine({
    extname: 'hbs',
    helpers: {
      if_cond: hbsHelpers.if_cond,
      isInCollection: hbsHelpers.isInCollection,
      isSameId: hbsHelpers.isSameId,
    },
  })
);
server.set('views', path.join(__dirname, 'views'));
server.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
const mongoose = require('mongoose');
let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = db.connections[0].readyState === 1;
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}
connectDB();

// Utility function
function sortedDate(array, limit) {
  const sortedArray = array.sort((a, b) => new Date(b.date) - new Date(a.date));
  return limit ? sortedArray.slice(0, limit) : sortedArray;
}

// Routes
server.get('/', async (req, res) => {
  try {
    const searchQuery = {};
    let leanUser;
    const community_data = await communityModel.find(searchQuery).lean();
    const post_data = await postModel.find(searchQuery).populate('uid').populate('cid').lean();
    const top_posts = await postModel.aggregate([
      { $match: searchQuery },
      { $addFields: { totalvote: { $add: [{ $toInt: '$up' }, { $toInt: '$down' }] } } },
      { $sort: { totalvote: -1 } },
      { $limit: 5 },
    ]);

    if (req.user) leanUser = req.user.toObject();

    const posts = sortedDate(post_data);

    res.render('main', {
      layout: 'index',
      title: 'InfoSec',
      posts,
      log: leanUser,
      top_posts,
      recent_posts: sortedDate(post_data, 5),
      communityHeader: community_data,
    });
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).send('Internal Server Error: ' + error.message);
  }
});

server.get('/search', async (req, res) => {
  try {
    const query = req.query.query || '';
    const searchQuery = {};
    let leanUser;
    if (req.user) leanUser = req.user.toObject();

    const community_data = await communityModel.find(searchQuery).lean();
    const post_data = await postModel.find(searchQuery).populate('uid').populate('cid').lean();
    const top_posts = await postModel.aggregate([
      { $match: searchQuery },
      { $addFields: { totalvote: { $add: [{ $toInt: '$up' }, { $toInt: '$down' }] } } },
      { $sort: { totalvote: -1 } },
      { $limit: 5 },
    ]);

    const filtered_posts = post_data.filter((post) => {
      const postTitle = post.title.toLowerCase();
      const username = post.uid.username.toLowerCase();
      const queryString = query.toLowerCase();

      const matchesTitle = postTitle.includes(queryString);
      const matchesUsername = username.includes(queryString);
      const matchesCommunity = post.cid.some((community) =>
        community.community_name.toLowerCase().includes(queryString)
      );

      return matchesTitle || matchesUsername || matchesCommunity;
    });

    res.render('main', {
      layout: 'index',
      title: 'InfoSec',
      posts: filtered_posts,
      log: leanUser,
      top_posts,
      recent_posts: sortedDate(post_data, 5),
      communityHeader: community_data,
    });
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).send('Internal Server Error: ' + error.message);
  }
});

server.delete('/logout', checkAuthenticated, (req, res, next) => {
  req.logOut((err) => {
    if (err) return next(err);
    res.redirect('/');
  });
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/log/login');
}

// Mount routers
server.use('/log', logRouter);
server.use('/profile', profileRouter);
server.use('/community', communityRouter);
server.use('/post', postRouter);
server.use('/action', actionRouter);

// Error handler
server.use((err, req, res, next) => {
  console.error('🔥 Express error:', err.stack || err);
  res.status(500).send('Something broke: ' + err.message);
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

