(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const s={element:document.querySelector(".menu"),pages:document.querySelectorAll(".menu_row_pages > h2"),info:document.querySelectorAll(".menu_row_info > div > span"),title:document.querySelectorAll(".menu_row_title > h1")},S={element:document.querySelector(".header_menu_button"),text:document.querySelectorAll(".header_menu_button_text > span"),open:document.querySelector(".--open-menu"),close:document.querySelector(".--close-menu")},h={init:"inset(0% 0% 0% 0%)",bottom:"inset(100% 0% 0% 0%)",top:"inset(0% 0% 100% 0%)"},w=gsap.timeline({paused:!0,defaults:{duration:1.6,ease:"expo.inOut"}});let f=!1;const T=()=>{gsap.set(s.element,{pointerEvents:"none",clipPath:h.bottom}),gsap.set(s.pages,{yPercent:100,autoAlpha:0}),gsap.set(s.info,{yPercent:100,autoAlpha:0}),gsap.set(s.title,{yPercent:100,rotateY:20,scale:.2}),gsap.set(s.media,{clipPath:h.bottom}),H()},L=()=>{f?gsap.to(s.element,{duration:.8,clipPath:h.top,ease:"expo.inOut",onComplete:()=>{gsap.set(s.element,{pointerEvents:"none",clipPath:h.bottom})}}):gsap.to(s.element,{duration:1.2,pointerEvents:"auto",clipPath:h.init,ease:"expo.inOut"})},H=()=>{w.to(s.pages,{yPercent:0,autoAlpha:1,stagger:.032},.24).to(s.info,{yPercent:0,autoAlpha:1,stagger:.032},.24).to(s.title,{yPercent:0,rotateY:0,scale:1,stagger:.032},0)},P=e=>{gsap.timeline().to(S.element,{duration:.8,autoAlpha:0,pointerEvents:"none",onComplete:()=>{S.text[0].textContent=e}}).to(S.element,{duration:.8,autoAlpha:1,pointerEvents:"auto"})},R=()=>{S.open.addEventListener("click",()=>{f?(P("Menu"),L(),w.reverse(2)):(P("Close"),L(),w.play()),f=!f})};document.querySelectorAll(".menu_row_pages a").forEach(e=>{e.addEventListener("click",()=>{P("Close"),L(),w.reverse(2),f=!1})});window.addEventListener("DOMContentLoaded",()=>{T(),R()});const p={element:document.querySelector(".intro"),titles:document.querySelectorAll(".intro_title_row_text"),media:document.querySelectorAll(".intro_media"),mediaImages:document.querySelectorAll(".intro_media_image")},N=()=>{gsap.set(p.titles,{autoAlpha:0,yPercent:-101}),gsap.set(p.media,{autoAlpha:0,xPercent:-100,yPercent:-25}),gsap.set(p.mediaImages,{xPercent:-100}),gsap.set(".nav_item_text",{yPercent:-100}),gsap.set(".intro_title_row:nth-child(3)",{xPercent:-50,x:"unset"}),U()},U=()=>{gsap.timeline({defaults:{duration:2,ease:"expo.inOut"}}).to(".nav_item_text",{yPercent:0}).to(p.media,{autoAlpha:1,xPercent:0},0).to(p.mediaImages,{xPercent:0,stagger:.016},.16).to(p.titles,{autoAlpha:1,yPercent:0,stagger:.016},2).to(p.media,{yPercent:0},2)};window.addEventListener("DOMContentLoaded",N);const y=document.querySelector(".card"),A=document.querySelector(".about"),B=document.querySelector(".modal"),E=document.querySelector(".modal_close"),q=document.querySelector(".modal_overlay"),I=document.querySelectorAll(".modal_list_item"),v=gsap.timeline({paused:!0,defaults:{ease:"expo.inOut"}});gsap.set(y,{opacity:0,y:20,pointerEvents:"none"});const F=()=>{gsap.set(I,{x:"110%"}),gsap.set(E,{autoAlpha:0,scale:0}),W(),z(),G()},G=()=>{if(!A)return;new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&n.intersectionRatio>=1?J():D()})},{threshold:1}).observe(A)},J=()=>{console.log("카드 등장!"),gsap.to(y,{opacity:1,y:0,duration:.5,ease:"power3.out",pointerEvents:"auto"})},D=()=>{console.log("카드 숨김!"),gsap.to(y,{opacity:0,y:20,duration:.5,ease:"power3.out",pointerEvents:"none"})},W=()=>{v.to(I,{duration:.8,x:0,stagger:.032}).set(B,{pointerEvents:"auto"}).to(q,{duration:1.2,backdropFilter:"blur(10px)",pointerEvents:"auto"},0).to(y,{duration:.8,x:"110%"},0).to(E,{duration:1.2,rotate:"90deg",scale:1,autoAlpha:1},.2)},z=()=>{y.addEventListener("click",()=>v.play()),E.addEventListener("click",()=>v.reverse()),q.addEventListener("click",()=>v.reverse())};F();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".about_wrapper"),t=document.querySelector(".about_paragraph_text");if(!e||!t){console.error("about_wrapper 또는 about_paragraph_text 요소를 찾을 수 없습니다.");return}gsap.set(t,{opacity:0,y:20});const n=()=>{gsap.to(t,{opacity:1,y:0,duration:2,ease:"power3.out"})},i=()=>{gsap.to(t,{opacity:0,y:20,duration:1,ease:"power3.in"})};(()=>{new IntersectionObserver(c=>{c.forEach(u=>{u.isIntersecting&&u.intersectionRatio>=1?n():i()})},{threshold:1}).observe(e)})()});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".about_wrapper"),t=document.querySelectorAll(".highlight");if(!e||t.length===0){console.error("about_wrapper 또는 highlight 요소를 찾을 수 없습니다.");return}const n=()=>{t.forEach(r=>{gsap.to(r,{backgroundSize:"100% 100%",duration:1,ease:"power3.out",delay:.5})})},i=()=>{t.forEach(r=>{gsap.to(r,{backgroundSize:"0% 100%",duration:.5,ease:"power3.in"})})};(()=>{new IntersectionObserver(c=>{c.forEach(u=>{u.isIntersecting&&u.intersectionRatio>=1?n():i()})},{threshold:1}).observe(e)})()});const C=document.querySelector(".bento"),_=C.querySelectorAll(".bento_box"),O=C.querySelectorAll(".bento_box_text > span"),Q=C.querySelectorAll(".bento_intro > .bento_intro_row > h1"),b=document.querySelector("#portfolio");b.style.opacity="0";b.style.pointerEvents="none";const V=()=>{gsap.set(_,{scaleY:0,transformOrigin:"bottom"}),gsap.set(O,{y:"110%"}),X()},X=()=>{Splitting({target:Q,by:"chars",key:null}),gsap.set(".bento_intro .char",{y:"100%"}),$()},$=()=>{gsap.timeline({defaults:{duration:.24,ease:"expo.inOut",stagger:.024}}).to(".bento_intro .char",{y:"0",onComplete:()=>{Y()}}).to(".bento_intro .char",{y:"-100%",onComplete:()=>{document.querySelector(".bento_intro").remove()}})},Y=()=>{gsap.timeline().to(_,{duration:.24,scaleY:"100%",ease:"expo.inOut",stagger:.05,onComplete:()=>{Z()}}).to(O,{duration:.24,y:"0",ease:"expo.out"},1)},K=e=>{gsap.timeline({defaults:{duration:.24}}).to(e,{y:"-100%",ease:"expo.in",overwrite:!0}).set(e,{y:"100%"}).to(e,{y:"0",ease:"expo.out"})},Z=()=>{_.forEach(e=>{e.addEventListener("mouseenter",t=>{const n=t.target.children[0].children[0];t.target.classList.add("active"),K(n)})}),_.forEach(e=>{e.addEventListener("mouseout",t=>{t.target.classList.remove("active")})})},ee=()=>{if(!b)return;const e=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&n.intersectionRatio>=.5&&(gsap.to(b,{opacity:1,duration:0,ease:"expo.out"}),b.style.pointerEvents="auto",V(),e.disconnect())})},{threshold:.5});e.observe(b)};document.addEventListener("DOMContentLoaded",ee);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".portfolio_modal"),t=document.querySelector(".modal_image"),n=document.querySelector(".modal_title"),i=document.querySelector(".modal_contribution"),o=document.querySelector(".modal_info"),r=document.querySelector(".modal_stack"),c=document.querySelector(".modal_links"),u=document.querySelector(".close_btn");let m;const j=()=>{if(!m&&o){let a=function(g){m.raf(g),requestAnimationFrame(a)};var d=a;m=new Lenis({wrapper:o,content:o,lerp:.1,smoothWheel:!0,smoothTouch:!0,infinite:!1}),requestAnimationFrame(a)}},k={1:{image:"./images/project01.png",objectPosition:"right center",title:"POPPING (2025)",contribution:"35%",info:"2주 동안 진행된 3인 구성의 풀스택 개발 프로젝트에서 프로덕트 디자인을 맡았습니다. <br />React의 컴포넌트 단위 개발 환경을 고려하여 디자인을 설계하고, 페이지의 분위기와 특성을 반영한 브랜딩을 진행했습니다. <br />전반적인 기획과 PPT 제작을 담당하며 프로젝트의 방향성을 정리하고 효과적으로 전달하는 역할을 수행했습니다.",stack:["Figma","HTML5","CSS3","Javascript","ReactJS","TailwindCSS","Node.js","Express.js","MySQL","Vite"],links:[{name:'<i class="fa-brands fa-figma"></i> Figma',url:"https://www.figma.com/design/HwwP47W6UIBlBwVkudjfX3/Project-%7C-Popping?node-id=4052-3999&t=ayIUlj29euA7OO16-1"},{name:'<i class="fa-solid fa-file-powerpoint"></i> PPT',url:"https://www.figma.com/proto/HwwP47W6UIBlBwVkudjfX3/Project-%7C-Popping?page-id=4021%3A347&node-id=4145-614&p=f&viewport=-599%2C489%2C0.06&t=aqn06aBqUV6xAJLk-1&scaling=contain&content-scaling=fixed&starting-point-node-id=4145%3A614"},{name:'<i class="fa-brands fa-github"></i> GitHub',url:"https://github.com/Team-Candy/popping"}]},2:{image:"./images/project02.png",objectPosition:"center center",title:"내일의 집 (2024)",contribution:"100%",info:"오늘의 집 상세페이지를 클론코딩하며, 체계적인 UI 구축과 실무 수준의 HTML, CSS 구조를 익혔습니다. <br /> Sass/SCSS를 활용하여 변수를 정의하고, 믹스인과 모듈화를 적용하며 코드의 재사용성과 유지보수성을 높이는 방법을 배웠습니다. <br /> 또한, Global Navigation Bar, Sidebar, Search Modal, Product Carousel 등 다양한 UI 컴포넌트를 개발하며, 복잡한 UI를 설계하고 반응형 웹을 구축하는 경험을 쌓았습니다. <br /> 이를 통해 보다 효율적으로 스타일을 관리하고, 실무에서 활용할 수 있는 UI 개발 역량을 갖추게 되었습니다.",stack:["ResponsiveWeb","Figma","HTML5","CSS3","Javascript","Sass(SCSS)"],links:[{name:'<i class="fa-brands fa-github"></i> GitHub',url:"https://github.com/Noilot/ohouse-clone"},{name:'<i class="fa-regular fa-window-restore"></i> Live',url:"https://noilot.github.io/ohouse-clone/"}]},3:{image:"./images/project03.png",objectPosition:"center center",title:"포메인 (2024)",contribution:"100%",info:"포메인 브랜드의 클론코딩을 통해 실무에서 활용할 수 있는 HTML과 CSS 레이아웃 제작 방법을 익혔으며, Fullpage 스크롤과 Depth GNB 네비게이션을 활용한 UI 설계를 경험했습니다. <br /> 또한, 숫자 카운트업 기능과 다양한 스크롤 기반 애니메이션을 적용하며, 동적인 웹페이지를 구현하는 법을 배웠습니다. <br /> 이미지 슬라이드와 인터랙션을 추가하는 과정에서 jQuery 및 JavaScript를 활용하여 더욱 자연스러운 사용자 경험을 설계할 수 있게 되었습니다.",stack:["HTML5","CSS3","Javascript","jQuery","GSAP","FullPage.js","Swiper.js","Intersection Observer"],links:[{name:'<i class="fa-brands fa-github"></i> GitHub',url:"https://github.com/Noilot/phomein-clone"},{name:'<i class="fa-regular fa-window-restore"></i> Live',url:"https://noilot.github.io/phomein-clone/"}]},4:{image:"./images/project04.png",objectPosition:"top center",title:"핫트랙스 (2023)",contribution:"100%",info:"핫트랙스 기업 웹사이트를 분석하고 UI/UX 개선점을 도출하여 가상 리뉴얼 프로젝트를 진행했습니다. <br /> 기존 사이트의 정보 구조와 사용자 경험을 평가하고, 논리적인 카테고리 재구성 및 반응형 웹 디자인을 설계하는 과정을 경험했습니다. <br /> Figma를 활용한 UI 디자인 스케치, 프로토타이핑을 진행하며, 사용자 흐름을 고려한 정보 설계 및 인터랙티브한 디자인 요소를 적용하는 방법을 익혔습니다. <br /> 또한, 브랜드 아이덴티티를 강화하기 위해 컬러 시스템과 타이포그래피 가이드를 정리하고, 무드보드를 활용한 일관된 디자인 방향성을 설정하는 경험을 쌓았습니다.",stack:["Figma","UI/UX 기획","반응형 웹 디자인"],links:[{name:'<i class="fa-brands fa-figma"></i> Figma',url:"https://www.figma.com/design/Elrgz5QMKyS32pPvzbe8We/Project-%7C-HottracksCompanyRenewal-(Responsive-Web)?node-id=311-1520&t=aLLVG5czrFacfpXk-1"}]},5:{image:"./images/project05.png",objectPosition:"top center",title:"CRM (2024)",contribution:"100%",info:"고객(Customer) 및 주문(Order) 데이터를 관리하는 CRM 시스템입니다. 사용자는 고객 목록을 조회하고, 특정 고객의 주문 내역 및 자주 방문한 매장과 자주 구매한 상품을 확인할 수 있습니다. 또한, 아이템별 월간 매출 데이터를 분석하여 그래프 시각화하는 기능도 포함되어 있습니다.",stack:["Node.js","Express.js","SQLite3","CORS","ReactJS","React Router","Axios","Chart.js"],links:[{name:'<i class="fa-brands fa-github"></i> GitHub',url:"https://github.com/Noilot/CRM"}]},6:{image:"./images/project06.png",objectPosition:"center center",title:"LOST CORNER (2024)",contribution:"100%",info:"연습 삼아 제작한 gsap과 lenis를 활용한 횡스크롤 페이지입니다. 좋아하는 J-POP 가수의 앨범을 활용하여 제작하였습니다. 반응형 페이지입니다.",stack:["Responsive","HTML","CSS","Sass(SCSS)","Javascript","GSAP","ScrollTrigger","lenis.js","SmoothScroll"],links:[{name:'<i class="fa-brands fa-github"></i> GitHub',url:"https://github.com/Noilot/lost-corner"},{name:'<i class="fa-regular fa-window-restore"></i> Live',url:"https://noilot.github.io/lost-corner/"}]}},x=()=>{gsap.to(".portfolio_modal .modal_content",{y:30,opacity:0,duration:.4,ease:"power3.in",onComplete:()=>{e.classList.remove("show"),e.close(),m&&m.destroy(),m=null}})},M=d=>{const a=k[d];a&&(t.style.backgroundImage=`url(${a.image})`,t.style.objectPosition=a.objectPosition||"top",t.src=a.image,t.alt=a.title,n.textContent=a.title,i.innerHTML="",i.setAttribute("data-value",a.contribution),te(a.contribution),o.innerHTML=a.info,r.innerHTML="",a.stack.forEach(g=>{const l=document.createElement("span");l.textContent=`#${g}`,l.classList.add("tech-tag"),r.appendChild(l)}),c.innerHTML="",a.links.forEach(g=>{const l=document.createElement("a");l.href=g.url,l.target="_blank",l.rel="noopener noreferrer",l.innerHTML=`${g.name}`,l.classList.add("modal_link"),c.appendChild(l)}),e.showModal(),e.classList.add("show"),gsap.fromTo(".portfolio_modal .modal_content",{y:50,opacity:0,scale:.9},{y:0,opacity:1,scale:1,duration:.5,ease:"power3.out"}),j())};document.querySelectorAll(".bento_box").forEach(d=>{d.addEventListener("click",()=>{const a=d.dataset.project;M(a)})}),u.addEventListener("click",x),e.addEventListener("click",d=>{d.target===e&&x()})});function te(e){document.querySelectorAll(".modal_contribution").forEach(t=>{let n=parseInt(e,10);if(!isNaN(n)){t.innerHTML="";const i=document.createElement("div");i.classList.add("text"),i.textContent=`${n}%`;const o=document.createElement("div");o.classList.add("bar"),o.style.width="0%",n===100?i.style.color="white":i.style.color="black",t.appendChild(o),t.appendChild(i),setTimeout(()=>{o.style.width=`${n}%`},100)}})}
