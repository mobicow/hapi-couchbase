hapi-couchbase
==========

Register plugin:

```javascript
var couchBaseOptions = [
    {host:"127.0.0.1:8091",bucket:"default",password:"password"},
    {host:"127.0.0.1:8091",bucket:"test",password:"password2"}
    ]
var server = Hapi.createServer('0.0.0.0', 8000);
server.pack.require('hapi-couchbase', couchBaseOptions, function(err) {
  if (err) {
    console.error(err);
    throw err;
  }
});
```

Use plugin:

default Bucket
```javascript
request.server.plugins['hapi-couchbase'].default.get("key",function(err, result) {
    if (!err) {
      console.log(result);
    }
});
```

test Bucket
```javascript
request.server.plugins['hapi-couchbase'].test.get("key",function(err, result) {
    if (!err) {
      console.log(result);
    }
});
```
