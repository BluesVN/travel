webpackJsonp([4],{"9n10":function(t,e){},Gbol:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},s=n("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},i,!1,null,null,null);e.default=s.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},s,!1,function(t){n("Gbol")},null,null).exports,a=n("/ocq");i.a.use(a.a);var o=new a.a({routes:[{path:"/",name:"Home",component:function(){return n.e(0).then(n.bind(null,"wXUp"))}},{path:"/city",name:"City",component:function(){return n.e(1).then(n.bind(null,"KTAJ"))}},{path:"/detail/:id",name:"Detail",component:function(){return n.e(2).then(n.bind(null,"G9XZ"))}}],scrollBehavior:function(t,e,n){return{x:0,y:0}}}),p=n("v5o6"),u=n.n(p),l=n("F3EI"),c=n.n(l),d=(n("j1ja"),n("NYxO")),f="杭州";try{localStorage.city&&(f=localStorage.city)}catch(t){}var h={city:f},w={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};i.a.use(d.a);var v=new d.a.Store({state:h,mutations:w});n("9n10"),n("M6Sr"),n("TzC8"),n("v2ns");i.a.config.productionTip=!1,u.a.attach(document.body),i.a.use(c.a),new i.a({el:"#app",router:o,store:v,components:{App:r},template:"<App/>"})},TzC8:function(t,e){},pYmz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=n("gsqX"));var s={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&i){delete t.options.notNextTick;var e=!1;for(var n in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(n)&&t.options[n]&&(e=!0,t.defaultSwiperClasses[n]=t.options[n]);var s=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(s):s()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},a=n("VU/8")(s,r,!1,null,null,null);e.default=a.exports},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ebf536bb49ba1e061b55.js.map