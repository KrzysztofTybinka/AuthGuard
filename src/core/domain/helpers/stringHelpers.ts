/**
 * Checks if a string is null, empty, or contains only whitespace.
 * @param {string | null | undefined} str - The string to check.
 * @returns {boolean} `true` if the string is null, empty, or whitespace; otherwise, `false`.
 */
export function stringIsNullOrWhitespace(str: string | null | undefined): boolean {
    return !str || str.trim().length === 0;
}