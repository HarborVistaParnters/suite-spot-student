import groq from "groq";
import { sanity_client } from "../../lib/sanity/sanity_client.js";

const PROPERTY_AMENITIES_QUERY = groq`*[_type == "amenities_list"][0] {
    items[] {
        title,
        icon
    }
}`;

export default async function () {
    const data = await sanity_client.fetch(PROPERTY_AMENITIES_QUERY);

    return data;
}
