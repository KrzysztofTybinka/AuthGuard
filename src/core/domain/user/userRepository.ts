import { Result } from "../abstractions/genericResult";
import { User } from "./user";

export interface UserRepository {
    getByEmailAsync(email: string): Promise<Result<User>>;
    insertAsync(user: User): Promise<Result<void>>;
}