import{I as c,n as u,L as l,E as r,N as m,i as d,z as p,_}from"./q-916697da.js";import{i as b}from"./q-50dcd9e2.js";const f=async(s,e)=>{const[a]=c(),t=new FormData(e),o=new URLSearchParams;t.forEach((n,i)=>{typeof n=="string"&&o.append(i,n)}),a("?"+o.toString(),!0).then(()=>{e.getAttribute("data-spa-reset")==="true"&&e.reset(),e.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))})},v=s=>{const e=u(s,["action","spaReset","reloadDocument","onSubmit$"]),a=b();return l("form",{...e,children:m(d,null,3,"BC_0"),onSubmit$:p(()=>_(()=>Promise.resolve().then(()=>S),void 0),"s_p9MSze0ojs4",[a])},{action:"get","preventdefault:submit":r(t=>!t.reloadDocument,[s],"!p0.reloadDocument"),"data-spa-reset":r(t=>t.spaReset?"true":void 0,[s],'p0.spaReset?"true":undefined')},0,"BC_1")},S=Object.freeze(Object.defineProperty({__proto__:null,s_Nk9PlpjQm9Y:v,s_p9MSze0ojs4:f},Symbol.toStringTag,{value:"Module"}));export{v as s_Nk9PlpjQm9Y,f as s_p9MSze0ojs4};
