/** Filter: Generate a property address from a Sanity property type and location field.
 * @param {Object} location_fields - Sanity location property on the property object type.
 * @returns {string} Formatted location
 */
export const get_property_address = (location_fields, style = "full") => {
    const location = `${
        location_fields.city
    }, ${location_fields.state.toUpperCase()} ${location_fields.zip}`;

    if (style == "full") {
        return `${location_fields.address}, ${location}`;
    } else if (style == "location") {
        return location;
    }
};
