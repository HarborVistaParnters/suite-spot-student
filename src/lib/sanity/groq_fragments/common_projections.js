import groq from "groq";

export const SEO_PROJECTION = groq`{
    title,
    description
}`;

export const OPEN_GRAPH_PROJECTION = groq`{
    "title": ogTitle,
    "image": ogImage {
        ...,
        asset->
    }
}`;

export const FEATURED_IMAGE_PROJECTION = groq`{
    asset->,
    alt,
    crop,
    hotspot
}`;

// use for `link` and `button_link`
export const LINK_PROJECTION = groq`{
    _type,
    type,
    label,
    type == "reference" => {
        reference-> {
            _id,
            "slug": slug.current,
            title
        }
    },
    type == "internal" => {
        "href": internal
    },
    type == "external" => {
        "href": external,
        target
    },
    style
}`;

export const PROPERTY_LISTING_PROJECTION = groq`{
    _type,
    title,
    rent,
    available_on,
    contact_url,
    "image": featuredImage ${FEATURED_IMAGE_PROJECTION}
}`;

export const RICH_TEXT_PROJECTION = groq`_type == "rich_text" => {
    blocks[]
}`;
