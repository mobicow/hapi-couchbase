var couchbase = require('couchbase');
var buckets = [];
exports.register = function (plugin, options, next) {

    console.log("couchbase plugin registered")

    if(!options.host) {
        throw new Error("Couchbase host not defined in config")
    }
    if(!options.bucket) {
        throw new Error("Couchbase bucket not defined in config")
    }
    buckets[options.bucket] = new couchbase.Connection(options);
    plugin.expose('cb_'+options.bucket, buckets[options.bucket]);
    next();

}