# OpenClaw SerpAPI Plugin

Adds Yelp search and review tools to OpenClaw via SerpAPI. Minimal wrappers — feel free to contribute more.

## Installation

```
openclaw plugins install openclaw-serpapi-plugin
```

Requires OpenClaw ≥ 2026.3.24.

## Configuration

After installation, add your SerpAPI key to `~/.openclaw/openclaw.json`:

```json
{
  "plugins": {
    "entries": {
      "openclaw-serpapi-plugin": {
        "enabled": true,
        "config": {
          "apiKey": "YOUR_SERPAPI_KEY"
        }
      }
    }
  }
}
```

Get your API key from [serpapi.com/manage-api-key](https://serpapi.com/manage-api-key).

Make sure you enable it on your agent's tools:
<img width="1670" height="197" alt="Image" src="https://github.com/user-attachments/assets/4a60c670-af4d-4386-9c43-6a1cd1edaf9d" />

[http://127.0.0.1:18789/agents](http://127.0.0.1:18789/agents) or a different port.

## Skill

This plugin ships a skill at `skills/serpapi/SKILL.md` that teaches the agent when and how to use the `search_yelp` and `search_yelp_reviews` tools. OpenClaw loads it automatically when the plugin is active.


