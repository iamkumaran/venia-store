(()=>{"use strict";var e,t={568:(e,t,r)=>{var a=r(540),n=r(338),o=r(714),l=r(496);const i=o.J1`
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
  fragment CategoryFragment on CategoryTree {
    uid
    meta_title
    meta_keywords
    meta_description
    __typename
  }
  fragment ProductsFragment on Products {
    items {
      id
      uid
      name
      price_range {
        maximum_price {
          final_price {
            currency
            value
            __typename
          }
          regular_price {
            currency
            value
            __typename
          }
          discount {
            amount_off
            __typename
          }
          __typename
        }
        __typename
      }
      sku
      small_image {
        url
        __typename
      }
      stock_status
      rating_summary
      __typename
      url_key
    }
    page_info {
      total_pages
      __typename
    }
    total_count
    __typename
  }
`,c=()=>{const[e]=(0,l.IT)({query:i,variables:{currentPage:1,id:"MjE=",filters:{category_uid:{eq:"MjE="}},pageSize:12,sort:{position:"ASC"}}}),{data:t,fetching:r,error:n}=e;return r?a.createElement("p",null,"Loading..."):n?a.createElement("p",null,"Oh no... ",n.message):a.createElement("ul",null,t.products.items.map((e=>a.createElement("li",{key:e.uid},e.name))))};const u=function(){const e="localhost"===window.location.hostname?"http://localhost:4000/graphql":document.head.querySelector("meta[name=store-config]").content,t=new o.Kj({url:e,exchanges:[o.WG,o.cI]});return a.createElement(l.Kq,{value:t},a.createElement("div",{className:"bar"},a.createElement("h3",null,"Hello"),a.createElement(c,null)))};(0,n.H)(document.querySelector(".product-list")).render(a.createElement(a.Fragment,null,a.createElement(u,null)))}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,r,n,o)=>{if(!r){var l=1/0;for(s=0;s<e.length;s++){for(var[r,n,o]=e[s],i=!0,c=0;c<r.length;c++)(!1&o||l>=o)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(i=!1,o<l&&(l=o));if(i){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o]},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.j="product-list",(()=>{var e={"product-list":0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[l,i,c]=r,u=0;if(l.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(c)var s=c(a)}for(t&&t(r);u<l.length;u++)o=l[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(s)},r=self.webpackChunkreact_app=self.webpackChunkreact_app||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=a.O(void 0,["vendor"],(()=>a(568)));n=a.O(n)})();