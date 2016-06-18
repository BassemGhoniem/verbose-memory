const hostname = 'localhost', port = 3000;

require('http')
    .createServer(function (req, res) {
        console.log(req.headers);
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end('<html><body><h1>Hello World</h1></body></html>');
    })
    .listen(port, hostname, function () {
        console.log('Server running at http://' + hostname + ':' + port);
    });
