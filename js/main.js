let headerEl = document.getElementById("header");

window.addEventListener("scroll", function(){
const scrollPos = window.scrollY
 if (scrollPos > 50) {
  headerEl.classList.add("header-scrolled");
 }else {
  headerEl.classList.remove("header-scrolled");
 }

})