const Util = require("./utils");
const MovingObject = require("./moving_object");

function Bullet(options) {
  options.radius = Bullet.RADIUS;

  MovingObject.call(this, options);
}

Bullet.RADIUS = 5;
Bullet.SPEED = 15;

Util.inherits(Bullet, MovingObject);

Bullet.prototype.isWrappable = false; // must uncomment!!!

module.exports = Bullet;
