(window.shark_home_jsonp=window.shark_home_jsonp||[]).push([[21],{"1c767":function(e,t){e.exports=sdkd96911f1719081126911},86962:function(e,t){e.exports=vendorb74966ba39e6c70fa608},c9453:function(e,t,r){"use strict";r.r(t);r("c4dc3"),r("8f58d");var a=r("7ca7d"),o=r.n(a),l=r("eb3e2");var s=function FooterEpics(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,FooterEpics)},i=(0,o.a.combineEpicsClass)(s);var n,m,c,_={footerData:function FooterReducer(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return arguments[1],e}},u=r("1a22b"),f=r.n(u),N="/shark/live/src/pages/homePage/footerModule/components/footer.js";function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function _inherits(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function _defaults(e,t){for(var r=Object.getOwnPropertyNames(t),a=0;a<r.length;a++){var o=r[a],l=Object.getOwnPropertyDescriptor(t,o);l&&l.configurable&&void 0===e[o]&&Object.defineProperty(e,o,l)}return e}(e,t))}var h=(n=(0,o.a.Service)(l.DataCenter.global),m=function(e){function Footer(){var t,r;!function footer_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Footer);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return t=r=_possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),function _initDefineProp(e,t,r,a){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(a):void 0})}(r,"globalData",c,r),r.state={linkArr:[]},_possibleConstructorReturn(r,t)}return _inherits(Footer,e),Footer.prototype.componentDidMount=function componentDidMount(){var e=(this.globalData.get("$mainData")||[]).find(function(e){return"links"===e.type}),t=e&&e.ds?e.ds:[];this.setState({linkArr:t})},Footer.prototype.render=function render(){var e=this,t=this.state.linkArr;return f.a.createElement("section",{className:"layout-Wrapper",__source:{fileName:N,lineNumber:29},__self:this},f.a.createElement("div",{className:"HomeFooter-friendLink",__source:{fileName:N,lineNumber:30},__self:this},f.a.createElement("h2",{className:"HomeFooter-friendLinkTitle",__source:{fileName:N,lineNumber:31},__self:this},"\u53cb\u60c5\u94fe\u63a5"),f.a.createElement("ul",{className:"HomeFooter-friendLinkList",__source:{fileName:N,lineNumber:32},__self:this},t.map(function(t){return f.a.createElement("li",{key:t.linkid,__source:{fileName:N,lineNumber:35},__self:e},f.a.createElement("a",{className:"HomeFooter-friendLinkItem",href:t.url,target:"_blank",title:t.title,__source:{fileName:N,lineNumber:36},__self:e},t.title))}))),f.a.createElement("div",{className:"HomeFooter-outlink",__source:{fileName:N,lineNumber:49},__self:this},f.a.createElement("ul",{className:"HomeFooter-outlinkList",__source:{fileName:N,lineNumber:50},__self:this},f.a.createElement("li",{__source:{fileName:N,lineNumber:51},__self:this},f.a.createElement("a",{className:"HomeFooter-outlinkItem",target:"_blank",href:"https://www.douyu.com/cms/about/about_us.html",__source:{fileName:N,lineNumber:52},__self:this},"\u5173\u4e8e\u6211\u4eec"),f.a.createElement("span",{className:"HomeFooter-seperator",__source:{fileName:N,lineNumber:53},__self:this},"|")),f.a.createElement("li",{__source:{fileName:N,lineNumber:55},__self:this},f.a.createElement("a",{className:"HomeFooter-outlinkItem",target:"_blank",href:"http://ir.douyu.com/",__source:{fileName:N,lineNumber:56},__self:this},"Investor Relations"),f.a.createElement("span",{className:"HomeFooter-seperator",__source:{fileName:N,lineNumber:57},__self:this},"|")),f.a.createElement("li",{__source:{fileName:N,lineNumber:59},__self:this},f.a.createElement("a",{className:"HomeFooter-outlinkItem",target:"_blank",href:"https://kefu.douyu.com/",__source:{fileName:N,lineNumber:60},__self:this},"\u8054\u7cfb\u5ba2\u670d"),f.a.createElement("span",{className:"HomeFooter-seperator",__source:{fileName:N,lineNumber:61},__self:this},"|")),f.a.createElement("li",{__source:{fileName:N,lineNumber:63},__self:this},f.a.createElement("a",{className:"HomeFooter-outlinkItem",target:"_blank",href:"https://www.douyu.com/t/zhaopin",__source:{fileName:N,lineNumber:64},__self:this},"\u62db\u8058\u4fe1\u606f"),f.a.createElement("span",{className:"HomeFooter-seperator",__source:{fileName:N,lineNumber:65},__self:this},"|")),f.a.createElement("li",{__source:{fileName:N,lineNumber:67},__self:this},f.a.createElement("a",{className:"HomeFooter-outlinkItem",target:"_blank",href:"https://www.douyu.com/cms/about/cooperate.html",__source:{fileName:N,lineNumber:68},__self:this},"\u53cb\u60c5\u94fe\u63a5"),f.a.createElement("span",{className:"HomeFooter-seperator",__source:{fileName:N,lineNumber:69},__self:this},"|")),f.a.createElement("li",{__source:{fileName:N,lineNumber:71},__self:this},f.a.createElement("a",{className:"HomeFooter-outlinkItem",target:"_blank",href:"https://www.douyu.com/cms/zhibo/list_16.shtml",__source:{fileName:N,lineNumber:72},__self:this},"\u6211\u8981\u76f4\u64ad"),f.a.createElement("span",{className:"HomeFooter-seperator",__source:{fileName:N,lineNumber:73},__self:this},"|")),f.a.createElement("li",{__source:{fileName:N,lineNumber:75},__self:this},f.a.createElement("a",{className:"HomeFooter-outlinkItem",target:"_blank",href:"https://kefu.douyu.com/nx/report.html",__source:{fileName:N,lineNumber:76},__self:this},"\u5ec9\u6d01\u6597\u9c7c"),f.a.createElement("span",{className:"HomeFooter-seperator",__source:{fileName:N,lineNumber:77},__self:this},"|")),f.a.createElement("li",{__source:{fileName:N,lineNumber:79},__self:this},f.a.createElement("a",{className:"HomeFooter-outlinkItem",target:"_blank",href:"https://www.douyu.com/member/message/release",__source:{fileName:N,lineNumber:80},__self:this},"\u610f\u89c1\u53cd\u9988"),f.a.createElement("span",{className:"HomeFooter-seperator",__source:{fileName:N,lineNumber:81},__self:this},"|")),f.a.createElement("li",{__source:{fileName:N,lineNumber:83},__self:this},f.a.createElement("a",{className:"HomeFooter-outlinkItem",target:"_blank",href:"https://www.douyu.com/cms/gong/201509/22/2229.shtml",__source:{fileName:N,lineNumber:84},__self:this},"\u7248\u6743\u4fdd\u62a4\u6295\u8bc9\u6307\u5f15"),f.a.createElement("span",{className:"HomeFooter-seperator",__source:{fileName:N,lineNumber:85},__self:this},"|")),f.a.createElement("li",{__source:{fileName:N,lineNumber:87},__self:this},f.a.createElement("a",{className:"HomeFooter-outlinkItem",target:"_blank",href:"/protocal/privacy",__source:{fileName:N,lineNumber:88},__self:this},"\u9690\u79c1\u6743\u653f\u7b56"),f.a.createElement("span",{className:"HomeFooter-seperator",__source:{fileName:N,lineNumber:89},__self:this},"|")),f.a.createElement("li",{__source:{fileName:N,lineNumber:91},__self:this},f.a.createElement("a",{className:"HomeFooter-outlinkItem",target:"_blank",href:"/protocal/member",__source:{fileName:N,lineNumber:92},__self:this},"\u7528\u6237\u6ce8\u518c\u534f\u8bae"),f.a.createElement("span",{className:"HomeFooter-seperator",__source:{fileName:N,lineNumber:93},__self:this},"|")),f.a.createElement("li",{__source:{fileName:N,lineNumber:95},__self:this},f.a.createElement("a",{className:"HomeFooter-outlinkItem",target:"_blank",href:"https://www.douyu.com/cms/gong/201605/30/3643.shtml",__source:{fileName:N,lineNumber:96},__self:this},"\u6597\u9c7c\u5b98\u65b9QQ\u53f7"),f.a.createElement("span",{className:"HomeFooter-seperator",__source:{fileName:N,lineNumber:97},__self:this},"|")),f.a.createElement("li",{__source:{fileName:N,lineNumber:99},__self:this},f.a.createElement("a",{className:"HomeFooter-outlinkItem",target:"_blank",href:"http://jb.ccm.gov.cn/",__source:{fileName:N,lineNumber:100},__self:this},"12318\u5168\u56fd\u6587\u5316\u5e02\u573a\u4e3e\u62a5\u7f51\u7ad9"),f.a.createElement("span",{className:"HomeFooter-seperator",__source:{fileName:N,lineNumber:101},__self:this},"|")),f.a.createElement("li",{__source:{fileName:N,lineNumber:103},__self:this},f.a.createElement("a",{className:"HomeFooter-outlinkItem",target:"_blank",href:"http://report.12377.cn:13225/toreportinputNormal_anis.do",__source:{fileName:N,lineNumber:104},__self:this},"\u7f51\u4e0a\u6709\u5bb3\u4fe1\u606f\u4e3e\u62a5\u4e13\u533a"),f.a.createElement("span",{className:"HomeFooter-seperator",__source:{fileName:N,lineNumber:105},__self:this},"|")),f.a.createElement("li",{__source:{fileName:N,lineNumber:107},__self:this},f.a.createElement("a",{className:"HomeFooter-footerIcon HomeFooter-DYQQ",target:"_blank",href:"http://jq.qq.com/?_wv=1027&k=c63S3v",__source:{fileName:N,lineNumber:108},__self:this})),f.a.createElement("li",{__source:{fileName:N,lineNumber:110},__self:this},f.a.createElement("a",{className:"HomeFooter-footerIcon HomeFooter-DYWechat",__source:{fileName:N,lineNumber:111},__self:this},f.a.createElement("div",{className:"HomeFooter-wechatQR",__source:{fileName:N,lineNumber:112},__self:this}))),f.a.createElement("li",{__source:{fileName:N,lineNumber:115},__self:this},f.a.createElement("a",{className:"HomeFooter-footerIcon HomeFooter-DYWeibo",target:"_blank",href:"http://weibo.com/u/3982726153",__source:{fileName:N,lineNumber:116},__self:this}))),f.a.createElement("p",{className:"HomeFooter-companyInfo",__source:{fileName:N,lineNumber:119},__self:this},"\u6b66\u6c49\u6597\u9c7c\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8 \u7248\u6743\u6240\u6709 \xa9www.douyu.com",f.a.createElement("a",{href:"http://www.beian.miit.gov.cn",target:"_blank",__source:{fileName:N,lineNumber:121},__self:this},"\u9102ICP\u590715011961\u53f7-1"),"|",f.a.createElement("a",{className:"HomeFooter-ghs",href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42018502000107",target:"_blank",__source:{fileName:N,lineNumber:122},__self:this},"\u9102\u516c\u7f51\u5b89\u5907 42018502000107\u53f7"),"|",f.a.createElement("a",{className:"HomeFooter-gswj",href:"http://whgswj.whhd.gov.cn:8089/whwjww/indexquery/indexqueryAction!dizview.dhtml?chr_id=9d45299953ce85733b2ef87d05820ac0&bus_ent_id=420000000009311039&bus_ent_chr_id=82c93ffb8f1b40458298daf104c3f87d",target:"_blank",__source:{fileName:N,lineNumber:125},__self:this},"\u5de5\u5546\u7f51\u76d1"),"|",f.a.createElement("a",{className:"HomeFooter-kxwz",href:"https://shark2.douyucdn.cn/front-publish/sdk-file-master/dyidcard2018_fb6e533.jpg",target:"_blank",__source:{fileName:N,lineNumber:128},__self:this},"\u9102\u7f51\u6587\uff082018\uff099760-291\u53f7")),f.a.createElement("p",{className:"HomeFooter-contact",__source:{fileName:N,lineNumber:132},__self:this},"\u516c\u53f8\u5730\u5740\uff1a\u6e56\u5317\u7701\u6b66\u6c49\u5e02\u4e1c\u6e56\u5f00\u53d1\u533a\u5149\u8c37\u8f6f\u4ef6\u56edF3\u680b19\u697c \u5ba2\u6237\u670d\u52a1\u70ed\u7ebf\uff1a027-87750710/027-87057679")))},Footer}(f.a.Component),c=function _applyDecoratedDescriptor(e,t,r,a,o){var l={};return Object.keys(a).forEach(function(e){l[e]=a[e]}),l.enumerable=!!l.enumerable,l.configurable=!!l.configurable,("value"in l||l.initializer)&&(l.writable=!0),l=r.slice().reverse().reduce(function(r,a){return a(e,t,r)||r},l),o&&void 0!==l.initializer&&(l.value=l.initializer?l.initializer.call(o):void 0,l.initializer=void 0),void 0===l.initializer&&(Object.defineProperty(e,t,l),l=null),l}(m.prototype,"globalData",[n],{enumerable:!0,initializer:null}),m),b=o.a.StoreFactory,p=o.a.createApp({name:"FooterApp",providers:[{name:"component",useFactory:function useFactory(){return h}},{name:"store",useFactory:function useFactory(){return b.getInstance(window.__INITIAL_STATE__,_,i)}}]});l.DataCenter.event.load().subscribe(function(e){var t=new p;o.a.render(t,document.getElementById("js-footer"))})}},[["c9453",0]]]);
//# sourceMappingURL=http://fedci.dz11.com:4567/home/online/sourcemaps/footerLink_66bad7d.js.map