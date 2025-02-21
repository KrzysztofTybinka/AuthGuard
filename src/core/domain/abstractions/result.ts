import { ErrorDetails } from "./errorDetails";

export type Ok<T> = {
    readonly isSuccess: true;
    readonly value?: T
};

export type Err = {
    readonly isSuccess: false;
    readonly errorDetails: ErrorDetails
};

export type Result<T> = Ok<T> | Err;

export function success<T>(value?: T): Result<T> {
    return { isSuccess: true, value };
}

export function failure(errorDetails: ErrorDetails): Err {
    return { isSuccess: false, errorDetails };
}