// Code from exercise 1 for materialize, I don't think I'm using it but the code's working so this stays
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('select');
var instances = M.FormSelect.init(elems);
});

window.addEventListener("DOMContentLoaded", function () {
  var quote = {name: null, email: null, room: null, length: null, width: null, material: null};
  submitBtn = document.getElementById("submitBtn");

  // if to check whether index.html has been loaded or quote.html, submitBtn only exists on index.html
  if (submitBtn) { submitBtn.addEventListener("click", function() { 
    quote.name = document.getElementById("name").value;
    quote.email = document.getElementById("email").value;
    quote.room = document.getElementById("room").value;
    quote.length = document.getElementById("windowLength").value;
    quote.width = document.getElementById("windowWidth").value;

    if(document.getElementById("glass").checked)
      quote.material = document.getElementById("glass").value;
    if(document.getElementById("vinyl").checked)
      quote.material = document.getElementById("vinyl").value;
    if (document.getElementById("fibreglass").checked)
      quote.material = document.getElementById("fibreglass").value;

    console.log(quote.name);
    console.log(quote.email);
    console.log(quote.room);
    console.log(quote.length);
    console.log(quote.width);
    console.log(quote.material);
    
    if (localStorage) {
      localStorage.setItem(`name`, quote.name);
      localStorage.setItem(`email`, quote.email);
      localStorage.setItem(`room`, quote.room);
      localStorage.setItem(`length`, quote.length);
      localStorage.setItem(`width`, quote.width);
      localStorage.setItem(`material`, quote.material);
    }

    window.location = "pages/quote.html";
  });}
});

function getStorage() {
  console.log("Running");

  // I'm only checking if localStorage is there, but you can also additionally check that the specific key-pair value
  // is there too, or display an error message if there isn't
  if (localStorage) {
    var quote = {name: localStorage.getItem(`name`),
                 email: localStorage.getItem(`email`),
                 room: localStorage.getItem(`room`), 
                 length: localStorage.getItem(`length`), 
                 width: localStorage.getItem(`width`), 
                 material: localStorage.getItem(`material`)
                };

    document.getElementById("name").innerHTML = document.getElementById("name").innerHTML + quote.name;
    document.getElementById("email").innerHTML = document.getElementById("email").innerHTML + quote.email;
    document.getElementById("room").innerHTML = document.getElementById("room").innerHTML + quote.room;

    if (quote.material == "glass") {
      document.getElementById("glass").checked = true;
    }
    if (quote.material == "vinyl") {
      document.getElementById("vinyl").checked = true;
    }
    if (quote.material == "fibreglass") {
      document.getElementById("fibreglass").checked = true;
    }

    document.getElementById("sqFoot").innerHTML = document.getElementById("sqFoot").innerHTML + (quote.length*quote.width) + " sq. ft";
    var additional = ((quote.length*quote.width)*100);
    var total = 500 + additional;
    var hst = 0.13*(total);
    total += hst;
    document.getElementById("cost").innerHTML = document.getElementById("cost").innerHTML + total.toFixed(2);
    document.getElementById("costBreakdown").innerHTML = document.getElementById("costBreakdown").innerHTML + "$500 + " + (quote.length*quote.width) +
                                                         " sq. ft x $100 ($" + additional + ") + 13% HST ($" + hst + ")";

  }
}