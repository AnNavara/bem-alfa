(function() {
  if (window.matchMedia("(max-width: 767px)").matches){
    var similar = document.querySelectorAll(".similar");
    var container = document.querySelector(".main__wrapper");
    var ref = document.querySelector(".testimony");

    for (i = 0; i < similar.length; ++i){
      similar[i].parentElement.removeChild(similar[i]);
      container.insertBefore(similar[i], ref);
    }
  }
})();
