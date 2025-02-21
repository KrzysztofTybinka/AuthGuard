import { Result } from "../abstractions/genericResult";
import { User } from "./user";

export interface UserRepository {
    getUserByEmailAsync(email: string): Promise<Result<User>>;
    createUserAsync(user: User): Promise<Result<void>>;
}