/** @link https://www.11ty.dev/docs/config/ */
import { shortcodes } from "./src/lib/shortcodes/index.js";
import { filters } from "./src/lib/filters/index.js";
import sitemap_plugin from "@quasibit/eleventy-plugin-sitemap";

/** @param {import("@11ty/eleventy").UserConfig} config */
export default function (config) {
    /** Liquid Template Settings */
    config.setLayoutResolution(false);
    config.setLiquidOptions({ jsTruthy: true, dynamicPartials: true });

    /** Passthrough directories */
    config.addPassthroughCopy({ "src/static": "/" });

    /** Plugins */
    config.addPlugin(sitemap_plugin, {
        sitemap: {
            hostname: "https://www.suitespotmgmt.com",
        },
    });

    /** Custom Collections */
    config.addCollection("property_listing", function (collections_api) {
        const properties = collections_api.getFilteredByTag("property");
        return properties
            .flatMap((property) => {
                if (property.data.data.listings.length) {
                    return property.data.data.listings.map((listing) => {
                        const parent_property = property.data.data;
                        return {
                            ...listing,
                            property: {
                                _id: parent_property._id,
                                slug: parent_property.slug,
                                location: parent_property.location,
                                unit_mix: parent_property.unit_mix,
                                image: parent_property.image,
                            },
                        };
                    });
                }
            })
            .filter(Boolean);
    });

    /** Shortcodes */
    for (const key in shortcodes) {
        if (shortcodes.hasOwnProperty(key)) {
            config.addShortcode(key, shortcodes[key]);
        }
    }

    /** Filters */
    for (const key in filters) {
        if (filters.hasOwnProperty(key)) {
            config.addFilter(key, filters[key]);
        }
    }

    return {
        dir: {
            input: "src",
        },
        templateFormats: ["html", "liquid", "md", "11ty.js"],
        htmlTemplateEngine: "liquid",
        markdownTemplateEngine: "liquid",
    };
}
