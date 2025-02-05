// dependencies
import express from 'express';
import { sendEmailHandler } from '../controller/email.controller.js';

const emailRoute = express.Router()

emailRoute.post('/send-email', sendEmailHandler)

export default emailRoute;