import{s as se,o as ne,D as G,e as z,a as j,c as N,b as V,h as E,d as U,i as d,T,a7 as _e,j as C,k as P,K as be,M as B,N as nl,u as re,q as ie,r as oe,O as Le,a8 as Q,a9 as ue,P as ze,V as Ne,E as Oe,aa as O,X as W,t as Pe,f as Te,l as Be,ab as me,a6 as rl,p as Y,C as il,W as ol,H as ul,B as fl,J as ge,F as ve,G as ke,m as pe,g as Z}from"./scheduler.91e121cd.js";import{S as fe,i as ce,t as L,a as K,f as ye,c as Ke,b as Ve,m as qe,g as te,e as ae,d as Me}from"./index.f3ad6f48.js";import{p as cl}from"./stores.48f03c79.js";import{g as dl}from"./0.41352311.js";import{e as Se}from"./each.e59479a4.js";import{g as Re,a as hl}from"./spread.8a54911c.js";import{g as _l}from"./_commonjsHelpers.725317a4.js";import{t as bl,g as ml}from"./i18n.70493c35.js";var je={exports:{}};(function(e,l){(function(){var t={};e.exports=t,t.simpleFilter=function(i,a){return a.filter(function(n){return t.test(i,n)})},t.test=function(i,a){return t.match(i,a)!==null},t.match=function(i,a,n){n=n||{};var s=0,o=[],u=a.length,y=0,k=0,D=n.pre||"",g=n.post||"",h=n.caseSensitive&&a||a.toLowerCase(),p;i=n.caseSensitive&&i||i.toLowerCase();for(var _=0;_<u;_++)p=a[_],h[_]===i[s]?(p=D+p+g,s+=1,k+=1+k):k=0,y+=k,o[o.length]=p;return s===i.length?(y=h===i?1/0:y,{rendered:o.join(""),score:y}):null},t.filter=function(i,a,n){return!a||a.length===0?[]:typeof i!="string"?a:(n=n||{},a.reduce(function(s,o,u,y){var k=o;n.extract&&(k=n.extract(o));var D=t.match(i,k,n);return D!=null&&(s[s.length]={string:D.rendered,score:D.score,index:u,original:o}),s},[]).sort(function(s,o){var u=o.score-s.score;return u||s.index-o.index}))}})()})(je);var gl=je.exports;const vl=_l(gl);const kl=e=>({}),Ae=e=>({});function pl(e){let l;return{c(){l=Pe(e[2])},l(t){l=Te(t,e[2])},m(t,i){C(t,l,i)},p(t,i){i&4&&Be(l,t[2])},d(t){t&&E(l)}}}function yl(e){let l,t,i,a,n,s,o,u,y,k;const D=e[10].label,g=ne(D,e,e[9],Ae),h=g||pl(e);let p=[{name:"search"},{type:"search"},{placeholder:"Search..."},{autocomplete:"off"},{spellcheck:"false"},e[6],{id:e[4]}],_={};for(let b=0;b<p.length;b+=1)_=G(_,p[b]);return{c(){l=z("form"),t=z("label"),h&&h.c(),a=j(),n=z("input"),this.h()},l(b){l=N(b,"FORM",{"data-svelte-search":!0,role:!0,"aria-labelledby":!0});var v=V(l);t=N(v,"LABEL",{id:!0,for:!0,class:!0});var S=V(t);h&&h.l(S),S.forEach(E),a=U(v),n=N(v,"INPUT",{name:!0,type:!0,placeholder:!0,autocomplete:!0,spellcheck:!0,id:!0}),v.forEach(E),this.h()},h(){d(t,"id",i=e[4]+"-label"),d(t,"for",e[4]),d(t,"class","svelte-wqugyy"),T(t,"hide-label",e[3]),_e(n,_),T(n,"svelte-wqugyy",!0),d(l,"data-svelte-search",""),d(l,"role",s=e[5]?null:"search"),d(l,"aria-labelledby",o=e[5]?null:e[4])},m(b,v){C(b,l,v),P(l,t),h&&h.m(t,null),P(l,a),P(l,n),n.autofocus&&n.focus(),e[17](n),be(n,e[0]),u=!0,y||(k=[B(n,"input",e[18]),B(n,"input",e[12]),B(n,"change",e[13]),B(n,"focus",e[14]),B(n,"blur",e[15]),B(n,"keydown",e[16]),B(l,"submit",nl(e[11]))],y=!0)},p(b,[v]){g?g.p&&(!u||v&512)&&re(g,D,b,b[9],u?oe(D,b[9],v,kl):ie(b[9]),Ae):h&&h.p&&(!u||v&4)&&h.p(b,u?v:-1),(!u||v&16&&i!==(i=b[4]+"-label"))&&d(t,"id",i),(!u||v&16)&&d(t,"for",b[4]),(!u||v&8)&&T(t,"hide-label",b[3]),_e(n,_=Re(p,[{name:"search"},{type:"search"},{placeholder:"Search..."},{autocomplete:"off"},{spellcheck:"false"},v&64&&b[6],(!u||v&16)&&{id:b[4]}])),v&1&&n.value!==b[0]&&be(n,b[0]),T(n,"svelte-wqugyy",!0),(!u||v&32&&s!==(s=b[5]?null:"search"))&&d(l,"role",s),(!u||v&48&&o!==(o=b[5]?null:b[4]))&&d(l,"aria-labelledby",o)},i(b){u||(L(h,b),u=!0)},o(b){K(h,b),u=!1},d(b){b&&E(l),h&&h.d(b),e[17](null),y=!1,Le(k)}}}function Sl(e,l,t){const i=["value","autofocus","debounce","label","hideLabel","id","ref","removeFormAriaAttributes"];let a=Q(l,i),{$$slots:n={},$$scope:s}=l,{value:o=""}=l,{autofocus:u=!1}=l,{debounce:y=0}=l,{label:k="Label"}=l,{hideLabel:D=!1}=l,{id:g="search"+Math.random().toString(36)}=l,{ref:h=null}=l,{removeFormAriaAttributes:p=!1}=l;const _=ue();let b=o,v,S=!1;function f(m){S||(S=!0,v=setTimeout(()=>{m(),S=!1},y))}ze(()=>(u&&window.requestAnimationFrame(()=>h.focus()),()=>clearTimeout(v))),Ne(()=>{o.length>0&&o!==b&&(y>0?f(()=>_("type",o)):_("type",o)),o.length===0&&b.length>0&&_("clear"),b=o});function A(m){O.call(this,e,m)}function c(m){O.call(this,e,m)}function F(m){O.call(this,e,m)}function I(m){O.call(this,e,m)}function x(m){O.call(this,e,m)}function M(m){O.call(this,e,m)}function q(m){W[m?"unshift":"push"](()=>{h=m,t(1,h)})}function R(){o=this.value,t(0,o)}return e.$$set=m=>{l=G(G({},l),Oe(m)),t(6,a=Q(l,i)),"value"in m&&t(0,o=m.value),"autofocus"in m&&t(7,u=m.autofocus),"debounce"in m&&t(8,y=m.debounce),"label"in m&&t(2,k=m.label),"hideLabel"in m&&t(3,D=m.hideLabel),"id"in m&&t(4,g=m.id),"ref"in m&&t(1,h=m.ref),"removeFormAriaAttributes"in m&&t(5,p=m.removeFormAriaAttributes),"$$scope"in m&&t(9,s=m.$$scope)},[o,h,k,D,g,p,a,u,y,s,n,A,c,F,I,x,M,q,R]}let Al=class extends fe{constructor(l){super(),ce(this,l,Sl,yl,se,{value:0,autofocus:7,debounce:8,label:2,hideLabel:3,id:4,ref:1,removeFormAriaAttributes:5})}};const Fl=Al;const Dl=e=>({value:e[0]&1}),Fe=e=>({value:e[0]});function De(e,l,t){const i=e.slice();return i[47]=l[t],i[49]=t,i}const El=e=>({result:e[0]&2,value:e[0]&1}),Ee=e=>({result:e[47],index:e[49],value:e[0]});function we(e){let l,t,i=Se(e[1]),a=[];for(let s=0;s<i.length;s+=1)a[s]=Ce(De(e,i,s));const n=s=>K(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<a.length;s+=1)a[s].c();l=Y()},l(s){for(let o=0;o<a.length;o+=1)a[o].l(s);l=Y()},m(s,o){for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(s,o);C(s,l,o),t=!0},p(s,o){if(o[0]&67111943){i=Se(s[1]);let u;for(u=0;u<i.length;u+=1){const y=De(s,i,u);a[u]?(a[u].p(y,o),L(a[u],1)):(a[u]=Ce(y),a[u].c(),L(a[u],1),a[u].m(l.parentNode,l))}for(te(),u=i.length;u<a.length;u+=1)n(u);ae()}},i(s){if(!t){for(let o=0;o<i.length;o+=1)L(a[o]);t=!0}},o(s){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)K(a[o]);t=!1},d(s){s&&E(l),il(a,s)}}}function wl(e){let l,t=e[47].string+"",i;return{c(){l=new ul(!1),i=Y(),this.h()},l(a){l=fl(a,!1),i=Y(),this.h()},h(){l.a=i},m(a,n){l.m(t,a,n),C(a,i,n)},p(a,n){n[0]&2&&t!==(t=a[47].string+"")&&l.p(t)},d(a){a&&(E(i),l.d())}}}function Ce(e){let l,t,i,a,n,s,o;const u=e[27].default,y=ne(u,e,e[26],Ee),k=y||wl(e);function D(){return e[40](e[47],e[49])}function g(){return e[41](e[47],e[49])}return{c(){l=z("li"),k&&k.c(),t=j(),this.h()},l(h){l=N(h,"LI",{role:!0,id:!0,"aria-selected":!0,class:!0});var p=V(l);k&&k.l(p),t=U(p),p.forEach(E),this.h()},h(){d(l,"role","option"),d(l,"id",i=e[2]+"-result-"+e[49]),d(l,"aria-selected",a=e[10]===e[49]),d(l,"class","svelte-4tg1b1"),T(l,"selected",e[10]===e[49]),T(l,"disabled",e[47].disabled)},m(h,p){C(h,l,p),k&&k.m(l,null),P(l,t),n=!0,s||(o=[B(l,"click",D),B(l,"mouseenter",g)],s=!0)},p(h,p){e=h,y?y.p&&(!n||p[0]&67108867)&&re(y,u,e,e[26],n?oe(u,e[26],p,El):ie(e[26]),Ee):k&&k.p&&(!n||p[0]&2)&&k.p(e,n?p:[-1,-1]),(!n||p[0]&4&&i!==(i=e[2]+"-result-"+e[49]))&&d(l,"id",i),(!n||p[0]&1024&&a!==(a=e[10]===e[49]))&&d(l,"aria-selected",a),(!n||p[0]&1024)&&T(l,"selected",e[10]===e[49]),(!n||p[0]&2)&&T(l,"disabled",e[47].disabled)},i(h){n||(L(k,h),n=!0)},o(h){K(k,h),n=!1},d(h){h&&E(l),k&&k.d(h),s=!1,Le(o)}}}function Ie(e){let l,t;const i=e[27]["no-results"],a=ne(i,e,e[26],Fe);return{c(){l=z("div"),a&&a.c(),this.h()},l(n){l=N(n,"DIV",{class:!0});var s=V(l);a&&a.l(s),s.forEach(E),this.h()},h(){d(l,"class","svelte-4tg1b1"),T(l,"no-results",!0)},m(n,s){C(n,l,s),a&&a.m(l,null),t=!0},p(n,s){a&&a.p&&(!t||s[0]&67108865)&&re(a,i,n,n[26],t?oe(i,n[26],s,Dl):ie(n[26]),Fe)},i(n){t||(L(a,n),t=!0)},o(n){K(a,n),t=!1},d(n){n&&E(l),a&&a.d(n)}}}function Cl(e){let l,t,i,a,n,s,o,u,y,k,D,g,h,p;const _=[{id:e[2]},{removeFormAriaAttributes:!0},e[16],{"aria-autocomplete":"list"},{"aria-controls":e[2]+"-listbox"},{"aria-labelledby":e[2]+"-label"},{"aria-activedescendant":e[10]>=0&&!e[5]&&e[1].length>0?`${e[2]}-result-${e[10]}`:null}];function b(c){e[29](c)}function v(c){e[30](c)}let S={};for(let c=0;c<_.length;c+=1)S=G(S,_[c]);e[9]!==void 0&&(S.ref=e[9]),e[0]!==void 0&&(S.value=e[0]),t=new Fl({props:S}),W.push(()=>ye(t,"ref",b)),W.push(()=>ye(t,"value",v)),t.$on("type",e[31]),t.$on("input",e[32]),t.$on("change",e[33]),t.$on("focus",e[34]),t.$on("focus",e[35]),t.$on("clear",e[36]),t.$on("clear",e[13]),t.$on("blur",e[37]),t.$on("keydown",e[38]),t.$on("keydown",e[39]);let f=e[7]&&we(e),A=e[15]["no-results"]&&!e[5]&&e[0].length>0&&e[1].length===0&&Ie(e);return{c(){l=z("div"),Ke(t.$$.fragment),n=j(),s=z("ul"),f&&f.c(),o=j(),A&&A.c(),this.h()},l(c){l=N(c,"DIV",{"data-svelte-typeahead":!0,role:!0,"aria-haspopup":!0,"aria-controls":!0,"aria-expanded":!0,id:!0,class:!0});var F=V(l);Ve(t.$$.fragment,F),n=U(F),s=N(F,"UL",{role:!0,"aria-labelledby":!0,id:!0,class:!0});var I=V(s);f&&f.l(I),o=U(I),A&&A.l(I),I.forEach(E),F.forEach(E),this.h()},h(){d(s,"role","listbox"),d(s,"aria-labelledby",u=e[2]+"-label"),d(s,"id",y=e[2]+"-listbox"),d(s,"class","svelte-4tg1b1"),T(s,"svelte-typeahead-list",!0),d(l,"data-svelte-typeahead",""),d(l,"role","combobox"),d(l,"aria-haspopup","listbox"),d(l,"aria-controls",k=e[2]+"-listbox"),d(l,"aria-expanded",e[7]),d(l,"id",D=e[2]+"-typeahead"),d(l,"class","svelte-4tg1b1"),T(l,"dropdown",e[1].length>0)},m(c,F){C(c,l,F),qe(t,l,null),P(l,n),P(l,s),f&&f.m(s,null),P(s,o),A&&A.m(s,null),e[42](l),g=!0,h||(p=B(window,"click",e[28]),h=!0)},p(c,F){const I=F[0]&66598?Re(_,[F[0]&4&&{id:c[2]},_[1],F[0]&65536&&hl(c[16]),_[3],F[0]&4&&{"aria-controls":c[2]+"-listbox"},F[0]&4&&{"aria-labelledby":c[2]+"-label"},F[0]&1062&&{"aria-activedescendant":c[10]>=0&&!c[5]&&c[1].length>0?`${c[2]}-result-${c[10]}`:null}]):{};!i&&F[0]&512&&(i=!0,I.ref=c[9],me(()=>i=!1)),!a&&F[0]&1&&(a=!0,I.value=c[0],me(()=>a=!1)),t.$set(I),c[7]?f?(f.p(c,F),F[0]&128&&L(f,1)):(f=we(c),f.c(),L(f,1),f.m(s,o)):f&&(te(),K(f,1,1,()=>{f=null}),ae()),c[15]["no-results"]&&!c[5]&&c[0].length>0&&c[1].length===0?A?(A.p(c,F),F[0]&32803&&L(A,1)):(A=Ie(c),A.c(),L(A,1),A.m(s,null)):A&&(te(),K(A,1,1,()=>{A=null}),ae()),(!g||F[0]&4&&u!==(u=c[2]+"-label"))&&d(s,"aria-labelledby",u),(!g||F[0]&4&&y!==(y=c[2]+"-listbox"))&&d(s,"id",y),(!g||F[0]&4&&k!==(k=c[2]+"-listbox"))&&d(l,"aria-controls",k),(!g||F[0]&128)&&d(l,"aria-expanded",c[7]),(!g||F[0]&4&&D!==(D=c[2]+"-typeahead"))&&d(l,"id",D),(!g||F[0]&2)&&T(l,"dropdown",c[1].length>0)},i(c){g||(L(t.$$.fragment,c),L(f),L(A),g=!0)},o(c){K(t.$$.fragment,c),K(f),K(A),g=!1},d(c){c&&E(l),Me(t),f&&f.d(),A&&A.d(),e[42](null),h=!1,p()}}}function Il(e,l,t){let i,a,n;const s=["id","value","data","extract","disable","filter","autoselect","inputAfterSelect","results","focusAfterSelect","showDropdownOnFocus","showAllResultsOnFocus","limit"];let o=Q(l,s),{$$slots:u={},$$scope:y}=l;const k=rl(u);let{id:D="typeahead-"+Math.random().toString(36)}=l,{value:g=""}=l,{data:h=[]}=l,{extract:p=r=>r}=l,{disable:_=r=>!1}=l,{filter:b=r=>!1}=l,{autoselect:v=!0}=l,{inputAfterSelect:S="update"}=l,{results:f=[]}=l,{focusAfterSelect:A=!1}=l,{showDropdownOnFocus:c=!1}=l,{showAllResultsOnFocus:F=!1}=l,{limit:I=1/0}=l;const x=ue();let M=null,q=null,R=!1,m=-1,$="",J=!1;Ne(()=>{$!==a&&v&&t(10,m=Ue()),$!==a&&!k["no-results"]&&t(5,R=f.length===0),$=a});async function ee(){const r=f[m];if(r.disabled)return;const w=p(r.original),H=g;S=="clear"&&t(0,g=""),S=="update"&&t(0,g=w),x("select",{selectedIndex:m,searched:H,selected:w,original:r.original,originalIndex:r.index}),await ol(),A&&q.focus(),X()}function Ue(){var H,he;let r=0,w=((H=f[r])==null?void 0:H.disabled)??!1;for(;w;)r===f.length?r=0:r+=1,w=((he=f[r])==null?void 0:he.disabled)??!1;return r}function le(r){let w=r===1&&m===f.length-1?0:m+r;w<0&&(w=f.length-1);let H=f[w].disabled;for(;H;)w===f.length?w=0:w+=r,H=f[w].disabled;t(10,m=w)}const de=()=>t(5,R=!1),X=()=>{t(5,R=!0),t(6,J=!1)},He=({target:r})=>{!R&&!(M!=null&&M.contains(r))&&X()};function Ge(r){q=r,t(9,q)}function Je(r){g=r,t(0,g)}function We(r){O.call(this,e,r)}function Xe(r){O.call(this,e,r)}function Qe(r){O.call(this,e,r)}function Ye(r){O.call(this,e,r)}const Ze=()=>{de(),(c||F)&&(t(7,n=!0),t(6,J=!0))};function xe(r){O.call(this,e,r)}function $e(r){O.call(this,e,r)}function el(r){O.call(this,e,r)}const ll=r=>{if(f.length!==0)switch(r.key){case"Enter":ee();break;case"ArrowDown":r.preventDefault(),le(1);break;case"ArrowUp":r.preventDefault(),le(-1);break;case"Escape":r.preventDefault(),t(0,g=""),q==null||q.focus(),X();break}},tl=(r,w)=>{r.disabled||(t(10,m=w),ee())},al=(r,w)=>{r.disabled||t(10,m=w)};function sl(r){W[r?"unshift":"push"](()=>{M=r,t(8,M)})}return e.$$set=r=>{l=G(G({},l),Oe(r)),t(16,o=Q(l,s)),"id"in r&&t(2,D=r.id),"value"in r&&t(0,g=r.value),"data"in r&&t(17,h=r.data),"extract"in r&&t(18,p=r.extract),"disable"in r&&t(19,_=r.disable),"filter"in r&&t(20,b=r.filter),"autoselect"in r&&t(21,v=r.autoselect),"inputAfterSelect"in r&&t(22,S=r.inputAfterSelect),"results"in r&&t(1,f=r.results),"focusAfterSelect"in r&&t(23,A=r.focusAfterSelect),"showDropdownOnFocus"in r&&t(3,c=r.showDropdownOnFocus),"showAllResultsOnFocus"in r&&t(4,F=r.showAllResultsOnFocus),"limit"in r&&t(24,I=r.limit),"$$scope"in r&&t(26,y=r.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&262144&&t(25,i={pre:"<mark>",post:"</mark>",extract:p}),e.$$.dirty[0]&52035585&&t(1,f=vl.filter(g,h,i).filter(({score:r})=>r>0).slice(0,I).filter(r=>!b(r.original)).map(r=>({...r,disabled:_(r.original)}))),e.$$.dirty[0]&1966161&&J&&F&&g.length===0&&t(1,f=h.filter(r=>!b(r)).map((r,w)=>({disabled:_(r),index:w,original:r,score:0,string:p(r)}))),e.$$.dirty[0]&262146&&(a=f.map(r=>p(r.original)).join("")),e.$$.dirty[0]&34&&t(7,n=!R&&f.length>0),e.$$.dirty[0]&200&&c&&t(7,n=n&&J)},[g,f,D,c,F,R,J,n,M,q,m,ee,le,de,X,k,o,h,p,_,b,v,S,A,I,i,y,u,He,Ge,Je,We,Xe,Qe,Ye,Ze,xe,$e,el,ll,tl,al,sl]}class Ll extends fe{constructor(l){super(),ce(this,l,Il,Cl,se,{id:2,value:0,data:17,extract:18,disable:19,filter:20,autoselect:21,inputAfterSelect:22,results:1,focusAfterSelect:23,showDropdownOnFocus:3,showAllResultsOnFocus:4,limit:24},null,[-1,-1])}}function zl(e){let l,t=e[6][e[12].index].name+"",i;return{c(){l=z("div"),i=Pe(t),this.h()},l(a){l=N(a,"DIV",{class:!0});var n=V(l);i=Te(n,t),n.forEach(E),this.h()},h(){d(l,"class","py-1 text-sm font-normal")},m(a,n){C(a,l,n),P(l,i)},p(a,n){n&4096&&t!==(t=a[6][a[12].index].name+"")&&Be(i,t)},d(a){a&&E(l)}}}function Nl(e){let l,t="ctrl",i,a,n="K";return{c(){l=z("kbd"),l.textContent=t,i=j(),a=z("kbd"),a.textContent=n,this.h()},l(s){l=N(s,"KBD",{class:!0,"data-svelte-h":!0}),Z(l)!=="svelte-mabxvd"&&(l.textContent=t),i=U(s),a=N(s,"KBD",{class:!0,"data-svelte-h":!0}),Z(a)!=="svelte-8gtzw5"&&(a.textContent=n),this.h()},h(){d(l,"class","kbd kbd-sm"),d(a,"class","kbd kbd-sm")},m(s,o){C(s,l,o),C(s,i,o),C(s,a,o)},d(s){s&&(E(l),E(i),E(a))}}}function Ol(e){let l,t="⌘",i,a,n="K";return{c(){l=z("kbd"),l.textContent=t,i=j(),a=z("kbd"),a.textContent=n,this.h()},l(s){l=N(s,"KBD",{class:!0,"data-svelte-h":!0}),Z(l)!=="svelte-1pv9l7m"&&(l.textContent=t),i=U(s),a=N(s,"KBD",{class:!0,"data-svelte-h":!0}),Z(a)!=="svelte-8gtzw5"&&(a.textContent=n),this.h()},h(){d(l,"class","kbd kbd-sm"),d(a,"class","kbd kbd-sm")},m(s,o){C(s,l,o),C(s,i,o),C(s,a,o)},d(s){s&&(E(l),E(i),E(a))}}}function Pl(e){let l,t,i,a,n,s,o,u,y,k,D,g,h,p;s=new Ll({props:{placeholder:e[5]("Search")+"…",limit:8,label:"Search",data:e[6],extract:Bl,inputAfterSelect:"clear",$$slots:{default:[zl,({result:S})=>({12:S}),({result:S})=>S?4096:0]},$$scope:{ctx:e}}}),s.$on("select",e[8]),s.$on("focus",function(){ge(e[1])&&e[1].apply(this,arguments)}),s.$on("blur",function(){ge(e[0])&&e[0].apply(this,arguments)});function _(S,f){if(f&4&&(y=null),f&4&&(k=null),y==null&&(y=!!["macos"].includes(S[2])),y)return Ol;if(k==null&&(k=!!["windows","linux"].includes(S[2])),k)return Nl}let b=_(e,-1),v=b&&b(e);return{c(){l=z("label"),t=ve("svg"),i=ve("path"),n=j(),Ke(s.$$.fragment),o=j(),u=z("div"),v&&v.c(),this.h()},l(S){l=N(S,"LABEL",{class:!0});var f=V(l);t=ke(f,"svg",{class:!0,width:!0,height:!0,xmlns:!0,fill:!0,viewBox:!0});var A=V(t);i=ke(A,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),V(i).forEach(E),A.forEach(E),n=U(f),Ve(s.$$.fragment,f),o=U(f),u=N(f,"DIV",{class:!0});var c=V(u);v&&v.l(c),c.forEach(E),f.forEach(E),this.h()},h(){d(i,"stroke-linecap","round"),d(i,"stroke-linejoin","round"),d(i,"stroke-width","2"),d(i,"d","M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"),d(t,"class",a=`pointer-events-none absolute z-10 my-3.5 ms-4 stroke-current opacity-60 ${e[4].url.pathname=="/"?"text-current":"text-base-content"}`),d(t,"width","16"),d(t,"height","16"),d(t,"xmlns","http://www.w3.org/2000/svg"),d(t,"fill","none"),d(t,"viewBox","0 0 24 24"),d(u,"class",D=`pointer-events-none absolute end-10 top-2.5 gap-1 opacity-50 rtl:flex-row-reverse ${e[4].url.pathname=="/"?"hidden":"hidden lg:flex"}`),d(l,"class","searchbox relative mx-3 w-full")},m(S,f){C(S,l,f),P(l,t),P(t,i),P(l,n),qe(s,l,null),P(l,o),P(l,u),v&&v.m(u,null),e[10](l),g=!0,h||(p=B(window,"keydown",e[7]),h=!0)},p(S,[f]){e=S,(!g||f&16&&a!==(a=`pointer-events-none absolute z-10 my-3.5 ms-4 stroke-current opacity-60 ${e[4].url.pathname=="/"?"text-current":"text-base-content"}`))&&d(t,"class",a);const A={};f&32&&(A.placeholder=e[5]("Search")+"…"),f&12288&&(A.$$scope={dirty:f,ctx:e}),s.$set(A),b!==(b=_(e,f))&&(v&&v.d(1),v=b&&b(e),v&&(v.c(),v.m(u,null))),(!g||f&16&&D!==(D=`pointer-events-none absolute end-10 top-2.5 gap-1 opacity-50 rtl:flex-row-reverse ${e[4].url.pathname=="/"?"hidden":"hidden lg:flex"}`))&&d(u,"class",D)},i(S){g||(L(s.$$.fragment,S),g=!0)},o(S){K(s.$$.fragment,S),g=!1},d(S){S&&E(l),Me(s),v&&v.d(),e[10](null),h=!1,p()}}}function Tl(e){const l=[];function t(i){i.href&&l.push(i),i.items&&i.items.forEach(a=>{t(a)})}return e.forEach(i=>{t(i)}),l}const Bl=e=>e.tags?e.tags:e.name;function Kl(e,l,t){let i,a;pe(e,cl,_=>t(4,i=_)),pe(e,bl,_=>t(5,a=_));let{pages:n=[]}=l;const s=ue();let o=Tl(n),u;ze(()=>{t(2,u=ml())});let y;function k(_){(_.keyCode===75&&_.metaKey||_.keyCode===75&&_.ctrlKey)&&(_.preventDefault(),y.querySelector("input[type=search]").focus(),s("focus"))}function D({detail:_}){dl(o[_.originalIndex].href),s("search",_)}let{addScrollPaddingToNavbar:g=void 0}=l,{removeScrollPaddingFromNavbar:h=void 0}=l;function p(_){W[_?"unshift":"push"](()=>{y=_,t(3,y)})}return e.$$set=_=>{"pages"in _&&t(9,n=_.pages),"addScrollPaddingToNavbar"in _&&t(0,g=_.addScrollPaddingToNavbar),"removeScrollPaddingFromNavbar"in _&&t(1,h=_.removeScrollPaddingFromNavbar)},[g,h,u,y,i,a,o,k,D,n,p]}class Wl extends fe{constructor(l){super(),ce(this,l,Kl,Pl,se,{pages:9,addScrollPaddingToNavbar:0,removeScrollPaddingFromNavbar:1})}}export{Wl as default};
