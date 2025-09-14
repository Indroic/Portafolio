import{r as x}from"./index.BVOCwoKb.js";var c={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i;function v(){if(i)return n;i=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(u,e,t){var r=null;if(t!==void 0&&(r=""+t),e.key!==void 0&&(r=""+e.key),"key"in e){t={};for(var a in e)a!=="key"&&(t[a]=e[a])}else t=e;return e=t.ref,{$$typeof:l,type:u,key:r,ref:e!==void 0?e:null,props:t}}return n.Fragment=o,n.jsx=s,n.jsxs=s,n}var d;function R(){return d||(d=1,c.exports=v()),c.exports}var p=R();const h=[{code:"en",label:"English"},{code:"es",label:"Español"}];function m({currentLang:l}){const[o,s]=x.useState(l),u=e=>{const t=e.target.value;if(t!==o){s(t);const r=window.location.pathname,a=r.match(/\/[a-z]{2}(\/|$)/)?r.replace(/\/[a-z]{2}(\/|$)/,`/${t}/`):`${r.replace(/\/$/,"")}/${t}`;window.location.href=a}};return p.jsx("select",{className:"border rounded px-2 py-1 text-black-pearl-50 border-transparent aspect-auto",value:o,onChange:u,children:h.map(e=>p.jsx("option",{className:"text-black-pearl-900",value:e.code,children:e.label},e.code))})}export{m as default};
