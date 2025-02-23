const intro = {
  element: document.querySelector(".intro"),
  titles: document.querySelectorAll(".intro_title_row_text"),
  media: document.querySelectorAll(".intro_media"),
  mediaImages: document.querySelectorAll(".intro_media_image"),
};

const initIntro = () => {
  gsap.set(intro.titles, { autoAlpha: 0, yPercent: -101 });
  gsap.set(intro.media, { autoAlpha: 0, xPercent: -100, yPercent: -25 });
  gsap.set(intro.mediaImages, { xPercent: -100 });
  gsap.set(".nav_item_text", { yPercent: -100 });
  gsap.set(".intro_title_row:nth-child(3)", { xPercent: -50, x: "unset" });

  animateintro();
};

const animateintro = () => {
  const tlIntro = gsap.timeline({
    defaults: { duration: 2, ease: "expo.inOut" },
  });

  tlIntro
    .to(".nav_item_text", {
      yPercent: 0,
    })
    .to(
      intro.media,
      {
        autoAlpha: 1,
        xPercent: 0,
      },
      0
    )
    .to(
      intro.mediaImages,
      {
        xPercent: 0,
        stagger: 0.016,
      },
      0.16
    )
    .to(
      intro.titles,
      {
        autoAlpha: 1,
        yPercent: 0,
        stagger: 0.016,
      },
      2
    )
    .to(
      intro.media,
      {
        yPercent: 0,
      },
      2
    );
};

window.addEventListener("DOMContentLoaded", initIntro);
