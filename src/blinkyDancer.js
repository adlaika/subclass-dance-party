var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.editCSS({border: "20px solid red"});
  this.editCSS({animation: "spin 5s linear infinite alternate"});
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //this.$node.toggle();
}
