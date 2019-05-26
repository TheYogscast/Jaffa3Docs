# Guide

## Introduction

JaffaMod v3 is a highly advanced Twitch bot. Pretty much it to be honest.

### Main Class

There is a master class, [`JaffaMod`](reference/jaffamod), which houses the main function for running the bot. The class extends `EventEmitter` and is extended by `JaffaModDiscord`.

```js
class JaffaMod extends EventEmitter {
  //
}

class JaffaModDiscord extends JaffaMod {
  //
}
```

This houses:

- Database
- Cache
- Twitch API
- Sentry error reporting
- Versatile store
- Discord/IRC Client

## Modules

The bot is then split up into modules containing the actual code which makes up JaffaMod. These modules can be hot-reloaded and utilise the store mentioned above to remain stateless.

### Creating a module
Each module has its own folder. The name of the folder must match the name of the module. The folder must contain an `index.js` file which exports the modules contents as shown below:

```js
// Subscriptions/index.js
module.exports = {
  name: 'Subscriptions',
  only: ['twitch'],
  async module(jaffamod) {
    // The function doesn't have to be async but
    // it's cleaner if you need to initialise
    // a module with some database queries
  }
}
```
- `String` `name` Module name, must equal to the folder name.
- `[String]` `only` Platforms to run on. Accepted values: `twitch`, `discord`. Omit for all platforms.
- `async function` `module` The big boi function.

::: warning
Modules are loaded asynchronously (hence the `async`), so if you rely on another module then you will need to check if the module has loaded.

Due to modules only being registered into the main object when they are loaded themselves, you can do this check easily:
```js
if ('Subscriptions' in jaffamod.modules) {
  // Module is loaded
} else {
  // Still loading
}
```
:::

### Commands
Commands can either be static or dynamic.

- Dynamic commands are defined by a function inside a module.
- Static commands have pre-defined responses.

```js
module.exports = {
  name: 'Memes',
  async module(jaffamod) {
    jaffamod.registerCommand('linkameme', async (message, reply, discord) => {
      let search = message.arguments.join(' '); 
      // Re-assemble all the arguments 
      // that were split by the app
      // to form a single string
      let meme   = await jaffamod.api.get(`https://api.meme.wow.cool.amaze.doge.meow.what.com.net.ty.co.kp.jq.b/search?q=${search}`);
      
      reply(`Found a meme! ${meme.link}`);
    }, '[search]');
  }
}
```
Refer to [JaffaMod#registerCommand](/reference/jaffamod.html#registercommand) for detail on the function.