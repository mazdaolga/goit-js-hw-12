import{a as v,S as L,i as c}from"./assets/vendor-ee72e1a4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const S="44502992-491f023f405adfa93e793762c",w="https://pixabay.com/api/";async function f(o,e=1,i=15){const a=new URLSearchParams({key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:i}),t=`${w}?${a}`;return(await v.get(t)).data}const b=new L(".gallery a",{captionsData:"alt",captionDelay:250});function p(o,e){const i=o.hits.map(({webformatURL:a,largeImageURL:t,tags:r,likes:l,views:u,comments:g,downloads:y})=>`<li>
                <a href="${t}"><img src='${a}' alt='${r}'></a>
                <div class="content">
                    <div class="item"><h3>Likes</h3><p>${l}</p></div>
                    <div class="item"><h3>Views</h3><p>${u}</p></div>
                    <div class="item"><h3>Comments</h3><p>${g}</p></div>
                    <div class="item"><h3>Downloads</h3><p>${y}</p></div>
                </div>
            </li>`).join("");e.insertAdjacentHTML("beforeend",i),b.refresh()}const s={form:document.querySelector("#form-request"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".btn-load-more")};let d="",m=1,h=0,n=0;s.form.addEventListener("submit",async o=>{if(o.preventDefault(),s.loader.classList.remove("hidden"),s.loadMoreBtn.classList.add("hidden"),s.gallery.innerHTML="",d=o.target.query.value.trim(),!d){s.loader.classList.add("hidden"),c.warning({title:"Attention!",message:"Search field must be filled",messageSize:"16",position:"topRight",close:!1,displayMode:1});return}m=1,n=0;try{const e=await f(d,m);if(h=e.totalHits,!e.totalHits)throw new Error("Sorry, there are no images matching your search query. Please try again!");p(e,s.gallery),n+=e.hits.length,n<h&&s.loadMoreBtn.classList.remove("hidden")}catch(e){c.error({title:"Error!",message:e.message,messageSize:"16",position:"topRight",close:!1,displayMode:1})}finally{s.loader.classList.add("hidden")}o.target.reset()});s.loadMoreBtn.addEventListener("click",async()=>{m+=1,s.loader.classList.remove("hidden");try{const e=await f(d,m);p(e,s.gallery),n+=e.hits.length,n>=h&&(s.loadMoreBtn.classList.add("hidden"),c.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",position:"topRight",close:!1,displayMode:1}))}catch(e){c.error({title:"Error!",message:e.message,messageSize:"16",position:"topRight",close:!1,displayMode:1})}finally{s.loader.classList.add("hidden")}const{height:o}=s.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map