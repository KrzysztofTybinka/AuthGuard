import { QueryResult } from "pg";
import { User } from "../../../core/domain/user/user";
import { UserDto } from "../repositories/Models/UserDto";

export function mapUserDtoToDomainUser(userDto: QueryResult<UserDto>): User {
    return new User(
        userDto.rows[0].id,
        userDto.rows[0].email,
        userDto.rows[0].passwordHash
    );
}