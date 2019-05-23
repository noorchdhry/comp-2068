const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`Hey there world!`);
});

app.get('/about', (req, res) => {
 res.send(`I like to play games`);
});

const port = (process.env.PORT || 4000)

app.listen(port, () => console.log(`Listening on ${port}`));