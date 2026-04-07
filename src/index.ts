import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";
import { YelpSearchSchema, YelpSearchDto, YelpSearchReviewsSchema, YelpSearchReviewsDto } from "./yelp/schemas/yelp.schema";
import { SerpAPI, SerpAPIClientOptions } from "./classes";

export default definePluginEntry({
    id: "openclaw-serpapi-plugin",
    name: "OpenClaw SerpAPI Plugin",
    description: "Enables OpenClaw to resolve SerpAPI tools and execute tools on a proper manner.",
    register(api) {
        const pluginConfig = api.pluginConfig;
        if(!pluginConfig) throw new Error("Plugin configuration should be set in ~/.openclaw/openclaw.json");
        if(!pluginConfig.apiKey || typeof pluginConfig.apiKey !== 'string') throw new Error("No API key configured.");
        if(pluginConfig.baseURL && typeof pluginConfig.baseURL !== 'string') throw new Error("Base URL provided but not a string.");

        const config: SerpAPIClientOptions = {
            apiKey: pluginConfig.apiKey,
            ...(pluginConfig.baseURL ? { baseURL: pluginConfig.baseURL as string } : undefined)
        } 

        const serpApi = new SerpAPI(config);

        api.registerTool({
            name: "search_yelp",
            description: "Search yelp for places",
            label: "Search for yelp places",
            parameters: YelpSearchSchema,
            async execute(_id: string, params: YelpSearchDto) {
                const results = await serpApi.yelp.search(params);
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
                const results = await serpApi.yelp.searchReviews(params);
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
