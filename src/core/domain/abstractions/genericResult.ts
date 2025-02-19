import { ErrorDetails } from "./errorDetails";

export type Ok<T> = {
    readonly success: true;
    readonly value: T
};

export type Err = {
    readonly success: false;
    readonly errorDetails: ErrorDetails
};

export type Result<T> = Ok<T> | Err;

export function success<T>(value: T): Result<T> {
    return { success: true, value };
}

export function failure(errorDetails: ErrorDetails): Err {
    return { success: false, errorDetails };
}