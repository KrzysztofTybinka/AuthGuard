import { PasswordHasher } from "./passwordHasher";

export interface HashingServiceFactory {
    getHashingService(): PasswordHasher;
}