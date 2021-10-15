var Se=Object.defineProperty,Me=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var ce=(o,t,n)=>t in o?Se(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,V=(o,t)=>{for(var n in t||(t={}))Ne.call(t,n)&&ce(o,n,t[n]);if(ue)for(var n of ue(t))De.call(t,n)&&ce(o,n,t[n]);return o},j=(o,t)=>Me(o,Be(t));import{d as M,h as G,i as de,j as v,k as q,l as Re,m as Ee,r as A,g as e,o as s,n as B,w as N,p as w,b as I,t as T,q as ve,c,s as C,v as Pe,x as H,y as K,z as he,A as pe,a as b,F as D,B as P,f as x,C as z,D as Ae,E as He,T as fe,G as O,H as Ie,I as J,J as Q,K as _e,u as me,e as R,L as be,M as ge,N as ke,O as ze,P as $e,Q as Oe,R as X,S as Z,U as Fe,V as F,W as We,X as Ue}from"./app.1c5c93dd.js";const Ve=["href","rel","target","aria-label"],je=M({inheritAttrs:!1});function Ge(o){const t=o,n=G(),u=Pe(),{item:a}=de(t),$=v(()=>q(a.value.link)),_=v(()=>Re(a.value.link)||Ee(a.value.link)),m=v(()=>{if(!_.value){if(a.value.target)return a.value.target;if($.value)return"_blank"}}),r=v(()=>m.value==="_blank"),l=v(()=>!$.value&&!_.value&&!r.value),i=v(()=>{if(!_.value){if(a.value.rel)return a.value.rel;if(r.value)return"noopener noreferrer"}}),p=v(()=>a.value.ariaLabel||a.value.text),d=v(()=>{const k=Object.keys(u.value.locales);return k.length?!k.some(h=>h===a.value.link):a.value.link!=="/"}),g=v(()=>d.value?n.path.startsWith(a.value.link):!1),f=v(()=>l.value?a.value.activeMatch?new RegExp(a.value.activeMatch).test(n.path):g.value:!1);return(k,h)=>{const L=A("RouterLink"),y=A("OutboundLink");return e(l)?(s(),B(L,ve({key:0,class:["nav-link",{"router-link-active":e(f)}],to:e(a).link,"aria-label":e(p)},k.$attrs),{default:N(()=>[w(k.$slots,"before"),I(" "+T(e(a).text)+" ",1),w(k.$slots,"after")]),_:3},16,["class","to","aria-label"])):(s(),c("a",ve({key:1,class:"nav-link external",href:e(a).link,rel:e(i),target:e(m),"aria-label":e(p)},k.$attrs),[w(k.$slots,"before"),I(" "+T(e(a).text)+" ",1),e(r)?(s(),B(y,{key:0})):C("v-if",!0),w(k.$slots,"after")],16,Ve))}}const E=M(j(V({},je),{props:{item:{type:Object,required:!0}},setup:Ge})),qe=["aria-labelledby"],Ke={class:"hero"},Xe=["src","alt"],Ye={key:1,id:"main-title"},Je={key:2,class:"description"},Qe={key:3,class:"actions"},Ze={key:0,class:"features"},et={class:"theme-default-content custom"},tt=["innerHTML"],nt=["textContent"],at=M({setup(o){const t=H(),n=K(),u=v(()=>t.value.heroImage?he(t.value.heroImage):null),a=v(()=>t.value.heroText===null?null:t.value.heroText||n.value.title||"Hello"),$=v(()=>t.value.heroAlt||a.value||"hero"),_=v(()=>t.value.tagline===null?null:t.value.tagline||n.value.description||"Welcome to your VuePress site"),m=v(()=>pe(t.value.actions)?t.value.actions.map(({text:p,link:d,type:g="primary"})=>({text:p,link:d,type:g})):[]),r=v(()=>pe(t.value.features)?t.value.features:[]),l=v(()=>t.value.footer),i=v(()=>t.value.footerHtml);return(p,d)=>{const g=A("Content");return s(),c("main",{class:"home","aria-labelledby":e(a)?"main-title":void 0},[b("header",Ke,[e(u)?(s(),c("img",{key:0,src:e(u),alt:e($)},null,8,Xe)):C("v-if",!0),e(a)?(s(),c("h1",Ye,T(e(a)),1)):C("v-if",!0),e(_)?(s(),c("p",Je,T(e(_)),1)):C("v-if",!0),e(m).length?(s(),c("p",Qe,[(s(!0),c(D,null,P(e(m),f=>(s(),B(E,{key:f.text,class:z(["action-button",[f.type]]),item:f},null,8,["class","item"]))),128))])):C("v-if",!0)]),e(r).length?(s(),c("div",Ze,[(s(!0),c(D,null,P(e(r),f=>(s(),c("div",{key:f.title,class:"feature"},[b("h2",null,T(f.title),1),b("p",null,T(f.details),1)]))),128))])):C("v-if",!0),b("div",et,[x(g)]),e(l)?(s(),c(D,{key:1},[C(" eslint-disable-next-line vue/no-v-html "),e(i)?(s(),c("div",{key:0,class:"footer",innerHTML:e(l)},null,8,tt)):(s(),c("div",{key:1,class:"footer",textContent:T(e(l))},null,8,nt))],2112)):C("v-if",!0)],8,qe)}}}),Le=o=>!q(o)||/github\.com/.test(o)?"GitHub":/bitbucket\.org/.test(o)?"Bitbucket":/gitlab\.com/.test(o)?"GitLab":/gitee\.com/.test(o)?"Gitee":null,st={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},ot=({docsRepo:o,docsBranch:t,docsDir:n,filePathRelative:u,editLinkPattern:a})=>{const $=Le(o);let _;return a?_=a:$!==null&&(_=st[$]),_?_.replace(/:repo/,q(o)?o:`https://github.com/${o}`).replace(/:branch/,t).replace(/:path/,Ae(`${He(n)}/${u}`)):null},rt=M({setup(o){const t=u=>{u.style.height=u.scrollHeight+"px"},n=u=>{u.style.height=""};return(u,a)=>(s(),B(fe,{name:"dropdown",onEnter:t,onAfterEnter:n,onBeforeLeave:t},{default:N(()=>[w(u.$slots,"default")]),_:3}))}}),lt=["aria-label"],it={class:"title"},ut=b("span",{class:"arrow down"},null,-1),ct=["aria-label"],dt={class:"title"},vt={class:"nav-dropdown"},ht={class:"dropdown-subtitle"},pt={key:1},ft={class:"dropdown-subitem-wrapper"},_t=M({props:{item:{type:Object,required:!0}},setup(o){const t=o,{item:n}=de(t),u=v(()=>n.value.ariaLabel||n.value.text),a=O(!1),$=G();Ie(()=>$.path,()=>{a.value=!1});const _=r=>{r.detail===0?a.value=!a.value:a.value=!1},m=(r,l)=>l[l.length-1]===r;return(r,l)=>(s(),c("div",{class:z(["dropdown-wrapper",{open:a.value}])},[b("button",{class:"dropdown-title",type:"button","aria-label":e(u),onClick:_},[b("span",it,T(e(n).text),1),ut],8,lt),b("button",{class:"mobile-dropdown-title",type:"button","aria-label":e(u),onClick:l[0]||(l[0]=i=>a.value=!a.value)},[b("span",dt,T(e(n).text),1),b("span",{class:z(["arrow",a.value?"down":"right"])},null,2)],8,ct),x(rt,null,{default:N(()=>[J(b("ul",vt,[(s(!0),c(D,null,P(e(n).children,(i,p)=>(s(),c("li",{key:i.link||p,class:"dropdown-item"},[i.children?(s(),c(D,{key:0},[b("h4",ht,[i.link?(s(),B(E,{key:0,item:i,onFocusout:d=>m(i,e(n).children)&&i.children.length===0&&(a.value=!1)},null,8,["item","onFocusout"])):(s(),c("span",pt,T(i.text),1))]),b("ul",ft,[(s(!0),c(D,null,P(i.children,d=>(s(),c("li",{key:d.link,class:"dropdown-subitem"},[x(E,{item:d,onFocusout:g=>m(d,i.children)&&m(i,e(n).children)&&(a.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(s(),B(E,{key:1,item:i,onFocusout:d=>m(i,e(n).children)&&(a.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[Q,a.value]])]),_:1})],2))}}),mt={key:0,class:"navbar-links"},ye=M({setup(o){const t=()=>{const l=_e(),i=me(),p=K(),d=R();return v(()=>{var L,y;const g=Object.keys(p.value.locales);if(g.length<2)return[];const f=l.currentRoute.value.path,k=l.currentRoute.value.fullPath;return[{text:(L=d.value.selectLanguageText)!=null?L:"unkown language",ariaLabel:(y=d.value.selectLanguageAriaLabel)!=null?y:"unkown language",children:g.map(S=>{var ne,ae,se,oe,re,le;const W=(ae=(ne=p.value.locales)==null?void 0:ne[S])!=null?ae:{},ee=(oe=(se=d.value.locales)==null?void 0:se[S])!=null?oe:{},te=`${W.lang}`,xe=(re=ee.selectLanguageName)!=null?re:te;let U;if(te===p.value.lang)U=k;else{const ie=f.replace(i.value,S);l.getRoutes().some(Te=>Te.path===ie)?U=ie:U=(le=ee.home)!=null?le:S}return{text:xe,link:U}})}]})},n=()=>{const l=R(),i=v(()=>l.value.repo),p=v(()=>i.value?Le(i.value):null),d=v(()=>i.value&&!q(i.value)?`https://github.com/${i.value}`:i.value),g=v(()=>d.value?l.value.repoLabel?l.value.repoLabel:p.value===null?"Source":p.value:null);return v(()=>!d.value||!g.value?[]:[{text:g.value,link:d.value}])},u=l=>be(l)?ge(l):l.children?j(V({},l),{children:l.children.map(u)}):l,$=(()=>{const l=R();return v(()=>(l.value.navbar||[]).map(u))})(),_=t(),m=n(),r=v(()=>[...$.value,..._.value,...m.value]);return(l,i)=>e(r).length?(s(),c("nav",mt,[(s(!0),c(D,null,P(e(r),p=>(s(),c("div",{key:p.text,class:"navbar-links-item"},[p.children?(s(),B(_t,{key:0,item:p},null,8,["item"])):(s(),B(E,{key:1,item:p},null,8,["item"]))]))),128))])):C("v-if",!0)}}),bt=["title"],gt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},kt=ze('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),$t=[kt],Lt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},yt=b("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),wt=[yt],Ct=M({setup(o){const t=R(),n=ke(),u=()=>{n.value=!n.value};return(a,$)=>(s(),c("button",{class:"toggle-dark-button",title:e(t).toggleDarkMode,onClick:u},[J((s(),c("svg",gt,$t,512)),[[Q,!e(n)]]),J((s(),c("svg",Lt,wt,512)),[[Q,e(n)]])],8,bt))}}),xt=["title"],Tt=b("div",{class:"icon","aria-hidden":"true"},[b("span"),b("span"),b("span")],-1),St=[Tt],Mt=M({emits:["toggle"],setup(o){const t=R();return(n,u)=>(s(),c("div",{class:"toggle-sidebar-button",title:e(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:u[0]||(u[0]=a=>n.$emit("toggle"))},St,8,xt))}}),Bt=["src","alt"],Nt=M({emits:["toggle-sidebar"],setup(o){const t=me(),n=K(),u=R(),a=ke(),$=O(null),_=O(null),m=v(()=>u.value.home||t.value),r=v(()=>a.value&&u.value.logoDark!==void 0?u.value.logoDark:u.value.logo),l=v(()=>n.value.title),i=O(0),p=v(()=>i.value?{maxWidth:i.value+"px"}:{}),d=v(()=>u.value.darkMode);$e(()=>{const f=719,k=g($.value,"paddingLeft")+g($.value,"paddingRight"),h=()=>{var L;window.innerWidth<=f?i.value=0:i.value=$.value.offsetWidth-k-(((L=_.value)==null?void 0:L.offsetWidth)||0)};h(),window.addEventListener("resize",h,!1),window.addEventListener("orientationchange",h,!1)});function g(f,k){var y,S,W;const h=(W=(S=(y=f==null?void 0:f.ownerDocument)==null?void 0:y.defaultView)==null?void 0:S.getComputedStyle(f,null))==null?void 0:W[k],L=Number.parseInt(h,10);return Number.isNaN(L)?0:L}return(f,k)=>{const h=A("RouterLink"),L=A("NavbarSearch");return s(),c("header",{ref:(y,S)=>{S.navbar=y,$.value=y},class:"navbar"},[x(Mt,{onToggle:k[0]||(k[0]=y=>f.$emit("toggle-sidebar"))}),b("span",{ref:(y,S)=>{S.siteBrand=y,_.value=y}},[x(h,{to:e(m)},{default:N(()=>[e(r)?(s(),c("img",{key:0,class:"logo",src:e(he)(e(r)),alt:e(l)},null,8,Bt)):C("v-if",!0),e(l)?(s(),c("span",{key:1,class:z(["site-name",{"can-hide":e(r)}])},T(e(l)),3)):C("v-if",!0)]),_:1},8,["to"])],512),b("div",{class:"navbar-links-wrapper",style:Oe(e(p))},[w(f.$slots,"before"),x(ye,{class:"can-hide"}),w(f.$slots,"after"),e(d)?(s(),B(Ct,{key:0})):C("v-if",!0),x(L)],4)],512)}}}),Dt={class:"page-meta"},Rt={key:0,class:"meta-item edit-link"},Et={key:1,class:"meta-item last-updated"},Pt={class:"meta-item-label"},At={class:"meta-item-info"},Ht={key:2,class:"meta-item contributors"},It={class:"meta-item-label"},zt={class:"meta-item-info"},Ot=["title"],Ft=I(", "),Wt=M({setup(o){const t=()=>{const r=R(),l=X(),i=H();return v(()=>{var y,S;if(!((S=(y=i.value.editLink)!=null?y:r.value.editLink)!=null?S:!0))return null;const{repo:d,docsRepo:g=d,docsBranch:f="main",docsDir:k="",editLinkText:h}=r.value;if(!g)return null;const L=ot({docsRepo:g,docsBranch:f,docsDir:k,filePathRelative:l.value.filePathRelative,editLinkPattern:r.value.editLinkPattern});return L?{text:h!=null?h:"Edit this page",link:L}:null})},n=()=>{const r=K(),l=R(),i=X(),p=H();return v(()=>{var f,k,h,L;return!((k=(f=p.value.lastUpdated)!=null?f:l.value.lastUpdated)!=null?k:!0)||!((h=i.value.git)==null?void 0:h.updatedTime)?null:new Date((L=i.value.git)==null?void 0:L.updatedTime).toLocaleString(r.value.lang)})},u=()=>{const r=R(),l=X(),i=H();return v(()=>{var d,g,f,k;return((g=(d=i.value.contributors)!=null?d:r.value.contributors)!=null?g:!0)&&(k=(f=l.value.git)==null?void 0:f.contributors)!=null?k:null})},a=R(),$=t(),_=n(),m=u();return(r,l)=>(s(),c("footer",Dt,[e($)?(s(),c("div",Rt,[x(E,{class:"meta-item-label",item:e($)},null,8,["item"])])):C("v-if",!0),e(_)?(s(),c("div",Et,[b("span",Pt,T(e(a).lastUpdatedText)+": ",1),b("span",At,T(e(_)),1)])):C("v-if",!0),e(m)&&e(m).length?(s(),c("div",Ht,[b("span",It,T(e(a).contributorsText)+": ",1),b("span",zt,[(s(!0),c(D,null,P(e(m),(i,p)=>(s(),c(D,{key:p},[b("span",{class:"contributor",title:`email: ${i.email}`},T(i.name),9,Ot),p!==e(m).length-1?(s(),c(D,{key:0},[Ft],2112)):C("v-if",!0)],64))),128))])])):C("v-if",!0)]))}}),Ut={key:0,class:"page-nav"},Vt={class:"inner"},jt={key:0,class:"prev"},Gt=I(" \u2190 "),qt={key:1,class:"next"},Kt=I(" \u2192 "),Xt=M({setup(o){const t=r=>r===!1?null:be(r)?ge(r):Fe(r)?r:!1,n=(r,l,i)=>{const p=r.findIndex(d=>d.link===l);if(p!==-1){const d=r[p+i];return(d==null?void 0:d.link)?d:null}for(const d of r)if(d.children){const g=n(d.children,l,i);if(g)return g}return null},u=H(),a=Z(),$=G(),_=v(()=>{const r=t(u.value.prev);return r!==!1?r:n(a.value,$.path,-1)}),m=v(()=>{const r=t(u.value.next);return r!==!1?r:n(a.value,$.path,1)});return(r,l)=>e(_)||e(m)?(s(),c("nav",Ut,[b("p",Vt,[e(_)?(s(),c("span",jt,[Gt,x(E,{item:e(_)},null,8,["item"])])):C("v-if",!0),e(m)?(s(),c("span",qt,[x(E,{item:e(m)},null,8,["item"]),Kt])):C("v-if",!0)])])):C("v-if",!0)}}),Yt={class:"page"},Jt={class:"theme-default-content"},Qt=M({setup(o){return(t,n)=>{const u=A("Content");return s(),c("main",Yt,[w(t.$slots,"top"),b("div",Jt,[x(u)]),x(Wt),x(Xt),w(t.$slots,"bottom")])}}}),we=o=>decodeURI(o).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Zt=(o,t)=>{if(t===void 0)return!1;if(o.hash===t)return!0;const n=we(o.path),u=we(t);return n===u},Ce=(o,t)=>Zt(o,t.link)?!0:t.children?t.children.some(n=>Ce(o,n)):!1,en=(o,t)=>o.link?F(E,j(V({},t),{item:o})):F("p",t,o.text),tn=(o,t)=>{var n;return((n=o.children)===null||n===void 0?void 0:n.length)?F("ul",{class:{"sidebar-sub-items":t>0}},o.children.map(u=>F("li",F(Y,{item:u,depth:t+1})))):null},Y=({item:o,depth:t=0})=>{const n=G(),u=Ce(n,o);return[en(o,{class:{"sidebar-heading":t===0,"sidebar-item":!0,active:u}}),tn(o,t)]};Y.displayName="SidebarChild";Y.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const nn={class:"sidebar"},an={class:"sidebar-links"},sn=M({setup(o){const t=Z();return(n,u)=>(s(),c("aside",nn,[x(ye),w(n.$slots,"top"),b("ul",an,[(s(!0),c(D,null,P(e(t),a=>(s(),B(e(Y),{key:a.link||a.text,item:a},null,8,["item"]))),128))]),w(n.$slots,"bottom")]))}}),ln=M({setup(o){const t=X(),n=H(),u=R(),a=v(()=>n.value.navbar!==!1&&u.value.navbar!==!1),$=Z(),_=O(!1),m=h=>{_.value=typeof h=="boolean"?h:!_.value},r={x:0,y:0},l=h=>{r.x=h.changedTouches[0].clientX,r.y=h.changedTouches[0].clientY},i=h=>{const L=h.changedTouches[0].clientX-r.x,y=h.changedTouches[0].clientY-r.y;Math.abs(L)>Math.abs(y)&&Math.abs(L)>40&&(L>0&&r.x<=80?m(!0):m(!1))},p=v(()=>[{"no-navbar":!a.value,"no-sidebar":!$.value.length,"sidebar-open":_.value},n.value.pageClass]);let d;$e(()=>{d=_e().afterEach(()=>{m(!1)})}),We(()=>{d()});const g=Ue(),f=g.resolve,k=g.pending;return(h,L)=>(s(),c("div",{class:z(["theme-container",e(p)]),onTouchstart:l,onTouchend:i},[w(h.$slots,"navbar",{},()=>[e(a)?(s(),B(Nt,{key:0,onToggleSidebar:m},{before:N(()=>[w(h.$slots,"navbar-before")]),after:N(()=>[w(h.$slots,"navbar-after")]),_:3})):C("v-if",!0)]),b("div",{class:"sidebar-mask",onClick:L[0]||(L[0]=y=>m(!1))}),w(h.$slots,"sidebar",{},()=>[x(sn,null,{top:N(()=>[w(h.$slots,"sidebar-top")]),bottom:N(()=>[w(h.$slots,"sidebar-bottom")]),_:3})]),w(h.$slots,"page",{},()=>[e(n).home?(s(),B(at,{key:0})):(s(),B(fe,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e(f),onBeforeLeave:e(k)},{default:N(()=>[x(Qt,{key:e(t).path},{top:N(()=>[w(h.$slots,"page-top")]),bottom:N(()=>[w(h.$slots,"page-bottom")]),_:3})]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});export{ln as default};