(this["webpackJsonpreact-ecommerce"]=this["webpackJsonpreact-ecommerce"]||[]).push([[0],{97:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(10),i=n.n(c),r=n(14),s=n(152),o=n(153),l=n(154),d=n(142),j=n(155),p=n.p+"static/media/logo.5770a019.png",u=n(12),b=n(139),m=Object(b.a)((function(e){return{appBar:{boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)",width:"100%",padding:"10px 10px"},toolbar:Object(u.a)({},e.breakpoints.up("md"),{width:940,margin:"0px auto",padding:"0px 16px"}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(u.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1}}})),h=n(59),O=n(18),g=n(71),x=n.n(g),y=n(69),f=n.n(y),w=n(145),N=n(149),S=n(148),A=n(144),v=n(146),C=n(147),M=n(76),E=n(72),L=n.n(E),R=n(73),W=n.n(R),Y=n(150),I=n(70),B=n.n(I),J=n(74),D=n.n(J),T=n(2),U=Object(b.a)((function(e){return{table:{width:"100%"},list:{width:"100%",height:"90%"},button:{width:100,marginLeft:"auto",margin:e.spacing(2)},emptycart:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}})),G=function(e){var t=e.toggleDrawer,n=Object(O.c)((function(e){return e.cartItems})),a=U(),c=Object(O.b)(),i=function(){return 0===n.length?0:n.map((function(e){return e.price*e.quantity})).reduce((function(e,t){return e+t}))},r=function(){return 0===n.length?0:n.map((function(e){return e.quantity})).reduce((function(e,t){return e+t}))};return Object(T.jsxs)("div",{className:a.list,children:[Object(T.jsx)(d.a,{onClick:t(!1),children:Object(T.jsx)(f.a,{})}),0!==n.length?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(A.a,{component:M.a,className:a.table,children:Object(T.jsxs)(w.a,{"aria-label":"spanning table",children:[Object(T.jsxs)(v.a,{children:[Object(T.jsx)(C.a,{children:Object(T.jsx)(S.a,{align:"center",colSpan:4,children:Object(T.jsxs)("h1",{children:[Object(T.jsx)(B.a,{}),"\u8cfc\u7269\u8eca"]})})}),Object(T.jsxs)(C.a,{children:[Object(T.jsx)(S.a,{align:"center",colSpan:2,children:"\u5546\u54c1\u8cc7\u8a0a"}),Object(T.jsx)(S.a,{align:"center",style:{padding:0},children:"\u6578\u91cf"}),Object(T.jsx)(S.a,{align:"center",children:"\u5c0f\u8a08"})]})]}),Object(T.jsxs)(N.a,{children:[n.map((function(e,t){return Object(T.jsxs)(C.a,{children:[Object(T.jsx)(S.a,{align:"center",style:{padding:0},children:Object(T.jsx)(d.a,{onClick:function(){return c(function(e){return{type:"REMOVE_CART",index:e}}(t))},children:Object(T.jsx)(x.a,{})})}),Object(T.jsxs)(S.a,{align:"left",children:[Object(T.jsxs)("div",{style:{fontSize:14,display:"flex"},children:[Object(T.jsx)("img",{style:{height:"40px"},src:e.image,alt:e.name}),Object(T.jsxs)("p",{style:{marginLeft:"auto"},children:["$",e.price]})]}),Object(T.jsx)("p",{style:{margin:0},children:e.name})]}),Object(T.jsxs)(S.a,{align:"center",style:{padding:0},children:[Object(T.jsx)(d.a,{onClick:function(){c(function(e){return{type:"INCREMENT_QUANTITY",index:e}}(t))},children:Object(T.jsx)(L.a,{fontSize:"small"})}),Object(T.jsx)("br",{}),e.quantity,Object(T.jsx)("br",{}),Object(T.jsx)(d.a,{onClick:function(){c(function(e){return{type:"DECREMENT_QUANTITY",index:e}}(t))},children:Object(T.jsx)(W.a,{fontSize:"small"})})]}),Object(T.jsx)(S.a,{align:"center",children:e.quantity*e.price})]},e.id)})),Object(T.jsxs)(C.a,{children:[Object(T.jsx)(S.a,{colSpan:2}),Object(T.jsx)(S.a,{colSpan:1,align:"center",children:"\u5171"}),Object(T.jsxs)(S.a,{align:"center",children:[r()," \u4ef6"]})]}),Object(T.jsxs)(C.a,{children:[Object(T.jsx)(S.a,{colSpan:2}),Object(T.jsx)(S.a,{colSpan:1,align:"center",style:{padding:0},children:"\u7e3d\u91d1\u984d"}),Object(T.jsxs)(S.a,{align:"center",children:[i()," \u5143"]})]})]})]})}),Object(T.jsx)("div",{style:{display:"flex"},children:Object(T.jsx)(Y.a,{variant:"contained",color:"primary",className:a.button,endIcon:Object(T.jsx)(D.a,{}),onClick:function(){alert("\u60a8\u8cfc\u8cb7\u7684\u4ef6\u6578\u70ba".concat(r(),"\u4ef6\r\u7e3d\u91d1\u984d\u70ba").concat(i(),"\u5143"))},children:"\u7d50\u5e33"})})]}):Object(T.jsx)("div",{className:a.emptycart,children:Object(T.jsx)("img",{src:"data:image/png;base64,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",alt:"empty-cart"})})]})},z=n(165),k=n(151),q=Object(b.a)((function(e){return{side:Object(u.a)({width:"100%"},e.breakpoints.up("sm"),{width:450})}})),V=function(){var e=Object(a.useState)({right:!1}),t=Object(r.a)(e,2),n=t[0],c=t[1],i=q(),s=function(e){return function(t){c(Object(h.a)(Object(h.a)({},n),{},{right:e}))}};return Object(T.jsxs)("div",{children:[Object(T.jsx)(k.a,{onClick:s(!0)}),Object(T.jsx)(z.a,{anchor:"right",open:n.right,onClose:s(!1),classes:{paper:i.side},children:Object(T.jsx)(G,{toggleDrawer:s})})]})},Z=function(){var e=Object(O.c)((function(e){return e.cartItems})),t=m();return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(s.a,{position:"fixed",className:t.appBar,color:"inherit",children:Object(T.jsxs)(o.a,{className:t.toolbar,children:[Object(T.jsx)(l.a,{variant:"h6",className:t.title,color:"inherit",children:Object(T.jsx)("img",{src:p,height:"40px",className:t.image,alt:"Gigathumb"})}),Object(T.jsx)("div",{className:t.grow}),Object(T.jsx)("div",{className:t.button,children:Object(T.jsx)(d.a,{"aria-label":"Show cart items",coloe:"inherit",children:Object(T.jsx)(j.a,{badgeContent:e.length,color:"secondary",children:Object(T.jsx)(V,{})})})})]})})})},Q=n(161),P=n(156),K=n(157),X=n(158),F=n(159),H=n(160),_=Object(b.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),$=function(e){var t=e.product,n=_(),a=Object(O.b)(),c=Object(O.c)((function(e){return e.cartItems}));return Object(T.jsxs)(P.a,{className:n.root,children:[Object(T.jsx)(K.a,{className:n.media,image:t.image,title:t.name}),Object(T.jsxs)(X.a,{children:[Object(T.jsxs)("div",{className:n.cardContent,children:[Object(T.jsx)(l.a,{variant:"h6",gutterBottom:!0,children:t.name}),Object(T.jsxs)(l.a,{variant:"h6",children:["$",t.price]})]}),Object(T.jsx)(l.a,{variant:"body2",color:"textSecondary",children:t.description})]}),Object(T.jsx)(F.a,{disableSpacing:!0,className:n.cardActions,children:Object(T.jsx)(d.a,{"aria-label":"Add to Cart",onClick:function(){return a({type:"ADD_CART",item:e=t,ip:e.ip});var e},disabled:function(){if(c.find((function(e){return e.id===t.id})))return!0}(),children:Object(T.jsx)(H.a,{})})})]})},ee=Object(b.a)((function(e){return{toolbar:e.mixins.toolbar,content:Object(u.a)({flexGrow:1,backgroundColor:e.palette.background.default},e.breakpoints.up("md"),{width:940,margin:"0px auto",padding:"0px 16px"}),root:{flexGrow:1}}})),te=function(e){var t=e.products,n=ee();return Object(T.jsxs)("main",{className:n.content,children:[Object(T.jsx)("div",{className:n.toolbar}),Object(T.jsx)(Q.a,{container:!0,justify:"center",spacing:4,children:t.map((function(e){return Object(T.jsx)(Q.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:Object(T.jsx)($,{product:e})},e.name)}))})]})},ne=n(19),ae=n(166),ce=n(167),ie=n(162),re=n(163),se=Object(b.a)((function(e){return{option:Object(u.a)({display:"flex",marginTop:"90px",marginLeft:"auto"},e.breakpoints.up("md"),{width:940,margin:"90px auto 0px",padding:"0px 16px"}),formControl:{margin:e.spacing(1),minWidth:120}}})),oe=function(e){var t=e.items,n=e.products,c=e.setProducts,i=se(),s=Object(a.useState)(!1),o=Object(r.a)(s,2),l=o[0],d=o[1],j=Object(a.useState)(!1),p=Object(r.a)(j,2),u=p[0],b=p[1],m=Object(a.useState)(""),h=Object(r.a)(m,2),O=h[0],g=h[1],x=Object(a.useState)(""),y=Object(r.a)(x,2),f=y[0],w=y[1];return Object(T.jsx)("div",{className:i.option,children:Object(T.jsxs)("div",{style:{marginLeft:"auto"},children:[Object(T.jsxs)(ie.a,{className:i.formControl,children:[Object(T.jsx)(ae.a,{id:"demo-controlled-open-select-label",children:"\u4f9d\u54c1\u724c\u6392\u5e8f"}),Object(T.jsxs)(re.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:l,onClose:function(){d(!1)},onOpen:function(){d(!0)},value:O,onChange:function(e){g(e.target.value),"all"===e.target.value?(c(t),w("")):(c(t.filter((function(t){return t.brand===e.target.value}))),w(""))},children:[Object(T.jsx)(ce.a,{value:"all",children:Object(T.jsx)("em",{children:"\u5168\u90e8\u54c1\u724c"})}),Object(T.jsx)(ce.a,{value:"+NICHE",children:"+NICHE"}),Object(T.jsx)(ce.a,{value:"OWNDAYS",children:"OWNDAYS"}),Object(T.jsx)(ce.a,{value:"John Dillinger",children:"John Dillinger"}),Object(T.jsx)(ce.a,{value:"Memory Metal",children:"Memory Metal"}),Object(T.jsx)(ce.a,{value:"AIR Ultem Classic",children:"AIR Ultem Classic"}),Object(T.jsx)(ce.a,{value:"FUWA CELLU",children:"FUWA CELLU"}),Object(T.jsx)(ce.a,{value:"lillybell",children:"lillybell"}),Object(T.jsx)(ce.a,{value:"ECO2XY",children:"ECO2XY"}),Object(T.jsx)(ce.a,{value:"Junni",children:"Junni"}),Object(T.jsx)(ce.a,{value:"Graph Belle",children:"Graph Belle"})]})]}),Object(T.jsxs)(ie.a,{className:i.formControl,children:[Object(T.jsx)(ae.a,{id:"demo-controlled-open-select-label",children:"\u4f9d\u50f9\u683c\u6392\u5e8f"}),Object(T.jsxs)(re.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:u,onClose:function(){b(!1)},onOpen:function(){b(!0)},value:f,onChange:function(e){switch(w(e.target.value),e.target.value){default:var t=Object(ne.a)(n).sort((function(e,t){return e.id-t.id}));c(t);break;case"lowToHigh":var a=Object(ne.a)(n).sort((function(e,t){return e.price-t.price}));c(a);break;case"highToLow":var i=Object(ne.a)(n).sort((function(e,t){return t.price-e.price}));c(i)}},children:[Object(T.jsx)(ce.a,{value:"all",children:Object(T.jsx)("em",{children:"--------"})}),Object(T.jsx)(ce.a,{value:"lowToHigh",children:"\u4f4e\u2192\u9ad8"}),Object(T.jsx)(ce.a,{value:"highToLow",children:"\u9ad8\u2192\u4f4e"})]})]})]})})},le=function(){var e=Object(O.c)((function(e){return e.productsReducer})),t=Object(a.useState)(e),n=Object(r.a)(t,2),c=n[0],i=n[1];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(Z,{}),Object(T.jsx)(oe,{items:e,products:c,setProducts:i}),Object(T.jsx)(te,{products:c})]})},de=n(37),je=[{id:1,name:"NC2009B",brand:"+NICHE",description:"+NICHE",price:2480,image:"https://jp.owndays.com/storage/products/QNDnE8E8VnvkvqsTU24ezvAPXavo8MhJQ63RkQ1c.jpeg",quantity:1},{id:2,name:"NC1022B",brand:"+NICHE",description:"+NICHE",price:1980,image:"https://jp.owndays.com/storage/products/asAdWsdwqqBN2vk31ZnvznEMnRw340bLlrcru2hn.jpeg",quantity:1},{id:3,name:"SUN1057B",brand:"OWNDAYS",description:"OWNDAYS",price:1680,image:"https://jp.owndays.com/storage/products/HJJjQhuRWI3r5w46GtzehKNzEZCS3YHJ9zaTPXKM.jpeg",quantity:1},{id:4,name:"SUN1058B",brand:"OWNDAYS",description:"OWNDAYS",price:1590,image:"https://jp.owndays.com/storage/products/dKT7r5ru4B9UtFhHFqecKGFYBY4uHR8igc3bACRn.jpeg",quantity:1},{id:5,name:"SNP1013T",brand:"OWNDAYS",description:"OWNDAYS SNAP",price:2990,image:"https://jp.owndays.com/storage/products/Qch4vwtOTnjoLAkFK47q1Uw5WlPmLd6aMSU1dJt0.jpeg",quantity:1},{id:6,name:"JD1032B",brand:"John Dillinger",description:"John Dillinger",price:3990,image:"https://jp.owndays.com/storage/products/eOS6Z3LZMjWD55gnL9DoAtjJP8HYCroL6rRs6rzB.jpeg",quantity:1},{id:7,name:"MM1012B",brand:"Memory Metal",description:"Memory Metal",price:2480,image:"https://jp.owndays.com/storage/products/fWSL2ygtSvk4hL7Pw3Ha8WW5Nl38EmY6F2dgixlT.jpeg",quantity:1},{id:8,name:"AU2080T",brand:"AIR Ultem Classic",description:"AIR Ultem Classic",price:1880,image:"https://jp.owndays.com/storage/products/2TpsAW1CZngV9nhNHFDiLwr2pwOaBjcB0yuj9yIU.jpeg",quantity:1},{id:9,name:"FC2022S",brand:"FUWA CELLU",description:"FUWA CELLU",price:2380,image:"https://jp.owndays.com/storage/products/O2cPS7fXAPTj8GInOgW5R62fSdWgQexkNU8UQacx.jpeg",quantity:1},{id:10,name:"MM1010B",brand:"Memory Metal",description:"Memory Metal",price:2680,image:"https://jp.owndays.com/storage/products/TWWXuirkEymbXwvRGKlrO16jkQXPojMPUavDH1Pr.jpeg",quantity:1},{id:11,name:"PU2001T",brand:"OWNDAYS",description:"\u96fb\u5f71\u300c\u7159\u56ea\u4e4b\u57ce\u300d\xd7 OWNDAYS",price:2990,image:"https://jp.owndays.com/storage/products/UI1fPj4oqIQiChk7vsLWVxyu6V1X5KEd7jmnFDIG.jpeg",quantity:1},{id:12,name:"LB1011G",brand:"lillybell",description:"lillybell",price:3280,image:"https://jp.owndays.com/storage/products/mQLy5l2riG5HFLwEhteF5cELhCKsmn6aAIOS1FRy.jpeg",quantity:1},{id:13,name:"LB1010G",brand:"lillybell",description:"lillybell",price:2400,image:"https://jp.owndays.com/storage/products/xWr7E179MYa7zVceOhSwdlHLFm43yW6wJqCDVar5.jpeg",quantity:1},{id:14,name:"LB2005J",brand:"lillybell",description:"lillybell",price:3990,image:"https://jp.owndays.com/storage/products/BcBAaDSyBk7SPLGq1NRy3U5Hd7ER5fBk.jpg",quantity:1},{id:15,name:"MM1002B",brand:"Memory Metal",description:"Memory Metal",price:4200,image:"https://jp.owndays.com/storage/products/zn6byt9BNMhuiWT5aG3gLTAyEkKyQaG1UGbeDzyN.jpeg",quantity:1},{id:16,name:"LB2006J",brand:"lillybell",description:"lillybell",price:3500,image:"https://jp.owndays.com/storage/products/ZpeUHpnPJOQPHkD0po7zPWhjaJgmEMZGrFV8MuqI.jpeg",quantity:1},{id:17,name:"ECO2017K",brand:"ECO2XY",description:"ECO2XY",price:1780,image:"https://jp.owndays.com/storage/products/Re1vJz0ddBpyXZwdvQggjakvWarfx0mNNzBJOhcZ.jpeg",quantity:1},{id:18,name:"ECO2009",brand:"ECO2XY",description:"ECO2XY",price:3280,image:"https://jp.owndays.com/storage/products/tYnVY0XUbAQQGnD5smhy8x0SJL8S3Tqh.jpg",quantity:1},{id:19,name:"JU2027N",brand:"Junni",description:"Junni",price:2990,image:"https://jp.owndays.com/storage/products/QvfnmYLkAVD0IgsgNbcfHo8gSwIizETcVYhdffoY.jpeg",quantity:1},{id:20,name:"JU1016K",brand:"Junni",description:"Junni",price:2880,image:"https://jp.owndays.com/storage/products/xNCEJy3ZvKb733JH4W8CIjB9fYjIYraSiLRp6eia.jpeg",quantity:1},{id:21,name:"JU1015G",brand:"Junni",description:"Junni",price:2600,image:"https://jp.owndays.com/storage/products/M3UY1A4tktDB80MqPLneg43xz9Y2tvXj.jpg",quantity:1},{id:22,name:"GB1026B",brand:"Graph Belle",description:"Graph Belle",price:2260,image:"https://jp.owndays.com/storage/products/8CeBOgIdfPHAb6U1TDNkVrfar1uRm9BFmZVvDoZJ.jpeg",quantity:1},{id:23,name:"GB2027B",brand:"Graph Belle",description:"Graph Belle",price:2780,image:"https://jp.owndays.com/storage/products/S6nMQhHjEttsXM4Uuon0ODloJhmIkLp7ajs6PQoR.jpeg",quantity:1},{id:24,name:"GB2017G",brand:"Graph Belle",description:"Graph Belle",price:3580,image:"https://jp.owndays.com/storage/products/p30l8pPGO3DTJhwR86OtswDMqCDwkofbt5C1x5kk.jpeg",quantity:1}],pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je;return e},ue=[],be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0,n=JSON.parse(JSON.stringify(e));switch(t.type){case"ADD_CART":return n.push(t.item),n;case"REMOVE_CART":return n.splice(t.index,1),n;case"INCREMENT_QUANTITY":return n[t.index].quantity+=1,n;case"DECREMENT_QUANTITY":return n[t.index].quantity<2||(n[t.index].quantity-=1),n;case"clearAll":return n.length=0,n;default:return e}},me=Object(de.b)({productsReducer:pe,cartItems:be}),he=Object(de.c)(me,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(T.jsx)(O.a,{store:he,children:Object(T.jsx)(le,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.08c7e970.chunk.js.map