(this["webpackJsonpcrwn-clothing-2021"]=this["webpackJsonpcrwn-clothing-2021"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),i=n(44),r=n.n(i),s=n(30),l=n(18),o=n(57),u=n(33),b=n(49),d=n(58),m=n.n(d),p=n(59),j=n.n(p),h=n(14),O="SET_CURRENT_USER",g={currentUser:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;return t.type===O?Object(h.a)(Object(h.a)({},e),{},{currentUser:t.payload}):e},v={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"},x=n(26),y=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(x.a)(e),[Object(h.a)(Object(h.a)({},t),{},{quantity:1})])},N=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{quantity:e.quantity-1}):e}))},k={hidden:!0,cartItems:[]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.TOGGLE_CART_HIDDEN:return Object(h.a)(Object(h.a)({},e),{},{hidden:!e.hidden});case v.ADD_ITEM:return Object(h.a)(Object(h.a)({},e),{},{cartItems:y(e.cartItems,t.payload)});case v.REMOVE_ITEM:return Object(h.a)(Object(h.a)({},e),{},{cartItems:N(e.cartItems,t.payload)});case v.CLEAR_ITEM_FROM_CART:return Object(h.a)(Object(h.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case v.CLEAR_CART:return Object(h.a)(Object(h.a)({},e),{},{cartItems:[]});default:return e}},C={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type,e},U={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return t.type,e},T={key:"root",storage:j.a,whitelist:["cart"]},A=Object(u.b)({user:f,cart:w,directory:E,shop:I}),S=Object(b.a)(T,A),R=[m.a],M=Object(u.c)(S,u.a.apply(void 0,R)),_=Object(b.b)(M),B=(n(75),n(1)),P=n.n(B),D=n(3),L=n(2),G=n(4),H=n(12),q=n(13),W=n(19),z=n(16),V=n(35),J=Object(z.a)([function(e){return e.directory}],(function(e){return e.sections})),F=(n(77),n(6)),X=Object(W.g)((function(e){var t=e.title,n=e.imageUrl,c=e.size,a=e.history,i=e.linkUrl,r=e.match;return Object(F.jsxs)("div",{className:"".concat(c," menu-item"),onClick:function(){return a.push("".concat(r.url).concat(i))},children:[Object(F.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(F.jsxs)("div",{className:"content",children:[Object(F.jsx)("h1",{className:"title",children:t}),Object(F.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),K=(n(82),["id"]),Q=Object(z.b)({sections:J}),Y=Object(l.b)(Q)((function(e){var t=e.sections;return Object(F.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(V.a)(e,K);return Object(F.jsx)(X,Object(h.a)({},n),t)}))})})),Z=(n(83),function(){return Object(F.jsx)("div",{className:"homepage",children:Object(F.jsx)(Y,{})})}),$=(n(84),["children","isGoogleSignIn","inverted"]),ee=function(e){var t=e.children,n=e.isGoogleSignIn,c=e.inverted,a=Object(V.a)(e,$);return Object(F.jsx)("button",Object(h.a)(Object(h.a)({className:"".concat(c?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},a),{},{children:t}))},te=function(){return{type:v.TOGGLE_CART_HIDDEN}},ne=function(e){return{type:v.ADD_ITEM,payload:e}},ce=(n(85),Object(l.b)(null,(function(e){return{addItem:function(t){return e(ne(t))}}}))((function(e){var t=e.item,n=e.addItem,c=t.name,a=t.price,i=t.imageUrl;return Object(F.jsxs)("div",{className:"collection-item",children:[Object(F.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),Object(F.jsxs)("div",{className:"collection-footer",children:[Object(F.jsx)("span",{className:"name",children:c}),Object(F.jsxs)("span",{className:"price",children:["\u20ac",a]})]}),Object(F.jsx)(ee,{onClick:function(){return n(t)},inverted:!0,children:"Add to cart"})]})}))),ae=(n(86),function(e){var t=e.title,n=e.items;return Object(F.jsxs)("div",{className:"collection-preview",children:[Object(F.jsx)("h1",{className:"title",children:t}),Object(F.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<5})).map((function(e){return Object(F.jsx)(ce,{item:e},e.id)}))})]})}),ie=Object(z.a)([function(e){return e.shop}],(function(e){return e.collections})),re=Object(z.a)([ie],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),se=(n(87),["id"]),le=Object(z.b)({collections:re}),oe=Object(l.b)(le)((function(e){var t=e.collections;return Object(F.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(V.a)(e,se);return Object(F.jsx)(ae,Object(h.a)({},n),t)}))})})),ue=(n(88),Object(l.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(z.a)([ie],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,c=t.items;return Object(F.jsxs)("div",{className:"collection-page",children:[Object(F.jsx)("h2",{className:"title",children:n}),Object(F.jsx)("div",{className:"items",children:c.map((function(e){return Object(F.jsx)(ce,{item:e},e.id)}))})]})}))),be=function(e){var t=e.match;return Object(F.jsxs)("div",{className:"shop-page",children:[Object(F.jsx)(W.b,{exact:!0,path:"".concat(t.path),component:oe}),Object(F.jsx)(W.b,{path:"".concat(t.path,"/:collectionId"),component:ue})]})},de=n(40),me=(n(104),n(90),function(){var e=Object(D.a)(P.a.mark((function e(t,n){var c,a,i,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=je.doc("users/".concat(t.uid)),e.next=5,c.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,i=t.email,r=new Date,e.prev=9,e.next=12,c.set(Object(h.a)({displayName:a,email:i,createdAt:r},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());de.a.initializeApp({apiKey:"AIzaSyCK26AWlrchSCzKL6X_Gxi2PR27PnOQCX4",authDomain:"custom-hooks-16027.firebaseapp.com",databaseURL:"https://custom-hooks-16027-default-rtdb.europe-west1.firebasedatabase.app",projectId:"custom-hooks-16027",storageBucket:"custom-hooks-16027.appspot.com",messagingSenderId:"497578878676",appId:"1:497578878676:web:cb1606bc907d48107cbd41"});var pe=de.a.auth(),je=de.a.firestore(),he=new de.a.auth.GoogleAuthProvider;he.setCustomParameters({prompt:"select_account"});var Oe,ge,fe,ve,xe,ye,Ne,ke,we,Ce,Ee,Ue,Ie,Te,Ae,Se=function(){return pe.signInWithPopup(he)},Re=(de.a,function(e){return e.cart}),Me=Object(z.a)([Re],(function(e){return e.cartItems})),_e=Object(z.a)([Re],(function(e){return e.hidden})),Be=Object(z.a)([Me],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Pe=Object(z.a)([Me],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),De=["title","titleId"];function Le(){return Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},Le.apply(this,arguments)}function Ge(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function He(e,t){var n=e.title,a=e.titleId,i=Ge(e,De);return c.createElement("svg",Le({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},i),n?c.createElement("title",{id:a},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Oe||(Oe=c.createElement("g",null)),ge||(ge=c.createElement("g",null)),fe||(fe=c.createElement("g",null)),ve||(ve=c.createElement("g",null)),xe||(xe=c.createElement("g",null)),ye||(ye=c.createElement("g",null)),Ne||(Ne=c.createElement("g",null)),ke||(ke=c.createElement("g",null)),we||(we=c.createElement("g",null)),Ce||(Ce=c.createElement("g",null)),Ee||(Ee=c.createElement("g",null)),Ue||(Ue=c.createElement("g",null)),Ie||(Ie=c.createElement("g",null)),Te||(Te=c.createElement("g",null)),Ae||(Ae=c.createElement("g",null)))}var qe=c.forwardRef(He),We=(n.p,n(92),Object(z.b)({itemCount:Be})),ze=Object(l.b)(We,(function(e){return{toggleCartHidden:function(){return e(te())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(F.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(F.jsx)(qe,{className:"shopping-icon"}),Object(F.jsxs)("span",{className:"item-count",children:[n," "]})]})})),Ve=(n(93),function(e){var t=e.item,n=t.imageUrl,c=t.price,a=t.name,i=t.quantity;return Object(F.jsxs)("div",{className:"cart-item",children:[Object(F.jsx)("img",{src:n,alt:"item"}),Object(F.jsxs)("div",{className:"item-details",children:[Object(F.jsx)("span",{className:"name",children:a}),Object(F.jsxs)("span",{className:"price",children:[i," x \u20ac",c]})]})]})}),Je=(n(94),Object(z.b)({cartItems:Me})),Fe=Object(W.g)(Object(l.b)(Je)((function(e){var t=e.cartItems,n=e.history,c=e.dispatch;return Object(F.jsxs)("div",{className:"cart-dropdown",children:[Object(F.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(F.jsx)(Ve,{item:e},e.id)})):Object(F.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(F.jsx)(ee,{onClick:function(){n.push("/checkout"),c(te())},children:"GO TO CHECKOUT"})]})}))),Xe=Object(z.a)([function(e){return e.user}],(function(e){return e.currentUser})),Ke=n(61),Qe=(n(95),Object(z.b)({currentUser:Xe,hidden:_e})),Ye=Object(l.b)(Qe)((function(e){var t=e.currentUser,n=e.hidden;return Object(F.jsxs)("div",{className:"header",children:[Object(F.jsxs)("div",{className:"companyLogo",children:[Object(F.jsx)("h1",{className:"company",children:"CRWN"}),Object(F.jsx)(s.b,{to:"/",className:"logo-container",children:Object(F.jsx)(Ke.a,{className:"logo-text"})}),Object(F.jsx)("h1",{className:"company",children:"Clothing Inc."})]}),Object(F.jsxs)("div",{className:"options",children:[Object(F.jsx)(s.b,{to:"/shop",className:"option",children:"SHOP"}),Object(F.jsx)(s.b,{to:"/contact",className:"option",children:"CONTACT"}),t?Object(F.jsx)("div",{className:"option",onClick:function(){return pe.signOut()},children:"SIGN OUT"}):Object(F.jsx)(s.b,{className:"option",to:"/signin",children:"SIGN IN"}),Object(F.jsx)(ze,{})]}),n?null:Object(F.jsx)(Fe,{})]})})),Ze=n(5),$e=(n(96),["handleChange","label"]),et=function(e){var t=e.handleChange,n=e.label,c=Object(V.a)(e,$e);return Object(F.jsxs)("div",{className:"group",children:[Object(F.jsx)("input",Object(h.a)({className:"form-input",onChange:t},c)),n?Object(F.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:n}):null]})},tt=(n(97),function(e){Object(H.a)(n,e);var t=Object(q.a)(n);function n(e){var c;return Object(L.a)(this,n),(c=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=c.state,n=t.email,a=t.password;try{pe.signInWithEmailAndPassword(n,a),c.setState({email:"",password:""})}catch(i){console.log(i)}},c.handleChange=function(e){var t=e.target,n=t.value,a=t.name;c.setState(Object(Ze.a)({},a,n))},c.state={email:"",password:""},c}return Object(G.a)(n,[{key:"render",value:function(){return Object(F.jsxs)("div",{className:"sign-in",children:[Object(F.jsx)("h2",{children:"I have an account"}),Object(F.jsx)("span",{children:"Sign in with your email and password"}),Object(F.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(F.jsx)(et,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),Object(F.jsx)(et,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object(F.jsxs)("div",{className:"buttons",children:[Object(F.jsx)(ee,{type:"submit",children:"Sign In"}),Object(F.jsx)(ee,{type:"button",onClick:Se,isGoogleSignIn:!0,children:"Sign In With Google"})]})]})]})}}]),n}(a.a.Component)),nt=(n(98),function(e){Object(H.a)(n,e);var t=Object(q.a)(n);function n(){var e;return Object(L.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(D.a)(P.a.mark((function t(n){var c,a,i,r,s,l,o;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),c=e.state,a=c.displayName,i=c.email,r=c.password,s=c.confirmPassword,r===s){t.next=5;break}return alert("Passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,pe.createUserWithEmailAndPassword(i,r);case 8:return l=t.sent,o=l.user,t.next=12,me(o,{displayName:a});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,c=n.name,a=n.value;e.setState(Object(Ze.a)({},c,a))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(G.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,c=e.password,a=e.confirmPassword;return Object(F.jsxs)("div",{className:"sign-up",children:[Object(F.jsx)("h2",{className:"title",children:"I don't have an account"}),Object(F.jsx)("span",{children:"Sign up with your email and password"}),Object(F.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(F.jsx)(et,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(F.jsx)(et,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(F.jsx)(et,{type:"password",name:"password",value:c,onChange:this.handleChange,label:"Password",required:!0}),Object(F.jsx)(et,{type:"password",name:"confirmPassword",value:a,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(F.jsx)("div",{className:"button",children:Object(F.jsx)(ee,{type:"submit",children:"SIGN UP"})})]})]})}}]),n}(a.a.Component)),ct=nt,at=(n(99),function(){return Object(F.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(F.jsx)(tt,{}),Object(F.jsx)(ct,{})]})}),it=n(62),rt=n(55),st=(n(100),Object(l.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:v.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(ne(t))},removeItem:function(t){return e(function(e){return{type:v.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,c=e.addItem,a=e.removeItem,i=t.name,r=t.imageUrl,s=t.price,l=t.quantity;return Object(F.jsxs)("div",{className:"checkout-item",children:[Object(F.jsx)("div",{className:"image-container",children:Object(F.jsx)("img",{src:r,alt:"item"})}),Object(F.jsx)("span",{className:"name",children:i}),Object(F.jsxs)("span",{className:"quantity",children:[Object(F.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:Object(F.jsx)(rt.a,{})}),Object(F.jsx)("span",{className:"value",children:l}),Object(F.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:Object(F.jsx)(rt.b,{})})]}),Object(F.jsxs)("span",{className:"price",children:["\u20ac",s]}),Object(F.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:Object(F.jsx)(it.a,{})})]})}))),lt=n(63),ot=n.n(lt),ut=function(e){var t=e.price,n=100*t;return Object(F.jsx)(ot.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_51IuXINH8eTfMrPXrg1mXXc0AmQCLQbjV34ptzCBekrM5uHKAXAD6Sq0osaGfAMViE8eFBT8qRxNzUQHn6EHzwZCD00Dgy8f05q"})},bt=(n(101),Object(z.b)({cartItems:Me,cartTotal:Pe})),dt=Object(l.b)(bt)((function(e){var t=e.cartItems,n=e.cartTotal;return Object(F.jsxs)("div",{className:"checkout-page",children:[Object(F.jsxs)("div",{className:"checkout-header",children:[Object(F.jsx)("div",{className:"header-block",children:Object(F.jsx)("span",{children:"Product"})}),Object(F.jsx)("div",{className:"header-block",children:Object(F.jsx)("span",{children:"Description"})}),Object(F.jsx)("div",{className:"header-block",children:Object(F.jsx)("span",{children:"Quantity"})}),Object(F.jsx)("div",{className:"header-block",children:Object(F.jsx)("span",{children:"Price"})}),Object(F.jsx)("div",{className:"header-block",children:Object(F.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(F.jsx)(st,{cartItem:e},e.id)})),Object(F.jsxs)("div",{className:"total",children:["TOTAL: \u20ac",n]}),Object(F.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments*",Object(F.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/23 - CVV: 123"]}),Object(F.jsx)("div",{className:"button",children:Object(F.jsx)(ut,{price:n})})]})})),mt=(n(102),function(e){Object(H.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(L.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).unsubscribeFromAuth=null,e}return Object(G.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=pe.onAuthStateChanged(function(){var t=Object(D.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,me(n);case 3:t.sent.onSnapshot((function(t){e(Object(h.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(F.jsxs)("div",{children:[Object(F.jsx)(Ye,{}),Object(F.jsxs)(W.d,{children:[Object(F.jsx)(W.b,{exact:!0,path:"/",component:Z}),Object(F.jsx)(W.b,{path:"/shop",component:be}),Object(F.jsx)(W.b,{exact:!0,path:"/checkout",component:dt}),Object(F.jsx)(W.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(F.jsx)(W.a,{to:"/"}):Object(F.jsx)(at,{})}})]})]})}}]),n}(a.a.Component)),pt=Object(z.b)({currentUser:Xe}),jt=Object(l.b)(pt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:O,payload:e}}(t))}}}))(mt);r.a.render(Object(F.jsx)(l.a,{store:M,children:Object(F.jsx)(s.a,{children:Object(F.jsx)(o.a,{persistor:_,children:Object(F.jsx)(jt,{})})})}),document.getElementById("root"))},75:function(e,t,n){},77:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.2714fe6d.chunk.js.map