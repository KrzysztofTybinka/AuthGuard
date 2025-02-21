import { stringIsNullOrWhitespace } from "../../../domain/helpers/stringHelpers";

export class EmailValidator {

    public isValid(email: string): boolean {
        if (stringIsNullOrWhitespace(email)) {
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
        } else {
            const [localPart, domainPart] = emailSplittedByAt;

            if (localPart.length === 0) {
                return false;
            }
            if (domainPart.length === 0) {
                return false;
            }
            if (!domainPart.includes('.')) {
                return false;
            }
            return true;
        }
    }

}