(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n.n(c),s=n(5),r=n(6),i=n(8),u=n(7),l=n(1),o=n.n(l),j=(n(13),n(3)),g=(n(14),n(0)),b=function(){var e=Object(l.useState)(1),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(l.useState)(1),s=Object(j.a)(a,2),r=s[0],i=s[1];return Object(g.jsxs)("div",{className:"Carousel",children:[Object(g.jsx)("ul",{className:"Carousel__list",children:Object(g.jsx)("li",{children:Object(g.jsx)("img",{src:"./img/".concat(n,".png"),alt:"".concat(n)})})}),Object(g.jsxs)("ul",{className:"Carousel__list",children:[Object(g.jsx)("button",{type:"button",className:"Carousel__btn",onClick:function(){return n>1&&c(n-r)},children:"Prev"}),Object(g.jsx)("button",{type:"button",className:"Carousel__btn",onClick:function(){return n<10&&c(n+r)},children:"Next"})]}),Object(g.jsx)("input",{type:"number",className:"Carousel__inp",defaultValue:3,min:1,max:10,onChange:function(){return i(2)}})]})},m=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state.images;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("h1",{children:["Carousel with ",e.length," images"]}),Object(g.jsx)(b,{})]})}}]),n}(o.a.Component),p=m;a.a.render(Object(g.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.214611b0.chunk.js.map