import { ErrorDetails } from "./errorDetails";

export type Ok = {
    readonly success: true;
};

export type Err = {
    readonly success: false;
    readonly errorDetails: ErrorDetails
};

export type Result = Ok | Err;

export function success(): Result {
    return { success: true };
}

export function failure(errorDetails: ErrorDetails): Err {
    return { success: false, errorDetails };
}