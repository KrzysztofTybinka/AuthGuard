import { Result, success, failure } from "../../domain/abstractions/result";
import { PasswordPolicy } from "../../domain/user/passwordPolicy";
import { UserRepository } from "../../domain/user/userRepository";
import { RegisterUserCommand } from "./registerUserCommand";
import { RegisterUserErrors } from "./registerUserErrors";
import { EmailValidator } from "./validators/emailValidator";
import { PasswordValidator } from "./validators/passwordValidator";

export class RegisterUserCommandHandler {

    constructor(
        private userRepository: UserRepository,
        private passwordPolicy: PasswordPolicy
    ) { }

    public async handle(command: RegisterUserCommand)
        : Promise<Result<void>> {

        const commndValidationResult = await this.validateCommand(command);

        if (commndValidationResult.isSuccess === false) {
            return commndValidationResult;
        }

        const userWithTheSameEmailResult = await this.userRepository
            .getUserByEmailAsync(command.email);

        if (userWithTheSameEmailResult.isSuccess) {
            return failure(RegisterUserErrors.emailAlreadyUsed());
        }

        return success();
    }

    private async validateCommand(command: RegisterUserCommand)
        : Promise<Result<void>> {

        const emailValidator = new EmailValidator();

        if (emailValidator.isValid(command.email) === false) {
            return failure(RegisterUserErrors.invalidEmail());
        }

        const passwordValidator = new PasswordValidator(this.passwordPolicy);

        if (passwordValidator.isProhibited(command.password)) {
            return failure(RegisterUserErrors.passwordProhibited());
        }

        if (passwordValidator.isValid(command.password) === false) {
            return failure(RegisterUserErrors
                .invalidPassword(
                    this.passwordPolicy.toString()));
        }

        return success();
    }

}