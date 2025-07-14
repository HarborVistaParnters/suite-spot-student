/** Filter: Format currency
 * @param {number} number - Number to format as currency
 * @returns {string} Intl.NumberFormat currency format
 */
export const format_currency = (number) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    }).format(number);
};
