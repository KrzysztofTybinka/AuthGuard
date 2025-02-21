import { Result, success, failure } from "../../domain/abstractions/result";
import { PasswordPolicy } from "../../domain/user/passwordPolicy";
import { User } from "../../domain/user/user";
import { UserRepository } from "../../domain/user/userRepository";
import { HashingServiceFactory } from "../absractions/HashingServiceFactory";
import { RegisterUserCommand } from "./registerUserCommand";
import { RegisterUserErrors } from "./registerUserErrors";
import { EmailValidator } from "./validators/emailValidator";
import { PasswordValidator } from "./validators/passwordValidator";

export class RegisterUserCommandHandler {

    constructor(
        private userRepository: UserRepository,
        private passwordPolicy: PasswordPolicy,
        private hashingServiceFactory: HashingServiceFactory
    ) { }

    public async handle(command: RegisterUserCommand)
        : Promise<Result<void>> {

        const commandValidationResult = await this.validateCommand(command);

        if (commandValidationResult.isSuccess === false) {
            return commandValidationResult;
        }

        const userWithTheSameEmailResult = await this.userRepository
            .getByEmailAsync(command.email);

        if (userWithTheSameEmailResult.isSuccess) {
            return failure(RegisterUserErrors.emailAlreadyUsed());
        }

        const passwordHash = this.hashPassword(command.password);

        const user = new User(
            "",
            command.email,
            passwordHash);

        const insertUserResult = await this.userRepository.insertAsync(user);

        if (insertUserResult.isSuccess === false) {
            return insertUserResult;
        }

        return success();
    }

    private hashPassword(password: string): string {
        const hashingService = this.hashingServiceFactory
            .getHashingService();

        return hashingService.hash(password);
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