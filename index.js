const http = require('http');
const fs = require('fs');

const port = '8080';

const server = http.createServer((req, res) => {
  let page;
  switch (req.url) {
    case '/':
      page = 'index';
      break;

    case '/about':
      page = 'about';
      break;

    case '/contact-me':
      page = 'contact-me';
      break;

    default:
      page = '404';
  }

  if (page === '404') {
    res.writeHead(404, { 'Content-Type': 'text/html' });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
  }

  fs.readFile(`./html/${page}.html`, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the HTML file:', err);
      return;
    }

    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
