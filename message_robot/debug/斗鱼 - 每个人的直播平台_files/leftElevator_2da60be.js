(window.shark_home_jsonp=window.shark_home_jsonp||[]).push([[20],{"1c767":function(e,t){e.exports=sdkd96911f1719081126911},"4aa1c":function(e,t,o){"use strict";o.r(t);o("c4dc3"),o("8f58d");var r=o("7ca7d"),n=o.n(r),a=o("eb3e2");var i=function LeftElevatorEpics(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,LeftElevatorEpics)},l=(0,n.a.combineEpicsClass)(i);var c,s,u,f,p,d,h,v={leftElevatorData:function LeftElevatorReducer(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return arguments[1],e}},m=o("1a22b"),g=o.n(m),b=o("447d8"),E=o("7912b"),_=o("2b78b"),y=o("db47a"),w=(o("a2997"),o("cdc07")),S="/shark/live/src/pages/homePage/leftElevatorModule/components/leftElevator/leftElevator.js";function _initDefineProp(e,t,o,r){o&&Object.defineProperty(e,t,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(r):void 0})}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function _inherits(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function _defaults(e,t){for(var o=Object.getOwnPropertyNames(t),r=0;r<o.length;r++){var n=o[r],a=Object.getOwnPropertyDescriptor(t,n);a&&a.configurable&&void 0===e[n]&&Object.defineProperty(e,n,a)}return e}(e,t))}function _applyDecoratedDescriptor(e,t,o,r,n){var a={};return Object.keys(r).forEach(function(e){a[e]=r[e]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=o.slice().reverse().reduce(function(o,r){return r(e,t,o)||o},a),n&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(n):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}var M=n.a.Service,D="https://shark2.douyucdn.cn/front-publish/sdk-file-master/title_default_icon_75e2a10.png",I=(c=M(a.DataCenter.common),s=M(a.DataCenter.global),u=M(a.DataCenter.event),f=function(e){function LeftElevator(){var t,o,r=this;!function leftElevator_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,LeftElevator);for(var n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];return t=o=_possibleConstructorReturn(this,e.call.apply(e,[this].concat(a))),_initDefineProp(o,"common",p,o),_initDefineProp(o,"globalData",d,o),_initDefineProp(o,"event",h,o),o.state={currentSort:0,hoverSort:0,currentIndex:-1,hoverIndex:-1,config:[],showElevator:!1,selectBgMap:{},hoverBgMap:{},isBigElevator:!1},o.handleResize=function(e){var t=o.innerWidth;(t>=1430&&e<1430||t<1430&&e>=1430)&&(o.innerWidth=e,o.getSelectItem(document.body.scrollTop||document.documentElement.scrollTop)),o.setState({isBigElevator:e>=1430})},o.getSelectItem=function(e){var t=o.config;if(t&&t.length>0){var r=null,n=t.find(function(t,n){var a=o.loftMap[t.sort];if(!a)return!1;var i=a.offsetTop,l=a.offsetHeight,c=i+l,s=i,u=e+o.headerHeight+l/2;return r=n,c>u&&u>=s});if(n){if(o.state.currentSort!==n.sort){var a=o.state.selectBgMap;a[r]||(a[r]=t[r].selectBg),o.setState({currentIndex:r,currentSort:n.sort,selectBgMap:a})}}else o.setState({currentSort:0,currentIndex:-1})}},o.handleSelect=function(e){e.preventDefault();var t=o.state,r=t.hoverIndex,n=t.hoverSort,a=t.selectBgMap,i=o.config;if(-1!==r){Object(y.dysub2)({action_code:"13010010C001",event_id:1,type:1,code:"13010010C001.1.1",p:r+1}),a[r]||(a[r]=i[r].selectBg),o.setState({currentIndex:r,currentSort:n,hoverIndex:-1,selectBgMap:a});var l=o.loftMap[n];if(l){document.documentElement.clientHeight,l.offsetHeight;var c=l.offsetTop,s=(void 0===c?0:c)-o.headerHeight;w.a.smoothScrollTo(s)}}},o.render=function(){var e=o.state,t=e.currentIndex,n=(e.hoverIndex,e.showElevator),a=e.selectBgMap,i=e.hoverBgMap,l=e.isBigElevator,c=o.config;return c&&c.length>0?g.a.createElement("div",{className:"Elevator "+(n?"is-show":""),__source:{fileName:S,lineNumber:271},__self:r},c.map(function(e,n){return g.a.createElement("a",{key:e.sort,className:"Elevator-item "+(n===t?"is-active":""),style:{backgroundImage:a[n]?"url("+a[n]+_.imgSuffix+")":""},onMouseEnter:function onMouseEnter(){return o.handleMouseEnter(n,e.sort)},onClick:function onClick(e){return o.handleSelect(e)},__source:{fileName:S,lineNumber:274},__self:r},g.a.createElement("i",{__source:{fileName:S,lineNumber:281},__self:r},g.a.createElement(E.b,{className:"Elevator-icon",src:e.icon,defaultSrc:D,errorSrc:D,alt:e.name,__source:{fileName:S,lineNumber:282},__self:r})),g.a.createElement("span",{style:{backgroundImage:i[n]&&l?"url("+i[n]+_.imgSuffix+")":""},__source:{fileName:S,lineNumber:290},__self:r},g.a.createElement("strong",{__source:{fileName:S,lineNumber:291},__self:r},e.name)))})):null},_possibleConstructorReturn(o,t)}return _inherits(LeftElevator,e),LeftElevator.prototype.componentDidMount=function componentDidMount(){var e=this,t=(this.globalData.get("$mainData")||[]).find(function(e){return"elevator"===e.type}),o=t&&t.ds?t.ds:[];if(o&&o.length>0){this.config=o,this.scrollDistance=0,this.loftMap={},this.configMap={},this.headerHeight=69,this.minWidth=1430,o.forEach(function(t){e.configMap[t.sort]=t,e.loftMap[t.sort]=document.getElementById("lazyModule"+t.sort)}),this.innerWidth=window.innerWidth,this.setState({isBigElevator:window.innerWidth>=1430}),this.event.register(window,"resize",{debounce:100}).subscribe(function(t){var o=document.body.scrollTop||document.documentElement.scrollTop;e.showElevator(o),e.handleResize(window.innerWidth)}),this.event.register(document,"scroll",{debounce:100}).subscribe(function(t){var o=document.body.scrollTop||document.documentElement.scrollTop;e.showElevator(o),e.getSelectItem(o)});var r=document.body.scrollTop||document.documentElement.scrollTop;this.showElevator(r),this.getSelectItem(r)}},LeftElevator.prototype.showElevator=function showElevator(e){var t=this.config,showElevator=!1;if(t&&t.length>0){var o=t[0].sort;if(!this.loftMap[o])return;var r=this.loftMap[o],n=r.offsetTop;r.offsetHeight,document.documentElement.clientHeight;e+this.headerHeight>=n&&(showElevator=!0),!this.state.showElevator&&showElevator&&Object(y.dysub2)({action_code:"13010010C",event_id:3,type:1,code:"13010010C.3.1"})}this.setState({showElevator:showElevator})},LeftElevator.prototype.handleMouseEnter=function handleMouseEnter(e,t){var o=this.state,r=o.currentSort,n=o.hoverBgMap,a=o.isBigElevator,i=this.config;if(t!==r){!n[e]&&a&&(n[e]=i[e].hoverBg),this.setState({hoverIndex:e,hoverSort:t,hoverBgMap:n})}},LeftElevator.prototype.handleMouseLeave=function handleMouseLeave(){this.setState({hoverIndex:-1})},LeftElevator}(g.a.Component),p=_applyDecoratedDescriptor(f.prototype,"common",[c],{enumerable:!0,initializer:null}),d=_applyDecoratedDescriptor(f.prototype,"globalData",[s],{enumerable:!0,initializer:null}),h=_applyDecoratedDescriptor(f.prototype,"event",[u],{enumerable:!0,initializer:null}),f),C=Object(b.connect)(function mapStateToProps(e){return{leftElevatorData:e.leftElevatorData}})(I),B=n.a.StoreFactory,T=n.a.createApp({name:"LeftElevatorApp",providers:[{name:"component",useFactory:function useFactory(){return C}},{name:"store",useFactory:function useFactory(){return B.getInstance(window.__INITIAL_STATE__,v,l)}}]});a.DataCenter.event.load().subscribe(function(e){var t=new T;window.LeftElevatorApp=t,t.push=function(e){return t.registerApp.apply(t,e)},n.a.render(t,document.getElementById("js-left-elevator"))})},86962:function(e,t){e.exports=vendorb74966ba39e6c70fa608},a2997:function(e,t,o){}},[["4aa1c",0,3,2,1]]]);
//# sourceMappingURL=http://fedci.dz11.com:4567/home/online/sourcemaps/leftElevator_2da60be.js.map