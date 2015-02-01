# whitelist-passthru [![Build Status](https://travis-ci.org/dieb/whitelist-passthru.svg?branch=master)](https://travis-ci.org/dieb/whitelist-passthru)

Wraps a middleware and skips it if the requested path is whitelisted,

## Installation

node:

```
$ npm install superagent
```

## Usage

express:

```
var express = require('express'),
    app = express();

var passthru = require('whitelist-passthru');

// Will skip authMiddleware if req.path is /unprotected or /other.
// Any other paths will go through authMiddleware
app.use(passthru(authMiddleware, ['/unprotected', '/other']));
```

## License

  MIT
