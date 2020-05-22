const express = require('express');
const routes = require('./routes');

const port = '5000';
const app = express();

routes(app);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
