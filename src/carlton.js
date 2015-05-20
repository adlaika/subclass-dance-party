var Carlton = function (top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.newStyle = {
    border: '20px solid green'
  }
  this.editCSS();
};

Carlton.prototype = Object.create(Dancer.prototype);
Carlton.prototype.constructor = Carlton;

Carlton.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
}
