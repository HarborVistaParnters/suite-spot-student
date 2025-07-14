import { uriLooksSafe } from "@portabletext/to-html";

/** Liquid shortcode: Generate an anchor tag from a Sanity link object.
 * @param {Object} link_object - Sanity link object type.
 * @param {string} classes - Optional comma-separated string of class names.
 * @param {string} attrs - Other attributes for the tag parsed as-is
 * @returns {string} HTML anchor tag.
 */
export const sanity_link = (link_object, classes = "", attrs = "") => {
    let url = "";
    let label = "";
    let target = "";

    switch (link_object.type) {
        case "external":
            url = link_object.href;
            label = link_object.label;
            if (link_object.target) {
                target = "_blank";
            }
            break;
        case "reference":
            url = link_object.reference.slug;
            label = link_object.label ?? link_object.reference.title;
            break;
        default:
            url = link_object.href;
            label = link_object.label;
            break;
    }

    /* ⚠️ URLs should always be valid from Sanity, but
        also should check here */
    if (uriLooksSafe(url)) {
        return `<a href="${url}" ${target ? `target="${target}"` : ""} ${
            classes ? `class="${classes.split(",").join(" ")}"` : ""
        } ${attrs ?? ""}>${label}</a>`;
    }

    return label;
};
