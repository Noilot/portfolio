const menu = {
  element: document.querySelector(".menu"),
  pages: document.querySelectorAll(".menu_row_pages > h2"),
  info: document.querySelectorAll(".menu_row_info > div > span"),
  title: document.querySelectorAll(".menu_row_title > h1"),
  media: document.querySelector(".menu_row_media"),
};

const button = {
  element: document.querySelector(".nav_menu_button"),
  text: document.querySelectorAll(".nav_menu_button_text > span"),
  open: document.querySelector(".--open-menu"),
  close: document.querySelector(".--close-menu"),
};

const clipPath = {
  init: "inset(0% 0% 0% 0%)",
  bottom: "inset(100% 0% 0% 0%)",
  top: "inset(0% 0% 100% 0%)",
};

const tlMenu = gsap.timeline({
  paused: true,
  defaults: { duration: 1.6, ease: "expo.inOut" },
});

let isEnabled = false;
