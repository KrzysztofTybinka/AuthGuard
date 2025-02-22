import { passwordPolicy } from "./config";
import { RegisterUserCommandHandler } from "./core/application/RegisterUser/registerUserCommandHandler";
import { UserRepositoryImpl } from "./external/infrastructure/repositories/userRepository";
import { HashingServiceFactoryImp } from "./external/infrastructure/services/hashingServiceFactoryImp";

const userRepository = new UserRepositoryImpl();
const policy = passwordPolicy;
const hashingServiceFactory = new HashingServiceFactoryImp();

export const registerUserCommandHandler =
    new RegisterUserCommandHandler(
        userRepository,
        policy,
        hashingServiceFactory
    );