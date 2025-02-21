import { stringIsNullOrWhitespace } from "../helpers/stringHelpers"

export class ValidationResult {

    private _errors: { [field: string]: string[] } = {};

    /** 
     * Returns an object where each key represents a field with validation errors,  
     * and the corresponding value is an array of error messages for that field. 
     */
    public get errors(): { [field: string]: string[] } {
        return this._errors;
    }

    /** 
     * Adds an error to a ValidationResult object.
     * @param {string} field - for what field an error occured.
     * @param {string} error - error message for that field. 
    */
    public addError(field: string, error: string): void {
        if (stringIsNullOrWhitespace(field)) {
            throw new Error(`Field cannot be empty.`)
        }
        if (stringIsNullOrWhitespace(error)) {
            throw new Error(`Error cannot be empty.`)
        }
        this.addOrCreateError(field, error);
    }

    private addOrCreateError(
        field: string,
        error: string
    ): void {
        if (!this._errors[field]) {
            this._errors[field] = [];
        }
        this._errors[field].push(error);
    }

    public get isValid(): boolean {
        return Object.keys(this._errors).length === 0;
    }

}
