import{S as D}from"./sortable.esm.9c3c89c5.js";import{_ as V,__tla as C}from"./index.dc33c00f.js";import{ak as l,o as r,a as F,Y as d,S as t,W as b,X as _,R as i,b as p,M as N,V as g,L as O}from"./vue.445bf94b.js";let w,B=Promise.all([(()=>{try{return C}catch{}})()]).then(async()=>{const x={props:{modelValue:{type:Array,default:()=>[]},addTemplate:{type:Object,default:()=>{}},placeholder:{type:String,default:"\u6682\u65E0\u6570\u636E"},dragSort:{type:Boolean,default:!1},hideAdd:{type:Boolean,default:!1},hideDelete:{type:Boolean,default:!1}},data(){return{data:[]}},mounted(){this.data=this.modelValue,this.dragSort&&this.rowDrop()},watch:{modelValue(){this.data=this.modelValue},data:{handler(){this.$emit("update:modelValue",this.data)},deep:!0}},methods:{rowDrop(){const e=this,o=this.$refs.table.$el.querySelector(".el-table__body-wrapper tbody");D.create(o,{handle:".move",animation:300,ghostClass:"ghost",onEnd({newIndex:a,oldIndex:h}){e.data.splice(a,0,e.data.splice(h,1)[0]);const n=e.data.slice(0),s=e.$refs.scFormTable.offsetHeight;e.$refs.scFormTable.style.setProperty("height",s+"px"),e.data=[],e.$nextTick(()=>{e.data=n,e.$nextTick(()=>{e.$refs.scFormTable.style.removeProperty("height")})})}})},rowAdd(){const e=JSON.parse(JSON.stringify(this.addTemplate));this.data.push(e)},rowDel(e,o){this.data.splice(o,1),this.$emit("delete",e)},pushRow(e){const o=e||JSON.parse(JSON.stringify(this.addTemplate));this.data.push(o)},deleteRow(e){this.data.splice(e,1)}}},k={class:"form-table",ref:"scFormTable"},v={class:"move",style:{cursor:"move"}};function S(e,o,a,h,n,s){const u=l("el-button"),m=l("el-tooltip"),f=l("el-table-column"),$=l("WarningFilled"),y=l("el-icon"),T=l("Sort"),A=l("el-table");return r(),F("div",k,[d(A,{data:n.data,ref:"table",border:"",stripe:"","cell-style":{textAlign:"center"},"header-cell-style":{textAlign:"center",background:"var(--el-table-row-hover-bg-color)",color:"var(--el-text-color-primary)"}},{empty:t(()=>[b(_(a.placeholder),1)]),default:t(()=>[d(f,{type:"index",width:"50",fixed:"left"},{header:t(()=>[a.hideAdd?(r(),i(m,{key:1,content:"\u5E8F\u53F7",placement:"top"},{default:t(()=>[b(" # ")]),_:1})):(r(),i(u,{key:0,type:"primary",icon:"el-icon-plus",size:"small",circle:"",onClick:s.rowAdd},null,8,["onClick"]))]),default:t(c=>[p("div",{class:N(["form-table-handle",{"form-table-handle-delete":!a.hideDelete}])},[p("span",null,_(c.$index+1),1),a.hideDelete?g("",!0):(r(),i(u,{key:0,type:"danger",icon:"el-icon-delete",size:"small",plain:"",circle:"",onClick:J=>s.rowDel(c.row,c.$index)},null,8,["onClick"]))],2)]),_:1}),a.dragSort?(r(),i(f,{key:0,label:"",width:"50"},{header:t(()=>[d(y,null,{default:t(()=>[d(m,{content:"\u62D6\u52A8\u6392\u5E8F",placement:"top"},{default:t(()=>[d($)]),_:1})]),_:1})]),default:t(()=>[p("div",v,[d(y,null,{default:t(()=>[d(T)]),_:1})])]),_:1})):g("",!0),O(e.$slots,"default",{},void 0,!0)]),_:3},8,["data","header-cell-style"])],512)}w=V(x,[["render",S],["__scopeId","data-v-eb58e3fb"]])});export{B as __tla,w as default};
