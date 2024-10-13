var RateLimit = require('express-rate-limit');
var MongoStore = require('rate-limit-mongo');

export const RateLimiter =  RateLimit({
    store: new MongoStore({
      uri: process.env.DATABASE_URL,
      // should match windowMs
      expireTimeMs: 15 * 60 * 1000,
      errorHandler: console.error.bind(null, 'rate-limit-mongo')
      // see Configuration section for more options and details
    }),
    max: 100,
    // should match expireTimeMs
    windowMs: 15 * 60 * 1000
  });
  