var Carlton = function (top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.addHTML('<div class="carlton"><img src="http://tinyurl.com/myxm6ed"></div>');
  this.editCSS({
    animation: "spin " + Math.random() * 10 + "s linear infinite alternate"
  });
};

Carlton.prototype = Object.create(Dancer.prototype);
Carlton.prototype.constructor = Carlton;

Carlton.prototype.flip = function () {
  this.editCSS({
    animation: "flip" + ".5s linear 1 alternate"
  });
}

Carlton.prototype.clickFn = function () {
  this.flip();
}
