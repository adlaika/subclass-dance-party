var Snoop = function (top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.addHTML('<div class="snoop"><img src="http://media.giphy.com/media/CmjjuirIo0psk/giphy.gif"></div>');
  this.editCSS({animation: "nudge " + Math.random()*10 + "s linear infinite alternate"});
};

Snoop.prototype = Object.create(Dancer.prototype);
Snoop.prototype.constructor = Snoop;
