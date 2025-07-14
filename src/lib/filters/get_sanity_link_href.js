import { uriLooksSafe } from "@portabletext/to-html";

/** Filter: Helper to resolve Sanity link object to a valid href.
 * @param {Object} link_object - Sanity link object type.
 * @returns Link href as string.
 */
export const get_sanity_link_href = (link_object) => {
    let url = "";

    switch (link_object.type) {
        case "external":
            url = link_object.href;
            break;
        case "reference":
            url = link_object.reference.slug;
            break;
        default:
            url = link_object.href;
            break;
    }

    /* ⚠️ URLs should always be valid from Sanity, but
        also should check here */
    if (uriLooksSafe(url)) {
        return url;
    }

    return "";
};
