function t(t,e){return Object.keys(e).forEach(function(n){"default"===n||"__esModule"===n||Object.prototype.hasOwnProperty.call(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})}),t}function e(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}/*! *****************************************************************************
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
***************************************************************************** */var n,i,o,r,s,a,c,u,l=function(t,e){return(l=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},h=function(){return(h=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function f(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s}var d=new WeakMap;function p(){if(void 0!==r)return r;var t=!1;try{var e=function(){},n=Object.defineProperty({},"passive",{enumerable:!0,get:function(){return t=!0,!0}});window.addEventListener("testPassive",e,n),window.removeEventListener("testPassive",e,n)}catch(t){}return r=!!t&&{passive:!1}}function m(t){var e=d.get(t)||[];return d.set(t,e),function(t,n,i){function o(t){t.defaultPrevented||i(t)}n.split(/\s+/g).forEach(function(n){e.push({elem:t,eventName:n,handler:o}),t.addEventListener(n,o,p())})}}function y(t){var e=t.touches?t.touches[t.touches.length-1]:t;return{x:e.clientX,y:e.clientY}}function v(t,e){return void 0===e&&(e=[]),e.some(function(e){return t===e})}var g=["webkit","moz","ms","o"],b=RegExp("^-(?!(?:"+g.join("|")+")-)");function w(t,e){var n,i;i={},Object.keys(n=e).forEach(function(t){if(!b.test(t)){i[t]=n[t];return}var e=n[t];i[t=t.replace(/^-/,"")]=e,g.forEach(function(n){i["-"+n+"-"+t]=e})}),Object.keys(e=i).forEach(function(n){var i=n.replace(/^-/,"").replace(/-([a-z])/g,function(t,e){return e.toUpperCase()});t.style[i]=e[n]})}var x=function(){function t(t){this.velocityMultiplier=window.devicePixelRatio,this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=y(t)}return t.prototype.update=function(t){var e=this.velocity,n=this.updateTime,i=this.lastPosition,o=Date.now(),r=y(t),s={x:-(r.x-i.x),y:-(r.y-i.y)},a=o-n||16.7,c=s.x/a*16.7,u=s.y/a*16.7;e.x=c*this.velocityMultiplier,e.y=u*this.velocityMultiplier,this.delta=s,this.updateTime=o,this.lastPosition=r},t}(),_=function(){function t(){this._touchList={}}return Object.defineProperty(t.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),t.prototype.isActive=function(){return void 0!==this._activeTouchID},t.prototype.getDelta=function(){var t=this._getActiveTracker();return t?h({},t.delta):this._primitiveValue},t.prototype.getVelocity=function(){var t=this._getActiveTracker();return t?h({},t.velocity):this._primitiveValue},t.prototype.getEasingDistance=function(t){var e=1-t,n={x:0,y:0},i=this.getVelocity();return Object.keys(i).forEach(function(t){for(var o=10>=Math.abs(i[t])?0:i[t];0!==o;)n[t]+=o,o=o*e|0}),n},t.prototype.track=function(t){var e=this;return Array.from(t.targetTouches).forEach(function(t){e._add(t)}),this._touchList},t.prototype.update=function(t){var e=this,n=t.touches,i=t.changedTouches;return Array.from(n).forEach(function(t){e._renew(t)}),this._setActiveID(i),this._touchList},t.prototype.release=function(t){var e=this;delete this._activeTouchID,Array.from(t.changedTouches).forEach(function(t){e._delete(t)})},t.prototype._add=function(t){this._has(t)&&this._delete(t);var e=new x(t);this._touchList[t.identifier]=e},t.prototype._renew=function(t){this._has(t)&&this._touchList[t.identifier].update(t)},t.prototype._delete=function(t){delete this._touchList[t.identifier]},t.prototype._has=function(t){return this._touchList.hasOwnProperty(t.identifier)},t.prototype._setActiveID=function(t){this._activeTouchID=t[t.length-1].identifier},t.prototype._getActiveTracker=function(){return this._touchList[this._activeTouchID]},t}();function E(t,e,n){return Math.max(e,Math.min(n,t))}function T(t,e,n){void 0===e&&(e=0);var i,o=-1/0;return function(){for(var r=this,s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];if(n){var c=Date.now(),u=c-o;o=c,u>=e&&t.apply(this,s)}clearTimeout(i),i=setTimeout(function(){t.apply(r,s)},e)}}function A(t,e){return void 0===t&&(t=-1/0),void 0===e&&(e=1/0),function(n,i){var o="_"+i;Object.defineProperty(n,i,{get:function(){return this[o]},set:function(n){Object.defineProperty(this,o,{value:E(n,t,e),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function P(t,e){var n="_"+e;Object.defineProperty(t,e,{get:function(){return this[n]},set:function(t){Object.defineProperty(this,n,{value:!!t,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}function S(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e,n,i){var o=i.value;return{get:function(){return this.hasOwnProperty(n)||Object.defineProperty(this,n,{value:T.apply(void 0,function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var i=Array(t),o=0,e=0;e<n;e++)for(var r=arguments[e],s=0,a=r.length;s<a;s++,o++)i[o]=r[s];return i}([o],t))}),this[n]}}}}var M=function(){function t(t){var e=this;void 0===t&&(t={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(t).forEach(function(n){e[n]=t[n]})}return Object.defineProperty(t.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(t){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=t},enumerable:!0,configurable:!0}),f([A(0,1)],t.prototype,"damping",void 0),f([A(0,1/0)],t.prototype,"thumbMinSize",void 0),f([P],t.prototype,"renderByPixels",void 0),f([P],t.prototype,"alwaysShowTracks",void 0),f([P],t.prototype,"continuousScrolling",void 0),t}();(n=s||(s={})).X="x",n.Y="y";var O=function(){function t(t,e){void 0===e&&(e=0),this._direction=t,this._minSize=e,this.element=document.createElement("div"),this.displaySize=0,this.realSize=0,this.offset=0,this.element.className="scrollbar-thumb scrollbar-thumb-"+t}return t.prototype.attachTo=function(t){t.appendChild(this.element)},t.prototype.update=function(t,e,n){this.realSize=Math.min(e/n,1)*e,this.displaySize=Math.max(this.realSize,this._minSize),this.offset=t/n*(e+(this.realSize-this.displaySize)),w(this.element,this._getStyle())},t.prototype._getStyle=function(){switch(this._direction){case s.X:return{width:this.displaySize+"px","-transform":"translate3d("+this.offset+"px, 0, 0)"};case s.Y:return{height:this.displaySize+"px","-transform":"translate3d(0, "+this.offset+"px, 0)"};default:return null}},t}(),D=function(){function t(t,e){void 0===e&&(e=0),this.element=document.createElement("div"),this._isShown=!1,this.element.className="scrollbar-track scrollbar-track-"+t,this.thumb=new O(t,e),this.thumb.attachTo(this.element)}return t.prototype.attachTo=function(t){t.appendChild(this.element)},t.prototype.show=function(){this._isShown||(this._isShown=!0,this.element.classList.add("show"))},t.prototype.hide=function(){this._isShown&&(this._isShown=!1,this.element.classList.remove("show"))},t.prototype.update=function(t,e,n){w(this.element,{display:n<=e?"none":"block"}),this.thumb.update(t,e,n)},t}(),k=function(){function t(t){this._scrollbar=t;var e=t.options.thumbMinSize;this.xAxis=new D(s.X,e),this.yAxis=new D(s.Y,e),this.xAxis.attachTo(t.containerEl),this.yAxis.attachTo(t.containerEl),t.options.alwaysShowTracks&&(this.xAxis.show(),this.yAxis.show())}return t.prototype.update=function(){var t=this._scrollbar,e=t.size,n=t.offset;this.xAxis.update(n.x,e.container.width,e.content.width),this.yAxis.update(n.y,e.container.height,e.content.height)},t.prototype.autoHideOnIdle=function(){this._scrollbar.options.alwaysShowTracks||(this.xAxis.hide(),this.yAxis.hide())},f([S(300)],t.prototype,"autoHideOnIdle",null),t}(),z=new WeakMap;function L(t){return Math.pow(t-1,3)+1}var N=function(){function t(t,e){var n=this.constructor;this.scrollbar=t,this.name=n.pluginName,this.options=h(h({},n.defaultOptions),e)}return t.prototype.onInit=function(){},t.prototype.onDestroy=function(){},t.prototype.onUpdate=function(){},t.prototype.onRender=function(t){},t.prototype.transformDelta=function(t,e){return h({},t)},t.pluginName="",t.defaultOptions={},t}(),j={order:new Set,constructors:{}};function C(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.forEach(function(t){var e=t.pluginName;if(!e)throw TypeError("plugin name is required");j.order.add(e),j.constructors[e]=t})}var R={},H={};function I(t){var e=m(t),n=t.containerEl;e(n,"keydown",function(e){var i=document.activeElement;if(!(i!==n&&!n.contains(i)||("INPUT"===i.tagName||"SELECT"===i.tagName||"TEXTAREA"===i.tagName||i.isContentEditable)&&!i.disabled)){var o=function(t,e){var n=t.size,i=t.limit,o=t.offset;switch(e){case a.TAB:return void requestAnimationFrame(function(){t.scrollIntoView(document.activeElement,{offsetTop:t.size.container.height/2,offsetLeft:t.size.container.width/2,onlyScrollIfNeeded:!0})});case a.SPACE:return[0,200];case a.PAGE_UP:return[0,-n.container.height+40];case a.PAGE_DOWN:return[0,n.container.height-40];case a.END:return[0,i.y-o.y];case a.HOME:return[0,-o.y];case a.LEFT:return[-40,0];case a.UP:return[0,-40];case a.RIGHT:return[40,0];case a.DOWN:return[0,40];default:return null}}(t,e.keyCode||e.which);if(o){var r=o[0],s=o[1];t.addTransformableMomentum(r,s,e,function(n){n?e.preventDefault():(t.containerEl.blur(),t.parent&&t.parent.containerEl.focus())})}}})}e(H,"keyboardHandler",function(){return I}),(i=a||(a={}))[i.TAB=9]="TAB",i[i.SPACE=32]="SPACE",i[i.PAGE_UP=33]="PAGE_UP",i[i.PAGE_DOWN=34]="PAGE_DOWN",i[i.END=35]="END",i[i.HOME=36]="HOME",i[i.LEFT=37]="LEFT",i[i.UP=38]="UP",i[i.RIGHT=39]="RIGHT",i[i.DOWN=40]="DOWN";var B={};function F(t){var e,n,i,o,r,s=m(t),a=t.containerEl,u=t.track,l=u.xAxis,h=u.yAxis;function f(e,n){var i=t.size,o=t.limit,r=t.offset;return e===c.X?E(n/(i.container.width+(l.thumb.realSize-l.thumb.displaySize))*i.content.width,0,o.x)-r.x:e===c.Y?E(n/(i.container.height+(h.thumb.realSize-h.thumb.displaySize))*i.content.height,0,o.y)-r.y:0}function d(t){return v(t,[l.element,l.thumb.element])?c.X:v(t,[h.element,h.thumb.element])?c.Y:void 0}s(a,"click",function(e){if(!n&&v(e.target,[l.element,h.element])){var i=e.target,o=d(i),r=i.getBoundingClientRect(),s=y(e);if(o===c.X){var a=s.x-r.left-l.thumb.displaySize/2;t.setMomentum(f(o,a),0)}if(o===c.Y){var a=s.y-r.top-h.thumb.displaySize/2;t.setMomentum(0,f(o,a))}}}),s(a,"mousedown",function(n){if(v(n.target,[l.thumb.element,h.thumb.element])){e=!0;var s=n.target,c=y(n),u=s.getBoundingClientRect();o=d(s),i={x:c.x-u.left,y:c.y-u.top},r=a.getBoundingClientRect(),w(t.containerEl,{"-user-select":"none"})}}),s(window,"mousemove",function(s){if(e){n=!0;var a=y(s);if(o===c.X){var u=a.x-i.x-r.left;t.setMomentum(f(o,u),0)}if(o===c.Y){var u=a.y-i.y-r.top;t.setMomentum(0,f(o,u))}}}),s(window,"mouseup blur",function(){e=n=!1,w(t.containerEl,{"-user-select":""})})}e(B,"mouseHandler",function(){return F}),(o=c||(c={}))[o.X=0]="X",o[o.Y=1]="Y";var X={};function W(t){m(t)(window,"resize",T(t.update.bind(t),300))}e(X,"resizeHandler",function(){return W});var Y={};function U(t){var e,n=m(t),i=t.containerEl,o=t.contentEl,r=!1,s=!1;n(window,"mousemove",function(n){var i,o,s,a,c,u,l,h,f;r&&(cancelAnimationFrame(e),function n(i){var o=i.x,r=i.y;if(o||r){var s=t.offset,a=t.limit;t.setMomentum(E(s.x+o,0,a.x)-s.x,E(s.y+r,0,a.y)-s.y),e=requestAnimationFrame(function(){n({x:o,y:r})})}}((o=(i=t.bounding).top,s=i.right,a=i.bottom,c=i.left,l=(u=y(n)).x,h=u.y,f={x:0,y:0},0===l&&0===h||(l>s-20?f.x=l-s+20:l<c+20&&(f.x=l-c-20),h>a-20?f.y=h-a+20:h<o+20&&(f.y=h-o-20),f.x*=2,f.y*=2),f)))}),n(o,"contextmenu",function(){s=!0,cancelAnimationFrame(e),r=!1}),n(o,"mousedown",function(){s=!1}),n(o,"selectstart",function(){s||(cancelAnimationFrame(e),r=!0)}),n(window,"mouseup blur",function(){cancelAnimationFrame(e),r=!1,s=!1}),n(i,"scroll",function(t){t.preventDefault(),i.scrollTop=i.scrollLeft=0})}e(Y,"selectHandler",function(){return U});var G={};function V(t){var e,n=t.options.delegateTo||t.containerEl,i=new _,o=m(t),r=0;o(n,"touchstart",function(n){i.track(n),t.setMomentum(0,0),0===r&&(e=t.options.damping,t.options.damping=Math.max(e,.5)),r++}),o(n,"touchmove",function(e){if(!u||u===t){i.update(e);var n=i.getDelta(),o=n.x,r=n.y;t.addTransformableMomentum(o,r,e,function(n){n&&e.cancelable&&(e.preventDefault(),u=t)})}}),o(n,"touchcancel touchend",function(n){var o=i.getEasingDistance(e);t.addTransformableMomentum(o.x,o.y,n),0==--r&&(t.options.damping=e),i.release(n),u=null})}e(G,"touchHandler",function(){return V});var q={};function J(t){m(t)(t.options.delegateTo||t.containerEl,"onwheel"in window||document.implementation.hasFeature("Events.wheel","3.0")?"wheel":"mousewheel",function(e){var n=function(t){if("deltaX"in t){var e=Q[t.deltaMode]||1;return{x:t.deltaX/K.STANDARD*e,y:t.deltaY/K.STANDARD*e}}return"wheelDeltaX"in t?{x:t.wheelDeltaX/K.OTHERS,y:t.wheelDeltaY/K.OTHERS}:{x:0,y:t.wheelDelta/K.OTHERS}}(e),i=n.x,o=n.y;t.addTransformableMomentum(i,o,e,function(t){t&&e.preventDefault()})})}e(q,"wheelHandler",function(){return J});var K={STANDARD:1,OTHERS:-3},Q=[1,28,500];t(R,H),t(R,B),t(R,X),t(R,Y),t(R,G),t(R,q);var Z=new Map,$=function(){function t(t,e){var n,i,o=this;this.offset={x:0,y:0},this.limit={x:1/0,y:1/0},this.bounding={top:0,right:0,bottom:0,left:0},this._plugins=[],this._momentum={x:0,y:0},this._listeners=new Set,this.containerEl=t;var r=this.contentEl=document.createElement("div");this.options=new M(e),t.setAttribute("data-scrollbar","true"),t.setAttribute("tabindex","-1"),w(t,{overflow:"hidden",outline:"none"}),window.navigator.msPointerEnabled&&(t.style.msTouchAction="none"),r.className="scroll-content",Array.from(t.childNodes).forEach(function(t){r.appendChild(t)}),t.appendChild(r),this.track=new k(this),this.size=this.getSize(),this._plugins=(n=this,i=this.options.plugins,Array.from(j.order).filter(function(t){return!1!==i[t]}).map(function(t){var e=new j.constructors[t](n,i[t]);return i[t]=e.options,e}));var s=t.scrollLeft,a=t.scrollTop;t.scrollLeft=t.scrollTop=0,this.setPosition(s,a,{withoutCallbacks:!0});var c=window.ResizeObserver;"function"==typeof c&&(this._observer=new c(function(){o.update()}),this._observer.observe(r)),Z.set(t,this),requestAnimationFrame(function(){o._init()})}return Object.defineProperty(t.prototype,"parent",{get:function(){for(var t=this.containerEl.parentElement;t;){var e=Z.get(t);if(e)return e;t=t.parentElement}return null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrollTop",{get:function(){return this.offset.y},set:function(t){this.setPosition(this.scrollLeft,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrollLeft",{get:function(){return this.offset.x},set:function(t){this.setPosition(t,this.scrollTop)},enumerable:!0,configurable:!0}),t.prototype.getSize=function(){var t,e,n,i,o,r;return t=this.containerEl,e=this.contentEl,n=getComputedStyle(t),o=(i=["paddingTop","paddingBottom","paddingLeft","paddingRight"].map(function(t){return n[t]?parseFloat(n[t]):0}))[0]+i[1],r=i[2]+i[3],{container:{width:t.clientWidth,height:t.clientHeight},content:{width:e.offsetWidth-e.clientWidth+e.scrollWidth+r,height:e.offsetHeight-e.clientHeight+e.scrollHeight+o}}},t.prototype.update=function(){var t,e,n,i;e={x:Math.max((t=this.getSize()).content.width-t.container.width,0),y:Math.max(t.content.height-t.container.height,0)},i={top:Math.max((n=this.containerEl.getBoundingClientRect()).top,0),right:Math.min(n.right,window.innerWidth),bottom:Math.min(n.bottom,window.innerHeight),left:Math.max(n.left,0)},this.size=t,this.limit=e,this.bounding=i,this.track.update(),this.setPosition(),this._plugins.forEach(function(t){t.onUpdate()})},t.prototype.isVisible=function(t){var e,n,i,o,r;return e=this.bounding,n=t.getBoundingClientRect(),i=Math.max(e.top,n.top),o=Math.max(e.left,n.left),r=Math.min(e.right,n.right),i<Math.min(e.bottom,n.bottom)&&o<r},t.prototype.setPosition=function(t,e,n){var i,o,r,s,a,c,u,l=this;void 0===t&&(t=this.offset.x),void 0===e&&(e=this.offset.y),void 0===n&&(n={});var f=(i=t,o=e,r=this.options,s=this.offset,a=this.limit,c=this.track,u=this.contentEl,(r.renderByPixels&&(i=Math.round(i),o=Math.round(o)),i=E(i,0,a.x),o=E(o,0,a.y),i!==s.x&&c.xAxis.show(),o!==s.y&&c.yAxis.show(),r.alwaysShowTracks||c.autoHideOnIdle(),i===s.x&&o===s.y)?null:(s.x=i,s.y=o,w(u,{"-transform":"translate3d("+-i+"px, "+-o+"px, 0)"}),c.update(),{offset:h({},s),limit:h({},a)}));f&&!n.withoutCallbacks&&this._listeners.forEach(function(t){t.call(l,f)})},t.prototype.scrollTo=function(t,e,n,i){var o,r,s,a,c,u,l,h,f,d,p,m,y,v,g,b,w;void 0===t&&(t=this.offset.x),void 0===e&&(e=this.offset.y),void 0===n&&(n=0),void 0===i&&(i={}),o=this,r=t,s=e,void 0===(a=n)&&(a=0),h=void 0===(l=(u=void 0===(c=i)?{}:c).easing)?L:l,f=u.callback,d=o.options,p=o.offset,m=o.limit,d.renderByPixels&&(r=Math.round(r),s=Math.round(s)),y=p.x,v=p.y,g=E(r,0,m.x)-y,b=E(s,0,m.y)-v,w=Date.now(),cancelAnimationFrame(z.get(o)),function t(){var e=Date.now()-w,n=a?h(Math.min(e/a,1)):1;if(o.setPosition(y+g*n,v+b*n),e>=a)"function"==typeof f&&f.call(o);else{var i=requestAnimationFrame(t);z.set(o,i)}}()},t.prototype.scrollIntoView=function(t,e){void 0===e&&(e={}),function(t,e,n){var i=void 0===n?{}:n,o=i.alignToTop,r=i.onlyScrollIfNeeded,s=i.offsetTop,a=i.offsetLeft,c=i.offsetBottom,u=t.containerEl,l=t.bounding,h=t.offset,f=t.limit;if(e&&u.contains(e)){var d=e.getBoundingClientRect();if(!(void 0!==r&&r&&t.isVisible(e))){var p=void 0===o||o?d.top-l.top-(void 0===s?0:s):d.bottom-l.bottom+(void 0===c?0:c);t.setMomentum(d.left-l.left-(void 0===a?0:a),E(p,-h.y,f.y-h.y))}}}(this,t,e)},t.prototype.addListener=function(t){if("function"!=typeof t)throw TypeError("[smooth-scrollbar] scrolling listener should be a function");this._listeners.add(t)},t.prototype.removeListener=function(t){this._listeners.delete(t)},t.prototype.addTransformableMomentum=function(t,e,n,i){this._updateDebounced();var o=this._plugins.reduce(function(t,e){return e.transformDelta(t,n)||t},{x:t,y:e}),r=!this._shouldPropagateMomentum(o.x,o.y);r&&this.addMomentum(o.x,o.y),i&&i.call(this,r)},t.prototype.addMomentum=function(t,e){this.setMomentum(this._momentum.x+t,this._momentum.y+e)},t.prototype.setMomentum=function(t,e){0===this.limit.x&&(t=0),0===this.limit.y&&(e=0),this.options.renderByPixels&&(t=Math.round(t),e=Math.round(e)),this._momentum.x=t,this._momentum.y=e},t.prototype.updatePluginOptions=function(t,e){this._plugins.forEach(function(n){n.name===t&&Object.assign(n.options,e)})},t.prototype.destroy=function(){var t,e=this.containerEl,n=this.contentEl;(t=d.get(this))&&(t.forEach(function(t){var e=t.elem,n=t.eventName,i=t.handler;e.removeEventListener(n,i,p())}),d.delete(this)),this._listeners.clear(),this.setMomentum(0,0),cancelAnimationFrame(this._renderID),this._observer&&this._observer.disconnect(),Z.delete(this.containerEl);for(var i=Array.from(n.childNodes);e.firstChild;)e.removeChild(e.firstChild);i.forEach(function(t){e.appendChild(t)}),w(e,{overflow:""}),e.scrollTop=this.scrollTop,e.scrollLeft=this.scrollLeft,this._plugins.forEach(function(t){t.onDestroy()}),this._plugins.length=0},t.prototype._init=function(){var t=this;this.update(),Object.keys(R).forEach(function(e){R[e](t)}),this._plugins.forEach(function(t){t.onInit()}),this._render()},t.prototype._updateDebounced=function(){this.update()},t.prototype._shouldPropagateMomentum=function(t,e){void 0===t&&(t=0),void 0===e&&(e=0);var n=this.options,i=this.offset,o=this.limit;if(!n.continuousScrolling)return!1;0===o.x&&0===o.y&&this._updateDebounced();var r=E(t+i.x,0,o.x),s=E(e+i.y,0,o.y);return r===i.x&&s===i.y&&(i.x===o.x||0===i.x||i.y===o.y||0===i.y)},t.prototype._render=function(){var t=this._momentum;if(t.x||t.y){var e=this._nextTick("x"),n=this._nextTick("y");t.x=e.momentum,t.y=n.momentum,this.setPosition(e.position,n.position)}var i=h({},this._momentum);this._plugins.forEach(function(t){t.onRender(i)}),this._renderID=requestAnimationFrame(this._render.bind(this))},t.prototype._nextTick=function(t){var e=this.options,n=this.offset,i=this._momentum,o=n[t],r=i[t];if(.1>=Math.abs(r))return{momentum:0,position:o+r};var s=r*(1-e.damping);return e.renderByPixels&&(s|=0),{momentum:s,position:o+r-s}},f([S(100,!0)],t.prototype,"_updateDebounced",null),t}(),tt="smooth-scrollbar-style",te=!1;function tn(){if(!te&&"undefined"!=typeof window){var t=document.createElement("style");t.id=tt,t.textContent="\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n",document.head&&document.head.appendChild(t),te=!0}}(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return!function(t,e){function n(){this.constructor=t}l(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.init=function(t,e){if(!t||1!==t.nodeType)throw TypeError("expect element to be DOM Element, but got "+t);return(tn(),Z.has(t))?Z.get(t):new $(t,e)},e.initAll=function(t){return Array.from(document.querySelectorAll("[data-scrollbar]"),function(n){return e.init(n,t)})},e.has=function(t){return Z.has(t)},e.get=function(t){return Z.get(t)},e.getAll=function(){return Array.from(Z.values())},e.destroy=function(t){var e=Z.get(t);e&&e.destroy()},e.destroyAll=function(){Z.forEach(function(t){t.destroy()})},e.use=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return C.apply(void 0,t)},e.attachStyle=function(){return tn()},e.detachStyle=function(){return function(){if(te&&"undefined"!=typeof window){var t=document.getElementById(tt);t&&t.parentNode&&(t.parentNode.removeChild(t),te=!1)}}()},e.version="8.8.4",e.ScrollbarPlugin=N,e})($).init(document.querySelector("#my-scrollbar"),{alwaysShowTracks:!0});
//# sourceMappingURL=cart.c9570a08.js.map
