import{p,z as u,_ as d,w as o,N as s,A as n,D as e,M as m,U as f,o as g}from"./q-6e9cf0ab.js";import{E as x}from"./q-5166e0e9.js";import{v as r}from"./q-b7d79193.js";import"./q-26218696.js";import"./q-950f4e52.js";import"./q-541c3c83.js";const c=p(u(()=>d(()=>import("./q-c8a26ff9.js"),["build/q-c8a26ff9.js","build/q-6e9cf0ab.js"]),"s_zQpOYlJkb0s")),w=a=>(o(),a.chatMessages.length<=0?null:s(g,{children:a.chatMessages.map(i=>{var t;return n("div",null,{class:"px-5 py-1 flex justify-start items-center gap-1"},n("div",null,{class:"inline leading-7 tracking-wide"},[i.time&&n("span",null,{class:"mr-1 text-sm font-normal text-gray-700 inline-flex flex-grow-0 flex-shrink-0 items-center align-middle"},e(i,"time"),1,"4F_0"),i.badges&&i.badges.length>0&&n("span",null,{class:"inline-flex mr-1 align-middle"},(t=i.badges)==null?void 0:t.map(l=>n("span",null,null,s(c,{variant:l},3,"4F_1"),1,r())),1,"4F_2"),n("span",{class:`${(i==null?void 0:i.color)||"text-gray-800"} text-sm font-semibold mr-1 inline-block align-middle`},null,[e(i,"name"),":"],1,null),n("span",null,{class:"text-sm text-gray-700 whitespace-normal inline break-all"},i.messages.map(l=>{if(o(),typeof l=="string")return n("span",null,{class:"align-middle"},l,1,r());if(typeof l=="object")return"emoji"in l?n("span",null,{class:""},s(x,{get emoji(){return l.emoji},class:"inline-block w-7 h-7 px-[1px]",[m]:{emoji:f(l,"emoji"),class:m}},3,"4F_3"),1,l.id):n("span",null,{class:""},n("img",{src:e(l,"url")},{alt:"",class:"inline-block w-7 h-7 px-[1px] ",loading:"lazy"},null,3,null),1,l.id)}),1,null)],1,null),1,r())})},1,"4F_4"));export{w as s_OnrBdoJU6g4};