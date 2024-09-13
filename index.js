import{A as g,S as _,N as b,K as M,i as u,a as I}from"./assets/vendor-BoIuhpoi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const w of r.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&p(w)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const P=document.querySelector(".header-menu-link"),s=document.querySelector(".header-menu-list"),C=document.querySelector(".header-burger-btn"),f=document.querySelector(".header-burger-menu"),q=document.querySelector(".header-close-btn"),U=document.querySelector(".header-burger-order-btn"),D=document.querySelector(".header-burger-menu-list");P.addEventListener("click",y);C.addEventListener("click",G);q.addEventListener("click",h);s.addEventListener("click",y);U.addEventListener("click",h);D.addEventListener("click",h);document.body.addEventListener("click",e=>{!s.classList.contains("visually-hidden")&&!e.target.classList.contains("header-menu-link")&&y()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!s.classList.contains("visually-hidden")&&y()});const B=new KeyframeEffect(s,[{opacity:"0",transform:"translateY(-100%)"},{opacity:"1",transform:"translateY(0)"}],{duration:500}),k=new KeyframeEffect(s,[{opacity:"1",transform:"translateY(0)"},{opacity:"0",transform:"translateY(-100%)"}],{duration:500}),V=new Animation(B,document.timeline),F=new Animation(k,document.timeline),j=new KeyframeEffect(f,[{transform:"translateX(100%)"},{transform:"translateX(0)"}],{duration:500}),K=new KeyframeEffect(f,[{transform:"translateX(0)"},{transform:"translateX(100%)"}],{duration:500}),x=new Animation(j,document.timeline),H=new Animation(K,document.timeline);function y(){if(s.classList.contains("visually-hidden")){V.play(),s.classList.remove("visually-hidden");return}F.play(),setTimeout(()=>{s.classList.add("visually-hidden")},500)}function G(){f.classList.add("is-open-header"),x.play(),document.body.style.overflow="hidden"}function h(){H.play(),setTimeout(()=>{f.classList.remove("is-open-header")},500),document.body.style.overflow=""}const L=document.querySelector(".btn-scroll-top");window.addEventListener("scroll",()=>{window.scrollY>300?L.classList.remove("is-btnshow-hide"):L.classList.add("is-btnshow-hide")});L.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})};const R=new g(".about-me-accord-list",{duration:350,elementClass:"about-me-accord-item",triggerClass:"about-me-accord-trigger",panelClass:"about-me-accord-panel",showMultiple:!0,onOpen:W,onClose:Y});R.open(0);setTimeout(()=>{R.attachEvents()},1e3);function W(e){e.getBoundingClientRect(),Math.max(document.documentElement.clientHeight,window.innerHeight)}function Y(e){}const d=new _(".skills-me-swiper",{modules:[b,M],navigation:{nextEl:".skills-swiper-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},loop:!0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},centeredSlidesBounds:!0,speed:400}),X=document.querySelector(".skills-swiper-btn");X.addEventListener("click",()=>{window.innerWidth>=1440&&(d.slides[d.activeIndex].parentNode.appendChild(d.slides[d.activeIndex]),d.update())});const $=document.querySelector(".prj-n"),z=document.querySelector(".prj-p");function J(){try{const e=new _(".prj-swiper",{slidesPerView:1,spaceBetween:30,direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:$,prevEl:z},speed:900})}catch{u.error({title:"Error",message:"Sorry, something went wrong.",position:"center"})}}J();document.addEventListener("DOMContentLoaded",function(){new g(".faq-accordion-container",{duration:600,showMultiple:!0,triggerClass:"faq-ac-trigger",elementClass:"faq-ac",panelClass:"faq-ac-panel",activeClass:"faq-is-active"})});const Q=document.querySelector(".js-observered"),Z={root:null,rootMargin:"0px 0px 0px 0px",threshold:.5},ee=e=>{if(e[0].isIntersecting){const t=document.getElementsByClassName("marquee-line");Array.from(t).forEach(n=>n.style.animationName="marqueeLine")}else{const t=document.getElementsByClassName("marquee-line");Array.from(t).forEach(n=>n.style.animationName="none")}},te=new IntersectionObserver(ee,Z);te.observe(Q);const S=document.querySelector(".js-review-cards"),ne=document.querySelector(".rev-n"),oe=document.querySelector(".rev-p"),re="https://portfolio-js.b.goit.study/api",se=async()=>{const e={method:"GET"};try{const t=await fetch(`${re}/reviews`,e);if(!t.ok)throw new Error(t.status);return await t.json()}catch(t){return t}};se().then(e=>{ie(e),ae()}).catch(e=>{u.error({title:"Error",message:"Sorry, something went wrong with reviews.",position:"center"}),ce()});function ie(e){S.innerHTML="";const t=e.map(({author:n,avatar_url:p,review:o})=>`<li class="review-posts swiper-slide">
            <img class="review-avatar" src="${p}" alt="Avatar of ${n}">
            <h2 class="review-author">${n}</h2>
            <p class="review-post-body">${o}</p>
        </li>`).join("");S.insertAdjacentHTML("beforeend",t)}function ce(){const e=document.querySelector(".error");e&&e.remove(),S.insertAdjacentHTML("beforebegin",'<p class="review-error">Not Found</p>')}function ae(){try{const e=new _(".swiper",{direction:"horizontal",autoHeight:!1,observer:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:ne,prevEl:oe},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}})}catch{u.error({title:"Error",message:"Sorry, something went wrong with reviews.",position:"center"})}}const le=document.querySelector("footer"),m=document.querySelector(".modal-window"),l=document.querySelector(".modal-overlay"),N=document.querySelector(".close-modal-btn"),A=document.querySelector(".js-footer-form"),de=document.querySelector(".modal-heading"),ue=document.querySelector(".modal-text"),me=(e,t)=>{de.textContent=e,ue.textContent=t,m.style.display="block",l.style.display="block",m.classList.add("show"),l.classList.add("show")};N.onclick=function(){O()};window.onclick=function(e){e.target==l&&(O(),A.reset())};window.addEventListener("keydown",e=>{e.key==="Escape"&&O()});N.addEventListener("click",()=>{A.reset()});const O=()=>{m.classList.remove("show"),l.classList.remove("show"),m.style.display="none",l.style.display="none"},Ee=()=>{le.getBoundingClientRect().top<window.innerHeight&&(m.style.display="none",l.style.display="none")};window.addEventListener("scroll",Ee);const E=document.querySelector(".js-footer-form"),i=document.querySelector(".js-footer-form-input"),pe=document.querySelector(".js-comment"),c=document.querySelector(".js-message");let a={email:"",comment:""};const v=(e,t,n)=>{i.classList.remove("error","success"),i.classList.add(t),c.textContent=e,c.classList.remove("error","success"),c.classList.add(n),c.classList.remove("is-hidden")},T=()=>{i.value.trim()===""?(i.classList.remove("error","success"),c.textContent="",c.classList.add("is-hidden")):i.checkValidity()?v("Success!","success","success"):v("Invalid email, try again!","error","error")};i.addEventListener("input",T);const fe=()=>{a=JSON.parse(localStorage.getItem("comment-form")||"{}"),Object.keys(a).forEach(t=>{E.elements[t]&&(E.elements[t].value=a[t])}),T()};fe();const ye=e=>{const{name:t,value:n}=e.target;a[t]=n.trim(),localStorage.setItem("comment-form",JSON.stringify(a))};E.addEventListener("input",ye);const we=async e=>{if(e.preventDefault(),i.value.trim()===""||pe.value.trim()===""){u.error({title:"Error:",message:"Please fill in the input fields"});return}const t="https://portfolio-js.b.goit.study/api/requests/";try{const n=await I.post(t,{email:a.email,comment:a.comment});console.log(n),E.reset(),localStorage.removeItem("comment-form"),me(n.data.title,n.data.message),i.classList.remove("error","success"),c.classList.add("is-hidden")}catch{u.error({title:"Error:",message:"Error sending request. Try again."})}};E.addEventListener("submit",we);
//# sourceMappingURL=index.js.map
