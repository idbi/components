import{useRef as u}from"react";const s=(r,t=350)=>{const e=u(null);return(...n)=>{e.current&&clearTimeout(e.current),e.current=setTimeout(()=>{r(...n)},t)}};export{s as default};
