import{S as m,O as _,__tla as f}from"./index.dc33c00f.js";import{K as g,a1 as h,h as a,l as u,k as R,a0 as y,o as v,a as x}from"./vue.445bf94b.js";let b,$=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{let c;c=g({name:"global-websocket"}),b=g({...c,props:{uri:{type:String}},emits:["rollback"],setup(T,{emit:p}){const k=T,e=h({webSocket:a(),lockReconnect:!1,maxReconnect:6,reconnectTime:0,heartbeat:{interval:30*1e3,timeout:10*1e3,pingTimeoutObj:a(),pongTimeoutObj:a(),pingMessage:JSON.stringify({type:"ping"})}}),i=u(()=>m.getToken()),w=u(()=>m.getTenant());R(()=>{s()}),y(()=>{e.webSocket.close(),r(e.heartbeat)});const s=()=>{let t=`ws://${window.location.host}/api${k.uri}?access_token=${i.value}&TENANT-ID=${w.value}`;e.webSocket=new WebSocket(t),e.webSocket.onopen=S,e.webSocket.onerror=O,e.webSocket.onmessage=j,e.webSocket.onclose=d},n=()=>{i&&(e.lockReconnect||e.maxReconnect!==-1&&e.reconnectTime>e.maxReconnect||(e.lockReconnect=!0,setTimeout(()=>{e.reconnectTime++,s(),e.lockReconnect=!1},5e3)))},r=t=>{t.pingTimeoutObj&&clearTimeout(t.pingTimeoutObj),t.pongTimeoutObj&&clearTimeout(t.pongTimeoutObj)},l=()=>{const t=e.webSocket,o=e.heartbeat;r(o),o.pingTimeoutObj=setTimeout(()=>{t.readyState===1?(t.send(o.pingMessage),o.pongTimeoutObj=setTimeout(()=>{t.close()},o.timeout)):n()},o.interval)},S=()=>{l(),e.reconnectTime=0},O=()=>{n()},d=()=>{n()},j=t=>{l();const o=t.data;o.indexOf("pong")>0||(_.warning({title:"\u6D88\u606F\u63D0\u9192",dangerouslyUseHTMLString:!0,message:o+"\u8BF7\u53CA\u65F6\u5904\u7406",offset:60}),p("rollback",o))};return(t,o)=>(v(),x("div"))}})});export{$ as __tla,b as default};
