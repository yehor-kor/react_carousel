(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),s=n(5),c=n(6),r=n(8),l=n(7),u=n(1),o=n.n(u),m=(n(13),n(2)),j=(n(14),n(0)),b=function(e){var t=e.images,n=e.step,a=void 0===n?1:n,i=e.frameSize,s=void 0===i?3:i,c=e.itemWidth,r=void 0===c?130:c,l=e.animationDuration,o=void 0===l?1e3:l,b=Object(u.useState)(1),h=Object(m.a)(b,2),g=h[0],d=h[1],p=Object(u.useState)(a),O=Object(m.a)(p,2),x=O[0],f=O[1],_=Object(u.useState)(s),v=Object(m.a)(_,2),C=v[0],y=v[1],N=Object(u.useState)(r),w=Object(m.a)(N,2),S=w[0],k=w[1],F=Object(u.useState)(o),z=Object(m.a)(F,2),V=z[0],A=z[1];return setTimeout((function(){d((function(e){return e<t.length-1?e+x:1}))}),V),Object(j.jsxs)("div",{className:"Carousel",style:{width:150*C,height:150*C},children:[Object(j.jsx)("ul",{className:"Carousel__list",children:t.find((function(e,t){return t===g}))&&Object(j.jsx)("li",{children:Object(j.jsx)("img",{src:"".concat(t[g]),alt:"".concat(g),width:r,style:{width:S}})})}),Object(j.jsxs)("ul",{className:"Carousel__list",children:[Object(j.jsx)("button",{type:"button",className:"Carousel__btn",onClick:function(){return g+x>1&&d(g-x)},children:"Prev"}),Object(j.jsx)("button",{type:"button",className:"Carousel__btn",onClick:function(){return g+x<t.length-1&&d(g+x)},"data-cy":"next",children:"Next"})]}),Object(j.jsxs)("ul",{className:"Carousel__options",children:[Object(j.jsx)("label",{htmlFor:"step",children:"Step:"}),Object(j.jsx)("input",{type:"number",className:"Carousel__inp",name:"step",defaultValue:x,min:1,max:10,onChange:function(e){return f(+e.target.value)}}),Object(j.jsx)("label",{htmlFor:"frame-size",children:"Frame size:"}),Object(j.jsx)("input",{type:"number",className:"Carousel__inp",name:"frame-size",defaultValue:s,min:1,max:10,onChange:function(e){return y(+e.target.value)}}),Object(j.jsx)("label",{htmlFor:"width",children:"Item width:"}),Object(j.jsx)("input",{type:"number",className:"Carousel__inp",name:"width",defaultValue:r,min:50,max:200,onChange:function(e){return k(+e.target.value)}}),Object(j.jsx)("label",{htmlFor:"duration",children:"Animation duration:"}),Object(j.jsx)("input",{type:"number",className:"Carousel__inp",name:"duration",defaultValue:o,min:100,max:1e4,step:100,onChange:function(e){return A(+e.target.value)}})]})]})},h=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.images;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",e.length," images"]}),Object(j.jsx)(b,{images:this.state.images})]})}}]),n}(o.a.Component),g=h;i.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.25e22d08.chunk.js.map