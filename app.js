const http = require('http');

const port = process.env.PORT || 3000

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello, World!</h1>');
    res.write('<hr>');
    res.write('<h2>nodeJS app</h2>');
    res.end();
});

server.listen(port, () => {
    console.log(`Server running at port `+port)
});