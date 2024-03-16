(()=>{"use strict";var e,n={65:(e,n,t)=>{var a=t(540),r=t(338),l=t(496),u=t(714);const s=u.J1`
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
`,o=()=>{const[e]=(0,l.IT)({query:s}),{data:n,fetching:t,error:r}=e;return t?a.createElement("p",null,"Loading..."):r?a.createElement("p",null,"Oh no... ",r.message):a.createElement("div",{className:"megaMenu-megaMenu-HGZ col-end-10 col-start-3 flex-grow hidden justify-self-center lg_flex",role:"navigation"},n.categoryList[0].children.map((e=>a.createElement("div",{key:`menu-${e.name}`,className:"megaMenuItem-megaMenuItem-1TT px-3 py-0"},a.createElement("a",{"aria-label":`Category: ${e.name}. ${e.children.length?`${e.children.length} sub-categories`:""}`,className:"megaMenuItem-megaMenuLink-2Rr items-center inline-flex",href:`/${e.url_path}`},e.name,e.children.length>0&&a.createElement("span",{className:"megaMenuItem-arrowDown-24M leading-[0] pl-2xs"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"icon-icon-_rq"},a.createElement("polyline",{points:"6 9 12 15 18 9"})))),e.children.length>0&&a.createElement("div",{className:"submenu-submenu_active-1Lj submenu-submenu-iLX absolute bg-white flex-wrap justify-between left-0 px-3 py-5 right-0 hidden"},a.createElement("div",{className:"submenu-submenuItems-3rB flex flex-wrap justify-between max-w-site ml-auto mr-auto",style:{minWidth:607}},e.children.map((n=>a.createElement("div",{key:`submenu-${n.name}-${e.name}`,className:"submenuColumn-submenuColumn-1Hl max-w-[235px] p-5"},a.createElement("a",{className:"submenuColumn-link-16H whitespace-nowrap focus_underline hover_underline",href:n.url_path},a.createElement("span",{className:"submenuColumn-heading-2is font-semibold"},n.name)))))))))),a.createElement("div",{className:"megaMenuItem-megaMenuItem-1TT px-3 py-0"},a.createElement("a",{className:"megaMenuItem-megaMenuLink-2Rr items-center inline-flex",href:"/new-products3.html"},"New Products")))},i="SET_SELECTED_FILTERS",m="SET_PRODUCT_COUNT",c=(e,n)=>{switch(n.type){case i:return((e,n,t)=>{const a=structuredClone(e.selectedFilter),r=a.findIndex((e=>e.key===n.key&&e.value===n.value));return r>-1?t||a.splice(r,1):a.push(n),{...e,selectedFilter:a}})(e,n.payload,n.bool);case m:return((e,n)=>({...e,productsCount:n}))(e,n.payload);default:return e}},d={isLoggedIn:!1,localeCode:"en-us",selectedFilter:[],productsCount:0},p=(0,a.createContext)({state:d}),h=({children:e})=>{const[n,t]=(0,a.useReducer)(c,d),r=(0,a.useMemo)((()=>({state:n,dispatch:t})),[n,t]);return a.createElement(p.Provider,{value:r},e)},g=()=>{const e="localhost"===window.location.hostname?"http://localhost:4000/graphql":document.head.querySelector("meta[name=store-config]").content;return new u.Kj({url:e,exchanges:[u.WG,u.cI]})},v=()=>a.createElement(l.Kq,{value:g()},a.createElement(h,null,a.createElement(o,null)));(0,r.H)(document.querySelector(".header-nav")).render(a.createElement(v,null))}},t={};function a(e){var r=t[e];if(void 0!==r)return r.exports;var l=t[e]={exports:{}};return n[e](l,l.exports,a),l.exports}a.m=n,e=[],a.O=(n,t,r,l)=>{if(!t){var u=1/0;for(m=0;m<e.length;m++){for(var[t,r,l]=e[m],s=!0,o=0;o<t.length;o++)(!1&l||u>=l)&&Object.keys(a.O).every((e=>a.O[e](t[o])))?t.splice(o--,1):(s=!1,l<u&&(u=l));if(s){e.splice(m--,1);var i=r();void 0!==i&&(n=i)}}return n}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[t,r,l]},a.d=(e,n)=>{for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),a.j="header-nav",(()=>{var e={"header-nav":0};a.O.j=n=>0===e[n];var n=(n,t)=>{var r,l,[u,s,o]=t,i=0;if(u.some((n=>0!==e[n]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(o)var m=o(a)}for(n&&n(t);i<u.length;i++)l=u[i],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(m)},t=self.webpackChunkreact_app=self.webpackChunkreact_app||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var r=a.O(void 0,["vendor"],(()=>a(65)));r=a.O(r)})();