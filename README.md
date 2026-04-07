# OpenClaw SerpAPI Plugin

Adds Yelp and Google Maps search and review tools to OpenClaw via SerpAPI. Minimal wrappers — feel free to contribute more.

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

This plugin ships a skill at `skills/serpapi/SKILL.md` that teaches the agent when and how to use the tools. OpenClaw loads it automatically when the plugin is active.


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

> **default**: `object`

Defined in: [index.ts:11](https://github.com/vonuyvicoo/openclaw-serpapi-plugin/blob/e9287ac1f68dee86a5242e6fc4bff6c3d0b91f34/src/index.ts#L11)

## Type Declaration

### configSchema

> **configSchema**: `object`

#### configSchema.jsonSchema

> **jsonSchema**: `object`

#### configSchema.jsonSchema.additionalProperties

> **additionalProperties**: `boolean` = `true`

#### configSchema.jsonSchema.type

> **type**: `string` = `"object"`

#### configSchema.safeParse()

> **safeParse**: (`v`) => `object`

##### Parameters

###### v

`unknown`

##### Returns

`object`

###### data

> **data**: `unknown` = `v`

###### success

> **success**: `boolean` = `true`

### description

> **description**: `string`

### id

> **id**: `string`

### name

> **name**: `string`

### register()

> **register**: (`api`) => `void`

#### Parameters

##### api

`OpenClawPluginApi`

#### Returns

`void`
