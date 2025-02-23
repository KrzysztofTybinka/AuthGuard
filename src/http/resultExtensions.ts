import { Response } from "express";
import { Err, Result } from "../core/domain/abstractions/result";
import { ErrorDetails, ErrorType } from "../core/domain/abstractions/errorDetails";

export function resultToProblemDetails<T>(
    result: Result<T>,
    res: Response)
    : Response {
    if (result.isSuccess) {
        throw new Error("Can't parse successful result into problem details.");
    }
    return createProblemDetails(result.errorDetails, res);
}

function createProblemDetails(
    error: ErrorDetails,
    res: Response)
    : Response {
    const statusCode = getStatusCode(error.errorType);
    const title = getTitle(error.errorType);

    return res.status(statusCode).json({
        title: title,
        error: error.description,
    });
}

function getStatusCode(errorType: ErrorType): number {
    switch (errorType) {
        case ErrorType.failure:
            return 400;
        case ErrorType.notFound:
            return 404;
        case ErrorType.conflict:
            return 409;
        case ErrorType.validation:
            return 401;
        case ErrorType.externalServiceFailure:
            return 500;
        default:
            return 500;
    }
}

function getTitle(errorType: ErrorType): string {
    switch (errorType) {
        case ErrorType.failure:
            return "Bad Request";
        case ErrorType.notFound:
            return "Not Found";
        case ErrorType.conflict:
            return "Conflict";
        case ErrorType.validation:
            return "Validation Error";
        case ErrorType.externalServiceFailure:
            return "Server Failure";
        default:
            return "Server Failure";
    }
}