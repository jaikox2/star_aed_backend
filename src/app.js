const express = require('express');
const routeIdx = require('./routers/index');
const routeOrganization = require('./routers/organization');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
  console.log(`serve on path ${req.method} ${req.path}`);
  next();
});
app.use('', routeIdx);
app.use('/organizations', routeOrganization);
app.use((err, req, res, next) => {
  // eslint-disable-next-line eqeqeq
  if (err.status == 500) {
    res.send({
      code: 500,
      msg: err.massage,
    });
  }
});
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server run on port ${port}`);
});
