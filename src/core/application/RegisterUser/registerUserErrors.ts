import { ErrorDetails } from "../../domain/abstractions/errorDetails";

export class RegisterUserErrors {

    public static invalidEmail(): ErrorDetails {
        return ErrorDetails.failure(
            "RegisterUserErrors.invalidEmail",
            "Email is invalid."
        )
    };

    public static emailAlreadyUsed(): ErrorDetails {
        return ErrorDetails.conflict(
            "RegisterUserErrors.EmailAlreadyUsed",
            "Email is already in use."
        )
    };

    public static invalidPassword(passwordPolicy: string): ErrorDetails {
        return ErrorDetails.failure(
            "RegisterUserErrors.InvalidPassword",
            passwordPolicy
        )
    };

    public static passwordProhibited(): ErrorDetails {
        return ErrorDetails.failure(
            "RegisterUserErrors.PasswordProhibited",
            "That password is prohibited, choose different password."
        )
    };
}