webpackJsonp([0],{"+E39":function(t,e,n){t.exports=!n("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(t,e,n){var i=n("lOnJ");t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"25hp":function(t,e){},"3Eo+":function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},"52gC":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"77Pl":function(t,e,n){var i=n("EqjI");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},"7KvD":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},D2L2:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},Dd8w:function(t,e,n){"use strict";e.__esModule=!0;var i,r=n("woOf"),o=(i=r)&&i.__esModule?i:{default:i};e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}},EqjI:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},FeBl:function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},IaLh:function(t,e){},Ibhu:function(t,e,n){var i=n("D2L2"),r=n("TcQ7"),o=n("vFc/")(!1),s=n("ax3d")("IE_PROTO");t.exports=function(t,e){var n,c=r(t),a=0,u=[];for(n in c)n!=s&&i(c,n)&&u.push(n);for(;e.length>a;)i(c,n=e[a++])&&(~o(u,n)||u.push(n));return u}},MU5D:function(t,e,n){var i=n("R9M2");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},MmMw:function(t,e,n){var i=n("EqjI");t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},O4g8:function(t,e){t.exports=!0},ON07:function(t,e,n){var i=n("EqjI"),r=n("7KvD").document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},QRG4:function(t,e,n){var i=n("UuGF"),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},R4wc:function(t,e,n){var i=n("kM2E");i(i.S+i.F,"Object",{assign:n("To3L")})},R9M2:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},S82l:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},SfB7:function(t,e,n){t.exports=!n("+E39")&&!n("S82l")(function(){return 7!=Object.defineProperty(n("ON07")("div"),"a",{get:function(){return 7}}).a})},TcQ7:function(t,e,n){var i=n("MU5D"),r=n("52gC");t.exports=function(t){return i(r(t))}},To3L:function(t,e,n){"use strict";var i=n("lktj"),r=n("1kS7"),o=n("NpIQ"),s=n("sB3e"),c=n("MU5D"),a=Object.assign;t.exports=!a||n("S82l")(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=i})?function(t,e){for(var n=s(t),a=arguments.length,u=1,f=r.f,p=o.f;a>u;)for(var l,d=c(arguments[u++]),m=f?i(d).concat(f(d)):i(d),g=m.length,h=0;g>h;)p.call(d,l=m[h++])&&(n[l]=d[l]);return n}:a},UuGF:function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},V3tA:function(t,e,n){n("R4wc"),t.exports=n("FeBl").Object.assign},"Wno+":function(t,e){},X8DO:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},aG6G:function(t,e){},ax3d:function(t,e,n){var i=n("e8AB")("keys"),r=n("3Eo+");t.exports=function(t){return i[t]||(i[t]=r(t))}},e8AB:function(t,e,n){var i=n("FeBl"),r=n("7KvD"),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n("O4g8")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},evD5:function(t,e,n){var i=n("77Pl"),r=n("SfB7"),o=n("MmMw"),s=Object.defineProperty;e.f=n("+E39")?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},fkB2:function(t,e,n){var i=n("UuGF"),r=Math.max,o=Math.min;t.exports=function(t,e){return(t=i(t))<0?r(t+e,0):o(t,e)}},gX2g:function(t,e){},hJx8:function(t,e,n){var i=n("evD5"),r=n("X8DO");t.exports=n("+E39")?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},kM2E:function(t,e,n){var i=n("7KvD"),r=n("FeBl"),o=n("+ZMJ"),s=n("hJx8"),c=n("D2L2"),a=function(t,e,n){var u,f,p,l=t&a.F,d=t&a.G,m=t&a.S,g=t&a.P,h=t&a.B,v=t&a.W,_=d?r:r[e]||(r[e]={}),b=_.prototype,y=d?i:m?i[e]:(i[e]||{}).prototype;for(u in d&&(n=e),n)(f=!l&&y&&void 0!==y[u])&&c(_,u)||(p=f?y[u]:n[u],_[u]=d&&"function"!=typeof y[u]?n[u]:h&&f?o(p,i):v&&y[u]==p?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(p):g&&"function"==typeof p?o(Function.call,p):p,g&&((_.virtual||(_.virtual={}))[u]=p,t&a.R&&b&&!b[u]&&s(b,u,p)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},lOnJ:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},lktj:function(t,e,n){var i=n("Ibhu"),r=n("xnc9");t.exports=Object.keys||function(t){return i(t,r)}},o5ts:function(t,e){},sB3e:function(t,e,n){var i=n("52gC");t.exports=function(t){return Object(i(t))}},"vFc/":function(t,e,n){var i=n("TcQ7"),r=n("QRG4"),o=n("fkB2");t.exports=function(t){return function(e,n,s){var c,a=i(e),u=r(a.length),f=o(s,u);if(t&&n!=n){for(;u>f;)if((c=a[f++])!=c)return!0}else for(;u>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},wXUp:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),r=n.n(i),o=n("NYxO"),s={name:"HomeHeader",computed:r()({},Object(o.c)(["city"]))},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v(this._s(this.city)),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("输入城市景点游玩主题")])}]};var a=n("VU/8")(s,c,!1,function(t){n("gX2g")},"data-v-3cc90dc8",null).exports,u={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.list.length}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var p=n("VU/8")(u,f,!1,function(t){n("o5ts")},"data-v-e5ff3c70",null).exports,l={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{autoplay:!1}}},computed:{pages:function(){return this.list.reduce(function(t,e,n){var i=Math.floor(n/8);return t[i]||(t[i]=[]),t[i].push(e),t},[])}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icons"},[n("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,i){return n("swiper-slide",{key:i},t._l(e,function(e){return n("div",{key:e.id,staticClass:"icon"},[n("div",{staticClass:"icon-img"},[n("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl}})]),t._v(" "),n("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}))}))],1)},staticRenderFns:[]};var m=n("VU/8")(l,d,!1,function(t){n("IaLh")},"data-v-56409fd0",null).exports,g={name:"HomeRecommend",props:{list:Array}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),n("ul",t._l(t.list,function(e){return n("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[n("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),t._v(" "),n("div",{staticClass:"item-info"},[n("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),n("button",{staticClass:"item-button"},[t._v("查看详情")])])])}))])},staticRenderFns:[]};var v=n("VU/8")(g,h,!1,function(t){n("aG6G")},"data-v-7e6b01b3",null).exports,_={name:"HomeWeekend",props:{list:Array}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"title"},[t._v("周末去哪")]),t._v(" "),n("ul",t._l(t.list,function(e){return n("li",{key:e.id,staticClass:"item border-bottom"},[n("div",{staticClass:"item-img-wrapper"},[n("img",{staticClass:"item-img",attrs:{src:e.imgUrl}})]),t._v(" "),n("div",{staticClass:"item-info"},[n("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var y={name:"Home",components:{HomeHeader:a,HomeSwiper:p,HomeIcons:m,HomeRecommend:v,HomeWeekend:n("VU/8")(_,b,!1,function(t){n("Wno+")},"data-v-39aed9f7",null).exports},data:function(){return{lastCity:"",swiperList:[{id:"0001",imgUrl:"http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"},{id:"0002",imgUrl:"http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"},{id:"0003",imgUrl:"http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg"},{id:"0004",imgUrl:"http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg"}],iconList:[{id:"0001",imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",desc:"景点门票"},{id:"0002",imgUrl:"http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",desc:"滑雪季"},{id:"0003",imgUrl:"http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",desc:"泡温泉"},{id:"0004",imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",desc:"动植园"},{id:"0005",imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",desc:"游乐园"},{id:"0006",imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",desc:"必游榜单"},{id:"0007",imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",desc:"演出"},{id:"0008",imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",desc:"城市观光"},{id:"0009",imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",desc:"一日游"}],recommendList:[{id:"0001",imgUrl:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",title:"故宫",desc:"东方宫殿建筑代表，世界宫殿建筑典范"},{id:"0002",imgUrl:"http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg",title:"南山滑雪场",desc:"北京专业级滑雪圣地"},{id:"0003",imgUrl:"http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg",title:"天安门广场",desc:"我爱北京天安门，天安门上太阳升"},{id:"0004",imgUrl:"http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg",title:"水立方",desc:"中国的荣耀，阳光下的晶莹水滴"},{id:"0005",imgUrl:"http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg",title:"温都水城养生馆",desc:"各种亚热带植物掩映其间仿佛置身热带雨林"}],weekendList:[{id:"0001",imgUrl:"http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",title:"北京温泉排行榜",desc:"细数北京温泉，温暖你的冬天"},{id:"0002",imgUrl:"http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",title:"北京必游TOP10",desc:"来北京必去的景点非这些地方莫属"},{id:"0003",imgUrl:"http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",title:"寻找北京的皇城范儿",desc:"数百年的宫廷庙宇，至今依旧威严霸气"},{id:"0004",imgUrl:"http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",title:"学生最爱的博物馆",desc:"周末干嘛？北京很多博物馆已经免费开放啦"},{id:"0005",imgUrl:"http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg",title:"儿童剧场，孩子的乐园",desc:"带宝贝观看演出，近距离体验艺术的无穷魅力"}]}},computed:r()({},Object(o.c)(["city"])),methods:{},mounted:function(){this.lastCity=this.city},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city)}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("home-header"),t._v(" "),n("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),n("home-icons",{attrs:{list:t.iconList}}),t._v(" "),n("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),n("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var w=n("VU/8")(y,x,!1,function(t){n("25hp")},null,null);e.default=w.exports},woOf:function(t,e,n){t.exports={default:n("V3tA"),__esModule:!0}},xnc9:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}});
//# sourceMappingURL=0.85b3492471ca70017f9d.js.map