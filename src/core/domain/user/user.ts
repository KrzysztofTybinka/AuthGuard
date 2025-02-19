import { success, failure, Result, Err } from "../abstractions/genericResult";
import { EmailValidator } from "./emailValidator";
import { UserErrorDetails } from "./userErrorDetails";

export class User {

    private constructor(
        public id: string,
        public email: string,
        public password: string
    ) { }

    public static create(
        id: string,
        email: string,
        password: string
    ): Result<User> {
        if (!EmailValidator.isValid(email)) {
            return failure(UserErrorDetails.invalidEmail);
        }

        const user = new User(id, email, password);
        return success<User>(user);
    }

}