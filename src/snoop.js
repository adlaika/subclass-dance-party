var Snoop = function (top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.addHTML('<img class="snoop" src="http://media.giphy.com/media/CmjjuirIo0psk/giphy.gif">');
  this.editCSS({
    animation: "nudge " + Math.random() * 10 + "s linear infinite alternate"
  });
};

Snoop.prototype = Object.create(Dancer.prototype);
Snoop.prototype.constructor = Snoop;

Snoop.prototype.clickFn = function () {
  this.grind();
}

Snoop.prototype.grind = function () {
  var closest = this.findNearest();
  if (closest !== null) {
    this.top = closest.top + closest.$node.height() / 2 - this.$node.height() / 2;
    this.left = closest.left + closest.$node.width() / 2 - this.$node.width() / 2;
    this.animate(1000);
  }
}
