import{S as k,i as T,s as w,k as v,l as b,m as d,h,n as g,R as r,b as m,H as f,T as S,M as H}from"./index.6e427b96.js";function u(a,t,s){const n=a.slice();return n[5]=t[s],n[7]=s,n}function _(a){let t,s=a[5]+"",n,l;function i(){return a[4](a[5])}return{c(){t=v("button"),this.h()},l(e){t=b(e,"BUTTON",{class:!0});var c=d(t);c.forEach(h),this.h()},h(){g(t,"class","variant svelte-baohg"),r(t,"selected",a[5]==a[0])},m(e,c){m(e,t,c),t.innerHTML=s,n||(l=H(t,"click",i),n=!0)},p(e,c){a=e,c&2&&s!==(s=a[5]+"")&&(t.innerHTML=s),c&3&&r(t,"selected",a[5]==a[0])},d(e){e&&h(t),n=!1,l()}}}function M(a){let t,s=a[1],n=[];for(let l=0;l<s.length;l+=1)n[l]=_(u(a,s,l));return{c(){t=v("div");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){t=b(l,"DIV",{class:!0});var i=d(t);for(let e=0;e<n.length;e+=1)n[e].l(i);i.forEach(h),this.h()},h(){g(t,"class","switch svelte-baohg"),r(t,"non-block",a[2])},m(l,i){m(l,t,i);for(let e=0;e<n.length;e+=1)n[e].m(t,null)},p(l,[i]){if(i&11){s=l[1];let e;for(e=0;e<s.length;e+=1){const c=u(l,s,e);n[e]?n[e].p(c,i):(n[e]=_(c),n[e].c(),n[e].m(t,null))}for(;e<n.length;e+=1)n[e].d(1);n.length=s.length}i&4&&r(t,"non-block",l[2])},i:f,o:f,d(l){l&&h(t),S(n,l)}}}function E(a,t,s){let{variants:n}=t,{value:l}=t,{nb:i=!1}=t;function e(o){s(0,l=o)}const c=o=>e(o);return a.$$set=o=>{"variants"in o&&s(1,n=o.variants),"value"in o&&s(0,l=o.value),"nb"in o&&s(2,i=o.nb)},[l,n,i,e,c]}class q extends k{constructor(t){super(),T(this,t,E,M,w,{variants:1,value:0,nb:2})}}export{q as S};
