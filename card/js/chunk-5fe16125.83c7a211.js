(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fe16125"],{"023d":function(t,e,i){"use strict";function n(t,e){void 0===e&&(e=window);var i=t;while(i&&"HTML"!==i.tagName&&"BODY"!==i.tagName&&1===i.nodeType&&i!==e){var n=window.getComputedStyle(i),r=n.overflowY;if("scroll"===r||"auto"===r)return i;i=i.parentNode}return e}function r(t){return"scrollTop"in t?t.scrollTop:t.pageYOffset}function s(t,e){"scrollTop"in t?t.scrollTop=e:t.scrollTo(t.scrollX,e)}function a(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function o(t){return(t===window?0:t.getBoundingClientRect().top)+r(window)}function l(t){return t===window?t.innerHeight:t.getBoundingClientRect().height}i.d(e,"c",function(){return n}),i.d(e,"d",function(){return r}),i.d(e,"f",function(){return s}),i.d(e,"b",function(){return a}),i.d(e,"a",function(){return o}),i.d(e,"e",function(){return l})},"0a84":function(t,e,i){},"0ba6":function(t,e,i){"use strict";i.r(e);var n,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),i("van-cell-group",[i("van-field",{attrs:{"left-icon":"phone-o",placeholder:"请输入手机号","error-message":t.error_message,error:t.is_error,maxlength:"11"},on:{input:t.tel},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),i("van-field",{attrs:{center:"",clearable:"","left-icon":"envelop-o",placeholder:"请输入短信验证码"},model:{value:t.sms,callback:function(e){t.sms=e},expression:"sms"}},[i("van-button",{attrs:{slot:"button",round:"",size:"small",type:"primary"},on:{click:t.getTelCode},slot:"button"},[t._v("获取验证码"),t.is_clock?i("span",[t._v("("+t._s(t.lastTime)+"s)")]):t._e()])],1)],1),i("van-button",{attrs:{block:"",size:"normal",round:"",id:"loginBtn",type:"info"}},[t._v("登陆")])],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"yytitle"},[i("div",{staticClass:"yytitle_left"},[i("img",{attrs:{src:"https://images.yyhealth.com//technician/201903/2019031415260585775c8a020ddc213.png",alt:""}})]),i("div",{staticClass:"yytitle_right"},[i("span",[t._v("远元健康"),i("br"),t._v("为您的生命加分")])])])}],a=i("bd86"),o=(i("2a53"),i("34e9")),l=(i("3cd0"),i("7f75"),i("565f")),c=(i("c625"),i("b650")),u=(i("1157"),{components:(n={},Object(a["a"])(n,c["a"].name,c["a"]),Object(a["a"])(n,l["a"].name,l["a"]),Object(a["a"])(n,o["a"].name,o["a"]),n),data:function(){return{username:"",phone:"",error_message:"",is_error:!1,sms:"",lastTime:5,is_clock:!1,canClick:!0}},mounted:function(){},methods:{tel:function(){this.phone&&(this.is_error=!1,this.error_message="")},getTelCode:function(){var t=this;if(0!=this.phone.length){var e=/^1[3456789]\d{9}$/;if(e.test(this.phone)){if(!this.canClick)return;this.canClick=!1,this.is_clock=!0;var i=window.setInterval(function(){t.lastTime--,t.lastTime<0&&(window.clearInterval(i),t.is_clock=!1,t.canClick=!0,t.lastTime=5)},1e3)}else this.error_message="请输入正确的手机号"}else this.is_error=!0},login:function(){}}}),d=u,h=(i("8884"),i("2877")),f=Object(h["a"])(d,r,s,!1,null,null,null);e["default"]=f.exports},"2a53":function(t,e,i){"use strict";i("3cd0")},"34e9":function(t,e,i){"use strict";var n=i("2638"),r=i.n(n),s=i("a142"),a=i("ba31"),o=Object(s["i"])("cell-group"),l=o[0],c=o[1];function u(t,e,i,n){var s=t("div",r()([{class:[c(),{"van-hairline--top-bottom":e.border}]},Object(a["b"])(n,!0)]),[i["default"]&&i["default"]()]);return e.title?t("div",[t("div",{class:c("title")},[e.title]),s]):s}u.props={title:String,border:{type:Boolean,default:!0}},e["a"]=l(u)},"543e":function(t,e,i){"use strict";var n=i("2638"),r=i.n(n),s=i("a142"),a=i("ba31"),o=Object(s["i"])("loading"),l=o[0],c=o[1],u="#c9c9c9";function d(t,e,i,n){var s=e.color,o=e.size,l=e.type,d="white"===s||"black"===s?s:"",h={color:"black"===s?u:s,width:o,height:o},f=[];if("spinner"===l)for(var b=0;b<12;b++)f.push(t("i"));var p="circular"===l&&t("svg",{class:c("circular"),attrs:{viewBox:"25 25 50 50"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})]);return t("div",r()([{class:c([l,d]),style:h},Object(a["b"])(n,!0)]),[t("span",{class:c("spinner",l)},[f,p])])}d.props={size:String,type:{type:String,default:"circular"},color:{type:String,default:u}},e["a"]=l(d)},"565f":function(t,e,i){"use strict";var n=i("2638"),r=i.n(n),s=i("c31d"),a=i("ad06"),o=i("7744"),l=i("dfaf"),c=i("a142"),u=i("db78"),d=i("023d");function h(t){return/^\d+$/.test(t)}var f=Object(c["i"])("field"),b=f[0],p=f[1];e["a"]=b({inheritAttrs:!1,props:Object(s["a"])({},l["a"],{error:Boolean,leftIcon:String,rightIcon:String,readonly:Boolean,clearable:Boolean,labelWidth:[String,Number],labelAlign:String,inputAlign:String,onIconClick:Function,autosize:[Boolean,Object],errorMessage:String,errorMessageAlign:String,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(c["c"])(this.value)&&!this.readonly},listeners:function(){return Object(s["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur})},labelStyle:function(){var t=this.labelWidth;if(t){var e=h(String(t))?t+"px":t;return{maxWidth:e,minWidth:e}}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){void 0===t&&(t=this.$refs.input);var e=t,i=e.value,n=this.$attrs.maxlength;return"number"===this.type&&Object(c["c"])(n)&&i.length>n&&(i=i.slice(0,n),t.value=i),i},onInput:function(t){this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),Object(c["d"])()&&window.scrollTo(0,Object(d["b"])())},onClickLeftIcon:function(){this.$emit("click-left-icon")},onClickRightIcon:function(){this.$emit("click-icon"),this.$emit("click-right-icon"),this.onIconClick&&this.onIconClick()},onClear:function(t){Object(u["c"])(t),this.$emit("input",""),this.$emit("clear")},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf("."),n=e>=48&&e<=57||46===e&&i||45===e;n||Object(u["c"])(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(c["f"])(this.autosize)){var i=this.autosize,n=i.maxHeight,r=i.minHeight;n&&(e=Math.min(e,n)),r&&(e=Math.max(e,r))}e&&(t.style.height=e+"px")}},renderInput:function(){var t=this.$createElement,e={ref:"input",class:p("control",this.inputAlign),domProps:{value:this.value},attrs:Object(s["a"])({},this.$attrs,{readonly:this.readonly}),on:this.listeners};return"textarea"===this.type?t("textarea",r()([{},e])):t("input",r()([{attrs:{type:this.type}},e]))},renderLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:p("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(a["a"],{attrs:{name:this.leftIcon}})])},renderRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||e("icon")||this.rightIcon||this.icon;if(i)return t("div",{class:p("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||e("icon")||t(a["a"],{attrs:{name:this.rightIcon||this.icon}})])}},render:function(t){var e,i=this.slots,n=this.labelAlign,r={icon:this.renderLeftIcon};return i("label")&&(r.title=function(){return i("label")}),t(o["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,titleStyle:this.labelStyle,titleClass:p("label",n)},class:p((e={error:this.error,disabled:this.$attrs.disabled},e["label-"+n]=n,e["min-height"]="textarea"===this.type&&!this.autosize,e)),scopedSlots:r},[t("div",{class:p("body")},[this.renderInput(),this.showClear&&t(a["a"],{attrs:{name:"clear"},class:p("clear"),on:{touchstart:this.onClear}}),this.renderRightIcon(),i("button")&&t("div",{class:p("button")},[i("button")])]),this.errorMessage&&t("div",{class:p("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},7744:function(t,e,i){"use strict";var n=i("c31d"),r=i("2638"),s=i.n(r),a=i("a142"),o=i("dfaf"),l=i("ba31"),c=i("48f4"),u=i("ad06"),d=Object(a["i"])("cell"),h=d[0],f=d[1];function b(t,e,i,n){var r=e.icon,o=e.size,d=e.title,h=e.label,b=e.value,p=e.isLink,g=e.arrowDirection,v=i.title||Object(a["c"])(d),m=i["default"]||Object(a["c"])(b),y=i.label||Object(a["c"])(h),k=y&&t("div",{class:[f("label"),e.labelClass]},[i.label?i.label():h]),O=v&&t("div",{class:[f("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[d]),k]),S=m&&t("div",{class:[f("value",{alone:!i.title&&!d}),e.valueClass]},[i["default"]?i["default"]():t("span",[b])]),j=i.icon?i.icon():r&&t(u["a"],{class:f("left-icon"),attrs:{name:r}}),w=i["right-icon"],C=w?w():p&&t(u["a"],{class:f("right-icon"),attrs:{name:g?"arrow-"+g:"arrow"}}),x=function(t){Object(l["a"])(n,"click",t),Object(c["a"])(n)},$={center:e.center,required:e.required,borderless:!e.border,clickable:p||e.clickable};return o&&($[o]=o),t("div",s()([{class:f($),on:{click:x}},Object(l["b"])(n)]),[j,O,S,C,i.extra&&i.extra()])}b.props=Object(n["a"])({},o["a"],c["b"],{clickable:Boolean,arrowDirection:String}),e["a"]=h(b)},"7f75":function(t,e,i){},8884:function(t,e,i){"use strict";var n=i("0a84"),r=i.n(n);r.a},b650:function(t,e,i){"use strict";var n=i("c31d"),r=i("2638"),s=i.n(r),a=i("a142"),o=i("ba31"),l=i("48f4"),c=i("543e"),u=Object(a["i"])("button"),d=u[0],h=u[1];function f(t,e,i,n){var r=e.tag,a=e.type,u=e.disabled,d=e.loading,f=e.hairline,b=e.loadingText,p=function(t){d||u||(Object(o["a"])(n,"click",t),Object(l["a"])(n))},g=function(t){Object(o["a"])(n,"touchstart",t)},v=[h([a,e.size,{loading:d,disabled:u,hairline:f,block:e.block,plain:e.plain,round:e.round,square:e.square,"bottom-action":e.bottomAction}]),{"van-hairline--surround":f}];return t(r,s()([{class:v,attrs:{type:e.nativeType,disabled:u},on:{click:p,touchstart:g}},Object(o["b"])(n)]),[d?[t(c["a"],{attrs:{size:e.loadingSize,color:"default"===a?void 0:""}}),b&&t("span",{class:h("loading-text")},[b])]:t("span",{class:h("text")},[i["default"]?i["default"]():e.text])])}f.props=Object(n["a"])({},l["b"],{text:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,bottomAction:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),e["a"]=d(f)},c625:function(t,e,i){"use strict";i("3cd0")},db78:function(t,e,i){"use strict";i.d(e,"b",function(){return a}),i.d(e,"a",function(){return o}),i.d(e,"d",function(){return l}),i.d(e,"c",function(){return c});var n=i("a142"),r=!1;if(!n["g"])try{var s={};Object.defineProperty(s,"passive",{get:function(){r=!0}}),window.addEventListener("test-passive",null,s)}catch(u){}function a(t,e,i,s){void 0===s&&(s=!1),n["g"]||t.addEventListener(e,i,!!r&&{capture:!1,passive:s})}function o(t,e,i){n["g"]||t.removeEventListener(e,i)}function l(t){t.stopPropagation()}function c(t,e){("boolean"!==typeof t.cancelable||t.cancelable)&&t.preventDefault(),e&&l(t)}},dfaf:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[String,Number],value:[String,Number],label:[String,Number],border:{type:Boolean,default:!0}}}}]);
//# sourceMappingURL=chunk-5fe16125.83c7a211.js.map