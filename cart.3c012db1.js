function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}function e(t,e){return Object.keys(e).forEach(function(n){"default"===n||"__esModule"===n||Object.prototype.hasOwnProperty.call(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})}),t}var n,o,i,r,s,a,c,u,l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},h={},f={},p=l.parcelRequired7c6;null==p&&((p=function(t){if(t in h)return h[t].exports;if(t in f){var e=f[t];delete f[t];var n={id:t,exports:{}};return h[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){f[t]=e},l.parcelRequired7c6=p);var d=p.register;d("kyEFX",function(e,n){t(e.exports,"register",function(){return o},function(t){return o=t});var o,i=new Map;o=function(t,e){for(var n=0;n<e.length-1;n+=2)i.set(e[n],{baseUrl:t,path:e[n+1]})}}),d("eayiT",function(e,n){t(e.exports,"saveToLocalStorage",function(){return o}),t(e.exports,"loadFromLocalStorage",function(){return i});let o=(t,e)=>{try{let n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set state error: ",t.message)}},i=t=>{try{let e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}}}),d("ls5ZR",function(e,n){t(e.exports,"FILTER_KEY",function(){return o}),t(e.exports,"PRODUCTS_KEY",function(){return i}),t(e.exports,"CART_KEY",function(){return r}),t(e.exports,"CATEGORY_KEY",function(){return s}),t(e.exports,"POPULAR_KEY",function(){return a}),t(e.exports,"DISCOUNT_KEY",function(){return c});let o="filter",i="products",r="cart",s="categories",a="popular",c="discount"}),p("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["d3pfZ","cart.3c012db1.js","8OQ7p","icons.7d2de116.svg"]'));/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var m=function(t,e){return(m=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},y=function(){return(y=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function v(t,e,n,o){var i,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(r<3?i(s):r>3?i(e,n,s):i(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s}var g=new WeakMap;function b(){if(void 0!==r)return r;var t=!1;try{var e=function(){},n=Object.defineProperty({},"passive",{enumerable:!0,get:function(){return t=!0,!0}});window.addEventListener("testPassive",e,n),window.removeEventListener("testPassive",e,n)}catch(t){}return r=!!t&&{passive:!1}}function w(t){var e=g.get(t)||[];return g.set(t,e),function(t,n,o){function i(t){t.defaultPrevented||o(t)}n.split(/\s+/g).forEach(function(n){e.push({elem:t,eventName:n,handler:i}),t.addEventListener(n,i,b())})}}function x(t){var e=t.touches?t.touches[t.touches.length-1]:t;return{x:e.clientX,y:e.clientY}}function _(t,e){return void 0===e&&(e=[]),e.some(function(e){return t===e})}var E=["webkit","moz","ms","o"],T=RegExp("^-(?!(?:"+E.join("|")+")-)");function S(t,e){var n,o;o={},Object.keys(n=e).forEach(function(t){if(!T.test(t)){o[t]=n[t];return}var e=n[t];o[t=t.replace(/^-/,"")]=e,E.forEach(function(n){o["-"+n+"-"+t]=e})}),Object.keys(e=o).forEach(function(n){var o=n.replace(/^-/,"").replace(/-([a-z])/g,function(t,e){return e.toUpperCase()});t.style[o]=e[n]})}var A=function(){function t(t){this.velocityMultiplier=window.devicePixelRatio,this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=x(t)}return t.prototype.update=function(t){var e=this.velocity,n=this.updateTime,o=this.lastPosition,i=Date.now(),r=x(t),s={x:-(r.x-o.x),y:-(r.y-o.y)},a=i-n||16.7,c=s.x/a*16.7,u=s.y/a*16.7;e.x=c*this.velocityMultiplier,e.y=u*this.velocityMultiplier,this.delta=s,this.updateTime=i,this.lastPosition=r},t}(),O=function(){function t(){this._touchList={}}return Object.defineProperty(t.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),t.prototype.isActive=function(){return void 0!==this._activeTouchID},t.prototype.getDelta=function(){var t=this._getActiveTracker();return t?y({},t.delta):this._primitiveValue},t.prototype.getVelocity=function(){var t=this._getActiveTracker();return t?y({},t.velocity):this._primitiveValue},t.prototype.getEasingDistance=function(t){var e=1-t,n={x:0,y:0},o=this.getVelocity();return Object.keys(o).forEach(function(t){for(var i=10>=Math.abs(o[t])?0:o[t];0!==i;)n[t]+=i,i=i*e|0}),n},t.prototype.track=function(t){var e=this;return Array.from(t.targetTouches).forEach(function(t){e._add(t)}),this._touchList},t.prototype.update=function(t){var e=this,n=t.touches,o=t.changedTouches;return Array.from(n).forEach(function(t){e._renew(t)}),this._setActiveID(o),this._touchList},t.prototype.release=function(t){var e=this;delete this._activeTouchID,Array.from(t.changedTouches).forEach(function(t){e._delete(t)})},t.prototype._add=function(t){this._has(t)&&this._delete(t);var e=new A(t);this._touchList[t.identifier]=e},t.prototype._renew=function(t){this._has(t)&&this._touchList[t.identifier].update(t)},t.prototype._delete=function(t){delete this._touchList[t.identifier]},t.prototype._has=function(t){return this._touchList.hasOwnProperty(t.identifier)},t.prototype._setActiveID=function(t){this._activeTouchID=t[t.length-1].identifier},t.prototype._getActiveTracker=function(){return this._touchList[this._activeTouchID]},t}();function P(t,e,n){return Math.max(e,Math.min(n,t))}function M(t,e,n){void 0===e&&(e=0);var o,i=-1/0;return function(){for(var r=this,s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];if(n){var c=Date.now(),u=c-i;i=c,u>=e&&t.apply(this,s)}clearTimeout(o),o=setTimeout(function(){t.apply(r,s)},e)}}function D(t,e){return void 0===t&&(t=-1/0),void 0===e&&(e=1/0),function(n,o){var i="_"+o;Object.defineProperty(n,o,{get:function(){return this[i]},set:function(n){Object.defineProperty(this,i,{value:P(n,t,e),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function k(t,e){var n="_"+e;Object.defineProperty(t,e,{get:function(){return this[n]},set:function(t){Object.defineProperty(this,n,{value:!!t,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}function R(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e,n,o){var i=o.value;return{get:function(){return this.hasOwnProperty(n)||Object.defineProperty(this,n,{value:M.apply(void 0,function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var o=Array(t),i=0,e=0;e<n;e++)for(var r=arguments[e],s=0,a=r.length;s<a;s++,i++)o[i]=r[s];return o}([i],t))}),this[n]}}}}var z=function(){function t(t){var e=this;void 0===t&&(t={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(t).forEach(function(n){e[n]=t[n]})}return Object.defineProperty(t.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(t){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=t},enumerable:!0,configurable:!0}),v([D(0,1)],t.prototype,"damping",void 0),v([D(0,1/0)],t.prototype,"thumbMinSize",void 0),v([k],t.prototype,"renderByPixels",void 0),v([k],t.prototype,"alwaysShowTracks",void 0),v([k],t.prototype,"continuousScrolling",void 0),t}();(n=s||(s={})).X="x",n.Y="y";var L=function(){function t(t,e){void 0===e&&(e=0),this._direction=t,this._minSize=e,this.element=document.createElement("div"),this.displaySize=0,this.realSize=0,this.offset=0,this.element.className="scrollbar-thumb scrollbar-thumb-"+t}return t.prototype.attachTo=function(t){t.appendChild(this.element)},t.prototype.update=function(t,e,n){this.realSize=Math.min(e/n,1)*e,this.displaySize=Math.max(this.realSize,this._minSize),this.offset=t/n*(e+(this.realSize-this.displaySize)),S(this.element,this._getStyle())},t.prototype._getStyle=function(){switch(this._direction){case s.X:return{width:this.displaySize+"px","-transform":"translate3d("+this.offset+"px, 0, 0)"};case s.Y:return{height:this.displaySize+"px","-transform":"translate3d(0, "+this.offset+"px, 0)"};default:return null}},t}(),N=function(){function t(t,e){void 0===e&&(e=0),this.element=document.createElement("div"),this._isShown=!1,this.element.className="scrollbar-track scrollbar-track-"+t,this.thumb=new L(t,e),this.thumb.attachTo(this.element)}return t.prototype.attachTo=function(t){t.appendChild(this.element)},t.prototype.show=function(){this._isShown||(this._isShown=!0,this.element.classList.add("show"))},t.prototype.hide=function(){this._isShown&&(this._isShown=!1,this.element.classList.remove("show"))},t.prototype.update=function(t,e,n){S(this.element,{display:n<=e?"none":"block"}),this.thumb.update(t,e,n)},t}(),C=function(){function t(t){this._scrollbar=t;var e=t.options.thumbMinSize;this.xAxis=new N(s.X,e),this.yAxis=new N(s.Y,e),this.xAxis.attachTo(t.containerEl),this.yAxis.attachTo(t.containerEl),t.options.alwaysShowTracks&&(this.xAxis.show(),this.yAxis.show())}return t.prototype.update=function(){var t=this._scrollbar,e=t.size,n=t.offset;this.xAxis.update(n.x,e.container.width,e.content.width),this.yAxis.update(n.y,e.container.height,e.content.height)},t.prototype.autoHideOnIdle=function(){this._scrollbar.options.alwaysShowTracks||(this.xAxis.hide(),this.yAxis.hide())},v([R(300)],t.prototype,"autoHideOnIdle",null),t}(),H=new WeakMap;function j(t){return Math.pow(t-1,3)+1}var F=function(){function t(t,e){var n=this.constructor;this.scrollbar=t,this.name=n.pluginName,this.options=y(y({},n.defaultOptions),e)}return t.prototype.onInit=function(){},t.prototype.onDestroy=function(){},t.prototype.onUpdate=function(){},t.prototype.onRender=function(t){},t.prototype.transformDelta=function(t,e){return y({},t)},t.pluginName="",t.defaultOptions={},t}(),I={order:new Set,constructors:{}};function Y(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.forEach(function(t){var e=t.pluginName;if(!e)throw TypeError("plugin name is required");I.order.add(e),I.constructors[e]=t})}var B={},U={};function X(t){var e=w(t),n=t.containerEl;e(n,"keydown",function(e){var o=document.activeElement;if(!(o!==n&&!n.contains(o)||("INPUT"===o.tagName||"SELECT"===o.tagName||"TEXTAREA"===o.tagName||o.isContentEditable)&&!o.disabled)){var i=function(t,e){var n=t.size,o=t.limit,i=t.offset;switch(e){case a.TAB:return void requestAnimationFrame(function(){t.scrollIntoView(document.activeElement,{offsetTop:t.size.container.height/2,offsetLeft:t.size.container.width/2,onlyScrollIfNeeded:!0})});case a.SPACE:return[0,200];case a.PAGE_UP:return[0,-n.container.height+40];case a.PAGE_DOWN:return[0,n.container.height-40];case a.END:return[0,o.y-i.y];case a.HOME:return[0,-i.y];case a.LEFT:return[-40,0];case a.UP:return[0,-40];case a.RIGHT:return[40,0];case a.DOWN:return[0,40];default:return null}}(t,e.keyCode||e.which);if(i){var r=i[0],s=i[1];t.addTransformableMomentum(r,s,e,function(n){n?e.preventDefault():(t.containerEl.blur(),t.parent&&t.parent.containerEl.focus())})}}})}t(U,"keyboardHandler",function(){return X}),(o=a||(a={}))[o.TAB=9]="TAB",o[o.SPACE=32]="SPACE",o[o.PAGE_UP=33]="PAGE_UP",o[o.PAGE_DOWN=34]="PAGE_DOWN",o[o.END=35]="END",o[o.HOME=36]="HOME",o[o.LEFT=37]="LEFT",o[o.UP=38]="UP",o[o.RIGHT=39]="RIGHT",o[o.DOWN=40]="DOWN";var q={};function W(t){var e,n,o,i,r,s=w(t),a=t.containerEl,u=t.track,l=u.xAxis,h=u.yAxis;function f(e,n){var o=t.size,i=t.limit,r=t.offset;return e===c.X?P(n/(o.container.width+(l.thumb.realSize-l.thumb.displaySize))*o.content.width,0,i.x)-r.x:e===c.Y?P(n/(o.container.height+(h.thumb.realSize-h.thumb.displaySize))*o.content.height,0,i.y)-r.y:0}function p(t){return _(t,[l.element,l.thumb.element])?c.X:_(t,[h.element,h.thumb.element])?c.Y:void 0}s(a,"click",function(e){if(!n&&_(e.target,[l.element,h.element])){var o=e.target,i=p(o),r=o.getBoundingClientRect(),s=x(e);if(i===c.X){var a=s.x-r.left-l.thumb.displaySize/2;t.setMomentum(f(i,a),0)}if(i===c.Y){var a=s.y-r.top-h.thumb.displaySize/2;t.setMomentum(0,f(i,a))}}}),s(a,"mousedown",function(n){if(_(n.target,[l.thumb.element,h.thumb.element])){e=!0;var s=n.target,c=x(n),u=s.getBoundingClientRect();i=p(s),o={x:c.x-u.left,y:c.y-u.top},r=a.getBoundingClientRect(),S(t.containerEl,{"-user-select":"none"})}}),s(window,"mousemove",function(s){if(e){n=!0;var a=x(s);if(i===c.X){var u=a.x-o.x-r.left;t.setMomentum(f(i,u),0)}if(i===c.Y){var u=a.y-o.y-r.top;t.setMomentum(0,f(i,u))}}}),s(window,"mouseup blur",function(){e=n=!1,S(t.containerEl,{"-user-select":""})})}t(q,"mouseHandler",function(){return W}),(i=c||(c={}))[i.X=0]="X",i[i.Y=1]="Y";var G={};function $(t){w(t)(window,"resize",M(t.update.bind(t),300))}t(G,"resizeHandler",function(){return $});var V={};function K(t){var e,n=w(t),o=t.containerEl,i=t.contentEl,r=!1,s=!1;n(window,"mousemove",function(n){var o,i,s,a,c,u,l,h,f;r&&(cancelAnimationFrame(e),function n(o){var i=o.x,r=o.y;if(i||r){var s=t.offset,a=t.limit;t.setMomentum(P(s.x+i,0,a.x)-s.x,P(s.y+r,0,a.y)-s.y),e=requestAnimationFrame(function(){n({x:i,y:r})})}}((i=(o=t.bounding).top,s=o.right,a=o.bottom,c=o.left,l=(u=x(n)).x,h=u.y,f={x:0,y:0},0===l&&0===h||(l>s-20?f.x=l-s+20:l<c+20&&(f.x=l-c-20),h>a-20?f.y=h-a+20:h<i+20&&(f.y=h-i-20),f.x*=2,f.y*=2),f)))}),n(i,"contextmenu",function(){s=!0,cancelAnimationFrame(e),r=!1}),n(i,"mousedown",function(){s=!1}),n(i,"selectstart",function(){s||(cancelAnimationFrame(e),r=!0)}),n(window,"mouseup blur",function(){cancelAnimationFrame(e),r=!1,s=!1}),n(o,"scroll",function(t){t.preventDefault(),o.scrollTop=o.scrollLeft=0})}t(V,"selectHandler",function(){return K});var Z={};function J(t){var e,n=t.options.delegateTo||t.containerEl,o=new O,i=w(t),r=0;i(n,"touchstart",function(n){o.track(n),t.setMomentum(0,0),0===r&&(e=t.options.damping,t.options.damping=Math.max(e,.5)),r++}),i(n,"touchmove",function(e){if(!u||u===t){o.update(e);var n=o.getDelta(),i=n.x,r=n.y;t.addTransformableMomentum(i,r,e,function(n){n&&e.cancelable&&(e.preventDefault(),u=t)})}}),i(n,"touchcancel touchend",function(n){var i=o.getEasingDistance(e);t.addTransformableMomentum(i.x,i.y,n),0==--r&&(t.options.damping=e),o.release(n),u=null})}t(Z,"touchHandler",function(){return J});var Q={};function tt(t){w(t)(t.options.delegateTo||t.containerEl,"onwheel"in window||document.implementation.hasFeature("Events.wheel","3.0")?"wheel":"mousewheel",function(e){var n=function(t){if("deltaX"in t){var e=tn[t.deltaMode]||1;return{x:t.deltaX/te.STANDARD*e,y:t.deltaY/te.STANDARD*e}}return"wheelDeltaX"in t?{x:t.wheelDeltaX/te.OTHERS,y:t.wheelDeltaY/te.OTHERS}:{x:0,y:t.wheelDelta/te.OTHERS}}(e),o=n.x,i=n.y;t.addTransformableMomentum(o,i,e,function(t){t&&e.preventDefault()})})}t(Q,"wheelHandler",function(){return tt});var te={STANDARD:1,OTHERS:-3},tn=[1,28,500];e(B,U),e(B,q),e(B,G),e(B,V),e(B,Z),e(B,Q);var to=new Map,ti=function(){function t(t,e){var n,o,i=this;this.offset={x:0,y:0},this.limit={x:1/0,y:1/0},this.bounding={top:0,right:0,bottom:0,left:0},this._plugins=[],this._momentum={x:0,y:0},this._listeners=new Set,this.containerEl=t;var r=this.contentEl=document.createElement("div");this.options=new z(e),t.setAttribute("data-scrollbar","true"),t.setAttribute("tabindex","-1"),S(t,{overflow:"hidden",outline:"none"}),window.navigator.msPointerEnabled&&(t.style.msTouchAction="none"),r.className="scroll-content",Array.from(t.childNodes).forEach(function(t){r.appendChild(t)}),t.appendChild(r),this.track=new C(this),this.size=this.getSize(),this._plugins=(n=this,o=this.options.plugins,Array.from(I.order).filter(function(t){return!1!==o[t]}).map(function(t){var e=new I.constructors[t](n,o[t]);return o[t]=e.options,e}));var s=t.scrollLeft,a=t.scrollTop;t.scrollLeft=t.scrollTop=0,this.setPosition(s,a,{withoutCallbacks:!0});var c=window.ResizeObserver;"function"==typeof c&&(this._observer=new c(function(){i.update()}),this._observer.observe(r)),to.set(t,this),requestAnimationFrame(function(){i._init()})}return Object.defineProperty(t.prototype,"parent",{get:function(){for(var t=this.containerEl.parentElement;t;){var e=to.get(t);if(e)return e;t=t.parentElement}return null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrollTop",{get:function(){return this.offset.y},set:function(t){this.setPosition(this.scrollLeft,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrollLeft",{get:function(){return this.offset.x},set:function(t){this.setPosition(t,this.scrollTop)},enumerable:!0,configurable:!0}),t.prototype.getSize=function(){var t,e,n,o,i,r;return t=this.containerEl,e=this.contentEl,n=getComputedStyle(t),i=(o=["paddingTop","paddingBottom","paddingLeft","paddingRight"].map(function(t){return n[t]?parseFloat(n[t]):0}))[0]+o[1],r=o[2]+o[3],{container:{width:t.clientWidth,height:t.clientHeight},content:{width:e.offsetWidth-e.clientWidth+e.scrollWidth+r,height:e.offsetHeight-e.clientHeight+e.scrollHeight+i}}},t.prototype.update=function(){var t,e,n,o;e={x:Math.max((t=this.getSize()).content.width-t.container.width,0),y:Math.max(t.content.height-t.container.height,0)},o={top:Math.max((n=this.containerEl.getBoundingClientRect()).top,0),right:Math.min(n.right,window.innerWidth),bottom:Math.min(n.bottom,window.innerHeight),left:Math.max(n.left,0)},this.size=t,this.limit=e,this.bounding=o,this.track.update(),this.setPosition(),this._plugins.forEach(function(t){t.onUpdate()})},t.prototype.isVisible=function(t){var e,n,o,i,r;return e=this.bounding,n=t.getBoundingClientRect(),o=Math.max(e.top,n.top),i=Math.max(e.left,n.left),r=Math.min(e.right,n.right),o<Math.min(e.bottom,n.bottom)&&i<r},t.prototype.setPosition=function(t,e,n){var o,i,r,s,a,c,u,l=this;void 0===t&&(t=this.offset.x),void 0===e&&(e=this.offset.y),void 0===n&&(n={});var h=(o=t,i=e,r=this.options,s=this.offset,a=this.limit,c=this.track,u=this.contentEl,(r.renderByPixels&&(o=Math.round(o),i=Math.round(i)),o=P(o,0,a.x),i=P(i,0,a.y),o!==s.x&&c.xAxis.show(),i!==s.y&&c.yAxis.show(),r.alwaysShowTracks||c.autoHideOnIdle(),o===s.x&&i===s.y)?null:(s.x=o,s.y=i,S(u,{"-transform":"translate3d("+-o+"px, "+-i+"px, 0)"}),c.update(),{offset:y({},s),limit:y({},a)}));h&&!n.withoutCallbacks&&this._listeners.forEach(function(t){t.call(l,h)})},t.prototype.scrollTo=function(t,e,n,o){var i,r,s,a,c,u,l,h,f,p,d,m,y,v,g,b,w;void 0===t&&(t=this.offset.x),void 0===e&&(e=this.offset.y),void 0===n&&(n=0),void 0===o&&(o={}),i=this,r=t,s=e,void 0===(a=n)&&(a=0),h=void 0===(l=(u=void 0===(c=o)?{}:c).easing)?j:l,f=u.callback,p=i.options,d=i.offset,m=i.limit,p.renderByPixels&&(r=Math.round(r),s=Math.round(s)),y=d.x,v=d.y,g=P(r,0,m.x)-y,b=P(s,0,m.y)-v,w=Date.now(),cancelAnimationFrame(H.get(i)),function t(){var e=Date.now()-w,n=a?h(Math.min(e/a,1)):1;if(i.setPosition(y+g*n,v+b*n),e>=a)"function"==typeof f&&f.call(i);else{var o=requestAnimationFrame(t);H.set(i,o)}}()},t.prototype.scrollIntoView=function(t,e){void 0===e&&(e={}),function(t,e,n){var o=void 0===n?{}:n,i=o.alignToTop,r=o.onlyScrollIfNeeded,s=o.offsetTop,a=o.offsetLeft,c=o.offsetBottom,u=t.containerEl,l=t.bounding,h=t.offset,f=t.limit;if(e&&u.contains(e)){var p=e.getBoundingClientRect();if(!(void 0!==r&&r&&t.isVisible(e))){var d=void 0===i||i?p.top-l.top-(void 0===s?0:s):p.bottom-l.bottom+(void 0===c?0:c);t.setMomentum(p.left-l.left-(void 0===a?0:a),P(d,-h.y,f.y-h.y))}}}(this,t,e)},t.prototype.addListener=function(t){if("function"!=typeof t)throw TypeError("[smooth-scrollbar] scrolling listener should be a function");this._listeners.add(t)},t.prototype.removeListener=function(t){this._listeners.delete(t)},t.prototype.addTransformableMomentum=function(t,e,n,o){this._updateDebounced();var i=this._plugins.reduce(function(t,e){return e.transformDelta(t,n)||t},{x:t,y:e}),r=!this._shouldPropagateMomentum(i.x,i.y);r&&this.addMomentum(i.x,i.y),o&&o.call(this,r)},t.prototype.addMomentum=function(t,e){this.setMomentum(this._momentum.x+t,this._momentum.y+e)},t.prototype.setMomentum=function(t,e){0===this.limit.x&&(t=0),0===this.limit.y&&(e=0),this.options.renderByPixels&&(t=Math.round(t),e=Math.round(e)),this._momentum.x=t,this._momentum.y=e},t.prototype.updatePluginOptions=function(t,e){this._plugins.forEach(function(n){n.name===t&&Object.assign(n.options,e)})},t.prototype.destroy=function(){var t,e=this.containerEl,n=this.contentEl;(t=g.get(this))&&(t.forEach(function(t){var e=t.elem,n=t.eventName,o=t.handler;e.removeEventListener(n,o,b())}),g.delete(this)),this._listeners.clear(),this.setMomentum(0,0),cancelAnimationFrame(this._renderID),this._observer&&this._observer.disconnect(),to.delete(this.containerEl);for(var o=Array.from(n.childNodes);e.firstChild;)e.removeChild(e.firstChild);o.forEach(function(t){e.appendChild(t)}),S(e,{overflow:""}),e.scrollTop=this.scrollTop,e.scrollLeft=this.scrollLeft,this._plugins.forEach(function(t){t.onDestroy()}),this._plugins.length=0},t.prototype._init=function(){var t=this;this.update(),Object.keys(B).forEach(function(e){B[e](t)}),this._plugins.forEach(function(t){t.onInit()}),this._render()},t.prototype._updateDebounced=function(){this.update()},t.prototype._shouldPropagateMomentum=function(t,e){void 0===t&&(t=0),void 0===e&&(e=0);var n=this.options,o=this.offset,i=this.limit;if(!n.continuousScrolling)return!1;0===i.x&&0===i.y&&this._updateDebounced();var r=P(t+o.x,0,i.x),s=P(e+o.y,0,i.y);return r===o.x&&s===o.y&&(o.x===i.x||0===o.x||o.y===i.y||0===o.y)},t.prototype._render=function(){var t=this._momentum;if(t.x||t.y){var e=this._nextTick("x"),n=this._nextTick("y");t.x=e.momentum,t.y=n.momentum,this.setPosition(e.position,n.position)}var o=y({},this._momentum);this._plugins.forEach(function(t){t.onRender(o)}),this._renderID=requestAnimationFrame(this._render.bind(this))},t.prototype._nextTick=function(t){var e=this.options,n=this.offset,o=this._momentum,i=n[t],r=o[t];if(.1>=Math.abs(r))return{momentum:0,position:i+r};var s=r*(1-e.damping);return e.renderByPixels&&(s|=0),{momentum:s,position:i+r-s}},v([R(100,!0)],t.prototype,"_updateDebounced",null),t}(),tr="smooth-scrollbar-style",ts=!1;function ta(){if(!ts&&"undefined"!=typeof window){var t=document.createElement("style");t.id=tr,t.textContent="\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n",document.head&&document.head.appendChild(t),ts=!0}}var tc=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return!function(t,e){function n(){this.constructor=t}m(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.init=function(t,e){if(!t||1!==t.nodeType)throw TypeError("expect element to be DOM Element, but got "+t);return(ta(),to.has(t))?to.get(t):new ti(t,e)},e.initAll=function(t){return Array.from(document.querySelectorAll("[data-scrollbar]"),function(n){return e.init(n,t)})},e.has=function(t){return to.has(t)},e.get=function(t){return to.get(t)},e.getAll=function(){return Array.from(to.values())},e.destroy=function(t){var e=to.get(t);e&&e.destroy()},e.destroyAll=function(){to.forEach(function(t){t.destroy()})},e.use=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Y.apply(void 0,t)},e.attachStyle=function(){return ta()},e.detachStyle=function(){return function(){if(ts&&"undefined"!=typeof window){var t=document.getElementById(tr);t&&t.parentNode&&(t.parentNode.removeChild(t),ts=!1)}}()},e.version="8.8.4",e.ScrollbarPlugin=F,e}(ti),tu=p("eayiT"),tl=p("ls5ZR"),tu=p("eayiT"),tl=p("ls5ZR"),th={};th=new URL("icons.7d2de116.svg",import.meta.url).toString();const tf=document.querySelector(".products-list");document.querySelector(".delete-btn"),document.querySelector(".delete-btn");const tp=document.querySelector(".sum-total-product");function td(t){return t?t.reduce((t,e)=>t+=e.price,0):0}!function(t){let e=t.map(({img:t,name:e,category:n,size:o,price:i,_id:r})=>{var s;return`
            <li class="products-item" id="${r}">
            <div class="cart-product-img-container">
              <img
                src="${t}"
                alt="${e}"
              />
            </div>
            <div class="product-info">
              <h3 class="cart-product-name">${e}</h3>
              <ul class="product-info-list">
                <li class="product-info-item">
                  <p class="cart-category-text">
                    Category:
                    <span class="cart-category-name">${n}</span>
                  </p>
                </li>
                <li class="product-info-item">
                  <p class="cart-product-size">
                    Size: <span class="cart-product-size-value">${o}</span>
                  </p>
                </li>
              </ul>
              <p class="cart-product-price">$${i}</p>
            </div>
            <button type="button" data-id="${r}" class="cart-delete-btn">
              <svg class="icon-delete-product">
                <use href="${(s=th)&&s.__esModule?s.default:s}#icon-close"></use>
              </svg>
            </button>
          </li>
            `}).join("");tf.innerHTML=e}((0,tu.loadFromLocalStorage)(tl.CART_KEY)??[]),function(){let t=td((0,tu.loadFromLocalStorage)(tl.CART_KEY)??[]);tp.innerHTML=t}(),console.log(td([])),tc.init(document.querySelector("#my-scrollbar"),{alwaysShowTracks:!0});
//# sourceMappingURL=cart.3c012db1.js.map
