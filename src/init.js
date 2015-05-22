$(document).ready(function () {
  window.dancers = [];

  $(".addDancerButton").on("click", function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      window.dancers.length
    );
    dancer.$node.me = dancer;
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  //bgswap button behavior
  var bgs = [
    'http://images5.fanpop.com/image/photos/26000000/Taco-Cat-nyan-cat-26042543-500-484.gif',
    "http://media.giphy.com/media/ToMjGpr1f9dqXeMrWc8/giphy.gif",
    "https://s-media-cache-ak0.pinimg.com/originals/c6/df/a2/c6dfa22150790c670c988c5196f6ba0e.gif",
    "http://www.animateit.net/data/media/june2010/animated_60.gif",
    "https://s-media-cache-ec0.pinimg.com/originals/b1/72/8a/b1728a49ec07b79af0796beefe503bb9.jpg",
    "http://i466.photobucket.com/albums/rr29/frezzola/tumblr-moving-background.gif",
    "http://thefoxisblack.com/blogimages//video-game-background-animated-GIF-5.gif",
    "http://www.visualnews.com/wp-content/uploads/2013/05/Fighting-Game-Background-GIFs-12.gif",
    "http://st.flywheelsites.com/wp-content/uploads/2013/05/airport-gif-background.gif",
    "http://i.imgur.com/uCA67Nn.gif"
  ];
  $(".backgroundSwap").on("click", function (event) {

    $('body').css('background-image', 'url(' + bgs[Math.floor(Math.random() * bgs.length)] +')');
    $('body').css('background-repeat', 'no-repeat');
    $('body').css('background-size', '' + $('body').width() + 'px ' + $('body').height() + 'px');
  });

  //lineup button behavior
  var linedUp = false;
  $(".lineUp").on("click", function (event) {
    if (!linedUp) {
      window.dancers.forEach(function (dancer) {
        dancer.lineUp();
      });
    } else {
      window.dancers.forEach(function (dancer) {
        dancer.top = $("body").height() * Math.random()
        dancer.left = $("body").width() * Math.random()
        dancer.animate(750);
      });
    }
    linedUp = !linedUp;
  });
});
