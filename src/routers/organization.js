const router = require('express').Router();
const models = require('../db/models');

function respone(res, message) {
  res.send({
    code: 200,
    msg: message,
  });
}

router.post('/add', (req, res, next) => {
  const request = req.body;
  if (!request.organize) {
    const err = new Error('invalid params');
    err.status = 500;
    return next(err);
  }
  const task = models.organization.build({
    name: request.organize,
    contact: { phone: request.phone },
  });
  task.save().then((newtask) => {
    console.log(`${newtask}`);
  });
  return res.send('done');
});

router.post('/edit', (req, res, next) => {
  const request = req.body;
  if (!request.organize) {
    const err = new Error('invalid params');
    err.status = 500;
    return next(err);
  }
  
});

router.post('/delete', (req, res, next) => {
  const request = req.body;
  if (!request.organize) {
    const err = new Error('invalid params');
    err.status = 500;
    return next(err);
  }
});

router.get('/lists', (req, res) => {
  models.organization.findAll({
    attributes: ['uuid', 'name', 'contact'],
  }).then((result) => {
    respone(res, result);
  });
});

module.exports = router;
