(this.webpackJsonpcarsmap=this.webpackJsonpcarsmap||[]).push([[0],{16:function(e,t,a){e.exports=a(49)},21:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),o=a.n(r),i=(a(21),a(1)),l=a(5),s=a.n(l),u=a(3),m=a.n(u),p=a(4),d=function e(t){Object(p.a)(this,e),Object.assign(this,t)},b=function e(t){Object(p.a)(this,e),Object.assign(this,t)},f=function e(t){Object(p.a)(this,e),Object.assign(this,t)},g=(a(40),a(41),a(42),function(e){var t=Object(n.useRef)(0),a=Object(n.useRef)(0),r=Object(n.useRef)(0),o=Object(n.useRef)(0),i=Object(n.useRef)(!1),l=Object(n.useRef)(!1);return Object(n.useEffect)((function(){t.current=m.a.map("map",{center:[51.1089776,17.0326689],zoom:10,layers:[m.a.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'})]});a.current=m.a.markerClusterGroup({disableClusteringAtZoom:12}).addTo(t.current),r.current=m.a.layerGroup().addTo(t.current),o.current=m.a.layerGroup().addTo(t.current)}),[]),Object(n.useEffect)((function(){if(e.carParkPoints){o.current.clearLayers(),e.carParkPoints.forEach((function(e,t,a){var n=new f(e),c=m.a.marker([n.location.latitude,n.location.longitude],{icon:m.a.icon({iconUrl:"icons/map/warning/parking-meter-export.png",iconSize:[32,37],popupAnchor:[0,-16]})}).bindPopup(function(e){return"Nazwa: ".concat(e.name," <br />Miejsc:").concat(e.spacesCount," <br />GPS: [").concat(e.location.latitude,", ").concat(e.location.longitude,"]<br />")}(n));o.current.addLayer(c)}))}else o.current.clearLayers()}),[e.carParkPoints]),Object(n.useEffect)((function(){if(e.POIpoints){var t=function(e){var t="caution.png";switch(e){case"Stacje kolejowe":t="train.png";break;case"Krasnale":t="flagman.png";break;default:t="caution.png"}return m.a.icon({iconUrl:"icons/map/primary/"+t,iconSize:[32,37],popupAnchor:[0,-16]})};r.current.clearLayers(),e.POIpoints.forEach((function(e,a,n){var c=new b(e),o=m.a.marker([c.location.latitude,c.location.longitude],{icon:t(c.category)}).bindPopup(function(e){return"Nazwa: ".concat(e.name," <br />Typ:").concat(e.category," <br />GPS: [").concat(e.location.latitude,", ").concat(e.location.longitude,"]<br />")}(c));r.current.addLayer(o)}))}else r.current.clearLayers()}),[e.POIpoints]),Object(n.useEffect)((function(){i.current||(i.current=e.points.map((function(e){return[e.location.latitude,e.location.longitude]})),t.current.fitBounds(i.current)),e.centerOncity&&l.current!==e.centerOncity&&("warszawa"===e.centerOncity?(t.current.panTo([52.2319237,21.0067265]),t.current.setZoom(11),l.current="warszawa"):(t.current.panTo([51.1089776,17.0326689]),t.current.setZoom(11),l.current="wroclaw"));var n=function(e,t){var a="AVAILABLE"===e?"success":"danger",n="TRUCK"===t?"truck3.png":"car.png";return m.a.icon({iconUrl:"icons/map/"+a+"/"+n,iconSize:[32,37],popupAnchor:[0,-16]})};a.current.clearLayers(),e.points.forEach((function(e,t,c){var r=new d(e),o=m.a.marker([r.location.latitude,r.location.longitude],{icon:n(r.status,r.type)}).bindPopup(function(e){return"Typ:".concat(e.type," ").concat(e.platesNumber," <br />Bateria: ").concat(e.batteryLevelPct,"<br /> Status: ").concat(e.status," <br />GPS: [").concat(e.location.latitude,", ").concat(e.location.longitude,"]<br />")}(r));a.current.addLayer(o)}))}),[e.points,e.centerOncity]),c.a.createElement("div",{id:"map"})}),v=function(e){var t=e.onChangeFilter,a=c.a.useState(97),r=Object(i.a)(a,2),o=r[0],l=r[1],s=c.a.useState(0),u=Object(i.a)(s,2),m=u[0],p=u[1],d=c.a.useState(!1),b=Object(i.a)(d,2),f=b[0],g=b[1],v=c.a.useState(!1),E=Object(i.a)(v,2),h=E[0],j=E[1],y=c.a.useState("wroclaw"),O=Object(i.a)(y,2),w=O[0],N=O[1];Object(n.useEffect)((function(){t({batteryPercentage:o,status:m,poi:h,carparks:f,city:w})}),[m,o,h,f,w,t]);var k=function(e){var t=o+e;t>=0&&t<=100&&l(t)};return c.a.createElement("div",{className:"map-filter"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"form-row"},c.a.createElement("div",{className:"form-group col-md-12"},c.a.createElement("h4",{className:"mt-3"},"Ustawienia")),c.a.createElement("div",{className:"form-group col-md-12"},c.a.createElement("label",{htmlFor:"inputGroupSelect02"},"Miasto"),c.a.createElement("select",{className:"custom-select",id:"inputGroupSelect02",onChange:function(e){N(e.target.value)},value:w},c.a.createElement("option",{value:"wroclaw"},"Wroc\u0142aw"),c.a.createElement("option",{value:"warszawa"},"Warszawa"))),c.a.createElement("div",{className:"form-group col-md-12"},c.a.createElement("label",null,"Bateria w samochodach w %"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"form-control"},o),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("span",{className:"input-group-text"},"%"),c.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return k(1)},type:"button"},"+ 1"),c.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return k(-1)},type:"button"},"- 1")),c.a.createElement("input",{type:"range",className:"custom-range",onChange:function(e){var t=e.target.value;l(t)},defaultValue:o,min:"0",max:"100",step:"1",id:"customRange3"}))),c.a.createElement("div",{className:"form-group col-md-12"},c.a.createElement("label",{htmlFor:"inputGroupSelect01"},"Dost\u0119pno\u015b\u0107 samochod\xf3w"),c.a.createElement("select",{className:"custom-select",id:"inputGroupSelect01",onChange:function(e){p(e.target.value)},value:m},c.a.createElement("option",{value:"AVAILABLE"},"Dost\u0119pne"),c.a.createElement("option",{value:"UNAVAILABLE"},"Niedostepne"),c.a.createElement("option",{value:"0"},"Wszystkie"))),c.a.createElement("div",{className:"form-group col-md-12"},c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{className:"custom-control-input",onChange:function(e){return function(e){j(e.target.checked)}(e)},type:"checkbox",id:"poiCheck"}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"poiCheck"},"Poka\u017c: Miejsca POI"))),c.a.createElement("div",{className:"form-group col-md-12"},c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{className:"custom-control-input",onChange:function(e){return function(e){g(e.target.checked)}(e)},type:"checkbox",id:"carparksCheck"}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"carparksCheck"},"Poka\u017c: Parkingi"))))))};a(43),a(44),a(45),a(46),a(47),a(48);var E=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(),l=Object(i.a)(o,2),u=l[0],m=l[1],p=Object(n.useState)({batteryPercentage:!1,status:0,carparks:!1,poi:!1,city:"wroclaw"}),d=Object(i.a)(p,2),b=d[0],f=d[1],E=Object(n.useState)(),h=Object(i.a)(E,2),j=h[0],y=h[1],O=Object(n.useState)(),w=Object(i.a)(O,2),N=w[0],k=w[1],P=Object(n.useState)(),S=Object(i.a)(P,2),C=S[0],L=S[1],z=Object(n.useState)(),A=Object(i.a)(z,2),I=A[0],G=A[1],T=Object(n.useState)("open"),R=Object(i.a)(T,2),x=R[0],B=R[1];return Object(n.useEffect)((function(){var e=a;!1!==b.batteryPercentage&&a&&(e=e.filter((function(e){return e.batteryLevelPct>=b.batteryPercentage}))),b.status&&"0"!==b.status&&a&&(e=e.filter((function(e){return new RegExp("^"+b.status+"$").test(e.status)}))),G(!!b.carparks&&C),k(!!b.poi&&j),e&&m(e)}),[b,j,C,a]),Object(n.useEffect)((function(){s.a.get("https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE").then((function(e){var t=e.data;m(t.objects),r(t.objects)})),s.a.get("https://dev.vozilla.pl/api-client-portal/map?objectType=POI").then((function(e){var t=e.data;k(t.objects),y(t.objects)})),s.a.get("https://dev.vozilla.pl/api-client-portal/map?objectType=PARKING").then((function(e){var t=e.data;G(t.objects),L(t.objects)}))}),[]),a?c.a.createElement("div",{className:"layout"},c.a.createElement("div",{className:"layout-sidebar "+x},c.a.createElement("div",{className:"menu-left-part "+x},c.a.createElement(v,{onChangeFilter:f})),c.a.createElement("div",{className:"menu-right-part"},c.a.createElement("div",{className:"toggle-holder"},c.a.createElement("div",{id:"toggle",className:x,onClick:function(e){e.preventDefault(),B(""===x?"open":"")}},c.a.createElement("div",{className:"menu-line"}))))),c.a.createElement("div",{className:"layout-content "+x},c.a.createElement(g,{points:u,centerOncity:b.city,carParkPoints:I,POIpoints:N,mapFilter:b}))):c.a.createElement("div",null,"Loading...")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.5cc20891.chunk.js.map