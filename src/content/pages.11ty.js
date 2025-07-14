function assign_layout(data) {
    let layout = "";
    switch (data.layout) {
        case "home":
            layout = "home";
            break;
        case "utility":
            layout = "utility";
            break;
        default:
            layout = "default";
            break;
    }
    return `layouts/${layout}.liquid`;
}

export const data = {
    pagination: {
        data: "sanity.pages",
        size: 1,
        addAllPagesToCollections: true,
        alias: "data",
    },
    tags: "page",
    permalink: ({ data }) => {
        if (data._id === "b451e470-6379-42fa-839e-3cd3c2850996") {
            return "/";
        } else {
            return `${data.slug}/`;
        }
    },
    eleventyComputed: {
        layout: ({ data }) => assign_layout(data),
    },
};
