(this.webpackJsonpcatalog=this.webpackJsonpcatalog||[]).push([[0],[,,,,function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/cart.b1ca8446.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/product-1.cb308f98.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-2.8059dafd.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-3.badd6749.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-4.4824ac8d.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-5.14b9f8d2.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-6.2757d20b.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-7.44482d67.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-8.d03993c5.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-9.105314b2.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-10.91f371f2.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-11.22e8aefa.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-12.3133f1e4.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-13.1dea6dfb.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-14.dfe4c371.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-15.36ee41b1.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-16.b2279288.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-17.98884be2.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-18.8fa5d8fd.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-19.a074ca7e.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-20.84320634.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-21.ab4efc12.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-22.812e9e61.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-23.320992c1.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-24.b8b43134.jpg"},function(e,t,a){e.exports=a.p+"static/media/product-25.47a275d5.jpg"},function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(3),r=a.n(n),o=(a(9),a(1));a(10),a(11);var p=function(e){return i.a.createElement("div",{className:"cart"},i.a.createElement("img",{className:"cart__img",src:a(12),alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),i.a.createElement("span",{className:"cart__counter"},e.counter))};a(13);var m=function(e){return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"header__wrapper container"},i.a.createElement("span",{className:"header__logo"},"FreshFood"),i.a.createElement(p,{counter:e.counter})))};a(14);var d=function(e){var t=localStorage.getItem("status"+e.id)||!1,a=Object(c.useState)(t),n=Object(o.a)(a,2),r=n[0],p=n[1];return window.addEventListener("storage",(function(){document.location.reload(!0)})),i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"product__img-wrap"},i.a.createElement("img",{className:"product__img",src:e.img,alt:e.name})),i.a.createElement("h2",{className:"product__name"},e.name),i.a.createElement("p",{className:"product__price"},e.price," \u0440\u0443\u0431. / \u043a\u0433"),i.a.createElement("button",{className:"product__button",onClick:function(){r?(e.decreaseCounter(e.counter),localStorage.removeItem("status"+e.id)):(e.increaseCounter(e.counter),localStorage.setItem("status"+e.id,!0)),p(!r)}},r?"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"))};a(15);var s=function(e){var t=e.catalog.map((function(t){return i.a.createElement("li",{className:"catalog__item product",key:t.id},i.a.createElement(d,{name:t.name,price:t.price,img:t.img,decreaseCounter:e.decrease,increaseCounter:e.increase,counter:e.counter,id:t.id}))}));return i.a.createElement("ul",{className:"catalog container"},t)},u=[{id:1,name:"\u0413\u043e\u043b\u0443\u0431\u0438\u043a\u0430",price:150,img:a(16)},{id:2,name:"\u0421\u043f\u0435\u0446\u0438\u0438",price:100,img:a(17)},{id:3,name:"\u0413\u0440\u0435\u0439\u043f\u0444\u0440\u0443\u0442",price:50,img:a(18)},{id:4,name:"\u0424\u0443\u043d\u0434\u0443\u043a",price:70,img:a(19)},{id:5,name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0446",price:110,img:a(20)},{id:6,name:"\u0416\u0435\u043b\u0442\u0430\u044f \u0441\u0432\u0435\u043a\u043b\u0430",price:70,img:a(21)},{id:7,name:"\u041a\u0443\u043a\u0443\u0440\u0443\u0437\u0430",price:50,img:a(22)},{id:8,name:"\u0410\u043d\u0430\u043d\u0430\u0441",price:100,img:a(23)},{id:9,name:"\u0413\u0440\u0430\u043d\u0430\u0442",price:140,img:a(24)},{id:10,name:"\u041c\u0430\u043d\u0433\u043e",price:200,img:a(25)},{id:11,name:"\u0414\u044b\u043d\u044f",price:160,img:a(26)},{id:12,name:"\u0421\u043c\u0435\u0441\u044c \u043e\u0440\u0435\u0445\u043e\u0432 \u0438 \u0441\u0443\u0445\u043e\u0444\u0440\u0443\u043a\u0442\u043e\u0432",price:110,img:a(27)},{id:13,name:"\u041f\u0435\u0440\u0441\u0438\u043a\u0438",price:145,img:a(28)},{id:14,name:"\u041e\u0431\u043b\u0435\u043f\u0438\u0445\u0430",price:300,img:a(29)},{id:15,name:"\u0424\u0430\u0441\u043e\u043b\u044c (\u0441\u043e\u044f)",price:150,img:a(30)},{id:16,name:"\u0424\u0438\u0437\u0430\u043b\u0438\u0441",price:200,img:a(31)},{id:17,name:"\u0428\u0430\u043c\u043f\u0438\u043d\u044c\u043e\u043d\u044b",price:100,img:a(32)},{id:18,name:"\u041e\u0433\u0443\u0440\u0446\u044b",price:132,img:a(33)},{id:19,name:"\u0411\u0440\u043e\u043a\u043a\u043e\u043b\u0438",price:90,img:a(34)},{id:20,name:"\u0421\u043b\u0438\u0432\u0430",price:140,img:a(35)},{id:21,name:"\u041a\u043e\u0440\u0435\u043d\u044c \u0438\u043c\u0431\u0438\u0440\u044f",price:500,img:a(36)},{id:22,name:"\u041c\u0430\u043d\u0433\u043e",price:234,img:a(37)},{id:23,name:"\u0424\u0438\u0441\u0442\u0430\u0448\u043a\u0438",price:400,img:a(38)},{id:24,name:"\u041f\u043e\u043c\u0438\u0434\u043e\u0440\u044b",price:86,img:a(39)},{id:25,name:"\u041a\u043b\u044e\u043a\u0432\u0430",price:189,img:a(40)}];var g=function(){var e=localStorage.getItem("counter")||0,t=Object(c.useState)(e),a=Object(o.a)(t,2),n=a[0],r=a[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{counter:n}),i.a.createElement(s,{catalog:u,decrease:function(e){r(--e),localStorage.setItem("counter",e)},increase:function(e){r(++e),localStorage.setItem("counter",e)},counter:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.4075432e.chunk.js.map