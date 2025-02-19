export interface PasswordPolicy {
    isValid(password: string): boolean;
}