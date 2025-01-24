import { Client, Collection, Events, GatewayIntentBits } from "discord.js";
import keys from "../credentials/info.json" assert { type: "json" };
// const fs = require("fs");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(keys.token);
