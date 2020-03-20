const express = require('express')
const helmet = require('helmet')
const morgan = require ('morgan')
const cors = require('cors')

const server = express()

const resourcesRouter = require('../auth/resources-router')

server.use(express.json())
server.use(helmet())
server.use(morgan('dev'))
server.use(cors())

server.get('/', (req, res) => {
    res.status(200).json({ message: 'it is A L I V E !'})
})

server.use('/api/resources', resourcesRouter)

module.exports = server