var Dean = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.addHTML('<div class="dean"><img src="http://static.tumblr.com/f20418d4dac3303f5653efc4a178f44a/905zxhy/iQEmjbvys/tumblr_static_tumblr_mjatuzs0lg1rb4km6o1_500.gif"></div>');
};

Dean.prototype = Object.create(Dancer.prototype);
Dean.prototype.constructor = Dean;

Dean.prototype.step = function() {
  Dancer.prototype.step.call(this);
}

