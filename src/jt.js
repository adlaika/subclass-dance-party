
var Jt = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.addHTML('<div class="jt"><img src="http://media.giphy.com/media/5xtDarsnabsdCQESUEw/giphy.gif"></div>');
};

Jt.prototype = Object.create(Snoop.prototype);
Jt.prototype.constructor = Jt;

Jt.prototype.step = function() {
  Dancer.prototype.step.call(this);
}

Jt.prototype.cartwheel = function () {
  this.editCSS({
    animation: "cartwheel" + Math.random() * 5 + "s linear infinite alternate"
  });
}

Jt.prototype.clickFn = function () {
  this.cartwheel();
}




