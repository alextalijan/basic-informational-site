const express = require('express');
const path = require('path');

const app = express();
const port = '3000';

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).sendFile(path.join(__dirname, '/html/index.html'));
});

app.get('/about', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).sendFile(path.join(__dirname, '/html/about.html'));
});

app.get('/contact-me', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).sendFile(path.join(__dirname, '/html/contact-me.html'));
});

app.use((req, res, next) => {
  res.set('Content-Type', 'text/html');
  res.status(404).sendFile(path.join(__dirname, '/html/404.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }

  console.log(`Server running at http://localhost:${port}/`);
});
