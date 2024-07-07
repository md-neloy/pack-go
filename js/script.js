$(".slider_destination").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  centerMode: true,
});
$(".counter").counterUp({
  delay: 10,
  time: 1000,
});
$(".slider_testimonial").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
  dots: true,
  centerMode: true,
  centerPadding: 0,
});

let menubar = document.querySelector(".menubar");

window.addEventListener("scroll", function () {
  if (this.scrollY > 169) {
    menubar.classList.add("menu_fixed");
  } else {
    menubar.classList.remove("menu_fixed");
  }
});

let countBtn = document.querySelector(".counter_btn");
window.addEventListener("scroll", () => {
  let scrolling = this.scrollY;
  console.log(scrolling);
  if (scrolling > 300) {
    countBtn.classList.add("count_btn_show");
  } else {
    countBtn.classList.remove("count_btn_show");
  }
});
