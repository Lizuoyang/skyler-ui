import{s as a,__tla as _}from"./index.dc33c00f.js";let m,n,s,u,i,h,p,g,c,f,w=Promise.all([(()=>{try{return _}catch{}})()]).then(async()=>{let r;g=e=>a({url:"/admin/role/list",method:"get",params:e}),s=e=>a({url:"/admin/role/page",method:"get",params:e}),p=e=>a({url:"/admin/role/details/"+e,method:"get"}),r=e=>a({url:"/admin/role/details",method:"get",params:e}),m=e=>a({url:"/admin/role",method:"post",data:e}),c=e=>a({url:"/admin/role",method:"put",data:e}),u=e=>a({url:"/admin/role",method:"delete",data:e}),i=(e,l)=>a({url:"/admin/role/menu",method:"put",data:{roleId:e,menuIds:l}}),h=e=>a({url:"/admin/menu/tree/"+e,method:"get"}),n=function(e,l,t,d){if(d)return t();r({roleCode:l}).then(o=>{o.data!==null?t(new Error("\u89D2\u8272\u6807\u8BC6\u5DF2\u7ECF\u5B58\u5728")):t()})},f=function(e,l,t,d){if(d)return t();r({roleName:l}).then(o=>{o.data!==null?t(new Error("\u89D2\u8272\u540D\u79F0\u5DF2\u7ECF\u5B58\u5728")):t()})}});export{w as __tla,m as a,n as b,s as c,u as d,i as e,h as f,p as g,g as l,c as p,f as v};
