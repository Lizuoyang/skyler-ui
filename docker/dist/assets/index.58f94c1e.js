import{b as q,l as S,g as $,d as g,_ as z,__tla as K}from"./index.dc33c00f.js";import{u as W,__tla as B}from"./table.77cead5e.js";import{K as F,h as s,aD as G,k as M,ak as p,o as n,a as U,Y as u,S as i,u as e,R as o,V as r,b as Y,W as f,aC as h}from"./vue.445bf94b.js";let D,J=Promise.all([(()=>{try{return K}catch{}})(),(()=>{try{return B}catch{}})()]).then(async()=>{const E={class:"layout-padding"},T={style:{"text-align":"center"}},I=F({__name:"index",setup(Q){const{t:H}=q(),P=h(()=>g(()=>import("./generator.c393d221.js").then(async a=>(await a.__tla,a)),["assets/generator.c393d221.js","assets/table.77cead5e.js","assets/index.dc33c00f.js","assets/vue.445bf94b.js","assets/index.57bc2f6e.css","assets/group.0eaea2d9.js","assets/generator.40f0c1f0.css"])),V=h(()=>g(()=>import("./edit.81e989d0.js").then(async a=>(await a.__tla,a)),["assets/edit.81e989d0.js","assets/index.dc33c00f.js","assets/vue.445bf94b.js","assets/index.57bc2f6e.css","assets/table.77cead5e.js","assets/fieldtype.84df1960.js","assets/sortable.esm.9c3c89c5.js","assets/edit.c2252db8.css"])),A=h(()=>g(()=>import("./preview.05d969d2.js").then(async a=>(await a.__tla,a)),["assets/preview.05d969d2.js","assets/index.dc33c00f.js","assets/vue.445bf94b.js","assets/index.57bc2f6e.css","assets/table.77cead5e.js","assets/commonFunction.b4d59130.js","assets/preview.89218d0d.css"])),w=s(),N=s(),x=G(),l=s(0),_=s(),c=s(),v=s(),d=s(),b=s(),m=async a=>{if(l.value!==a){if(l.value=a,a===0)await d.value.submitHandle();else if(a===1){const t=await N.value.submitHandle();_.value=t.id,b.value=t.generatorType}}},L=async()=>{await d.value.submitHandle(),w.value.openDialog(_.value)},O=async()=>{await d.value.submitHandle(),b.value==="0"&&S(`/gen/generator/download?tableIds=${[_.value].join(",")}`,{},`${c.value}.zip`),b.value==="1"&&W([_.value].join(",")).then(()=>{$().success(H("common.optSuccessText"))})};return M(()=>{c.value=x.query.tableName,v.value=x.query.dsName}),(a,t)=>{const C=p("el-step"),j=p("el-steps"),R=p("el-card"),y=p("el-button");return n(),U("div",E,[u(R,{class:"layout-padding-auto",shadow:"hover"},{default:i(()=>[u(j,{active:e(l),"finish-status":"success",simple:""},{default:i(()=>[u(C,{title:"\u57FA\u7840\u4FE1\u606F",onClick:t[0]||(t[0]=k=>m(0))}),u(C,{title:"\u6570\u636E\u4FEE\u6539",onClick:t[1]||(t[1]=k=>m(1))})]),_:1},8,["active"])]),_:1}),u(R,{class:"layout-padding-auto mt5",shadow:"hover"},{default:i(()=>[e(l)===0?(n(),o(e(P),{key:0,ref_key:"generatorRef",ref:N,tableName:e(c),dsName:e(v)},null,8,["tableName","dsName"])):r("",!0),e(l)===1?(n(),o(e(V),{key:1,ref_key:"editTableRef",ref:d,tableName:e(c),dsName:e(v)},null,8,["tableName","dsName"])):r("",!0),Y("div",T,[e(l)===0?(n(),o(y,{key:0,style:{"margin-top":"12px"},onClick:t[2]||(t[2]=k=>m(1))},{default:i(()=>[f("\u4E0B\u4E00\u6B65")]),_:1})):r("",!0),e(l)===1?(n(),o(y,{key:1,style:{"margin-top":"12px"},onClick:t[3]||(t[3]=k=>m(0))},{default:i(()=>[f("\u4E0A\u4E00\u6B65")]),_:1})):r("",!0),e(l)===1?(n(),o(y,{key:2,style:{"margin-top":"12px"},onClick:L},{default:i(()=>[f("\u4FDD\u5B58\u5E76\u9884\u89C8")]),_:1})):r("",!0),e(l)===1?(n(),o(y,{key:3,style:{"margin-top":"12px"},onClick:O},{default:i(()=>[f("\u4FDD\u5B58\u5E76\u751F\u6210")]),_:1})):r("",!0)])]),_:1}),u(e(A),{ref_key:"previewDialogRef",ref:w},null,512)])}}});D=z(I,[["__scopeId","data-v-e4f8ccf4"]])});export{J as __tla,D as default};