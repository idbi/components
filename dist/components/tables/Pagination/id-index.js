import{useState as h,useEffect as C}from"react";import{IdiArrowLeft as u}from"../../../icons/id-IdiArrowLeft.js";import{IdiArrowRight as p}from"../../../icons/id-IdiArrowRight.js";import{Container as w,Button as m}from"./id-styles.js";import{jsxs as s,jsx as i}from"react/jsx-runtime";const B=({currentPage:n=1,lastPage:r=1,onChangePage:b=()=>{}})=>{const[o,e]=h(String(n)||"");C(()=>{n!==0&&(!n||(Number(n)||1)>r?(e(String(r)),b(Number(r))):(b(Number(n)),e(String(n))))},[n]);const d=t=>{if(!((Number(t)||1)>r)){if(r>0&&(Number(o)<1||!Number(t))){e("1"),b(1);return}if(!t)return e("");e(t),b(Number(t)||1)}},f=Number(o)<=1,l=Number(o)<=1,c=Number(o)===r,N=Number(o)===r;return s(w,{disabled:(()=>Number(o)===Number(r)||Number(o)===1)(),children:[s(m,{type:"button",disabled:o==="1",showBorderColor:f,showIconColor:l,onClick:()=>d(String(1)),style:{padding:"0px",backgroundColor:"#fff"},children:[i(u,{size:12}),i(u,{size:12,style:{marginLeft:"-5px"}})]}),i(m,{type:"button",disabled:o==="1",onClick:()=>d(String((Number(o)||1)-1)),showBorderColor:f,showIconColor:l,style:{padding:"0px",backgroundColor:"#fff"},children:i(u,{size:12})}),i("input",{type:"number",value:Number(o),max:r,onChange:t=>d(t.target.value||"")}),s("p",{style:{whiteSpace:"nowrap"},children:["de ",r]}),i(m,{type:"button",disabled:Number(o)===r,onClick:()=>d(String((Number(o)||1)+1)),showBorderColor:N,showIconColor:c,style:{padding:"0px",backgroundColor:"#fff"},children:i(p,{size:12})}),s(m,{type:"button",disabled:Number(o)===r,onClick:()=>d(String(r)),showBorderColor:N,showIconColor:c,style:{padding:"0px",backgroundColor:"#fff"},children:[i(p,{size:12}),i(p,{size:12,style:{marginLeft:"-5px"}})]})]})};export{B as Pagination};