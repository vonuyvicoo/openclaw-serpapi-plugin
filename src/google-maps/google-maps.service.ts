import { SerpAPIClient } from "@/_internal/client";
import { GoogleMapsSearchDto, GoogleMapsSearchReviewsDto } from "./schemas/google-maps.schema";

export class GoogleMapsService {
    constructor(
        private readonly client: SerpAPIClient
    ) {}

    async search(params: GoogleMapsSearchDto) {
        const res = await this.client._getClient().get(``, {
            params: {
                engine: "google_maps",
                start: params.start,
                type: 'search',
                q: params.q
            }
        });

        return res.data;
    }

    async searchReviews(params: GoogleMapsSearchReviewsDto) {
        const res = await this.client._getClient().get(``, {
            params: {
                engine: "google_maps_reviews",
                place_id: params.place_id,
                sort_by: params.sort_by,
                num: params.num,
                ...(params.next_page_token ? { next_page_token: params.next_page_token } : {})
            }
        });

        return res.data;
    }
}

