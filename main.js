var typed = new Typed("#typed-text", {
    strings: [
      "Elsy Marion Kimaka",
      "I'm a frontend web developer",
      "I'm a data scientist.",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });




var date = new Date();
var year = date.getFullYear();
document.getElementById("year").innerHTML = year;
