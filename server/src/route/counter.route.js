// dependencies
import express from 'express'
import { getCounterHandler, updateCounterHandler } from '../controller/counter.controller.js';

const counterRoute = express.Router()

counterRoute.get('/counter', getCounterHandler)
counterRoute.put('/counter', updateCounterHandler)

export default counterRoute;