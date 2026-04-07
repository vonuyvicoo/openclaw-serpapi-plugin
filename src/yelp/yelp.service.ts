import { SerpAPIClient } from "@/_internal/client";
import { YelpSearchDto, YelpSearchReviewsDto } from "./schemas/yelp.schema";

export class YelpService {
    constructor(
        private readonly client: SerpAPIClient
    ) {}

    async search(params: YelpSearchDto) {
        const res = await this.client._getClient().get(``, {
            params: {
                engine: "yelp",
                find_loc: params.find_loc,
                find_desc: params.find_desc,
                start: params.start
            }
        });

        return res.data;
    }

    async searchReviews(params: YelpSearchReviewsDto) {
        const res = await this.client._getClient().get(``, {
            params: {
                engine: "yelp_reviews",
                place_id: params.place_id,
                q: params.q,
                sortby: params.sortby,
                not_recommended: params.not_recommended,
                num: params.num,
                start: params.start,
            }
        });

        return res.data;
    }
}
