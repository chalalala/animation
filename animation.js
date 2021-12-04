document.addEventListener("DOMContentLoaded", () => {
   [...document.querySelectorAll(".js-square")].forEach(square => {
      let animationType = square.getAttribute("animation-type");
      const observer = new IntersectionObserver(entries => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               entry.target.classList.add(animationType);
            }
            else {
               entry.target.classList.remove(animationType);
            }
         });
      });
       
      observer.observe(square);
   }) 
})