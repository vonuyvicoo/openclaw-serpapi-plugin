import { SerpAPIClient } from "@/_internal/client";
import { SerpAPIClientOptions } from "@/interfaces/client.interface";
import { YelpService } from "@/yelp/yelp.service";

class SerpAPI extends SerpAPIClient {
    public yelp: YelpService; 

    constructor(options: SerpAPIClientOptions) {
        super(options);
        this.yelp = new YelpService(this);
    }
}

export {
    SerpAPIClientOptions,
    SerpAPI,
}
export * from "../interfaces";
export * from "../errors";
