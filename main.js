var typed = new Typed("#typed-text", {
    strings: [
      "BSc,Elsy Kimaka",
      "BScIT ",
      "Data Analyst / Scientist",
      "AI Specialist",
      " DB Manager",
      " IT Support",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });




var date = new Date();
var year = date.getFullYear();
document.getElementById("year").innerHTML = year;

// const sections = document.querySelectorAll('.section');

// function debounce(func, wait = 5, immediate = true) {
//   let timeout;
//   return function() {
//     const context = this, args = arguments;
//     const later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     const callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

// function checkSlide() {
//   sections.forEach(section => {
//     const slideInAt = (window.scrollY + window.innerHeight) - section.offsetHeight / 2;
//     const sectionBottom = section.offsetTop + section.offsetHeight;
//     const isHalfShown = slideInAt > section.offsetTop;
//     const isNotScrolledPast = window.scrollY < sectionBottom;
//     if (isHalfShown && isNotScrolledPast) {
//       section.classList.add('is-active');
//     } else {
//       section.classList.remove('is-active');
//     }
//   });
// }

// window.addEventListener('scroll', debounce(checkSlide));
