!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).bootstrap=t()}(this,(function(){"use strict";const e=new Map,t={set(t,n,i){e.has(t)||e.set(t,new Map);const s=e.get(t);s.has(n)||0===s.size?s.set(n,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return;const i=e.get(t);i.delete(n),0===i.size&&e.delete(t)}},n="transitionend",i=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,((e,t)=>`#${CSS.escape(t)}`))),e),s=e=>{e.dispatchEvent(new Event(n))},r=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),o=e=>r(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(i(e)):null,l=e=>{if(!r(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},a=e=>{e.offsetHeight},c=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,u=[],h=()=>"rtl"===document.documentElement.dir,d=e=>{var t;t=()=>{const t=c();if(t){const n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}},"loading"===document.readyState?(u.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of u)e()})),u.push(t)):t()},f=(e,t=[],n=e)=>"function"==typeof e?e(...t):n,g=(e,t,i=!0)=>{if(!i)return void f(e);const r=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),s=Number.parseFloat(n);return i||s?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5;let o=!1;const l=({target:i})=>{i===t&&(o=!0,t.removeEventListener(n,l),f(e))};t.addEventListener(n,l),setTimeout((()=>{o||s(t)}),r)},_=/[^.]*(?=\..*)\.|.*/,m=/\..*/,p=/::\d+$/,b={};let v=1;const y={mouseenter:"mouseover",mouseleave:"mouseout"},E=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function C(e,t){return t&&`${t}::${v++}`||e.uidEvent||v++}function A(e){const t=C(e);return e.uidEvent=t,b[t]=b[t]||{},b[t]}function w(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function T(e,t,n){const i="string"==typeof t,s=i?n:t||n;let r=I(e);return E.has(r)||(r=e),[i,s,r]}function S(e,t,n,i,s){if("string"!=typeof t||!e)return;let[r,o,l]=T(t,n,i);if(t in y){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o=e(o)}const a=A(e),c=a[l]||(a[l]={}),u=w(c,o,r?n:null);if(u)return void(u.oneOff=u.oneOff&&s);const h=C(o,t.replace(_,"")),d=r?function(e,t,n){return function i(s){const r=e.querySelectorAll(t);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(const l of r)if(l===o)return D(s,{delegateTarget:o}),i.oneOff&&L.off(e,s.type,t,n),n.apply(o,[s])}}(e,n,o):function(e,t){return function n(i){return D(i,{delegateTarget:e}),n.oneOff&&L.off(e,i.type,t),t.apply(e,[i])}}(e,o);d.delegationSelector=r?n:null,d.callable=o,d.oneOff=s,d.uidEvent=h,c[h]=d,e.addEventListener(l,d,r)}function $(e,t,n,i,s){const r=w(t[n],i,s);r&&(e.removeEventListener(n,r,Boolean(s)),delete t[n][r.uidEvent])}function O(e,t,n,i){const s=t[n]||{};for(const[r,o]of Object.entries(s))r.includes(i)&&$(e,t,n,o.callable,o.delegationSelector)}function I(e){return e=e.replace(m,""),y[e]||e}const L={on(e,t,n,i){S(e,t,n,i,!1)},one(e,t,n,i){S(e,t,n,i,!0)},off(e,t,n,i){if("string"!=typeof t||!e)return;const[s,r,o]=T(t,n,i),l=o!==t,a=A(e),c=a[o]||{},u=t.startsWith(".");if(void 0===r){if(u)for(const n of Object.keys(a))O(e,a,n,t.slice(1));for(const[n,i]of Object.entries(c)){const s=n.replace(p,"");l&&!t.includes(s)||$(e,a,o,i.callable,i.delegationSelector)}}else{if(!Object.keys(c).length)return;$(e,a,o,r,s?n:null)}},trigger(e,t,n){if("string"!=typeof t||!e)return null;const i=c();let s=null,r=!0,o=!0,l=!1;t!==I(t)&&i&&(s=i.Event(t,n),i(e).trigger(s),r=!s.isPropagationStopped(),o=!s.isImmediatePropagationStopped(),l=s.isDefaultPrevented());const a=D(new Event(t,{bubbles:r,cancelable:!0}),n);return l&&a.preventDefault(),o&&e.dispatchEvent(a),a.defaultPrevented&&s&&s.preventDefault(),a}};function D(e,t={}){for(const[n,i]of Object.entries(t))try{e[n]=i}catch{Object.defineProperty(e,n,{configurable:!0,get:()=>i})}return e}function k(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function x(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}const N={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${x(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${x(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const i of n){let n=i.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),t[n]=k(e.dataset[i])}return t},getDataAttribute:(e,t)=>k(e.getAttribute(`data-bs-${x(t)}`))};class j{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=r(t)?N.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"==typeof n?n:{},...r(t)?N.getDataAttributes(t):{},..."object"==typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[i,s]of Object.entries(t)){const t=e[i],o=r(t)?"element":null==(n=t)?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${s}".`)}var n}}class M extends j{constructor(e,n){super(),(e=o(e))&&(this._element=e,this._config=this._getConfig(n),t.set(this._element,this.constructor.DATA_KEY,this))}dispose(){t.remove(this._element,this.constructor.DATA_KEY),L.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){g(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return t.get(o(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.3.1"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const P=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return i(t)},F={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[];let i=e.parentNode.closest(t);for(;i;)n.push(i),i=i.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");return this.find(t,e).filter((e=>!(e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")))(e)&&l(e)))},getSelectorFromElement(e){const t=P(e);return t&&F.findOne(t)?t:null},getElementFromSelector(e){const t=P(e);return t?F.findOne(t):null},getMultipleElementsFromSelector(e){const t=P(e);return t?F.find(t):[]}},X=".bs.swipe",q=`touchstart${X}`,Y=`touchmove${X}`,K=`touchend${X}`,W=`pointerdown${X}`,z=`pointerup${X}`,B={endCallback:null,leftCallback:null,rightCallback:null},V={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Q extends j{constructor(e,t){super(),this._element=e,e&&Q.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return B}static get DefaultType(){return V}static get NAME(){return"swipe"}dispose(){L.off(this._element,X)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),f(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=40)return;const t=e/this._deltaX;this._deltaX=0,t&&f(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(L.on(this._element,W,(e=>this._start(e))),L.on(this._element,z,(e=>this._end(e))),this._element.classList.add("pointer-event")):(L.on(this._element,q,(e=>this._start(e))),L.on(this._element,Y,(e=>this._move(e))),L.on(this._element,K,(e=>this._end(e))))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&("pen"===e.pointerType||"touch"===e.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const R=".bs.carousel",H=".data-api",U="next",J="prev",Z="left",G="right",ee=`slide${R}`,te=`slid${R}`,ne=`keydown${R}`,ie=`mouseenter${R}`,se=`mouseleave${R}`,re=`dragstart${R}`,oe=`load${R}${H}`,le=`click${R}${H}`,ae="carousel",ce="active",ue=".active",he=".carousel-item",de=ue+he,fe={ArrowLeft:G,ArrowRight:Z},ge={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},_e={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class me extends M{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=F.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===ae&&this.cycle()}static get Default(){return ge}static get DefaultType(){return _e}static get NAME(){return"carousel"}next(){this._slide(U)}nextWhenVisible(){!document.hidden&&l(this._element)&&this.next()}prev(){this._slide(J)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?L.one(this._element,te,(()=>this.cycle())):this.cycle())}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void L.one(this._element,te,(()=>this.to(e)));const n=this._getItemIndex(this._getActive());if(n===e)return;const i=e>n?U:J;this._slide(i,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&L.on(this._element,ne,(e=>this._keydown(e))),"hover"===this._config.pause&&(L.on(this._element,ie,(()=>this.pause())),L.on(this._element,se,(()=>this._maybeEnableCycle()))),this._config.touch&&Q.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const e of F.find(".carousel-item img",this._element))L.on(e,re,(e=>e.preventDefault()));const e={leftCallback:()=>this._slide(this._directionToOrder(Z)),rightCallback:()=>this._slide(this._directionToOrder(G)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new Q(this._element,e)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=fe[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=F.findOne(ue,this._indicatorsElement);t.classList.remove(ce),t.removeAttribute("aria-current");const n=F.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(ce),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const n=this._getActive(),i=e===U,s=t||((e,t,n,i)=>{const s=e.length;let r=e.indexOf(t);return-1===r?!n&&i?e[s-1]:e[0]:(r+=n?1:-1,i&&(r=(r+s)%s),e[Math.max(0,Math.min(r,s-1))])})(this._getItems(),n,i,this._config.wrap);if(s===n)return;const r=this._getItemIndex(s),o=t=>L.trigger(this._element,t,{relatedTarget:s,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:r});if(o(ee).defaultPrevented)return;if(!n||!s)return;const l=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(r),this._activeElement=s;const c=i?"carousel-item-start":"carousel-item-end",u=i?"carousel-item-next":"carousel-item-prev";s.classList.add(u),a(s),n.classList.add(c),s.classList.add(c);this._queueCallback((()=>{s.classList.remove(c,u),s.classList.add(ce),n.classList.remove(ce,u,c),this._isSliding=!1,o(te)}),n,this._isAnimated()),l&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return F.findOne(de,this._element)}_getItems(){return F.find(he,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return h()?e===Z?J:U:e===Z?U:J}_orderToDirection(e){return h()?e===J?Z:G:e===J?G:Z}static jQueryInterface(e){return this.each((function(){const t=me.getOrCreateInstance(this,e);if("number"!=typeof e){if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)}))}}L.on(document,le,"[data-bs-slide], [data-bs-slide-to]",(function(e){const t=F.getElementFromSelector(this);if(!t||!t.classList.contains(ae))return;e.preventDefault();const n=me.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");return i?(n.to(i),void n._maybeEnableCycle()):"next"===N.getDataAttribute(this,"slide")?(n.next(),void n._maybeEnableCycle()):(n.prev(),void n._maybeEnableCycle())})),L.on(window,oe,(()=>{const e=F.find('[data-bs-ride="carousel"]');for(const t of e)me.getOrCreateInstance(t)})),d(me);const pe=".bs.collapse",be=`show${pe}`,ve=`shown${pe}`,ye=`hide${pe}`,Ee=`hidden${pe}`,Ce=`click${pe}.data-api`,Ae="show",we="collapse",Te="collapsing",Se=`:scope .${we} .${we}`,$e='[data-bs-toggle="collapse"]',Oe={parent:null,toggle:!0},Ie={parent:"(null|element)",toggle:"boolean"};class Le extends M{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=F.find($e);for(const e of n){const t=F.getSelectorFromElement(e),n=F.find(t).filter((e=>e===this._element));null!==t&&n.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Oe}static get DefaultType(){return Ie}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e=>e!==this._element)).map((e=>Le.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning)return;if(L.trigger(this._element,be).defaultPrevented)return;for(const t of e)t.hide();const t=this._getDimension();this._element.classList.remove(we),this._element.classList.add(Te),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const n=`scroll${t[0].toUpperCase()+t.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Te),this._element.classList.add(we,Ae),this._element.style[t]="",L.trigger(this._element,ve)}),this._element,!0),this._element.style[t]=`${this._element[n]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(L.trigger(this._element,ye).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,a(this._element),this._element.classList.add(Te),this._element.classList.remove(we,Ae);for(const e of this._triggerArray){const t=F.getElementFromSelector(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;this._element.style[e]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Te),this._element.classList.add(we),L.trigger(this._element,Ee)}),this._element,!0)}_isShown(e=this._element){return e.classList.contains(Ae)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=o(e.parent),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren($e);for(const t of e){const e=F.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=F.find(Se,this._config.parent);return F.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle("collapsed",!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const n=Le.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}L.on(document,Ce,$e,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();for(const e of F.getMultipleElementsFromSelector(this))Le.getOrCreateInstance(e,{toggle:!1}).toggle()})),d(Le);return{Carousel:me,Collapse:Le}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map