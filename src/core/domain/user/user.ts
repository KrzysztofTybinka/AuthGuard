
export class User {

    private constructor(
        public id: string,
        public email: string,
        public passwordHash: string
    ) { }
}