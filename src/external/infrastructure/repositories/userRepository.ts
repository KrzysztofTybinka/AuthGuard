import { Result, success, failure } from "../../../core/domain/abstractions/result";
import { User } from "../../../core/domain/user/user";
import { UserRepository } from "../../../core/domain/user/userRepository";
import { mapUserDtoToDomainUser } from "../mappers/dtoToDomainMapper";
import { UserDto } from "./Models/UserDto";
import pool from "./db";
import { UserRepositoryErrors } from "./userRepositoryErrors";

export class UserRepositoryImpl implements UserRepository {

    public async getByEmailAsync(email: string)
        : Promise<Result<User>> {
        try {
            const queryResult = await pool.query<UserDto>(
                `SELECT * FROM users
                WHERE email = $1`,
                [email]);

            if (queryResult.rows.length === 0) {
                return failure(UserRepositoryErrors.userNotFound());
            }

            const user = mapUserDtoToDomainUser(queryResult);
            return success(user);

        } catch (error) {
            return failure(UserRepositoryErrors.userNotFound());
        }
    }

    insertAsync(user: User): Promise<Result<void>> {
        throw new Error("Method not implemented.");
    }

}