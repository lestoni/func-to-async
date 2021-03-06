# func-to-async

[![Build Status](https://travis-ci.org/lestoni/func-to-async.svg)](https://travis-ci.org/lestoni/func-to-async)

[![NPM](https://nodei.co/npm/func-to-async.png?downloads=true&stars=true)](https://nodei.co/npm/func-to-async/)

Utility to convert a sync function to async.

## Install

```sh
  $ npm install func-to-async --save
```

## Usage

```javascript
  var toAsync = require('func-to-async');

  var asyncFunc = toAsync(syncFunc);

  asyncFunc(function(err) {
    if(err) {
      return console.error(err);
    }
  });
```

view tests for more examples.

## API

## func-to-async(fn#Function, [ctx#Object])

__fn__

Type: _Function_

The Sync function to convert to async

__ctx__

Type: __Object__

__optional__

context to bind the function to.

## License

MIT
