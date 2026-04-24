const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const htmlPath = path.join(__dirname, 'index.html');

console.log('Starting server...');
console.log('PORT:', port);
console.log('HTML path:', htmlPath);
console.log('File exists:', fs.existsSync(htmlPath));

http.createServer((req, res) => {
  try {
    const html = fs.readFileSync(htmlPath);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } catch (err) {
    console.error('Failed to read index.html:', err.message);
    res.writeHead(500);
    res.end('Error: ' + err.message);
  }
}).listen(port, '0.0.0.0', () => {
  console.log('Listening on port', port);
});
