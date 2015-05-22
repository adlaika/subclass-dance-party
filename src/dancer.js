var Dancer = function (top, left, timeBetweenSteps, id) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer" id=' + id + '></span>');
  this.$node.on('click', function () {
    this.clickFn();
  }.bind(this));

  this.step();
  this.setPosition();
};

Dancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function () {
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
  this.top = ($('body').height() - this.$node.height()) / 2;
  this.left = i * $('body').width() / window.dancers.length;
  this.animate(2000);
}

Dancer.prototype.animate = function (time) {
  this.$node.animate({
    top: this.top,
    left: this.left
  }, time);
}

Dancer.prototype.findNearest = function () {
  //debugger;
  var dist = Infinity;
  var closest = null;
  var that = this;
  window.dancers.forEach(function (dancer, i) {
    if (dancer !== that) {
      var cur = Math.hypot(dancer.top - that.top, dancer.left - that.left);
      if (cur < dist) {
        closest = dancer;
        dist = cur;
      }
    }
  });
  return closest;
}
