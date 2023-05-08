/* Qwik Service Worker */
const appBundles=[["q-013f58b2.js",[27,34],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-0be5d030.js",[27,34],["8gdLBszqbaM","i1Cv0pYJNR0"]],["q-14207e0c.js",[27],["A5bZC7WO00A"]],["q-20228560.js",[27]],["q-398045ff.js",[27,34],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-39b20fa8.js",[27,34]],["q-3ee27f2c.js",[27],["0ikoR08FIcI","jNWbU2XSIqM","QQA0vc52HgE"]],["q-42572e52.js",[27]],["q-45aab3b6.js",[]],["q-51a6d324.js",[27],["bKnMFxJ3dpg"]],["q-58d89c31.js",[27],["HlEnZF6VE3M"]],["q-60905cda.js",[27,34],["eBQ0vFsFKsk"]],["q-72c8286d.js",[27,34],["AKetNByE5TM"]],["q-7c86c506.js",[27,34],["HU55RV7VfPc","JtGc0nS5Nuo","LQPhZ0qOjrk","PxZ05oEiFy8"]],["q-8d718aa6.js",[27],["YfYJPR43zLs"]],["q-93f9634e.js",[26,27],["khdeGVljo7M","vFZYkxFSXVQ"]],["q-964bcb2d.js",[27]],["q-990838c1.js",[7,27],["VkLNXphUh5s"]],["q-9cf68eef.js",[27],["jp0FH1EKXxw"]],["q-a6b36dba.js",[5,27,34],["J4V2qsF7Yxo"]],["q-ac88de36.js",[26,27],["d1noxUvDHmc","QGK3wvOqeZs"]],["q-ae39092a.js",[20,26,27],["0bN8xT5ADqk","IEyV0mh0gSM","W5nrSYSD8c4","Y7lGpYcG2bo"]],["q-b2b2e34a.js",[27]],["q-b68d28a7.js",[27,34],["xb1CMjE0h0c"]],["q-bad2eb2a.js",[27],["6r9BnBnj0sQ","xYL1qOwPyDI"]],["q-c47919e3.js",[27]],["q-d2d26e24.js",[27]],["q-d3ba26ea.js",[]],["q-d4eda838.js",[27],["KVrVOHPQZSM","ov0X6RQfW7Q"]],["q-d56fd61c.js",[],["KnNE9eL0qfc"]],["q-e1b1d93c.js",[27,34],["K5p5hWgEolc","mBt9fIl89mc"]],["q-e42e539d.js",[27],["OnrBdoJU6g4"]],["q-e47d03c5.js",[27],["JuIgA4BlaSQ"]],["q-e51b4771.js",[14,27],["JFeUN00T3Sg"]],["q-fb49be0f.js",[27],["3sccYCDd1Z0"]],["q-fbd1b54d.js",[27,34],["zrbrqoaqXSY"]]];
const libraryBundleIds=[0];
const linkBundles=[[/^\/$/,[7,17,16,24]],[/^\/demo\/flower\/?$/,[7,17,22,13]],[/^\/demo\/todolist\/?$/,[7,17,5,19]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
