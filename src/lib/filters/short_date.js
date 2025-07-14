import { format } from "@formkit/tempo";

/*** Filter: Format a date with formkit/tempo.
 * @param {string} date_string - ISO datestring.
 * @returns {string} Date formatted in medium format.
 */
export const short_date = (date_string) => {
    return format({
        date: date_string,
        format: "medium",
        tz: "UTC",
    });
};
