(this.webpackJsonpinfinite_scroll=this.webpackJsonpinfinite_scroll||[]).push([[0],{47:function(n,t,e){},70:function(n,t,e){"use strict";e.r(t);var c=e(1),r=e(0),a=e.n(r),i=e(36),o=e.n(i),u=(e(47),e(19)),s=e(4),d=e(3),j=e(2),b=e(11),f=e.n(b),l=e(22),p=e(13),v=e(9);function O(){var n=Object(r.useState)(1),t=Object(v.a)(n,2),e=t[0],c=t[1],a=Object(r.useState)(new Date),i=Object(v.a)(a,2),o=i[0],u=i[1];function s(){var n=document.documentElement.scrollHeight;document.documentElement.scrollTop+document.documentElement.clientHeight===n&&(c((function(n){return n+1})),o.setDate(o.getDate()-1),u(o.toDateString()))}return Object(r.useEffect)((function(){return window.addEventListener("scroll",s),function(){return window.removeEventListener("scroll",s)}}),[]),{page:e,yesterday:o}}var x=e(23),h=e.n(x),g=h.a.create({baseURL:"https://yts.lt/api/v2"}),m=h.a.create({baseURL:"http://openapi.data.go.kr/openapi/service/rest/Covid19"}),y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return g.get("/list_movies.json",{params:{page:n,limit:50}})},w="Ezns1tKRgU%2BwI1iXLes4vzRPJwHchaMumIZz6RY0xDwZndqKVEezuocD7ndSCwpUVoq9aqIE1bNZhvNEUvDMDw%3D%3D",D=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0,e=arguments.length>2?arguments[2]:void 0;return m.get("/getCovid19SidoInfStateJson?serviceKey=".concat(w),{params:{numOfRows:10,pageNo:n,startCreateDt:t,endCreateDt:e}})};function k(){var n=Object(d.a)(["\n  height: 80vh;\n  padding: 50px;\n  background-color: #ffeaa7;\n  text-align: center;\n  div {\n    margin: 50px;\n    font-size: 150px;\n  }\n"]);return k=function(){return n},n}function S(){var n=Object(d.a)(["\n  font-size: 20px;\n  font-weight: bold;\n  color: #2d3436;\n  padding: 10px 20px;\n"]);return S=function(){return n},n}function E(){var n=Object(d.a)(["\n  height: 35px;\n  td:first-child {\n    text-align: center;\n  }\n"]);return E=function(){return n},n}function z(){var n=Object(d.a)(["\n  padding: 5px 10px;\n  border: 1px solid #d2d2d2;\n  vertical-align: middle;\n"]);return z=function(){return n},n}function A(){var n=Object(d.a)(["\n  padding: 5px 10px;\n  border: 1px solid #d2d2d2;\n  vertical-align: middle;\n  background-color: #ffeaa7;\n"]);return A=function(){return n},n}function I(){var n=Object(d.a)(["\n  tr > td {\n    background-color: #ffcccc;\n  }\n"]);return I=function(){return n},n}function L(){var n=Object(d.a)([""]);return L=function(){return n},n}function C(){var n=Object(d.a)([""]);return C=function(){return n},n}function N(){var n=Object(d.a)(["\n  width: 100%;\n  table-layout: fixed;\n  max-width: 750px;\n  margin: 0 auto;\n"]);return N=function(){return n},n}function R(){var n=Object(d.a)(["\n  font-size: 24px;\n  font-weight: bold;\n  max-width: 750px;\n  margin: 0 auto 15px;\n"]);return R=function(){return n},n}function U(){var n=Object(d.a)(["\n  padding: 30px;\n"]);return U=function(){return n},n}var M=j.c.div(U()),H=j.c.div(R()),J=j.c.table(N()),q=j.c.thead(C()),B=j.c.tbody(L()),F=j.c.tfoot(I()),K=j.c.th(A()),P=j.c.td(z()),Z=j.c.tr(E()),_=j.c.div(S()),V=j.c.div(k());var Y=function(){var n=function(n){var t=Object(r.useState)(!0),e=Object(v.a)(t,2),c=e[0],a=e[1],i=Object(r.useState)(!0),o=Object(v.a)(i,2),u=o[0],s=o[1],d=Object(r.useState)(0),j=Object(v.a)(d,2),b=j[0],x=j[1],h=Object(r.useState)({}),g=Object(v.a)(h,2),m=g[0],y=g[1],w=O(),k=w.page,S=w.yesterday;function E(n){var t=n.getFullYear(),e=n.getMonth()+1,c=n.getDate();return e<10&&(e="0".concat(e)),c<10&&(c="0".concat(c)),{year:t,month:e,day:c}}var z=function(){var n=Object(p.a)(f.a.mark((function n(){var t,e,c,r,i,o,u;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(!0),t=new Date,e=E(t),c="".concat(e.year).concat(e.month).concat(e.day),n.prev=4,n.next=7,D(k,c,c);case 7:r=n.sent,i=r.data.response.body.items.item,a(void 0===i),o={},i=i.reduce((function(n,t){return o[t.gubun]||(o[t.gubun]=t,n.push(t)),n}),[]),u=Object(l.a)({},b,{covidArr:i,today:e}),y(u),x(b+1),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(4),console.log(n.t0);case 20:return n.prev=20,s(!1),n.finish(20);case 23:case"end":return n.stop()}}),n,null,[[4,17,20,23]])})));return function(){return n.apply(this,arguments)}}(),A=function(){var n=Object(p.a)(f.a.mark((function n(){var t,e,c,r,a,i,o;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=E(new Date(S)),e="".concat(t.year).concat(t.month).concat(t.day),n.prev=2,n.next=5,D(k,e,e);case 5:c=n.sent,r=c.data.response.body.items.item,a={},r=r.reduce((function(n,t){return a[t.gubun]||(a[t.gubun]=t,n.push(t)),n}),[]),i=Object(l.a)({},b,{covidArr:r,today:t}),o=Object.assign(m,i),y(o),x(b+1),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(2),console.log(n.t0);case 18:case"end":return n.stop()}}),n,null,[[2,15]])})));return function(){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){z()}),[]),Object(r.useEffect)((function(){A()}),[S]),{loading:u,covid:m,isNothing:c}}(),t=n.loading,e=n.covid,a=n.isNothing;return Object(c.jsxs)(c.Fragment,{children:[a?Object(c.jsxs)(V,{children:["\uc624\ub298\uc758 \ucf54\ub85c\ub09819 \ud604\ud669\uc774 \uc544\uc9c1 \uc5c5\ub370\uc774\ud2b8\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",Object(c.jsx)("br",{})," \uc774\uc804 \ucf54\ub85c\ub09819 \ud604\ud669\uc744 \ubcf4\uace0 \uc2f6\uc73c\uc2dc\ub2e4\uba74 \uc544\ub798\ub85c \ub0b4\ub824\uc8fc\uc138\uc694 \ud83d\ude00",Object(c.jsx)("br",{})," \uc544\ub798\ub85c \ub0b4\ub824\ub3c4 \uc815\ubcf4\uac00 \ub098\uc624\uc9c0 \uc54a\ub294\ub2e4\uba74 \uc624\ub298\uc740 \ub124\uc774\ubc84\uc5d0\uc11c \ubd10\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.. API \uc694\uccad \ud69f\uc218\uac00 \uc801\ub124\uc694\ud83d\ude39",Object(c.jsx)("div",{children:"\ud83d\udc47"})]}):null,Object.values(e)&&Object.values(e).length>0&&Object.values(e).map((function(n,e){return Object(c.jsxs)(M,{children:[Object(c.jsx)(H,{children:"".concat(n.today.year,"\ub144 ").concat(n.today.month,"\uc6d4 ").concat(n.today.day,"\uc77c")}),t?Object(c.jsx)(_,{children:"Loading...\u23f0"}):Object(c.jsxs)(J,{children:[Object(c.jsx)(q,{children:Object(c.jsxs)(Z,{children:[Object(c.jsxs)(K,{children:["\uc21c\uc704",Object(c.jsx)("br",{}),"(\uc804\uc77c\ub300\ube44 \uc99d\uac10\uc218 \uae30\uc900)"]}),Object(c.jsx)(K,{children:"\uc9c0\uc5ed"}),Object(c.jsx)(K,{children:"\uc804\uc77c\ub300\ube44 \uc99d\uac10\uc218"}),Object(c.jsx)(K,{children:"\ucd1d\ud655\uc9c4\uc790"})]})}),Object(c.jsx)(B,{children:n.covidArr&&n.covidArr.length>0&&n.covidArr.filter((function(n){return"\ud569\uacc4"!==n.gubun})).sort((function(n,t){return t.incDec-n.incDec})).map((function(n,t){return Object(c.jsxs)(Z,{num:t,children:[Object(c.jsx)(P,{children:t+1}),Object(c.jsx)(P,{children:n.gubun}),Object(c.jsx)(P,{children:n.incDec}),Object(c.jsx)(P,{children:n.defCnt})]},t)}))}),Object(c.jsx)(F,{children:n.covidArr&&n.covidArr.length>0&&n.covidArr.filter((function(n){return"\ud569\uacc4"===n.gubun})).map((function(n,t){return Object(c.jsxs)(Z,{num:t,children:[Object(c.jsx)(P,{}),Object(c.jsx)(P,{children:n.gubun}),Object(c.jsx)(P,{children:n.incDec}),Object(c.jsx)(P,{children:n.defCnt})]},t)}))})]})]},e)}))]})};function T(){var n=Object(d.a)([""]);return T=function(){return n},n}function W(){var n=Object(d.a)(["\n  background-color: #4a69bd;\n  padding: 10px;\n  margin: 0 10px;\n  color: #ffffff;\n"]);return W=function(){return n},n}function X(){var n=Object(d.a)(["\n  padding: 10px 10px 0;\n  display: flex;\n  justify-content: center;\n"]);return X=function(){return n},n}function G(){var n=Object(d.a)(["\n  margin: 15px 0;\n  text-align: center;\n  font-size: 18px;\n"]);return G=function(){return n},n}function Q(){var n=Object(d.a)(["\n  font-size: 28px;\n  font-weight: bold;\n  text-align: center;\n"]);return Q=function(){return n},n}function $(){var n=Object(d.a)(["\n  background-color: #d2d2d2;\n  padding: 40px;\n"]);return $=function(){return n},n}var nn=j.c.div($()),tn=j.c.h1(Q()),en=j.c.p(G()),cn=j.c.ul(X()),rn=j.c.li(W()),an=Object(j.c)(u.b)(T()),on=Object(s.g)((function(){return Object(c.jsxs)(nn,{children:[Object(c.jsx)(tn,{children:"\ucf54\ub85c\ub09819 \uc2dc,\ub3c4 \ubc1c\uc0dd\ud604\ud669"}),Object(c.jsx)(en,{children:"Infinite scroll\uc744 \ud14c\uc2a4\ud2b8\ud574\ubcf4\uae30\uc704\ud574 \ub9cc\ub4e0 \uc6f9\uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4. \ub72c\uae08\uc5c6\uc9c0\ub9cc \ubb34\ube44\ub9ac\uc2a4\ud2b8\ub3c4 \uc874\uc7ac\ud569\ub2c8\ub2e4 \ud83d\ude05"}),Object(c.jsxs)(cn,{children:[Object(c.jsx)(rn,{children:Object(c.jsx)(an,{to:"/",children:"\ucf54\ub85c\ub09819 \ubc1c\uc0dd\ud604\ud669"})}),Object(c.jsx)(rn,{children:Object(c.jsx)(an,{to:"movieList",children:"\uc601\ud654\ub9ac\uc2a4\ud2b8"})})]})]})})),un=e(41);function sn(){var n=Object(d.a)(["\n  font-size: 20px;\n  font-weight: bold;\n  color: #2d3436;\n  padding: 10px 20px;\n"]);return sn=function(){return n},n}function dn(){var n=Object(d.a)(["\n  font-size: 16px;\n  margin: 5px 0;\n"]);return dn=function(){return n},n}function jn(){var n=Object(d.a)([""]);return jn=function(){return n},n}function bn(){var n=Object(d.a)(["\n  padding: 40px;\n"]);return bn=function(){return n},n}function fn(){var n=Object(d.a)(["\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  margin: 30px 0;\n"]);return fn=function(){return n},n}var ln=j.c.h1(fn()),pn=j.c.div(bn()),vn=j.c.ul(jn()),On=j.c.li(dn()),xn=j.c.div(sn());var hn=function(){var n=function(){var n=Object(r.useState)(!0),t=Object(v.a)(n,2),e=t[0],c=t[1],a=Object(r.useState)([]),i=Object(v.a)(a,2),o=i[0],u=i[1],s=Object(r.useState)(!1),d=Object(v.a)(s,2),j=d[0],b=d[1],l=O().page,x=function(){var n=Object(p.a)(f.a.mark((function n(){var t,e;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),n.prev=1,n.next=4,y(l);case 4:t=n.sent,e=t.data.data.movies,u(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:return n.prev=12,c(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=Object(p.a)(f.a.mark((function n(){var t,e,c;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return b(!0),n.prev=1,n.next=4,y(l);case 4:t=n.sent,e=t.data.data.movies,c=o.concat.apply(o,Object(un.a)(e)),u(c),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:return n.prev=13,b(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[1,10,13,16]])})));return function(){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){x()}),[]),Object(r.useEffect)((function(){h()}),[l]),{loading:e,movie:o,fetching:j}}(),t=n.loading,e=n.movie,a=n.fetching;return Object(c.jsxs)("div",{children:[Object(c.jsx)(ln,{children:"Infinite Movies / Page 1"}),t?Object(c.jsx)(xn,{children:"Loading...\u23f0"}):Object(c.jsx)(pn,{children:Object(c.jsxs)(vn,{children:[e.map((function(n,t){return Object(c.jsx)(On,{children:"".concat(t," : ").concat(n.title)},t)})),a?Object(c.jsx)(xn,{children:"Waiting...\ud83e\udd7a"}):null]})})]})},gn=function(){return Object(c.jsxs)(u.a,{children:[Object(c.jsx)(on,{}),Object(c.jsxs)(s.d,{children:[Object(c.jsx)(s.b,{path:"/",exact:!0,component:Y}),Object(c.jsx)(s.b,{path:"/movieList",exact:!0,component:hn}),Object(c.jsx)(s.a,{from:"*",to:"/"})]})]})},mn=e(40);function yn(){var n=Object(d.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n      \n    }\n"]);return yn=function(){return n},n}var wn=Object(j.a)(yn(),mn.a);var Dn=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(gn,{}),Object(c.jsx)(wn,{})]})};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(Dn,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.97eb228b.chunk.js.map