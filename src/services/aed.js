/* eslint-disable eqeqeq */
const redisClient = require('./../db/redisConfig');

function checkSameRequest(mid, uid, aed, dsw, asw, pwl) {
  return new Promise((resolve) => {
    redisClient.getAsync(mid).then((res) => {
      if (res.uid == uid && res.aed == aed && res.dsw == dsw && res.asw == asw && res.pwl == pwl) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

module.exports = {
  samerequest: checkSameRequest,
};
