// importing express framework
const express = require('express');
const app = express();

app.use(function (error, req, res, next) {
  console.log('reciving request', req.path);
  next();
});
// Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
  console.log('test log');
  return res.send('Hello World xxxxx');
});

// listen to port 7000 by default
app.listen(process.env.PORT || 7000, () => {
  console.log('Server is running');
});
module.exports = app;
