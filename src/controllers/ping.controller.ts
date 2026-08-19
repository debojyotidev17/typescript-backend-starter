import { Request, Response } from "express";

export const pingHandler = (req: Request, res: Response) => {
    return res.send("pong");
};