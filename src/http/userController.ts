import { Request, Response } from "express";
import { registerUserCommandHandler } from "../dependencyInjection";
import { RegisterUserCommand } from "../core/application/RegisterUser/registerUserCommand";
import { resultToProblemDetails } from "./resultExtensions";

export const registerUserController = async (req: Request, res: Response)
    : Promise<void> => {
    const { email, password } = req.body;

    // Execute command
    const command = new RegisterUserCommand(email, password);
    const result = await registerUserCommandHandler.handle(command);

    if (result.isSuccess === false) {
        resultToProblemDetails(result, res);
        return;
    }

    res.status(201).json({ message: "User registered successfully." });
};