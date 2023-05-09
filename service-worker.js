/* Qwik Service Worker */
const appBundles=[["q-05e613bc.js",[23,24],["xb1CMjE0h0c"]],["q-096114ce.js",[23],["YfYJPR43zLs"]],["q-0a4bfc28.js",[23,24],["HU55RV7VfPc","JtGc0nS5Nuo","LQPhZ0qOjrk","PxZ05oEiFy8"]],["q-19cf62ed.js",[7,15,17,23,27,31],["OnrBdoJU6g4"]],["q-1a774a5f.js",[23]],["q-1f40dc47.js",[7,23],["khdeGVljo7M","vFZYkxFSXVQ"]],["q-21e683ad.js",[23],["JuIgA4BlaSQ"]],["q-26218696.js",[23]],["q-2681bfa8.js",[23],["9gV1yuUkB6k"]],["q-2fa8e6dc.js",[23,24],["eBQ0vFsFKsk"]],["q-34822fe3.js",[]],["q-45aab3b6.js",[]],["q-4926d0d1.js",[23],["A5bZC7WO00A"]],["q-4b07a916.js",[23,24],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-4e925615.js",[23,24],["zrbrqoaqXSY"]],["q-5166e0e9.js",[23]],["q-52fc0922.js",[7,15,17,23,27,31,43],["KVrVOHPQZSM","ov0X6RQfW7Q"]],["q-541c3c83.js",[23]],["q-5ac48536.js",[23],["6r9BnBnj0sQ","xYL1qOwPyDI"]],["q-691aa6d2.js",[23],["bKnMFxJ3dpg"]],["q-6b51f9b8.js",[1,23],["JFeUN00T3Sg"]],["q-6c208fd0.js",[23,24],["AKetNByE5TM"]],["q-6dbcd52e.js",[23,24],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-6e9cf0ab.js",[]],["q-84c8faab.js",[23],["3sccYCDd1Z0"]],["q-857acd68.js",[23,24],["K5p5hWgEolc","mBt9fIl89mc"]],["q-92aa52ba.js",[23],["0ikoR08FIcI","jNWbU2XSIqM","QQA0vc52HgE"]],["q-950f4e52.js",[17,23],["Ku7AU0gi0Go","VkLNXphUh5s"]],["q-9e2476f3.js",[]],["q-afba0a9b.js",[23]],["q-b127b0fd.js",[23,24]],["q-b7d79193.js",[7,23,27],["d1noxUvDHmc","QGK3wvOqeZs"]],["q-b830e894.js",[10,15,23,24],["qgtPW3dQ4Mc"]],["q-ba05f0a6.js",[10,23,24,28],["4Q12sQnguZ0","7un8Cxuoe7g","f0cB0S7QJQs"]],["q-c14308f3.js",[23],["HlEnZF6VE3M"]],["q-c23fb0b4.js",[23]],["q-c8a26ff9.js",[23],["zQpOYlJkb0s"]],["q-c9273644.js",[23]],["q-d3d415f2.js",[23,24,30],["J4V2qsF7Yxo"]],["q-d56fd61c.js",[],["KnNE9eL0qfc"]],["q-d625354a.js",[23,28],["k0rvS00ivS0","urYmogf0008"]],["q-e030cfd4.js",[23],["jp0FH1EKXxw"]],["q-f7dee260.js",[23,24],["8gdLBszqbaM","i1Cv0pYJNR0"]],["q-f9c48920.js",[23,31],["0bN8xT5ADqk","IEyV0mh0gSM","KKd0I8J6uw0","W5nrSYSD8c4","Y7lGpYcG2bo"]]];
const libraryBundleIds=[13];
const linkBundles=[[/^\/$/,[17,27,4,18]],[/^\/demo\/flower\/?$/,[17,27,37,2]],[/^\/demo\/todolist\/?$/,[17,27,30,38]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
