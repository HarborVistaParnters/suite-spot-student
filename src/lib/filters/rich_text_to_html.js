import {
    toHTML,
    uriLooksSafe,
    escapeHTML,
    defaultComponents,
} from "@portabletext/to-html";

/** Filter: Convert full rich text module to HTML with @portabletext/to-html package.
 * @param {Object} rich_text - Sanity portable text blocks
 */
export const rich_text_to_html = (rich_text) => {
    // const components = {
    //     types: {

    //     },
    //     marks: {

    //     }
    // }
    return toHTML(rich_text);
};
