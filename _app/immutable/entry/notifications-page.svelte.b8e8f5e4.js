import{S as G,i as H,s as K,e as I,b as C,g as q,H as N,h as o,o as O,k as d,q as L,a as T,l as _,m as u,r as E,c as V,n as m,G as i,M as U,K as j,N as z}from"../chunks/index.6e427b96.js";import{g as F}from"../chunks/navigation.6acd8dc8.js";import{L as J,P as A,s as Q,f as R}from"../chunks/index.a66b84c3.js";const W={title:"Уведомления","no-notifications":"Уведомлений нет"},X={title:"Notifications","no-notifications":"Notifications list is empty"},Y={ru:W,en:X};function B(n){let a,e,t,s,p,l,P=n[1].get("title")+"",h,y,c,$=n[1].get("no-notifications")+"",g,k,b,w;return{c(){a=d("div"),e=d("div"),t=d("button"),s=L("←"),p=T(),l=d("p"),h=L(P),y=T(),c=d("small"),g=L($),this.h()},l(r){a=_(r,"DIV",{class:!0});var f=u(a);e=_(f,"DIV",{class:!0});var v=u(e);t=_(v,"BUTTON",{class:!0});var M=u(t);s=E(M,"←"),M.forEach(o),p=V(v),l=_(v,"P",{class:!0});var S=u(l);h=E(S,P),S.forEach(o),v.forEach(o),y=V(f),c=_(f,"SMALL",{class:!0});var D=u(c);g=E(D,$),D.forEach(o),f.forEach(o),this.h()},h(){m(t,"class","back svelte-q88yf5"),m(l,"class","svelte-q88yf5"),m(e,"class","header svelte-q88yf5"),m(c,"class","svelte-q88yf5"),m(a,"class","page svelte-q88yf5")},m(r,f){C(r,a,f),i(a,e),i(e,t),i(t,s),i(e,p),i(e,l),i(l,h),i(a,y),i(a,c),i(c,g),b||(w=U(t,"click",n[2]),b=!0)},p:N,i(r){k||j(()=>{k=z(a,R,{duration:200}),k.start()})},o:N,d(r){r&&o(a),b=!1,w()}}}function Z(n){let a,e=n[0]&&B(n);return{c(){e&&e.c(),a=I()},l(t){e&&e.l(t),a=I()},m(t,s){e&&e.m(t,s),C(t,a,s)},p(t,[s]){t[0]?e?(e.p(t,s),s&1&&q(e,1)):(e=B(t),e.c(),q(e,1),e.m(a.parentNode,a)):e&&(e.d(1),e=null)},i(t){q(e)},o:N,d(t){e&&e.d(t),t&&o(a)}}}function x(n,a,e){const t=new J(Y);let s=!1;return O(async()=>{const l=(await A.get({key:"v_lang"})).value;l&&Q.set(l),(await A.get({key:"v_theme"})).value=="dark"&&document.body.classList.add("dark"),e(0,s=!0)}),[s,t,()=>F("/home")]}class se extends G{constructor(a){super(),H(this,a,x,Z,K,{})}}export{se as default};
