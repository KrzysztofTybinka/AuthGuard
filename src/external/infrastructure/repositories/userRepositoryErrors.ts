import { ErrorDetails } from "../../../core/domain/abstractions/errorDetails";

export class UserRepositoryErrors {

    public static userNotFound(): ErrorDetails {
        return ErrorDetails.notFound(
            "UserRepositoryErrors.userNotFound",
            "User not found."
        )
    };
}