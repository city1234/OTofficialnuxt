(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{206:function(t,s,a){var i=a(209);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(16).default)("17d4ef00",i,!0,{sourceMap:!1})},208:function(t,s,a){"use strict";var i=a(206);a.n(i).a},209:function(t,s,a){(t.exports=a(15)(!1)).push([t.i,"",""])},213:function(t,s,a){var i=a(224);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(16).default)("17200596",i,!0,{sourceMap:!1})},214:function(t,s,a){"use strict";a(63);var i={components:{},created:function(){},methods:{},mounted:function(){}},l=(a(208),a(9)),e=Object(l.a)(i,function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("canvas",{ref:"canvas",attrs:{id:"canvas"}}),this._v(" "),s("script",{attrs:{src:"js/canvas.js"}})])},[],!1,null,null,null);e.options.__file="MyCanvas.vue";s.a=e.exports},223:function(t,s,a){"use strict";var i=a(213);a.n(i).a},224:function(t,s,a){(t.exports=a(15)(!1)).push([t.i,"",""])},225:function(t,s,a){"use strict";a.r(s);a(99);var i={transition:"turnpage",components:{MyCanvas:a(214).a},data:function(){return{options:{menu:"#menu",scrollingSpeed:500,fitToSectionDelay:300,responsiveWidth:769,scrollBar:!0,afterRender:function(){wow=new WOW({animateClass:"animated"}),wow.init()}},newss:this.$store.state.newss}},computed:{},created:function(){},mounted:function(){$(".popalertinpage").click(function(){$(".commonalert").fadeIn()}),$(".alertclose").click(function(){$(".commonalertinpage").fadeOut()}),$('a.scroll[href*="#"]').on("click",function(t){t.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},500,"linear")}),$(".alertinfbox").click(function(){setTimeout(function(){var t=$(window).width();t>1200&&(t=1200);var s=$(".alertboxtwo");$.colorbox({inline:!0,href:s,width:t,fixed:!0})}(),50),setTimeout(void $("#cboxLoadedContent").niceScroll({scrollspeed:51,mousescrollstep:45,cursorwidth:"5px",cursorcolor:"#222",cursorborder:"0px solid #fff"}),500)});var t=navigator.userAgent.toLowerCase();t.match("android")||t.match("iphone")||t.match("ipad")?$(".topbanner-out").slick({dots:!1,infinite:!0,pauseOnHover:!1,slidesToShow:1,autoplay:!0,autoplaySpeed:5e3}):$(".topbanner-out").slick({draggable:!1,dots:!0,infinite:!0,pauseOnHover:!1,slidesToShow:1,autoplay:!0,autoplaySpeed:5e3})},methods:{clickindex:function(t){if(this.showpage=t,t==this.showpage){var s=$(window).width();if(s>1200&&(s=1200),1==this.newss[this.showpage].clickto){var a=function(){$.colorbox({inline:!0,href:i,width:s,fixed:!0})},i=$("#alertbox1");1==this.newss[this.showpage].newstype?(i=$("#alertbox1"),this.$nextTick(function(){a()})):(i=$("#alertbox"),this.$nextTick(function(){a()}))}return!0}return!1},intopagevif:function(t){return t==this.showpage},clicktoopen:function(t){return this.newss[t].clickto?"_self":"_blank"}},destroyed:function(){}},l=(a(223),a(9)),e=Object(l.a)(i,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"visual",attrs:{id:"mainbanner"}},[a("div",{attrs:{id:"alerthind"}},[a("div",{attrs:{id:"alertboxout"}},[a("div",{staticClass:"alertboxone",attrs:{id:"alertbox"}},[t._l(t.newss,function(s,i){return t.intopagevif(i)?a("div",{staticClass:"alertcontent"},[a("img",{staticClass:"alertbannerimg",attrs:{src:s.bannerimg,alt:""}}),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),a("div",{staticClass:"titleline"}),t._v(" "),a("div",{staticClass:"time"},[t._v(t._s(s.time))]),t._v(" "),a("div",{staticClass:"txt",domProps:{innerHTML:t._s(s.containtext)}})]):t._e()}),t._v(" "),t._m(0)],2),t._v(" "),a("div",{staticClass:"alertboxtwo",attrs:{id:"alertbox"}},[t._l(t.newss,function(s,i){return t.intopagevif(i)?a("div",{staticClass:"alertcontent"},[a("img",{staticClass:"alertbannerimg",attrs:{src:s.bannerimg}}),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),a("div",{staticClass:"titleline"}),t._v(" "),a("div",{staticClass:"time"},[t._v(t._s(s.time))]),t._v(" "),a("div",{staticClass:"txt",domProps:{innerHTML:t._s(s.containtext)}})]):t._e()}),t._v(" "),t._m(1)],2)])]),t._v(" "),a("div",{staticClass:"topbanner"},[a("div",{staticClass:"topbanner-out"},t._l(t.newss,function(s,i){return s.istopbanner?a("div",[a("a",{attrs:{href:s.link,target:t.clicktoopen(i)},on:{click:function(s){t.clickindex(i)}}},[a("div",{staticClass:"topbanner-imgbox",style:"background-image: url("+s.mainbannerimg+");"},[a("img",{class:{alertinfbox:s.clickto},attrs:{src:"images/topbanner_bg.png"}})])])]):t._e()})),t._v(" "),a("div",{staticClass:"linestyle"})]),t._v(" "),t._m(2)]),t._v(" "),a("div",{staticClass:"visual",attrs:{id:"index_main"}},[a("my-canvas"),t._v(" "),t._m(3),t._v(" "),t._m(4)],1),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"btnline"},[s("a",{attrs:{href:"javascritp:;",id:"cancelAlert"}},[s("div",{staticClass:"alertbtn"},[this._v("不再提醒我")])]),this._v(" "),s("a",{attrs:{href:"news.html#lightboxspan"}},[s("div",{staticClass:"alertbtn"},[this._v("查看更多活动")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"btnline"},[s("a",{attrs:{href:"news.html#lightboxspan"}},[s("div",{staticClass:"alertbtn"},[this._v("查看更多活动")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"scroll",attrs:{href:"#index_main"}},[this._v("Scroll\n            "),s("span",{staticClass:"arrow"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"maintext"},[s("h1",{staticClass:"wow fadeInDown"},[s("div",[this._v("全新代理模式")]),this._v(" "),s("div",[s("span",[this._v("无限级")]),this._v("代理")])]),this._v(" "),s("p",{staticClass:"wow fadeInUp stxt",attrs:{"data-wow-delay":"0.2s"}},[this._v("\n                We hope to build a brand image that belongs to this platform,\n                "),s("br"),this._v("and promote marketing to better promote the OT platform to merchants, so as to maximize the company's interests.\n            ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"scroll",attrs:{href:"#index_why"}},[this._v("Scroll\n            "),s("span",{staticClass:"arrow"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"visual inpage_full lightbg",attrs:{id:"index_why"}},[a("div",{staticClass:"container"},[a("h1",{staticClass:"wow fadeInUp parttitle"},[t._v("为什么选择我们")]),t._v(" "),a("div",{staticClass:"rowbox"},[a("li",{staticClass:"wow fadeInUp"},[a("div",{staticClass:"circle"},[a("i",{staticClass:"icon-index_02_svg01"})]),t._v(" "),a("div",{staticClass:"stitle"},[t._v("VIP高端定制")]),t._v(" "),a("div",{staticClass:"stxt"},[t._v("提供多套网站皮肤供您选择 更可根据您的要求，打造属于您的游戏平台")])]),t._v(" "),a("li",{staticClass:"wow fadeInUp",attrs:{"data-wow-delay":"0.1s"}},[a("div",{staticClass:"circle"},[a("i",{staticClass:"icon-index_02_svg02"})]),t._v(" "),a("div",{staticClass:"stitle"},[t._v("超强防御系统")]),t._v(" "),a("div",{staticClass:"stxt"},[t._v("专业的技术团队，全新的网站架构， 更有加密的网站防攻击系统，让您的网站安全稳定运营")])]),t._v(" "),a("li",{staticClass:"wow fadeInUp",attrs:{"data-wow-delay":"0.2s"}},[a("div",{staticClass:"circle"},[a("i",{staticClass:"icon-index_02_svg03"})]),t._v(" "),a("div",{staticClass:"stitle"},[t._v("大数据处理能力")]),t._v(" "),a("div",{staticClass:"stxt"},[t._v("具备更强的决策力、洞察发现力和流程优化能力的海量 高增长率和多样化的信息资产")])]),t._v(" "),a("li",{staticClass:"wow fadeInUp"},[a("div",{staticClass:"circle"},[a("i",{staticClass:"icon-index_02_svg04"})]),t._v(" "),a("div",{staticClass:"stitle"},[t._v("一站式服务")]),t._v(" "),a("div",{staticClass:"stxt"},[t._v("一站式企业级服务 为您提供更高质量的服务和服务效率 让您的网站运营无后顾之忧")])]),t._v(" "),a("li",{staticClass:"wow fadeInUp",attrs:{"data-wow-delay":"0.1s"}},[a("div",{staticClass:"circle"},[a("i",{staticClass:"icon-index_02_svg05"})]),t._v(" "),a("div",{staticClass:"stitle"},[t._v("7*24小时支持与维护")]),t._v(" "),a("div",{staticClass:"stxt"},[t._v("提供专属您的7*24小时沟通渠道 让我们专业的运维团队为您解决所有难题")])]),t._v(" "),a("li",{staticClass:"wow fadeInUp",attrs:{"data-wow-delay":"0.2s"}},[a("div",{staticClass:"circle"},[a("i",{staticClass:"icon-index_02_svg06"})]),t._v(" "),a("div",{staticClass:"stitle"},[t._v("风险管理")]),t._v(" "),a("div",{staticClass:"stxt"},[t._v("实时风险监控系统 保证每个玩家的资金安全")])])])]),t._v(" "),a("a",{staticClass:"scroll scroll_light",attrs:{href:"#index_crate"}},[t._v("Scroll\n            "),a("span",{staticClass:"arrow"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"visual darkbg inpage_full",attrs:{id:"index_crate"}},[a("div",{staticClass:"container"},[a("h1",{staticClass:"wow fadeInUp parttitle"},[t._v("创新的代理模式")]),t._v(" "),a("div",{staticClass:"rowbox wow fadeInUp"},[a("li",[a("div",{staticClass:"wow fadeInUp"},[a("div",{staticClass:"circle"},[a("div",{staticClass:"stitle"},[t._v("1")])]),t._v(" "),a("div",{staticClass:"stxt"},[t._v("首创无限层极代理模式"),a("br"),t._v("同时可发展下级代理与玩家"),a("br"),t._v("最短时间产生几何裂变"),a("br"),t._v("巨额收益轻松赚取")])])]),t._v(" "),a("li",[a("div",{staticClass:"wow fadeInUp",attrs:{"data-wow-delay":"0.1s"}},[a("div",{staticClass:"circle"},[a("div",{staticClass:"stitle"},[t._v("2")])]),t._v(" "),a("div",{staticClass:"stxt"},[t._v("代理返水可重复为"),a("br"),t._v("平台创造收益"),a("br"),t._v("打破传统的返点模式"),a("br"),t._v("开创新平台，新模式")])])]),t._v(" "),a("li",[a("div",{staticClass:"wow fadeInUp",attrs:{"data-wow-delay":"0.2s"}},[a("div",{staticClass:"circle"},[a("div",{staticClass:"stitle"},[t._v("3")])]),t._v(" "),a("div",{staticClass:"stxt"},[t._v("全新返利模式"),a("br"),t._v("平台可自定义返水比例政"),a("br"),t._v("策去配合您的运营模式")])])]),t._v(" "),a("li",[a("div",{staticClass:"wow fadeInUp",attrs:{"data-wow-delay":"0.3s"}},[a("div",{staticClass:"circle"},[a("div",{staticClass:"stitle"},[t._v("4")])]),t._v(" "),a("div",{staticClass:"stxt"},[t._v("代理H5火热来袭"),a("br"),t._v("可视化报表即时、精准、"),a("br"),t._v("直观地展示各平台数据"),a("br"),t._v("移动办公随时随地发展下线、玩家")])])])])]),t._v(" "),a("a",{staticClass:"scroll scroll_light",attrs:{href:"#index_pay"}},[t._v("Scroll\n            "),a("span",{staticClass:"arrow"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"visual lightbg inpage_full",attrs:{id:"index_pay"}},[a("div",{staticClass:"container"},[a("h1",{staticClass:"wow fadeInUp parttitle"},[t._v("独立支付系统")]),t._v(" "),a("div",{staticClass:"rowbox"},[a("div",{staticClass:"payimg wow fadeInUp"},[a("img",{attrs:{src:"images/index_04_pagepic.png",alt:"独立支付系统"}})]),t._v(" "),a("ul",{staticClass:"listbox"},[a("li",{staticClass:"wow fadeInUp stitle"},[t._v("组建自有的专业支付小组，解决各种支付难题")]),t._v(" "),a("li",{staticClass:"wow fadeInUp stitle",attrs:{"data-wow-delay":"0.1s"}},[t._v("更多安全可靠的支付商户，让支付变得可靠可信")]),t._v(" "),a("li",{staticClass:"wow fadeInUp stitle",attrs:{"data-wow-delay":"0.2s"}},[t._v("使用独立系统维护支付产品，独立发布上线不影响其他业务点")]),t._v(" "),a("li",{staticClass:"wow fadeInUp stitle",attrs:{"data-wow-delay":"0.3s"}},[t._v("超顺畅免转钱包，无需转账，玩家可以在各个游戏平台快速进行游戏")])])])]),t._v(" "),a("a",{staticClass:"scroll scroll_light",attrs:{href:"#index_newgame"}},[t._v("Scroll\n            "),a("span",{staticClass:"arrow"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"visual darkbg inpage_full",attrs:{id:"index_newgame"}},[a("div",{staticClass:"container"},[a("h1",{staticClass:"wow fadeInUp parttitle"},[t._v("全新的游戏模式")]),t._v(" "),a("div",{staticClass:"rowbox"},[a("ul",[a("li",{staticClass:"wow fadeInUp"},[a("div",{staticClass:"contentball contentball_01"},[a("div",{staticClass:"stxt"},[t._v("真人视讯"),a("br"),t._v(" 更加注重玩家体验感")])])]),t._v(" "),a("li",{staticClass:"wow fadeInUp",attrs:{"data-wow-delay":"0.1s"}},[a("div",{staticClass:"contentball contentball_02"},[a("div",{staticClass:"stxt"},[t._v("平台管理"),a("br"),t._v(" 游戏平台多样化"),a("br"),t._v(" 平台独立运行"),a("br"),t._v(" 互不影响")])])])]),t._v(" "),a("ul",[a("li",{staticClass:"wow fadeInUp",attrs:{"data-wow-delay":"0.2s"}},[a("div",{staticClass:"contentball contentball_03"},[a("div",{staticClass:"stxt"},[t._v("全新感受"),a("br"),t._v(" 前所未有的流畅感")])])]),t._v(" "),a("li",{staticClass:"wow fadeInUp",attrs:{"data-wow-delay":"0.3s"}},[a("div",{staticClass:"contentball contentball_04"},[a("div",{staticClass:"stxt"},[t._v("真人娱乐城平台"),a("br"),t._v(" 经过TST Game国际认证"),a("br"),t._v(" 保证每款游戏公平公正")])])]),t._v(" "),a("li",{staticClass:"wow fadeInUp",attrs:{"data-wow-delay":"0.4s"}},[a("div",{staticClass:"contentball contentball_05"},[a("div",{staticClass:"stxt"},[t._v("平台未来将持续不断"),a("br"),t._v(" 接入更多游戏平台"),a("br"),t._v(" 让游戏种类变得"),a("br"),t._v(" 更加丰富多样化")])])])])])]),t._v(" "),a("a",{staticClass:"scroll scroll_light",attrs:{href:"#index_cooperate"}},[t._v("Scroll\n            "),a("span",{staticClass:"arrow"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"visual lightbg inpage_full",attrs:{id:"index_cooperate"}},[s("div",{staticClass:"container"},[s("h1",{staticClass:"wow fadeInUp parttitle"},[this._v("合作平台")]),this._v(" "),s("div",{staticClass:"rowbox companybox"},[s("li",{staticClass:"company_01"},[s("div",{staticClass:"logocard"},[s("div",{staticClass:"logocard_img"},[s("img",{attrs:{src:"images/index_06_cooperationlogo_01.png",alt:"AG视讯"}})])])]),this._v(" "),s("li",{staticClass:"company_02"},[s("div",{staticClass:"logocard"},[s("div",{staticClass:"logocard_img"},[s("img",{attrs:{src:"images/index_06_cooperationlogo_02.png",alt:"OG视讯"}})])])]),this._v(" "),s("li",{staticClass:"company_03"},[s("div",{staticClass:"logocard"},[s("div",{staticClass:"logocard_img"},[s("img",{attrs:{src:"images/index_06_cooperationlogo_03.png",alt:"BBIN视讯"}})])])]),this._v(" "),s("li",{staticClass:"company_04"},[s("div",{staticClass:"logocard"},[s("div",{staticClass:"logocard_img"},[s("img",{attrs:{src:"images/index_06_cooperationlogo_04.png",alt:"欧博视讯"}})])])]),this._v(" "),s("li",{staticClass:"company_05 lock"},[s("div",{staticClass:"logocard"},[s("div",{staticClass:"logocard_img"},[s("img",{attrs:{src:"",alt:""}})])])])])])])}],!1,null,null,null);e.options.__file="index.vue";s.default=e.exports}}]);