import{K as u,az as M,a1 as V,l as S,k as E,a0 as O,i as R,ak as W,o as n,R as $,S as T,T as j,a as s,O as p,b as d,F as m,ab as z,Y as A,X as F,V as D,Z as K,_ as Z}from"./vue.445bf94b.js";import{c as B,_ as N,__tla as P}from"./index.dc33c00f.js";let x,U=Promise.all([(()=>{try{return P}catch{}})()]).then(async()=>{const f={class:"el-dropdown-menu"},w=["onClick"],h=u({name:"layoutTagsViewContextmenu"}),C=u({...h,props:{dropdown:{type:Object,default:()=>({x:0,y:0})}},emits:["currentContextmenuClick"],setup(k,{expose:_,emit:y}){const a=k,v=B(),{favoriteRoutes:L}=M(v),e=V({isShow:!1,dropdownList:[{contextMenuClickId:0,txt:"tagsView.refresh",affix:!1,show:!0,icon:"ele-RefreshRight"},{contextMenuClickId:1,txt:"tagsView.close",affix:!1,show:!0,icon:"ele-Close"},{contextMenuClickId:2,txt:"tagsView.closeOther",affix:!1,show:!0,icon:"ele-CircleClose"},{contextMenuClickId:3,txt:"tagsView.closeAll",affix:!1,show:!0,icon:"ele-FolderDelete"},{contextMenuClickId:4,txt:"tagsView.fullscreen",affix:!1,show:!0,icon:"iconfont icon-fullscreen"},{contextMenuClickId:5,txt:"tagsView.favorite",affix:!1,show:!0,icon:"ele-Star"}],item:{},arrowLeft:10}),r=S(()=>a.dropdown.x+117>document.documentElement.clientWidth?{x:document.documentElement.clientWidth-117-5,y:a.dropdown.y}:a.dropdown),b=t=>{y("currentContextmenuClick",Object.assign({},{contextMenuClickId:t},e.item))},g=t=>{var l;e.item=t,(l=t.meta)!=null&&l.isAffix?e.dropdownList[1].affix=!0:e.dropdownList[1].affix=!1,L.value.find(c=>c.path===t.path)?e.dropdownList[5].show=!1:e.dropdownList[5].show=!0,i(),setTimeout(()=>{e.isShow=!0},10)},i=()=>{e.isShow=!1};return E(()=>{document.body.addEventListener("click",i)}),O(()=>{document.body.removeEventListener("click",i)}),R(()=>a.dropdown,({x:t})=>{t+117>document.documentElement.clientWidth?e.arrowLeft=117-(document.documentElement.clientWidth-t):e.arrowLeft=10},{deep:!0}),_({openContextmenu:g}),(t,l)=>{const c=W("SvgIcon");return n(),$(Z,{name:"el-zoom-in-center"},{default:T(()=>[j((n(),s("div",{"aria-hidden":"true",class:"el-dropdown__popper el-popper is-light is-pure custom-contextmenu",role:"tooltip","data-popper-placement":"bottom",style:p(`top: ${r.value.y+5}px;left: ${r.value.x}px;`),key:Math.random()},[d("ul",f,[(n(!0),s(m,null,z(e.dropdownList,(o,I)=>(n(),s(m,null,[!o.affix&&o.show?(n(),s("li",{class:"el-dropdown-menu__item","aria-disabled":"false",tabindex:"-1",key:I,onClick:X=>b(o.contextMenuClickId)},[A(c,{name:o.icon},null,8,["name"]),d("span",null,F(t.$t(o.txt)),1)],8,w)):D("",!0)],64))),256))]),d("div",{class:"el-popper__arrow",style:p({left:`${e.arrowLeft}px`})},null,4)],4)),[[K,e.isShow]])]),_:1})}}});x=N(C,[["__scopeId","data-v-b45db4c7"]])});export{U as __tla,x as default};