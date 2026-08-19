import express from "express";
import { pingHandler } from "../controllers/ping.controller.js";

const pingRouter = express.Router();

pingRouter.get('/', pingHandler);

export default pingRouter;

