import{K as d,l as S,ak as l,o as n,a as e,ab as g,F as u,R as k,S as m,Y as t,b as _,X as r,u as c,a6 as C,W as w}from"./vue.445bf94b.js";import{o as s,__tla as F}from"./index.dc33c00f.js";let y,A=Promise.all([(()=>{try{return F}catch{}})()]).then(async()=>{let o,p;o=["onClick"],p=d({name:"navMenuSubItem"}),y=d({...p,props:{chil:{type:Array,default:()=>[]}},setup(f){const I=f,b=S(()=>I.chil),x=h=>{s.handleOpenLink(h)};return(h,B)=>{const i=l("SvgIcon"),M=l("sub-item",!0),v=l("el-sub-menu"),L=l("el-menu-item");return n(!0),e(u,null,g(b.value,a=>(n(),e(u,null,[a.children&&a.children.length>0?(n(),k(v,{index:a.path,key:a.path},{title:m(()=>[t(i,{name:a.meta.icon},null,8,["name"]),_("span",null,r(c(s).setMenuI18n(a)),1)]),default:m(()=>[t(M,{chil:a.children},null,8,["chil"])]),_:2},1032,["index"])):(n(),k(L,{index:a.path,key:a.path},{default:m(()=>[!a.meta.isLink||a.meta.isLink&&a.meta.isIframe?(n(),e(u,{key:0},[t(i,{name:a.meta.icon},null,8,["name"]),_("span",null,r(c(s).setMenuI18n(a)),1)],64)):(n(),e("a",{key:1,class:"w100",onClick:C(K=>x(a),["prevent"])},[t(i,{name:a.meta.icon},null,8,["name"]),w(" "+r(c(s).setMenuI18n(a)),1)],8,o))]),_:2},1032,["index"]))],64))),256)}}})});export{A as __tla,y as default};