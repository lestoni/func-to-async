# func-to-async

__Build Status__

Utility to convert a sync function to async.

## Install

```sh
  $ npm install func-to-async --save
```

## Usage

```javascript
  var toAsync = require('func-to-async');

  function add(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
      throw new TypeError('Expecte arguments to be numbers');
    }

    return a + b;
  }

  var asyncFunc = toAsync(add);

  asyncFunc(5, 6, function cb(err, result) {
    if(err) {
      return console.error(err);
    }

    console.log(result);
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
