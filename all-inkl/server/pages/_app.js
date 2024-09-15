"use strict";(()=>{var e={};e.id=888,e.ids=[888],e.modules={9895:(e,i,r)=>{r.d(i,{Z:()=>s});var n=r(997),t=r(7518),o=r.n(t);function s(){return n.jsx("header",{children:n.jsx(a,{children:"Karl-Christian Oelker"})})}let a=o().h1`
  color: chocolate;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  text-align: center;
  z-index: 1;
  position: static;
  display: grid;
  width: 100%;
  padding-bottom: 1.5rem;
  margin-top: 7rem;
`},3963:(e,i,r)=>{r.r(i),r.d(i,{default:()=>w});var n=r(997);r(9895);var t=r(7518),o=r.n(t);let s=(0,t.createGlobalStyle)`
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
`;var a=r(6689),d=r.n(a),l=r(1664),c=r.n(l);function m({open:e}){return(0,n.jsxs)(p,{open:e,children:[n.jsx("li",{children:n.jsx(h,{href:"/",passHref:!0,children:n.jsx(x,{children:"Home"})})}),n.jsx("li",{children:n.jsx(h,{href:"/about",passHref:!0,children:n.jsx(x,{children:"About"})})}),n.jsx("li",{children:n.jsx(h,{href:"/myBooks",passHref:!0,children:n.jsx(x,{children:"Meine B\xfccher"})})}),n.jsx("li",{children:n.jsx(h,{href:"/impressum",passHref:!0,children:n.jsx(x,{children:"Impressum"})})})]})}let p=o().ul`
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
`,x=o().p`
  margin: 5px 20px;
  font-size: 1.1rem;
  color: black;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  display: grid;
  z-index: 2;
`,h=o()(c())`
  padding-top: 1rem;
  display: grid;
  text-decoration: none;
  grid-row: 3;
  position: relative;
`;function f(){let[e,i]=(0,a.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u,{open:e,onClick:()=>i(!e),children:[n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{})]}),n.jsx(m,{open:e})]})}let u=o().div`
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
`;function g(){class e extends d().Component{constructor(e){super(e),this.state={menuOpen:!1}}handleStateChange(e){this.setState({menuOpen:e.isOpen})}closeMenu(){this.setState({menuOpen:!1})}toggleMenu(){this.setState(e=>({menuOpen:!e.menuOpen}))}render(){return n.jsx(b,{children:n.jsx(f,{onClick:()=>this.toggleMenu()})})}}return(0,n.jsxs)(j,{children:[n.jsx(e,{}),n.jsx(y,{})]})}let j=o().section`
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
`,y=o().nav`
  display: grid;
  font-size: 1.1rem;
  color: lavender;
  justify-content: space-evenly;
  z-index: 2;
  position: fixed;
`,b=o().div`
display: grid;
`;function w({Component:e,pageProps:i}){return(0,n.jsxs)(n.Fragment,{children:[n.jsx(s,{}),n.jsx(g,{}),n.jsx(e,{...i})]})}},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},7518:e=>{e.exports=require("styled-components")}};var i=require("../webpack-runtime.js");i.C(e);var r=e=>i(i.s=e),n=i.X(0,[117,664],()=>r(3963));module.exports=n})();