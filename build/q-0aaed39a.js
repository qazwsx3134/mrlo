import{z as p,m as d,A as h,M as w}from"./q-cba58d2c.js";import{s as b,v as y}from"./q-d40a928f.js";const v=async function(...n){var i;const[s]=p(),a=n.length>0&&n[0]instanceof AbortSignal?n.shift():void 0;{const c=d(),m=n.map(t=>t instanceof SubmitEvent&&t.target instanceof HTMLFormElement?new FormData(t.target):t instanceof Event||t instanceof Node?null:t),l=s.getHash(),f=`?qfunc=${s.getHash()}`,u=await h([s,...m]),e=await fetch(f,{method:"POST",headers:{"Content-Type":"application/qwik-json","X-QRL":l},signal:a,body:u}),r=e.headers.get("Content-Type");if(e.ok&&r==="text/event-stream"){const{writable:t,readable:o}=b();return(i=e.body)==null||i.pipeTo(t,{signal:a}),y(o,c??document.documentElement)}else if(r==="application/qwik-json"){const t=await e.text(),o=await w(t,c??document.documentElement);if(e.status===500)throw o;return o}}};export{v as s_wOIPfiQ04l4};
