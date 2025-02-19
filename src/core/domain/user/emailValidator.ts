export class EmailValidator {
    static isValid(email: string): boolean {
        if (!email || email.trim() === "") {
            return false;
        }
        if (email.startsWith('.') || email.endsWith('.')) {
            return false;
        }
        if (email.includes('..')) {
            return false;
        }
        const emailSplittedByAt = email.split('@');

        if (emailSplittedByAt.length !== 2) {
            return false;
        }
        const [localPart, domainPart] = emailSplittedByAt;

        if (localPart.length === 0 || domainPart.length === 0) {
            return false;
        }
        //Valid email must have at least
        //one dot in a domain part
        if (!domainPart.includes('.')) {
            return false;
        }
        return true;
    }
}