import{b as P,g as f,r as j,__tla as G}from"./index.dc33c00f.js";import{d as K,__tla as O}from"./dept.f4183dbc.js";import{p as W,a as X,g as Y,v as z,b as A,__tla as E}from"./role.a493d518.js";import{K as y,h as m,a1 as v,ak as u,au as H,o as D,R as x,S as t,b as M,Y as s,W as V,X as $,u as r,T as J,G as L,n as Q}from"./vue.445bf94b.js";let C,Z=Promise.all([(()=>{try{return G}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let g,b;g={class:"dialog-footer"},b=y({name:"systemRoleDialog"}),C=y({...b,emits:["refresh"],setup(ee,{expose:I,emit:S}){const{t:k}=P(),n=m();m();const c=m(!1),i=m(!1),a=v({roleId:"",roleName:"",roleCode:"",roleDesc:"",dsScope:""}),p=v({deptData:[],checkedDsScope:[],deptProps:{children:"children",label:"name",value:"id"}}),w=m({roleName:[{required:!0,message:"\u89D2\u8272\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{min:3,max:20,message:"\u957F\u5EA6\u5728 3 \u5230 20 \u4E2A\u5B57\u7B26",trigger:"blur"},{validator:(e,l,d)=>{z(e,l,d,a.roleId!=="")},trigger:"blur"}],roleCode:[{required:!0,message:"\u89D2\u8272\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{min:3,max:20,message:"\u957F\u5EA6\u5728 3 \u5230 20 \u4E2A\u5B57\u7B26",trigger:"blur"},{validator:j.validatorCapital,trigger:"blur"},{validator:(e,l,d)=>{A(e,l,d,a.roleId!=="")},trigger:"blur"}],roleDesc:[{max:128,message:"\u957F\u5EA6\u5728 128 \u4E2A\u5B57\u7B26\u5185",trigger:"blur"}]}),N=e=>{c.value=!0,a.roleId="",Q(()=>{n.value.resetFields()}),e&&(a.roleId=e,B(e)),U()},T=async()=>{if(!await n.value.validate().catch(()=>{}))return!1;try{i.value=!0,a.roleId?await W(a):await X(a),f().success(k(a.roleId?"common.editSuccessText":"common.addSuccessText")),c.value=!1,S("refresh")}catch(e){f().error(e.msg)}finally{i.value=!1}},B=e=>{Y(e).then(l=>{Object.assign(a,l.data),l.data.dsScope?p.checkedDsScope=l.data.dsScope.split(","):p.checkedDsScope=[]})},U=()=>{K().then(e=>{p.deptData=e.data})};return I({openDialog:N}),(e,l)=>{const d=u("el-input"),_=u("el-form-item"),R=u("el-form"),h=u("el-button"),q=u("el-dialog"),F=H("loading");return D(),x(q,{"close-on-click-modal":!1,title:r(a).roleId?e.$t("common.editBtn"):e.$t("common.addBtn"),width:"600",draggable:"",modelValue:r(c),"onUpdate:modelValue":l[4]||(l[4]=o=>L(c)?c.value=o:null)},{footer:t(()=>[M("span",g,[s(h,{onClick:l[3]||(l[3]=o=>c.value=!1)},{default:t(()=>[V($(e.$t("common.cancelButtonText")),1)]),_:1}),s(h,{onClick:T,type:"primary",disabled:r(i)},{default:t(()=>[V($(e.$t("common.confirmButtonText")),1)]),_:1},8,["disabled"])])]),default:t(()=>[J((D(),x(R,{model:r(a),rules:r(w),"label-width":"90px",ref_key:"dataFormRef",ref:n},{default:t(()=>[s(_,{label:e.$t("sysrole.roleName"),prop:"roleName"},{default:t(()=>[s(d,{placeholder:e.$t("sysrole.please_enter_a_role_name"),clearable:"",modelValue:r(a).roleName,"onUpdate:modelValue":l[0]||(l[0]=o=>r(a).roleName=o)},null,8,["placeholder","modelValue"])]),_:1},8,["label"]),s(_,{label:e.$t("sysrole.roleCode"),prop:"roleCode"},{default:t(()=>[s(d,{placeholder:e.$t("sysrole.please_enter_the_role_Code"),disabled:r(a).roleId!=="",clearable:"",modelValue:r(a).roleCode,"onUpdate:modelValue":l[1]||(l[1]=o=>r(a).roleCode=o)},null,8,["placeholder","disabled","modelValue"])]),_:1},8,["label"]),s(_,{label:e.$t("sysrole.roleDesc"),prop:"roleDesc"},{default:t(()=>[s(d,{placeholder:e.$t("sysrole.please_enter_the_role_description"),maxlength:"150",rows:"3",type:"textarea",modelValue:r(a).roleDesc,"onUpdate:modelValue":l[2]||(l[2]=o=>r(a).roleDesc=o)},null,8,["placeholder","modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[F,r(i)]])]),_:1},8,["title","modelValue"])}}})});export{Z as __tla,C as default};