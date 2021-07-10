const express = require('express');

const dishRouter = express.Router();

dishRouter.use(express.json())

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next()
})
.get((req, res, next) => {
    res.end('Will send details of all dishes')
})
.post((req, res, next) => {
    res.end(`Will add  the dish: ${req.body.name} with details ${req.body.description}`)
})
.put((req, res, next) => {
    res.statusCode = 403
    res.end('Put operation not supported on dishes')
})
.delete((req, res, next) => {
    res.end('Delete all dishes')
})

module.exports = dishRouter 