function assign_layout(data) {
    let layout = "";
    switch (data.layout) {
        case "home":
            layout = "home";
            break;
        case "utility":
            layout = "utility";
            break;
        case "policy":
            layout = "policy";
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
        if (data._id === "c7f14479-088e-4b49-b696-d8329e066097") {
            return "/";
        } else {
            return `${data.slug}/`;
        }
    },
    eleventyComputed: {
        layout: ({ data }) => assign_layout(data),
    },
};
