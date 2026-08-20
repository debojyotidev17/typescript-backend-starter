import { NextFunction, Request, Response } from "express";
import { z } from "zod";

/**
 * @params schema = zod schema to validate the req body
 * @returns = middleware function to validate the req body
 */

export const validateRequestBody = (schema: z.ZodType) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.body);
            console.log("Request body is valid");
            next();
        } catch (error) {
            // if the validation fails
            return res.json({
                message: "Invalid request body",
                success: false,
                error: error,
            });
        }
    };
};
