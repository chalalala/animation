document.addEventListener("DOMContentLoaded", () => {
   [...document.querySelectorAll(".js-square")].forEach(square => {
      let animationType = square.getAttribute("animation-type");
      window.addEventListener("scroll", () => {
         if (square.getBoundingClientRect().top < window.innerHeight || document.documentElement.innerHeight) {
            square.classList.add(animationType);
         } else {
            square.classList.remove(animationType);
         }
      })
   }) 
})