# Utils

## Methods

### getEmote
```js
getEmote(emote, discord)
```

Returns a given emote name formatted for the correct platform. For Discord, the emote name needs to
be formatted as `:emote:`, whereas on Twitch it is just `emote`.

**Returns: `String`** The given emote formatted for the correct platform.

- `String` `emote` Emote name.
- `Boolean` `discord` True if platform is Discord.
____

### getBold
```js
getBold(string, discord)
```

Returns a string formatted to be bold, if the platform supports it. On Discord, a message is bold
when formatted as `**bold**`, whereas on Twitch there is no support for in-line formatting.

**Returns: `String`** The given string formatted for the correct platform.

- `String` `string` String to format.
- `Boolean` `discord` True if platform is Discord.
____

### getLink
```js
getLink(link, discord)
```

Returns a given link with unfurling disabled, so the link remains in-line with no embed. On Discord,
a link formatted as `<link>` will have the embed disabled, whereas on Twitch links never unfurl.

**Returns: `String`** The given string formatted for the correct platform.

- `String` `string` String to format.
- `Boolean` `discord` True if platform is Discord.
____

### isJingleJam
```js
isJingleJam(d = undefined)
```

Returns if a given date (or the current date) is during JingleJam -- will be true for the month of
December.

**Returns: `Boolean`** True if JingleJam time.

- `Date` `d` Optional, date to use for check. Defaults to now.
____

### isJingleJamExt
```js
isJingleJamExt(d = undefined)
```

Returns if a given date (or the current date) is during JingleJam or just after -- will be true for
the month of December and the first week of January.

**Returns: `Boolean`** True if JingleJam time.

- `Date` `d` Optional, date to use for check. Defaults to now.
