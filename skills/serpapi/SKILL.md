---
name: serpapi
description: SerpAPI skill for OpenClaw — use search_yelp, search_yelp_reviews, search_google_maps, and search_google_maps_reviews tools to find places and read reviews via SerpAPI.
---

# SerpAPI Skill

This skill is provided by the `openclaw-serpapi-plugin`. It gives you access to Yelp and Google Maps search and review data via SerpAPI.

## Available Tools

- **`search_yelp`** — Search for businesses and places on Yelp by description and location.
- **`search_yelp_reviews`** — Fetch reviews for a specific Yelp place using its place ID.
- **`search_google_maps`** — Search for businesses and places on Google Maps by query.
- **`search_google_maps_reviews`** — Fetch reviews for a specific Google Maps place using its place ID.

## When to Use

Use these tools when the user asks to:
- Find restaurants, businesses, or places in a specific area
- Look up reviews or ratings for a place
- Compare options based on Yelp or Google Maps data

## Usage Pattern

### Yelp
1. Use `search_yelp` with `find_loc` (location) and `find_desc` (what to search for) to get a list of places.
2. Use `search_yelp_reviews` with the `place_id` from step 1 to read reviews.

### Google Maps
1. Use `search_google_maps` with `q` (search query including location) to get a list of places with their `place_id`.
2. Use `search_google_maps_reviews` with the `place_id` from step 1 to read reviews.

## Pagination

- `search_yelp`: `start=0` → `start=20` → `start=30`, etc.
- `search_yelp_reviews`: `start=0` → `start=49`, etc.
- `search_google_maps`: `start=0` → `start=20`, etc.
- `search_google_maps_reviews`: use `next_page_token` returned in the previous response.

## Notes

- The plugin requires a SerpAPI key configured in `~/.openclaw/openclaw.json`.
- If a tool call fails with a configuration error, ask the user to set `apiKey` under `plugins.entries.openclaw-serpapi-plugin.config`.
