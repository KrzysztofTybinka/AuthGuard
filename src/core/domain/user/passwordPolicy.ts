/**
 * Defines  password policy.
 * @param {number} minLength - Minimal password length.
 * @param {number} maxLength - Maximum password length.
 * @param {number} minAmountOfSpecialCharacters - Minimum required special characters (0 means no requirement).
 * @param {number} minAmountOfNumbers - Minimum required numbers (0 means no requirement).
 * @param {number} minAmountOfCapitalLetters - Minimum required capital letters (0 means no requirement).
 * @param {number} minAmountOfLowerCaseLetters - Minimum required lower case letters (0 means no requirement).
 * @param {string[]} prohibited - List of prohibited words or sequences in the password.
 */
export class PasswordPolicy {

    constructor(
        public minLength: number,
        public maxLength: number,
        public minAmountOfSpecialCharacters: number,
        public minAmountOfNumbers: number,
        public minAmountOfCapitalLetters: number,
        public minAmountOfLowerCaseLetters: number,
        public prohibited: string[]
    ) { }

    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}