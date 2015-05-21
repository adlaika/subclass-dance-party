var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');

  this.step();
  this.setPosition();
};

Dancer.prototype.step = function() {
  var that = this;
  setTimeout(this.step.bind(that), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function() {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.editCSS = function (newStyle) {
  this.$node.css(newStyle);
}

Dancer.prototype.addHTML = function (htmlString) {
  this.$node.append(htmlString);
}

Dancer.prototype.lineUp = function (i) {
  this.top = "50%";
  this.left = i * $('body').width() / window.dancers.length;
  this.setPosition();
}
