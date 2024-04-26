const express = require('express');
const { routes } = require('./infra/http/routes');
const app = express();

app.use(routes)

app.listen(3333, () => {
  console.log(`Example app listening on port 3333`)
});
