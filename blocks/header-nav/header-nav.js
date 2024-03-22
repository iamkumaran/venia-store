(()=>{"use strict";var e,t={247:(e,t,n)=>{var r=n(540),a=n(338),l=n(496),i=n(714);const s=i.J1`
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
`,o=()=>{const[e]=(0,l.IT)({query:s}),{data:t,fetching:n,error:a}=e;return n?r.createElement("p",null,"Loading..."):a?r.createElement("p",null,"Oh no... ",a.message):r.createElement("div",{className:"megaMenu-megaMenu-HGZ col-end-10 col-start-3 flex-grow hidden justify-self-center lg_flex",role:"navigation"},t.categoryList[0].children.map((e=>r.createElement("div",{key:`menu-${e.name}`,className:"megaMenuItem-megaMenuItem-1TT px-3 py-0"},r.createElement("a",{"aria-label":`Category: ${e.name}. ${e.children.length?`${e.children.length} sub-categories`:""}`,className:"megaMenuItem-megaMenuLink-2Rr items-center inline-flex",href:`/categories/${e.url_path}/${e.uid}`},e.name,e.children.length>0&&r.createElement("span",{className:"megaMenuItem-arrowDown-24M leading-[0] pl-2xs"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"icon-icon-_rq"},r.createElement("polyline",{points:"6 9 12 15 18 9"})))),e.children.length>0&&r.createElement("div",{className:"submenu-submenu_active-1Lj submenu-submenu-iLX absolute bg-white flex-wrap justify-between left-0 px-3 py-5 right-0 hidden"},r.createElement("div",{className:"submenu-submenuItems-3rB flex flex-wrap justify-between max-w-site ml-auto mr-auto",style:{minWidth:607}},e.children.map((t=>r.createElement("div",{key:`submenu-${t.name}-${e.name}`,className:"submenuColumn-submenuColumn-1Hl max-w-[235px] p-5"},r.createElement("a",{className:"submenuColumn-link-16H whitespace-nowrap focus_underline hover_underline",href:`/categories/${t.url_path}/${t.uid}`},r.createElement("span",{className:"submenuColumn-heading-2is font-semibold"},t.name)))))))))),r.createElement("div",{className:"megaMenuItem-megaMenuItem-1TT px-3 py-0"},r.createElement("a",{className:"megaMenuItem-megaMenuLink-2Rr items-center inline-flex",href:"/new-products3.html"},"New Products")))},c="SET_SELECTED_FILTERS",u="SET_PRODUCT_COUNT",m=(e,t)=>{switch(t.type){case c:return((e,t,n)=>{const r=structuredClone(e.selectedFilter),a=r.findIndex((e=>e.key===t.key&&e.value===t.value));return a>-1?n||r.splice(a,1):r.push(t),{...e,selectedFilter:r}})(e,t.payload,t.bool);case u:return((e,t)=>({...e,productsCount:t}))(e,t.payload);default:return e}},d={isLoggedIn:!1,localeCode:"en-us",selectedFilter:[],productsCount:0},p=(0,r.createContext)({state:d}),g=({children:e})=>{const[t,n]=(0,r.useReducer)(m,d),a=(0,r.useMemo)((()=>({state:t,dispatch:n})),[t,n]);return r.createElement(p.Provider,{value:a},e)},h=()=>{const e="localhost"===window.location.hostname?"http://localhost:4000/graphql":document.head.querySelector("meta[name=store-config]").content;return new i.Kj({url:e,exchanges:[i.WG,i.cI]})},f=()=>r.createElement("div",{id:"mini-cart-section",className:"header-secondaryActions-2BM col-start-3 grid grid-flow-col items-center justify-items-end justify-self-end w-max lg_col-end-13 lg_col-start-10 lg_gap-x-4"},r.createElement("div",{className:"cartTrigger-triggerContainer-2Jd hidden items-center h-lg lg_grid"},r.createElement("button",{type:"button","aria-expanded":"false","aria-label":"Toggle mini cart. You have 0 items in your cart.",className:"cartTrigger-trigger-1c5 clickable-root-1HB cursor-pointer inline-flex items-center justify-center leading-none pointer-events-auto text-center content-center flex h-[3rem] justify-center relative z-foreground"},r.createElement("span",{className:"icon-root-2x9 items-center inline-flex justify-center"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"icon-icon-_rq"},r.createElement("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),r.createElement("line",{x1:3,y1:6,x2:21,y2:6}),r.createElement("path",{d:"M16 10a4 4 0 0 1-8 0"}))),r.createElement("span",{className:"cartTrigger-counter-2ju absolute bg-brand-dark font-semibold leading-tight left-sm min-w-[1.25rem] px-1 py-0 rounded-full text-sm text-white top-1.5"})))),v=()=>r.createElement(l.Kq,{value:h()},r.createElement(g,null,r.createElement(o,null),r.createElement(f,null)));!function(e,t){const n=new MutationObserver((r=>{const a=document.querySelector(e);a&&(n.disconnect(),t(a))}));n.observe(document.body,{childList:!0,subtree:!0})}(".header-nav",(e=>{if(e){(0,a.H)(e).render(r.createElement(v,null))}}))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,n,a,l)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,a,l]=e[u],s=!0,o=0;o<n.length;o++)(!1&l||i>=l)&&Object.keys(r.O).every((e=>r.O[e](n[o])))?n.splice(o--,1):(s=!1,l<i&&(i=l));if(s){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,a,l]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={"header-nav":0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,l,[i,s,o]=n,c=0;if(i.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(o)var u=o(r)}for(t&&t(n);c<i.length;c++)l=i[c],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},n=self.webpackChunkreact_app=self.webpackChunkreact_app||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,["vendor"],(()=>r(247)));a=r.O(a)})();