import groq from "groq";
import { sanity_client } from "../../lib/sanity/sanity_client.js";
import {
    FEATURED_IMAGE_PROJECTION,
    PROPERTY_LISTING_PROJECTION,
    RICH_TEXT_PROJECTION,
} from "../../lib/sanity/groq_fragments/common_projections.js";

const PROPERTIES_QUERY = groq`*[_type == "property"] {
    _id,
    _type,
    title,
    "slug": slug.current,
    location {
        address,
        city,
        state,
        zip
    },
    unit_mix {
        beds,
        baths
    },
    property_description {
        ${RICH_TEXT_PROJECTION}
    },
    "image": featuredImage ${FEATURED_IMAGE_PROJECTION},
    preview,
    "listings": coalesce(
        listings[] ${PROPERTY_LISTING_PROJECTION},
        []
    )
}`;

export default async function () {
    const data = await sanity_client.fetch(PROPERTIES_QUERY);

    return data;
}
