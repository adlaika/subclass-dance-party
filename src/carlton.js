var Carlton = function (top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.addHTML('<img src="http://tinyurl.com/myxm6ed">');
};

Carlton.prototype = Object.create(Dancer.prototype);
Carlton.prototype.constructor = Carlton;

Carlton.prototype.step = function() {
  Dancer.prototype.step.call(this);
}
