import{w as t,N as o,A as n,D as e,o as a}from"./q-ba6f454f.js";import{v as u}from"./q-d7cf1d67.js";import"./q-1375a2dd.js";const m=r=>(t(),r.chatMessages.length<=0?null:o(a,{children:r.chatMessages.map(l=>{var i;return n("span",null,{class:"px-5 py-1 inline-flex justify-start items-center gap-1 max-w-full break-all"},[l.time&&n("span",null,{class:"mr-1 text-xs font-normal text-gray-700 inline-flex flex-grow-0 flex-shrink-0"},e(l,"time"),1,"4F_0"),l.icons&&l.icons.length>0&&n("span",null,{class:"inline-flex flex-grow-0 flex-shrink-0"},(i=l.icons)==null?void 0:i.map(s=>n("span",null,null,s,1,u())),1,"4F_1"),n("span",{class:`${(l==null?void 0:l.color)||"text-gray-800"} text-sm font-semibold mr-1 inline-flex flex-grow-0 flex-shrink-0`},null,[e(l,"name"),":"],1,null),n("span",null,{class:"text-sm text-gray-700 whitespace-normal inline-block"},l.messages.map(s=>{if(typeof s=="string")return n("span",null,{class:"inline-blockl"},s,1,s);if(typeof s=="object")return n("span",null,null,n("img",{src:e(s,"url")},{alt:"",class:"inline-block w-7 h-7 px-[1px] ",loading:"lazy"},null,3,null),1,s.id)}),1,null)],1,`${l.id}${l.time}${l.name}`)})},1,"4F_2"));export{m as s_OnrBdoJU6g4};
