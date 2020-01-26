// read & return an html file
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('demo.html', (err, data) => {
        res.statusCode = '200';
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    })
}).listen(3000, () => {
    console.log(`Server listening on port 3000`);
});
