(this["webpackJsonpreact-memory-card"]=this["webpackJsonpreact-memory-card"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);a(6);var c=a(1),s=a.n(c),n=a(4),r=a.n(n),i=a(2),u=a(0);var j=function(e){var t=Object(c.useState)(!1),a=Object(i.a)(t,2),s=a[0],n=a[1];return Object(c.useEffect)((function(){"running"!==e.gameStatus&&n(!1)}),[e.gameStatus]),Object(u.jsx)("div",{className:"character",onClick:function(t){"running"===e.gameStatus&&(!0===s?e.gameSub("lost"):(n(!0),e.gameSub("increment"),e.gameSub("shuffle")))},children:Object(u.jsx)("img",{src:e.src,alt:"Animal Card",className:"character-img"})})};var b=function(e){return Object(u.jsx)(s.a.Fragment,{children:Object(u.jsx)("div",{className:"gameboard",children:e.characterArr.map((function(t){return Object(u.jsx)(j,{name:t.name,gameStatus:e.gameStatus,gameSub:e.gameSub,src:t.src},t.key)}))})})},m=[a.p+"static/media/1.b299800c.jpg",a.p+"static/media/2.dd917475.jpg",a.p+"static/media/3.00428189.jpg",a.p+"static/media/4.eb2d13b4.jpg",a.p+"static/media/5.c47ee49c.jpg",a.p+"static/media/6.e3024926.jpg",a.p+"static/media/7.60b52218.jpg",a.p+"static/media/8.445e8477.jpg",a.p+"static/media/9.14d3f520.jpg",a.p+"static/media/10.b83e43bc.jpg",a.p+"static/media/11.3ca27bbd.jpg",a.p+"static/media/12.f2855672.jpg"];var d=function(e){return"lost"===e.gameStatus?Object(u.jsx)("div",{className:"lost-bar bar",children:"You Lost"}):"won"===e.gameStatus?Object(u.jsx)("div",{className:"win-bar bar",children:"You Won!"}):null},o=a(5),g=a.n(o);var l=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(0),r=Object(i.a)(n,2),j=r[0],o=r[1],l=Object(c.useState)("running"),p=Object(i.a)(l,2),f=p[0],O=p[1],h=Object(c.useState)(function(){for(var e=[],t=0;t<m.length;t++)e.push({src:m[t],key:t});return e}()),S=Object(i.a)(h,2),x=S[0],v=S[1];function N(e){if("lost"!==e){if("increment"!==e)return"reset"===e?(o(0),void O("running")):void("shuffle"===e&&v(g.a.shuffle(x)));o(j+1)}else O("lost")}return Object(c.useEffect)((function(){j>a&&s(j),j>=x.length&&O("won")}),[j,a]),Object(c.useEffect)((function(){"lost"===f&&o(0)}),[f]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{className:"heading",children:"Memory Cards"}),Object(u.jsxs)("h2",{className:"status-bar bar",children:["Score: ",j," | BestScore: ",a,Object(u.jsx)("button",{className:"reset-button",onClick:function(){N("reset")},children:"Reset"})]}),Object(u.jsx)(d,{gameStatus:f,setGameStatus:O})]}),Object(u.jsx)(b,{characterArr:x,gameStatus:f,gameSub:N})]})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root"))},6:function(e,t,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.f65ac527.chunk.js.map