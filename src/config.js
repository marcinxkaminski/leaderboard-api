const PORT = process.env.PORT || 9999;

const CORS = {
  origins: '*',
  methods: ['POST', 'PUT', 'GET', 'DELETE'],
};

const MONGODB_URI = process.env.MONGODB_URI || `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@ds163016.mlab.com:63016/heroku_k7bh3k1h`;

const DEFAULT_ERROR_STATUS = 700;
const DEFAULT_OFFSET_COUNT = 0;
const DEFAULT_LIMIT_COUNT = 50;

module.exports = {
  PORT,
  CORS,
  MONGODB_URI,
  DEFAULT_ERROR_STATUS,
  DEFAULT_OFFSET_COUNT,
  DEFAULT_LIMIT_COUNT,
};
