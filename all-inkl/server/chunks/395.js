"use strict";exports.id=395,exports.ids=[395],exports.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},9895:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(997),i=n(7518),o=n.n(i);function a(){return r.jsx("header",{children:r.jsx(d,{children:"Karl-Christian Oelker"})})}let d=o().h1`
  color: chocolate;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  text-align: center;
  z-index: 1;
  position: static;
  display: grid;
  width: 100%;
  padding-bottom: 1.5rem;
  margin-top: 7rem;
`},5495:(e,t)=>{function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},7828:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return h},defaultHead:function(){return p}});let r=n(167),i=n(8760),o=n(997),a=i._(n(6689)),d=r._(n(7215)),l=n(8039),s=n(1988),c=n(5495);function p(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(1997);let f=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:n}=t;return e.reduce(u,[]).reverse().concat(p(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:r})})}let h=function(e){let{children:t}=e,n=(0,a.useContext)(l.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return(0,o.jsx)(d.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,c.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7215:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(6689),i=()=>{},o=()=>{};function a(e){var t;let{headManager:n,reduceComponentsToState:a}=e;function d(){if(n&&n.mountedInstances){let t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(a(t,e))}}return null==n||null==(t=n.mountedInstances)||t.add(e.children),d(),i(()=>{var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),()=>{var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),i(()=>(n&&(n._pendingUpdate=d),()=>{n&&(n._pendingUpdate=d)})),o(()=>(n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),()=>{n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)})),null}},1997:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},3963:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(997);n(9895);var i=n(7518),o=n.n(i);let a=(0,i.createGlobalStyle)`
*,*::after, *::before {
    box-sizing:border-box;
  
   
}
main {
    display: grid;
}
body {
    margin: 0;
    background: #ffffff;
    /* background: linear-gradient(to bottom, white, aqua) ; */
   display: block;
    @media only screen and (min-device-width: 480px){
    gap: 4rem;
    
    
}
@media (max-width: 600px) {
    .grid {
       width: 100%;
       flex-direction: column;
    }}
    
}
`;var d=n(6689),l=n.n(d),s=n(1664),c=n.n(s);function p({open:e}){return(0,r.jsxs)(u,{open:e,children:[r.jsx("li",{children:r.jsx(m,{href:"/",passHref:!0,children:r.jsx(f,{children:"Home"})})}),r.jsx("li",{children:r.jsx(m,{href:"/about",passHref:!0,children:r.jsx(f,{children:"About"})})}),r.jsx("li",{children:r.jsx(m,{href:"/myBooks",passHref:!0,children:r.jsx(f,{children:"Meine B\xfccher"})})}),r.jsx("li",{children:r.jsx(m,{href:"/impressum",passHref:!0,children:r.jsx(f,{children:"Impressum"})})})]})}let u=o().ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  /* li {
    padding: 18px 10px;
  } */
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: lavender;
    position: fixed;
    transform: ${({open:e})=>e?"translateX(0)":"translateX(100%)"};
    top: 0;
    right: 0;
    height: 50rem;
    width: 13rem;
    padding-top: 3.5rem;
    margin-top: 4rem;
    transition: transform 0.3s ease-in-out;
    opacity: 0.9;
   
    li {
      color: #fff;
    }
  }

  /* @media (min-width: 769px) {
    justify-content: space-evenly;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    text-align: center;
    justify-items: center;
    align-content: center;
    display: flex;
    top: 0;
    width: 100%;
    opacity: 0.8;
    height: 4rem;
    background-color: cadetblue;
    font-size: 1.1rem;
    color: darkcyan;
    z-index: 2;
    position: fixed;
    margin-top: 0;
  } */
`,f=o().p`
  margin: 5px 20px;
  font-size: 1.1rem;
  color: black;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  display: grid;
  z-index: 2;
`,m=o()(c())`
  padding-top: 1rem;
  display: grid;
  text-decoration: none;
  grid-row: 3;
  position: relative;
`;function h(){let[e,t]=(0,d.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(x,{open:e,onClick:()=>t(!e),children:[r.jsx("div",{}),r.jsx("div",{}),r.jsx("div",{})]}),r.jsx(p,{open:e})]})}let x=o().div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({open:e})=>e?"#ccc":"#333"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({open:e})=>e?"rotate(45deg)":"rotate(0)"};
    }
    &:nth-child(2) {
      transform: ${({open:e})=>e?"translateX(100%)":"translateX(0)"};
      opacity: ${({open:e})=>e?0:1};
    }
    &:nth-child(3) {
      transform: ${({open:e})=>e?"rotate(-45deg)":"rotate(0)"};
      border-radius: 10px;
      transform-origin: 1px;
    }
  }
`;function g(){class e extends l().Component{constructor(e){super(e),this.state={menuOpen:!1}}handleStateChange(e){this.setState({menuOpen:e.isOpen})}closeMenu(){this.setState({menuOpen:!1})}toggleMenu(){this.setState(e=>({menuOpen:!e.menuOpen}))}render(){return r.jsx(b,{children:r.jsx(h,{onClick:()=>this.toggleMenu()})})}}return(0,r.jsxs)(y,{children:[r.jsx(e,{}),r.jsx(j,{})]})}let y=o().section`
  justify-content: space-evenly;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  text-align: center;
  justify-items: center;
  align-content: center;
  display: grid;
  top: 0;
  width: 100%;
  opacity: 0.9;
  height: 4rem;
  z-index: 2;
  background-color: lavender;
  position: fixed;
`,j=o().nav`
  display: grid;
  font-size: 1.1rem;
  color: lavender;
  justify-content: space-evenly;
  z-index: 2;
  position: fixed;
`,b=o().div`
display: grid;
`;function v({Component:e,pageProps:t}){return(0,r.jsxs)(r.Fragment,{children:[r.jsx(a,{}),r.jsx(g,{}),r.jsx(e,{...t})]})}},5949:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(997),i=n(6859),o=n.n(i),a=n(7518);class d extends o(){static async getInitialProps(e){let t=new a.ServerStyleSheet,n=e.renderPage;try{e.renderPage=()=>n({enhanceApp:e=>n=>t.collectStyles(r.jsx(e,{...n}))});let i=await o().getInitialProps(e);return{...i,styles:(0,r.jsxs)(r.Fragment,{children:[i.styles,t.getStyleElement()]})}}finally{t.seal()}}}},5244:(e,t)=>{var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},8039:(e,t,n)=>{e.exports=n(7093).vendored.contexts.AmpContext},1988:(e,t,n)=>{e.exports=n(7093).vendored.contexts.HeadManagerContext}};