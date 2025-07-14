import { isBefore } from "@formkit/tempo";

/** Filter: Check if a provided date is before now (use for listing availability)
 * @param {string} date_string ISO date string.\
 * @returns {boolean} True if date is before now
 */
export const is_before_now = (date_string) => {
    const now = new Date();
    return isBefore(date_string, now);
};
