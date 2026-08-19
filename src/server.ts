import express from "express";
import { serverConfig } from "./config/index.js";
import pingRouter from "./routers/ping.router.js";

const app = express();

app.use(express.json());

app.use('/ping', pingRouter);

app.listen(serverConfig.PORT, () => { 
    console.log(`Server is running on ${serverConfig.PORT}`);
})