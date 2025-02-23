const card = document.querySelector(".card"),
  about = document.querySelector(".about"),
  modal = document.querySelector(".modal"),
  modalClose = document.querySelector(".modal_close"),
  modalOverlay = document.querySelector(".modal_overlay"),
  modalItems = document.querySelectorAll(".modal_list_item");

const tlAbout = gsap.timeline({
  paused: true,
  defaults: { ease: "expo.inOut" },
});

// ✅ 카드 초기 숨김 설정
gsap.set(card, { opacity: 0, y: 20, pointerEvents: "none" });

const initAbout = () => {
  gsap.set(modalItems, { x: "110%" });
  gsap.set(modalClose, { autoAlpha: 0, scale: 0 });

  animateAbout();
  addEventListeners2();
  observeabout(); // ✅ `about`가 100% 화면에 차지할 때 감지하는 함수 실행
};

// ✅ `about`가 뷰포트의 100%를 차지할 때만 `.card` 표시
const observeabout = () => {
  if (!about) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 1) {
          showCard(); // ✅ `about`가 뷰포트를 완전히 채울 때만 실행
        } else {
          hideCard(); // ✅ 벗어나면 숨김 처리
        }
      });
    },
    { threshold: 1 } // ✅ `about`가 100% 뷰포트에 나타날 때만 트리거됨
  );

  observer.observe(about);
};

// ✅ 카드 등장 함수
const showCard = () => {
  console.log("카드 등장!"); // ✅ 디버깅용
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power3.out",
    pointerEvents: "auto",
  });
};

// ✅ 카드 숨김 함수
const hideCard = () => {
  console.log("카드 숨김!"); // ✅ 디버깅용
  gsap.to(card, {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power3.out",
    pointerEvents: "none",
  });
};

const animateAbout = () => {
  tlAbout
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
  card.addEventListener("click", () => tlAbout.play());
  modalClose.addEventListener("click", () => tlAbout.reverse());
  modalOverlay.addEventListener("click", () => tlAbout.reverse());
};

initAbout();

//여기부터실험구역

document.addEventListener("DOMContentLoaded", () => {
  const about = document.querySelector(".about_wrapper");
  const aboutText = document.querySelector(".about_paragraph_text");
  if (!about || !aboutText) {
    console.error(
      "about_wrapper 또는 about_paragraph_text 요소를 찾을 수 없습니다."
    );
    return;
  }

  gsap.set(aboutText, { opacity: 0, y: 20 });

  const showAboutText = () => {
    gsap.to(aboutText, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power3.out",
    });
  };

  const hideAboutText = () => {
    gsap.to(aboutText, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power3.in",
    });
  };

  const observeAbout = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            showAboutText(); // ✅ `about`가 뷰포트를 완전히 채울 때만 실행
          } else {
            hideAboutText(); // ✅ 벗어나면 숨김 처리
          }
        });
      },
      { threshold: 1 } // ✅ `about`가 100% 뷰포트에 나타날 때만 트리거됨
    );

    observer.observe(about);
  };

  observeAbout();
});

//하이라이트 그거

document.addEventListener("DOMContentLoaded", () => {
  const about = document.querySelector(".about_wrapper");
  const highlights = document.querySelectorAll(".highlight");
  if (!about || highlights.length === 0) {
    console.error("about_wrapper 또는 highlight 요소를 찾을 수 없습니다.");
    return;
  }

  const showHighlightAnimation = () => {
    highlights.forEach((highlight) => {
      gsap.to(highlight, {
        backgroundSize: "100% 100%",
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });
    });
  };

  const hideHighlightAnimation = () => {
    highlights.forEach((highlight) => {
      gsap.to(highlight, {
        backgroundSize: "0% 100%",
        duration: 0.5,
        ease: "power3.in",
      });
    });
  };

  const observeAbout2 = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            showHighlightAnimation();
          } else {
            hideHighlightAnimation();
          }
        });
      },
      { threshold: 1 }
    );

    observer.observe(about);
  };

  observeAbout2();
});
