
export class User {

    public constructor(
        public id: string,
        public email: string,
        public passwordHash: string
    ) { }
}