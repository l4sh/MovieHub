import{S as T,i as W,s as X,e as _,w as G,k as j,t as J,c as p,a as $,x as O,d as f,m as H,h as K,b as g,G as le,g as x,H as m,y as Y,j as L,q as V,o as P,B as C,a8 as he,a9 as ge,aa as _e,v as pe,l as re,n as ce,p as fe,a0 as ue,ab as $e,P as ve,Q as de,R as me,a4 as we}from"../chunks/vendor-f9e5854b.js";import{m as ae}from"../chunks/Movie-568841be.js";import{R as be,M as Ee}from"../chunks/MoviePreview-f88e5efc.js";import{M as De}from"../chunks/MovieSection-64e08383.js";import"../chunks/variables-4b6f5b78.js";function Ie(n){let e,l,r,t,s,a,i,c,k=n[0].title+"",I,R,w,S=n[1](n[0].release_date)+"",U,F,E,q=n[0].overview+"",y,d,z,o,u,D,B,v;return s=new be({props:{value:n[0].vote_average}}),{c(){e=_("a"),l=_("div"),r=_("div"),t=_("div"),G(s.$$.fragment),a=j(),i=_("div"),c=_("div"),I=J(k),R=j(),w=_("div"),U=J(S),F=j(),E=_("p"),y=J(q),d=j(),z=_("div"),o=j(),u=_("img"),this.h()},l(h){e=p(h,"A",{href:!0,class:!0});var b=$(e);l=p(b,"DIV",{class:!0});var M=$(l);r=p(M,"DIV",{class:!0});var A=$(r);t=p(A,"DIV",{class:!0});var N=$(t);O(s.$$.fragment,N),N.forEach(f),a=H(A),i=p(A,"DIV",{class:!0});var Q=$(i);c=p(Q,"DIV",{class:!0});var Z=$(c);I=K(Z,k),Z.forEach(f),R=H(Q),w=p(Q,"DIV",{class:!0});var ee=$(w);U=K(ee,S),ee.forEach(f),F=H(Q),E=p(Q,"P",{class:!0});var te=$(E);y=K(te,q),te.forEach(f),Q.forEach(f),A.forEach(f),d=H(M),z=p(M,"DIV",{class:!0}),$(z).forEach(f),o=H(M),u=p(M,"IMG",{class:!0,src:!0,alt:!0}),M.forEach(f),b.forEach(f),this.h()},h(){g(t,"class","p-6"),g(c,"class","text-6xl font-secondary font-bold group-hover:text-6xl transition-all"),g(w,"class","text-sm"),g(E,"class","font-light max-w-xl line-clamp-3 leading-snug"),g(i,"class","p-6 flex flex-col space-y-1"),g(r,"class","absolute flex flex-col justify-between w-full h-full z-20 text-light"),g(z,"class","bg-gradient-to-tr from-dark to-transparent mix-blend-multiply absolute z-10 w-full h-full transition-all group-hover:opacity-50"),g(u,"class","object-cover object-center bg-light w-full h-80 sm:h-[32rem] group-hover:scale-105 transition-all duration-200"),le(u.src,D="https://image.tmdb.org/t/p/original"+n[0].backdrop_path)||g(u,"src",D),g(u,"alt","poster"),g(l,"class","relative group"),g(e,"href",B="/"+n[0].id),g(e,"class","bg-light dark:bg-gray-dark dark:text-gray-light")},m(h,b){x(h,e,b),m(e,l),m(l,r),m(r,t),Y(s,t,null),m(r,a),m(r,i),m(i,c),m(c,I),m(i,R),m(i,w),m(w,U),m(i,F),m(i,E),m(E,y),m(l,d),m(l,z),m(l,o),m(l,u),v=!0},p(h,[b]){const M={};b&1&&(M.value=h[0].vote_average),s.$set(M),(!v||b&1)&&k!==(k=h[0].title+"")&&L(I,k),(!v||b&1)&&S!==(S=h[1](h[0].release_date)+"")&&L(U,S),(!v||b&1)&&q!==(q=h[0].overview+"")&&L(y,q),(!v||b&1&&!le(u.src,D="https://image.tmdb.org/t/p/original"+h[0].backdrop_path))&&g(u,"src",D),(!v||b&1&&B!==(B="/"+h[0].id))&&g(e,"href",B)},i(h){v||(V(s.$$.fragment,h),v=!0)},o(h){P(s.$$.fragment,h),v=!1},d(h){h&&f(e),C(s)}}}function Ve(n,e,l){let{movie:r}=e;const t=s=>new Date(s).getFullYear();return n.$$set=s=>{"movie"in s&&l(0,r=s.movie)},[r,t]}class ke extends T{constructor(e){super();W(this,e,Ve,Ie,X,{movie:0})}}function se(n,e,l){const r=n.slice();return r[2]=e[l],r}function ye(n){let e,l,r,t,s;return l=new ke({props:{movie:n[2]}}),{c(){e=_("div"),G(l.$$.fragment),t=j()},l(a){e=p(a,"DIV",{});var i=$(e);O(l.$$.fragment,i),i.forEach(f),t=H(a)},m(a,i){x(a,e,i),Y(l,e,null),x(a,t,i),s=!0},p(a,i){const c={};i&1&&(c.movie=a[2]),l.$set(c)},i(a){s||(V(l.$$.fragment,a),r||ve(()=>{r=de(e,me,{duration:1e3}),r.start()}),s=!0)},o(a){P(l.$$.fragment,a),s=!1},d(a){a&&f(e),C(l),a&&f(t)}}}function oe(n){let e,l;return e=new $e({props:{$$slots:{default:[ye]},$$scope:{ctx:n}}}),{c(){G(e.$$.fragment)},l(r){O(e.$$.fragment,r)},m(r,t){Y(e,r,t),l=!0},p(r,t){const s={};t&33&&(s.$$scope={dirty:t,ctx:r}),e.$set(s)},i(r){l||(V(e.$$.fragment,r),l=!0)},o(r){P(e.$$.fragment,r),l=!1},d(r){C(e,r)}}}function Me(n){let e,l,r=n[0].results,t=[];for(let a=0;a<r.length;a+=1)t[a]=oe(se(n,r,a));const s=a=>P(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=re()},l(a){for(let i=0;i<t.length;i+=1)t[i].l(a);e=re()},m(a,i){for(let c=0;c<t.length;c+=1)t[c].m(a,i);x(a,e,i),l=!0},p(a,i){if(i&1){r=a[0].results;let c;for(c=0;c<r.length;c+=1){const k=se(a,r,c);t[c]?(t[c].p(k,i),V(t[c],1)):(t[c]=oe(k),t[c].c(),V(t[c],1),t[c].m(e.parentNode,e))}for(ce(),c=r.length;c<t.length;c+=1)s(c);fe()}},i(a){if(!l){for(let i=0;i<r.length;i+=1)V(t[i]);l=!0}},o(a){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)P(t[i]);l=!1},d(a){ue(t,a),a&&f(e)}}}function xe(n){let e,l,r;return l=new he({props:{modules:[ge,_e],effect:"fade",autoplay:{delay:5e3,disableOnInteraction:!1},speed:750,slidesPerView:1,$$slots:{default:[Me]},$$scope:{ctx:n}}}),{c(){e=_("div"),G(l.$$.fragment),this.h()},l(t){e=p(t,"DIV",{class:!0});var s=$(e);O(l.$$.fragment,s),s.forEach(f),this.h()},h(){g(e,"class","xl:container")},m(t,s){x(t,e,s),Y(l,e,null),r=!0},p(t,[s]){const a={};s&33&&(a.$$scope={dirty:s,ctx:t}),l.$set(a)},i(t){r||(V(l.$$.fragment,t),r=!0)},o(t){P(l.$$.fragment,t),r=!1},d(t){t&&f(e),C(l)}}}function Se(n,e,l){let{collection:r}=e,{movies:t={results:[]}}=e;return pe(()=>l(0,t=r)),n.$$set=s=>{"collection"in s&&l(1,r=s.collection),"movies"in s&&l(0,t=s.movies)},[t,r]}class je extends T{constructor(e){super();W(this,e,Se,xe,X,{collection:1,movies:0})}}function ie(n,e,l){const r=n.slice();return r[2]=e[l],r[4]=l,r}function ne(n){let e,l,r,t;return l=new Ee({props:{movie:n[2]}}),{c(){e=_("div"),G(l.$$.fragment)},l(s){e=p(s,"DIV",{});var a=$(e);O(l.$$.fragment,a),a.forEach(f)},m(s,a){x(s,e,a),Y(l,e,null),t=!0},p(s,a){const i={};a&2&&(i.movie=s[2]),l.$set(i)},i(s){t||(V(l.$$.fragment,s),r||ve(()=>{r=de(e,me,{duration:300,delay:n[4]*100}),r.start()}),t=!0)},o(s){P(l.$$.fragment,s),t=!1},d(s){s&&f(e),C(l)}}}function He(n){let e,l,r,t,s,a,i,c,k,I,R,w,S,U,F,E,q;r=new je({props:{collection:n[0]}}),I=new De({props:{collection:n[0]}});let y=n[1].results,d=[];for(let o=0;o<y.length;o+=1)d[o]=ne(ie(n,y,o));const z=o=>P(d[o],1,1,()=>{d[o]=null});return{c(){e=j(),l=_("div"),G(r.$$.fragment),t=j(),s=_("div"),a=_("div"),i=_("h2"),c=J("Upcoming"),k=j(),G(I.$$.fragment),R=j(),w=_("div"),S=_("h2"),U=J("Discover"),F=j(),E=_("div");for(let o=0;o<d.length;o+=1)d[o].c();this.h()},l(o){we('[data-svelte="svelte-5le5y3"]',document.head).forEach(f),e=H(o),l=p(o,"DIV",{class:!0});var D=$(l);O(r.$$.fragment,D),D.forEach(f),t=H(o),s=p(o,"DIV",{class:!0});var B=$(s);a=p(B,"DIV",{});var v=$(a);i=p(v,"H2",{});var h=$(i);c=K(h,"Upcoming"),h.forEach(f),k=H(v),O(I.$$.fragment,v),v.forEach(f),B.forEach(f),R=H(o),w=p(o,"DIV",{class:!0});var b=$(w);S=p(b,"H2",{});var M=$(S);U=K(M,"Discover"),M.forEach(f),F=H(b),E=p(b,"DIV",{class:!0});var A=$(E);for(let N=0;N<d.length;N+=1)d[N].l(A);A.forEach(f),b.forEach(f),this.h()},h(){document.title="MOVIE:HUB",g(l,"class","mb-6"),g(s,"class","container space-y-6"),g(E,"class","grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2"),g(w,"class","container mt-2")},m(o,u){x(o,e,u),x(o,l,u),Y(r,l,null),x(o,t,u),x(o,s,u),m(s,a),m(a,i),m(i,c),m(a,k),Y(I,a,null),x(o,R,u),x(o,w,u),m(w,S),m(S,U),m(w,F),m(w,E);for(let D=0;D<d.length;D+=1)d[D].m(E,null);q=!0},p(o,[u]){const D={};u&1&&(D.collection=o[0]),r.$set(D);const B={};if(u&1&&(B.collection=o[0]),I.$set(B),u&2){y=o[1].results;let v;for(v=0;v<y.length;v+=1){const h=ie(o,y,v);d[v]?(d[v].p(h,u),V(d[v],1)):(d[v]=ne(h),d[v].c(),V(d[v],1),d[v].m(E,null))}for(ce(),v=y.length;v<d.length;v+=1)z(v);fe()}},i(o){if(!q){V(r.$$.fragment,o),V(I.$$.fragment,o);for(let u=0;u<y.length;u+=1)V(d[u]);q=!0}},o(o){P(r.$$.fragment,o),P(I.$$.fragment,o),d=d.filter(Boolean);for(let u=0;u<d.length;u+=1)P(d[u]);q=!1},d(o){o&&f(e),o&&f(l),C(r),o&&f(t),o&&f(s),C(I),o&&f(R),o&&f(w),ue(d,o)}}}async function ze(){const[n,e]=await Promise.allSettled([ae.getUpcoming(),ae.getDiscover()]);return{props:{upcoming:n.value.ok&&await n.value.json(),discover:e.value.ok&&await e.value.json()}}}function Pe(n,e,l){let{upcoming:r,discover:t}=e;return n.$$set=s=>{"upcoming"in s&&l(0,r=s.upcoming),"discover"in s&&l(1,t=s.discover)},[r,t]}class Ae extends T{constructor(e){super();W(this,e,Pe,He,X,{upcoming:0,discover:1})}}export{Ae as default,ze as load};
