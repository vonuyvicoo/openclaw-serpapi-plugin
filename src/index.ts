import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";
import { YelpSearchSchema, YelpSearchDto, YelpSearchReviewsSchema, YelpSearchReviewsDto } from "./yelp/schemas/yelp.schema";
import { SerpAPI, SerpAPIClientOptions } from "./classes";

export default definePluginEntry({
    id: "openclaw-serpapi-plugin",
    name: "OpenClaw SerpAPI Plugin",
    description: "Enables OpenClaw to resolve SerpAPI tools and execute tools on a proper manner.",
    register(api) {
        // Capture config at init time — api.pluginConfig is not available inside execute() (openclaw#56432)
        const capturedConfig = (api.pluginConfig && typeof api.pluginConfig === 'object' && api.pluginConfig.apiKey)
            ? api.pluginConfig
            : null;

        const getClient = (): SerpAPI => {
            if (!capturedConfig?.apiKey || typeof capturedConfig.apiKey !== 'string')
                throw new Error("SerpAPI plugin is not configured. Set apiKey in ~/.openclaw/openclaw.json under plugins.entries.openclaw-serpapi-plugin.config");
            if (capturedConfig.baseURL && typeof capturedConfig.baseURL !== 'string')
                throw new Error("Base URL must be a string.");
            const config: SerpAPIClientOptions = {
                apiKey: capturedConfig.apiKey,
                ...(capturedConfig.baseURL ? { baseURL: capturedConfig.baseURL as string } : undefined)
            };
            return new SerpAPI(config);
        };

        api.registerTool({
            name: "search_yelp",
            description: "Search yelp for places",
            label: "Search for yelp places",
            parameters: YelpSearchSchema,
            async execute(_id: string, params: YelpSearchDto) {
                const results = await getClient().yelp.search(params);
                return { 
                    content: [
                        { 
                            type: "text", 
                            text: `Got: ${JSON.stringify(results, null, 2)}` ,
                        }
                    ],
                    details: "None"
                };
            },
        });
        
        api.registerTool({
            name: "search_yelp_reviews",
            description: "Search yelp for reviews based on a place ID",
            label: "Search for yelp reviews based on a place ID",
            parameters: YelpSearchReviewsSchema,
            async execute(_id: string, params: YelpSearchReviewsDto) {
                const results = await getClient().yelp.searchReviews(params);
                return { 
                    content: [
                        { 
                            type: "text", 
                            text: `Got: ${JSON.stringify(results, null, 2)}` ,
                        }
                    ],
                    details: "None"
                };
            },
        });

    },
});
