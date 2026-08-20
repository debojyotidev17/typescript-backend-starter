import express from "express";
import { serverConfig } from "./config/index.js";
import pingRouter from "./routers/ping.router.js";
import { genericErrorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

app.use('/ping', pingRouter);
app.use(genericErrorHandler);

app.listen(serverConfig.PORT, () => { 
    console.log(`Server is running on ${serverConfig.PORT}`);
})