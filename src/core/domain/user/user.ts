
export class User {

    public constructor(
        public id: number,
        public email: string,
        public passwordHash: string
    ) { }
}