import{g as O,_ as R,__tla as S}from"./index.dc33c00f.js";import{K as m,a1 as U,h,l as W,k as X,ak as t,o as g,a as _,b as k,Y as l,u as o,G as Y,S as d,M as z,W as D,X as H,V as J,ad as P,L as Z}from"./vue.445bf94b.js";let x,Q=Promise.all([(()=>{try{return S}catch{}})()]).then(async()=>{const v={class:"head-container"},w={class:"head-container-header"},b={class:"head-container-header-input"},L={key:0,class:"head-container-header-dropdown"},q=m({name:"query-tree"}),C=m({...q,props:{props:{type:Object,default:()=>({label:"name",children:"children",value:"id"})},placeholder:{type:String,default:""},loading:{type:Boolean,default:!1},query:{type:Function,required:!0},showExpand:{type:Boolean,default:!1}},emits:["search","nodeClick"],setup(u,{expose:V,emit:F}){const r=u,s=U({List:[],localLoading:r.loading}),y=h(),i=h(),c=h(!0),j=W(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]),B=e=>{F("nodeClick",e)},f=()=>{if(r.query instanceof Function){s.localLoading=!0;const e=r.query(o(i));(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"&&e.then(a=>{s.List=a.data}).catch(a=>{O().error(a.msg)})}},E=e=>{c.value=e;const a=y.value.store._getAllNodes();for(let n=0;n<a.length;n++)a[n].expanded=e};return X(()=>{f()}),V({getdeptTree:f}),(e,a)=>{const n=t("el-input"),M=t("MoreFilled"),N=t("el-icon"),T=t("el-button"),$=t("el-dropdown-item"),A=t("el-dropdown-menu"),G=t("el-dropdown"),I=t("el-tree");return g(),_("div",v,[k("div",w,[k("div",b,[l(n,{modelValue:o(i),"onUpdate:modelValue":a[0]||(a[0]=p=>Y(i)?i.value=p:null),"suffix-icon":"search",placeholder:u.placeholder,clearable:"",onChange:f},null,8,["modelValue","placeholder"])]),u.showExpand?(g(),_("div",L,[l(G,{"hide-on-click":!1},{dropdown:d(()=>[l(A,null,{default:d(()=>[l($,null,{default:d(()=>[l(T,{class:z(o(j)),link:"",type:"primary",icon:o(c)?"expand":"fold",onClick:a[1]||(a[1]=p=>E(!o(c)))},{default:d(()=>[D(H(o(c)?"\u6298\u53E0":"\u5C55\u5F00"),1)]),_:1},8,["class","icon"])]),_:1})]),_:1})]),default:d(()=>[l(N,{style:{transform:"rotate(90deg)"}},{default:d(()=>[l(M)]),_:1})]),_:1})])):J("",!0)]),l(I,{class:"mt20",data:o(s).List,props:r.props,"expand-on-click-node":!1,ref_key:"deptTreeRef",ref:y,loading:o(s).localLoading,"node-key":"id","highlight-current":"","default-expand-all":"",onNodeClick:B},P({_:2},[e.$slots.default?{name:"default",fn:d(({node:p,data:K})=>[Z(e.$slots,"default",{node:p,data:K},void 0,!0)]),key:"0"}:void 0]),1032,["data","props","loading"])])}}});x=R(C,[["__scopeId","data-v-6ebaafa2"]])});export{Q as __tla,x as default};
