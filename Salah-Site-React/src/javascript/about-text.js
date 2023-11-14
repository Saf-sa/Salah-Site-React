/* var string =
  "Scribe of Now, Nomad Art'prentice, Nomad Art'isant, Nomad Artis try, Nomad Art'chimist. Sharing with you, illusion, notes and clichés from an impermanent now, collected on the way of my itinerancy !";

var str = string.split("");
var el = document.getElementById("str");
(function animate() {
  str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
  var running = setTimeout(animate, 90);
})(); */

/* 
var string =
  "Scribe of Now, Nomad Art'prentice, Nomad Art'isant, Nomad Artis try, Nomad Art'chimist. Sharing with you, illusion, notes and clichés from an impermanent now, collected on the way of my itinerancy !";

var str = string.split("");
var el = document.getElementById("str");
var running; // Define the running variable here
(function animate() {
  str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
  running = setTimeout(animate, 90); // Assign the setTimeout to the running variable here
})(); */

 function myFunction() {
  var string =
    "Scribe of Now, Nomad Art'prentice, Nomad Art'isant, Nomad Artis try, Nomad Art'chimist. Sharing with you, illusion, notes and clichés from an impermanent now, collected on the way of my itinerancy !";

  var str = string.split("");
  var el = document.getElementById("str");
  var running;
  (function animate() {
    str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
    running = setTimeout(animate, 90);
  })();
}

export default myFunction;