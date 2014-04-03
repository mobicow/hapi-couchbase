var couchbase = require('couchbase');
var buckets = [];
exports.register = function (plugin, options, next) {

    console.log("couchbase plugin registered")

    for(var i in options){
    if(!options[i].host) {
        throw new Error("Couchbase host not defined in config")
    }
    if(!options[i].bucket) {
        throw new Error("Couchbase bucket not defined in config")
    }
    buckets[options[i].bucket] = new couchbase.Connection(options[i]);
    plugin.expose(options[i].bucket, buckets[options[i].bucket]);
    }
    next();
}