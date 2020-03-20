const express = require('express')

const server = express()

const resourcesRouter = require('../auth/resources-router')

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ message: 'it is A L I V E !'})
})

// server.use('api/resources', resourcesRouter)

module.exports = server