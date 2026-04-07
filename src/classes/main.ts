import { SerpAPIClient } from "@/_internal/client";
import { GoogleMapsService } from "@/google-maps/google-maps.service";
import { SerpAPIClientOptions } from "@/interfaces/client.interface";
import { YelpService } from "@/yelp/yelp.service";

class SerpAPI extends SerpAPIClient {
    public yelp: YelpService; 
    public googleMaps: GoogleMapsService;

    constructor(options: SerpAPIClientOptions) {
        super(options);
        this.yelp = new YelpService(this);
        this.googleMaps = new GoogleMapsService(this);
    }
}

export {
    SerpAPIClientOptions,
    SerpAPI,
}
export * from "../interfaces";
export * from "../errors";
