var superagent = require('superagent')
  , Promise = require('bluebird')


// borrowed from https://gist.github.com/epeli/11209665
var end = superagent.Request.prototype.end

superagent.Request.prototype.end = function() {
  var self = this;
  return new Promise(function(resolve, reject){
    end.call(self, function(err, res) {
      if (err) reject(err)
      else resolve(res)
    })
  })
}

module.exports = superagent
