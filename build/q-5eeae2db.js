import{I as lt,p as rt,z as q,_ as J,x as ct,A as y,w as dt,h as ht,q as K,N as I,M,E as ft,o as mt,j as pt}from"./q-54d95211.js";import{A as X}from"./q-c4b7e605.js";import{j as $t}from"./q-17e69e3d.js";const gt=()=>{const[r]=lt();r.value=!r.value},vt=rt(q(()=>J(()=>import("./q-b384e8c7.js"),["build/q-b384e8c7.js","build/q-54d95211.js","build/q-c4b7e605.js","build/q-17e69e3d.js"]),"s_0bN8xT5ADqk"));function yt(r,a){return ct("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...r,key:a},y("path",null,{fill:"currentColor",d:"M9 3a5 5 0 1 0 0 10A5 5 0 0 0 9 3ZM6 8a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm10.908.218A2 2 0 0 0 16 8V6a4 4 0 1 1-2.357 7.232l1.178-1.616a2 2 0 1 0 2.087-3.398ZM19.998 21A3.999 3.999 0 0 0 16 17.002V15a6.001 6.001 0 0 1 6 6h-2.002ZM16 21h-2a5 5 0 0 0-10 0H2a7 7 0 1 1 14 0Z"},null,3,"To_0"))}const wt=rt(q(()=>J(()=>import("./q-9553c63b.js"),["build/q-9553c63b.js","build/q-54d95211.js"]),"s_OnrBdoJU6g4"));var Mt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _t(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var it={exports:{}};(function(r,a){(function(_,p){r.exports=p()})(Mt,function(){var _=1e3,p=6e4,w=36e5,C="millisecond",H="second",L="minute",A="hour",D="day",N="week",v="month",B="quarter",b="year",U="date",G="Invalid Date",st=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ot=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ut={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var n=["th","st","nd","rd"],t=i%100;return"["+i+(n[(t-20)%10]||n[t]||n[0])+"]"}},z=function(i,n,t){var s=String(i);return!s||s.length>=n?i:""+Array(n+1-s.length).join(t)+i},at={s:z,z:function(i){var n=-i.utcOffset(),t=Math.abs(n),s=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+z(s,2,"0")+":"+z(e,2,"0")},m:function i(n,t){if(n.date()<t.date())return-i(t,n);var s=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(s,v),u=t-e<0,o=n.clone().add(s+(u?-1:1),v);return+(-(s+(t-e)/(u?e-o:o-e))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:v,y:b,w:N,d:D,D:U,h:A,m:L,s:H,ms:C,Q:B}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},Y="en",T={};T[Y]=ut;var R=function(i){return i instanceof Z},W=function i(n,t,s){var e;if(!n)return Y;if(typeof n=="string"){var u=n.toLowerCase();T[u]&&(e=u),t&&(T[u]=t,e=u);var o=n.split("-");if(!e&&o.length>1)return i(o[0])}else{var l=n.name;T[l]=n,e=l}return!s&&e&&(Y=e),e||!s&&Y},f=function(i,n){if(R(i))return i.clone();var t=typeof n=="object"?n:{};return t.date=i,t.args=arguments,new Z(t)},c=at;c.l=W,c.i=R,c.w=function(i,n){return f(i,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var Z=function(){function i(t){this.$L=W(t.locale,null,!0),this.parse(t)}var n=i.prototype;return n.parse=function(t){this.$d=function(s){var e=s.date,u=s.utc;if(e===null)return new Date(NaN);if(c.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var o=e.match(st);if(o){var l=o[2]-1||0,h=(o[7]||"0").substring(0,3);return u?new Date(Date.UTC(o[1],l,o[3]||1,o[4]||0,o[5]||0,o[6]||0,h)):new Date(o[1],l,o[3]||1,o[4]||0,o[5]||0,o[6]||0,h)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return c},n.isValid=function(){return this.$d.toString()!==G},n.isSame=function(t,s){var e=f(t);return this.startOf(s)<=e&&e<=this.endOf(s)},n.isAfter=function(t,s){return f(t)<this.startOf(s)},n.isBefore=function(t,s){return this.endOf(s)<f(t)},n.$g=function(t,s,e){return c.u(t)?this[s]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,s){var e=this,u=!!c.u(s)||s,o=c.p(t),l=function(j,g){var O=c.w(e.$u?Date.UTC(e.$y,g,j):new Date(e.$y,g,j),e);return u?O:O.endOf(D)},h=function(j,g){return c.w(e.toDate()[j].apply(e.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(g)),e)},d=this.$W,$=this.$M,S=this.$D,x="set"+(this.$u?"UTC":"");switch(o){case b:return u?l(1,0):l(31,11);case v:return u?l(1,$):l(0,$+1);case N:var E=this.$locale().weekStart||0,V=(d<E?d+7:d)-E;return l(u?S-V:S+(6-V),$);case D:case U:return h(x+"Hours",0);case A:return h(x+"Minutes",1);case L:return h(x+"Seconds",2);case H:return h(x+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,s){var e,u=c.p(t),o="set"+(this.$u?"UTC":""),l=(e={},e[D]=o+"Date",e[U]=o+"Date",e[v]=o+"Month",e[b]=o+"FullYear",e[A]=o+"Hours",e[L]=o+"Minutes",e[H]=o+"Seconds",e[C]=o+"Milliseconds",e)[u],h=u===D?this.$D+(s-this.$W):s;if(u===v||u===b){var d=this.clone().set(U,1);d.$d[l](h),d.init(),this.$d=d.set(U,Math.min(this.$D,d.daysInMonth())).$d}else l&&this.$d[l](h);return this.init(),this},n.set=function(t,s){return this.clone().$set(t,s)},n.get=function(t){return this[c.p(t)]()},n.add=function(t,s){var e,u=this;t=Number(t);var o=c.p(s),l=function($){var S=f(u);return c.w(S.date(S.date()+Math.round($*t)),u)};if(o===v)return this.set(v,this.$M+t);if(o===b)return this.set(b,this.$y+t);if(o===D)return l(1);if(o===N)return l(7);var h=(e={},e[L]=p,e[A]=w,e[H]=_,e)[o]||1,d=this.$d.getTime()+t*h;return c.w(d,this)},n.subtract=function(t,s){return this.add(-1*t,s)},n.format=function(t){var s=this,e=this.$locale();if(!this.isValid())return e.invalidDate||G;var u=t||"YYYY-MM-DDTHH:mm:ssZ",o=c.z(this),l=this.$H,h=this.$m,d=this.$M,$=e.weekdays,S=e.months,x=function(g,O,F,k){return g&&(g[O]||g(s,u))||F[O].slice(0,k)},E=function(g){return c.s(l%12||12,g,"0")},V=e.meridiem||function(g,O,F){var k=g<12?"AM":"PM";return F?k.toLowerCase():k},j={YY:String(this.$y).slice(-2),YYYY:this.$y,M:d+1,MM:c.s(d+1,2,"0"),MMM:x(e.monthsShort,d,S,3),MMMM:x(S,d),D:this.$D,DD:c.s(this.$D,2,"0"),d:String(this.$W),dd:x(e.weekdaysMin,this.$W,$,2),ddd:x(e.weekdaysShort,this.$W,$,3),dddd:$[this.$W],H:String(l),HH:c.s(l,2,"0"),h:E(1),hh:E(2),a:V(l,h,!0),A:V(l,h,!1),m:String(h),mm:c.s(h,2,"0"),s:String(this.$s),ss:c.s(this.$s,2,"0"),SSS:c.s(this.$ms,3,"0"),Z:o};return u.replace(ot,function(g,O){return O||j[g]||o.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,s,e){var u,o=c.p(s),l=f(t),h=(l.utcOffset()-this.utcOffset())*p,d=this-l,$=c.m(this,l);return $=(u={},u[b]=$/12,u[v]=$,u[B]=$/3,u[N]=(d-h)/6048e5,u[D]=(d-h)/864e5,u[A]=d/w,u[L]=d/p,u[H]=d/_,u)[o]||d,e?$:c.a($)},n.daysInMonth=function(){return this.endOf(v).$D},n.$locale=function(){return T[this.$L]},n.locale=function(t,s){if(!t)return this.$L;var e=this.clone(),u=W(t,s,!0);return u&&(e.$L=u),e},n.clone=function(){return c.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},i}(),Q=Z.prototype;return f.prototype=Q,[["$ms",C],["$s",H],["$m",L],["$H",A],["$W",D],["$M",v],["$y",b],["$D",U]].forEach(function(i){Q[i[1]]=function(n){return this.$g(n,i[0],i[1])}}),f.extend=function(i,n){return i.$i||(i(n,Z,f),i.$i=!0),f},f.locale=W,f.isDayjs=R,f.unix=function(i){return f(1e3*i)},f.en=T[Y],f.Ls=T,f.p={},f})})(it);var xt=it.exports;const Dt=_t(xt),tt=(r,a="m")=>Dt().subtract(r,a).format("HH:mm");let P;const bt=new Uint8Array(16);function St(){if(!P&&(P=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!P))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return P(bt)}const m=[];for(let r=0;r<256;++r)m.push((r+256).toString(16).slice(1));function Ot(r,a=0){return(m[r[a+0]]+m[r[a+1]]+m[r[a+2]]+m[r[a+3]]+"-"+m[r[a+4]]+m[r[a+5]]+"-"+m[r[a+6]]+m[r[a+7]]+"-"+m[r[a+8]]+m[r[a+9]]+"-"+m[r[a+10]]+m[r[a+11]]+m[r[a+12]]+m[r[a+13]]+m[r[a+14]]+m[r[a+15]]).toLowerCase()}const Tt=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),et={randomUUID:Tt};function nt(r,a,_){if(et.randomUUID&&!a&&!r)return et.randomUUID();r=r||{};const p=r.random||(r.rng||St)();if(p[6]=p[6]&15|64,p[8]=p[8]&63|128,a){_=_||0;for(let w=0;w<16;++w)a[_+w]=p[w];return a}return Ot(p)}const Ht=()=>{dt();const r=$t(),a=ht(!1),_=K({value:[]},{deep:!0}),p=K({value:[{name:"MrLo",color:"text-orange-500",messages:["Hello",{id:nt(),url:`${r.url.origin}/images/emojis/mrlo/lo-laugh.webp`}],time:tt(3,"minute")},{name:"MrLo",color:"text-orange-500",messages:["world",{id:nt(),url:`${r.url.origin}/images/emojis/test/test.gif`}],time:tt(2,"minute")}]},{deep:!0}),w=q(()=>J(()=>Promise.resolve().then(()=>Lt),void 0),"s_d1noxUvDHmc",[a]);return I(mt,{children:a.value?y("div",null,{class:"absolute right-2 top-3 w-8 h-8 flex items-center justify-center text-sm  cursor-pointer hover:bg-buttonHover rounded-md",onClick$:w},I(X,{class:"text-lg text-white",[M]:{class:M}},3,"3e_0"),1,"3e_1"):y("aside",null,{class:"relative flex flex-col min-h-screen min-w-[340px] w-full grow border-l border-gray-200 "},[y("div",null,{class:"absolute z-10 w-full flex items-center justify-between px-2 py-2 border-b bg-white border-gray-200"},[y("div",null,{class:"px-1 py-2  rounded-md text-xs font-semibold cursor-pointer  hover:bg-buttonHover",onClick$:w},I(X,{class:"text-lg rotate-180",[M]:{class:M}},3,"3e_2"),1,null),y("div",null,null,y("span",null,{class:"text-xs font-medium"},"實況聊天室",3,null),3,null),y("div",null,null,I(yt,{class:"text-xl",[M]:{class:M}},3,"3e_3"),1,null)],1,null),y("section",{style:{height:"calc(100vh - 185px)"}},{class:"absolute flex left-0 top-12 w-full bg-white overflow-y-auto overflow-x-hidden"},y("div",null,{class:"flex flex-col w-full h-full my-2"},I(wt,{get chatMessages(){return p.value},[M]:{chatMessages:ft(C=>C.value,[p])}},3,"3e_4"),1,null),1,null),y("div",null,{class:"absolute left-0 bottom-12 h-[90px] w-full z-10 px-2 pb-2"},I(vt,{inputText:_,chatList:p,[M]:{inputText:M,chatList:M}},3,"3e_5"),1,null)],1,null)},1,"3e_6")},Lt=Object.freeze(Object.defineProperty({__proto__:null,_hW:pt,s_QGK3wvOqeZs:Ht,s_d1noxUvDHmc:gt},Symbol.toStringTag,{value:"Module"}));export{Lt as e,nt as v};