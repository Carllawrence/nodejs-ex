(function(){var l;function aa(a,b){function c(){}
c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
for(var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ca="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,da=["String",
"prototype","startsWith"],ga=0;ga<da.length-1;ga++){var ha=da[ga];ha in ca||(ca[ha]={});ca=ca[ha]}
var ia=da[da.length-1],ja=ca[ia],ka=ja?ja:function(a,b){var c;if(null==this)throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");c=this+"";a+="";for(var d=c.length,e=a.length,f=Math.max(0,Math.min(b|0,c.length)),g=0;g<e&&f<d;)if(c[f++]!=a[g++])return!1;return g>=e};
ka!=ja&&null!=ka&&ba(ca,ia,{configurable:!0,writable:!0,value:ka});var n=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||n,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function la(a){a.ma=void 0;a.getInstance=function(){return a.ma?a.ma:a.ma=new a}}
function ma(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function na(a){return"array"==ma(a)}
function oa(a){var b=ma(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function u(a){return"string"==typeof a}
function pa(a){return"function"==ma(a)}
function qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ra(a){return a[sa]||(a[sa]=++ua)}
var sa="closure_uid_"+(1E9*Math.random()>>>0),ua=0;function va(a,b,c){return a.call.apply(a.bind,arguments)}
function wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v=va:v=wa;return v.apply(null,arguments)}
function w(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var x=Date.now||function(){return+new Date};
function z(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.pb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var xa=document,A=window;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
z(B,Error);B.prototype.name="CustomError";var ya=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function za(a,b){return a<b?-1:a>b?1:0}
function Aa(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ba=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ca=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function Da(a,b){var c;a:{c=a.length;for(var d=u(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:u(a)?a.charAt(c):a[c]}
function Ea(a,b){var c=Ba(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Fa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ga(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Ha(a,b){this.b=p(a)?a:0;this.f=p(b)?b:0}
Ha.prototype.equals=function(a){return a instanceof Ha&&(this==a?!0:this&&a?this.b==a.b&&this.f==a.f:!1)};
Ha.prototype.ceil=function(){this.b=Math.ceil(this.b);this.f=Math.ceil(this.f);return this};
Ha.prototype.floor=function(){this.b=Math.floor(this.b);this.f=Math.floor(this.f);return this};
Ha.prototype.round=function(){this.b=Math.round(this.b);this.f=Math.round(this.f);return this};function Ia(a,b){this.width=a;this.height=b}
l=Ia.prototype;l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ja(a){Ja[" "](a);return a}
Ja[" "]=t;function Ka(a,b){var c=La;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function Ma(){var a=Na;try{var b;if(b=!!a&&null!=a.location.href)a:{try{Ja(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
;var Oa=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
n.addEventListener("test",null,b)}catch(c){}return a}();var Pa=!1,Qa="";function Ra(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Pa=!0,a.description)){Qa=Ra(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Pa=!0;Qa="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Pa=!(!a||!a.enabledPlugin))){Qa=Ra(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Pa=!0;Qa=Ra(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Pa=!0;Qa="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Pa=!0,Qa=Ra(b.GetVariable("$version"))}catch(c){}})();
var Sa=Pa,Ta=Qa;var D;a:{var Ua=n.navigator;if(Ua){var Va=Ua.userAgent;if(Va){D=Va;break a}}D=""}function F(a){return-1!=D.indexOf(a)}
;function Wa(a){var b=Xa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ya(){var a=H,b;for(b in a)return!1;return!0}
function Za(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function $a(a){var b={},c;for(c in a)b[c]=a[c];return b}
var ab="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ab.length;f++)c=ab[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function cb(){return(F("Chrome")||F("CriOS"))&&!F("Edge")}
;function db(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;var eb=F("Opera"),I=F("Trident")||F("MSIE"),fb=F("Edge"),gb=F("Gecko")&&!(-1!=D.toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),hb=-1!=D.toLowerCase().indexOf("webkit")&&!F("Edge"),ib=F("Macintosh"),jb=F("Windows"),kb=F("Android"),lb=db(),mb=F("iPad"),nb=F("iPod");function ob(){var a=n.document;return a?a.documentMode:void 0}
var pb;a:{var qb="",rb=function(){var a=D;if(gb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(fb)return/Edge\/([\d\.]+)/.exec(a);if(I)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hb)return/WebKit\/(\S+)/.exec(a);if(eb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
rb&&(qb=rb?rb[1]:"");if(I){var sb=ob();if(null!=sb&&sb>parseFloat(qb)){pb=String(sb);break a}}pb=qb}var tb=pb,La={};
function J(a){return Ka(a,function(){for(var b=0,c=ya(String(tb)).split("."),d=ya(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=za(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||za(0==g[2].length,0==h[2].length)||za(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var ub;var vb=n.document;ub=vb&&I?ob()||("CSS1Compat"==vb.compatMode?parseInt(tb,10):5):void 0;(function(){var a;return jb?(a=/Windows NT ([0-9.]+)/,(a=a.exec(D))?a[1]:"0"):ib?(a=/10[_.][0-9_.]+/,(a=a.exec(D))?a[0].replace(/_/g,"."):"10"):kb?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(D))?a[1]:""):lb||mb||nb?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(D))?a[1].replace(/_/g,"."):""):""})();var wb=F("Firefox"),xb=db()||F("iPod"),yb=F("iPad"),zb=F("Android")&&!(cb()||F("Firefox")||F("Opera")||F("Silk")),Ab=cb(),Bb=F("Safari")&&!(cb()||F("Coast")||F("Opera")||F("Edge")||F("Silk")||F("Android"))&&!(db()||F("iPad")||F("iPod"));function Cb(a){return(a=a.exec(D))?a[1]:""}
(function(){if(wb)return Cb(/Firefox\/([0-9.]+)/);if(I||fb||eb)return tb;if(Ab)return db()||F("iPad")||F("iPod")?Cb(/CriOS\/([0-9.]+)/):Cb(/Chrome\/([0-9.]+)/);if(Bb&&!(db()||F("iPad")||F("iPod")))return Cb(/Version\/([0-9.]+)/);if(xb||yb){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(D);if(a)return a[1]+"."+a[2]}else if(zb)return(a=Cb(/Android\s+([0-9.]+)/))?a:Cb(/Version\/([0-9.]+)/);return""})();!gb&&!I||I&&9<=Number(ub)||gb&&J("1.9.1");I&&J("9");function Db(){this.b="";this.f=Eb}
Db.prototype.la=!0;Db.prototype.ka=function(){return this.b};
var Eb={};function Fb(){this.b="";this.f=Gb}
Fb.prototype.la=!0;Fb.prototype.ka=function(){return this.b};
function Hb(a){return a instanceof Fb&&a.constructor===Fb&&a.f===Gb?a.b:"type_error:SafeUrl"}
var Ib=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Jb(a){if(a instanceof Fb)return a;a=a.la?a.ka():String(a);Ib.test(a)||(a="about:invalid#zClosurez");return Kb(a)}
var Gb={};function Kb(a){var b=new Fb;b.b=a;return b}
Kb("about:blank");function Lb(){this.b=""}
Lb.prototype.la=!0;Lb.prototype.ka=function(){return this.b};
function Mb(a){var b=new Lb;b.b=a;return b}
Mb("<!DOCTYPE html>");Mb("");Mb("<br>");function Nb(a,b){var c;c=b instanceof Fb?b:Jb(b);a.href=Hb(c)}
;function Ob(a){var b=document;return u(a)?b.getElementById(a):a}
function Pb(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Qb(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function Rb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Sb(a){Tb();var b=new Db;b.b=a;return b}
var Tb=t;function Ub(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Vb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function K(a){return a.match(Vb)}
function Wb(a){return a?decodeURI(a):a}
function Xb(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Yb(a,b,c){if(na(b))for(var d=0;d<b.length;d++)Yb(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Zb(a,b){for(var c in b)Yb(c,b[c],a);return a}
;var $b=!!window.google_async_iframe_id,Na=$b&&window.parent||window;function ac(a,b){var c=bc();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random()}
;function cc(a,b){this.events=[];this.f=b||n;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.events=b.google_js_reporting_queue,c=b.b);this.b=null!=c?c:Math.random()<a}
function bc(){var a=n.performance;return a&&a.now?a.now():x()}
cc.prototype.g=function(a){var b=this.f.performance;a&&b&&b.clearMarks&&(b.clearMarks("goog_"+a.uniqueId+"_start"),b.clearMarks("goog_"+a.uniqueId+"_end"))};
cc.prototype.start=function(a,b){if(!this.b)return null;var c=new ac(a,b),d=this.f.performance;d&&d.mark&&d.mark("goog_"+c.uniqueId+"_start");return c};
cc.prototype.end=function(a){if(this.b){a.duration=bc()-a.value;var b=this.f.performance;b&&b.mark&&b.mark("goog_"+a.uniqueId+"_end");this.b&&this.events.push(a)}};var dc;if($b&&!Ma()){var ec="."+xa.domain;try{for(;2<ec.split(".").length&&!Ma();)xa.domain=ec=ec.substr(ec.indexOf(".")+1),Na=window.parent}catch(a){}Ma()||(Na=window)}dc=Na;var fc=new cc(1,dc);function gc(){dc.b||(C(fc.events,fc.g,fc),fc.events.length=0,fc.b=!1)}
if("complete"==dc.document.readyState)gc();else if(fc.b){var hc=function(){gc()};
dc.addEventListener?dc.addEventListener("load",hc,Oa?void 0:!1):dc.attachEvent&&dc.attachEvent("onload",hc)};var ic=(new Date).getTime();function jc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1),b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var kc=window,lc=document,mc=kc.location;function nc(){}
var oc=/\[native code\]/;function L(a,b,c){return a[b]=a[b]||c}
function pc(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function qc(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function M(){var a;if((a=Object.create)&&oc.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var rc=L(kc,"gapi",{});var N;N=L(kc,"___jsl",M());L(N,"I",0);L(N,"hel",10);function sc(){var a=mc.href,b;if(N.dpo)b=N.h;else{b=N.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function tc(a){var b=L(N,"PQ",[]);N.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function uc(a){return L(L(N,"H",M()),a,M())}
;function vc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;y=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],h=e[3],k=e[4],m,E,c=0;80>c;c++)40>c?20>c?(m=h^d&(f^h),E=1518500249):(m=d^f^h,E=1859775393):60>c?(m=d&f|h&(d|f),E=2400959708):(m=d^f^h,E=3395469782),m=((a<<5|a>>>27)&4294967295)+m+k+E+b[c]&4294967295,k=h,h=f,f=(d<<30|d>>>2)&4294967295,d=a,a=m;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,y+=64;for(;d<c;)if(f[m++]=a[d++],y++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,y+=64}
function d(){var a=[],d=8*y;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var k=24;0<=k;k-=8)a[d++]=e[g]>>k&255;return a}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,y;a();return{reset:a,update:c,digest:d,Fa:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function wc(a,b,c){var d=[],e=[];if(1==(na(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),xc(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=xc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function xc(a){var b=vc();b.update(a);return b.Fa().toLowerCase()}
;function yc(a){this.b=a||{cookie:""}}
l=yc.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
l.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ya(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
l.isEmpty=function(){return!this.b.cookie};
l.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ya(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var zc=new yc("undefined"==typeof document?null:document);zc.f=3950;function Ac(){var a=[],b=jc(String(n.location.href)),c=n.__OVERRIDE_SID;null==c&&(c=(new yc(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==b&&(b=(new yc(document)).get(c?"SAPISID":"APISID")),b)){var c=c?"SAPISIDHASH":"APISIDHASH",d=String(n.location.href);return d&&b&&c?[c,wc(jc(d),b,a||null)].join(" "):null}return null}
;var Cc=L(N,"perf",M());L(Cc,"g",M());var Dc=L(Cc,"i",M());L(Cc,"r",[]);M();M();function Ec(a,b,c){b&&0<b.length&&(b=Fc(b),c&&0<c.length&&(b+="___"+Fc(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=L(Dc,"_p",M()),L(b,c,M())[a]=(new Date).getTime(),b=Cc.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Fc(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Gc=M(),Hc=[];function O(a){throw Error("Bad hint"+(a?": "+a:""));}
Hc.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?N[b]=L(N,b,[]).concat(c):L(N,b,c)}if(b=a.u)a=L(N,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Ic=/^(\/[a-zA-Z0-9_\-]+)+$/,Jc=[/\/amp\//,/\/amp$/,/^\/amp$/],Kc=/^[a-zA-Z0-9\-_\.,!]+$/,Lc=/^gapi\.loaded_[0-9]+$/,Mc=/^[a-zA-Z0-9,._-]+$/;function Nc(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Gc[f],h=null;g?h=g(e,b,c,d):O("no hint processor for: "+f);h||O("failed to generate load url");b=h;c=b.match(Oc);(d=b.match(Pc))&&1===d.length&&Qc.test(b)&&c&&1===c.length||O("failed sanity: "+a);return h}
function Rc(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Sc(a);Lc.test(c)||O("invalid_callback");b=Tc(b);d=d&&d.length?Tc(d):null;return[encodeURIComponent(a.Za).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.qa?"/am="+e(a.qa):"",a.ya?"/rs="+e(a.ya):"",a.Ba?"/t="+e(a.Ba):"","/cb=",e(c)].join("")}
function Sc(a){"/"!==a.charAt(0)&&O("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))O("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Ic.test(b)||O("invalid_prefix");c=0;for(d=Jc.length;c<d;++c)Jc[c].test(b)&&O("invalid_prefix");c=Uc(a,
"k",!0);d=Uc(a,"am");e=Uc(a,"rs");a=Uc(a,"t");return{Za:b,version:c,qa:d,ya:e,Ba:a}}
function Tc(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Mc.test(e)&&b.push(e)}return b.join(",")}
function Uc(a,b,c){a=a[b];!a&&c&&O("missing: "+b);if(a){if(Kc.test(a))return a;O("invalid: "+b)}return null}
var Qc=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Pc=/\/cb=/g,Oc=/\/\//g;function Vc(){var a=sc();if(!a)throw Error("Bad hint");return a}
Gc.m=function(a,b,c,d){(a=a[0])||O("missing_hint");return"https://apis.google.com"+Rc(a,b,c,d)};
var Wc=decodeURI("%73cript"),Xc=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Yc(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>pc.call(b,e)&&c.push(e)}return c}
function Zc(){var a=N.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(Xc)?a:N.nonce=null;var b=L(N,"us",[]);if(!b||!b.length)return N.nonce=null;for(var c=lc.getElementsByTagName(Wc),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(Xc))return N.nonce=a}}return null}
function $c(a){if("loading"!=lc.readyState)ad(a);else{var b=Zc(),c="";null!==b&&(c=' nonce="'+b+'"');lc.write("<"+Wc+' src="'+encodeURI(a)+'"'+c+"></"+Wc+">")}}
function ad(a){var b=lc.createElement(Wc);b.setAttribute("src",a);a=Zc();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=lc.getElementsByTagName(Wc)[0])?a.parentNode.insertBefore(b,a):(lc.head||lc.body||lc.documentElement).appendChild(b)}
function bd(a,b){var c=b&&b._c;if(c)for(var d=0;d<Hc.length;d++){var e=Hc[d][0],f=Hc[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function cd(a,b,c){dd(function(){var c;c=b===sc()?L(rc,"_",M()):M();c=L(uc(b),"_",c);a(c)},c)}
function ed(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);bd(a,c);var d=a?a.split(":"):[],e=c.h||Vc(),f=L(N,"ah",M());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split("."),k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e,m=g.length&&g[g.length-1]||null,y=m;m&&m.hint==k||(y={hint:k,features:[]},g.push(y));y.features.push(h)}var E=g.length;if(1<E){var Z=c.callback;Z&&(c.callback=function(){0==--E&&Z()})}for(;d=g.shift();)fd(d.features,c,d.hint)}else fd(d||[],c,e)}
function fd(a,b,c){function d(a,b){if(E)return 0;kc.clearTimeout(y);Z.push.apply(Z,G);var d=((rc||{}).config||{}).update;d?d(f):f&&L(N,"cu",[]).push(f);if(b){Ec("me0",a,ta);try{cd(b,c,m)}finally{Ec("me1",a,ta)}}return 1}
a=qc(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,m=void 0;"function"==typeof k&&(m=k);var y=null,E=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var k=L(uc(c),"r",[]).sort(),Z=L(uc(c),"L",[]).sort(),ta=[].concat(k);0<g&&(y=kc.setTimeout(function(){E=!0;h()},g));
var G=Yc(a,Z);if(G.length){var G=Yc(a,k),ea=L(N,"CP",[]),fa=ea.length;ea[fa]=function(a){function b(){var a=ea[fa+1];a&&a()}
function c(b){ea[fa]=null;d(G,a)&&tc(function(){e&&e();b()})}
if(!a)return 0;Ec("ml1",G,ta);0<fa&&ea[fa-1]?ea[fa]=function(){c(b)}:c(b)};
if(G.length){var Bc="loaded_"+N.I++;rc[Bc]=function(a){ea[fa](a);rc[Bc]=null};
a=Nc(c,G,"gapi."+Bc,k);k.push.apply(k,G);Ec("ml0",G,ta);b.sync||kc.___gapisync?$c(a):ad(a)}else ea[fa](nc)}else d(G)&&e&&e()}
function dd(a,b){if(N.hee&&0<N.hel)try{return a()}catch(c){b&&b(c),N.hel--,ed("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
rc.load=function(a,b){return dd(function(){return ed(a,b)})};function gd(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
gd.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function hd(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function id(a){n.setTimeout(function(){throw a;},0)}
var jd;
function kd(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.sa;c.sa=null;a()}};
return function(a){d.next={sa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function ld(){this.f=this.b=null}
var nd=new gd(function(){return new md},function(a){a.reset()},100);
ld.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function md(){this.next=this.scope=this.b=null}
md.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
md.prototype.reset=function(){this.next=this.scope=this.b=null};function od(a,b){pd||qd();rd||(pd(),rd=!0);var c=sd,d=nd.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var pd;function qd(){if(-1!=String(n.Promise).indexOf("[native code]")){var a=n.Promise.resolve(void 0);pd=function(){a.then(td)}}else pd=function(){var a=td;
!pa(n.setImmediate)||n.Window&&n.Window.prototype&&!F("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(jd||(jd=kd()),jd(a)):n.setImmediate(a)}}
var rd=!1,sd=new ld;function td(){for(var a;a=sd.remove();){try{a.b.call(a.scope)}catch(b){id(b)}hd(nd,a)}rd=!1}
;var ud="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function vd(){}
vd.prototype.next=function(){throw ud;};
vd.prototype.ca=function(){return this};
function wd(a){if(a instanceof vd)return a;if("function"==typeof a.ca)return a.ca(!1);if(oa(a)){var b=0,c=new vd;c.next=function(){for(;;){if(b>=a.length)throw ud;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function xd(a,b){if(oa(a))try{C(a,b,void 0)}catch(c){if(c!==ud)throw c;}else{a=wd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==ud)throw c;}}}
function yd(a){if(oa(a))return Fa(a);a=wd(a);var b=[];xd(a,function(a){b.push(a)});
return b}
;function P(){this.f=this.f;this.F=this.F}
P.prototype.f=!1;P.prototype.dispose=function(){this.f||(this.f=!0,this.o())};
function zd(a,b){a.f?p(void 0)?b.call(void 0):b():(a.F||(a.F=[]),a.F.push(p(void 0)?v(b,void 0):b))}
P.prototype.o=function(){if(this.F)for(;this.F.length;)this.F.shift()()};
function Ad(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Bd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];oa(d)?Bd.apply(null,d):Ad(d)}}
;I&&J("9");!hb||J("528");gb&&J("1.9b")||I&&J("8")||eb&&J("9.5")||hb&&J("528");gb&&!J("8")||I&&J("9");function Cd(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function Dd(a){a=String(a);if(Cd(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Ed(a){return eval("("+a+")")}
function Fd(a){var b=[];Gd(new Hd,a,b);return b.join("")}
function Hd(){}
function Gd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(na(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Gd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Id(d,c),c.push(":"),Gd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Id(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Jd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Kd=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Id(a,b){b.push('"',a.replace(Kd,function(a){var b=Jd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Jd[a]=b);return b}),'"')}
;function Ld(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function Q(a,b){this.b=0;this.w=void 0;this.i=this.f=this.g=null;this.j=this.l=!1;if(a!=t)try{var c=this;a.call(b,function(a){Md(c,2,a)},function(a){Md(c,3,a)})}catch(d){Md(this,3,d)}}
function Nd(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
Nd.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var Od=new gd(function(){return new Nd},function(a){a.reset()},100);
function Pd(a,b,c){var d=Od.get();d.g=a;d.f=b;d.context=c;return d}
function Qd(a){if(a instanceof Q)return a;var b=new Q(t);Md(b,2,a);return b}
function Rd(a){return new Q(function(b,c){c(a)})}
Q.prototype.then=function(a,b,c){return Sd(this,pa(a)?a:null,pa(b)?b:null,c)};
Ld(Q);Q.prototype.cancel=function(a){0==this.b&&od(function(){var b=new Td(a);Ud(this,b)},this)};
function Ud(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Ud(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Vd(c),Wd(c,e,3,b)))}a.g=null}else Md(a,3,b)}
function Xd(a,b){a.f||2!=a.b&&3!=a.b||Yd(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Sd(a,b,c,d){var e=Pd(null,null,null);e.b=new Q(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Td?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Xd(a,e);return e.b}
Q.prototype.C=function(a){this.b=0;Md(this,2,a)};
Q.prototype.F=function(a){this.b=0;Md(this,3,a)};
function Md(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.C,g=a.F;if(e instanceof Q)Xd(e,Pd(f||t,g||null,a)),d=!0;else{var h;if(e)try{h=!!e.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)e.then(f,g,a),d=!0;else{if(qa(e))try{var k=e.then;if(pa(k)){Zd(e,k,f,g,a);d=!0;break a}}catch(m){g.call(a,m);d=!0;break a}d=!1}}}d||(a.w=c,a.b=b,a.g=null,Yd(a),3!=b||c instanceof Td||$d(a,c))}}
function Zd(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Yd(a){a.l||(a.l=!0,od(a.B,a))}
function Vd(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
Q.prototype.B=function(){for(var a;a=Vd(this);)Wd(this,a,this.b,this.w);this.l=!1};
function Wd(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,ae(b,c,d);else try{b.i?b.g.call(b.context):ae(b,c,d)}catch(e){be.call(null,e)}hd(Od,b)}
function ae(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function $d(a,b){a.j=!0;od(function(){a.j&&be.call(null,b)})}
var be=id;function Td(a){B.call(this,a)}
z(Td,B);Td.prototype.name="cancel";function R(a){P.call(this);this.l=1;this.i=[];this.j=0;this.b=[];this.g={};this.w=!!a}
z(R,P);l=R.prototype;l.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.l;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.l=e+3;d.push(e);return e};
function ce(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=Da(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.K(b)}}
l.K=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.j?(this.i.push(a),this.b[a+1]=t):(c&&Ea(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
l.V=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.w)for(e=0;e<c.length;e++){var g=c[e];de(this.b[g+1],this.b[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.K(c)}}return 0!=e}return!1};
function de(a,b,c){od(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.g[a];b&&(C(b,this.K,this),delete this.g[a])}else this.b.length=0,this.g={}};
l.o=function(){R.A.o.call(this);this.clear();this.i.length=0};function ee(a){this.b=a}
ee.prototype.set=function(a,b){p(b)?this.b.set(a,Fd(b)):this.b.remove(a)};
ee.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return Dd(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ee.prototype.remove=function(a){this.b.remove(a)};function fe(a){this.b=a}
z(fe,ee);function ge(a){this.data=a}
function he(a){return!p(a)||a instanceof ge?a:new ge(a)}
fe.prototype.set=function(a,b){fe.A.set.call(this,a,he(b))};
fe.prototype.f=function(a){a=fe.A.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
fe.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ie(a){this.b=a}
z(ie,fe);ie.prototype.set=function(a,b,c){if(b=he(b)){if(c){if(c<x()){ie.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}ie.A.set.call(this,a,b)};
ie.prototype.f=function(a,b){var c=ie.A.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<x()||!!d&&d>x()}if(d)ie.prototype.remove.call(this,a);else return c}};function je(a){this.b=a}
z(je,ie);function ke(){}
;function le(){}
z(le,ke);le.prototype.clear=function(){var a=yd(this.ca(!0)),b=this;C(a,function(a){b.remove(a)})};function me(a){this.b=a}
z(me,le);l=me.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.ca=function(a){var b=0,c=this.b,d=new vd;d.next=function(){if(b>=c.length)throw ud;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function ne(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
z(ne,me);function oe(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
z(oe,me);var pe=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},qe="Microsoft Internet Explorer"==navigator.appName;
function re(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
;var se=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",se,void 0);function S(a){re(se,arguments)}
function T(a,b){return a in se?se[a]:b}
;var te={};function ue(a){return te[a]||(te[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function ve(a,b){return a?a.dataset?a.dataset[ue(b)]:a.getAttribute("data-"+b):null}
function we(a){a&&(a.dataset?a.dataset[ue("loaded")]="true":a.setAttribute("data-loaded","true"))}
;function U(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=T("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),S("ERRORS",c))}
function xe(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){U(b)}}:a}
;function V(a,b){pa(a)&&(a=xe(a));return window.setTimeout(a,b)}
;var ye=r("yt.pubsub.pubsub.instance_")||r("yt.pubsub.instance_")||new R;R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.K;R.prototype.publish=R.prototype.V;R.prototype.clear=R.prototype.clear;q("yt.pubsub.instance_",ye,void 0);q("yt.pubsub.pubsub.instance_",ye,void 0);var ze=r("yt.pubsub.pubsub.subscribedKeys_")||r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",ze,void 0);q("yt.pubsub.pubsub.subscribedKeys_",ze,void 0);
var Ae=r("yt.pubsub.pubsub.topicToKeys_")||r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",Ae,void 0);q("yt.pubsub.pubsub.topicToKeys_",Ae,void 0);var Be=r("yt.pubsub.pubsub.isSynchronous_")||r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",Be,void 0);q("yt.pubsub.pubsub.isSynchronous_",Be,void 0);function Ce(){return r("yt.pubsub.pubsub.instance_")||r("yt.pubsub.instance_")}
function De(a){Ae[a]&&(a=Ae[a],C(a,function(a){ze[a]&&delete ze[a]}),a.length=0)}
function Ee(a){var b=Ce();if(b)if(b.clear(a),a)De(a);else for(var c in Ae)De(c)}
function Fe(a,b){var c=Ce();return c?c.publish.apply(c,arguments):!1}
function Ge(a,b){var c=Ce();if(c){var d=c.subscribe(a,function(){var c=arguments,f;f=function(){ze[d]&&b.apply(window,c)};
try{Be[a]?f():V(f,0)}catch(g){U(g)}},void 0);
ze[d]=!0;Ae[a]||(Ae[a]=[]);Ae[a].push(d);return d}return 0}
function He(a){var b=Ce();b&&("number"==typeof a?a=[a]:u(a)&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete ze[a]}))}
;var Ie=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Je=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Ke(a,b){var c=Le(a),d=document.getElementById(c),e=d&&ve(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=Ge(c,b),g=""+ra(b);Me[g]=e}f||(d=Ne(a,c,function(){ve(d,"loaded")||(we(d),Fe(c),V(w(Ee,c),0))}))}}
function Ne(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Oe(a,b){if(a&&b){var c=""+ra(b);(c=Me[c])&&He(c)}}
function Le(a){var b=document.createElement("a");Nb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Aa(a)}
var Me={};function Pe(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ie,""),c=c.replace(Je,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ke(a,b)}
;var Qe=null;function Re(){var a=T("BG_I",null),b=T("BG_IU",null),c=T("BG_P",void 0);b?Pe(b,function(){Qe=new botguard.bg(c)}):a&&(eval(a),Qe=new botguard.bg(c))}
function Se(){return null!=Qe}
function Te(){return Qe?Qe.invoke():null}
;var Ue=p(XMLHttpRequest)?function(){return new XMLHttpRequest}:p(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Ve(){if(!Ue)return null;var a=Ue();return"open"in a?a:null}
function We(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Xe(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?na(b[f])?Ga(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Ye(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Xe(d[1]||""),e;for(e in b)d[e]=b[e];return Xb(Zb([a],d))+c}
function Ze(a){a=Zb([],a);a[0]="";return a.join("")}
;var $e={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};
function af(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=K(a)[1]||null,e=Wb(K(a)[3]||null);d&&e?(d=c,c=K(a),d=K(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Wb(K(c)[3]||null)==e&&(Number(K(c)[4]||null)||null)==(Number(K(a)[4]||null)||null):!0;for(var f in $e){if((e=d=T($e[f]))&&!(e=c)){var g=a,e=f,h=T("CORS_HEADER_WHITELIST")||{};e=(g=Wb(K(g)[3]||null))?(h=h[g])?0<=Ba(h,e):!1:!0}e&&(b[f]=d)}return b}
function bf(a,b){var c=T("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.rb&&(!Wb(K(a)[3]||null)||b.withCredentials||Wb(K(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.D&&b.D[c])}
function cf(a,b){var c=b.format||"JSON";b.Ka&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=T("XSRF_FIELD_NAME",void 0),e=T("XSRF_TOKEN",void 0),f=b.kb;f&&(f[d]&&delete f[d],a=Ye(a,f||{}));var g=b.postBody||"",f=b.D;bf(a,b)&&(f||(f={}),f[d]=e);f&&u(g)&&(d=Xe(g),bb(d,f),g=b.wa&&"JSON"==b.wa?JSON.stringify(d):Ze(d));var h=!1,k,m=df(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d=We(a),e=null;if(d||400<=a.status&&
500>a.status)e=ef(c,a,b.qb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||n;d?b.J&&b.J.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Qa&&b.Qa.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.O&&0<b.timeout&&(k=V(function(){h||(h=!0,m.abort(),window.clearTimeout(k),b.O.call(b.context||n,m))},b.timeout))}
function ef(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Ed(a));break;case "XML":if(b=(b=b.responseXML)?ff(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=gf(a)})}c&&hf(d);
return d}
function hf(a){if(qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=Mb(a[b]);a[c]=d}else hf(a[b])}}
function ff(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function gf(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function jf(a,b){b.method="POST";b.D||(b.D={});cf(a,b)}
function df(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&xe(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Ve();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c;if(e=af(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
;function kf(a,b,c,d,e){c={name:c||T("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||T("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=lf)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(u(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g,h,k=!1;try{g=a.lineNumber||a.line||"Not available"}catch(E){g="Not available",k=!0}try{h=a.fileName||a.filename||a.sourceURL||n.$googDebugFname||f}catch(E){h=
"Not available",k=!0}a=!k&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:g,fileName:h,stack:a.stack||"Not available"}}e=e||a.stack;g=a.lineNumber.toString();isNaN(g)||isNaN(d)||(g=g+":"+d);if(!(mf[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){h=a.fileName;b={kb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:g,level:b||"ERROR"},D:{url:T("PAGE_NAME",window.location.href),
file:h},method:"POST"};e&&(b.D.stack=e);for(var m in c)b.D["client."+m]=c[m];if(m=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var y in m)b.D[y]=m[y];cf("/error_204",b);mf[a.message]=!0;lf++}}}
var mf={},lf=0;var nf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};q("yt.msgs_",nf,void 0);function of(a){re(nf,arguments)}
;function pf(a,b){var c=5E3;isNaN(c)&&(c=void 0);var d=r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):V(a,c||0)}
;var qf=[],rf=!1;function sf(){function a(){rf=!0;"google_ad_status"in window?S("DCLKSTAT",1):S("DCLKSTAT",2)}
Pe("//static.doubleclick.net/instream/ad_status.js",a);qf.push(pf(function(){rf||"google_ad_status"in window||(Oe("//static.doubleclick.net/instream/ad_status.js",a),S("DCLKSTAT",3))},1))}
function tf(){return parseInt(T("DCLKSTAT",0),10)}
;function uf(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||$a(vf);this.assets=a.assets||{};this.attrs=a.attrs||$a(wf);this.params=a.params||$a(xf);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var vf={enablejsapi:1},wf={},xf={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function yf(a){a instanceof uf||(a=new uf(a));return a}
function zf(a){var b=new uf,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==ma(d)?$a(d):d}return b}
;var Af=0,Bf=r("yt.dom.dom.getNextId")||function(){return++Af};
q("yt.dom.dom.getNextId",Bf,void 0);var Cf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Df(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Cf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Df.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Df.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Df.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Xa=r("ytEventsEventsListeners")||{};q("ytEventsEventsListeners",Xa,void 0);var Ef=r("ytEventsEventsCounter")||{count:0};q("ytEventsEventsCounter",Ef,void 0);function Ff(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Wa(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function Gf(a,b,c){var d;d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ff(a,b,c,d);if(e)return e;var e=++Ef.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new Df(d);if(!Rb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Df(b);
b.currentTarget=a;return c.call(a,b)};
g=xe(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Xa[e]=[a,b,c,g,d];return e}
function Hf(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in Xa){var b=Xa[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Xa[a]}}))}
;function If(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var g,h,k,m;if(qe)try{g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(y){g=null}else k=document.body,m=document.createElement("object"),m.setAttribute("type","application/x-shockwave-flash"),g=k.appendChild(m);if(g&&"GetVariable"in g)try{h=g.GetVariable("$version")}catch(y){h=""}k&&m&&k.removeChild(m);(g=h||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
la(If);function Jf(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;var Kf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Lf(a){if(window.spf){var b=a.match(Kf);spf.style.load(a,b?b[1]:"",void 0)}else Mf(a)}
function Mf(a){var b=Nf(a),c=document.getElementById(b),d=c&&ve(c,"loaded");d||c&&!d||(c=Of(a,b,function(){ve(c,"loaded")||(we(c),Fe(b),V(w(Ee,b),0))}))}
function Of(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Sb(a);d.rel="stylesheet";d.href=a instanceof Db&&a.constructor===Db&&a.f===Eb?a.b:"type_error:TrustedResourceUrl";(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Nf(a){var b=document.createElement("a");Nb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Aa(a)}
;var Pf={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};var Qf;var Rf=D,Rf=Rf.toLowerCase();if(-1!=Rf.indexOf("android")){var Sf=Rf.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Sf)Qf=Number(Sf[1]);else{var Tf={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Uf=[],Vf=0,Wf;for(Wf in Tf)Uf[Vf++]=Wf;var Xf=Rf.match("("+Uf.join("|")+")");Qf=Xf?Tf[Xf[0]]:0}}else Qf=void 0;var Yf=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Zf=['audio/mp4; codecs="mp4a.40.2"'];var $f;var ag=D,bg=ag.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!bg||2>bg.length)$f=void 0;else{var cg=ag.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);$f=cg&&6==cg.length?Number(cg[5].replace("_",".")):0}0<=$f&&0<=D.search("Safari")&&D.search("Version");function dg(a){P.call(this);this.b=[];this.g=a||this}
z(dg,P);function eg(a,b,c,d){d=xe(v(d,a.g));d={target:b,name:c,ra:d};b.addEventListener(c,d.ra,void 0);a.b.push(d)}
function fg(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.ra)}}
dg.prototype.o=function(){fg(this);dg.A.o.call(this)};function W(a){return T("EXPERIMENT_FLAGS",{})[a]}
;function gg(a,b,c,d){this.f=a;this.i=b;this.g=c;this.b=d}
var hg=1;function ig(a){var b={};void 0!==a.f?b.trackingParams=a.f:(b.veType=a.i,null!=a.g&&(b.veCounter=a.g));void 0!==a.b&&(b.dataElement=ig(a.b));return b}
;var jg={log_event:"events",log_interaction:"interactions"},kg={},lg={},mg=0,H=r("yt.logging.transport.logPayloadsQueue_")||{};q("yt.logging.transport.logPayloadsQueue_",H,void 0);var ng=r("yt.logging.transport.tokensToCttTargetIds_")||{};q("yt.logging.transport.tokensToCttTargetIds_",ng,void 0);
function og(a,b){lg[a.endpoint]=b;var c;if(a.da){c=a.da;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);ng[a.da.token]=d;c=pg(a.endpoint,a.da.token)}else c=pg(a.endpoint);c.push(a.va);d=Number(W("web_logging_max_batch")||0)||20;c.length>=d?qg():rg()}
function qg(){window.clearTimeout(mg);if(!Ya()){for(var a in H){var b=kg[a];if(!b){var c=lg[a];if(!c)continue;b=new c;kg[a]=b}var c=void 0,d=a,e=jg[d];for(c in H[d]){var f=b.f();f[e]=pg(d,c);f.requestTimeMs=Math.round(pe());var g=ng[c];if(g)a:{var h,k=f,m=c;if(g.videoId)h="VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;k.credentialTransferTokenTargetId=g;k.context=k.context||{};k.context.user=k.context.user||{};k.context.user.credentialTransferTokens=[{token:m,scope:h}]}delete ng[c];b.g(d,
f,{})}delete H[a]}Ya()||rg()}}
function rg(){window.clearTimeout(mg);mg=V(qg,T("LOGGING_BATCH_TIMEOUT",1E4))}
function pg(a,b){b||(b="");H[a]=H[a]||{};H[a][b]=H[a][b]||[];return H[a][b]}
;function sg(){if(null==r("_lact",window)){var a=parseInt(T("LACT"),10),a=isFinite(a)?x()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&tg();Gf(document,"keydown",tg);Gf(document,"keyup",tg);Gf(document,"mousedown",tg);Gf(document,"mouseup",tg);Ge("page-mouse",tg);Ge("page-scroll",tg);Ge("page-resize",tg)}}
function tg(){null==r("_lact",window)&&(sg(),r("_lact",window));var a=x();q("_lact",a,window);Fe("USER_ACTIVE")}
function ug(){var a=r("_lact",window);return null==a?-1:Math.max(x()-a,0)}
;function vg(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||pe());f[a]=b;W("web_gel_lact")&&(f.context={lastActivityMs:ug()});og({endpoint:"log_event",va:f,da:e},c)}
;function wg(a){a={client:{hl:a.Na,gl:a.Ma,clientName:a.La,clientVersion:a.innertubeContextClientVersion}};T("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});return a}
function xg(){return{apiaryHost:T("APIARY_HOST",void 0),Da:T("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:!!T("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:T("GAPI_HINT_PARAMS",void 0),innertubeApiKey:T("INNERTUBE_API_KEY",void 0),innertubeApiVersion:T("INNERTUBE_API_VERSION",void 0),La:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:T("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Na:T("INNERTUBE_CONTEXT_HL",void 0),Ma:T("INNERTUBE_CONTEXT_GL",void 0),nb:T("XHR_APIARY_HOST",
void 0),Oa:T("INNERTUBE_HOST_OVERRIDE",void 0)}}
function yg(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function zg(){this.b=xg()}
zg.prototype.f=function(){return{context:wg(this.b)}};
zg.prototype.g=function(a,b,c){T("VISITOR_DATA")||U(Error("Missing VISITOR_DATA when sending innertube request."));var d={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":T("VISITOR_DATA","")},D:b,wa:"JSON",O:c.O,J:function(a,b){c.J&&c.J(b)},
onError:function(a,b){if(c.onError)c.onError(b)},
timeout:c.timeout,withCredentials:!0},e=Ac();e&&(d.headers.Authorization=e,d.headers["X-Goog-AuthUser"]=T("SESSION_INDEX",0));e=this.b.nb;e.startsWith("http")||(e="//"+e);W("youtubei_for_web")&&(e="");var f=this.b.Oa;f&&(e=f);jf(""+e+yg(this.b.innertubeApiVersion,a,b)+"?alt=json&key="+this.b.innertubeApiKey,d)};var Ag=r("yt.logging.latency.usageStats_")||{};q("yt.logging.latency.usageStats_",Ag,void 0);var Bg=0;function Cg(a){Ag[a]=Ag[a]||{count:0};var b=Ag[a];b.count++;b.time=pe();Bg||(Bg=pf(Dg,0));return 10<b.count?(11==b.count&&kf(Error("CSI data exceeded logging limit with key: "+a)),!0):!1}
function Dg(){var a=pe(),b;for(b in Ag)6E4<a-Ag[b].time&&delete Ag[b];Bg=0}
;function Eg(a,b,c,d){Fg(a,{attachChild:{csn:b,parentVisualElement:ig(c),visualElements:[ig(d)]}},void 0)}
function Gg(a,b,c){c=Ca(c,function(a){return ig(a)});
Fg(a,{visibilityUpdate:{csn:b,visualElements:c}})}
function Fg(a,b,c){b.eventTimeMs=Math.round(pe());b.lactMs=ug();c&&(b.clientData=Hg(c));og({endpoint:"log_interaction",va:b},a)}
function Hg(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=Ca(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function Ig(){if(!Jg&&!Kg||!window.JSON)return null;var a;try{a=Jg.get("yt-player-two-stage-token")}catch(b){}if(!u(a))try{a=Kg.get("yt-player-two-stage-token")}catch(b){}if(!u(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var Kg,Lg=new ne;Kg=Lg.isAvailable()?new je(Lg):null;var Jg,Mg=new oe;Jg=Mg.isAvailable()?new je(Mg):null;function Ng(){var a=T("ROOT_VE_TYPE",void 0);return a?new gg(void 0,a,void 0):null}
function Og(){var a=T("client-screen-nonce",void 0);a||(a=T("EVENT_ID",void 0));return a}
;var Pg={},Qg=0;function Rg(a,b){a&&(T("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?df(a,b):Sg(a,b))}
function Sg(a,b){var c=new Image,d=""+Qg++;Pg[d]=c;c.onload=c.onerror=function(){b&&Pg[d]&&b();delete Pg[d]};
c.src=a}
;function Tg(a,b){this.version=a;this.args=b}
;function Ug(a){this.topic=a}
Ug.prototype.toString=function(){return this.topic};var Vg=r("yt.pubsub2.pubsub2.instance_")||new R;R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.K;R.prototype.publish=R.prototype.V;R.prototype.clear=R.prototype.clear;q("yt.pubsub2.pubsub2.instance_",Vg,void 0);var Wg=r("yt.pubsub2.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.pubsub2.subscribedKeys_",Wg,void 0);var Xg=r("yt.pubsub2.pubsub2.topicToKeys_")||{};q("yt.pubsub2.pubsub2.topicToKeys_",Xg,void 0);var Yg=r("yt.pubsub2.pubsub2.isAsync_")||{};
q("yt.pubsub2.pubsub2.isAsync_",Yg,void 0);q("yt.pubsub2.pubsub2.skipSubKey_",null,void 0);function Zg(a){var b=$g,c=r("yt.pubsub2.pubsub2.instance_");c&&c.publish.call(c,b.toString(),b,a)}
;var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function ah(a,b){Tg.call(this,1,arguments)}
z(ah,Tg);var $g=new Ug("timing-sent");var bh=x().toString();var ch={vc:!0},dh={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId"},eh="ap c cver ei yt_fss yt_li".split(" "),fh=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"],gh=v(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||
t,X);
function hh(a){if("_"!=a[0]){var b=a;X.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),X.mark(b))}var b=ih(),c=pe();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;jh()["tick_"+a]=void 0;pe();W("csi_on_gel")?(b=kh(),"_start"==a?Cg("baseline_"+b)||vg("latencyActionBaselined",{clientActionNonce:b},zg,void 0):Cg("tick_"+a+"_"+b)||vg("latencyActionTicked",{tickName:a,clientActionNonce:b},zg,void 0),a=!0):a=!1;if(a=!a)a=!r("yt.timing.pingSent_");if(a&&(b=T("TIMING_ACTION",void 0),a=ih(),r("yt.timing.ready_")&&
b&&a._start&&lh())){b=!0;c=T("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&mh()}}
function nh(){var a=oh().info.yt_lt="hot_bg";jh().info_yt_lt=a;if(W("csi_on_gel"))if("yt_lt"in dh){var b={},c=dh.yt_lt;0<=Ba(fh,c)&&(a=!!a);b[c]=a;a=kh();c=Object.keys(b).join("");Cg("info_"+c+"_"+a)||(b.clientActionNonce=a,vg("latencyActionInfo",b,zg))}else"yt_lt"in eh||U(Error("Unknown label yt_lt logged with GEL CSI."))}
function lh(){var a=ih();if(a.aft)return a.aft;for(var b=T("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function mh(){if(!W("csi_on_gel")){var a=ih(),b=oh().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&na(a[d])){var e=d.slice(1);if(e in ch){var f=Ca(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))ph(f,e),qh(),gh(),rh(!1,void 0),T("TIMING_ACTION")&&S("PREVIOUS_ACTION",T("TIMING_ACTION")),S("TIMING_ACTION","")}else{var g=T("CSI_SERVICE_NAME","youtube"),f={v:2,s:g,action:T("TIMING_ACTION",void 0)},h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+r("ytplayer.config.assets.js");(k=X.getEntriesByName?X.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-k.responseEnd):
delete b.h5jse}a.aft=lh();sh()&&"youtube"==g&&(nh(),g=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=pe();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);ph(f,e,void 0);Zg(new ah(b.aft+(h||0),void 0))}}}
function ph(a,b,c){if(W("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||Rg(a,void 0)}catch(f){Rg(a,void 0)}else Rg(a);rh(!0,c)}
function kh(){var a=oh().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=x();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(bh)for(c=1,d=0;d<bh.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^bh.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");oh().nonce=a}return a}
function ih(){return oh().tick}
function jh(){var a=oh();"gel"in a||(a.gel={});return a.gel}
function oh(){return r("ytcsi.data_")||qh()}
function qh(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function rh(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function sh(){var a=ih(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==oh().info.yt_pvis}
;function th(a,b){P.call(this);this.w=this.l=a;this.T=b;this.C=!1;this.g={};this.Z=this.S=null;this.U=new R;zd(this,w(Ad,this.U));this.j={};this.L=this.aa=this.i=this.ha=this.b=null;this.W=!1;this.M=this.B=this.H=this.R=null;this.ba={};this.Ca=["onReady"];this.X=new dg(this);zd(this,w(Ad,this.X));this.fa=null;this.oa=NaN;this.Y={};uh(this);this.G("onDetailedError",v(this.Ta,this));this.G("onTabOrderChange",v(this.Ea,this));this.G("onTabAnnounce",v(this.pa,this));this.G("WATCH_LATER_VIDEO_ADDED",v(this.Ua,
this));this.G("WATCH_LATER_VIDEO_REMOVED",v(this.Va,this));wb||(this.G("onMouseWheelCapture",v(this.Ra,this)),this.G("onMouseWheelRelease",v(this.Sa,this)));this.G("onAdAnnounce",v(this.pa,this));this.N=new dg(this);zd(this,w(Ad,this.N));this.ga=!1;this.ea=null}
z(th,P);var vh=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];l=th.prototype;l.na=function(a,b){this.f||(wh(this,a),xh(this,b),this.C&&yh(this))};
function wh(a,b){a.ha=b;a.b=zf(b);a.i=a.b.attrs.id||a.i;"video-player"==a.i&&(a.i=a.T,a.b.attrs.id=a.T);a.w.id==a.i&&(a.i+="-player",a.b.attrs.id=a.i);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.T;a.aa||(a.aa=zh(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.w.style.width=Ub(Number(c)||c));if(c=a.b.attrs.height)a.w.style.height=Ub(Number(c)||c)}
l.Ha=function(){return this.ha};
function yh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.g.loadVideoByPlayerVars(a.b.args):a.g.cueVideoByPlayerVars(a.b.args))}
function Ah(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=Jf(If.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function Bh(a,b){if((!b||(5!=(Pf[b.errorCode]||5)?0:-1!=vh.indexOf(b.errorCode)))&&Ah(a)){var c=Ch(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=yf(c));d.args.autoplay=1;d.args.html5_unavailable="1";wh(a,d);xh(a,"flash")}}
function xh(a,b){if(!a.f){if(!b){var c;if(!(c=!a.b.html5&&Ah(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==Qf)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?Yf:Zf,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=Dh(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?Ah(a)?"flash":"unsupported":"html5"}("flash"==b?a.lb:a.mb).call(a)}}
function Dh(a){var b=!0,c=Ch(a);c&&a.b&&(a=a.b,b=ve(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
l.mb=function(){if(!this.W){var a=Dh(this);if(a&&"html5"==Eh(this))this.L="html5",this.C||this.P();else if(Fh(this),this.L="html5",a&&this.H)this.l.appendChild(this.H),this.P();else{this.b.loaded=!0;var b=!1;this.R=v(function(){b=!0;var a=this.l,d=zf(this.b);r("yt.player.Application.create")(a,d);this.P()},this);
this.W=!0;a?this.R():(Pe(this.b.assets.js,this.R),Lf(this.b.assets.css),Gh(this)&&!b&&q("yt.player.Application.create",null,void 0))}}};
l.lb=function(){var a=zf(this.b);if(!this.B){var b=Ch(this);b&&(this.B=document.createElement("SPAN"),this.B.tabIndex=0,eg(this.X,this.B,"focus",this.ta),this.M=document.createElement("SPAN"),this.M.tabIndex=0,eg(this.X,this.M,"focus",this.ta),b.parentNode&&b.parentNode.insertBefore(this.B,b),b.parentNode&&b.parentNode.insertBefore(this.M,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Eh(this))this.L="flash",this.C||this.P();else{Fh(this);this.L=
"flash";this.b.loaded=!0;var b=If.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!Jf(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.l;if(c){var b=u(b)?Ob(b):b,d=$a(a.attrs);d.tabindex=0;var e=$a(a.params);e.flashvars=Ze(a.args);if(qe){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=document.createElement("object"),
f;for(f in d)a.setAttribute(f,d[f]);for(var g in e)f=document.createElement("param"),f.setAttribute("name",g),f.setAttribute("value",e[g]),a.appendChild(f)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var h in d)a.setAttribute(h,d[h]);for(var k in e)a.setAttribute(k,e[k])}g=document.createElement("div");g.appendChild(a);b.innerHTML=g.innerHTML}this.P()}};
l.ta=function(){Ch(this).focus()};
function Ch(a){var b=Ob(a.i);!b&&a.w&&a.w.querySelector&&(b=a.w.querySelector("#"+a.i));return b}
l.P=function(){if(!this.f){var a=Ch(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.W=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))Bh(this);else{uh(this);this.C=!0;a=Ch(this);a.addEventListener&&(this.S=Hh(this,a,"addEventListener"));a.removeEventListener&&(this.Z=Hh(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.g[d]||(this.g[d]=Hh(this,a,d))}for(var e in this.j)this.S(e,
this.j[e]);yh(this);this.aa&&this.aa(this.g);this.U.V("onReady",this.g)}else this.oa=V(v(this.P,this),50)}};
function Hh(a,b,c){var d=b[c];return function(){try{return a.fa=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.fa=e,U(e,"WARNING"))}}}
function uh(a){a.C=!1;if(a.Z)for(var b in a.j)a.Z(b,a.j[b]);for(var c in a.Y)window.clearTimeout(parseInt(c,10));a.Y={};a.S=null;a.Z=null;for(var d in a.g)a.g[d]=null;a.g.addEventListener=v(a.G,a);a.g.removeEventListener=v(a.bb,a);a.g.destroy=v(a.dispose,a);a.g.getLastError=v(a.Ia,a);a.g.getPlayerType=v(a.Ja,a);a.g.getCurrentVideoConfig=v(a.Ha,a);a.g.loadNewVideoConfig=v(a.na,a);a.g.isReady=v(a.ob,a)}
l.ob=function(){return this.C};
l.G=function(a,b){if(!this.f){var c=zh(this,b);if(c){if(!(0<=Ba(this.Ca,a)||this.j[a])){var d=Ih(this,a);this.S&&this.S(a,d)}this.U.subscribe(a,c);"onReady"==a&&this.C&&V(w(c,this.g),0)}}};
l.bb=function(a,b){if(!this.f){var c=zh(this,b);c&&ce(this.U,a,c)}};
function zh(a,b){var c=b;if("string"==typeof b){if(a.ba[b])return a.ba[b];c=function(){var a=r(b);a&&a.apply(n,arguments)};
a.ba[b]=c}return c?c:null}
function Ih(a,b){var c="ytPlayer"+b+a.T;a.j[b]=c;n[c]=function(c){var d=V(function(){if(!a.f){a.U.V(b,c);var e=a.Y,g=String(d);g in e&&delete e[g]}},0);
Za(a.Y,String(d))};
return c}
l.Ea=function(a){a=a?Qb:Pb;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.B||b==this.M||(b.focus(),b!=document.activeElement));)b=a(b)};
l.pa=function(a){Fe("a11y-announce",a)};
l.Ta=function(a){Bh(this,a)};
l.Ua=function(a){Fe("WATCH_LATER_VIDEO_ADDED",a)};
l.Va=function(a){Fe("WATCH_LATER_VIDEO_REMOVED",a)};
l.Ra=function(){if(!this.ga){if(Ab){var a=document,b=a.scrollingElement?a.scrollingElement:hb||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement,a=a.parentWindow||a.defaultView;this.ea=I&&J("10")&&a.pageYOffset!=b.scrollTop?new Ha(b.scrollLeft,b.scrollTop):new Ha(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop);eg(this.N,window,"scroll",this.Ya);eg(this.N,this.l,"touchmove",this.Xa)}else eg(this.N,this.l,"mousewheel",this.ua),eg(this.N,this.l,"wheel",this.ua);this.ga=!0}};
l.Sa=function(){fg(this.N);this.ga=!1};
l.ua=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
l.Ya=function(){window.scrollTo(this.ea.b,this.ea.f)};
l.Xa=function(a){a.preventDefault()};
l.Ja=function(){return this.L||Eh(this)};
l.Ia=function(){return this.fa};
function Eh(a){return(a=Ch(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Fh(a){hh("dcp");a.cancel();uh(a);a.L=null;a.b&&(a.b.loaded=!1);var b=Ch(a);"html5"==Eh(a)?Dh(a)||!Gh(a)?a.H=b:(b&&b.destroy&&b.destroy(),a.H=null):b&&b.destroy&&b.destroy();for(var b=a.l,c;c=b.firstChild;)b.removeChild(c);fg(a.X);a.B=null;a.M=null}
l.cancel=function(){this.R&&Oe(this.b.assets.js,this.R);window.clearTimeout(this.oa);this.W=!1};
l.o=function(){Fh(this);if(this.H&&this.b)try{this.H.destroy()}catch(b){U(b)}this.ba=null;for(var a in this.j)n[this.j[a]]=null;this.ha=this.b=this.g=null;delete this.l;delete this.w;th.A.o.call(this)};
function Gh(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var Jh={},Kh="player_uid_"+(1E9*Math.random()>>>0);function Lh(a,b){a=u(a)?Ob(a):a;b=yf(b);var c=Kh+"_"+ra(a),d=Jh[c];if(d)return d.na(b),d.g;d=new th(a,c);Jh[c]=d;Fe("player-added",d.g);zd(d,w(Mh,d));V(function(){d.na(b)},0);
return d.g}
function Mh(a){Jh[a.T]=null}
function Nh(a){a=Ob(a);if(!a)return null;var b=Kh+"_"+ra(a),c=Jh[b];c||(c=new th(a,b),Jh[b]=c);return c.g}
;function Oh(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=T("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){var d=a,e=T("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Wb(K(window.location.href)[3]||null);f&&e.push(f);f=Wb(K(d)[3]||null);if(0<=Ba(e,f)||!f&&0==d.lastIndexOf("/",0))if(W("autoescape_tempdata_url")&&(e=document.createElement("a"),Nb(e,d),d=e.href),d){var f=K(d),d=f[5],e=f[6],f=f[7],g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
Og();d="ST-"+Aa(d).toString(36);e=b?Ze(b):"";zc.set(""+d,e,5,"/","youtube.com");b&&(b=b.itct||b.ved,d=r("yt.logging.screen.storeParentElement"),b&&d&&d(new gg(b)))}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var h,k,m;h=void 0===h?{}:h;k=void 0===k?"":k;m=void 0===m?window:m;c=m.location;a=Xb(Zb([a],h))+k;a=a instanceof Fb?a:Jb(a);c.href=Hb(a)}return!0}
;var Ph=r("yt.abuse.botguardInitialized")||Se;q("yt.abuse.botguardInitialized",Ph,void 0);var Qh=r("yt.abuse.invokeBotguard")||Te;q("yt.abuse.invokeBotguard",Qh,void 0);var Rh=r("yt.abuse.dclkstatus.checkDclkStatus")||tf;q("yt.abuse.dclkstatus.checkDclkStatus",Rh,void 0);var Sh=r("yt.player.exports.navigate")||Oh;q("yt.player.exports.navigate",Sh,void 0);var Th=r("yt.player.embed")||Lh;q("yt.player.embed",Th,void 0);var Uh=r("yt.player.getPlayerByElement")||Nh;q("yt.player.getPlayerByElement",Uh,void 0);
var Vh=r("yt.util.activity.init")||sg;q("yt.util.activity.init",Vh,void 0);var Wh=r("yt.util.activity.getTimeSinceActive")||ug;q("yt.util.activity.getTimeSinceActive",Wh,void 0);var Xh=r("yt.util.activity.setTimestamp")||tg;q("yt.util.activity.setTimestamp",Xh,void 0);function Yh(a){this.b=a||xg();Zh||(Zh=$h(this.b))}
function $h(a){return(new Q(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=pa(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||bb(d,{_c:{jsl:{h:T("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||T("GAPI_HINT_OVERRIDE")){var e;var f=document.location.href;if(-1!=f.indexOf("?")){var f=(f||"").split("#")[0],g=f.split("?",2);e=Xe(1<g.length?g[1]:g[0])}else e={};var h=e.gapi_jsh;h&&bb(d,{_c:{jsl:{h:h}}})}ed("client",d)}catch(k){U(k)}})).then(function(){})}
Yh.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);a("googleapis.config/auth/useFirstPartyAuthV2",!0);var b=this.b.apiaryHost;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Da;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);b=T("SESSION_INDEX");a("googleapis.config/sessionIndex",b);r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
Yh.prototype.f=function(){return{context:wg(this.b)}};
Yh.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=V(function(){e||(e=!0,c.O&&c.O())},c.timeout));
ai(this,a,b,function(a){if(!e)if(e=!0,d&&window.clearTimeout(d),a)c.J&&c.J(a);else if(c.onError)c.onError()})};
function ai(a,b,c,d){var e={path:yg(a.b.innertubeApiVersion,b,c),headers:{"X-Goog-Visitor-Id":T("VISITOR_DATA")},method:"POST",body:Fd(c)},f=v(a.i,a);Zh.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
var Zh=null;function bi(){return W("enable_youtubei_innertube")?zg:Yh}
;function ci(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function di(a,b,c){u(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return ei(a)}
function ei(a,b,c){if(qa(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function fi(a,b,c,d){if(qa(a)&&!na(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};u(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function gi(a){var b=a.video_id||a.videoId;if(u(b)){var c=Ig()||{},d=Ig()||{};p(void 0)?d[b]=void 0:delete d[b];var e=x()+3E5,f=Kg;if(f&&window.JSON){u(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function hi(a){P.call(this);this.g=a;this.g.subscribe("command",this.xa,this);this.i={};this.j=!1}
z(hi,P);l=hi.prototype;l.start=function(){this.j||this.f||(this.j=!0,ii(this.g,"RECEIVING"))};
l.xa=function(a,b){if(this.j&&!this.f){var c=b||{};switch(a){case "addEventListener":if(u(c.event)&&(c=c.event,!(c in this.i))){var d=v(this.eb,this,c);this.i[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":u(c.event)&&ji(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=ki(a,b||{}),c=this.b[a].apply(this.b,c),(c=li(a,c))&&this.j&&!this.f&&ii(this.g,a,c))}}};
l.eb=function(a,b){this.j&&!this.f&&ii(this.g,a,this.ia(a,b))};
l.ia=function(a,b){if(null!=b)return{value:b}};
function ji(a,b){b in a.i&&(a.removeEventListener(b,a.i[b]),delete a.i[b])}
l.o=function(){var a=this.g;a.f||ce(a.b,"command",this.xa,this);this.g=null;for(var b in this.i)ji(this,b);hi.A.o.call(this)};function mi(a,b){hi.call(this,b);this.b=a;this.start()}
z(mi,hi);mi.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
mi.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function ki(a,b){switch(a){case "loadVideoById":return b=ei(b),gi(b),[b];case "cueVideoById":return b=ei(b),gi(b),[b];case "loadVideoByPlayerVars":return gi(b),[b];case "cueVideoByPlayerVars":return gi(b),[b];case "loadPlaylist":return b=fi(b),gi(b),[b];case "cuePlaylist":return b=fi(b),gi(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function li(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
mi.prototype.ia=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return mi.A.ia.call(this,a,b)};
mi.prototype.o=function(){mi.A.o.call(this);delete this.b};function ni(a,b,c,d){P.call(this);this.g=b||null;this.B="*";this.i=c||null;this.sessionId=null;this.channel=d||null;this.H=!!a;this.w=v(this.C,this);window.addEventListener("message",this.w)}
aa(ni,P);
ni.prototype.C=function(a){if(!("*"!=this.i&&a.origin!=this.i||this.g&&a.source!=this.g)&&u(a.data)){var b;try{b=Dd(a.data)}catch(c){return}if(!(null==b||this.H&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.i=this.B=a.origin:U(Error("MessageEvent origin is null"),"WARNING");this.g=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.j&&(this.l&&!(0<=Ba(this.l,b.func))||this.j(b.func,
b.args))}}};
ni.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=Fd(a);c.postMessage(d,this.B)}catch(e){U(e,"WARNING")}}};
ni.prototype.o=function(){window.removeEventListener("message",this.w);P.prototype.o.call(this)};function oi(a,b,c){ni.call(this,a,b,c||T("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.l=this.b=this.j=null}
aa(oi,ni);function pi(){var a=!!T("WIDGET_ID_ENFORCE"),a=this.f=new oi(a),b=v(this.ab,this);a.j=b;a.l=null;this.f.channel="widget";if(a=T("WIDGET_ID"))this.f.sessionId=a;this.i=[];this.l=!1;this.j={}}
l=pi.prototype;l.ab=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.j[c]||"onReady"==c||(this.addEventListener(c,qi(this,c)),this.j[c]=!0)}else this.Aa(a,b)};
l.Aa=function(){};
function qi(a,b){return v(function(a){this.sendMessage(b,a)},a)}
l.addEventListener=function(){};
l.Ga=function(){this.l=!0;this.sendMessage("initialDelivery",this.ja());this.sendMessage("onReady");C(this.i,this.za,this);this.i=[]};
l.ja=function(){return null};
function ri(a,b){a.sendMessage("infoDelivery",b)}
l.za=function(a){this.l?this.f.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.za({event:a,info:void 0==b?null:b})};
l.dispose=function(){this.f=null};function si(a){pi.call(this);this.b=a;this.g=[];this.addEventListener("onReady",v(this.Wa,this));this.addEventListener("onVideoProgress",v(this.ib,this));this.addEventListener("onVolumeChange",v(this.jb,this));this.addEventListener("onApiChange",v(this.cb,this));this.addEventListener("onPlaybackQualityChange",v(this.fb,this));this.addEventListener("onPlaybackRateChange",v(this.gb,this));this.addEventListener("onStateChange",v(this.hb,this))}
z(si,pi);l=si.prototype;l.Aa=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&ci(a)){var c;c=b;if(qa(c[0])&&!na(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=ei.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=di.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=fi.apply(window,c)}c=d}gi(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);ci(a)&&ri(this,this.ja())}};
l.Wa=function(){var a=v(this.Ga,this);this.f.b=a};
l.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
l.ja=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ea(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(k){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=x()/1E3;return b};
l.hb=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:x()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());ri(this,a)};
l.fb=function(a){ri(this,{playbackQuality:a})};
l.gb=function(a){ri(this,{playbackRate:a})};
l.cb=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.b.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.jb=function(){ri(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
l.ib=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:x()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());ri(this,a)};
l.dispose=function(){si.A.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function ti(){P.call(this);this.b=new R;zd(this,w(Ad,this.b))}
z(ti,P);ti.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
ti.prototype.K=function(a){return this.f?!1:this.b.K(a)};
ti.prototype.l=function(a,b){this.f||this.b.V.apply(this.b,arguments)};function ui(a,b,c){ti.call(this);this.g=a;this.i=b;this.j=c}
z(ui,ti);function ii(a,b,c){if(!a.f){var d=a.g;d.f||a.i!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(Fd(a),d.i))}}
ui.prototype.o=function(){this.i=this.g=null;ui.A.o.call(this)};function vi(a,b,c){P.call(this);this.b=a;this.i=c;this.j=Gf(window,"message",v(this.l,this));this.g=new ui(this,a,b);zd(this,w(Ad,this.g))}
z(vi,P);vi.prototype.l=function(a){var b;if(b=!this.f)if(b=a.origin==this.i)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,u(a))){try{a=Dd(a)}catch(d){return}a.command&&(b=this.g,b.f||b.l("command",a.command,a.data))}};
vi.prototype.o=function(){Hf(this.j);this.b=null;vi.A.o.call(this)};function wi(){var a=$a(xi);return new Q(function(b,c){a.J=function(a){We(a)?b(a):c(new yi("Request failed, status="+a.status,"net.badstatus"))};
a.onError=function(){c(new yi("Unknown request error","net.unknown"))};
a.O=function(){c(new yi("Request timed out","net.timeout"))};
cf("//googleads.g.doubleclick.net/pagead/id",a)})}
function yi(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
aa(yi,B);function zi(a){B.call(this,a.message||a.description||a.name);this.Pa=a instanceof Ai;this.b=a instanceof Td}
z(zi,B);zi.prototype.name="BiscottiError";function Ai(){B.call(this,"Biscotti ID is missing from server")}
z(Ai,B);Ai.prototype.name="BiscottiMissingError";function Bi(a,b){this.f=a;this.b=b}
Bi.prototype.then=function(a,b,c){try{if(p(this.f))return a?Qd(a.call(c,this.f)):Qd(this.f);if(p(this.b)){if(!b)return Rd(this.b);var d=b.call(c,this.b);return!p(d)&&this.b.b?Rd(this.b):Qd(d)}throw Error("Invalid Result_ state");}catch(e){return Rd(e)}};
Ld(Bi);var xi={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ci=null;function Di(){if(!Ci){var a=v(Ei,n,2),b=wi().then(Fi);Ci=Sd(b,null,a,void 0)}return Ci}
function Fi(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ai;a=JSON.parse(a.substr(4)).id;Gi(a);Ci=new Bi(a);Hi(18E5,2);return a}
function Ei(a,b){var c=new zi(b);Gi("");Ci=new Bi(void 0,c);0<a&&Hi(12E4,a-1);throw c;}
function Hi(a,b){V(function(){var a=v(Ei,n,b),a=wi().then(Fi,a);Sd(a,null,t,void 0)},a)}
function Gi(a){q("yt.ads.biscotti.lastId_",a,void 0)}
;function Ii(a){a.Pa&&Ji("")}
function Ki(a){!a||r("yt.ads.biscotti.getId_")||r("yt.www.ads.biscotti.getId_")||q("yt.ads.biscotti.getId_",Di,void 0);try{var b;try{var c=r("yt.ads.biscotti.getId_")||r("yt.www.ads.biscotti.getId_");b=c?c():Di()}catch(d){b=Rd(d)}b.then(Ji,Ii);V(Ki,18E5)}catch(d){U(d)}}
var Li=0;
function Ji(a){var b;a:{try{b=window.top.location.href}catch(G){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:ic,flash:Ta||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c;try{c=A.history.length}catch(G){c=0}b.u_his=c;b.u_java=!!A.navigator&&"unknown"!==typeof A.navigator.javaEnabled&&!!A.navigator.javaEnabled&&A.navigator.javaEnabled();A.screen&&(b.u_h=A.screen.height,b.u_w=A.screen.width,b.u_ah=A.screen.availHeight,b.u_aw=A.screen.availWidth,b.u_cd=A.screen.colorDepth);A.navigator&&
A.navigator.plugins&&(b.u_nplug=A.navigator.plugins.length);A.navigator&&A.navigator.mimeTypes&&(b.u_nmime=A.navigator.mimeTypes.length);b.bid=a;b.ca_type=Sa?"flash":"image";if(W("enable_server_side_search_pyv")||W("enable_server_side_mweb_search_pyv")){var d,e;a=window;try{e=a.screenX;var f=a.screenY}catch(G){}try{var g=a.outerWidth,h=a.outerHeight}catch(G){}try{var k=a.innerWidth,m=a.innerHeight}catch(G){}e=[a.screenLeft,a.screenTop,e,f,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:
void 0,g,h,k,m];f=window.top||A;try{var y;if(f.document&&!f.document.body)y=new Ia(-1,-1);else{var E=(f||window).document,Z="CSS1Compat"==E.compatMode?E.documentElement:E.body;y=(new Ia(Z.clientWidth,Z.clientHeight)).round()}d=y}catch(G){d=new Ia(-12245933,-12245933)}y=0;window.SVGElement&&document.createElementNS&&(y|=1);d={bc:y,bih:d.height,biw:d.width,brdim:e.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[xa.webkitVisibilityState||xa.mozVisibilityState||xa.visibilityState||""]||0,wgl:!!A.WebGLRenderingContext};
for(var ta in d)b[ta]=d[ta]}b.bsq=Li++;jf("//www.youtube.com/ad_data_204",{Ka:!1,D:b})}
;function Mi(){this.b=T("ALT_PREF_COOKIE_NAME","PREF");var a=zc.get(""+this.b,void 0);if(a)for(var a=unescape(a).split("&"),b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Y[d]=c.toString())}}
la(Mi);var Y=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Y,void 0);function Ni(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Oi(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Pi(a){a=void 0!==Y[a]?Y[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Mi.prototype.get=function(a,b){Oi(a);Ni(a);var c=void 0!==Y[a]?Y[a].toString():null;return null!=c?c:b?b:""};
Mi.prototype.set=function(a,b){Oi(a);Ni(a);if(null==b)throw Error("ExpectedNotNull");Y[a]=b.toString()};
Mi.prototype.remove=function(a){Oi(a);Ni(a);delete Y[a]};
Mi.prototype.clear=function(){Y={}};q("yt.pubsub.publish",Fe,void 0);var Qi=null,Ri=null,Si=null,Ti={};function Ui(a){vg(a.payload_name,a.payload,W("enable_youtubei_innertube")?zg:Yh,void 0,void 0)}
function Vi(a){var b=a.id;a=a.ve_type;var c=hg++;a=new gg(void 0,a,c,void 0);Ti[b]=a;b=Og();c=Ng();b&&c&&Eg(bi(),b,c,a)}
function Wi(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(S("client-screen-nonce",b),S("ROOT_VE_TYPE",a),a=Ng()))for(var c in Ti){var d=b,e=a,f=Ti[c];Eg(bi(),d,e,f)}}
function Xi(a){Ti[a.id]=new gg(a.tracking_params)}
function Yi(a){var b=Og();a=Ti[a.id];if(b&&a){var c=bi();Fg(c,{click:{csn:b,visualElement:ig(a)}},void 0)}}
function Zi(a){a=a.ids;var b=Og();if(b){for(var c=[],d=0;d<a.length;d++){var e=Ti[a[d]];e&&c.push(e)}c.length&&Gg(bi(),b,c)}}
function $i(){var a=Qi;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;q("yt.setConfig",S,void 0);q("yt.config.set",S,void 0);q("yt.setMsg",of,void 0);q("yt.msgs.set",of,void 0);q("yt.logging.errors.log",kf,void 0);
q("writeEmbed",function(){var a=T("PLAYER_CONFIG",void 0);"1"!=a.privembed&&Ki(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=T("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);T("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&gi(a.args);Qi=a=Lh("player",a);a.addEventListener("onScreenChanged",Wi);a.addEventListener("onLogClientVeCreated",Vi);a.addEventListener("onLogServerVeCreated",Xi);a.addEventListener("onLogToGel",
Ui);a.addEventListener("onLogVeClicked",Yi);a.addEventListener("onLogVesShown",Zi);a.addEventListener("onReady",$i);b=T("POST_MESSAGE_ID","player");T("ENABLE_JS_API")?Si=new si(a):T("ENABLE_POST_API")&&u(b)&&u(c)&&(Ri=new vi(window.parent,b,c),Si=new mi(a,Ri.g));T("BG_P")&&(T("BG_I")||T("BG_IU"))&&Re();sf()},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){Rg(a+"mac_204?action_fcts=1");return!0},void 0);
var aj=xe(function(){hh("ol");var a=Mi.getInstance(),b=1<window.devicePixelRatio;if(!!((Pi("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=Pi(c)||0,d=b?d|67108864:d&-67108865;0==d?delete Y[c]:Y[c]=d.toString(16).toString();var a=a.b,b=[],e;for(e in Y)b.push(e+"="+escape(Y[e]));zc.set(""+a,b.join("&"),63072E3,"/","youtube.com")}}),bj=xe(function(){var a=Qi;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();T("PL_ATT")&&(Qe=null);for(var a=0,b=qf.length;a<b;a++){var c=qf[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):window.clearTimeout(c)}}qf.length=0;a=Le("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))Ee(a),b.parentNode.removeChild(b);rf=!1;S("DCLKSTAT",0);Bd(Si,Ri);if(a=Qi)a.removeEventListener("onScreenChanged",Wi),a.removeEventListener("onLogClientVeCreated",Vi),a.removeEventListener("onLogServerVeCreated",
Xi),a.removeEventListener("onLogToGel",Ui),a.removeEventListener("onLogVeClicked",Yi),a.removeEventListener("onLogVesShown",Zi),a.removeEventListener("onReady",$i),a.destroy();Ti={}});
window.addEventListener?(window.addEventListener("load",aj),window.addEventListener("unload",bj)):window.attachEvent&&(window.attachEvent("onload",aj),window.attachEvent("onunload",bj));}).call(this);
