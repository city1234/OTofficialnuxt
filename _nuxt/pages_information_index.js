(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{212:function(t,s,a){var i=a(222);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(16).default)("35c50c2f",i,!0,{sourceMap:!1})},221:function(t,s,a){"use strict";var i=a(212);a.n(i).a},222:function(t,s,a){(t.exports=a(15)(!1)).push([t.i,"",""])},229:function(t,s,a){"use strict";a.r(s);a(100),a(27),a(99),a(0);var i={transition:"turnpage",components:{},data:function(){return{title:"传奇软件平台资讯",outwindow:!1,showpage:0,newnews:1,bannerstyle:0,slickstyle:!1,nowlistpage:0,search:"",page:[{totalnews:0,pagelistnum:9,nowpage:1},{totalnews:0,pagelistnum:9,nowpage:1},{totalnews:0,pagelistnum:9,nowpage:1},{totalnews:0,pagelistnum:9,nowpage:1}],newss:this.$store.state.newss}},head:function(){return{title:this.title,meta:[{hid:"description",name:"平台资讯实时了解",content:"平台资讯实时了解"}]}},watch:{data:function(t){1}},methods:{newsnavlist:function(t){var s=$(window).scrollTop();this.nowlistpage=t,this.search="",$(".newsnavlist>div>li").eq(t).addClass("active").siblings().removeClass("active"),$("#information .newsnavlist>div>li").eq(t).addClass("active").siblings().removeClass("active"),$(".nowlistpage").eq(t).fadeIn(300).siblings(".nowlistpage").fadeOut(0),$("html").getNiceScroll().resize(),$("html").getNiceScroll().remove();var a=navigator.userAgent.toLowerCase();if(a.match("android")||a.match("iphone")||a.match("ipad"))s=0,$("html,body").animate({scrollTop:s},500);else{$("html").niceScroll({scrollspeed:51,mousescrollstep:45,cursorwidth:"5px",cursorcolor:"#222",cursorborder:"0px solid #fff"});$("html,body").animate({scrollTop:s-1e-4},0),$("html,body").animate({scrollTop:s},1)}},clickindex:function(t){if(this.showpage=t,t==this.showpage){var s=$(window).width();if(s>1200&&(s=1200),1==this.newss[this.showpage].clickto){var a=function(){$.colorbox({inline:!0,href:i,width:s,fixed:!0})},i=$("#alertbox1");1==this.newss[this.showpage].newstype?(i=$("#alertbox1"),this.$nextTick(function(){a()})):(i=$("#alertbox"),this.$nextTick(function(){a()}))}return!0}return!1},intopagevif:function(t){return t==this.showpage},clicktoopen:function(t){return this.newss[t].clickto?"_self":"_blank"},searchactive_fn:function(){$(".searchbox_mb").toggleClass("searchactive")}},computed:{bannerstyle_fn:function(){return bannerstyle=this.newss.length-this.newnews,1==bannerstyle?(this.slickstyle=!1,"bannerboxstyle_one"):2==bannerstyle?(this.slickstyle=!1,"bannerboxstyle_two"):bannerstyle>2?(this.slickstyle=!0,"bannerboxstyle_one"):void 0},filterlist:function(t){var s=this;return this.newss.filter(function(t){return(t.name+t.containtexts).match(s.search)})}},mounted:function(){}},e=(a(221),a(9)),n=Object(e.a)(i,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"newsPageout"}},[a("no-ssr",[a("div",{staticClass:"newsnavlist mb_show wow fadeInDown",attrs:{"data-wow-delay":"0.3s"}},[a("div",{staticClass:"newsnavlistul"},[a("li",{staticClass:"active",on:{click:function(s){t.newsnavlist(0)}}},[a("span",[a("i",{staticClass:"icon-information_product"})]),t._v("产品"),a("span",[t._v("资讯")])]),t._v(" "),a("li",{on:{click:function(s){t.newsnavlist(1)}}},[a("span",[a("i",{staticClass:"icon-information_version"})]),t._v("发版"),a("span",[t._v("内容")])]),t._v(" "),a("li",{staticClass:"searchbtn_mb",on:{click:function(s){t.searchactive_fn()}}},[a("img",{attrs:{src:"images/search_icon.png"}})])]),t._v(" "),a("div",{staticClass:"searchbox_mb searchactive"},[a("div",{staticClass:"prepage",on:{click:function(s){t.searchactive_fn()}}},[a("i",{staticClass:"icon-chevron-right"})]),t._v(" "),a("div",{staticClass:"newssearchbar"},[a("div",{staticClass:"possearchpic"},[a("img",{attrs:{src:"images/search_icon.png"}})]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"search",id:"search",placeholder:"请输入关键字"},domProps:{value:t.search},on:{input:function(s){s.target.composing||(t.search=s.target.value)}}})])])]),t._v(" "),a("section",{attrs:{id:"information"}},[a("div",{staticClass:"inpagetitlebanner informationtitlebanner"},[a("div",{staticClass:"titlebannertxt wow fadeInLeft"},[a("img",{staticClass:"titlebg pc_show",attrs:{src:"images/information_title.png",alt:"平台资讯实时了解"}}),t._v(" "),a("div",{staticClass:"wow fadeInRight",attrs:{"data-wow-delay":"0.4s"}},[t._v("平台资讯实时了解")])])]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 newsBigBanner"},[a("div",{staticClass:"newstitle",attrs:{id:"totopnews"}},[a("div",{staticClass:"title"},[t._v("\n                            平台资讯\n                            "),a("div",{staticClass:"stxt"},[t._v("Product Information")])]),t._v(" "),a("div",{staticClass:"rightlist"},[a("div",{staticClass:"newsnavlist"},[a("div",{staticClass:"newsnavlistul"},[a("li",{staticClass:"active",on:{click:function(s){t.newsnavlist(0)}}},[a("i",{staticClass:"icon-information_product"}),t._v("产品"),a("span",[t._v("资讯")])]),t._v(" "),a("li",{on:{click:function(s){t.newsnavlist(1)}}},[a("i",{staticClass:"icon-information_version"}),t._v("发版"),a("span",[t._v("内容")])])])]),t._v(" "),a("div",{staticClass:"newssearchbar"},[a("div",{staticClass:"possearchpic"},[a("img",{attrs:{src:"images/search_icon.png"}})]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"search",id:"search",placeholder:"请输入关键字"},domProps:{value:t.search},on:{input:function(s){s.target.composing||(t.search=s.target.value)}}})])])])]),t._v(" "),a("div",{attrs:{id:"alerthind"}},[a("div",{staticClass:"newsalert",attrs:{id:"alertbox"}},t._l(t.newss,function(s,i){return t.intopagevif(i)?a("div",{staticClass:"alertcontent"},[a("div",{staticClass:"newsconttitlebox"},[a("div",{staticClass:"title",class:{title_active:s.importanttag}},[t._v(t._s(s.name))])]),t._v(" "),a("img",{staticClass:"alertbannerimg",attrs:{src:s.bannerimg,alt:s.name}}),t._v(" "),a("div",{staticClass:"titleline"}),t._v(" "),a("div",{staticClass:"time"},[t._v(t._s(s.time))]),t._v(" "),a("div",{staticClass:"txt",domProps:{innerHTML:t._s(s.containtext)}})]):t._e()})),t._v(" "),a("div",{staticClass:"newsalert",attrs:{id:"alertbox1"}},t._l(t.newss,function(s,i){return t.intopagevif(i)?a("div",{staticClass:"alertcontent"},[a("div",{staticClass:"newsconttitlebox"},[a("div",{staticClass:"newtag",class:{title_active:s.importanttag}},[t._v(t._s(s.name))]),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(s.containtexts))])]),t._v(" "),a("div",{staticClass:"txt",domProps:{innerHTML:t._s(s.containtext)}})]):t._e()}))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.nowlistpage,expression:"nowlistpage==0"}],staticClass:"nowlistpage",attrs:{id:"news_productpage"}},[a("div",{staticClass:"newsBanner topnewsBanner"},[a("div",{staticClass:"row"},t._l(t.newss,function(s,i){return a("div",{directives:[{name:"show",rawName:"v-show",value:s.importanttag&s.newstype==t.nowlistpage,expression:"news.importanttag&news.newstype==nowlistpage"}],attrs:{id:"innewsBanner"}},[a("a",{class:{alertinfbox:s.clickto},attrs:{href:s.link,target:t.clicktoopen(i)},on:{click:function(s){t.clickindex(i)}}},[a("div",{staticClass:"wow fadeInDown col-lg-12 innewsBannerbox"},[a("div",{staticClass:"bannerItem"},[a("div",{staticClass:"bannerItem_imgout",style:"background-image: url("+s.bannerimg+");"},[a("img",{staticClass:"img-responsive",attrs:{src:"images/newsBanner.png",alt:s.name}})]),t._v(" "),a("div",{staticClass:"newsText"},[a("div",{staticClass:"flexbox"},[a("div",[a("div",{staticClass:"title"},[a("p",[t._v(t._s(s.name))])]),t._v(" "),a("div",{staticClass:"date"},[t._v(t._s(s.time))])]),t._v(" "),s.downloadbtn?a("a",{staticClass:"downloadlink",attrs:{href:s.downloadlink,target:"_blank"}},[a("div",{staticClass:"download"},[a("i",{staticClass:"icon-information_download"})])]):t._e()])])])])])])}))]),t._v(" "),a("div",{staticClass:"newsBanner"},[a("div",{staticClass:"rowbox"},t._l(t.newss,function(s,i){return a("div",{directives:[{name:"show",rawName:"v-show",value:!s.importanttag&s.newstype==t.nowlistpage&-1!=s.name.indexOf(t.search),expression:"!news.importanttag&news.newstype==nowlistpage&news.name.indexOf(search)!=-1"}],staticClass:"innewsBanner wow fadeInDown"},[a("a",{class:{alertinfbox:s.clickto},attrs:{href:s.link,target:t.clicktoopen(i)},on:{click:function(s){t.clickindex(i)}}},[a("div",{staticClass:"rowbox-4 innewsBannerbox"},[a("div",{staticClass:"bannerItem"},[a("div",{staticClass:"bannerItem_imgout",style:"background-image: url("+s.bannerimg+");"},[a("img",{staticClass:"img-responsive",attrs:{src:"images/newsBanner.png",alt:s.name}})]),t._v(" "),a("div",{staticClass:"newsText"},[a("div",{staticClass:"flexbox"},[a("div",[a("div",{staticClass:"title"},[a("p",[t._v(t._s(s.name))])]),t._v(" "),a("div",{staticClass:"date"},[t._v(t._s(s.time))])]),t._v(" "),s.downloadbtn?a("a",{staticClass:"downloadlink",attrs:{href:s.downloadlink,target:"_blank"}},[a("div",{staticClass:"download"},[a("i",{staticClass:"icon-information_download"})])]):t._e()])])])])])])}))]),t._v(" "),a("div",{staticClass:"pagectrlbox"},[a("li",{staticClass:"pagectrl tofirstpage icon-firstpage"}),t._v(" "),a("li",{staticClass:"pagectrl prepage icon-prepage"}),t._v(" "),a("li",{staticClass:"pagenum active"},[t._v("1")]),t._v(" "),a("li",{staticClass:"pagenum"},[t._v("2")]),t._v(" "),a("li",{staticClass:"pagenum"},[t._v("3")]),t._v(" "),a("li",{staticClass:"pagenum"},[t._v("4")]),t._v(" "),a("li",{staticClass:"pagenum"},[t._v("5")]),t._v(" "),a("li",{staticClass:"pagectrl nextpage icon-nextpage"}),t._v(" "),a("li",{staticClass:"pagectrl tolastpage icon-lastpage"})])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.nowlistpage,expression:"nowlistpage==1"}],staticClass:"nowlistpage",attrs:{id:"news_contentpage"}},[a("div",{staticClass:"newsBanner"},t._l(t.newss,function(s,i){return a("div",{directives:[{name:"show",rawName:"v-show",value:s.newstype==t.nowlistpage&-1!=s.containtexts.indexOf(t.search),expression:"news.newstype==nowlistpage&news.containtexts.indexOf(search)!=-1"}],staticClass:"contentpage_contentlist_out wow fadeInDown"},[a("a",{class:{alertinfbox1:s.clickto},attrs:{href:s.link,target:t.clicktoopen(i)},on:{click:function(s){t.clickindex(i)}}},[a("div",{staticClass:"fadeInDown contentpage_contentlist_in",attrs:{"data-wow-delay":"0.4s"}},[a("div",{staticClass:"contentpage_text"},[a("div",{staticClass:"newsText"},[a("div",{staticClass:"title",class:{title_active:s.importanttag}},[a("p",[t._v(t._s(s.name))])]),t._v(" "),a("div",{staticClass:"newscontent"},[a("p",[t._v(t._s(s.containtexts))])]),t._v(" "),a("div",{staticClass:"date"},[t._v(t._s(s.time))])])])])])])})),t._v(" "),a("div",{staticClass:"pagectrlbox"},[a("li",{staticClass:"pagectrl tofirstpage icon-firstpage"}),t._v(" "),a("li",{staticClass:"pagectrl prepage icon-prepage"}),t._v(" "),a("li",{staticClass:"pagenum active"},[t._v("1")]),t._v(" "),a("li",{staticClass:"pagenum"},[t._v("2")]),t._v(" "),a("li",{staticClass:"pagenum"},[t._v("3")]),t._v(" "),a("li",{staticClass:"pagenum"},[t._v("4")]),t._v(" "),a("li",{staticClass:"pagenum"},[t._v("5")]),t._v(" "),a("li",{staticClass:"pagectrl nextpage icon-nextpage"}),t._v(" "),a("li",{staticClass:"pagectrl tolastpage icon-lastpage"})])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2==t.nowlistpage,expression:"nowlistpage==2"}],staticClass:"nowlistpage",attrs:{id:"news_eventpage"}},[a("div",{staticClass:"newsBanner topnewsBanner"},[a("div",{staticClass:"row"},t._l(t.newss,function(s,i){return a("div",{directives:[{name:"show",rawName:"v-show",value:s.importanttag&s.newstype==t.nowlistpage,expression:"news.importanttag&news.newstype==nowlistpage"}],attrs:{id:"innewsBanner"}},[a("a",{class:{alertinfbox:s.clickto},attrs:{href:s.link,target:t.clicktoopen(i)},on:{click:function(s){t.clickindex(i)}}},[a("div",{staticClass:"wow fadeInDown col-lg-12 innewsBannerbox"},[a("div",{staticClass:"bannerItem"},[a("div",{staticClass:"bannerItem_imgout",style:"background-image: url("+s.bannerimg+");"},[a("img",{staticClass:"img-responsive",attrs:{src:"images/newsBanner.png",alt:s.name}})]),t._v(" "),a("div",{staticClass:"newsText"},[a("div",{staticClass:"flexbox"},[a("div",[a("div",{staticClass:"title"},[a("p",[t._v(t._s(s.name))])]),t._v(" "),a("div",{staticClass:"date"},[t._v(t._s(s.time))])]),t._v(" "),s.downloadbtn?a("a",{staticClass:"downloadlink",attrs:{href:s.downloadlink,target:"_blank"}},[a("div",{staticClass:"download"},[a("i",{staticClass:"icon-information_download"})])]):t._e()])])])])])])}))]),t._v(" "),a("div",{staticClass:"newsBanner"},[a("div",{staticClass:"rowbox"},t._l(t.newss,function(s,i){return a("div",{directives:[{name:"show",rawName:"v-show",value:!s.importanttag&s.newstype==t.nowlistpage&-1!=s.name.indexOf(t.search),expression:"!news.importanttag&news.newstype==nowlistpage&news.name.indexOf(search)!=-1"}],staticClass:"innewsBanner wow fadeInDown"},[a("a",{class:{alertinfbox:s.clickto},attrs:{href:s.link,target:t.clicktoopen(i)},on:{click:function(s){t.clickindex(i)}}},[a("div",{staticClass:"rowbox-4 innewsBannerbox"},[a("div",{staticClass:"bannerItem"},[a("div",{staticClass:"bannerItem_imgout",style:"background-image: url("+s.bannerimg+");"},[a("img",{staticClass:"img-responsive",attrs:{src:"images/newsBanner.png",alt:s.name}})]),t._v(" "),a("div",{staticClass:"newsText"},[a("div",{staticClass:"flexbox"},[a("div",[a("div",{staticClass:"title"},[a("p",[t._v(t._s(s.name))])]),t._v(" "),a("div",{staticClass:"date"},[t._v(t._s(s.time))])]),t._v(" "),s.downloadbtn?a("a",{staticClass:"downloadlink",attrs:{href:s.downloadlink,target:"_blank"}},[a("div",{staticClass:"download"},[a("i",{staticClass:"icon-information_download"})])]):t._e()])])])])])])}))]),t._v(" "),a("div",{staticClass:"pagectrlbox"},[a("li",{staticClass:"pagectrl tofirstpage icon-firstpage"}),t._v(" "),a("li",{staticClass:"pagectrl prepage icon-prepage"}),t._v(" "),a("li",{staticClass:"pagenum active"},[t._v("1")]),t._v(" "),a("li",{staticClass:"pagenum"},[t._v("2")]),t._v(" "),a("li",{staticClass:"pagenum"},[t._v("3")]),t._v(" "),a("li",{staticClass:"pagenum"},[t._v("4")]),t._v(" "),a("li",{staticClass:"pagenum"},[t._v("5")]),t._v(" "),a("li",{staticClass:"pagectrl nextpage icon-nextpage"}),t._v(" "),a("li",{staticClass:"pagectrl tolastpage icon-lastpage"})])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:3==t.nowlistpage,expression:"nowlistpage==3"}],attrs:{id:"news_downloadpage"}},[a("div",{staticClass:"newsBanner"},t._l(t.newss,function(s,i){return a("div",{directives:[{name:"show",rawName:"v-show",value:s.newstype==t.nowlistpage,expression:"news.newstype==nowlistpage"}],staticClass:"contentpage_contentlist_out"},[a("a",{attrs:{href:s.bannerimg,target:"_blank"}},[a("div",{staticClass:"fadeInDown contentpage_contentlist_in",attrs:{"data-wow-delay":"0.4s"}},[a("div",{staticClass:"contentpage_text"},[a("div",{staticClass:"newsText"},[a("div",{staticClass:"newscontent"},[a("p",[t._v(t._s(s.containtext))])]),t._v(" "),a("div",{staticClass:"newstype"},[t._v("\n                                                    "+t._s(s.name)+"\n                                                ")]),t._v(" "),a("div",{staticClass:"newsdownload"},[a("div",{staticClass:"icon-download"})])]),t._v(" "),a("div",{staticClass:"date"},[t._v(t._s(s.time))])])])])])})),t._v(" "),a("div",{staticClass:"pagectrlbox"},[a("li",{staticClass:"pagectrl tofirstpage icon-firstpage"}),t._v(" "),a("li",{staticClass:"pagectrl prepage icon-prepage"}),t._v(" "),a("li",{staticClass:"pagenum active"},[t._v("1")]),t._v(" "),a("li",{staticClass:"pagenum"},[t._v("2")]),t._v(" "),a("li",{staticClass:"pagenum"},[t._v("3")]),t._v(" "),a("li",{staticClass:"pagenum"},[t._v("4")]),t._v(" "),a("li",{staticClass:"pagenum"},[t._v("5")]),t._v(" "),a("li",{staticClass:"pagectrl nextpage icon-nextpage"}),t._v(" "),a("li",{staticClass:"pagectrl tolastpage icon-lastpage"})])])])])])])])],1)},[],!1,null,null,null);n.options.__file="index.vue";s.default=n.exports}}]);