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

## Skill

This plugin ships a skill at `skills/serpapi/SKILL.md` that teaches the agent when and how to use the `search_yelp` and `search_yelp_reviews` tools. OpenClaw loads it automatically when the plugin is active.


<a name="readmemd"></a>

**openclaw-serpapi-plugin v1.0.0**

***

# openclaw-serpapi-plugin v1.0.0

## Variables

- [default](#variablesdefaultmd)


<a name="variablesdefaultmd"></a>

[**openclaw-serpapi-plugin v1.0.0**](#readmemd)

***

[openclaw-serpapi-plugin](#readmemd) / default

# Variable: default

> **default**: `DefinedPluginEntry`

Defined in: [index.ts:5](https://github.com/vonuyvicoo/openclaw-serpapi-plugin/blob/044c2f3ca0c8ca91bfbd7547589f64f242d7968c/src/index.ts#L5)
