(function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".mobail-menu");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      $(".menu").toggleClass("responsive");
    });
  }
 
})();




//data calendar


$( function() {
  $( "#datepicker" ).datepicker({
    altField: "#actualDate"
  });
} );


