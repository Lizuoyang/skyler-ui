import{u as p,_ as v,__tla as C}from"./index.dc33c00f.js";import{K as e,az as f,l as h,u as l,o as i,a as u,b as n,X as b}from"./vue.445bf94b.js";let r,k=Promise.all([(()=>{try{return C}catch{}})()]).then(async()=>{const c="/assets/logo-mini.a165ab07.svg",m=["src"],y=e({name:"layoutLogo"}),g=e({...y,setup(z){const _=p(),{themeConfig:a}=f(_),d=h(()=>{let{isCollapse:o,layout:t}=a.value;return!o||t==="classic"||document.body.clientWidth<1e3}),s=()=>{if(a.value.layout==="transverse")return!1;a.value.isCollapse=!a.value.isCollapse};return(o,t)=>l(d)?(i(),u("div",{key:0,class:"layout-logo",onClick:s},[n("span",null,b(l(a).globalTitle),1)])):(i(),u("div",{key:1,class:"layout-logo-size",onClick:s},[n("img",{src:l(c),class:"layout-logo-size-img"},null,8,m)]))}});r=v(g,[["__scopeId","data-v-7d795c95"]])});export{k as __tla,r as default};