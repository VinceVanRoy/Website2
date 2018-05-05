var routine = [-360,-720,-360,0]
var teller = 0;

var main = function() {
      var imgs = document.getElementsByClassName("slide");
      var i = 0;
      while (i < imgs.length) {
             imgs[i].style.transform = "translatex(" + routine[teller] + "px)";
             i++;
      }
       teller++;
      if (teller === routine.length) {teller = 0};
}

setInterval(main, 5000);
