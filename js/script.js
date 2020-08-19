/*******************************************
 FOR NAV BAR CHANGING COLOR BASED ON POSITION
 *******************************************/

const links = document.querySelectorAll(".link");

function removeActive() {
  links.forEach((link) => {
    link.classList.remove("active");
  });
}

var aboutSec = new Waypoint({
  element: document.getElementById("about"),
  handler: function (direction) {
    removeActive();
    if (direction == "down") {
      document.querySelector(".about-link").classList.add("active");
      document
        .querySelector(".h-about")
        .classList.add("animate__animated", "animate__fadeInLeft");

      document
        .querySelector(".bar-about")
        .classList.add("animate__animated", "animate__fadeInLeftBig");
    } else document.querySelector(".home-link").classList.add("active");
  },
  offset: "55%",
});

var portfolioSec = new Waypoint({
  element: document.getElementById("portfolio"),
  handler: function (direction) {
    removeActive();
    if (direction == "down") {
      document.querySelector(".portfolio-link").classList.add("active");
      document
        .querySelector(".h-portfolio")
        .classList.add("animate__animated", "animate__fadeInRight");

      document
        .querySelector(".bar-portfolio")
        .classList.add("animate__animated", "animate__fadeInRightBig");
    } else document.querySelector(".about-link").classList.add("active");
  },
  offset: "55%",
});

var contactSec = new Waypoint({
  element: document.getElementById("contact"),
  handler: function (direction) {
    removeActive();
    if (direction == "down") {
      document.querySelector(".contact-link").classList.add("active");
      document
        .querySelector(".h-contact")
        .classList.add("animate__animated", "animate__fadeInLeft");

      document
        .querySelector(".bar-contact")
        .classList.add("animate__animated", "animate__fadeInLeftBig");
    } else document.querySelector(".portfolio-link").classList.add("active");
  },
  offset: "55%",
});