(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(4),s=a.n(n),i=a(5),c=a(6),r=a(8),l=a(7),u=a(1),o=a.n(u),m=(a(13),a(2)),j=(a(14),a(0)),b=function(e){var t=e.images,a=e.step,n=void 0===a?3:a,s=e.frameSize,i=void 0===s?3:s,c=e.itemWidth,r=void 0===c?130:c,l=e.animationDuration,o=void 0===l?1e3:l,b=e.infinite,d=void 0!==b&&b,h=Object(u.useState)(0),p=Object(m.a)(h,2),g=p[0],O=p[1],x=Object(u.useState)(n),_=Object(m.a)(x,2),f=_[0],v=_[1],C=Object(u.useState)(i),N=Object(m.a)(C,2),y=N[0],w=N[1],S=Object(u.useState)(r),F=Object(m.a)(S,2),k=F[0],z=F[1],V=Object(u.useState)(o),A=Object(m.a)(V,2),D=A[0],I=A[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"Carousel",children:[Object(j.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(k*y,"px")},children:t.map((function(e,a){return Object(j.jsx)("li",{className:"Carousel__item",style:{transition:"all ".concat(D,"ms linear"),transform:"translateX(".concat(g<=t.length-2?-k*g:-k*(t.length-3),"px)")},children:Object(j.jsx)("img",{src:"".concat(e),alt:"".concat(a+1),style:{width:"".concat(k,"px")}})},e)}))}),Object(j.jsxs)("ul",{className:"Carousel__group",children:[Object(j.jsx)("button",{type:"button",className:"Carousel__btn",onClick:function(){return g>0?O((function(e){return e-f})):d&&O(t.length)},children:"Prev"}),Object(j.jsx)("button",{type:"button",className:"Carousel__btn",onClick:function(){return g+f<=t.length-1?O((function(e){return e+f})):d&&O(0)},"data-cy":"next",children:"Next"})]})]}),Object(j.jsxs)("ul",{className:"Carousel__options",children:[Object(j.jsxs)("div",{className:"Carousel__item",children:[Object(j.jsx)("label",{htmlFor:"step",children:"Step:"}),Object(j.jsx)("input",{type:"number",className:"Carousel__inp",name:"step",defaultValue:n,min:1,max:10,onChange:function(e){return v(+e.target.value)}})]}),Object(j.jsxs)("div",{className:"Carousel__item",children:[Object(j.jsx)("label",{htmlFor:"frame-size",children:"Frame size:"}),Object(j.jsx)("input",{type:"number",className:"Carousel__inp",name:"frame-size",defaultValue:i,min:1,max:10,onChange:function(e){return w(+e.target.value)}})]}),Object(j.jsxs)("div",{className:"Carousel__item",children:[Object(j.jsx)("label",{htmlFor:"width",children:"Item width:"}),Object(j.jsx)("input",{type:"number",className:"Carousel__inp",name:"width",defaultValue:r,min:50,max:200,onChange:function(e){return z(+e.target.value)}})]}),Object(j.jsxs)("div",{className:"Carousel__item",children:[Object(j.jsx)("label",{htmlFor:"duration",children:"Animation duration:"}),Object(j.jsx)("input",{type:"number",className:"Carousel__inp",name:"duration",defaultValue:o,min:100,max:1e4,step:100,onChange:function(e){return I(+e.target.value)}})]})]})]})},d=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.images;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",e.length," images"]}),Object(j.jsx)(b,{images:this.state.images,step:3,frameSize:3,itemWidth:130,animationDuration:1e3})]})}}]),a}(o.a.Component),h=d;s.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.697472c0.chunk.js.map