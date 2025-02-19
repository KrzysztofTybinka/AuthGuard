import { ErrorDetails } from "../abstractions/errorDetails";

export class UserErrorDetails {
    public static invalidEmail = ErrorDetails.failure(
        "UserErrors.invalidEmail", "The email format was invalid."
    );
}