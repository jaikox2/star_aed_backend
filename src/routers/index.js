const router = require('express').Router();
const redisClient = require('./../db/redisConfig');
const aedService = require('./../services/aed');

function success(res, message) {
  return res.send({
    code: 200,
    msg: message,
  });
}

function done(res) {
  return res.send('Done');
}

function redisSetExp(mid, objRedis) {
  const redisExp = 60 * 60;
  redisClient.setex(mid, redisExp, JSON.stringify(objRedis), (err, result) => {
    // eslint-disable-next-line no-console
    console.log(result);
  });
}

router.get('/writeaed/:uid/:aed/:dsw/:asw/:mid/:pwl', (req, res, next) => {
  const {
    uid,
    aed,
    dsw,
    asw,
    mid,
    pwl,
  } = req.params;
  const objRedis = {
    Uid: uid,
    Aed: aed,
    Dsw: dsw,
    Asw: asw,
    Pwl: pwl,
  };
  if (uid === undefined
    || aed === undefined
    || dsw === undefined
    || asw === undefined
    || mid === undefined
    || pwl === undefined) {
    const err = new Error('invalid params');
    err.status = 500;
    return next(err);
  }
  if (dsw === 0
    && asw === 0
    && pwl === 0) {
    return done(res);
  }
  if (aedService.samerequest(mid, uid, aed, dsw, asw, pwl)) {
    // redis update
    redisSetExp(mid, objRedis);
    return done(res);
  }

  return done(res);
});

router.post('/addMachine', (req, res, next) => {
  const request = req.body;
  if (request) {
    const err = new Error('parameter not match');
    err.status = 500;
    return next(err);
  }
  return res.send('done');
});

module.exports = router;
