/* eslint-disable */
var e,t={989:(e,t,n)=>{var r=n(540),a=n(338),l=n(496),o=n(714);const i=o.J1`
  query getMegaMenu {
    categoryList {
      uid
      name
      children {
        uid
        include_in_menu
        name
        position
        url_path
        children {
          uid
          include_in_menu
          name
          position
          url_path
          children {
            uid
            include_in_menu
            name
            position
            url_path
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
  }
`,c=({error:e})=>r.createElement("div",{style:{fontSize:"12px",marginTop:"17px"}},"Oh no... ",e?.message," ",r.createElement("br",null),"Looks like GraphQL call failed. Please run below proxy in CMD/Terminal (Req: Node.js) ",r.createElement("br",null),r.createElement("textarea",{readOnly:!0,style:{color:"red",width:"100%",height:"32px",marginTop:"5px"}},'npx local-cors-proxy --proxyUrl https://venia.magento.com/ --port 4000 --proxyPartial ""'));const s=window.location.hostname.includes("localhost"),u=e=>{const t="/categories",n=`${t}.html?path=`,r=`${t}/${e.url_path}/${e.uid.replaceAll("=","-")}`;return s?`${n}${r}`:r},m=()=>{const[e]=(0,l.IT)({query:i}),{data:t,fetching:n,error:a}=e;return n?r.createElement("p",null,"Loading..."):a?r.createElement(c,{error:a}):r.createElement("div",{className:"megaMenu-megaMenu-HGZ col-end-10 col-start-3 flex-grow justify-self-center lg_flex",role:"navigation"},t.categoryList[0].children.map((e=>r.createElement("div",{key:`menu-${e.name}`,className:"megaMenuItem-megaMenuItem-1TT px-3 py-0"},r.createElement("a",{"aria-label":`Category: ${e.name}. ${e.children.length?`${e.children.length} sub-categories`:""}`,className:"megaMenuItem-megaMenuLink-2Rr items-center inline-flex",href:u(e)},e.name,e.children.length>0&&r.createElement("span",{className:"megaMenuItem-arrowDown-24M leading-[0] pl-2xs"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"icon-icon-_rq"},r.createElement("polyline",{points:"6 9 12 15 18 9"})))),e.children.length>0&&r.createElement("div",{className:"submenu-submenu_active-1Lj submenu-submenu-iLX absolute bg-white flex-wrap justify-between left-0 px-3 py-5 right-0 hidden"},r.createElement("div",{className:"submenu-submenuItems-3rB flex flex-wrap justify-between max-w-site ml-auto mr-auto",style:{minWidth:607}},e.children.map((t=>r.createElement("div",{key:`submenu-${t.name}-${e.name}`,className:"submenuColumn-submenuColumn-1Hl max-w-[235px] p-5"},r.createElement("a",{className:"submenuColumn-link-16H whitespace-nowrap focus_underline hover_underline",href:u(t)},r.createElement("span",{className:"submenuColumn-heading-2is font-semibold"},t.name)))))))))))},d="SET_SELECTED_FILTERS",h="SET_PRODUCT_COUNT",p="SET_CATEGORY_NAME",g=(e,t)=>{switch(t.type){case d:return((e,t,n)=>{const r=structuredClone(e.selectedFilter),a=r.findIndex((e=>e.key===t.key&&e.value===t.value));return a>-1?n||r.splice(a,1):r.push(t),{...e,selectedFilter:r}})(e,t.payload,t.bool);case h:return((e,t)=>({...e,productsCount:t}))(e,t.payload);case p:return((e,t)=>({...e,categoryName:t}))(e,t.payload);default:return e}},{uid:f=null,urlKey:y=null}=(()=>{const{hostname:e,pathname:t,search:n}=window.location,r=e.includes("localhost")?new URLSearchParams(n).get("path")?.split("/")||[]:t.split("/");if(r.length){const e=r?.[r.length-1]?.replaceAll("-","="),t=r?.[r.length-2];return{uid:e,urlKey:t}}return{}})(),v={isLoggedIn:!1,localeCode:"en-us",isLocal:window.location.hostname.includes("localhost"),categoryName:"",selectedFilter:[],productsCount:0,uid:f,urlKey:y},b=(0,r.createContext)({state:v}),w=({children:e})=>{const[t,n]=(0,r.useReducer)(g,v),a=(0,r.useMemo)((()=>({state:t,dispatch:n})),[t,n]);return r.createElement(b.Provider,{value:a},e)},x=()=>{const e="localhost"===window.location.hostname?"http://localhost:4000/graphql":document.head.querySelector("meta[name=store-config]").content;return new o.Kj({url:e,exchanges:[o.WG,o.cI]})},E=()=>{return r.createElement("div",{id:"mini-cart-section",className:"header-secondaryActions-2BM col-start-3 grid grid-flow-col items-center justify-items-end justify-self-end w-max lg_col-end-13 lg_col-start-10 lg_gap-x-4"},r.createElement("div",{className:"cartTrigger-triggerContainer-2Jd hidden items-center h-lg lg_grid"},r.createElement("a",{href:(e="/cart",s?`${e}.html`:e),"aria-label":"Toggle mini cart. You have 0 items in your cart.",className:"cartTrigger-trigger-1c5 clickable-root-1HB cursor-pointer inline-flex items-center justify-center leading-none pointer-events-auto text-center content-center flex h-[3rem] justify-center relative z-foreground"},r.createElement("span",{className:"icon-root-2x9 items-center inline-flex justify-center"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"icon-icon-_rq"},r.createElement("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),r.createElement("line",{x1:3,y1:6,x2:21,y2:6}),r.createElement("path",{d:"M16 10a4 4 0 0 1-8 0"}))),r.createElement("span",{className:"cartTrigger-counter-2ju absolute bg-brand-dark font-semibold leading-tight left-sm min-w-[1.25rem] px-1 py-0 rounded-full text-sm text-white top-1.5"}))));var e},_=()=>r.createElement(l.Kq,{value:x()},r.createElement(w,null,r.createElement(m,null),r.createElement(E,null)));const k=e=>{if(e){(0,a.H)(e).render(r.createElement(_,null))}},N=document.querySelector(".header-nav");N?k(N):function(e,t){const n=new MutationObserver((r=>{const a=document.querySelector(e);a&&(n.disconnect(),t(a))}));n.observe(document.body,{childList:!0,subtree:!0})}(".header-nav",k)}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,n,a,l)=>{if(!n){var o=1/0;for(u=0;u<e.length;u++){for(var[n,a,l]=e[u],i=!0,c=0;c<n.length;c++)(!1&l||o>=l)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(i=!1,l<o&&(o=l));if(i){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,a,l]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={"header-nav":0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,l,[o,i,c]=n,s=0;if(o.some((t=>0!==e[t]))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var u=c(r)}for(t&&t(n);s<o.length;s++)l=o[s],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},n=self.webpackChunk_adobe_aem_boilerplate=self.webpackChunk_adobe_aem_boilerplate||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,["vendor"],(()=>r(989)));a=r.O(a);