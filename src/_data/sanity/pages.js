import groq from "groq";
import { sanity_client } from "../../lib/sanity/sanity_client.js";
import {
    FEATURED_IMAGE_PROJECTION,
    OPEN_GRAPH_PROJECTION,
    SEO_PROJECTION,
} from "../../lib/sanity/groq_fragments/common_projections.js";
import {
    HOME_HERO_PROJECTION,
    AMENITIES_LIST_PROJECTION,
    FAQS_PROJECTION,
    TEXT_IMAGE_DIPTYCH_PROJECTION,
    LOCATION_HIGHLIGHTS_PROJECTION,
    CURRENT_LISTINGS_LIST_PROJECTION,
    PROPERTIES_LIST_PROJECTION,
} from "../../lib/sanity/groq_fragments/module_projections.js";
import { workspaceTag } from "../../lib/utils/workspaceTag.js";

const PAGES_QUERY = groq`*[_type == "page" && $workspaceTagID in workspaces[]._ref] {
    _id,
    _type,
    title,
    "slug": slug.current,
    layout,
    layout == "default" || layout == "utility" => {
        page_header {
            heading,
            "image": featuredImage ${FEATURED_IMAGE_PROJECTION}
        }
    },
    modules[] {
        _type,
        ${HOME_HERO_PROJECTION},
        ${AMENITIES_LIST_PROJECTION},
        ${LOCATION_HIGHLIGHTS_PROJECTION},
        ${FAQS_PROJECTION},
        ${CURRENT_LISTINGS_LIST_PROJECTION},
        ${PROPERTIES_LIST_PROJECTION},
        ${TEXT_IMAGE_DIPTYCH_PROJECTION}
    },
    seo ${SEO_PROJECTION},
    "open_graph": openGraph ${OPEN_GRAPH_PROJECTION}
}`;

export default async function () {
    const data = await sanity_client.fetch(PAGES_QUERY, {
        workspaceTagID: workspaceTag.id,
    });

    return data;
}
