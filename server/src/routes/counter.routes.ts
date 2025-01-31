import express from "express";
import countDownloadHandler from "../controllers/counter.controller";

const counterRoute = express.Router();

counterRoute.put("/counter", countDownloadHandler);

export default counterRoute;
