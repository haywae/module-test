const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our server')
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end("<p>We can't find what you are looking for</p>")
})

server.listen(5000)