// fs and url module
const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req,res) => {
    const q = url.parse(req.url, true);
    file = '.' + q.pathname;
    fs.readFile(file, (err, data) => {
        if (err) {
            res.statusCode = '404';
            res.setHeader('Content-Type', 'text/html');
            res.end('<h4>The page you requested was sucked in the black hole -> <span style="background: black; border-radius: 500px">O</span></h4>')
        }
        res.statusCode = '200';
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    })
}).listen(4000, () => {
    console.log(`Server listening on localhost port 4000`);
});