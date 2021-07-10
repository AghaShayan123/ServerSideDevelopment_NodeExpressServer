const express = require('express');
const http = require('http');
const morgan = require('morgan')

const dishRouter = require('./routes/dishRouter')
const hostname = 'localhost';
const port = 3000;

const app = express()
app.use(morgan('dev'))
app.use(express.json())

app.use(express.static(__dirname + '/public'))

app.use('/dishes', dishRouter)

app.use((req, res, next) => {    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'html/text')
    res.end('<html><body><h1>This is an express server</h1></body></html>')
});

const server = http.createServer(app)

server.listen(port, hostname, () => {
    console.log(`Server listening on http:${hostname}:${port}`)
});