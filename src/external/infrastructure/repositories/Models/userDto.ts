export interface UserDto {
    id: number;
    email: string;
    passwordHash: string;
    created_at: Date;
}