(this.webpackJsonpenergybook=this.webpackJsonpenergybook||[]).push([[0],{192:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(10),r=t.n(c),l=(t(91),t(51)),o=t.n(l),i=t(12),m=t(72),u=(t(93),t(73)),d=t(74),v=t.n(d),f=t(231),p=t(230);function E(e,a,t,n){return y.apply(this,arguments)}function y(){return(y=Object(m.a)(o.a.mark((function e(a,t,n,s){var c,r,l,i,m,u,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return c=e.sent,r=c.body.getReader(),e.next=6,r.read();case 6:l=e.sent,i=new TextDecoder("utf-8"),m=i.decode(l.value),u=v.a.parse(m,{header:!0}),d=u.data,n(d.map((function(e){return e.zone}))),t({keys:Object.keys(d.filter((function(e){return e.zone===s}))[0]).filter((function(e){return"zone"!==e})),values:Object.values(d.filter((function(e){return e.zone===s}))[0]).filter((function(e){return"World"!==e})).map((function(e){return parseFloat(e)}))});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=function(){var e=s.a.useState("World"),a=Object(i.a)(e,2),t=a[0],n=a[1],c=s.a.useState({keys:[],values:[]}),r=Object(i.a)(c,2),l=r[0],o=r[1],m=s.a.useState([]),d=Object(i.a)(m,2),v=d[0],y=d[1],g=s.a.useState("World"),b=Object(i.a)(g,2),h=b[0],N=b[1],w=s.a.useState({keys:[],values:[]}),k=Object(i.a)(w,2),j=k[0],O=k[1],x=s.a.useState([]),S=Object(i.a)(x,2),_=S[0],W=S[1],D=s.a.useState("World"),B=Object(i.a)(D,2),H=B[0],C=B[1],A=s.a.useState({keys:[],values:[]}),T=Object(i.a)(A,2),z=T[0],R=T[1],M=s.a.useState([]),Z=Object(i.a)(M,2),J=Z[0],L=Z[1],F=s.a.useState("World"),I=Object(i.a)(F,2),V=I[0],$=I[1],q=s.a.useState({keys:[],values:[]}),G=Object(i.a)(q,2),K=G[0],P=G[1],Q=s.a.useState([]),U=Object(i.a)(Q,2),X=U[0],Y=U[1];s.a.useEffect((function(){E("/Dataset/total_energy_consumption.csv",O,W,h),E("/Dataset/total_co2_emissions.csv",o,y,t),E("/Dataset/total_electricity_consumption.csv",R,L,H),E("/Dataset/renewables_share.csv",P,Y,V)}),[]),s.a.useEffect((function(){E("/Dataset/total_energy_consumption.csv",O,W,h)}),[h]),s.a.useEffect((function(){E("/Dataset/total_co2_emissions.csv",o,y,t)}),[t]),s.a.useEffect((function(){E("/Dataset/total_electricity_consumption.csv",R,L,H)}),[H]),s.a.useEffect((function(){E("/Dataset/renewables_share.csv",P,Y,V)}),[V]);var ee=function(e,a,t){return s.a.createElement(f.a,{size:"small",options:e,getOptionLabel:function(e){return e},defaultValue:"World",fullWidth:!1,onChange:function(e,t){return a(t)},renderInput:function(a){return s.a.createElement(p.a,Object.assign({},a,{fullWidth:!1,className:"widthTranslate",style:{width:100+Math.pow(t.length,1.7)},label:e[t],placeholder:e[t]}))}})},ae=function(e,a,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"75,192,192";return s.a.createElement(u.Line,{options:n,data:{labels:a,datasets:[{label:e,lineTension:.1,displayColors:!1,backgroundColor:"rgba(".concat(c,",0.6)"),borderColor:"rgba(".concat(c,",1)"),borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(".concat(c,",1)"),pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(".concat(c,",1)"),pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t}]}})};return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container my-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("p",null,"Hello :), i will talk to you about ",s.a.createElement("strong",null,"Energy")),s.a.createElement("p",null,"We is consuming a lot of it, and it is growing fast..")))),s.a.createElement("div",{className:"container mt-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col d-flex justify-content-center"},s.a.createElement("span",{className:"mr-3"},"Let's take a look of how much ",s.a.createElement("strong",null,"energy")," the"),ee(_,N,h),s.a.createElement("span",{className:"mx-3"},"is consuming")))),s.a.createElement("div",{className:"container my-5 pb-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},ae("Total energy consumption",j.keys,j.values,{scales:{yAxes:[{ticks:{beginAtZero:!0,suggestedMax:2e3}}]},legend:{display:!1}})))),s.a.createElement("div",{className:"container my-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("p",null,"Thanks to energy we can produce the amazing thing that is ",s.a.createElement("strong",null,"electricity"),"."),s.a.createElement("p",null,"The power of the vast majority of tools used in our world.")))),s.a.createElement("div",{className:"container mt-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col d-flex justify-content-center"},s.a.createElement("span",{className:"mr-3"},"Here is the total electricity consumption of the"),ee(J,C,H)))),s.a.createElement("div",{className:"container my-5 pb-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},ae("Total electricity consumption",z.keys,z.values,{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1}},"255, 255, 3")))),s.a.createElement("div",{className:"container my-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("p",null,"So yes, ",s.a.createElement("strong",null,"energy")," is cool"),s.a.createElement("p",null,"But there is a big issue currently highly coupled with energy consumption, co2 emissions.")))),s.a.createElement("div",{className:"container mt-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col d-flex justify-content-center"},s.a.createElement("span",{className:"mr-3"},"Here is the co2 emissions of the"),ee(v,n,t)))),s.a.createElement("div",{className:"container my-5 pb-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},ae("Total co2 emissions",l.keys,l.values,{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1}},"255,0,0")))),s.a.createElement("div",{className:"container my-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("p",null,"How can we partly ",s.a.createElement("strong",null,"solve")," it ?"),s.a.createElement("p",null,"By using renewable energy.")))),s.a.createElement("div",{className:"container mt-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col d-flex justify-content-center"},s.a.createElement("span",{className:"mr-3"},"Here is the renewables share of the"),ee(X,$,V)))),s.a.createElement("div",{className:"container my-5 pb-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},ae("Renewables share",K.keys,K.values,{scales:{yAxes:[{ticks:{beginAtZero:!0,suggestedMax:100}}]},legend:{display:!1}},"0,255,0")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,a,t){e.exports=t(192)},91:function(e,a,t){},93:function(e,a,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.01344b2e.chunk.js.map