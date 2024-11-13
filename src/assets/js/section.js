window.addEventListener("scroll", () => {
  const section = document.querySelector(".main_stack");
  const fixedElement = document.querySelector(".card");

  // 섹션의 실제 높이 가져오기 (offsetHeight 사용)
  const sectionHeight = section.offsetHeight;

  // 현재 뷰포트에서 섹션이 보이는지 확인
  const sectionRect = section.getBoundingClientRect();

  // 섹션의 높이가 100vh 이상이고, 섹션이 뷰포트 안에 있을 때만 요소 표시
  if (
    sectionHeight >= window.innerHeight &&
    sectionRect.top <= window.innerHeight &&
    sectionRect.bottom >= 0
  ) {
    fixedElement.style.display = "block";
  } else {
    fixedElement.style.display = "none";
  }
});

const card = document.querySelector(".card"),
  modal = document.querySelector(".modal"),
  modalClose = document.querySelector(".modal_close"),
  modalOverlay = document.querySelector(".modal_overlay"),
  modalItems = document.querySelectorAll(".modal_list_item");

const tl2 = gsap.timeline({ paused: true, defaults: { ease: "expo.inOut" } });

const init2 = () => {
  gsap.set(modalItems, { x: "110%" });
  gsap.set(modalClose, { autoAlpha: 0, scale: 0 });

  initAnimation2();
  addEventListeners2();
};

const initAnimation2 = () => {
  tl2
    .to(modalItems, {
      duration: 0.8,
      x: 0,
      stagger: 0.032,
    })
    .set(modal, { pointerEvents: "auto" })
    .to(
      modalOverlay,
      {
        duration: 1.2,
        backdropFilter: "blur(10px)",
        pointerEvents: "auto",
      },
      0
    )
    .to(
      card,
      {
        duration: 0.8,
        x: "110%",
      },
      0
    )
    .to(
      modalClose,
      {
        duration: 1.2,
        rotate: "90deg",
        scale: 1,
        autoAlpha: 1,
      },
      0.2
    );
};

const addEventListeners2 = () => {
  card.addEventListener("click", () => tl2.play());
  modalClose.addEventListener("click", () => tl2.reverse());
  modalOverlay.addEventListener("click", () => tl2.reverse());
};

init2();
