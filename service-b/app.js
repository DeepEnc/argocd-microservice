const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This is Service B');
});

app.listen(port, () => {
  console.log(`Service B running on port ${port}`);
});
