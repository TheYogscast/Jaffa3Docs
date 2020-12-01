# JaffaMod

```js
class JaffaMod extends EventEmitter {
  //
}
```

## Properties
- `String` `environment` Which environment the bot is running at. Either `twitch` or `discord`.
- `{String}` `options` Runtime options.
- `Raven` `raven` Sentry client.
- `{function}` `modules` Modules object.
- `{function}` `commands` Dynamic commands object.
- `Axios` `api` API client.
- `RedisCache` `cache` Cache client.
- `Mongoose` `db` DB client.
- `Store` `store` Versatile storage.
  - JaffMod supports hot-reloading which is the act of reloading the code while it's running. The store is basically just an Object which stays the same in between reloads so you can leverage that to store information.
- [`Utils`](utils.md) `utils` Bot utilities.

## Methods

### registerCommand
```js
registerCommand(name, callback, signature = undefined)
```

Function for registering dynamic commands and adding them to `this.commands`.

**Returns: nothing.**
- `String` `name` Command name.
- `function` `callback` Command logic callback.
- `String` `signature` Command signature.

The logic callback will be called with the following parameters:
`callback(message, reply, discord)`
- `Object` `message` Message object.
    - `String` `content` User's message.
    - `[String]` `arguments` Message arguments, excluding the command name itself.
    - `{String}` `userstate` Twitch userstate. **Only for Twitch.**
    - `DiscordJS.Message` `...` [Discord message object](https://discord.js.org/#/docs/main/stable/class/Message) which will be merged with the message object. **Only for Discord.**
- `function` `reply` Reply callback - handy shorthand to send a message to the originating Twitch chat channel/Discord server channel.
- `Boolean` `discord` Returns `true` if platform is Discord.

The signature is a Linux-flavour (`<required> [optional]`) argument string like this: `<example1> <example2> [example3]` where example1 and example2 are required but example3 is optional.
The required/optional is processed at JaffaMod level before it reaches your callback.
The names inside the brackets are not linked to anything, the only significance is that JaffaMod will reply "Bad syntax. The command syntax is: " and then the signature string.
___
### determineModerator
```js
determineModerator(message, discord)
```

**Returns: `Boolean`** Whether the user is a moderator.

- `Object` `message` A message object.
- `Boolean` `discord` True if platform is Discord.
____

### determineSubscriber
```js
determineSubscriber(message, discord)
```

**Returns: `Boolean`** Whether the user is a subscriber.

- `Object` `message` A message object.
- `Boolean` `discord` True if platform is Discord.

____
### resolveChannelID
```js
resolveChannelID(message, discord) // Boolean
```
**Returns: `String`** Channel ID.
- `Object` `message` A message object.
- `Boolean` `discord` True if platform is Discord.

## Events
### `raid`

- `String` `channel` Channel name.
- `String` `raider` Raider name.
- `String` `viewers` Raid viewers.
- `Object` `userstate` Twitch userstate.
```js
this.emit('raid', { channel, raider, viewers, userstate });
```

### `subscription`

Sent upon a subscription in a channel. Can be any of the following Twitch message types: `sub`, `resub`, `subgift`, `anonsubgift`, `giftpaidupgrade`.

- `String` `channel` Channel name.
- `String` `message` Resubscription message.
- `Object` `userstate` Twitch userstate.
```js
this.emit('subscription', {channel, message, userstate});
```

### `cheer`

Sent upon cheering in a channel. Can be anonymous.

- `String` `channel` Channel name.
- `String` `message` Cheer message.
- `Object` `userstate` Twitch userstate.
```js
this.emit('cheer', {channel, message, userstate});
```
