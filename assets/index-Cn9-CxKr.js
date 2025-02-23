(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const s={element:document.querySelector(".menu"),pages:document.querySelectorAll(".menu_row_pages > h2"),info:document.querySelectorAll(".menu_row_info > div > span"),title:document.querySelectorAll(".menu_row_title > h1")},h={element:document.querySelector(".header_menu_button"),text:document.querySelectorAll(".header_menu_button_text > span"),open:document.querySelector(".--open-menu"),close:document.querySelector(".--close-menu")},m={init:"inset(0% 0% 0% 0%)",bottom:"inset(100% 0% 0% 0%)",top:"inset(0% 0% 100% 0%)"},v=gsap.timeline({paused:!0,defaults:{duration:1.6,ease:"expo.inOut"}});let f=!1;const O=()=>{gsap.set(s.element,{pointerEvents:"none",clipPath:m.bottom}),gsap.set(s.pages,{yPercent:100,autoAlpha:0}),gsap.set(s.info,{yPercent:100,autoAlpha:0}),gsap.set(s.title,{yPercent:100,rotateY:20,scale:.2}),gsap.set(s.media,{clipPath:m.bottom}),j()},L=()=>{f?gsap.to(s.element,{duration:.8,clipPath:m.top,ease:"expo.inOut",onComplete:()=>{gsap.set(s.element,{pointerEvents:"none",clipPath:m.bottom})}}):gsap.to(s.element,{duration:1.2,pointerEvents:"auto",clipPath:m.init,ease:"expo.inOut"})},j=()=>{v.to(s.pages,{yPercent:0,autoAlpha:1,stagger:.032},.24).to(s.info,{yPercent:0,autoAlpha:1,stagger:.032},.24).to(s.title,{yPercent:0,rotateY:0,scale:1,stagger:.032},0)},x=e=>{gsap.timeline().to(h.element,{duration:.8,autoAlpha:0,pointerEvents:"none",onComplete:()=>{h.text[0].textContent=e}}).to(h.element,{duration:.8,autoAlpha:1,pointerEvents:"auto"})},k=()=>{h.open.addEventListener("click",()=>{f?(x("Menu"),L(),v.reverse(2)):(x("Close"),L(),v.play()),f=!f})};window.addEventListener("DOMContentLoaded",()=>{O(),k()});const d={element:document.querySelector(".intro"),titles:document.querySelectorAll(".intro_title_row_text"),media:document.querySelectorAll(".intro_media"),mediaImages:document.querySelectorAll(".intro_media_image")},M=()=>{gsap.set(d.titles,{autoAlpha:0,yPercent:-101}),gsap.set(d.media,{autoAlpha:0,xPercent:-100,yPercent:-25}),gsap.set(d.mediaImages,{xPercent:-100}),gsap.set(".nav_item_text",{yPercent:-100}),gsap.set(".intro_title_row:nth-child(3)",{xPercent:-50,x:"unset"}),T()},T=()=>{gsap.timeline({defaults:{duration:2,ease:"expo.inOut"}}).to(".nav_item_text",{yPercent:0}).to(d.media,{autoAlpha:1,xPercent:0},0).to(d.mediaImages,{xPercent:0,stagger:.016},.16).to(d.titles,{autoAlpha:1,yPercent:0,stagger:.016},2).to(d.media,{yPercent:0},2)};window.addEventListener("DOMContentLoaded",M);const g=document.querySelector(".card"),E=document.querySelector(".about"),H=document.querySelector(".modal"),_=document.querySelector(".modal_close"),A=document.querySelector(".modal_overlay"),q=document.querySelectorAll(".modal_list_item"),y=gsap.timeline({paused:!0,defaults:{ease:"expo.inOut"}});gsap.set(g,{opacity:0,y:20,pointerEvents:"none"});const U=()=>{gsap.set(q,{x:"110%"}),gsap.set(_,{autoAlpha:0,scale:0}),G(),B(),F()},F=()=>{if(!E)return;new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&a.intersectionRatio>=1?N():R()})},{threshold:1}).observe(E)},N=()=>{console.log("카드 등장!"),gsap.to(g,{opacity:1,y:0,duration:.5,ease:"power3.out",pointerEvents:"auto"})},R=()=>{console.log("카드 숨김!"),gsap.to(g,{opacity:0,y:20,duration:.5,ease:"power3.out",pointerEvents:"none"})},G=()=>{y.to(q,{duration:.8,x:0,stagger:.032}).set(H,{pointerEvents:"auto"}).to(A,{duration:1.2,backdropFilter:"blur(10px)",pointerEvents:"auto"},0).to(g,{duration:.8,x:"110%"},0).to(_,{duration:1.2,rotate:"90deg",scale:1,autoAlpha:1},.2)},B=()=>{g.addEventListener("click",()=>y.play()),_.addEventListener("click",()=>y.reverse()),A.addEventListener("click",()=>y.reverse())};U();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".about_wrapper"),t=document.querySelector(".about_paragraph_text");if(!e||!t){console.error("about_wrapper 또는 about_paragraph_text 요소를 찾을 수 없습니다.");return}gsap.set(t,{opacity:0,y:20});const a=()=>{gsap.to(t,{opacity:1,y:0,duration:2,ease:"power3.out"})},l=()=>{gsap.to(t,{opacity:0,y:20,duration:1,ease:"power3.in"})};(()=>{new IntersectionObserver(c=>{c.forEach(u=>{u.isIntersecting&&u.intersectionRatio>=1?a():l()})},{threshold:1}).observe(e)})()});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".about_wrapper"),t=document.querySelectorAll(".highlight");if(!e||t.length===0){console.error("about_wrapper 또는 highlight 요소를 찾을 수 없습니다.");return}const a=()=>{t.forEach(n=>{gsap.to(n,{backgroundSize:"100% 100%",duration:1,ease:"power3.out",delay:.5})})},l=()=>{t.forEach(n=>{gsap.to(n,{backgroundSize:"0% 100%",duration:.5,ease:"power3.in"})})};(()=>{new IntersectionObserver(c=>{c.forEach(u=>{u.isIntersecting&&u.intersectionRatio>=1?a():l()})},{threshold:1}).observe(e)})()});const w=document.querySelector(".bento"),S=w.querySelectorAll(".bento_box"),C=w.querySelectorAll(".bento_box_text > span"),D=w.querySelectorAll(".bento_intro > .bento_intro_row > h1"),J=()=>{gsap.set(S,{scaleY:0,transformOrigin:"bottom"}),gsap.set(C,{y:"110%"}),X()},X=()=>{Splitting({target:D,by:"chars",key:null}),gsap.set(".bento_intro .char",{y:"100%"}),z()},z=()=>{gsap.timeline({defaults:{duration:1.6,ease:"expo.inOut",stagger:.02}}).to(".bento_intro .char",{y:"0",onComplete:()=>{W()}}).to(".bento_intro .char",{y:"-100%",onComplete:()=>{document.querySelector(".bento_intro").remove()}})},W=()=>{gsap.timeline().to(S,{duration:1.6,scaleY:"100%",ease:"expo.inOut",stagger:.05,onComplete:()=>{Q()}}).to(C,{duration:1.6,y:"0",ease:"expo.out"},1)},Y=e=>{gsap.timeline({defaults:{duration:.32}}).to(e,{y:"-100%",ease:"expo.in",overwrite:!0}).set(e,{y:"100%"}).to(e,{y:"0",ease:"expo.out"})},Q=()=>{S.forEach(e=>{e.addEventListener("mouseenter",t=>{const a=t.target.children[0].children[0];t.target.classList.add("active"),Y(a)})}),S.forEach(e=>{e.addEventListener("mouseout",t=>{t.target.classList.remove("active")})})};J();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".portfolio_modal"),t=document.querySelector(".modal_image"),a=document.querySelector(".modal_title"),l=document.querySelector(".modal_info"),o=document.querySelector(".modal_stack"),n=document.querySelector(".modal_links"),c=document.querySelector(".close_btn"),u={1:{image:"./images/project01.png",objectPosition:"right center",title:"POPPING (2025)",info:"2주 동안 진행된 3인 구성의 풀스택 개발 프로젝트에서 기획 및 디자인을 맡았습니다. <br /> React의 컴포넌트 단위 개발 환경을 고려하여 디자인을 설계하고, 페이지의 분위기와 특성을 반영한 브랜딩을 진행했습니다. <br /> 또한, 전반적인 기획과 PPT 제작을 담당하며 프로젝트의 방향성을 정리하고 효과적으로 전달하는 역할을 수행했습니다.",stack:["Figma","HTML5","CSS3","Javascript","ReactJS","TailwindCSS","Node.js","Express.js","MySQL","Vite"],links:[{name:'<i class="fa-brands fa-figma"></i> Figma',url:"https://www.figma.com/design/HwwP47W6UIBlBwVkudjfX3/Project-%7C-Popping?node-id=4052-3999&t=ayIUlj29euA7OO16-1"}]},2:{image:"./images/project02.png",objectPosition:"center center",title:"내일의 집 (2024)",info:"오늘의 집 상세페이지를 클론코딩하며, 체계적인 UI 구축과 실무 수준의 HTML, CSS 구조를 익혔습니다. <br /> Sass/SCSS를 활용하여 변수를 정의하고, 믹스인과 모듈화를 적용하며 코드의 재사용성과 유지보수성을 높이는 방법을 배웠습니다. <br /> 또한, Global Navigation Bar, Sidebar, Search Modal, Product Carousel 등 다양한 UI 컴포넌트를 개발하며, 복잡한 UI를 설계하고 반응형 웹을 구축하는 경험을 쌓았습니다. <br /> 이를 통해 보다 효율적으로 스타일을 관리하고, 실무에서 활용할 수 있는 UI 개발 역량을 갖추게 되었습니다.",stack:["ResponsiveWeb","Figma","HTML5","CSS3","Javascript","Sass(SCSS)"],links:[{name:'<i class="fa-brands fa-github"></i> GitHub',url:"https://github.com/Noilot/ohouse-clone"},{name:'<i class="fa-regular fa-window-restore"></i> Live',url:"https://noilot.github.io/ohouse-clone/"}]},3:{image:"./images/project03.png",objectPosition:"center center",title:"포메임 (2024)",info:"포메임 브랜드의 클론코딩을 통해 실무에서 활용할 수 있는 HTML과 CSS 레이아웃 제작 방법을 익혔으며, Fullpage 스크롤과 Depth GNB 네비게이션을 활용한 UI 설계를 경험했습니다. <br /> 또한, 숫자 카운트업 기능과 다양한 스크롤 기반 애니메이션을 적용하며, 동적인 웹페이지를 구현하는 법을 배웠습니다. <br /> 이미지 슬라이드와 인터랙션을 추가하는 과정에서 jQuery 및 JavaScript를 활용하여 더욱 자연스러운 사용자 경험을 설계할 수 있게 되었습니다.",stack:["HTML5","CSS3","Javascript","jQuery","GSAP","FullPage.js","Swiper.js","Intersection Observer"],links:[{name:'<i class="fa-brands fa-github"></i> GitHub',url:"https://github.com/Noilot/phomein-clone"},{name:'<i class="fa-regular fa-window-restore"></i> Live',url:"https://noilot.github.io/phomein-clone/"}]},4:{image:"./images/project04.png",objectPosition:"top center",title:"핫트랙스 (2023)",info:"핫트랙스 기업 웹사이트를 분석하고 UI/UX 개선점을 도출하여 가상 리뉴얼 프로젝트를 진행했습니다. <br /> 기존 사이트의 정보 구조와 사용자 경험을 평가하고, 논리적인 카테고리 재구성 및 반응형 웹 디자인을 설계하는 과정을 경험했습니다. <br /> Figma를 활용한 UI 디자인 스케치, 프로토타이핑을 진행하며, 사용자 흐름을 고려한 정보 설계 및 인터랙티브한 디자인 요소를 적용하는 방법을 익혔습니다. <br /> 또한, 브랜드 아이덴티티를 강화하기 위해 컬러 시스템과 타이포그래피 가이드를 정리하고, 무드보드를 활용한 일관된 디자인 방향성을 설정하는 경험을 쌓았습니다.",stack:["Figma","UI/UX 기획","반응형 웹 디자인"],links:[{name:'<i class="fa-brands fa-figma"></i> Figma',url:"https://www.figma.com/design/Elrgz5QMKyS32pPvzbe8We/Project-%7C-HottracksCompanyRenewal-(Responsive-Web)?node-id=311-1520&t=aLLVG5czrFacfpXk-1"}]},5:{image:"./images/project05.png",objectPosition:"top center",title:"맥도날드 (2023)",info:"맥딜리버리는 선도적인 배달 서비스였지만, 현재(2023년 기준) UI/UX 측면에서 경쟁사보다 뒤처지고 있습니다. <br /> 본 프로젝트는 기존 맥딜리버리의 비효율적인 인터페이스를 개선하고, 사용자가 보다 쉽고 빠르게 주문할 수 있도록 리뉴얼하는 것을 목표로 합니다. <br /> 이를 위해 브랜드 아이덴티티를 반영한 디자인을 적용하고, 직관적인 내비게이션과 간소화된 주문 절차를 설계하였습니다.",stack:["Figma","UI/UX 기획","앱 디자인"],links:[{name:'<i class="fa-brands fa-figma"></i> Figma',url:"https://www.figma.com/design/j3OJN4IJqf74Yq7GxXuAxg/Project-%7C-McDeliveryRenewal-(Mobile-Web)?node-id=0-1&t=hzd6CRaT8mNrglvD-1"}]},6:{image:"./images/project06.png",objectPosition:"center center",title:"LOST CORNER (2024)",info:"연습 삼아 제작한 gsap과 lenis를 활용한 횡스크롤 페이지입니다. 좋아하는 J-POP 가수의 앨범을 활용하여 제작하였습니다. 반응형 페이지입니다.",stack:["Responsive","HTML","CSS","Sass(SCSS)","Javascript","GSAP","ScrollTrigger","lenis.js","SmoothScroll"],links:[{name:'<i class="fa-brands fa-github"></i> GitHub',url:"https://github.com/Noilot/lost-corner"},{name:'<i class="fa-regular fa-window-restore"></i> Live',url:"https://noilot.github.io/lost-corner/"}]}},P=()=>{gsap.to(".portfolio_modal .modal_content",{y:30,opacity:0,duration:.4,ease:"power3.in",onComplete:()=>{e.classList.remove("show"),e.close()}})},I=p=>{const r=u[p];r&&(t.style.backgroundImage=`url(${r.image})`,t.style.objectPosition=r.objectPosition||"top",t.src=r.image,t.alt=r.title,a.textContent=r.title,l.innerHTML=r.info,o.innerHTML="",r.stack.forEach(b=>{const i=document.createElement("span");i.textContent=`#${b}`,i.classList.add("tech-tag"),o.appendChild(i)}),n.innerHTML="",r.links.forEach(b=>{const i=document.createElement("a");i.href=b.url,i.target="_blank",i.rel="noopener noreferrer",i.innerHTML=`${b.name}`,i.classList.add("modal_link"),n.appendChild(i)}),e.showModal(),e.classList.add("show"),gsap.fromTo(".portfolio_modal .modal_content",{y:50,opacity:0,scale:.9},{y:0,opacity:1,scale:1,duration:.5,ease:"power3.out"}))};document.querySelectorAll(".bento_box").forEach(p=>{p.addEventListener("click",()=>{const r=p.dataset.project;I(r)})}),c.addEventListener("click",P),e.addEventListener("click",p=>{p.target===e&&P()})});
