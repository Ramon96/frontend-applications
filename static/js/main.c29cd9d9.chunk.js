(this["webpackJsonpfrontend-application"]=this["webpackJsonpfrontend-application"]||[]).push([[0],{25:function(e,t,n){e.exports=n(39)},30:function(e,t,n){},36:function(e,t,n){e.exports=n.p+"static/media/mask.f293bfbc.jpg"},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),l=(n(30),n(2)),i=n(3),u=n(5),s=n(4),d=n(6),m=n(10),h=n(11);var p=function(){return r.a.createElement("header",null,r.a.createElement("div",{id:"header-logo"},"NMVW"),r.a.createElement("nav",null,r.a.createElement(m.b,{to:"/"}," Home "),r.a.createElement(m.b,{to:"/doodle"}," Doodle ")))},b=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"uitgelicht"},r.a.createElement("h2",null,"Uitgelicht"),r.a.createElement("img",{href:n(36),alt:"A beautifull Mask"}),r.a.createElement("p",null,"Masker ",r.a.createElement("br",null),"Tara (10)")))}}]),t}(a.Component),f=n(23),E=n.n(f),g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).changeColor=function(e){switch(e){case"white":n.setState({color:[255,255,255]});break;case"black":n.setState({color:[0,0,0]});break;case"gray":n.setState({color:[100,100,100]});break;case"red":n.setState({color:[255,0,0]});break;case"blue":n.setState({color:[0,0,255]});break;case"purple":n.setState({color:[255,0,255]});break;case"green":n.setState({color:[0,255,0]});break;case"brown":n.setState({color:[139,69,19]});break;case"orange":n.setState({color:[255,140,100]});break;case"yellow":n.setState({color:[255,255,0]})}},n.actionButton=function(e){switch(e){case"undo":n.cfd.undo();break;case"redo":n.cfd.redo();break;case"bucket":n.cfd.configBucketTool({color:n.state.color,tolerance:50});var t=n.cfd.toggleBucketTool();document.getElementById("bucket").classList.add("active"),t||document.getElementById("bucket").classList.remove("active");break;case"clear":n.cfd.clear()}},n.state={color:[]},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.cfd=new E.a({elementId:"cfd",width:500,height:500}),this.cfd.setLineWidth(10)}},{key:"componentDidUpdate",value:function(){this.cfd.setDrawingColor(this.state.color)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"drawingboard"},r.a.createElement("h2",null,"Het tekenbord"),r.a.createElement("canvas",{id:"cfd"}),r.a.createElement("div",{id:"workbench"},r.a.createElement("button",{id:"eraser",onClick:function(){return e.changeColor("white")}},"Gum"),r.a.createElement("button",{id:"black",onClick:function(){return e.changeColor("black")}}),r.a.createElement("button",{id:"gray",onClick:function(){return e.changeColor("gray")}}),r.a.createElement("button",{id:"red",onClick:function(){return e.changeColor("red")}}),r.a.createElement("button",{id:"blue",onClick:function(){return e.changeColor("blue")}}),r.a.createElement("button",{id:"purple",onClick:function(){return e.changeColor("purple")}}),r.a.createElement("button",{id:"green",onClick:function(){return e.changeColor("green")}}),r.a.createElement("button",{id:"brown",onClick:function(){return e.changeColor("brown")}}),r.a.createElement("button",{id:"orange",onClick:function(){return e.changeColor("orange")}}),r.a.createElement("button",{id:"yellow",onClick:function(){return e.changeColor("yellow")}}),r.a.createElement("button",{id:"bucket",onClick:function(){return e.actionButton("bucket")}},"Emmer"),r.a.createElement("button",{id:"restart",onClick:function(){return e.actionButton("clear")}},"Begin opnieuw"),r.a.createElement("button",{id:"undo",onClick:function(){return e.actionButton("undo")}},"Stapje terug"),r.a.createElement("button",{id:"redo",onClick:function(){return e.actionButton("redo")}},"Stapje vooruit")))}}]),t}(a.Component),k=n(17),v=n.n(k),w=n(24);function y(e,t){return j.apply(this,arguments)}function j(){return(j=Object(w.a)(v.a.mark((function e(t,n){var a,r,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=fetch(t+"?query="+encodeURIComponent(n)+"&format=json"),e.next=3,a;case 3:return r=e.sent,e.next=6,r.json();case 6:return o=e.sent,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={value:[]},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;y("https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-39/sparql",'\n        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n        PREFIX dc: <http://purl.org/dc/elements/1.1/>\n        PREFIX dct: <http://purl.org/dc/terms/>\n        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n        PREFIX edm: <http://www.europeana.eu/schemas/edm/>\n        PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n\n        SELECT ?cho ?title ?typeLabel ?img WHERE {\n\n        <https://hdl.handle.net/20.500.11840/termmaster1397> skos:narrower* ?type .\n        ?type skos:prefLabel ?typeLabel .\n\n        ?cho edm:object ?type .\n        ?cho dc:title ?title .\n        ?cho edm:isShownBy ?img.\n        FILTER langMatches(lang(?title), "ned")\n        } LIMIT 1\n        ').then((function(t){var n=t.results.bindings;console.log(n),e.setState({value:n})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.value.map((function(e,t){return r.a.createElement("p",{key:t},e.title.value)})))}}]),t}(a.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col2"},r.a.createElement(g,null),r.a.createElement("div",null,r.a.createElement("h2",null,"Omschrijving"),r.a.createElement(O,null),r.a.createElement("div",{className:"button"},"Ander Omschrijving"),r.a.createElement("div",{className:"button"},r.a.createElement(m.b,{to:"/done"},"Klaar!"))))}}]),t}(a.Component),I=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={value:[]},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;y("https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-39/sparql",'\n        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n        PREFIX dc: <http://purl.org/dc/elements/1.1/>\n        PREFIX dct: <http://purl.org/dc/terms/>\n        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n        PREFIX edm: <http://www.europeana.eu/schemas/edm/>\n        PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n\n        SELECT ?cho ?title ?typeLabel ?img WHERE {\n\n        <https://hdl.handle.net/20.500.11840/termmaster1397> skos:narrower* ?type .\n        ?type skos:prefLabel ?typeLabel .\n\n        ?cho edm:object ?type .\n        ?cho dc:title ?title .\n        ?cho edm:isShownBy ?img.\n        FILTER langMatches(lang(?title), "ned")\n        } LIMIT 1\n        ').then((function(t){var n=t.results.bindings;console.log(n),e.setState({value:n})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",null,this.state.value.map((function(e,t){return r.a.createElement("img",{key:t+1,alt:"Hungry students prevented this from being loaded",src:e.img.value})}))))}}]),t}(a.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Zo zag het eruit!"),r.a.createElement("div",{className:"col2"},r.a.createElement(I,null),r.a.createElement(O,null)),r.a.createElement("div",{className:"center"},r.a.createElement(m.b,{to:"/doodle"},r.a.createElement("div",{className:"button"},"Maak een nieuwe"))))}}]),t}(a.Component),R=(n(38),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).url="https://ramon96.github.io/frontend-applications/",n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{basename:this.url},r.a.createElement(p,null),r.a.createElement(h.a,{exact:!0,path:"/",component:b}),r.a.createElement(h.a,{path:"/doodle",component:C}),r.a.createElement(h.a,{path:"/done",component:S})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.c29cd9d9.chunk.js.map