import { Type, Static } from "@sinclair/typebox";

export enum YelpSortBy {
    RELEVANCE_DESC = "relevance_desc",
    DATE_DESC = "date_desc",
    DATE_ASC = "date_asc",
    RATING_DESC = "rating_desc",
    RATING_ASC = "rating_asc",
    ELITES_DESC = "elites_desc"
}

export const YelpSearchSchema = Type.Object({
    find_desc: Type.Optional(Type.String({
        description: 'The query you want to search',
    })),
    find_loc: Type.String({
        description: "Defines where you want the search to originate. You can use any location you would use in a regular Yelp search"
    }),
    start: Type.Number({
        default: 0,
        description: 'The result offset. By default 0 is first page, 20 is the 2nd page, 30 is the 3rd page'
    })
})

export type YelpSearchDto = Static<typeof YelpSearchSchema>;

export const YelpSearchReviewsSchema = Type.Object({
    place_id: Type.String({
        description: "The Yelp ID of a place. each place has two unique IDs" +
            "\n(e.g.) ED7A7vDdg8yLNKJTSVHHmg and arabica-brooklyn). " +
            "Only the first ID type is supported (e.g. ED7A7vDdg8yLNKJTSVHHmg). " +
            "To extract the ID of a place, you can use our Yelp Search tool.",
    }),
    q: Type.Optional(Type.String({
        description: 'The query to search through yelp reviews. This is OPTIONAL.'
    })),
    sortby: Type.Optional(
        Type.Enum(YelpSortBy, {
            description: 'Use for sorting results. This is OPTIONAL'
        })
    ),
    not_recommended: Type.Optional(
        Type.Boolean({
            description: 'Whether to include non recommended reviews. By default only recommended views are shown'
        })
    ),
    num: Type.Number({
        default: 49,
        description: 'Maximum number of results to return in one page'
    }),
    start: Type.Number({
        default: 0,
        description: 'The result offset. By default 0 is first page, 49 is the 2nd page, 98 is the 3rd page, unless the num property is changed'
    })
});

export type YelpSearchReviewsDto = Static<typeof YelpSearchReviewsSchema>;
