document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".main_about");
  const fixedElement = document.querySelector(".card");

  // Intersection Observer 옵션 설정
  const observerOptions = {
    root: null, // 뷰포트를 기준으로 관찰
    threshold: 0.5, // 섹션의 50%가 보일 때 callback 실행
  };

  // Observer 콜백 함수 설정
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && section.offsetHeight >= window.innerHeight) {
        fixedElement.classList.add("visible");
      } else {
        fixedElement.classList.remove("visible");
      }
    });
  };

  // Intersection Observer 생성 및 섹션 관찰 시작
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(section);
});

const card = document.querySelector(".card"),
  modal = document.querySelector(".modal"),
  modalClose = document.querySelector(".modal_close"),
  modalOverlay = document.querySelector(".modal_overlay"),
  modalItems = document.querySelectorAll(".modal_list_item");

const t2 = gsap.timeline({ paused: true, defaults: { ease: "expo.inOut" } });

const init2 = () => {
  gsap.set(modalItems, { x: "110%" });
  gsap.set(modalClose, { autoAlpha: 0, scale: 0 });
  gsap.set(modal, { autoAlpha: 0, pointerEvents: "none" });

  initAnimation2();
  addEventListeners2();
};

const initAnimation2 = () => {
  t2.to(modal, {
    duration: 0.5,
    autoAlpha: 1,
    pointerEvents: "auto",
  })
    .to(modalItems, {
      duration: 0.8,
      x: 0,
      stagger: 0.032,
    })
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
  card.addEventListener("click", () => {
    t2.play();
  });
  modalClose.addEventListener("click", () => {
    t2.reverse().then(() => {
      gsap.set(modal, { autoAlpha: 0, pointerEvents: "none" }); // 모달을 숨기고 클릭 방지
    });
  });
  modalOverlay.addEventListener("click", () => {
    t2.reverse().then(() => {
      gsap.set(modal, { autoAlpha: 0, pointerEvents: "none" }); // 모달을 숨기고 클릭 방지
    });
  });
};

init2();
