var Name = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};

Name.prototype = Object.create(Dancer.prototype);
Name.prototype.constructor = Name;

Name.prototype.step = function() {
  Dancer.prototype.step.call(this);
}
