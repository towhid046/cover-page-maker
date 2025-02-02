// dependencies
const express = require('express')
const { getCounterHandler, updateCounterHandler } = require('../controller/counter.controller')

const counterRoute = express.Router()

counterRoute.get('/counter', getCounterHandler)
counterRoute.put('/counter', updateCounterHandler)

module.exports = counterRoute;