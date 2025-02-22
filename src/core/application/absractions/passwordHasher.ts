export interface PasswordHasher {
    hashAsync(password: string): Promise<string>;
    compareAsync(password: string, hashedPassword: string): Promise<boolean>;
}