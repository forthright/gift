// Generated by CoffeeScript 1.10.0
(function() {
  var Actor, crypto;

  crypto = require('crypto');

  module.exports = Actor = (function() {
    function Actor(name1, email1) {
      this.name = name1;
      this.email = email1;
      if (this.email) {
        this.hash = crypto.createHash("md5").update(this.email, "ascii").digest("hex");
      }
    }

    Actor.prototype.toString = function() {
      return this.name + " <" + this.email + ">";
    };

    Actor.from_string = function(str) {
      var email, m, name, ref;
      if (/<.+>/.test(str)) {
        ref = /(.*) <(.+?)>/.exec(str), m = ref[0], name = ref[1], email = ref[2];
        return new Actor(name, email);
      } else {
        return new Actor(str, null);
      }
    };

    return Actor;

  })();

}).call(this);
