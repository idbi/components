import{useState as c,useEffect as m}from"react";import{useGoogleMapCtx as p}from"../context/id-index.js";import f from"../../../hooks/id-useDebounceFunc.js";import{BaseInput as i}from"../../forms/BaseInput/id-index.js";import{jsx as l}from"react/jsx-runtime";const C=({...o})=>{const{addressState:s,setAddressState:d,editedAddressRef:a}=p(),[n,r]=c(s.address),u=f(t=>{d(e=>({...e,address:t}))});return m(()=>{r(s.address)},[s.address]),l(i,{value:n,placeholder:"Direcci\xF3n",onChange:t=>{const e=t.target.value;r(e),u(e),a.current=!0},...o})};export{C as AddressInput};