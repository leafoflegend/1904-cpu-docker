const express = require('express');
const app = express();

app.all('*', (req, res) => {
  res.send('Hi there Space Cowboy!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening to you.');
});

process.on('SIGINT', () => {
  process.exit(0);
});
