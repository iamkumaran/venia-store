(()=>{"use strict";var e,t={688:(e,t,r)=>{var a=r(540),n=r(338),l=r(496);const o="SET_SELECTED_FILTERS",i="SET_PRODUCT_COUNT",s="SET_CATEGORY_NAME",c=(e,t)=>{switch(t.type){case o:return((e,t,r)=>{const a=structuredClone(e.selectedFilter),n=a.findIndex((e=>e.key===t.key&&e.value===t.value));return n>-1?r||a.splice(n,1):a.push(t),{...e,selectedFilter:a}})(e,t.payload,t.bool);case i:return((e,t)=>({...e,productsCount:t}))(e,t.payload);case s:return((e,t)=>({...e,categoryName:t}))(e,t.payload);default:return e}},d={USD:"$"},m=e=>{if(!e)return"";const t=new URL(e);return e.replace(t.origin,"https://venia.magento.com")},{uid:u=null,urlKey:p=null}=(()=>{const{hostname:e,pathname:t,search:r}=window.location,a=e.includes("localhost")?new URLSearchParams(r).get("path")?.split("/")||[]:t.split("/");if(a.length){const e=a?.[a.length-1]?.replaceAll("-","="),t=a?.[a.length-2];return{uid:e,urlKey:t}}return{}})(),g={isLoggedIn:!1,localeCode:"en-us",isLocal:window.location.hostname.includes("localhost"),categoryName:"",selectedFilter:[],productsCount:0,uid:u,urlKey:p},b=(0,a.createContext)({state:g}),y=({children:e})=>{const[t,r]=(0,a.useReducer)(c,g),n=(0,a.useMemo)((()=>({state:t,dispatch:r})),[t,r]);return a.createElement(b.Provider,{value:n},e)},f=()=>(0,a.useContext)(b),h=({isSelected:e})=>a.createElement("span",{className:"checkbox-icon-3mn h-[1.5rem] pointer-events-none w-[1.5rem]"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},!e&&a.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e&&a.createElement(a.Fragment,null,a.createElement("polyline",{points:"9 11 12 14 22 4"}),a.createElement("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})))),x=({item:e,opt:t})=>{const{dispatch:r}=f(),[n,l]=(0,a.useState)(!1);return a.createElement("li",{key:`${e.attribute_code}-${t.value}`},a.createElement("label",{"aria-label":`Remove filter "${t.label}".`,className:"checkbox-root-1vJ gap-3 grid grid-flow-col items-center justify-items-center leading-normal text-colorDefault"},a.createElement("input",{type:"checkbox",title:t.label,className:"checkbox-input-33X appearance-none bg-transparent border-2 border-solid border-transparent cursor-pointer h-[1.5rem] rounded w-[1.5rem] disabled_cursor-not-allowed",id:`check-${e.attribute_code}-${t.value}`,name:`${t.attribute_code}-${t.value}`,defaultValue:t.value,onChange:a=>{var n,i;l(a.target.checked),r((n={key:e.attribute_code,value:t.value,label:t.label,group:e.label},i=a.target.checked,{type:o,payload:n,bool:i}))}}),a.createElement(h,{isSelected:n}),a.createElement("span",{className:"checkbox-label-1cy cursor-pointer justify-self-start text-colorDefault"},t.label)),a.createElement("p",{className:"message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm"}))},_=({item:e})=>{const[t,r]=(0,a.useState)(!0);return a.createElement("li",{className:"filterBlock-root-Jl- border-solid border-subtle border-t-2 border-r-0 border-b-0 border-l-0 grid","aria-label":`Filter products by "${e.label}"`},a.createElement("button",{type:"button","aria-expanded":t,"aria-label":`${t?"show":"Hide"} "${e.label}" filter item options.`,onClick:e=>{r("true"!==e.currentTarget.getAttribute("aria-expanded"))}},a.createElement("span",{className:"filterBlock-header-Y0o grid grid-cols-autoLast grid-flow-col items-center min-h-[3.125rem]"},a.createElement("span",{className:"filterBlock-name-2Pb leading-normal text-left"},e.label),a.createElement("span",{className:"icon-root-2x9 items-center inline-flex justify-center"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"icon-icon-_rq"},a.createElement("polyline",{points:t?"18 15 12 9 6 15":"6 9 12 15 18 9"}))))),t&&a.createElement("form",{className:"filterBlock-list-2fc"},a.createElement("ul",{className:"filterList-items-3pK gap-3 grid -ml-1.5 pb-md"},e.options.map((t=>a.createElement(x,{key:`${e.attribute_code}-${t.value}`,item:e,opt:t}))))))};var v=r(714);const w=v.J1`
  query getProductFiltersByCategory($categoryIdFilter: FilterEqualTypeInput!) {
    products(filter: { category_uid: $categoryIdFilter }) {
      aggregations {
        label
        count
        attribute_code
        options {
          label
          value
          __typename
        }
        position
        __typename
      }
      __typename
    }
  }
`,E=({uid:e})=>{const[t]=(0,l.IT)({query:w,variables:{categoryIdFilter:{eq:e}}}),{data:r,fetching:n,error:o}=t;return n?a.createElement("p",null,"Loading..."):o?a.createElement("p",null,"Oh no... ",o.message):a.createElement("ul",{className:"filterSidebar-blocks-BxH pb-0 pt-xs px-xs"},r.products.aggregations.map((e=>a.createElement(a.Fragment,{key:e.attribute_code},"category_uid"!==e.attribute_code&&a.createElement(_,{item:e})))))},k=()=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"icon-icon-_rq"},a.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),a.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),N=({item:e})=>a.createElement("li",{className:"currentFilters-item-K3D float-left pb-0 pl-0 pr-xs pt-xs"},a.createElement("span",{className:"currentFilter-root-2kn bg-gray-700 font-semibold gap-2xs grid-flow-col inline-grid items-center justify-center pl-2 pr-3 py-2.5 rounded-md text-white"},a.createElement("button",{onClick:()=>{document.getElementById(`check-${e.key}-${e.value}`)?.click()},className:"trigger-root-1mc clickable-root-1HB cursor-pointer inline-flex items-center justify-center leading-none pointer-events-auto text-center",type:"button","aria-hidden":"false","aria-label":`Clear filter "${e.label}"`},a.createElement("span",{className:"icon-root-2x9 items-center inline-flex justify-center"},a.createElement(k,null))),a.createElement("span",null,e.label))),j=()=>{const{state:{uid:e,selectedFilter:t}}=f();return a.createElement("aside",{className:"filterSidebar-root-3TH bg-white bottom-0 hidden max-w-modal w-full z-foreground lg_grid","aria-busy":"false"},a.createElement("div",{className:"filterSidebar-body-3wX overflow-auto"},a.createElement("div",{className:"filterSidebar-header-17v flex justify-between pb-0 pt-5 px-5"},a.createElement("h2",{className:"filterSidebar-headerTitle--Ot flex items-center leading-none text-lg"},"Filters")),t.length>0&&a.createElement("ul",{className:"currentFilters-root-2-V px-xs py-0 overflow-auto","aria-label":"Current Filters"},t.map((e=>a.createElement(N,{key:`selected-${e.key}-${e.value}`,item:e})))),a.createElement("div",{className:"filterSidebar-action-cBm pb-0 pt-xs px-xs"},a.createElement("button",{className:"linkButton-root-1df clickable-root-1HB cursor-pointer inline-flex items-center justify-center leading-none pointer-events-auto text-center font-semibold leading-tight max-w-full text-colorDefault text-brand-dark underline hover_text-colorDefault",type:"button"},a.createElement("span",{className:"button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center"},"Clear all"))),e&&a.createElement(E,{uid:e})))},C=v.J1`
  query GetCategories(
    $id: String!
    $pageSize: Int!
    $currentPage: Int!
    $filters: ProductAttributeFilterInput!
    $sort: ProductAttributeSortInput
  ) {
    categories(filters: { category_uid: { in: [$id] } }) {
      items {
        uid
        ...CategoryFragment
        __typename
      }
      __typename
    }
    products(pageSize: $pageSize, currentPage: $currentPage, filter: $filters, sort: $sort) {
      ...ProductsFragment
      __typename
    }
  }
  ${"\n  fragment CategoryFragment on CategoryTree {\n    uid\n    meta_title\n    meta_keywords\n    meta_description\n    __typename\n  }\n"}
  ${"\n  fragment ProductsFragment on Products {\n    items {\n      id\n      uid\n      name\n      price_range {\n        maximum_price {\n          final_price {\n            currency\n            value\n            __typename\n          }\n          regular_price {\n            currency\n            value\n            __typename\n          }\n          discount {\n            amount_off\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      sku\n      small_image {\n        url\n        __typename\n      }\n      stock_status\n      rating_summary\n      __typename\n      url_key\n    }\n    page_info {\n      total_pages\n      __typename\n    }\n    total_count\n    __typename\n  }\n"}
`,S=()=>a.createElement("div",{className:"gallery-items-3dc gap-xs grid mb-3"},[{name:"",uid:123},{name:"",uid:12345},{name:"",uid:12345678}].map(((e,t)=>a.createElement("div",{key:e.uid,className:"item-root-2AI content-start grid gap-y-2xs"},a.createElement("a",{"aria-label":e.name,className:"item-images-2Jh grid",href:"/penelope-peasant-blouse.html"},a.createElement("div",{className:"item-imageContainer-2bp image-container-2U5 relative"},a.createElement("img",{loading:[0,1,2].includes(t)?"eager":"lazy","aria-hidden":"true",alt:e.name,className:"item-image-3Wd block h-full object-contain w-full image-placeholder_layoutOnly-1jH image-placeholder-1mM bg-transparent left-0 relative top-0 bg-transparent",height:375,src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHN0eWxlPSdmaWxsOiBub25lJyAvPjwvc3ZnPg==",width:840}))),a.createElement("a",{className:"item-name-1cZ font-semibold text-colorDefault",href:"/penelope-peasant-blouse.html"},a.createElement("span",null," ")),a.createElement("div",{className:"item-price-1Qq text-colorDefault"},a.createElement("span",null," "),a.createElement("span",null," ")),a.createElement("div",{className:"item-actionsContainer-2rd gap-x-xs grid pl-2xs"},a.createElement("button",{className:"addToCartButton-root-vwC button-root_highPriority-1Zl button-root-17M border-2 border-solid cursor-pointer font-bold inline-flex items-center justify-center leading-tight max-w-full min-w-[10rem] outline-none pointer-events-auto px-sm rounded-full text-center text-sm uppercase disabled_bg-gray-400 disabled_border-gray-400 disabled_opacity-50 disabled_pointer-events-none disabled_text-white focus_shadow-inputFocus bg-brand-dark border-brand-dark text-white active_bg-brand-darkest active_border-brand-darkest active_text-white hover_bg-brand-darkest hover_border-brand-darkest hover_text-white min-w-[6.125rem] -ml-2xs px-2xs py-0 self-center sm_min-w-[8rem]",type:"button","aria-label":"Add to cart"},a.createElement("span",{className:"button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center"},a.createElement("span",{className:"icon-root-2x9 items-center inline-flex justify-center"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"addToCartButton-icon-bKz inline stroke-white xs_hidden"},a.createElement("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),a.createElement("line",{x1:3,y1:6,x2:21,y2:6}),a.createElement("path",{d:"M16 10a4 4 0 0 1-8 0"}))),a.createElement("span",{className:"addToCartButton-text-3eM hidden xs_inline"}," "))),a.createElement("button",{className:"addToListButton-root-3FX gap-x-2xs inline-flex items-center min-w-[3rem]",type:"button","aria-label":"Add to Favorites"},a.createElement("span",{className:"icon-root-2x9 items-center inline-flex justify-center"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"icon-icon-_rq"},a.createElement("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}))))))))),B=({filtersList:e})=>{const{state:{uid:t,isLocal:r},dispatch:n}=f(),o=r?"/?path=":"",c=(e=>{const t={};return e.forEach((e=>{const r="price"===e.key?e.value.split("_"):[e.value];t?.[e.key]?.in?.length?t[e.key].in.push(...r):(t[e.key]={in:[]},t[e.key].in=r)})),t.price&&(t.price={from:Math.min(...t.price.in).toString(),to:Math.max(...t.price.in).toString()}),t})(e),[u]=(0,l.IT)({query:C,variables:{currentPage:1,id:t,filters:{...c,category_uid:{eq:t}},pageSize:12,sort:{position:"ASC"}}}),{data:p,fetching:g,error:b}=u;return(0,a.useEffect)((()=>{var e;p&&!g&&(n((e=p.products.total_count,{type:i,payload:e})),n((e=>({type:s,payload:e}))(p.categories.items[0].meta_description)))}),[p,g]),g?a.createElement(S,null):b?a.createElement("p",null,"Oh no... ",b.message):a.createElement("div",{className:"gallery-items-3dc gap-xs grid mb-3"},p.products.items.map(((t,r)=>a.createElement("div",{key:t.uid,className:"item-root-2AI content-start grid gap-y-2xs"},a.createElement("a",{"aria-label":t.name,className:"item-images-2Jh grid",href:`${o}/products/${t.url_key}/${t.uid.replaceAll("=","-")}`},a.createElement("div",{className:"item-imageContainer-2bp image-container-2U5 relative"},a.createElement("img",{loading:[0,1,2].includes(r)?"eager":"lazy","aria-hidden":"true",alt:t.name,className:"item-image-3Wd block h-full object-contain w-full image-placeholder_layoutOnly-1jH image-placeholder-1mM bg-transparent left-0 relative top-0 bg-transparent",height:375,src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHN0eWxlPSdmaWxsOiBub25lJyAvPjwvc3ZnPg==",width:840}),a.createElement("img",{loading:[0,1,2].includes(r)?"eager":"lazy",fetchPriority:[0,1,2].includes(r)?"high":null,alt:t.name,className:"item-image-3Wd block h-full object-contain w-full item-imageLoaded-2Dq image-loaded-3O9 absolute left-0 top-0 opacity-100",sizes:"(max-width: 640px) 300px, 840px",src:m(`${t.small_image.url}?width=320&height=400`),width:840}))),a.createElement("a",{className:"item-name-1cZ font-semibold text-colorDefault",href:`${o}/products/${t.url_key}/${t.uid.replaceAll("=","-")}`},a.createElement("span",null,t.name," ",e.length)),a.createElement("div",{className:"item-price-1Qq text-colorDefault"},a.createElement("span",null,d[t.price_range.maximum_price.final_price.currency]),a.createElement("span",null,t.price_range.maximum_price.final_price.value)),a.createElement("div",{className:"item-actionsContainer-2rd gap-x-xs grid pl-2xs"},a.createElement("button",{className:"addToCartButton-root-vwC button-root_highPriority-1Zl button-root-17M border-2 border-solid cursor-pointer font-bold inline-flex items-center justify-center leading-tight max-w-full min-w-[10rem] outline-none pointer-events-auto px-sm rounded-full text-center text-sm uppercase disabled_bg-gray-400 disabled_border-gray-400 disabled_opacity-50 disabled_pointer-events-none disabled_text-white focus_shadow-inputFocus bg-brand-dark border-brand-dark text-white active_bg-brand-darkest active_border-brand-darkest active_text-white hover_bg-brand-darkest hover_border-brand-darkest hover_text-white min-w-[6.125rem] -ml-2xs px-2xs py-0 self-center sm_min-w-[8rem]",type:"button","aria-label":"Add to cart"},a.createElement("span",{className:"button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center"},a.createElement("span",{className:"icon-root-2x9 items-center inline-flex justify-center"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"addToCartButton-icon-bKz inline stroke-white xs_hidden"},a.createElement("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),a.createElement("line",{x1:3,y1:6,x2:21,y2:6}),a.createElement("path",{d:"M16 10a4 4 0 0 1-8 0"}))),a.createElement("span",{className:"addToCartButton-text-3eM hidden xs_inline"},"ADD TO CART"))),a.createElement("button",{className:"addToListButton-root-3FX gap-x-2xs inline-flex items-center min-w-[3rem]",type:"button","aria-label":"Add to Favorites"},a.createElement("span",{className:"icon-root-2x9 items-center inline-flex justify-center"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"icon-icon-_rq"},a.createElement("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})))))))))},L=()=>{const{state:{uid:e,selectedFilter:t}}=f();return e?a.createElement(B,{filtersList:t}):null},$=()=>{const{state:{productsCount:e}}=f();return a.createElement("div",{className:"category-categoryInfo-3Ci leading-tight max-w-[75vw] mx-0 my-xs text-center lg_m-0 lg_text-left"},e," Results")},P=()=>{const{state:{categoryName:e}}=f();return a.createElement("article",{className:"category-root-2h5 p-xs"},a.createElement("div",null,a.createElement("h1",{"aria-live":"polite",className:"category-title-2c9 font-normal px-2xs py-0 text-xl"},a.createElement("div",{className:"category-categoryTitle-q7I font-light leading-snug pb-xs text-colorDefault text-center text-xl"},e))),a.createElement("div",{className:"category-contentWrapper-34q w-full lg_flex"},a.createElement("div",{className:"category-sidebar-21s hidden lg_flex lg_self-start lg_pt-16 lg_w-filterSidebarWidth"},a.createElement(j,null)),a.createElement("div",{className:"category-categoryContent-1jb lg_flex-grow"},a.createElement("div",{className:"category-heading-XE8 flex flex-wrap justify-center pb-2xs lg_flex-nowrap lg_items-center lg_justify-between lg_pb-sm lg_w-full"},a.createElement($,null),a.createElement("div",{className:"category-headerButtons-1JJ flex justify-center pb-sm lg_justify-end lg_pb-0"},a.createElement("button",{className:"filterModalOpenButton-filterButton-3kT button-root_lowPriority-3lq button-root-17M border-2 border-solid cursor-pointer font-bold inline-flex items-center justify-center leading-tight max-w-full min-w-[10rem] outline-none pointer-events-auto px-sm rounded-full text-center text-sm uppercase disabled_bg-gray-400 disabled_border-gray-400 disabled_opacity-50 disabled_pointer-events-none disabled_text-white focus_shadow-inputFocus bg-transparent border-gray-700 text-gray-700 active_border-gray-800 active_text-gray-800 hover_border-gray-800 hover_text-gray-800 min-w-[6.25rem] lg_hidden",type:"button","aria-label":"Filter Button for Filter Options.","aria-live":"polite","aria-busy":"false"},a.createElement("span",{className:"button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center"},"Filter")),a.createElement("div",{className:"productSort-root-3hp relative ml-2xs","aria-busy":"false"},a.createElement("button",{className:"productSort-sortButton-1Ii button-root_lowPriority-3lq button-root-17M border-2 border-solid cursor-pointer font-bold inline-flex items-center justify-center leading-tight max-w-full min-w-[10rem] outline-none pointer-events-auto px-sm rounded-full text-center text-sm uppercase disabled_bg-gray-400 disabled_border-gray-400 disabled_opacity-50 disabled_pointer-events-none disabled_text-white focus_shadow-inputFocus bg-transparent border-gray-700 text-gray-700 active_border-gray-800 active_text-gray-800 hover_border-gray-800 hover_text-gray-800 min-w-[6.26rem] lg_border-2 lg_border-gray-500 lg_font-normal lg_normal-case lg_rounded-md",type:"button","aria-label":"Sort Button Collapsed"},a.createElement("span",{className:"button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center"},a.createElement("span",{className:"productSort-mobileText-3n_ lg_hidden"},"Sort"),a.createElement("span",{className:"productSort-desktopText-3QH hidden lg_inline-flex"},a.createElement("span",{className:"productSort-sortText-3y1 leading-normal text-colorDefault"},"Sort by Position"),a.createElement("span",{className:"productSort-desktopIconWrapper-1m8 icon-root-2x9 items-center inline-flex justify-center"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"productSort-desktopIcon-2Vg icon-icon-_rq stroke-gray-500"},a.createElement("polyline",{points:"6 9 12 15 18 9"})))))))),a.createElement("div",{className:"sortedByContainer-root-vyI pb-xs text-center text-sm lg_hidden","aria-busy":"true"},"Items sorted by",a.createElement("span",{className:"sortedByContainer-sortText-wLM font-semibold"},"Position"))),a.createElement("section",null,a.createElement("div",{className:"gallery-root-1o3 grid grid-cols-1 leading-none","aria-busy":"false"},a.createElement(L,null))),a.createElement("div",{className:"category-pagination-1Ui relative bottom-0"}))))},F=()=>{const e="localhost"===window.location.hostname?"http://localhost:4000/graphql":document.head.querySelector("meta[name=store-config]").content;return new v.Kj({url:e,exchanges:[v.WG,v.cI]})},T=()=>a.createElement(l.Kq,{value:F()},a.createElement(y,null,a.createElement(P,null))),I=document.querySelector(".product-list");if(I){(0,n.H)(I).render(a.createElement(T,null))}}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,a),l.exports}a.m=t,e=[],a.O=(t,r,n,l)=>{if(!r){var o=1/0;for(d=0;d<e.length;d++){for(var[r,n,l]=e[d],i=!0,s=0;s<r.length;s++)(!1&l||o>=l)&&Object.keys(a.O).every((e=>a.O[e](r[s])))?r.splice(s--,1):(i=!1,l<o&&(o=l));if(i){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[r,n,l]},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.j="product-list",(()=>{var e={"product-list":0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,l,[o,i,s]=r,c=0;if(o.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(s)var d=s(a)}for(t&&t(r);c<o.length;c++)l=o[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(d)},r=self.webpackChunkreact_app=self.webpackChunkreact_app||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=a.O(void 0,["vendor"],(()=>a(688)));n=a.O(n)})();