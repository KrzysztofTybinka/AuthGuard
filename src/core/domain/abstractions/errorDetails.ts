
export class ErrorDetails {

    private constructor(
        public code: string,
        public description: string,
        public errorType: ErrorType
    ) { }

    public static failure = (code: string, description: string) =>
        new ErrorDetails(code, description, ErrorType.failure,);

    public static validation = (code: string, description: string) =>
        new ErrorDetails(code, description, ErrorType.validation);

    public static notFound = (code: string, description: string) =>
        new ErrorDetails(code, description, ErrorType.notFound);

    public static conflict = (code: string, description: string) =>
        new ErrorDetails(code, description, ErrorType.conflict);

    public static externalServiceFailure = (code: string, description: string) =>
        new ErrorDetails(code, description, ErrorType.externalServiceFailure);
}


export enum ErrorType {
    failure = 0,
    validation = 1,
    notFound = 2,
    conflict = 3,
    externalServiceFailure = 4
}