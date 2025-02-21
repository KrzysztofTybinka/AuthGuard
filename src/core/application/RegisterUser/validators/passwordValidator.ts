import { PasswordPolicy } from "../../../domain/user/passwordPolicy";


export class PasswordValidator {

    constructor(private policy: PasswordPolicy) { }

    public isValid(password: string): boolean {
        if (password.length < this.policy.minLength || password.length > this.policy.maxLength) {
            return false;
        }

        const specialCharacters = password.replace(/[a-zA-Z0-9]/g, '');
        if (this.policy.minAmountOfSpecialCharacters > 0 && specialCharacters.length < this.policy.minAmountOfSpecialCharacters) {
            return false;
        }

        const numbers = password.replace(/[^0-9]/g, '');
        if (this.policy.minAmountOfNumbers > 0 && numbers.length < this.policy.minAmountOfNumbers) {
            return false;
        }

        const capitalLetters = password.replace(/[^A-Z]/g, '');
        if (this.policy.minAmountOfCapitalLetters > 0 && capitalLetters.length < this.policy.minAmountOfCapitalLetters) {
            return false;
        }

        const lowerCaseLetters = password.replace(/[^a-z]/g, '');
        if (this.policy.minAmountOfLowerCaseLetters > 0 && lowerCaseLetters.length < this.policy.minAmountOfLowerCaseLetters) {
            return false;
        }

        return true;
    }

    public isProhibited(password: string): boolean {
        for (const prohibitedWord of this.policy.prohibited) {
            if (password.includes(prohibitedWord)) {
                return true;
            }
        }
        return false;
    }
}