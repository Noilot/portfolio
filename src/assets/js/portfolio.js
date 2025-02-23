const bento = document.querySelector(".bento"),
  bentoBoxes = bento.querySelectorAll(".bento_box"),
  bentoBoxesSpan = bento.querySelectorAll(".bento_box_text > span"),
  bentoIntro = bento.querySelectorAll(".bento_intro > .bento_intro_row > h1");

const portfolioSection = document.querySelector("#portfolio");

// ✅ 처음에 `#portfolio` 숨기기
portfolioSection.style.opacity = "0";
portfolioSection.style.pointerEvents = "none"; // 클릭 방지

const initPortfolio = () => {
  gsap.set(bentoBoxes, { scaleY: 0, transformOrigin: "bottom" });
  gsap.set(bentoBoxesSpan, { y: "110%" });

  splitText();
};

const splitText = () => {
  Splitting({
    target: bentoIntro,
    by: "chars",
    key: null,
  });

  gsap.set(".bento_intro .char", { y: "100%" });

  animateIntrooo();
};

const animateIntrooo = () => {
  gsap
    .timeline({
      defaults: { duration: 0.24, ease: "expo.inOut", stagger: 0.024 },
    })
    .to(".bento_intro .char", {
      y: "0",
      onComplete: () => {
        animateBoxes();
      },
    })
    .to(".bento_intro .char", {
      y: "-100%",
      onComplete: () => {
        document.querySelector(".bento_intro").remove();
      },
    });
};

const animateBoxes = () => {
  gsap
    .timeline()
    .to(bentoBoxes, {
      duration: 0.24,
      scaleY: "100%",
      ease: "expo.inOut",
      stagger: 0.05,
      onComplete: () => {
        addEventListenerssss();
      },
    })
    .to(
      bentoBoxesSpan,
      {
        duration: 0.24,
        y: "0",
        ease: "expo.out",
      },
      1
    );
};

const animateInnerText = (data) => {
  gsap
    .timeline({ defaults: { duration: 0.24 } })
    .to(data, {
      y: "-100%",
      ease: "expo.in",
      overwrite: true,
    })
    .set(data, { y: "100%" })
    .to(data, {
      y: "0",
      ease: "expo.out",
    });
};

const addEventListenerssss = () => {
  bentoBoxes.forEach((box) => {
    box.addEventListener("mouseenter", (e) => {
      const dataSpan = e.target.children[0].children[0];

      e.target.classList.add("active");
      animateInnerText(dataSpan);
    });
  });

  bentoBoxes.forEach((box) => {
    box.addEventListener("mouseout", (e) => {
      e.target.classList.remove("active");
    });
  });
};

// ✅ `#portfolio`가 뷰포트의 100%를 차지할 때만 실행 + 그 전까지 숨김
const observePortfolio = () => {
  if (!portfolioSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          // ✅ `#portfolio`가 뷰포트 100% 차지하면 나타남
          gsap.to(portfolioSection, {
            opacity: 1,
            duration: 0,
            ease: "expo.out",
          });
          portfolioSection.style.pointerEvents = "auto"; // 클릭 가능하게 변경
          initPortfolio();
          observer.disconnect(); // 실행 후 감시 중지
        }
      });
    },
    { threshold: 0.5 } // 100% 뷰포트에 들어왔을 때만 실행
  );

  observer.observe(portfolioSection);
};

document.addEventListener("DOMContentLoaded", observePortfolio);
