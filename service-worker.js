/* Qwik Service Worker */
const appBundles=[["q-04d56f4b.js",[]],["q-09ec8b65.js",[0],["HlEnZF6VE3M"]],["q-0f0cfe46.js",[0,38],["JFeUN00T3Sg"]],["q-153b862f.js",[0]],["q-2ba4faf6.js",[0]],["q-2de9a608.js",[0],["JuIgA4BlaSQ"]],["q-2e5b97a8.js",[0],["A5bZC7WO00A"]],["q-307ff90b.js",[0,29],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-30fb4b8e.js",[0,29],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-37a8197e.js",[0],["bKnMFxJ3dpg"]],["q-3b32d5e4.js",[0,29],["AKetNByE5TM"]],["q-3eea2828.js",[0],["6r9BnBnj0sQ","xYL1qOwPyDI"]],["q-400e4a11.js",[0,29],["K5p5hWgEolc","mBt9fIl89mc"]],["q-44c46b4f.js",[0]],["q-45aab3b6.js",[]],["q-45b066f3.js",[0,16,20],["0bN8xT5ADqk","IEyV0mh0gSM","KKd0I8J6uw0","V2Nq2rSLNLY","W5nrSYSD8c4","Y7lGpYcG2bo"]],["q-47abe2fe.js",[0]],["q-4dae4319.js",[0,29,32],["J4V2qsF7Yxo"]],["q-6afbf865.js",[0],["jp0FH1EKXxw"]],["q-70b7f994.js",[0,16,20,30],["d1noxUvDHmc","QGK3wvOqeZs"]],["q-71ea9cd6.js",[0,16],["Ku7AU0gi0Go","VkLNXphUh5s"]],["q-777e810b.js",[0,29],["xb1CMjE0h0c"]],["q-9766e37e.js",[0,29],["zrbrqoaqXSY"]],["q-9e2476f3.js",[]],["q-b66d8daa.js",[0,29],["8gdLBszqbaM","i1Cv0pYJNR0"]],["q-be120fd4.js",[0],["0ikoR08FIcI","jNWbU2XSIqM","QQA0vc52HgE"]],["q-bfd73f76.js",[0],["KVrVOHPQZSM","ov0X6RQfW7Q"]],["q-c3fdcf9b.js",[0]],["q-c6d8f628.js",[0,23],["k0rvS00ivS0","urYmogf0008"]],["q-d1ebb83e.js",[0],["3sccYCDd1Z0"]],["q-d2d6c84b.js",[0]],["q-d56fd61c.js",[],["KnNE9eL0qfc"]],["q-de086aba.js",[0,29]],["q-e21ac41e.js",[0,16,20],["OnrBdoJU6g4"]],["q-e37ca6ac.js",[0,30],["khdeGVljo7M","vFZYkxFSXVQ"]],["q-e4791664.js",[0,29],["eBQ0vFsFKsk"]],["q-e957ad68.js",[0,29],["HU55RV7VfPc","JtGc0nS5Nuo","LQPhZ0qOjrk","PxZ05oEiFy8"]],["q-f57fee20.js",[0,23,29],["4Q12sQnguZ0","7un8Cxuoe7g","f0cB0S7QJQs"]],["q-fc550ea6.js",[0],["YfYJPR43zLs"]]];
const libraryBundleIds=[7];
const linkBundles=[[/^\/$/,[16,20,13,11]],[/^\/demo\/flower\/?$/,[16,20,27,36]],[/^\/demo\/todolist\/?$/,[16,20,32,17]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
