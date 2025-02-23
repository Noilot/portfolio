document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".portfolio_modal");
  const modalImage = document.querySelector(".modal_image");
  const modalTitle = document.querySelector(".modal_title");
  const modalContribution = document.querySelector(".modal_contribution");
  const modalInfo = document.querySelector(".modal_info");
  const modalStack = document.querySelector(".modal_stack");
  const modalLinks = document.querySelector(".modal_links");
  const closeButton = document.querySelector(".close_btn");

  // ✅ Lenis 초기화
  let lenis;
  const initLenis = () => {
    if (!lenis && modalInfo) {
      lenis = new Lenis({
        wrapper: modalInfo,
        content: modalInfo,
        lerp: 0.1,
        smoothWheel: true,
        smoothTouch: true,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  };

  // 프로젝트 정보를 객체로 관리
  const projectData = {
    1: {
      image: "./images/project01.png",
      objectPosition: "right center",
      title: "POPPING (2025)",
      contribution: "35%",
      info: `2주 동안 진행된 3인 구성의 풀스택 개발 프로젝트에서 프로덕트 디자인을 맡았습니다. <br />React의 컴포넌트 단위 개발 환경을 고려하여 디자인을 설계하고, 페이지의 분위기와 특성을 반영한 브랜딩을 진행했습니다. <br />전반적인 기획과 PPT 제작을 담당하며 프로젝트의 방향성을 정리하고 효과적으로 전달하는 역할을 수행했습니다.`,
      stack: [
        "Figma",
        "HTML5",
        "CSS3",
        "Javascript",
        "ReactJS",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "MySQL",
        "Vite",
      ],
      links: [
        {
          name: `<i class="fa-brands fa-figma"></i> Figma`,
          url: "https://www.figma.com/design/HwwP47W6UIBlBwVkudjfX3/Project-%7C-Popping?node-id=4052-3999&t=ayIUlj29euA7OO16-1",
        },
        {
          name: `<i class="fa-solid fa-file-powerpoint"></i> PPT`,
          url: "https://www.figma.com/proto/HwwP47W6UIBlBwVkudjfX3/Project-%7C-Popping?page-id=4021%3A347&node-id=4145-614&p=f&viewport=-599%2C489%2C0.06&t=aqn06aBqUV6xAJLk-1&scaling=contain&content-scaling=fixed&starting-point-node-id=4145%3A614",
        },
        {
          name: `<i class="fa-brands fa-github"></i> GitHub`,
          url: "https://github.com/Team-Candy/popping",
        },
      ],
    },
    2: {
      image: "./images/project02.png",
      objectPosition: "center center",
      title: "내일의 집 (2024)",
      contribution: "100%",
      info: "오늘의 집 상세페이지를 클론코딩하며, 체계적인 UI 구축과 실무 수준의 HTML, CSS 구조를 익혔습니다. <br /> Sass/SCSS를 활용하여 변수를 정의하고, 믹스인과 모듈화를 적용하며 코드의 재사용성과 유지보수성을 높이는 방법을 배웠습니다. <br /> 또한, Global Navigation Bar, Sidebar, Search Modal, Product Carousel 등 다양한 UI 컴포넌트를 개발하며, 복잡한 UI를 설계하고 반응형 웹을 구축하는 경험을 쌓았습니다. <br /> 이를 통해 보다 효율적으로 스타일을 관리하고, 실무에서 활용할 수 있는 UI 개발 역량을 갖추게 되었습니다.",
      stack: [
        "ResponsiveWeb",
        "Figma",
        "HTML5",
        "CSS3",
        "Javascript",
        "Sass(SCSS)",
      ],
      links: [
        {
          name: `<i class="fa-brands fa-github"></i> GitHub`,
          url: "https://github.com/Noilot/ohouse-clone",
        },
        {
          name: `<i class="fa-regular fa-window-restore"></i> Live`,
          url: "https://noilot.github.io/ohouse-clone/",
        },
      ],
    },
    3: {
      image: "./images/project03.png",
      objectPosition: "center center",
      title: "포메인 (2024)",
      contribution: "100%",
      info: "포메인 브랜드의 클론코딩을 통해 실무에서 활용할 수 있는 HTML과 CSS 레이아웃 제작 방법을 익혔으며, Fullpage 스크롤과 Depth GNB 네비게이션을 활용한 UI 설계를 경험했습니다. <br /> 또한, 숫자 카운트업 기능과 다양한 스크롤 기반 애니메이션을 적용하며, 동적인 웹페이지를 구현하는 법을 배웠습니다. <br /> 이미지 슬라이드와 인터랙션을 추가하는 과정에서 jQuery 및 JavaScript를 활용하여 더욱 자연스러운 사용자 경험을 설계할 수 있게 되었습니다.",
      stack: [
        "HTML5",
        "CSS3",
        "Javascript",
        "jQuery",
        "GSAP",
        "FullPage.js",
        "Swiper.js",
        "Intersection Observer",
      ],
      links: [
        {
          name: `<i class="fa-brands fa-github"></i> GitHub`,
          url: "https://github.com/Noilot/phomein-clone",
        },
        {
          name: `<i class="fa-regular fa-window-restore"></i> Live`,
          url: "https://noilot.github.io/phomein-clone/",
        },
      ],
    },
    4: {
      image: "./images/project04.png",
      objectPosition: "top center",
      title: "핫트랙스 (2023)",
      contribution: "100%",
      info: "핫트랙스 기업 웹사이트를 분석하고 UI/UX 개선점을 도출하여 가상 리뉴얼 프로젝트를 진행했습니다. <br /> 기존 사이트의 정보 구조와 사용자 경험을 평가하고, 논리적인 카테고리 재구성 및 반응형 웹 디자인을 설계하는 과정을 경험했습니다. <br /> Figma를 활용한 UI 디자인 스케치, 프로토타이핑을 진행하며, 사용자 흐름을 고려한 정보 설계 및 인터랙티브한 디자인 요소를 적용하는 방법을 익혔습니다. <br /> 또한, 브랜드 아이덴티티를 강화하기 위해 컬러 시스템과 타이포그래피 가이드를 정리하고, 무드보드를 활용한 일관된 디자인 방향성을 설정하는 경험을 쌓았습니다.",
      stack: ["Figma", "UI/UX 기획", "반응형 웹 디자인"],
      links: [
        {
          name: `<i class="fa-brands fa-figma"></i> Figma`,
          url: "https://www.figma.com/design/Elrgz5QMKyS32pPvzbe8We/Project-%7C-HottracksCompanyRenewal-(Responsive-Web)?node-id=311-1520&t=aLLVG5czrFacfpXk-1",
        },
      ],
    },
    5: {
      image: "./images/project05.png",
      objectPosition: "top center",
      title: "CRM (2024)",
      contribution: "100%",
      info: "고객(Customer) 및 주문(Order) 데이터를 관리하는 CRM 시스템입니다. 사용자는 고객 목록을 조회하고, 특정 고객의 주문 내역 및 자주 방문한 매장과 자주 구매한 상품을 확인할 수 있습니다. 또한, 아이템별 월간 매출 데이터를 분석하여 그래프 시각화하는 기능도 포함되어 있습니다.",
      stack: [
        "Node.js",
        "Express.js",
        "SQLite3",
        "CORS",
        "ReactJS",
        "React Router",
        "Axios",
        "Chart.js",
      ],
      links: [
        {
          name: `<i class="fa-brands fa-github"></i> GitHub`,
          url: "https://github.com/Noilot/CRM",
        },
      ],
    },
    6: {
      image: "./images/project06.png",
      objectPosition: "center center",
      title: "LOST CORNER (2024)",
      contribution: "100%",
      info: "연습 삼아 제작한 gsap과 lenis를 활용한 횡스크롤 페이지입니다. 좋아하는 J-POP 가수의 앨범을 활용하여 제작하였습니다. 반응형 페이지입니다.",
      stack: [
        "Responsive",
        "HTML",
        "CSS",
        "Sass(SCSS)",
        "Javascript",
        "GSAP",
        "ScrollTrigger",
        "lenis.js",
        "SmoothScroll",
      ],
      links: [
        {
          name: `<i class="fa-brands fa-github"></i> GitHub`,
          url: "https://github.com/Noilot/lost-corner",
        },
        {
          name: `<i class="fa-regular fa-window-restore"></i> Live`,
          url: "https://noilot.github.io/lost-corner/",
        },
      ],
    },
  };

  const closeModal = () => {
    gsap.to(".portfolio_modal .modal_content", {
      y: 30,
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => {
        modal.classList.remove("show");
        modal.close();
        if (lenis) lenis.destroy(); // 모달 닫을 때 Lenis 제거
        lenis = null;
      },
    });
  };

  // ✅ 모달 열기 함수
  const openModal = (projectId) => {
    const data = projectData[projectId];
    if (!data) return;

    modalImage.style.backgroundImage = `url(${data.image})`;
    modalImage.style.objectPosition = data.objectPosition || "top";
    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalTitle.textContent = data.title;
    modalContribution.innerHTML = "";
    modalContribution.setAttribute("data-value", data.contribution);
    initContributionBar(data.contribution);
    modalInfo.innerHTML = data.info;
    modalStack.innerHTML = "";
    data.stack.forEach((tech) => {
      const span = document.createElement("span");
      span.textContent = `#${tech}`;
      span.classList.add("tech-tag");
      modalStack.appendChild(span);
    });

    modalLinks.innerHTML = "";
    data.links.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.innerHTML = `${link.name}`;
      a.classList.add("modal_link");
      modalLinks.appendChild(a);
    });

    modal.showModal();
    modal.classList.add("show");

    gsap.fromTo(
      ".portfolio_modal .modal_content",
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
    );

    initLenis(); // ✅ 모달이 열릴 때 Lenis 초기화
  };

  // ✅ 모달 열기 이벤트 추가
  document.querySelectorAll(".bento_box").forEach((box) => {
    box.addEventListener("click", () => {
      const projectId = box.dataset.project;
      openModal(projectId);
    });
  });

  // ✅ 모달 닫기 이벤트 추가
  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});

//기여도 표시
function initContributionBar(contribution) {
  document.querySelectorAll(".modal_contribution").forEach((element) => {
    let percentage = parseInt(contribution, 10); // "35%" → 35 변환

    if (!isNaN(percentage)) {
      // ✅ 기존 막대와 텍스트 삭제 후 다시 추가
      element.innerHTML = "";

      // ✅ 숫자 표시하는 텍스트 요소
      const text = document.createElement("div");
      text.classList.add("text");
      text.textContent = `${percentage}%`;

      // ✅ 막대그래프 요소
      const bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.width = "0%"; // 초기 상태

      // ✅ 100%이면 흰색 글자, 아니면 검은색 글자
      if (percentage === 100) {
        text.style.color = "white";
      } else {
        text.style.color = "black";
      }

      // ✅ 요소 추가
      element.appendChild(bar);
      element.appendChild(text);

      // ✅ 애니메이션 적용 (setTimeout을 사용해 자연스럽게)
      setTimeout(() => {
        bar.style.width = `${percentage}%`;
      }, 100);
    }
  });
}
