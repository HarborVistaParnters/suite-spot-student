export const data = {
    pagination: {
        data: "sanity.properties",
        size: 1,
        addAllPagesToCollections: true,
        alias: "data",
    },
    tags: "property",
    layout: "layouts/property.liquid",
    permalink: ({ data }) => `${data.slug}/`,
};
