
# slug-factory
Unique Slug Generator for node.js.


## Installation

```
npm install slug-factory
```


## Usage

```js
var slugFactory = require('slug-factory');
var exists = 4;

function iterator(path, cb) {
  exists--;
  cb(null, exists);
}

slugFactory('slugen-ipson', iterator, function(err, slug) {
  console.log(slug); // slugen-ipson-3
});

```


#### Test

```
mocha
```

Cheers.
