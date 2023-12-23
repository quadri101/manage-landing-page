const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector("#primary-navigation");

const navIconOpen = document.querySelector(".icon-hamburger");
const navIconClose = document.querySelector(".icon-close");

navToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  if (primaryNav.hasAttribute("data-visible")) {
    navToggle.setAttribute("aria-expanded", true);
    navIconClose.classList.remove("display-none");
    navIconOpen.classList.add("display-none");
  } else {
    navToggle.setAttribute("aria-expanded", false);
    navIconClose.classList.add("display-none");
    navIconOpen.classList.remove("display-none");
  }
});
