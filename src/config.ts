import fs from "fs";
import path from "path";
import { PasswordPolicy } from "./core/domain/user/passwordPolicy";

const configPath = path.join(__dirname, "password-policy.json");
const policyConfig = JSON.parse(fs.readFileSync(configPath, "utf8"));

export const passwordPolicy = new PasswordPolicy(
    policyConfig.minLength,
    policyConfig.maxLength,
    policyConfig.minAmountOfSpecialCharacters,
    policyConfig.minAmountOfNumbers,
    policyConfig.minAmountOfCapitalLetters,
    policyConfig.minAmountOfLowerCaseLetters,
    policyConfig.prohibited
);