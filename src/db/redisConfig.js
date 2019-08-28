const redis = require('redis');

const client = redis.createClient({
  host: '0.0.0.0',
});

module.exports = client;
