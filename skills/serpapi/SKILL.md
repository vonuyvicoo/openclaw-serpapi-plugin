---
name: serpapi
description: SerpAPI skill for OpenClaw — use search_yelp and search_yelp_reviews tools to find places and read reviews via SerpAPI.
---

# SerpAPI Skill

This skill is provided by the `openclaw-serpapi-plugin`. It gives you access to Yelp search and review data via SerpAPI.

## Available Tools

- **`search_yelp`** — Search for businesses and places on Yelp by description and location.
- **`search_yelp_reviews`** — Fetch reviews for a specific Yelp place using its place ID.

## When to Use

Use these tools when the user asks to:
- Find restaurants, businesses, or places in a specific area
- Look up reviews or ratings for a place
- Compare options based on Yelp data

## Usage Pattern

1. Use `search_yelp` with a location (`find_loc`) and optional query (`find_desc`) to get a list of places and their Yelp IDs.
2. Use `search_yelp_reviews` with the `place_id` from step 1 to read reviews for a specific place.

## Pagination

- `search_yelp`: results start at `start=0`, next page at `start=20`, then `start=30`, etc.
- `search_yelp_reviews`: results start at `start=0`, next page at `start=49` (or match `num` param).

## Notes

- The plugin requires a SerpAPI key configured in `~/.openclaw/openclaw.json`.
- If a tool call fails with a configuration error, ask the user to set `apiKey` under `plugins.entries.openclaw-serpapi-plugin.config`.
