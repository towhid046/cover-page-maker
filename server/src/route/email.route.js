// dependencies
const express = require('express')
const { sendEmailHandler } = require('../controller/email.controller.js')

const emailRoute = express.Router()

emailRoute.post('/send-email', sendEmailHandler)

module.exports = emailRoute;