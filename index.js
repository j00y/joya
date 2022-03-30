#!/usr/bin/env node

// grab component name from terminal argument
const args = process.argv.slice(2);
const type = args[0] || "component";
const name = args[1];
const lang = args[2] || "ts";

if (!["component", "page", "context"].includes(type))
  throw new Error("You must include a type to create. (component, page or context)");

if (!["ts", "js"].includes(lang))
  throw new Error(
    "Invalid language. It should be ts (TypeScript) or js (JavaScript)"
  );
const command = require(`./${type}/command/${type}.js`);

command(name, lang, type);
