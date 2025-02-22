import { ErrorDetails } from "../../../core/domain/abstractions/errorDetails";

export class UserRepositoryErrors {

    public static userNotFound(): ErrorDetails {
        return ErrorDetails.notFound(
            "UserRepositoryErrors.UserNotFound",
            "User not found."
        )
    };

    public static unexpectedEror(): ErrorDetails {
        return ErrorDetails.externalServiceFailure(
            "UserRepositoryErrors.UnexpectedEror",
            "Unexpected failure."
        )
    };

    public static duplicateEmail(): ErrorDetails {
        return ErrorDetails.failure(
            "UserRepositoryErrors.DuplicateEmail",
            "User with provided email already exsists."
        )
    };
}