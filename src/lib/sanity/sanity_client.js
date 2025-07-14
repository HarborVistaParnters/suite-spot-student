import { createClient } from "@sanity/client";

export const sanity_client = createClient({
    projectId: "hmp7y6kn",
    dataset: "production",
    apiVersion: "2025-02-01",
    useCdn: false,
});
