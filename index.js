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

app.get('/dishes/:dishId', (req, res, next) => {
    res.end(`Will send details of dish ${req.params.dishId} to you!`)
})

app.post('/dishes/:dishId', (req, res, next) => {
    res.end(`POST operation not  supported on dishes/ ${req.params.dishId}`)
})

app.put('/dishes/:dishId', (req, res, next) => {
    res.write(`Updating the dish ${req.params.dishId} \n`)
    res.end(`Will update dish ${req.body.name} with details ${req.body.description}`)
})

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end(`Delete dish ${req.params.dishId}`)
})

app.use((req, res, next) => {    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'html/text')
    res.end('<html><body><h1>This is an express server</h1></body></html>')
});

const server = http.createServer(app)

server.listen(port, hostname, () => {
    console.log(`Server listening on http:${hostname}:${port}`)
});