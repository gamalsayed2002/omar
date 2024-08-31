// swiper

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
// start nav
let menu = document.getElementById("menu");
let exit = document.getElementById("exit");
let mobile_ul = document.getElementById("mobile_ul");
function toggle(){
mobile_ul.classList.toggle("show")
}

