import { PasswordHasher } from "../../../core/application/absractions/passwordHasher";
import bcrypt from "bcrypt";

export class BcryptService implements PasswordHasher {

    constructor(private readonly saltRounds: number) { }

    hashAsync(password: string): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
    }
    compareAsync(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
}