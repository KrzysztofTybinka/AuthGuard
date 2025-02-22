import { HashingServiceFactory } from "../../../core/application/absractions/hashingServiceFactory";
import { PasswordHasher } from "../../../core/application/absractions/passwordHasher";
import dotenv from "dotenv";
import { BcryptService } from "./bcryptService";

dotenv.config();

export class HashingServiceFactoryImp implements HashingServiceFactory {

    getHashingService(): PasswordHasher {
        const hashingAlgorithm = this.getHashingAlgorithmValue(process.env.HASHING_ALGORITHM);
        const saltRounds = this.getSaltRoundsValue(process.env.SALT_ROUNDS);

        switch (hashingAlgorithm) {
            case "bcrypt":
                return new BcryptService(saltRounds);
            default:
                throw new Error(`Unsupported hashing algorithm: ${process.env.hashingAlgorithm}`);
        }
    }

    private getSaltRoundsValue(saltRounds: string | undefined): number {

        if (!saltRounds) {
            throw new Error("Provide SALT_ROUNDS value in the .env file.");
        }

        const value = parseInt(saltRounds, 10);

        if (isNaN(value) || value <= 0) {
            throw new Error("Provide SALT_ROUNDS value in the .env file.");
        }
        return value;
    }

    private getHashingAlgorithmValue(value: string | undefined): string {

        if (!value) {
            throw new Error("Provide SALT_ROUNDS value in the .env file.");
        }
        return value;
    }
}