[**openclaw-serpapi-plugin v1.0.0**](../README.md)

***

[openclaw-serpapi-plugin](../README.md) / default

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
