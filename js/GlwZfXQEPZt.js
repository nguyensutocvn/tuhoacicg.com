if (self.CavalryLogger) { CavalryLogger.start_js(["72l+l"]); }

__d("DOMScroll",["Arbiter","DOM","DOMQuery","Vector","ViewportBounds","emptyFunction","ge","gkx","isAsyncScrollQuery","nullthrows","requireDeferred"],(function(a,b,c,d,e,f){var g=b("requireDeferred")("Animation"),h=b("gkx")("1243461"),i={SCROLL:"dom-scroll",_scrolling:!1,_scrollingFinishedTimeout:null,getScrollState:function(){var a=b("Vector").getViewportDimensions(),c=b("Vector").getDocumentDimensions(),d=c.x>a.x;c=c.y>a.y;d+=0;c+=0;return new(b("Vector"))(d,c)},_scrollbarSize:null,_initScrollbarSize:function(){var a=b("DOM").create("p");a.style.width="100%";a.style.height="200px";var c=b("DOM").create("div");c.style.position="absolute";c.style.top="0px";c.style.left="0px";c.style.visibility="hidden";c.style.width="200px";c.style.height="150px";c.style.overflow="hidden";c.appendChild(a);b("nullthrows")(document.body).appendChild(c);var d=a.offsetWidth;c.style.overflow="scroll";a=a.offsetWidth;d==a&&(a=c.clientWidth);b("nullthrows")(document.body).removeChild(c);i._scrollbarSize=d-a},getScrollbarSize:function(){i._scrollbarSize===null&&i._initScrollbarSize();return b("nullthrows")(i._scrollbarSize)},scrollTo:function(a,c,d,e,f,j){var k,l=0;c==null||c===!0?l=750:typeof c==="number"?l=c:parseInt(c,10)&&(l=parseInt(c,10));b("isAsyncScrollQuery")()&&(l=0);if(a instanceof b("Vector"))c=a;else{var m=b("Vector").getScrollPosition().x;a=b("Vector").getElementPosition(b("ge")(a)).y;c=new(b("Vector"))(m,a,"document");e||(c.y-=b("ViewportBounds").getTop()/(d?2:1))}d?c.y-=b("Vector").getViewportDimensions().y/2:e&&(c.y-=b("Vector").getViewportDimensions().y,c.y+=e);f&&(c.y-=f);c=c.convertTo("document");if(l)if("scrollBehavior"in b("nullthrows")(document.documentElement).style&&l===750&&!j)try{window.scrollTo({left:c.x,top:c.y,behavior:h?"auto":"smooth"})}catch(a){window.scrollTo(c.x,c.y)}else{m=g.getModuleIfRequired();if(m!=null){i._setScrollingForDuration(l);var n=new m(b("nullthrows")(document.body)).to("scrollTop",c.y).to("scrollLeft",c.x).ease(m.ease.end).duration(l).ondone(j).go();k=function(){n.stop()}}else window.scrollTo(c.x,c.y),j&&j()}else window.scrollTo(c.x,c.y),j&&j();b("Arbiter").inform(i.SCROLL);return k||b("emptyFunction")},scrollToID:function(a){i.scrollTo(a)},ensureVisible:function(a,c,d,e,f){var g=b("Vector").getScrollPosition().x;a=i._getBounds(a,c,d);c=a[0];d=a[1];var h=a[2];a=a[3];h<c?i.scrollTo(new(b("Vector"))(g,h,"document"),e,!1,0,0,f):a>d?h-(a-d)<c?i.scrollTo(new(b("Vector"))(g,h,"document"),e,!1,0,0,f):i.scrollTo(new(b("Vector"))(g,a,"document"),e,!1,1,0,f):f&&f()},isCurrentlyVisible:function(a,b,c){a=i._getBounds(a,b,c);b=a[0];c=a[1];var d=a[2];a=a[3];return d>=b&&a<=c},_getBounds:function(a,c,d){d==null&&(d=10);a=b("ge")(a);c&&(a=b("DOMQuery").find(a,c));c=b("Vector").getScrollPosition().y;var e=c+b("Vector").getViewportDimensions().y,f=b("Vector").getElementPosition(a).y;a=f+b("Vector").getElementDimensions(a).y;f-=b("ViewportBounds").getTop();f-=d;a+=d;return[c,e,f,a]},scrollToTop:function(a){var c=b("Vector").getScrollPosition();i.scrollTo(new(b("Vector"))(c.x,0,"document"),a!==!1)},currentlyScrolling:function(){return i._scrolling},_setScrollingForDuration:function(a){i._scrolling=!0,i._scrollingFinishedTimeout&&(clearTimeout(i._scrollingFinishedTimeout),i._scrollingFinishedTimeout=null),i._scrollingFinishedTimeout=setTimeout(function(){i._scrolling=!1,i._scrollingFinishedTimeout=null},a)}};e.exports=i}),null);
__d("XReferer",["Base64","Cookie","FBJSON","URI","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){f.update=a;f._setCookie=h;f.truncatePath=i;var g;function a(a,c,d){if(!d){b("Cookie").set("x-referer","");return}a!=null&&(a=i(a));c!=null&&(c=i(c));var e=window.location.pathname+window.location.search;d=(g||(g=b("URI"))).getRequestURI();var f=d.getSubdomain();c!=null&&h(c,e,f);a!=null&&b("setTimeoutAcrossTransitions")(function(){a!=null&&h(a,e,f)},0)}function h(a,c,d){a={r:a,h:c,s:d};c=b("Base64").encode(b("FBJSON").stringify(a));b("Cookie").set("x-referer",c)}function i(a){var b=1024;a&&a.length>b&&(a=a.substring(0,b)+"...");return a}}),null);
__d("HistoryManager",["Env","Event","SprinkleConfig","URI","UserAgent_DEPRECATED","XReferer","emptyFunction","gkx","goOrReplace","isInIframe","setIntervalAcrossTransitions"],(function(a,b,c,d,e,f){var g,h,i={history:null,current:0,fragment:null,isInitialized:function(){return!!i._initialized},init:function(){if(!(g||(g=b("Env"))).ALLOW_TRANSITION_IN_IFRAME&&b("isInIframe")())return;if(i._initialized)return i;var a=new(h||(h=b("URI")))(window.location.href),c=a.getFragment()||"";c.charAt(0)==="!"&&(c=c.substr(1),a.setFragment(c));Object.assign(i,{_initialized:!0,fragment:c,orig_fragment:c,history:[a],callbacks:[],lastChanged:Date.now(),canonical:new h("#"),user:0,enabled:!0,debug:b("emptyFunction")});if(window.history&&window.history.pushState){this.lastURI=document.URL;c=new(h||(h=b("URI")))(this.lastURI);a=c.getQueryData();a.__md__=void 0;a.__xts__=void 0;a.fb_dtsg_ag=void 0;a[b("SprinkleConfig").param_name]=void 0;this.lastURI=c.setQueryData(a).toString();try{window.history.state&&b("gkx")("819236")?window.history.replaceState(window.history.state,null,this.lastURI):window.history.replaceState(this.lastURI,null,this.lastURI)}catch(a){if(!(a.number===-2147467259))throw a}b("Event").listen(window,"popstate",function(a){var c=a&&a.state&&typeof a.state==="string";c&&i.lastURI!=a.state&&(i.lastURI=document.URL,i.lastChanged=Date.now(),i.notify(new(h||(h=b("URI")))(a.state).getUnqualifiedURI().toString()))}.bind(i));(b("UserAgent_DEPRECATED").webkit()<534||b("UserAgent_DEPRECATED").chrome()<=13)&&(b("setIntervalAcrossTransitions")(i.checkURI,42),i._updateRefererURI(this.lastURI));return i}i._updateRefererURI(h.getRequestURI(!1));if(b("UserAgent_DEPRECATED").webkit()<500||b("UserAgent_DEPRECATED").firefox()<2){i.enabled=!1;return i}"onhashchange"in window?b("Event").listen(window,"hashchange",function(){window.setTimeout(i.checkURI.bind(i),0)}):b("setIntervalAcrossTransitions")(i.checkURI,42);return i},registerURIHandler:function(a){i.callbacks.push(a);return i},setCanonicalLocation:function(a){i.canonical=new(h||(h=b("URI")))(a);return i},notify:function(a){a==i.orig_fragment&&(a=i.canonical.getFragment());for(var b=0;b<i.callbacks.length;b++)try{if(i.callbacks[b](a))return!0}catch(a){}return!1},checkURI:function(){if(Date.now()-i.lastChanged<400)return;if(window.history&&window.history.pushState){var a=new(h||(h=b("URI")))(document.URL).removeQueryData("ref").toString(),c=new h(i.lastURI).removeQueryData("ref").toString();a!=c&&(i.lastChanged=Date.now(),i.lastURI=a,b("UserAgent_DEPRECATED").webkit()<534&&i._updateRefererURI(a),i.notify(new(h||(h=b("URI")))(a).getUnqualifiedURI().toString()));return}if(b("UserAgent_DEPRECATED").webkit()&&window.history.length==200){i.warned||(i.warned=!0);return}c=new(h||(h=b("URI")))(window.location.href).getFragment();c.charAt(0)=="!"&&(c=c.substr(1));c=c.replace(/%23/g,"#");if(c!=i.fragment.replace(/%23/g,"#")){i.debug([c," vs ",i.fragment,"whl: ",window.history.length,"QHL: ",i.history.length].join(" "));for(var a=i.history.length-1;a>=0;--a)if(i.history[a].getFragment().replace(/%23/g,"#")==c)break;++i.user;a>=0?i.go(a-i.current):i.go("#"+c);--i.user}},_updateRefererURI:function(a){a instanceof(h||(h=b("URI")))&&(a=a.toString()),b("XReferer").update(a,null,!0)},go:function(a,c,d){if(window.history&&window.history.pushState){c||typeof a==="number";var e=new(h||(h=b("URI")))(a).removeQueryData(["ref","messaging_source","ajaxpipe_fetch_stream","fb_dtsg_ag",b("SprinkleConfig").param_name]).toString();i.lastChanged=Date.now();this.lastURI=e;d?window.history.replaceState(a,null,e):window.history.pushState(a,null,e);b("UserAgent_DEPRECATED").webkit()<534&&i._updateRefererURI(a);return!1}i.debug("go: "+a);c===void 0&&(c=!0);if(!i.enabled&&!c)return!1;if(typeof a==="number"){if(!a)return!1;e=a+i.current;var f=Math.max(0,Math.min(i.history.length-1,e));i.current=f;e=i.history[f].getFragment()||i.orig_fragment;e=new(h||(h=b("URI")))(e).removeQueryData("ref").getUnqualifiedURI().toString();i.fragment=e;i.lastChanged=Date.now();i.user||b("goOrReplace")(window.location,window.location.href.split("#")[0]+"#!"+e,d);c&&i.notify(e);i._updateRefererURI(e);return!1}a=new(h||(h=b("URI")))(a);a.getDomain()==new(h||(h=b("URI")))(window.location.href).getDomain()&&(a=new(h||(h=b("URI")))("#"+a.getUnqualifiedURI()));f=i.history[i.current].getFragment();e=a.getFragment();if(e==f||f==i.orig_fragment&&e==i.canonical.getFragment()){c&&i.notify(e);i._updateRefererURI(e);return!1}d&&i.current--;f=i.history.length-i.current-1;i.history.splice(i.current+1,f);i.history.push(new h(a));return i.go(1,c,d)},getCurrentFragment:function(){var a=(h||(h=b("URI"))).getRequestURI(!1).getFragment();return a==i.orig_fragment?i.canonical.getFragment():a}};e.exports=i}),null);
__d("LayerHideOnEscape",["Event","Keys","LayerHideSources"],(function(a,b,c,d,e,f){a=function(){function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("key",this.handle.bind(this))};c.disable=function(){this._subscription!=null&&this._subscription.unsubscribe(),this._subscription=null};c.handle=function(a,c){if(b("Event").getKeyCode(c)===b("Keys").ESC){this._layer.hide(b("LayerHideSources").ESCAPE);return!1}return void 0};return a}();e.exports=a;Object.assign(a.prototype,{_subscription:null})}),null);
__d("escapeJSQuotes",[],(function(a,b,c,d,e,f){e.exports=a;function a(a){return typeof a==="undefined"||a==null||!a.valueOf()?"":a.toString().replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\"/g,"\\x22").replace(/\'/g,"\\'").replace(/</g,"\\x3c").replace(/>/g,"\\x3e").replace(/&/g,"\\x26")}}),null);
__d("PageTransitionsBlue",["fbt","invariant","Arbiter","BlueCompatBroker","BlueCompatRouter","Bootloader","DOMQuery","DOMScroll","Env","ErrorGuard","Event","FbtResultBase","HistoryManager","LayerHideOnEscape","PageHooks","PageTransitionsConfig","PageTransitionsRegistrar","React","ScriptPath","URI","Vector","areEqual","clickRefAction","escapeJSQuotes","ge","goOrReplace","isFacebookURI","isInIframe","setTimeout"],(function(a,b,c,d,e,f,g,h){var i,j,k,l,m=b("React"),n=["cquick","ctarget","cquick_token","mh_","killabyte","tfc_","tfi_"],o={};function p(a,b){a&&(o[a.getUnqualifiedURI().toString()]=b)}function q(a){return o[a.getUnqualifiedURI().toString()]}function r(a){delete o[a.getUnqualifiedURI().toString()]}function s(){var a={};window.location.search.slice(1).split("&").forEach(function(b){b=b.split("=");var c=b[0];b=b[1];b=b===void 0?null:b;n.some(function(a){return c.startsWith(a)})&&(a[c]=b)});return a}var t=null,u=!1,v=new(i||(i=b("URI")))(""),w=null,x=new i(),y=null,z=!1,A=!1,B=!1,C={isInitialized:function(){return u},init:function(){C._init()},_init:function(){if(b("isInIframe")())return!1;if(u)return!0;var a=b("PageTransitionsRegistrar").getMostRecentURI();t=a;v=a;w=null;x=a;var c=(j||(j=b("ErrorGuard"))).applyWithGuard(function(a){return(i||(i=b("URI"))).tryParseURI(a)},null,[document.referrer]);y=document.referrer&&c&&b("isFacebookURI")(c)?c:null;u=!0;c=(i||(i=b("URI"))).getRequestURI(!1);c.getFragment().startsWith("/")?c=c.getFragment():c=a.toString();b("HistoryManager").init().setCanonicalLocation("#"+c).registerURIHandler(C._historyManagerHandler);b("Event").listen(window,"scroll",function(){z||p(t,b("Vector").getScrollPosition())});return!0},registerHandler:b("PageTransitionsRegistrar").registerHandler,removeHandler:b("PageTransitionsRegistrar").removeHandler,getCurrentURI:function(a){a===void 0&&(a=!1);C._init();return!t&&!a?new(i||(i=b("URI")))(v):new(i||(i=b("URI")))(t)},isTransitioning:function(){C._init();return!t},getNextURI:function(){C._init();return x},getNextReferrerURI:function(){C._init();return w},getReferrerURI:function(){C._init();return y},getMostRecentURI:function(){C._init();return new(i||(i=b("URI")))(v)},go:function(a,c){c===void 0&&(c=!1);if(b("BlueCompatRouter").goFragment(a)){var d=new(i||(i=b("URI")))(a);if(C.restoreScrollPosition(d)){t=v=d;return}}if(b("BlueCompatRouter").go(a,c))return;C.goBase(a,c)},goBase:function(a,c){c===void 0&&(c=!1);C._init();var d=s(),e=new(i||(i=b("URI")))(a).removeQueryData("quickling").addQueryData(d).getQualifiedURI();r(e);c||b("clickRefAction")("uri",{href:e.toString()},null,"INDIRECT");C._loadPage(e,function(a){a?b("HistoryManager").go(e.toString(),!1,c):b("goOrReplace")(window.location,e,c)})},_historyManagerHandler:function(a){if(a.charAt(0)!="/")return!1;b("clickRefAction")("h",{href:a});b("ScriptPath").getClickPointInfo()||b("ScriptPath").setClickPointInfo({click:"back"});C._loadPage(new(i||(i=b("URI")))(a),function(c){c||b("goOrReplace")(window.location,a,!0)});return!0},_loadPage:function(a,c){if(new(i||(i=b("URI")))(a).getFragment()&&(k||(k=b("areEqual")))(new(i||(i=b("URI")))(a).setFragment("").getQualifiedURI(),new(i||(i=b("URI")))(t).setFragment("").getQualifiedURI())){b("Arbiter").inform("pre_page_fragment_transition",{from:new(i||(i=b("URI")))(t).getFragment(),to:new i(a).getFragment()});if(C.restoreScrollPosition(a)){t=v=a;b("Arbiter").inform("page_fragment_transition",{fragment:new(i||(i=b("URI")))(a).getFragment()});return}}var d;t&&(d=q(t));var e=function(){d&&t&&p(t,d);w=C.getMostRecentURI();t=null;x=a;d&&b("DOMScroll").scrollTo(d,!1);z=!0;var e=C._handleTransition(a);c&&(e===b("PageTransitionsRegistrar").DELAY_HISTORY?b("setTimeout")(function(){return c&&c(e)},0):c(e))},f=x;x=a;var g=b("PageHooks").runHooks("onbeforeleavehooks");x=f;g?C._warnBeforeLeaving(g,e):e()},_handleTransition:function(c){window.onbeforeleavehooks=void 0;if(A||!c.isSameOrigin())return!1;var d=b("PageTransitionsConfig").reloadOnBootloadError&&C._hasBootloadErrors();if(d)return!1;var e;d=a.AsyncRequest;d&&(e=d.getLastID());b("Arbiter").inform("pre_page_transition",{from:C.getMostRecentURI(),to:c});d=b("PageTransitionsRegistrar")._getTransitionHandlers();for(var f=d.length-1;f>=0;--f){var g=d[f];if(!g)continue;for(var h=g.length-1;h>=0;--h){var i=g[h](c);if(i===!0||i===b("PageTransitionsRegistrar").DELAY_HISTORY){var j={sender:C,uri:c,id:e};try{b("Arbiter").inform("page_transition",j)}catch(a){}return i}else g.splice(h,1)}}return!1},disableTransitions:function(){A=!0},disableScrollAnimation:function(){B=!0},_hasBootloadErrors:function(){return b("Bootloader").getErrorCount()>0},unifyURI:function(){C._init(),t=v=x,y=w},transitionComplete:function(a){a===void 0&&(a=!1);C._init();z=!1;C._executeCompletionCallbacks();C.unifyURI();a||t&&C.restoreScrollPosition(t);try{document.activeElement&&document.activeElement.nodeName==="A"&&document.activeElement.blur()}catch(a){}},_executeCompletionCallbacks:function(){var a=b("PageTransitionsRegistrar")._getCompletionCallbacks();a.length>0&&(b("PageTransitionsRegistrar")._resetCompletionCallbacks(),a.forEach(function(a){return a()}))},registerCompletionCallback:b("PageTransitionsRegistrar").registerCompletionCallback,rewriteCurrentURI:function(a,c){C._init();var d=b("PageTransitionsRegistrar")._getTransitionHandlers(),e=d.length||1,f=!1;b("PageTransitionsRegistrar").registerHandler(function(){if(a&&a.toString()==C.getMostRecentURI().getUnqualifiedURI().toString()){C.transitionComplete();return!0}f=!0},e);C.go(c,!0);d.length===e+1&&d[e].length===(f?0:1)||h(0,1302);d.length=e},_warnBeforeLeaving:function(a,c){b("Bootloader").loadModules(["DialogX","XUIDialogTitle.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIGrayText.react"],function(d,e,f,h,i,j){var k=typeof a==="string"||a instanceof String||a instanceof b("FbtResultBase")?{body:a,highlightStay:!1,leaveButtonText:g._("R\u1eddi kh\u1ecfi trang n\u00e0y"),showCloseButton:!1,stayButtonText:g._("\u1ede l\u1ea1i trang n\u00e0y"),title:g._("R\u1eddi kh\u1ecfi trang?")}:a;e=m.jsx(e,{showCloseButton:k.showCloseButton,children:k.title});h=k.highlightStay?[m.jsx(h,{action:"confirm",label:k.leaveButtonText},"confirm"),m.jsx(h,{action:"cancel",use:"confirm",label:k.stayButtonText,className:"autofocus"},"cancel")]:[m.jsx(h,{action:"cancel",label:k.stayButtonText},"cancel"),m.jsx(h,{action:"confirm",use:"confirm",label:k.leaveButtonText,className:"autofocus"},"confirm")];var l=new d({width:450,addedBehaviors:[b("LayerHideOnEscape")]},m.jsxs("div",{children:[e,m.jsx(f,{children:m.jsx(j,{shade:"medium",size:"medium",children:k.body})}),m.jsx(i,{children:h})]}));l.subscribe("confirm",function(){l.hide(),c()});l.show()},"PageTransitionsBlue")},restoreScrollPosition:function(a){var c=q(a);if(c){b("DOMScroll").scrollTo(c,!1);return!0}function d(a){if(!a)return null;var c="a[name='"+b("escapeJSQuotes")(a)+"']";return b("DOMQuery").scry(document.body,c)[0]||b("ge")(a)}c=d(new(i||(i=b("URI")))(a).getFragment());if(c){d=!B;b("DOMScroll").scrollTo(c,d);return!0}return!1}};(l||(l=b("Env"))).isCQuick&&(b("BlueCompatBroker").init(),b("BlueCompatBroker").register("transitionpage",function(c){c=new(i||(i=b("URI")))(b("BlueCompatBroker").getMessageEventString(c,"uri"));var d=new i(window.location.href);c.removeQueryData("ctarget");d.removeQueryData("ctarget");if(d.toString()===c.toString())return;d=a.AsyncRequest;d&&d.ignoreUpdate();C.goBase(c,!1)}));c=C;e.exports=c;a.PageTransitions=C}),null);