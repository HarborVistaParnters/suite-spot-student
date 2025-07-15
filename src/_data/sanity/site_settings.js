import groq from "groq";
import {
    OPEN_GRAPH_PROJECTION,
    SEO_PROJECTION,
} from "../../lib/sanity/groq_fragments/common_projections.js";
import { sanity_client } from "../../lib/sanity/sanity_client.js";

const SITE_SETTINGS_QUERY = groq`*[_type == "settings_student"][0] {
    site_name,
    site_domain,
    site_contact,
    footer_image {
        ...,
        asset->
    },
    seo ${SEO_PROJECTION},
    "open_graph": openGraph ${OPEN_GRAPH_PROJECTION}
}`;

export default async function () {
    const data = await sanity_client.fetch(SITE_SETTINGS_QUERY);

    return data;
}
