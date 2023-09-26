const t=(r,m=2)=>new Intl.NumberFormat("en-US",{minimumFractionDigits:m,maximumFractionDigits:m}).format(r);export{t as formatNumber};
