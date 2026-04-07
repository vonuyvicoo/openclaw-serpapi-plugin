import { Type, Static } from "@sinclair/typebox";

export enum GoogleMapsSortBy {
    QUALITY_SCORE = "qualityScore",
    NEWEST_FIRST = "newestFirst",
    RATING_HIGH = "ratingHigh",
    RATING_LOW = "ratingLow"
}



export const GoogleMapsSearchSchema = Type.Object({
    q: Type.String({
        description: 'The query you want to search for'
    }),
    start: Type.Number({
        description: 'Offset for pagination. 0 is the first page. 20 for the next page.',
        default: 0
    })
});

export type GoogleMapsSearchDto = Static<typeof GoogleMapsSearchSchema>;

export const GoogleMapsSearchReviewsSchema = Type.Object({
    place_id: Type.String({
        description: 'The place_id field from the search_google_maps tool'
    }),
    num: Type.Number({
        description: 'The maximum number of results per page.',
        default: 10,
        maximum: 20,
        minimum: 1
    }),
    next_page_token: Type.Optional(Type.String({
        description: 'Optional. Used to retrieve the next page\'s results.'
    })),
    sort_by: Type.Enum(GoogleMapsSortBy, {
        description: 'The option / strategy to sort',
        default: GoogleMapsSortBy.QUALITY_SCORE
    })
})

export type GoogleMapsSearchReviewsDto = Static<typeof GoogleMapsSearchReviewsSchema>;
