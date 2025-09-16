import groq from "groq";
import {
    LINK_PROJECTION,
    FEATURED_IMAGE_PROJECTION,
} from "./common_projections.js";

export const RICH_TEXT_PROJECTION = groq`_type == "rich_text" => {
    blocks[] {
        ...
    }
}`;

export const HOME_HERO_PROJECTION = groq`_type == "home_hero" => {
    heading,
    preview,
    "image": featuredImage ${FEATURED_IMAGE_PROJECTION},
    featured_box {
        "image":  featuredImage ${FEATURED_IMAGE_PROJECTION}
    },
    "ctas": coalesce(
        ctas[] ${LINK_PROJECTION},
        []
    )
}`;

export const TEXT_IMAGE_DIPTYCH_PROJECTION = groq`_type == "text_image_diptych" => {
    heading,
    preview,
    images[] ${FEATURED_IMAGE_PROJECTION},
    "ctas": coalesce(
        ctas[] ${LINK_PROJECTION},
        []
    ),
    "options": {
        layout
    }
}`;

export const CURRENT_LISTINGS_LIST_PROJECTION = groq`_type == "current_listings_list" => {
    heading,
    "ctas": coalesce(
        ctas[] ${LINK_PROJECTION},
        []
    )
}`;

export const PROPERTIES_LIST_PROJECTION = groq`_type == "properties_list" => {
    heading,
    items[] {
        _ref
    }
}`;

export const AMENITIES_LIST_PROJECTION = groq`_type == "amenities_list_section" => {
    heading,
    "image": featuredImage ${FEATURED_IMAGE_PROJECTION}
}`;

export const LOCATION_HIGHLIGHTS_PROJECTION = groq`_type == "location_highlights" => {
    heading,
    preview,
    walkscore {
        score,
        label
    },
    walk_highlights[] {
        title,
        distance,
        icon
    },
    "image": featuredImage ${FEATURED_IMAGE_PROJECTION}
}`;

export const FAQS_PROJECTION = groq`_type == "faqs" => {
    heading,
    items[] {
        question,
        answer
    }
}`;
