import{a as g,S as y,i as d}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const v="44502992-491f023f405adfa93e793762c",L="https://pixabay.com/api/";async function m(o,t=1,i=15){const a=new URLSearchParams({key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:i}),e=`${L}?${a}`;return(await g.get(e)).data}const S=new y(".gallery a",{captionsData:"alt",captionDelay:250});function h(o,t){const i=o.hits.map(({webformatURL:a,largeImageURL:e,tags:r,likes:l,views:p,comments:f,downloads:u})=>`<li>
                <a href="${e}"><img src='${a}' alt='${r}'></a>
                <div class="content">
                    <div class="item"><h3>Likes</h3><p>${l}</p></div>
                    <div class="item"><h3>Views</h3><p>${p}</p></div>
                    <div class="item"><h3>Comments</h3><p>${f}</p></div>
                    <div class="item"><h3>Downloads</h3><p>${u}</p></div>
                </div>
            </li>`).join("");t.innerHTML+=i,S.refresh()}const s={form:document.querySelector("#form-request"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".btn-load-more")};let n="",c=1;s.form.addEventListener("submit",async o=>{if(o.preventDefault(),s.loader.classList.remove("hidden"),s.loadMoreBtn.classList.add("hidden"),s.gallery.innerHTML="",n=o.target.query.value.trim(),!n){s.loader.classList.add("hidden"),d.warning({title:"Attention!",message:"Search field must be filled",messageSize:"16",position:"topRight",close:!1,displayMode:1});return}c=1;try{const t=await m(n,c);if(!t.totalHits)throw new Error("Sorry, there are no images matching your search query. Please try again!");h(t,s.gallery),s.loadMoreBtn.classList.remove("hidden")}catch(t){d.error({title:"Error!",message:t.message,messageSize:"16",position:"topRight",close:!1,displayMode:1})}finally{s.loader.classList.add("hidden")}o.target.reset()});s.loadMoreBtn.addEventListener("click",async()=>{c+=1,s.loader.classList.remove("hidden");try{const t=await m(n,c);t.hits.length?h(t,s.gallery):(s.loadMoreBtn.classList.add("hidden"),d.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",position:"topRight",close:!1,displayMode:1}))}catch(t){d.error({title:"Error!",message:t.message,messageSize:"16",position:"topRight",close:!1,displayMode:1})}finally{s.loader.classList.add("hidden")}const{height:o}=s.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map