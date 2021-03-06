# Greet

This is a sample package that is written in TypeScript with ES6 features and modules but distributed
as ES5 JavaScript with CommonJS modules for maximum compatibility.

# Installation

```Bash
> npm i @narvin/greet
```

# Usage

Importing as a CommonJS module:

```JavaScript
const greet = require("@narvin/greet").greet;

console.log(greet('you')); // 'Hello you'
```

Importing as an ES6 module:

```JavaScript
import greetExports from "@narvin/greet";

const { greet } = greetExports;
console.log(greet('you')); // 'Hello you'
```
