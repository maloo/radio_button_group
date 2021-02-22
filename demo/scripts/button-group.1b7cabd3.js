(()=>{var t={690:()=>{},480:(t,e,i)=>{"use strict";i.d(e,{Xe:()=>r,jS:()=>s,Cq:()=>n});var o=i(317);class r{constructor(){this.targetIndex=0}}class s extends r{constructor(){super(...arguments),this.createPlaceholder=o.SO.createInterpolationPlaceholder}}class n extends r{constructor(t,e,i){super(),this.name=t,this.behavior=e,this.options=i}createPlaceholder(t){return o.SO.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}},754:(t,e,i)=>{"use strict";i.d(e,{R:()=>s,x:()=>n});var o=i(221),r=i(944);function s(t){return t?function(e,i,o){return 1===e.nodeType&&e.matches(t)}:function(t,e,i){return 1===t.nodeType}}class n{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=o.y$.getAccessors(t).some((t=>t.name===e)),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(r.o),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return void 0!==this.options.filter&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}},528:(t,e,i)=>{"use strict";i.d(e,{i:()=>s});var o=i(480);class r{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function s(t){return new o.Cq("fast-ref",r,t)}},786:(t,e,i)=>{"use strict";i.d(e,{Q:()=>n});var o=i(480),r=i(754);class s extends r.x{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function n(t){return"string"==typeof t&&(t={property:t}),new o.Cq("fast-slotted",s,t)}},880:(t,e,i)=>{"use strict";function o(t,e){const i="function"==typeof e?e:()=>e;return(e,o)=>t(e,o)?i(e,o):null}i.d(e,{g:()=>o})},317:(t,e,i)=>{"use strict";i.d(e,{SO:()=>d,Yl:()=>h,pc:()=>c});const o=function(){if("undefined"!=typeof globalThis)return globalThis;if(void 0!==i.g)return i.g;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(t){return{}}}();void 0===o.trustedTypes&&(o.trustedTypes={createPolicy:(t,e)=>e});const r=[],s=o.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let n=s;function a(){let t=0;for(;t<r.length;)if(r[t].call(),t++,t>1024){for(let e=0,i=r.length-t;e<i;e++)r[e]=r[e+t];r.length-=t,t=0}r.length=0}const l=`fast-${Math.random().toString(36).substring(2,8)}`,c=`${l}{`,h=`}${l}`,d=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(n!==s)throw new Error("The HTML policy can only be set once.");n=t},createHTML:t=>n.createHTML(t),isMarker:t=>t&&8===t.nodeType&&t.data.startsWith(l),extractDirectiveIndexFromMarker:t=>parseInt(t.data.replace(`${l}:`,"")),createInterpolationPlaceholder:t=>`${c}${t}${h}`,createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder:t=>`\x3c!--${l}:${t}--\x3e`,queueUpdate(t){r.length<1&&window.requestAnimationFrame(a),r.push(t)},nextUpdate:()=>new Promise((t=>{d.queueUpdate(t)})),setAttribute(t,e,i){null==i?t.removeAttribute(e):t.setAttribute(e,i)},setBooleanAttribute(t,e,i){i?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;null!==e;e=t.firstChild)t.removeChild(e)},createTemplateWalker:t=>document.createTreeWalker(t,133,null,!1)})},432:(t,e,i)=>{"use strict";i.d(e,{ref:()=>r.i,when:()=>s.g,slotted:()=>n.Q});var o=i(690);i.o(o,"ref")&&i.d(e,{ref:function(){return o.ref}}),i.o(o,"slotted")&&i.d(e,{slotted:function(){return o.slotted}}),i.o(o,"when")&&i.d(e,{when:function(){return o.when}});var r=i(528),s=i(880),n=i(786)},944:(t,e,i)=>{"use strict";i.d(e,{o:()=>o});const o=Object.freeze([])},111:(t,e,i)=>{"use strict";function o(t){const e=this.spillover;-1===e.indexOf(t)&&e.push(t)}function r(t){const e=this.spillover,i=e.indexOf(t);-1!==i&&e.splice(i,1)}function s(t){const e=this.spillover,i=this.source;for(let o=0,r=e.length;o<r;++o)e[o].handleChange(i,t)}function n(t){return-1!==this.spillover.indexOf(t)}i.d(e,{q:()=>a,A:()=>l});class a{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return this.sub1===t||this.sub2===t}subscribe(t){this.has(t)||(void 0!==this.sub1?void 0!==this.sub2?(this.spillover=[this.sub1,this.sub2,t],this.subscribe=o,this.unsubscribe=r,this.notify=s,this.has=n,this.sub1=void 0,this.sub2=void 0):this.sub2=t:this.sub1=t)}unsubscribe(t){this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0)}notify(t){const e=this.sub1,i=this.sub2,o=this.source;void 0!==e&&e.handleChange(o,t),void 0!==i&&i.handleChange(o,t)}}class l{constructor(t){this.subscribers={},this.source=t}notify(t){const e=this.subscribers[t];void 0!==e&&e.notify(t)}subscribe(t,e){let i=this.subscribers[e];void 0===i&&(this.subscribers[e]=i=new a(this.source)),i.subscribe(t)}unsubscribe(t,e){const i=this.subscribers[e];void 0!==i&&i.unsubscribe(t)}}},221:(t,e,i)=>{"use strict";i.d(e,{y$:()=>d,LO:()=>f,z8:()=>g,Wp:()=>m});var o=i(317),r=i(111);const s=/(\:|\&\&|\|\||if)/,n=new WeakMap,a=new WeakMap;let l,c=t=>{throw new Error("Must call enableArrayObservation before observing arrays.")};class h{constructor(t){this.name=t,this.field=`_${t}`,this.callback=`${t}Changed`}getValue(t){return void 0!==l&&l.watch(t,this.name),t[this.field]}setValue(t,e){const i=this.field,o=t[i];if(o!==e){t[i]=e;const r=t[this.callback];"function"==typeof r&&r.call(t,o,e),u(t).notify(this.name)}}}const d=Object.freeze({setArrayObserverFactory(t){c=t},getNotifier(t){let e=t.$fastController||n.get(t);return void 0===e&&(Array.isArray(t)?e=c(t):n.set(t,e=new r.A(t))),e},track(t,e){void 0!==l&&l.watch(t,e)},trackVolatile(){void 0!==l&&(l.needsRefresh=!0)},notify(t,e){u(t).notify(e)},defineProperty(t,e){"string"==typeof e&&(e=new h(e)),this.getAccessors(t).push(e),Reflect.defineProperty(t,e.name,{enumerable:!0,get:function(){return e.getValue(this)},set:function(t){e.setValue(this,t)}})},getAccessors(t){let e=a.get(t);if(void 0===e){let i=Reflect.getPrototypeOf(t);for(;void 0===e&&null!==i;)e=a.get(i),i=Reflect.getPrototypeOf(i);e=void 0===e?[]:e.slice(0),a.set(t,e)}return e},binding(t,e,i=this.isVolatileBinding(t)){return new y(t,e,i)},isVolatileBinding:t=>s.test(t.toString())}),u=d.getNotifier,p=(d.trackVolatile,o.SO.queueUpdate);function f(t,e){d.defineProperty(t,e)}let v=null;function g(t){v=t}class b{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return v}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}}d.defineProperty(b.prototype,"index"),d.defineProperty(b.prototype,"length");const m=Object.seal(new b);class y extends r.q{constructor(t,e,i=!1){super(t,e),this.binding=t,this.isVolatileBinding=i,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(t,e){this.needsRefresh&&null!==this.last&&this.disconnect();const i=l;l=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const o=this.binding(t,e);return l=i,o}disconnect(){if(null!==this.last){let t=this.first;for(;void 0!==t;)t.notifier.unsubscribe(this,t.propertyName),t=t.next;this.last=null,this.needsRefresh=!0}}watch(t,e){const i=this.last,o=u(t),r=null===i?this.first:{};if(r.propertySource=t,r.propertyName=e,r.notifier=o,o.subscribe(this,e),null!==i){if(!this.needsRefresh){l=void 0;const e=i.propertySource[i.propertyName];l=this,t===e&&(this.needsRefresh=!0)}i.next=r}this.last=r}handleChange(){this.needsQueue&&(this.needsQueue=!1,p(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}}}},e={};function i(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,i,o){var r,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n}var e=i(317);const o=new Map;class r{constructor(){this.targets=new WeakSet,this.behaviors=null}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=null===this.behaviors?t:this.behaviors.concat(t),this}withKey(t){return o.set(t,this),this}static find(t){return o.get(t)||null}}function s(t){return t.map((t=>t instanceof r?s(t.styles):[t])).reduce(((t,e)=>t.concat(e)),[])}function n(t){return t.map((t=>t instanceof r?t.behaviors:null)).reduce(((t,e)=>null===e?t:(null===t&&(t=[]),t.concat(e))),null)}r.create=(()=>{if(e.SO.supportsAdoptedStyleSheets){const t=new Map;return e=>new a(e,t)}return t=>new c(t)})();class a extends r{constructor(t,e){super(),this.styles=t,this.behaviors=null,this.behaviors=n(t),this.styleSheets=s(t).map((t=>{if(t instanceof CSSStyleSheet)return t;let i=e.get(t);return void 0===i&&(i=new CSSStyleSheet,i.replaceSync(t),e.set(t,i)),i}))}addStylesTo(t){t.adoptedStyleSheets=[...t.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(t)}removeStylesFrom(t){const e=this.styleSheets;t.adoptedStyleSheets=t.adoptedStyleSheets.filter((t=>-1===e.indexOf(t))),super.removeStylesFrom(t)}}let l=0;class c extends r{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=n(t),this.styleSheets=s(t),this.styleClass="fast-style-class-"+ ++l}addStylesTo(t){const e=this.styleSheets,i=this.styleClass;t=this.normalizeTarget(t);for(let o=e.length-1;o>-1;--o){const r=document.createElement("style");r.innerHTML=e[o],r.className=i,t.prepend(r)}super.addStylesTo(t)}removeStylesFrom(t){const e=(t=this.normalizeTarget(t)).querySelectorAll(`.${this.styleClass}`);for(let i=0,o=e.length;i<o;++i)t.removeChild(e[i]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}function h(t,...e){const i=[];let o="";for(let s=0,n=t.length-1;s<n;++s){o+=t[s];const n=e[s];n instanceof r||n instanceof CSSStyleSheet?(""!==o.trim()&&(i.push(o),o=""),i.push(n)):o+=n}return o+=t[t.length-1],""!==o.trim()&&i.push(o),r.create(i)}var d=i(221);const u={toView:t=>t?"true":"false",fromView:t=>null!=t&&"false"!==t&&!1!==t&&0!==t},p={toView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e.toString()},fromView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e}};class f{constructor(t,e,i=e.toLowerCase(),o="reflect",r){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=i,this.mode=o,this.converter=r,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,"boolean"===o&&void 0===r&&(this.converter=u)}setValue(t,e){const i=t[this.fieldName],o=this.converter;void 0!==o&&(e=o.fromView(e)),i!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](i,e),t.$fastController.notify(this.name))}getValue(t){return d.y$.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const i=this.mode,o=this.guards;o.has(t)||"fromView"===i||e.SO.queueUpdate((()=>{o.add(t);const r=t[this.fieldName];switch(i){case"reflect":const i=this.converter;e.SO.setAttribute(t,this.attribute,void 0!==i?i.toView(r):r);break;case"boolean":e.SO.setBooleanAttribute(t,this.attribute,r)}o.delete(t)}))}static collect(t,...e){const i=[];e.push(t.attributes);for(let o=0,r=e.length;o<r;++o){const r=e[o];if(void 0!==r)for(let e=0,o=r.length;e<o;++e){const o=r[e];"string"==typeof o?i.push(new f(t,o)):i.push(new f(t,o.property,o.attribute,o.mode,o.converter))}}return i}}function v(t,e){let i;function o(t,e){arguments.length>1&&(i.property=e);const o=t.constructor.attributes||(t.constructor.attributes=[]);o.push(i)}return arguments.length>1?(i={},void o(t,e)):(i=void 0===t?{}:t,o)}const g={mode:"open"},b={},m=new Map;class y{constructor(t,e=t.definition){"string"==typeof e&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const i=f.collect(t,e.attributes),o=new Array(i.length),s={},n={};for(let t=0,e=i.length;t<e;++t){const e=i[t];o[t]=e.attribute,s[e.name]=e,n[e.attribute]=e}this.attributes=i,this.observedAttributes=o,this.propertyLookup=s,this.attributeLookup=n,this.shadowOptions=void 0===e.shadowOptions?g:null===e.shadowOptions?void 0:Object.assign(Object.assign({},g),e.shadowOptions),this.elementOptions=void 0===e.elementOptions?b:Object.assign(Object.assign({},b),e.elementOptions),this.styles=void 0===e.styles?void 0:Array.isArray(e.styles)?r.create(e.styles):e.styles instanceof r?e.styles:r.create([e.styles])}define(t=customElements){const e=this.type;if(!this.isDefined){const t=this.attributes,i=e.prototype;for(let e=0,o=t.length;e<o;++e)d.y$.defineProperty(i,t[e]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0}),m.set(e,this),this.isDefined=!0}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}static forType(t){return m.get(t)}}var x=i(111);const C=new WeakMap,w={bubbles:!0,composed:!0};function $(t){return t.shadowRoot||C.get(t)||null}class k extends x.A{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this.view=null,this.isConnected=!1,this.element=t,this.definition=e;const i=e.shadowOptions;if(void 0!==i){const e=t.attachShadow(i);"closed"===i.mode&&C.set(t,e)}const o=d.y$.getAccessors(t);if(o.length>0){const e=this.boundObservables=Object.create(null);for(let i=0,r=o.length;i<r;++i){const r=o[i].name,s=t[r];void 0!==s&&(delete t[r],e[r]=s)}}}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=t,this.needsInitialization||null===t||this.addStyles(t))}addStyles(t){const e=$(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.prepend(t);else if(!t.isAttachedTo(e)){const i=t.behaviors;t.addStylesTo(e),null!==i&&this.addBehaviors(i)}}removeStyles(t){const e=$(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const i=t.behaviors;t.removeStylesFrom(e),null!==i&&this.removeBehaviors(i)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),i=t.length,o=[];for(let r=0;r<i;++r){const i=t[r];e.has(i)?e.set(i,e.get(i)+1):(e.set(i,1),o.push(i))}if(this.isConnected){const t=this.element;for(let e=0;e<o.length;++e)o[e].bind(t,d.Wp)}}removeBehaviors(t,e=!1){const i=this.behaviors;if(null===i)return;const o=t.length,r=[];for(let s=0;s<o;++s){const o=t[s];if(i.has(o)){const t=i.get(o)-1;0===t||e?i.delete(o)&&r.push(o):i.set(o,t)}}if(this.isConnected){const t=this.element;for(let e=0;e<r.length;++e)r[e].unbind(t)}}onConnectedCallback(){if(this.isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(t,d.Wp);const e=this.behaviors;if(null!==e)for(let[i]of e)i.bind(t,d.Wp);this.isConnected=!0}onDisconnectedCallback(){if(!1===this.isConnected)return;this.isConnected=!1;const t=this.view;null!==t&&t.unbind();const e=this.behaviors;if(null!==e){const t=this.element;for(let[i]of e)i.unbind(t)}}onAttributeChangedCallback(t,e,i){const o=this.definition.attributeLookup[t];void 0!==o&&o.onAttributeChangedCallback(this.element,i)}emit(t,e,i){return!!this.isConnected&&this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},w),i)))}finishInitialization(){const t=this.element,e=this.boundObservables;if(null!==e){const i=Object.keys(e);for(let o=0,r=i.length;o<r;++o){const r=i[o];t[r]=e[r]}this.boundObservables=null}const i=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const i=this.element,o=$(i)||i;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||e.SO.removeChildNodes(o),t&&(this.view=t.render(i,o,i))}static forCustomElement(t){const e=t.$fastController;if(void 0!==e)return e;const i=y.forType(t.constructor);if(void 0===i)throw new Error("Missing FASTElement definition.");return t.$fastController=new k(t,i)}}function F(t){return class extends t{constructor(){super(),k.forCustomElement(this)}$emit(t,e,i){return this.$fastController.emit(t,e,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,i){this.$fastController.onAttributeChangedCallback(t,e,i)}}}!function(t,e,i,o){var r,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);s>3&&n&&Object.defineProperty(e,i,n)}([d.LO],k.prototype,"isConnected",void 0);const P=Object.assign(F(HTMLElement),{from:t=>F(t),define:(t,e)=>new y(t,e).define().type});function D(t){return function(e){new y(e,t).define()}}var S;!function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"}(S||(S={}));var T=i(944);const O="form-associated-proxy",R="ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype,L=new Map;function A(t){const i=class extends t{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.formDisabledCallback=t=>{this.disabled=t},this.formResetCallback=()=>{this.value=this.initialValue,this.dirtyValue=!1},this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||""}static get formAssociated(){return R}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,e=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=t?e.concat(Array.from(t)):e;return Object.freeze(i)}return T.o}valueChanged(t,e){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.setFormValue(this.value),this.validate()}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,i){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),e.SO.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,i){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),e.SO.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!R)return null;let t=L.get(this);return t||(t=this.attachInternals(),L.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback)}disconnectedCallback(){this.proxyEventsToBlock.forEach((t=>this.proxy.removeEventListener(t,this.stopPropagation))),this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,e,i){this.elementInternals?this.elementInternals.setValidity(t,e,i):"string"==typeof e&&this.proxy.setCustomValidity(e)}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((t=>this.proxy.addEventListener(t,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",O),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",O)),null===(t=this.shadowRoot)||void 0===t||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),null===(t=this.shadowRoot)||void 0===t||t.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(t,e){this.elementInternals&&this.elementInternals.setFormValue(t,e||t)}_keypressHandler(t){switch(t.keyCode){case 13:if(this.form instanceof HTMLFormElement){const t=this.form.querySelector("[type=submit]");null==t||t.click()}}}stopPropagation(t){t.stopPropagation()}};return v({mode:"boolean"})(i.prototype,"disabled"),v({mode:"fromView",attribute:"value"})(i.prototype,"initialValue"),v(i.prototype,"name"),v({mode:"boolean"})(i.prototype,"required"),(0,d.LO)(i.prototype,"value"),i}class B extends(A(class extends P{constructor(){super(...arguments),this.proxy=document.createElement("input")}})){}class E extends B{constructor(){var t;super(...arguments),this.initialValue="on",this.checkedAttribute=!1,this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1,this.formResetCallback=()=>{this.checked=!!this.defaultChecked,this.dirtyChecked=!1},this.keypressHandler=t=>{switch(t.keyCode){case 32:this.checked||this.readOnly||(this.checked=!0)}},this.clickHandler=t=>{this.disabled||this.readOnly||this.checked||(this.checked=!0)}}readOnlyChanged(){this.proxy instanceof HTMLElement&&(this.proxy.readOnly=this.readOnly)}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}checkedChanged(){this.$fastController.isConnected&&(this.dirtyChecked||(this.dirtyChecked=!0),this.updateForm(),this.proxy instanceof HTMLElement&&(this.proxy.checked=this.checked),this.$emit("change"),this.validate())}connectedCallback(){var t,e;super.connectedCallback(),this.proxy.setAttribute("type","radio"),this.validate(),"radiogroup"!==(null===(t=this.parentElement)||void 0===t?void 0:t.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.updateForm(),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}updateForm(){const t=this.checked?this.value:null;this.setFormValue(t,t)}}function M(t,...e){e.forEach((e=>{if(Object.getOwnPropertyNames(e.prototype).forEach((i=>{Object.defineProperty(t.prototype,i,Object.getOwnPropertyDescriptor(e.prototype,i))})),e.attributes){const i=t.attributes||[];t.attributes=i.concat(e.attributes)}}))}t([v({attribute:"readonly",mode:"boolean"})],E.prototype,"readOnly",void 0),t([d.LO],E.prototype,"name",void 0),t([v({attribute:"checked",mode:"boolean"})],E.prototype,"checkedAttribute",void 0),t([d.LO],E.prototype,"defaultSlottedNodes",void 0),t([d.LO],E.prototype,"defaultChecked",void 0),t([d.LO],E.prototype,"checked",void 0);var H=i(432),N=i(480);function I(t,e){this.source=t,this.context=e,null===this.bindingObserver&&(this.bindingObserver=d.y$.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function z(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function V(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function j(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function _(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function q(t){e.SO.setAttribute(this.target,this.targetName,t)}function W(t){e.SO.setBooleanAttribute(this.target,this.targetName,t)}function G(t){if(null==t&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;void 0===e?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function U(t){this.target[this.targetName]=t}function X(t){const e=this.classVersions||Object.create(null),i=this.target;let o=this.version||0;if(null!=t&&t.length){const r=t.split(/\s+/);for(let t=0,s=r.length;t<s;++t){const s=r[t];""!==s&&(e[s]=o,i.classList.add(s))}}if(this.classVersions=e,this.version=o+1,0!==o){o-=1;for(const t in e)e[t]===o&&i.classList.remove(t)}}class Y extends N.jS{constructor(t){super(),this.binding=t,this.bind=I,this.unbind=V,this.updateTarget=q,this.isBindingVolatile=d.y$.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,void 0!==t)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=U,"innerHTML"===this.cleanedTargetName){const t=this.binding;this.binding=(i,o)=>e.SO.createHTML(t(i,o))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=W;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=z,this.unbind=_;break;default:this.cleanedTargetName=t,"class"===t&&(this.updateTarget=X)}}targetAtContent(){this.updateTarget=G,this.unbind=j}createBehavior(t){return new K(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class K{constructor(t,e,i,o,r,s,n){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=i,this.bind=o,this.unbind=r,this.updateTarget=s,this.targetName=n}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){(0,d.z8)(t);const e=this.binding(this.source,this.context);(0,d.z8)(null),!0!==e&&t.preventDefault()}}class Q{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Z=this}static borrow(t){const e=Z||new Q;return e.directives=t,e.reset(),Z=null,e}}let Z=null;function J(t){if(1===t.length)return t[0];let e;const i=t.length,o=t.map((t=>"string"==typeof t?()=>t:(e=t.targetName||e,t.binding))),r=new Y(((t,e)=>{let r="";for(let s=0;s<i;++s)r+=o[s](t,e);return r}));return r.targetName=e,r}const tt=e.Yl.length;function et(t,i){const o=i.split(e.pc);if(1===o.length)return null;const r=[];for(let i=0,s=o.length;i<s;++i){const s=o[i],n=s.indexOf(e.Yl);let a;if(-1===n)a=s;else{const e=parseInt(s.substring(0,n));r.push(t.directives[e]),a=s.substring(n+tt)}""!==a&&r.push(a)}return r}function it(t,e,i=!1){const o=e.attributes;for(let r=0,s=o.length;r<s;++r){const n=o[r],a=n.value,l=et(t,a);let c=null;null===l?i&&(c=new Y((()=>a)),c.targetName=n.name):c=J(l),null!==c&&(e.removeAttributeNode(n),r--,s--,t.addFactory(c))}}function ot(t,e,i){const o=et(t,e.textContent);if(null!==o){let r=e;for(let s=0,n=o.length;s<n;++s){const n=o[s],a=0===s?e:r.parentNode.insertBefore(document.createTextNode(""),r.nextSibling);"string"==typeof n?a.textContent=n:(a.textContent=" ",t.captureContentBinding(n)),r=a,t.targetIndex++,a!==e&&i.nextNode()}t.targetIndex--}}const rt=document.createRange();class st{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=t.parentNode,i=this.lastChild;let o,r=this.firstChild;for(;r!==i;)o=r.nextSibling,e.insertBefore(r,t),r=o;e.insertBefore(i,t)}}remove(){const t=this.fragment,e=this.lastChild;let i,o=this.firstChild;for(;o!==e;)i=o.nextSibling,t.appendChild(o),o=i;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let i,o=this.firstChild;for(;o!==e;)i=o.nextSibling,t.removeChild(o),o=i;t.removeChild(e);const r=this.behaviors,s=this.source;for(let t=0,e=r.length;t<e;++t)r[t].unbind(s)}bind(t,e){const i=this.behaviors;if(this.source!==t)if(null!==this.source){const o=this.source;this.source=t,this.context=e;for(let r=0,s=i.length;r<s;++r){const s=i[r];s.unbind(o),s.bind(t,e)}}else{this.source=t,this.context=e;for(let o=0,r=i.length;o<r;++o)i[o].bind(t,e)}}unbind(){if(null===this.source)return;const t=this.behaviors,e=this.source;for(let i=0,o=t.length;i<o;++i)t[i].unbind(e);this.source=null}static disposeContiguousBatch(t){if(0!==t.length){rt.setStartBefore(t[0].firstChild),rt.setEndAfter(t[t.length-1].lastChild),rt.deleteContents();for(let e=0,i=t.length;e<i;++e){const i=t[e],o=i.behaviors,r=i.source;for(let t=0,e=o.length;t<e;++t)o[t].unbind(r)}}}}class nt{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(null===this.fragment){let t;const i=this.html;if("string"==typeof i){t=document.createElement("template"),t.innerHTML=e.SO.createHTML(i);const o=t.content.firstElementChild;null!==o&&"TEMPLATE"===o.tagName&&(t=o)}else t=i;const o=function(t,i){const o=t.content;document.adoptNode(o);const r=Q.borrow(i);it(r,t,!0);const s=r.behaviorFactories;r.reset();const n=e.SO.createTemplateWalker(o);let a;for(;a=n.nextNode();)switch(r.targetIndex++,a.nodeType){case 1:it(r,a);break;case 3:ot(r,a,n);break;case 8:e.SO.isMarker(a)&&r.addFactory(i[e.SO.extractDirectiveIndexFromMarker(a)])}let l=0;e.SO.isMarker(o.firstChild)&&(o.insertBefore(document.createComment(""),o.firstChild),l=-1);const c=r.behaviorFactories;return r.release(),{fragment:o,viewBehaviorFactories:c,hostBehaviorFactories:s,targetOffset:l}}(t,this.directives);this.fragment=o.fragment,this.viewBehaviorFactories=o.viewBehaviorFactories,this.hostBehaviorFactories=o.hostBehaviorFactories,this.targetOffset=o.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const i=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,r=new Array(this.behaviorCount),s=e.SO.createTemplateWalker(i);let n=0,a=this.targetOffset,l=s.nextNode();for(let t=o.length;n<t;++n){const t=o[n],e=t.targetIndex;for(;null!==l;){if(a===e){r[n]=t.createBehavior(l);break}l=s.nextNode(),a++}}if(this.hasHostBehaviors){const e=this.hostBehaviorFactories;for(let i=0,o=e.length;i<o;++i,++n)r[n]=e[i].createBehavior(t)}return new st(i,r)}render(t,e,i){"string"==typeof e&&(e=document.getElementById(e)),void 0===i&&(i=e);const o=this.create(i);return o.bind(t,d.Wp),o.appendTo(e),o}}const at=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function lt(t,...e){const i=[];let o="";for(let r=0,s=t.length-1;r<s;++r){const s=t[r];let n=e[r];if(o+=s,n instanceof nt){const t=n;n=()=>t}if("function"==typeof n&&(n=new Y(n)),n instanceof N.jS){const t=at.exec(s);null!==t&&(n.targetName=t[2])}n instanceof N.Xe?(o+=n.createPlaceholder(i.length),i.push(n)):o+=n}return o+=t[t.length-1],new nt(o,i)}class ct{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const ht=lt`
    <span part="end" ${(0,H.ref)("endContainer")}>
        <slot
            name="end"
            ${(0,H.ref)("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`,dt=lt`
    <span part="start" ${(0,H.ref)("startContainer")}>
        <slot
            name="start"
            ${(0,H.ref)("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`,ut=lt`
    <template
        role="radio"
        class="${t=>t.checked?"checked":""} ${t=>t.readOnly?"readonly":""}"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @keypress="${(t,e)=>t.keypressHandler(e.event)}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
    >
        ${dt}
        <label part="label" class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}">
            <slot ${(0,H.slotted)("defaultSlottedNodes")}></slot> 
        </label>
        ${ht}
    </template>
`;var pt;function ft(t){return`:host([hidden]){display:none}:host{display:${t}}`}!function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"}(pt||(pt={}));const vt="object"==typeof global&&global&&global.Object===Object&&global;var gt="object"==typeof self&&self&&self.Object===Object&&self;const bt=vt||gt||Function("return this")(),mt=bt.Symbol;var yt=Object.prototype,xt=yt.hasOwnProperty,Ct=yt.toString,wt=mt?mt.toStringTag:void 0;var $t=Object.prototype.toString;var kt=mt?mt.toStringTag:void 0;const Ft=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":kt&&kt in Object(t)?function(t){var e=xt.call(t,wt),i=t[wt];try{t[wt]=void 0;var o=!0}catch(t){}var r=Ct.call(t);return o&&(e?t[wt]=i:delete t[wt]),r}(t):function(t){return $t.call(t)}(t)},Pt=function(t){return null!=t&&"object"==typeof t};let Dt;const St=function(){if(!0===(t=Dt)||!1===t||Pt(t)&&"[object Boolean]"==Ft(t))return Dt;var t;if("undefined"==typeof window||!window.document||!window.document.createElement)return Dt=!1,Dt;const e=document.createElement("style"),i=function(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}();null!==i&&e.setAttribute("nonce",i),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),Dt=!0}catch(t){Dt=!1}finally{document.head.removeChild(e)}return Dt}()?"focus-visible":"focus",Tt="not-allowed";class Ot extends class{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,i=this.constructListener(t);i.bind(e)(),e.addListener(i),this.listenerCache.set(t,i)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new Ot(t,e)}constructListener(t){let e=!1;const i=this.styles;return function(){const{matches:o}=this;o&&!e?(t.$fastController.addStyles(i),e=o):!o&&e&&(t.$fastController.removeStyles(i),e=o)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const Rt=Ot.with(window.matchMedia("(forced-colors)")),Lt="(var(--base-height-multiplier) + var(--density)) * var(--design-unit)";class At{constructor(t,e,i){this.name=t,this.value=e,this.host=i,this.propertyName=`--${t}`,this.var=`var(${this.propertyName})`}bind(t){const e=this.host(t);null!==e&&("function"==typeof e.registerCSSCustomProperty?e.registerCSSCustomProperty(this):(Array.isArray(e.disconnectedCSSCustomPropertyRegistry)||(e.disconnectedCSSCustomPropertyRegistry=[]),e.disconnectedCSSCustomPropertyRegistry.push(this)))}unbind(t){const e=this.host(t);null!==e&&"function"==typeof e.unregisterCSSCustomProperty&&e.unregisterCSSCustomProperty(this)}}function Bt(t,e,i){return new At(t,e,i)}var Et;!function(t){t.ltr="ltr",t.rtl="rtl"}(Et||(Et={}));const Mt={typeRampMinus2FontSize:"10px",typeRampMinus2LineHeight:"16px",typeRampMinus1FontSize:"12px",typeRampMinus1LineHeight:"16px",typeRampBaseFontSize:"14px",typeRampBaseLineHeight:"20px",typeRampPlus1FontSize:"16px",typeRampPlus1LineHeight:"24px",typeRampPlus2FontSize:"20px",typeRampPlus2LineHeight:"28px",typeRampPlus3FontSize:"28px",typeRampPlus3LineHeight:"36px",typeRampPlus4FontSize:"34px",typeRampPlus4LineHeight:"44px",typeRampPlus5FontSize:"46px",typeRampPlus5LineHeight:"56px",typeRampPlus6FontSize:"60px",typeRampPlus6LineHeight:"72px",accentBaseColor:"#0078D4",accentPalette:["#FFFFFF","#FBFDFE","#F6FAFE","#F2F8FD","#EEF6FC","#E9F4FB","#E5F1FB","#E1EFFA","#DCEDF9","#D8EAF8","#D4E8F8","#CFE6F7","#CBE4F6","#C7E1F6","#C2DFF5","#BEDDF4","#BADAF3","#B6D8F3","#B1D6F2","#ADD4F1","#A9D1F0","#A4CFF0","#A0CDEF","#9CCAEE","#97C8EE","#93C6ED","#8FC4EC","#8AC1EB","#86BFEB","#82BDEA","#7DBAE9","#79B8E8","#75B6E8","#70B3E7","#6CB1E6","#68AFE5","#63ADE5","#5FAAE4","#5BA8E3","#56A6E3","#52A3E2","#4EA1E1","#499FE0","#459DE0","#419ADF","#3D98DE","#3896DD","#3493DD","#3091DC","#2B8FDB","#278DDB","#238ADA","#1E88D9","#1A86D8","#1683D8","#1181D7","#0D7FD6","#097DD5","#047AD5","#0078D4","#0075CF","#0072C9","#006FC4","#006CBE","#0069B9","#0066B4","#0063AE","#0060A9","#005CA3","#00599E","#005699","#005393","#00508E","#004D88","#004A83","#00477D","#004478","#004173","#003E6D","#003B68","#003862","#00355D","#003258","#002F52","#002B4D","#002847","#002542","#00223C","#001F36","#001B30","#00182B","#001525","#00121F","#000000"],backgroundColor:"#FFFFFF",baseHeightMultiplier:8,baseHorizontalSpacingMultiplier:3,cornerRadius:2,elevatedCornerRadius:4,density:0,designUnit:4,direction:Et.ltr,disabledOpacity:.3,focusOutlineWidth:2,neutralBaseColor:"#808080",neutralPalette:["#FFFFFF","#FCFCFC","#FAFAFA","#F7F7F7","#F5F5F5","#F2F2F2","#EFEFEF","#EDEDED","#EAEAEA","#E8E8E8","#E5E5E5","#E2E2E2","#E0E0E0","#DDDDDD","#DBDBDB","#D8D8D8","#D6D6D6","#D3D3D3","#D0D0D0","#CECECE","#CBCBCB","#C9C9C9","#C6C6C6","#C3C3C3","#C1C1C1","#BEBEBE","#BCBCBC","#B9B9B9","#B6B6B6","#B4B4B4","#B1B1B1","#AFAFAF","#ACACAC","#A9A9A9","#A7A7A7","#A4A4A4","#A2A2A2","#9F9F9F","#9D9D9D","#9A9A9A","#979797","#959595","#929292","#909090","#8D8D8D","#8A8A8A","#888888","#858585","#838383","#808080","#7D7D7D","#7B7B7B","#787878","#767676","#737373","#717171","#6E6E6E","#6B6B6B","#696969","#666666","#646464","#616161","#5F5F5F","#5C5C5C","#5A5A5A","#575757","#545454","#525252","#4F4F4F","#4D4D4D","#4A4A4A","#484848","#454545","#424242","#404040","#3D3D3D","#3B3B3B","#383838","#363636","#333333","#313131","#2E2E2E","#2B2B2B","#292929","#262626","#242424","#212121","#1E1E1E","#1B1B1B","#181818","#151515","#121212","#101010","#000000"],outlineWidth:1,accentFillRestDelta:0,accentFillHoverDelta:4,accentFillActiveDelta:-5,accentFillFocusDelta:0,accentFillSelectedDelta:12,accentForegroundRestDelta:0,accentForegroundHoverDelta:6,accentForegroundActiveDelta:-4,accentForegroundFocusDelta:0,neutralFillRestDelta:7,neutralFillHoverDelta:10,neutralFillActiveDelta:5,neutralFillFocusDelta:0,neutralFillSelectedDelta:7,neutralFillInputRestDelta:0,neutralFillInputHoverDelta:0,neutralFillInputActiveDelta:0,neutralFillInputFocusDelta:0,neutralFillInputSelectedDelta:0,neutralFillStealthRestDelta:0,neutralFillStealthHoverDelta:5,neutralFillStealthActiveDelta:3,neutralFillStealthFocusDelta:0,neutralFillStealthSelectedDelta:7,neutralFillToggleHoverDelta:8,neutralFillToggleActiveDelta:-5,neutralFillToggleFocusDelta:0,baseLayerLuminance:-1,neutralFillCardDelta:3,neutralForegroundHoverDelta:0,neutralForegroundActiveDelta:0,neutralForegroundFocusDelta:0,neutralDividerRestDelta:8,neutralOutlineRestDelta:25,neutralOutlineHoverDelta:40,neutralOutlineActiveDelta:16,neutralOutlineFocusDelta:25,neutralContrastFillRestDelta:0,neutralContrastFillHoverDelta:-3,neutralContrastFillActiveDelta:7,neutralContrastFillFocusDelta:0};function Ht(t,e){return"function"==typeof t?t(e):t}function Nt(t){return e=>e&&void 0!==e[t]?e[t]:Mt[t]}const It=Nt("backgroundColor"),zt=(Nt("neutralBaseColor"),Nt("accentBaseColor")),Vt=(Nt("cornerRadius"),Nt("neutralPalette")),jt=Nt("accentPalette"),_t=(Nt("designUnit"),Nt("baseHeightMultiplier"),Nt("baseHorizontalSpacingMultiplier"),Nt("outlineWidth"),Nt("focusOutlineWidth"),Nt("disabledOpacity"),Nt("direction")),qt=(Nt("accentFillRestDelta"),Nt("accentFillHoverDelta")),Wt=Nt("accentFillActiveDelta"),Gt=Nt("accentFillFocusDelta"),Ut=Nt("accentFillSelectedDelta"),Xt=Nt("accentForegroundRestDelta"),Yt=Nt("accentForegroundHoverDelta"),Kt=Nt("accentForegroundActiveDelta"),Qt=Nt("accentForegroundFocusDelta"),Zt=Nt("neutralFillRestDelta"),Jt=Nt("neutralFillHoverDelta"),te=Nt("neutralFillActiveDelta"),ee=Nt("neutralFillFocusDelta"),ie=Nt("neutralFillSelectedDelta"),oe=Nt("neutralFillInputRestDelta"),re=Nt("neutralFillInputHoverDelta"),se=Nt("neutralFillInputActiveDelta"),ne=Nt("neutralFillInputFocusDelta"),ae=Nt("neutralFillInputSelectedDelta"),le=Nt("neutralFillStealthRestDelta"),ce=Nt("neutralFillStealthHoverDelta"),he=Nt("neutralFillStealthActiveDelta"),de=Nt("neutralFillStealthFocusDelta"),ue=Nt("neutralFillStealthSelectedDelta"),pe=Nt("neutralFillToggleHoverDelta"),fe=Nt("neutralFillToggleActiveDelta"),ve=Nt("neutralFillToggleFocusDelta"),ge=Nt("baseLayerLuminance"),be=Nt("neutralFillCardDelta"),me=Nt("neutralForegroundHoverDelta"),ye=Nt("neutralForegroundActiveDelta"),xe=Nt("neutralForegroundFocusDelta"),Ce=Nt("neutralDividerRestDelta"),we=Nt("neutralOutlineRestDelta"),$e=Nt("neutralOutlineHoverDelta"),ke=Nt("neutralOutlineActiveDelta"),Fe=Nt("neutralOutlineFocusDelta"),Pe=(Nt("neutralContrastFillRestDelta"),Nt("neutralContrastFillHoverDelta")),De=Nt("neutralContrastFillActiveDelta"),Se=Nt("neutralContrastFillFocusDelta");function Te(t,e,i){return isNaN(t)||t<=e?e:t>=i?i:t}function Oe(t,e,i){return isNaN(t)||t<=e?0:t>=i?1:t/(i-e)}function Re(t,e,i){return isNaN(t)?e:e+t*(i-e)}function Le(t){return t*(Math.PI/180)}function Ae(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:e+t*(i-e)}function Be(t,e,i){if(t<=0)return e%360;if(t>=1)return i%360;const o=(e-i+360)%360;return o<=(i-e+360)%360?(e-o*t+360)%360:(e+o*t+360)%360}function Ee(t,e){const i=Math.pow(10,e);return Math.round(t*i)/i}Math.PI;class Me{constructor(t,e,i,o){this.r=t,this.g=e,this.b=i,this.a="number"!=typeof o||isNaN(o)?1:o}static fromObject(t){return!t||isNaN(t.r)||isNaN(t.g)||isNaN(t.b)?null:new Me(t.r,t.g,t.b,t.a)}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Re(this.r,0,255))},${Math.round(Re(this.g,0,255))},${Math.round(Re(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Re(this.r,0,255))},${Math.round(Re(this.g,0,255))},${Math.round(Re(this.b,0,255))},${Te(this.a,0,1)})`}roundToPrecision(t){return new Me(Ee(this.r,t),Ee(this.g,t),Ee(this.b,t),Ee(this.a,t))}clamp(){return new Me(Te(this.r,0,1),Te(this.g,0,1),Te(this.b,0,1),Te(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return function(t){const e=Math.round(Te(t,0,255)).toString(16);return 1===e.length?"0"+e:e}(Re(t,0,255))}}const He=/^rgb\(\s*((?:(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*){2}(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*)\)$/i,Ne=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Ie(t){const e=Ne.exec(t);if(null===e)return null;let i=e[1];if(3===i.length){const t=i.charAt(0),e=i.charAt(1),o=i.charAt(2);i=t.concat(t,e,e,o,o)}const o=parseInt(i,16);return isNaN(o)?null:new Me(Oe((16711680&o)>>>16,0,255),Oe((65280&o)>>>8,0,255),Oe(255&o,0,255),1)}class ze{constructor(t,e,i){this.h=t,this.s=e,this.l=i}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.l)?null:new ze(t.h,t.s,t.l)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new ze(Ee(this.h,t),Ee(this.s,t),Ee(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Ve{constructor(t,e,i){this.h=t,this.s=e,this.v=i}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.v)?null:new Ve(t.h,t.s,t.v)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.v===t.v}roundToPrecision(t){return new Ve(Ee(this.h,t),Ee(this.s,t),Ee(this.v,t))}toObject(){return{h:this.h,s:this.s,v:this.v}}}class je{constructor(t,e,i){this.l=t,this.a=e,this.b=i}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.a)||isNaN(t.b)?null:new je(t.l,t.a,t.b)}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new je(Ee(this.l,t),Ee(this.a,t),Ee(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}je.epsilon=216/24389,je.kappa=24389/27;class _e{constructor(t,e,i){this.l=t,this.c=e,this.h=i}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.c)||isNaN(t.h)?null:new _e(t.l,t.c,t.h)}equalValue(t){return this.l===t.l&&this.c===t.c&&this.h===t.h}roundToPrecision(t){return new _e(Ee(this.l,t),Ee(this.c,t),Ee(this.h,t))}toObject(){return{l:this.l,c:this.c,h:this.h}}}class qe{constructor(t,e,i){this.x=t,this.y=e,this.z=i}static fromObject(t){return!t||isNaN(t.x)||isNaN(t.y)||isNaN(t.z)?null:new qe(t.x,t.y,t.z)}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new qe(Ee(this.x,t),Ee(this.y,t),Ee(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function We(t){return.2126*t.r+.7152*t.g+.0722*t.b}function Ge(t){function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return We(new Me(e(t.r),e(t.g),e(t.b),1))}qe.whitePoint=new qe(.95047,1,1.08883);const Ue=(t,e)=>(t+.05)/(e+.05);function Xe(t,e){const i=Ge(t),o=Ge(e);return i>o?Ue(i,o):Ue(o,i)}function Ye(t){const e=Math.max(t.r,t.g,t.b),i=Math.min(t.r,t.g,t.b),o=e-i;let r=0;0!==o&&(r=e===t.r?(t.g-t.b)/o%6*60:e===t.g?60*((t.b-t.r)/o+2):60*((t.r-t.g)/o+4)),r<0&&(r+=360);const s=(e+i)/2;let n=0;return 0!==o&&(n=o/(1-Math.abs(2*s-1))),new ze(r,n,s)}function Ke(t,e=1){const i=(1-Math.abs(2*t.l-1))*t.s,o=i*(1-Math.abs(t.h/60%2-1)),r=t.l-i/2;let s=0,n=0,a=0;return t.h<60?(s=i,n=o,a=0):t.h<120?(s=o,n=i,a=0):t.h<180?(s=0,n=i,a=o):t.h<240?(s=0,n=o,a=i):t.h<300?(s=o,n=0,a=i):t.h<360&&(s=i,n=0,a=o),new Me(s+r,n+r,a+r,e)}function Qe(t){const e=Math.max(t.r,t.g,t.b),i=e-Math.min(t.r,t.g,t.b);let o=0;0!==i&&(o=e===t.r?(t.g-t.b)/i%6*60:e===t.g?60*((t.b-t.r)/i+2):60*((t.r-t.g)/i+4)),o<0&&(o+=360);let r=0;return 0!==e&&(r=i/e),new Ve(o,r,e)}function Ze(t){function e(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}const i=e(t.r),o=e(t.g),r=e(t.b);return new qe(.4124564*i+.3575761*o+.1804375*r,.2126729*i+.7151522*o+.072175*r,.0193339*i+.119192*o+.9503041*r)}function Je(t,e=1){function i(t){return t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055}const o=i(3.2404542*t.x-1.5371385*t.y-.4985314*t.z),r=i(-.969266*t.x+1.8760108*t.y+.041556*t.z),s=i(.0556434*t.x-.2040259*t.y+1.0572252*t.z);return new Me(o,r,s,e)}function ti(t){return function(t){function e(t){return t>je.epsilon?Math.pow(t,1/3):(je.kappa*t+16)/116}const i=e(t.x/qe.whitePoint.x),o=e(t.y/qe.whitePoint.y),r=e(t.z/qe.whitePoint.z);return new je(116*o-16,500*(i-o),200*(o-r))}(Ze(t))}function ei(t,e=1){return Je(function(t){const e=(t.l+16)/116,i=e+t.a/500,o=e-t.b/200,r=Math.pow(i,3),s=Math.pow(e,3),n=Math.pow(o,3);let a=0;a=r>je.epsilon?r:(116*i-16)/je.kappa;let l=0;l=t.l>je.epsilon*je.kappa?s:t.l/je.kappa;let c=0;return c=n>je.epsilon?n:(116*o-16)/je.kappa,a=qe.whitePoint.x*a,l=qe.whitePoint.y*l,c=qe.whitePoint.z*c,new qe(a,l,c)}(t),e)}function ii(t){return function(t){let e=0;0===t.b&&0===t.a||(e=Math.atan2(t.b,t.a)*(180/Math.PI)),e<0&&(e+=360);const i=Math.sqrt(t.a*t.a+t.b*t.b);return new _e(t.l,i,e)}(ti(t))}function oi(t,e=1){return ei(function(t){let e=0,i=0;return 0!==t.h&&(e=Math.cos(Le(t.h))*t.c,i=Math.sin(Le(t.h))*t.c),new je(t.l,e,i)}(t),e)}const ri=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},si=bt["__core-js_shared__"];var ni,ai=(ni=/[^.]+$/.exec(si&&si.keys&&si.keys.IE_PROTO||""))?"Symbol(src)_1."+ni:"";var li=Function.prototype.toString;var ci=/^\[object .+?Constructor\]$/,hi=Function.prototype,di=Object.prototype,ui=hi.toString,pi=di.hasOwnProperty,fi=RegExp("^"+ui.call(pi).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const vi=function(t){return!(!ri(t)||(e=t,ai&&ai in e))&&(function(t){if(!ri(t))return!1;var e=Ft(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}(t)?fi:ci).test(function(t){if(null!=t){try{return li.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e},gi=function(t,e){var i=function(t,e){return null==t?void 0:t[e]}(t,e);return vi(i)?i:void 0},bi=gi(Object,"create");var mi=Object.prototype.hasOwnProperty;var yi=Object.prototype.hasOwnProperty;function xi(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var o=t[e];this.set(o[0],o[1])}}xi.prototype.clear=function(){this.__data__=bi?bi(null):{},this.size=0},xi.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},xi.prototype.get=function(t){var e=this.__data__;if(bi){var i=e[t];return"__lodash_hash_undefined__"===i?void 0:i}return mi.call(e,t)?e[t]:void 0},xi.prototype.has=function(t){var e=this.__data__;return bi?void 0!==e[t]:yi.call(e,t)},xi.prototype.set=function(t,e){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=bi&&void 0===e?"__lodash_hash_undefined__":e,this};const Ci=xi,wi=function(t,e){for(var i=t.length;i--;)if((o=t[i][0])===(r=e)||o!=o&&r!=r)return i;var o,r;return-1};var $i=Array.prototype.splice;function ki(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var o=t[e];this.set(o[0],o[1])}}ki.prototype.clear=function(){this.__data__=[],this.size=0},ki.prototype.delete=function(t){var e=this.__data__,i=wi(e,t);return!(i<0||(i==e.length-1?e.pop():$i.call(e,i,1),--this.size,0))},ki.prototype.get=function(t){var e=this.__data__,i=wi(e,t);return i<0?void 0:e[i][1]},ki.prototype.has=function(t){return wi(this.__data__,t)>-1},ki.prototype.set=function(t,e){var i=this.__data__,o=wi(i,t);return o<0?(++this.size,i.push([t,e])):i[o][1]=e,this};const Fi=ki,Pi=gi(bt,"Map"),Di=function(t,e){var i,o,r=t.__data__;return("string"==(o=typeof(i=e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==i:null===i)?r["string"==typeof e?"string":"hash"]:r.map};function Si(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var o=t[e];this.set(o[0],o[1])}}Si.prototype.clear=function(){this.size=0,this.__data__={hash:new Ci,map:new(Pi||Fi),string:new Ci}},Si.prototype.delete=function(t){var e=Di(this,t).delete(t);return this.size-=e?1:0,e},Si.prototype.get=function(t){return Di(this,t).get(t)},Si.prototype.has=function(t){return Di(this,t).has(t)},Si.prototype.set=function(t,e){var i=Di(this,t),o=i.size;return i.set(t,e),this.size+=i.size==o?0:1,this};const Ti=Si;function Oi(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var i=function(){var o=arguments,r=e?e.apply(this,o):o[0],s=i.cache;if(s.has(r))return s.get(r);var n=t.apply(this,o);return i.cache=s.set(r,n)||s,n};return i.cache=new(Oi.Cache||Ti),i}Oi.Cache=Ti;const Ri=Oi;var Li;function Ai(t){const e=Ri(t);return function(t){return"function"==typeof t?i=>e(Object.assign({},i,{backgroundColor:t(i)})):e(t)}}function Bi(t,e){const i=Ri(e);return e=>"function"==typeof e?o=>i(Object.assign({},o,{backgroundColor:e(o)}))[t]:i(e)[t]}!function(t){t.rest="rest",t.hover="hover",t.active="active",t.focus="focus",t.selected="selected"}(Li||(Li={}));const Ei=new Map;function Mi(t){const e=Ei.get(t);if(!e){let e=Ie(t);if(null===e&&(e=function(t){const e=He.exec(t);if(null===e)return null;const i=e[1].split(",");return new Me(Oe(Number(i[0]),0,255),Oe(Number(i[1]),0,255),Oe(Number(i[2]),0,255),1)}(t)),null===e)throw new Error(`${t} cannot be converted to a ColorRGBA64. Color strings must be one of the following formats: "#RGB", "#RRGGBB", or "rgb(r, g, b)"`);return Ei.set(t,e),e}return e}function Hi(t){return e=t,Ne.test(e)||function(t){return He.test(t)}(t);var e}const Ni=Ri(((t,e)=>Xe(Mi(t),Mi(e))),((t,e)=>t+e));function Ii(t){return Ge(Mi(t))}function zi(...t){return e=>Math.max.apply(null,t.map((t=>t(e))))}const Vi=(t,e,i)=>Math.min(Math.max(t,e),i);var ji;function _i(t,e){return i=>{if(!Hi(e))return-1;const o=Ht(t,i),r=o.indexOf(e);return-1!==r?r:o.findIndex((t=>{return Hi(t)&&(i=t,Mi(e).equalValue(Mi(i)));var i}))}}function qi(t,e){return i=>{const o=Ht(t,i),r=Ht(e,i),s=_i(o,r)(i);let n;if(-1!==s)return s;try{n=Ii(r)}catch(t){n=-1}return-1===n?0:o.map(((t,e)=>({luminance:Ii(t),index:e}))).reduce(((t,e)=>Math.abs(e.luminance-n)<Math.abs(t.luminance-n)?e:t)).index}}function Wi(t){return Ii(It(t))<=(-.1+Math.sqrt(.21))/2}function Gi(t,e){return"function"==typeof t?i=>e(i)[Vi(t(i),0,e(i).length-1)]:e[Vi(t,0,e.length-1)]}function Ui(t){return(e,i)=>o=>Gi(Wi(o)?Ht(i,o):Ht(e,o),t(o))}function Xi(t,e,i=0,o=t.length-1){if(o===i)return t[i];const r=Math.floor((o-i)/2)+i;return e(t[r])?Xi(t,e,i,r):Xi(t,e,r+1,o)}function Yi(t){return e=>i=>o=>r=>s=>{const n=Ht(t,s),a=Ht(e,s),l=a.length,c=Vi(i(n,a,s),0,l-1),h=o(c,a,s),d=[].concat(a),u=l-1;let p=c;return-1===h&&(d.reverse(),p=u-p),Xi(d,(function(t){return r(Ni(n,t))}),p,u)}}function Ki(t,e,i){return qi(e,t)(i)}function Qi(t){return qi(Vt,It(t))(t)}function Zi(t,e,i,o,r,s){return n=>{const a=Ht(t,n),l=Wi(n)?-1:1,c=Yi(It)(a)(Ki)((()=>l))((h=Ht(e,n),t=>t>=h))(n);var h;const d=_i(t,c)(n),u=Ht(i,n),p=Ht(o,n),f=Ht(r,n),v=Ht(s,n);return function(t,e,i,o,r,s,n){const a=t+i*Math.abs(o-r),l=1===i?o<r:i*o>i*r,c=l?t:a,h=l?a:t,d=c+i*s,u=c+i*n;return{rest:Gi(c,e),hover:Gi(h,e),active:Gi(d,e),focus:Gi(u,e)}}(d,a,l,u,p,f,v)}}!function(t){t.neutral="neutral",t.accent="accent"}(ji||(ji={}));const Ji=Ai(Zi(Vt,14,0,me,ye,xe)),to=Bi(Li.rest,Ji),eo=(Bi(Li.hover,Ji),Bi(Li.active,Ji),Bi(Li.focus,Ji),"#FFFFFF"),io="#000000",oo=Ai(Zi(Vt,4.5,0,pe,fe,ve)),ro=Bi(Li.rest,oo),so=(Bi(Li.hover,oo),Bi(Li.active,oo),Bi(Li.focus,oo),(t,e)=>Ni(eo,t)>=e?eo:io);function no(t){return function(e){return"function"==typeof e?i=>so(e(i),t):so(ro(e),t)}}const ao=no(4.5),lo=no(3);function co(t){return Zi(Vt,t,0,0,0,0)}const ho=Bi(Li.rest,Ai(co(4.5))),uo=Bi(Li.rest,Ai(co(3)));function po(t){return e=>{const i=jt(e),o=zt(e),r=qi(jt,o)(e),s={rest:Xt(e),hover:Yt(e),active:Kt(e),focus:Qt(e)},n=Wi(e)?-1:1,a=r+(1===n?Math.min(s.rest,s.hover):Math.max(n*s.rest,n*s.hover)),l=Yi(It)(jt)((()=>a))((()=>n))((e=>e>=t))(e),c=_i(jt,l)(e),h=c+n*Math.abs(s.rest-s.hover),d=1===n?s.rest<s.hover:n*s.rest>n*s.hover,u=d?c:h,p=d?h:c,f=u+n*s.active,v=u+n*s.focus;return{rest:Gi(u,i),hover:Gi(p,i),active:Gi(f,i),focus:Gi(v,i)}}}const fo=Ai(po(4.5)),vo=Ai(po(3)),go=(Bi(Li.rest,fo),Bi(Li.hover,fo),Bi(Li.active,fo),Bi(Li.focus,fo),Bi(Li.rest,vo),Bi(Li.hover,vo),Bi(Li.active,vo),Bi(Li.focus,vo),(t,e)=>Ni(eo,t)>=e?eo:io);function bo(t){return function(e){return"function"==typeof e?i=>go(e(i),t):go(zt(e),t)}}const mo=bo(4.5),yo=(bo(3),zi(Zt,Jt,te,ee));function xo(t){return e=>{const i=Qi(e);return Gi(i+(i>=yo(e)?-1:1)*t(e),Vt(e))}}const Co=Ai(xo(Zt)),wo=Ai(xo(Jt)),$o=Ai(xo(te)),ko=Ai(xo(ee)),Fo=Ai(xo(ie)),Po=Ai((t=>({rest:Co(t),hover:wo(t),active:$o(t),focus:ko(t),selected:Fo(t)}))),Do=zi(Zt,Jt,te,ee,le,ce,he,de);function So(t){return e=>{const i=Qi(e);return Gi(i+(i>=Do(e)?-1:1)*t(e),Vt(e))}}const To=Ai(So(le)),Oo=Ai(So(ce)),Ro=Ai(So(he)),Lo=Ai(So(de)),Ao=Ai(So(ue)),Bo=Ai((t=>({rest:To(t),hover:Oo(t),active:Ro(t),focus:Lo(t),selected:Ao(t)})));function Eo(t){return e=>{const i=Wi(e)?-1:1;return Gi(Qi(e)-t(e)*i,Vt(e))}}const Mo=Ai(Eo(oe)),Ho=Ai(Eo(re)),No=Ai(Eo(se)),Io=Ai(Eo(ne)),zo=Ai(Eo(ae)),Vo=Ai((t=>({rest:Mo(t),hover:Ho(t),active:No(t),focus:Io(t),selected:zo(t)})));var jo=Math.max,_o=Math.min;var qo=/\s/;var Wo=/^\s+/;const Go=function(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&qo.test(t.charAt(e)););return e}(t)+1).replace(Wo,""):t};var Uo=/^[-+]0x[0-9a-f]+$/i,Xo=/^0b[01]+$/i,Yo=/^0o[0-7]+$/i,Ko=parseInt;const Qo=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||Pt(t)&&"[object Symbol]"==Ft(t)}(t))return NaN;if(ri(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=ri(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=Go(t);var i=Xo.test(t);return i||Yo.test(t)?Ko(t.slice(2),i?2:8):Uo.test(t)?NaN:+t};const Zo=function(t){return t?Infinity===(t=Qo(t))||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0},Jo=function(t,e,i){return e=Zo(e),void 0===i?(i=e,e=0):i=Zo(i),function(t,e,i){return t>=_o(e,i)&&t<jo(e,i)}(t=Qo(t),e,i)},tr=zi(Zt,Jt,te);function er(t){return e=>{const i=jt(e),o=i.length,r=zt(e),s=mo(Object.assign({},e,{backgroundColor:r})),n=qt(e),a=Qi(e)>=tr(e)?-1:1,l=o-1,c=qi(jt,r)(e);let h=0;for(;h<a*n&&Jo(c+h+a,0,o)&&Ni(i[c+h+a],s)>=t&&Jo(c+h+a+a,0,l);)h+=a;const d=c+h,u=d+-1*a*n,p=u+a*Wt(e),f=u+a*Gt(e);return{rest:Gi(u,i),hover:Gi(d,i),active:Gi(p,i),focus:Gi(f,i),selected:Gi(u+(Wi(e)?-1*Ut(e):Ut(e)),i)}}}const ir=Ai(er(4.5)),or=Ai(er(3)),rr=(Bi(Li.rest,ir),Bi(Li.hover,ir),Bi(Li.active,ir),Bi(Li.focus,ir),Bi(Li.selected,ir),Bi(Li.rest,or),Bi(Li.hover,or),Bi(Li.active,or),Bi(Li.focus,or),Bi(Li.selected,or),t=>{const e=be(t),i=qi(Vt,It(t))(t);return Gi(i-(i<e?-1*e:e),Vt(t))});function sr(t){return"function"==typeof t?e=>rr(Object.assign({},e,{backgroundColor:t(e)})):rr(t)}const nr=Ai((t=>{const e=Vt(t),i=Qi(t),o=Wi(t)?-1:1,r=we(t),s=i+o*r,n=s+o*($e(t)-r),a=s+o*(ke(t)-r),l=s+o*(Fe(t)-r);return{rest:Gi(s,e),hover:Gi(n,e),active:Gi(a,e),focus:Gi(l,e)}})),ar=(Bi(Li.rest,nr),Bi(Li.hover,nr),Bi(Li.active,nr),Bi(Li.focus,nr),Ai((t=>{const e=Vt(t),i=Qi(t),o=Ce(t);return Gi(i+(Wi(t)?-1:1)*o,e)})));function lr(t){return(...e)=>i=>{const o=e[0];let r="function"==typeof o?o(i):o;for(let o=1;o<e.length;o++){const s=e[o];r=t(r,"function"==typeof s?s(i):s)}return r}}const cr=lr(((t,e)=>t+e)),hr=lr(((t,e)=>t-e)),dr=lr(((t,e)=>t*e));function ur(...t){return cr.apply(this,t)}function pr(...t){return hr.apply(this,t)}function fr(...t){return dr.apply(this,t)}var vr;function gr(t,e){return i=>-1===ge(i)?e(i):t(i)}lr(((t,e)=>t/e)),function(t){t[t.LightMode=1]="LightMode",t[t.DarkMode=.23]="DarkMode"}(vr||(vr={}));const br=qi(Vt,(t=>{const e=ge(t);return new Me(e,e,e,1).toStringHexRGB()})),mr=t=>Te(pr(br,be)(t),0,Vt(t).length-1),yr=zi(Zt,Jt,te),xr=zi(ur(br,be),yr),Cr=t=>{const e=.14,i=new Me(e,e,e,1);return qi(Vt,i.toStringHexRGB())(t)},wr=Ai(gr(Gi(pr(mr,be),Vt),Ui(Vt)(0,pr(Cr,fr(be,5))))),$r=Ai(gr(Gi(mr,Vt),Ui(Vt)(0,pr(Cr,fr(be,4))))),kr=Ai(gr(Gi(ur(mr,be),Vt),Ui(Vt)(be,pr(Cr,fr(be,3))))),Fr=Ai(gr(Gi(br,Vt),Ui(Vt)(0,pr(Cr,fr(be,3))))),Pr=kr,Dr=Ai(gr(Gi(xr,Vt),Ui(Vt)(yr,pr(Cr,fr(be,2))))),Sr=Ai(gr(Gi(ur(xr,be),Vt),Ui(Vt)(ur(yr,be),pr(Cr,be)))),Tr=Ai(gr(Gi(ur(xr,fr(be,2)),Vt),Ui(Vt)(ur(yr,fr(be,2)),Cr)));function Or(t){return t>3.5}const Rr=Ai(Yi(It)(Vt)((function(t,e,i){return qi(Vt,t)(i)}))((function(t,e,i){return Wi(i)?-1:1}))(Or));const Lr=Ai(Zi(Vt,14,0,Pe,De,Se)),Ar=Bi(Li.rest,Lr),Br=(Bi(Li.hover,Lr),Bi(Li.active,Lr),Bi(Li.focus,Lr),":host{}");class Er{constructor(){this.queue=new Set,this.customPropertyTarget=null,this._owner=null,this.ticking=!1,this.cssCustomPropertyDefinitions=new Map}get owner(){return this._owner}register(t){const e=this.cssCustomPropertyDefinitions.get(t.name);e?e.count+=1:(this.cssCustomPropertyDefinitions.set(t.name,Object.assign(Object.assign({},t),{count:1})),this.set(t))}unregister(t){const e=this.cssCustomPropertyDefinitions.get(t);e&&(e.count-=1,0===e.count&&(this.cssCustomPropertyDefinitions.delete(t),this.remove(t)))}set(t){this.owner&&(this.customPropertyTarget?this.customPropertyTarget.setProperty(`--${t.name}`,this.owner.evaluate(t)):this.queue.add(this.set.bind(this,t)))}remove(t){this.customPropertyTarget?this.customPropertyTarget.removeProperty(`--${t}`):this.queue.add(this.remove.bind(this,t))}setAll(){this.ticking||(this.ticking=!0,e.SO.queueUpdate((()=>{this.ticking=!1,this.cssCustomPropertyDefinitions.forEach((t=>{this.set(t)}))})))}}class Mr extends Er{constructor(t){super(),this.subscribers=new Set,this.sheet=t,this.styles=r.create([t]),this.customPropertyTarget=t.cssRules[t.insertRule(Br)].style}subscribe(t){this.subscribers.add(t),1===this.subscribers.size&&(this._owner=t),t.cssCustomPropertyDefinitions.forEach((t=>{this.register(t)})),t.$fastController.addStyles(this.styles)}unsubscribe(t){this.subscribers.delete(t),t.cssCustomPropertyDefinitions.forEach((t=>this.unregister(t.name))),this.owner===t&&(this._owner=this.subscribers.size?this.subscribers.values().next().value:null),!this.sheet.ownerNode&&this.styles&&t.$fastController.removeStyles(this.styles)}isSubscribed(t){return this.subscribers.has(t)}}class Hr extends Er{constructor(t,e){super(),this._sheet=null,this.handleConnection={handleChange:()=>{var t;this._sheet=this.styles.sheet;const e=this.sheet.insertRule(Br);this.customPropertyTarget=this.sheet.rules[e].style,d.y$.getNotifier(null===(t=this._owner)||void 0===t?void 0:t.$fastController).unsubscribe(this.handleConnection,"isConnected")}};const i=e.$fastController;i.addStyles(t),this.styles=t,this._owner=e,e.isConnected?this.handleConnection.handleChange():d.y$.getNotifier(i).subscribe(this.handleConnection,"isConnected"),e.cssCustomPropertyDefinitions.forEach((t=>{this.register(t)}))}get sheet(){return this._sheet}customPropertyTargetChanged(t,e){!t&&this.queue.size&&(this.queue.forEach((t=>t())),this.queue.clear())}}function Nr(t){const e=t.parentElement;if(e)return e;{const e=t.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}t([d.LO],Hr.prototype,"customPropertyTarget",void 0);const Ir="adoptedStyleSheets"in window.ShadowRoot.prototype;function zr(t){const e=t.provider;return null!=e&&jr.isDesignSystemProvider(e)}const Vr={bind(t){t.provider=jr.findProvider(t)},unbind(t){}};class jr extends P{constructor(){super(),this.isDesignSystemProvider=!0,this.designSystem={},this.useDefaults=!1,this.provider=null,this.cssCustomPropertyDefinitions=new Map,this.attributeChangeHandler={handleChange:(t,e)=>{const i=this[e],o=this.customPropertyManager;if(this.isValidDesignSystemValue(i)){this.designSystem[e]=i;const t=this.designSystemProperties[e];t&&t.cssCustomProperty&&o&&o.set({name:t.cssCustomProperty,value:i})}else{this.syncDesignSystemWithProvider();const t=this.designSystemProperties[e].cssCustomProperty;o&&("string"==typeof t&&o.remove(t),o.setAll())}}},this.localDesignSystemChangeHandler={handleChange:()=>{const t=this.customPropertyManager;t&&t.owner===this&&t.setAll()}},this.providerDesignSystemChangeHandler={handleChange:(t,e)=>{t[e]===this.designSystem[e]||this.isValidDesignSystemValue(this[e])||(this.designSystem[e]=t[e])}},this.customPropertyManager=Ir?new Mr(new CSSStyleSheet):new Hr(document.createElement("style"),this),this.$fastController.addBehaviors([Vr])}static get tagNames(){return jr._tagNames}static isDesignSystemProvider(t){return t.isDesignSystemProvider||-1!==jr.tagNames.indexOf(t.tagName)}static findProvider(t){if(zr(t))return t.provider;let e=Nr(t);for(;null!==e;){if(jr.isDesignSystemProvider(e))return t.provider=e,e;if(zr(e))return t.provider=e.provider,e.provider;e=Nr(e)}return null}static registerTagName(t){const e=t.toUpperCase();-1===jr.tagNames.indexOf(e)&&jr._tagNames.push(e)}useDefaultsChanged(){if(this.useDefaults){const t=this.designSystemProperties;Object.keys(t).forEach((e=>{void 0===this[e]&&(this[e]=t[e].default)}))}}providerChanged(t,e){if(t instanceof HTMLElement){const e=d.y$.getNotifier(t.designSystem);d.y$.getAccessors(t.designSystem).forEach((t=>{e.unsubscribe(this.providerDesignSystemChangeHandler,t.name)}))}if(e instanceof HTMLElement&&jr.isDesignSystemProvider(e)){const t=d.y$.getNotifier(e.designSystem),i=d.y$.getAccessors(this.designSystem).reduce(((t,e)=>Object.assign(Object.assign({},t),{[e.name]:e})),{}),o=d.y$.getNotifier(this.designSystem);d.y$.getAccessors(e.designSystem).forEach((e=>{t.subscribe(this.providerDesignSystemChangeHandler,e.name),i[e.name]||((0,d.LO)(this.designSystem,e.name),o.subscribe(this.localDesignSystemChangeHandler,e.name))})),this.syncDesignSystemWithProvider()}}customPropertyManagerChanged(t,e){t&&t.unsubscribe&&t.unsubscribe(this),e.subscribe&&e.subscribe(this)}connectedCallback(){super.connectedCallback(),this.customPropertyManager.subscribe&&this.customPropertyManager.isSubscribed&&!this.customPropertyManager.isSubscribed(this)&&this.customPropertyManager.subscribe(this);const t=d.y$.getNotifier(this),e=d.y$.getNotifier(this.designSystem);if(Object.keys(this.designSystemProperties).forEach((i=>{(0,d.LO)(this.designSystem,i),t.subscribe(this.attributeChangeHandler,i),e.subscribe(this.localDesignSystemChangeHandler,i);const o=this[i];if(this.isValidDesignSystemValue(o)){this.designSystem[i]=o;const{cssCustomProperty:t}=this.designSystemProperties[i];"string"==typeof t&&this.customPropertyManager&&this.customPropertyManager.owner===this&&this.customPropertyManager.set({name:t,value:this[i]})}})),Array.isArray(this.disconnectedCSSCustomPropertyRegistry)){for(let t=0;t<this.disconnectedCSSCustomPropertyRegistry.length;t++)this.registerCSSCustomProperty(this.disconnectedCSSCustomPropertyRegistry[t]);delete this.disconnectedCSSCustomPropertyRegistry}if(Array.isArray(this.disconnectedRegistry)){for(let t=0;t<this.disconnectedRegistry.length;t++)this.disconnectedRegistry[t](this);delete this.disconnectedRegistry}}disconnectedCallback(){super.disconnectedCallback(),this.customPropertyManager.unsubscribe&&this.customPropertyManager.unsubscribe(this)}registerCSSCustomProperty(t){this.cssCustomPropertyDefinitions.set(t.name,t),this.customPropertyManager.register(t)}unregisterCSSCustomProperty(t){this.cssCustomPropertyDefinitions.delete(t.name),this.customPropertyManager.unregister(t.name)}evaluate(t){return"function"==typeof t.value?t.value(Object.assign({},this.designSystem)):t.value}syncDesignSystemWithProvider(){if(this.provider){const t=d.y$.getAccessors(this.designSystem).reduce(((t,e)=>(t[e.name]=e,t)),{});d.y$.getAccessors(this.provider.designSystem).forEach((e=>{var i;this.designSystemProperties.hasOwnProperty(e.name)&&this.isValidDesignSystemValue(this[e.name])||!this.isValidDesignSystemValue(null===(i=this.provider)||void 0===i?void 0:i.designSystem[e.name])||(t[e.name]||d.y$.defineProperty(this.designSystem,e.name),this.designSystem[e.name]=this.provider.designSystem[e.name])}))}}isValidDesignSystemValue(t){return null!=t}}jr._tagNames=[],t([v({attribute:"use-defaults",mode:"boolean"})],jr.prototype,"useDefaults",void 0),t([d.LO],jr.prototype,"provider",void 0),t([d.LO],jr.prototype,"customPropertyManager",void 0);const _r=function(t){return e=>{D(t)(e),e.registerTagName("string"==typeof t?t:t.name)}};function qr(t){return(e,i)=>{((t,e,i)=>{const{cssCustomProperty:o,attribute:r}=i;t.designSystemProperties||(t.designSystemProperties={}),!1===r?(0,d.LO)(t,e):(void 0===i.mode&&(i=Object.assign(Object.assign({},i),{mode:"fromView"})),v(i)(t,e)),t.designSystemProperties[e]={cssCustomProperty:!1!==o&&("string"==typeof o?o:"string"==typeof r?r:e),default:i.default}})(e,i,t)}}const Wr=lt`
    <slot></slot>
`;function Gr(t,e,i=18){const o=ii(t);let r=o.c+e*i;return r<0&&(r=0),oi(new _e(o.l,r,o.h))}function Ur(t,e){return t*e}function Xr(t,e){return new Me(Ur(t.r,e.r),Ur(t.g,e.g),Ur(t.b,e.b),1)}function Yr(t,e){return Te(t<.5?2*e*t:1-2*(1-e)*(1-t),0,1)}function Kr(t,e){return new Me(Yr(t.r,e.r),Yr(t.g,e.g),Yr(t.b,e.b),1)}var Qr,Zr;function Jr(t,e,i,o){if(isNaN(t)||t<=0)return i;if(t>=1)return o;switch(e){case Zr.HSL:return Ke(function(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new ze(Be(t,e.h,i.h),Ae(t,e.s,i.s),Ae(t,e.l,i.l))}(t,Ye(i),Ye(o)));case Zr.HSV:return function(t,e=1){const i=t.s*t.v,o=i*(1-Math.abs(t.h/60%2-1)),r=t.v-i;let s=0,n=0,a=0;return t.h<60?(s=i,n=o,a=0):t.h<120?(s=o,n=i,a=0):t.h<180?(s=0,n=i,a=o):t.h<240?(s=0,n=o,a=i):t.h<300?(s=o,n=0,a=i):t.h<360&&(s=i,n=0,a=o),new Me(s+r,n+r,a+r,e)}(function(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new Ve(Be(t,e.h,i.h),Ae(t,e.s,i.s),Ae(t,e.v,i.v))}(t,Qe(i),Qe(o)));case Zr.XYZ:return Je(function(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new qe(Ae(t,e.x,i.x),Ae(t,e.y,i.y),Ae(t,e.z,i.z))}(t,Ze(i),Ze(o)));case Zr.LAB:return ei(function(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new je(Ae(t,e.l,i.l),Ae(t,e.a,i.a),Ae(t,e.b,i.b))}(t,ti(i),ti(o)));case Zr.LCH:return oi(function(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new _e(Ae(t,e.l,i.l),Ae(t,e.c,i.c),Be(t,e.h,i.h))}(t,ii(i),ii(o)));default:return function(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new Me(Ae(t,e.r,i.r),Ae(t,e.g,i.g),Ae(t,e.b,i.b),Ae(t,e.a,i.a))}(t,i,o)}}!function(t){t[t.Burn=0]="Burn",t[t.Color=1]="Color",t[t.Darken=2]="Darken",t[t.Dodge=3]="Dodge",t[t.Lighten=4]="Lighten",t[t.Multiply=5]="Multiply",t[t.Overlay=6]="Overlay",t[t.Screen=7]="Screen"}(Qr||(Qr={})),function(t){t[t.RGB=0]="RGB",t[t.HSL=1]="HSL",t[t.HSV=2]="HSV",t[t.XYZ=3]="XYZ",t[t.LAB=4]="LAB",t[t.LCH=5]="LCH"}(Zr||(Zr={}));class ts{constructor(t){if(null==t||0===t.length)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(t)}static createBalancedColorScale(t){if(null==t||0===t.length)throw new Error("The colors argument must be non-empty");const e=new Array(t.length);for(let i=0;i<t.length;i++)0===i?e[i]={color:t[i],position:0}:i===t.length-1?e[i]={color:t[i],position:1}:e[i]={color:t[i],position:i*(1/(t.length-1))};return new ts(e)}getColor(t,e=Zr.RGB){if(1===this.stops.length)return this.stops[0].color;if(t<=0)return this.stops[0].color;if(t>=1)return this.stops[this.stops.length-1].color;let i=0;for(let e=0;e<this.stops.length;e++)this.stops[e].position<=t&&(i=e);let o=i+1;return o>=this.stops.length&&(o=this.stops.length-1),Jr((t-this.stops[i].position)*(1/(this.stops[o].position-this.stops[i].position)),e,this.stops[i].color,this.stops[o].color)}trim(t,e,i=Zr.RGB){if(t<0||e>1||e<t)throw new Error("Invalid bounds");if(t===e)return new ts([{color:this.getColor(t,i),position:0}]);const o=[];for(let i=0;i<this.stops.length;i++)this.stops[i].position>=t&&this.stops[i].position<=e&&o.push(this.stops[i]);if(0===o.length)return new ts([{color:this.getColor(t),position:t},{color:this.getColor(e),position:e}]);o[0].position!==t&&o.unshift({color:this.getColor(t),position:t}),o[o.length-1].position!==e&&o.push({color:this.getColor(e),position:e});const r=e-t,s=new Array(o.length);for(let e=0;e<o.length;e++)s[e]={color:o[e].color,position:(o[e].position-t)/r};return new ts(s)}findNextColor(t,e,i=!1,o=Zr.RGB,r=.005,s=32){isNaN(t)||t<=0?t=0:t>=1&&(t=1);const n=this.getColor(t,o),a=i?0:1;if(Xe(n,this.getColor(a,o))<=e)return a;let l=i?0:t,c=i?t:0,h=a,d=0;for(;d<=s;){h=Math.abs(c-l)/2+l;const t=Xe(n,this.getColor(h,o));if(Math.abs(t-e)<=r)return h;t>e?i?l=h:c=h:i?c=h:l=h,d++}return h}clone(){const t=new Array(this.stops.length);for(let e=0;e<t.length;e++)t[e]={color:this.stops[e].color,position:this.stops[e].position};return new ts(t)}sortColorScaleStops(t){return t.sort(((t,e)=>{const i=t.position,o=e.position;return i<o?-1:i>o?1:0}))}}class es{constructor(t){this.config=Object.assign({},es.defaultPaletteConfig,t),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(t){let e=!1;for(const i in t)this.config[i]&&(this.config[i].equalValue?this.config[i].equalValue(t[i])||(this.config[i]=t[i],e=!0):t[i]!==this.config[i]&&(this.config[i]=t[i],e=!0));return e&&this.updatePaletteColors(),e}updatePaletteColors(){const t=this.generatePaletteColorScale();for(let e=0;e<this.config.steps;e++)this.palette[e]=t.getColor(e/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){const t=Ye(this.config.baseColor),e=new ts([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark);let i=e.getColor(0),o=e.getColor(1);if(t.s>=this.config.saturationAdjustmentCutoff&&(i=Gr(i,this.config.saturationLight),o=Gr(o,this.config.saturationDark)),0!==this.config.multiplyLight){const t=Xr(this.config.baseColor,i);i=Jr(this.config.multiplyLight,this.config.interpolationMode,i,t)}if(0!==this.config.multiplyDark){const t=Xr(this.config.baseColor,o);o=Jr(this.config.multiplyDark,this.config.interpolationMode,o,t)}if(0!==this.config.overlayLight){const t=Kr(this.config.baseColor,i);i=Jr(this.config.overlayLight,this.config.interpolationMode,i,t)}if(0!==this.config.overlayDark){const t=Kr(this.config.baseColor,o);o=Jr(this.config.overlayDark,this.config.interpolationMode,o,t)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new ts([{position:0,color:this.config.baseColor},{position:1,color:o.clamp()}]):this.config.baseScalePosition>=1?new ts([{position:0,color:i.clamp()},{position:1,color:this.config.baseColor}]):new ts([{position:0,color:i.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:o.clamp()}]):new ts([{position:0,color:i.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:o.clamp()}])}}es.defaultPaletteConfig={baseColor:Ie("#808080"),steps:11,interpolationMode:Zr.RGB,scaleColorLight:new Me(1,1,1,1),scaleColorDark:new Me(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},es.greyscalePaletteConfig={baseColor:Ie("#808080"),steps:11,interpolationMode:Zr.RGB,scaleColorLight:new Me(1,1,1,1),scaleColorDark:new Me(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},es.defaultPaletteConfig.scaleColorLight,es.defaultPaletteConfig.scaleColorDark;class is{constructor(t){this.palette=[],this.config=Object.assign({},is.defaultPaletteConfig,t),this.regenPalettes()}regenPalettes(){let t=this.config.steps;(isNaN(t)||t<3)&&(t=3);const e=.14,i=new Me(e,e,e,1),o=new es(Object.assign(Object.assign({},es.greyscalePaletteConfig),{baseColor:i,baseScalePosition:86/94,steps:t})).palette,r=(We(this.config.baseColor)+Ye(this.config.baseColor).l)/2,s=this.matchRelativeLuminanceIndex(r,o)/(t-1),n=this.matchRelativeLuminanceIndex(e,o)/(t-1),a=Ye(this.config.baseColor),l=Ke(ze.fromObject({h:a.h,s:a.s,l:e})),c=Ke(ze.fromObject({h:a.h,s:a.s,l:.06})),h=new Array(5);h[0]={position:0,color:new Me(1,1,1,1)},h[1]={position:s,color:this.config.baseColor},h[2]={position:n,color:l},h[3]={position:.99,color:c},h[4]={position:1,color:new Me(0,0,0,1)};const d=new ts(h);this.palette=new Array(t);for(let e=0;e<t;e++){const i=d.getColor(e/(t-1),Zr.RGB);this.palette[e]=i}}matchRelativeLuminanceIndex(t,e){let i=Number.MAX_VALUE,o=0,r=0;const s=e.length;for(;r<s;r++){const s=Math.abs(We(e[r])-t);s<i&&(i=s,o=r)}return o}}function os(t){return new is({baseColor:t}).palette.map((t=>t.toStringHexRGB().toUpperCase()))}is.defaultPaletteConfig={baseColor:Ie("#808080"),steps:94};const rs=h`
  ${ft("block")};
`,ss=new At("neutral-foreground-rest",to,(t=>t)),ns=h`
  :host {
    background-color: var(--background-color);
    color: ${ss.var};
  }
`.withBehaviors(ss);let as=class extends jr{constructor(){super(...arguments),this.noPaint=!1}noPaintChanged(){this.noPaint||void 0===this.backgroundColor?this.$fastController.removeStyles(ns):this.$fastController.addStyles(ns)}backgroundColorChanged(){this.noPaintChanged()}neutralBaseColorChanged(t,e){const i=Ie(e);i&&(this.neutralPalette=os(i))}accentBaseColorChanged(t,e){const i=Ie(e);i&&(this.accentPalette=os(i))}};t([v({attribute:"no-paint",mode:"boolean"})],as.prototype,"noPaint",void 0),t([qr({attribute:"background-color",default:Mt.backgroundColor})],as.prototype,"backgroundColor",void 0),t([qr({attribute:"neutral-base-color",cssCustomProperty:!1,default:Mt.neutralBaseColor})],as.prototype,"neutralBaseColor",void 0),t([qr({attribute:"accent-base-color",cssCustomProperty:!1,default:Mt.accentBaseColor})],as.prototype,"accentBaseColor",void 0),t([qr({attribute:!1,cssCustomProperty:!1,default:Mt.neutralPalette})],as.prototype,"neutralPalette",void 0),t([qr({attribute:!1,cssCustomProperty:!1,default:Mt.accentPalette})],as.prototype,"accentPalette",void 0),t([qr({default:Mt.density,converter:p})],as.prototype,"density",void 0),t([qr({attribute:"design-unit",converter:p,default:Mt.designUnit})],as.prototype,"designUnit",void 0),t([qr({attribute:"direction",cssCustomProperty:!1,default:Mt.direction})],as.prototype,"direction",void 0),t([qr({attribute:"base-height-multiplier",default:Mt.baseHeightMultiplier,converter:p})],as.prototype,"baseHeightMultiplier",void 0),t([qr({attribute:"base-horizontal-spacing-multiplier",converter:p,default:Mt.baseHorizontalSpacingMultiplier})],as.prototype,"baseHorizontalSpacingMultiplier",void 0),t([qr({attribute:"corner-radius",converter:p,default:Mt.cornerRadius})],as.prototype,"cornerRadius",void 0),t([qr({attribute:"elevated-corner-radius",converter:p,default:Mt.elevatedCornerRadius})],as.prototype,"elevatedCornerRadius",void 0),t([qr({attribute:"outline-width",converter:p,default:Mt.outlineWidth})],as.prototype,"outlineWidth",void 0),t([qr({attribute:"focus-outline-width",converter:p,default:Mt.focusOutlineWidth})],as.prototype,"focusOutlineWidth",void 0),t([qr({attribute:"disabled-opacity",converter:p,default:Mt.disabledOpacity})],as.prototype,"disabledOpacity",void 0),t([qr({attribute:"type-ramp-minus-2-font-size",default:Mt.typeRampMinus2FontSize})],as.prototype,"typeRampMinus2FontSize",void 0),t([qr({attribute:"type-ramp-minus-2-line-height",default:Mt.typeRampMinus2LineHeight})],as.prototype,"typeRampMinus2LineHeight",void 0),t([qr({attribute:"type-ramp-minus-1-font-size",default:Mt.typeRampMinus1FontSize})],as.prototype,"typeRampMinus1FontSize",void 0),t([qr({attribute:"type-ramp-minus-1-line-height",default:Mt.typeRampMinus1LineHeight})],as.prototype,"typeRampMinus1LineHeight",void 0),t([qr({attribute:"type-ramp-base-font-size",default:Mt.typeRampBaseFontSize})],as.prototype,"typeRampBaseFontSize",void 0),t([qr({attribute:"type-ramp-base-line-height",default:Mt.typeRampBaseLineHeight})],as.prototype,"typeRampBaseLineHeight",void 0),t([qr({attribute:"type-ramp-plus-1-font-size",default:Mt.typeRampPlus1FontSize})],as.prototype,"typeRampPlus1FontSize",void 0),t([qr({attribute:"type-ramp-plus-1-line-height",default:Mt.typeRampPlus1LineHeight})],as.prototype,"typeRampPlus1LineHeight",void 0),t([qr({attribute:"type-ramp-plus-2-font-size",default:Mt.typeRampPlus2FontSize})],as.prototype,"typeRampPlus2FontSize",void 0),t([qr({attribute:"type-ramp-plus-2-line-height",default:Mt.typeRampPlus2LineHeight})],as.prototype,"typeRampPlus2LineHeight",void 0),t([qr({attribute:"type-ramp-plus-3-font-size",default:Mt.typeRampPlus3FontSize})],as.prototype,"typeRampPlus3FontSize",void 0),t([qr({attribute:"type-ramp-plus-3-line-height",default:Mt.typeRampPlus3LineHeight})],as.prototype,"typeRampPlus3LineHeight",void 0),t([qr({attribute:"type-ramp-plus-4-font-size",default:Mt.typeRampPlus4FontSize})],as.prototype,"typeRampPlus4FontSize",void 0),t([qr({attribute:"type-ramp-plus-4-line-height",default:Mt.typeRampPlus4LineHeight})],as.prototype,"typeRampPlus4LineHeight",void 0),t([qr({attribute:"type-ramp-plus-5-font-size",default:Mt.typeRampPlus5FontSize})],as.prototype,"typeRampPlus5FontSize",void 0),t([qr({attribute:"type-ramp-plus-5-line-height",default:Mt.typeRampPlus5LineHeight})],as.prototype,"typeRampPlus5LineHeight",void 0),t([qr({attribute:"type-ramp-plus-6-font-size",default:Mt.typeRampPlus6FontSize})],as.prototype,"typeRampPlus6FontSize",void 0),t([qr({attribute:"type-ramp-plus-6-line-height",default:Mt.typeRampPlus6LineHeight})],as.prototype,"typeRampPlus6LineHeight",void 0),t([qr({attribute:"accent-fill-rest-delta",converter:p,cssCustomProperty:!1,default:Mt.accentFillRestDelta})],as.prototype,"accentFillRestDelta",void 0),t([qr({attribute:"accent-fill-hover-delta",converter:p,cssCustomProperty:!1,default:Mt.accentFillHoverDelta})],as.prototype,"accentFillHoverDelta",void 0),t([qr({attribute:"accent-fill-active-delta",cssCustomProperty:!1,converter:p,default:Mt.accentFillActiveDelta})],as.prototype,"accentFillActiveDelta",void 0),t([qr({attribute:"accent-fill-focus-delta",converter:p,cssCustomProperty:!1,default:Mt.accentFillFocusDelta})],as.prototype,"accentFillFocusDelta",void 0),t([qr({attribute:"accent-fill-selected-delta",converter:p,cssCustomProperty:!1,default:Mt.accentFillSelectedDelta})],as.prototype,"accentFillSelectedDelta",void 0),t([qr({attribute:"accent-foreground-rest-delta",converter:p,cssCustomProperty:!1,default:Mt.accentForegroundRestDelta})],as.prototype,"accentForegroundRestDelta",void 0),t([qr({attribute:"accent-foreground-hover-delta",converter:p,cssCustomProperty:!1,default:Mt.accentForegroundHoverDelta})],as.prototype,"accentForegroundHoverDelta",void 0),t([qr({attribute:"accent-foreground-active-delta",converter:p,cssCustomProperty:!1,default:Mt.accentForegroundActiveDelta})],as.prototype,"accentForegroundActiveDelta",void 0),t([qr({attribute:"accent-foreground-focus-delta",converter:p,cssCustomProperty:!1,default:Mt.accentForegroundFocusDelta})],as.prototype,"accentForegroundFocusDelta",void 0),t([qr({attribute:"neutral-fill-rest-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralFillRestDelta})],as.prototype,"neutralFillRestDelta",void 0),t([qr({attribute:"neutral-fill-hover-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralFillHoverDelta})],as.prototype,"neutralFillHoverDelta",void 0),t([qr({attribute:"neutral-fill-active-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralFillActiveDelta})],as.prototype,"neutralFillActiveDelta",void 0),t([qr({attribute:"neutral-fill-focus-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralFillFocusDelta})],as.prototype,"neutralFillFocusDelta",void 0),t([qr({attribute:"neutral-fill-selected-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralFillSelectedDelta})],as.prototype,"neutralFillSelectedDelta",void 0),t([qr({attribute:"neutral-fill-input-rest-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralFillInputRestDelta})],as.prototype,"neutralFillInputRestDelta",void 0),t([qr({attribute:"neutral-fill-input-hover-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralFillInputHoverDelta})],as.prototype,"neutralFillInputHoverDelta",void 0),t([qr({attribute:"neutral-fill-input-active-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralFillInputActiveDelta})],as.prototype,"neutralFillInputActiveDelta",void 0),t([qr({attribute:"neutral-fill-input-focus-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralFillInputFocusDelta})],as.prototype,"neutralFillInputFocusDelta",void 0),t([qr({attribute:"neutral-fill-input-selected-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralFillInputSelectedDelta})],as.prototype,"neutralFillInputSelectedDelta",void 0),t([qr({attribute:"neutral-fill-stealth-rest-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralFillStealthRestDelta})],as.prototype,"neutralFillStealthRestDelta",void 0),t([qr({attribute:"neutral-fill-stealth-hover-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralFillStealthHoverDelta})],as.prototype,"neutralFillStealthHoverDelta",void 0),t([qr({attribute:"neutral-fill-stealth-active-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralFillStealthActiveDelta})],as.prototype,"neutralFillStealthActiveDelta",void 0),t([qr({attribute:"neutral-fill-stealth-focus-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralFillStealthFocusDelta})],as.prototype,"neutralFillStealthFocusDelta",void 0),t([qr({attribute:"neutral-fill-stealth-selected-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralFillStealthSelectedDelta})],as.prototype,"neutralFillStealthSelectedDelta",void 0),t([qr({attribute:"neutral-fill-toggle-hover-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralFillToggleHoverDelta})],as.prototype,"neutralFillToggleHoverDelta",void 0),t([qr({attribute:"neutral-fill-toggle-hover-active",converter:p,cssCustomProperty:!1,default:Mt.neutralFillToggleActiveDelta})],as.prototype,"neutralFillToggleActiveDelta",void 0),t([qr({attribute:"neutral-fill-toggle-hover-focus",converter:p,cssCustomProperty:!1,default:Mt.neutralFillToggleFocusDelta})],as.prototype,"neutralFillToggleFocusDelta",void 0),t([qr({attribute:"base-layer-luminance",converter:p,cssCustomProperty:!1,default:Mt.baseLayerLuminance})],as.prototype,"baseLayerLuminance",void 0),t([qr({attribute:"neutral-fill-card-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralFillCardDelta})],as.prototype,"neutralFillCardDelta",void 0),t([qr({attribute:"neutral-foreground-hover-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralForegroundHoverDelta})],as.prototype,"neutralForegroundHoverDelta",void 0),t([qr({attribute:"neutral-foreground-active-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralForegroundActiveDelta})],as.prototype,"neutralForegroundActiveDelta",void 0),t([qr({attribute:"neutral-foreground-focus-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralForegroundFocusDelta})],as.prototype,"neutralForegroundFocusDelta",void 0),t([qr({attribute:"neutral-divider-rest-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralDividerRestDelta})],as.prototype,"neutralDividerRestDelta",void 0),t([qr({attribute:"neutral-outline-rest-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralOutlineRestDelta})],as.prototype,"neutralOutlineRestDelta",void 0),t([qr({attribute:"neutral-outline-hover-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralOutlineHoverDelta})],as.prototype,"neutralOutlineHoverDelta",void 0),t([qr({attribute:"neutral-outline-active-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralOutlineActiveDelta})],as.prototype,"neutralOutlineActiveDelta",void 0),t([qr({attribute:"neutral-outline-focus-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralOutlineFocusDelta})],as.prototype,"neutralOutlineFocusDelta",void 0),t([qr({attribute:"neutral-contrast-fill-rest-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralContrastFillRestDelta})],as.prototype,"neutralContrastFillRestDelta",void 0),t([qr({attribute:"neutral-contrast-fill-hover-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralContrastFillHoverDelta})],as.prototype,"neutralContrastFillHoverDelta",void 0),t([qr({attribute:"neutral-contrast-fill-active-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralContrastFillActiveDelta})],as.prototype,"neutralContrastFillActiveDelta",void 0),t([qr({attribute:"neutral-contrast-fill-focus-delta",converter:p,cssCustomProperty:!1,default:Mt.neutralContrastFillFocusDelta})],as.prototype,"neutralContrastFillFocusDelta",void 0),as=t([_r({name:"fluent-design-system-provider",template:Wr,styles:rs,shadowOptions:{mode:"closed"}})],as);const ls=Bt("neutral-foreground-rest",(t=>Ji(t).rest),as.findProvider),cs=Bt("neutral-foreground-hover",(t=>Ji(t).hover),as.findProvider),hs=Bt("neutral-foreground-active",(t=>Ji(t).active),as.findProvider),ds=(Bt("neutral-foreground-focus",(t=>Ji(t).focus),as.findProvider),Bt("neutral-foreground-toggle",ao,as.findProvider),Bt("neutral-foreground-toggle-large",lo,as.findProvider),Bt("neutral-foreground-hint",ho,as.findProvider),Bt("neutral-foreground-hint-large",uo,as.findProvider),Bt("accent-foreground-rest",(t=>fo(t).rest),as.findProvider)),us=Bt("accent-foreground-hover",(t=>fo(t).hover),as.findProvider),ps=Bt("accent-foreground-active",(t=>fo(t).active),as.findProvider),fs=(Bt("accent-foreground-focus",(t=>fo(t).focus),as.findProvider),Bt("accent-foreground-cut-rest",(t=>mo(t)),as.findProvider)),vs=(Bt("accent-foreground-large-rest",(t=>vo(t).rest),as.findProvider),Bt("accent-foreground-large-hover",(t=>vo(t).hover),as.findProvider),Bt("accent-foreground-large-active",(t=>vo(t).active),as.findProvider),Bt("accent-foreground-large-focus",(t=>vo(t).focus),as.findProvider),Bt("neutral-fill-rest",(t=>Po(t).rest),as.findProvider)),gs=Bt("neutral-fill-hover",(t=>Po(t).hover),as.findProvider),bs=Bt("neutral-fill-active",(t=>Po(t).active),as.findProvider),ms=Bt("neutral-fill-focus",(t=>Po(t).focus),as.findProvider),ys=(Bt("neutral-fill-selected",(t=>Po(t).selected),as.findProvider),Bt("neutral-fill-stealth-rest",(t=>Bo(t).rest),as.findProvider)),xs=Bt("neutral-fill-stealth-hover",(t=>Bo(t).hover),as.findProvider),Cs=Bt("neutral-fill-stealth-active",(t=>Bo(t).active),as.findProvider),ws=(Bt("neutral-fill-stealth-focus",(t=>Bo(t).focus),as.findProvider),Bt("neutral-fill-stealth-selected",(t=>Bo(t).selected),as.findProvider),Bt("neutral-fill-toggle-rest",(t=>oo(t).rest),as.findProvider),Bt("neutral-fill-toggle-hover",(t=>oo(t).hover),as.findProvider),Bt("neutral-fill-toggle-active",(t=>oo(t).active),as.findProvider),Bt("neutral-fill-toggle-focus",(t=>oo(t).focus),as.findProvider),Bt("neutral-fill-input-rest",(t=>Vo(t).rest),as.findProvider)),$s=Bt("neutral-fill-input-hover",(t=>Vo(t).hover),as.findProvider),ks=(Bt("neutral-fill-input-active",(t=>Vo(t).active),as.findProvider),Bt("neutral-fill-input-focus",(t=>Vo(t).focus),as.findProvider),Bt("accent-fill-rest",(t=>ir(t).rest),as.findProvider)),Fs=Bt("accent-fill-hover",(t=>ir(t).hover),as.findProvider),Ps=Bt("accent-fill-active",(t=>ir(t).active),as.findProvider),Ds=(Bt("accent-fill-focus",(t=>ir(t).focus),as.findProvider),Bt("accent-fill-selected",(t=>ir(t).selected),as.findProvider),Bt("accent-fill-large-rest",(t=>or(t).rest),as.findProvider),Bt("accent-fill-large-hover",(t=>or(t).hover),as.findProvider),Bt("accent-fill-large-active",(t=>or(t).active),as.findProvider),Bt("accent-fill-large-focus",(t=>or(t).focus),as.findProvider),Bt("accent-fill-large-selected",(t=>or(t).selected),as.findProvider),Bt("neutral-fill-card-rest",(t=>sr(t)),as.findProvider)),Ss=Bt("neutral-outline-rest",(t=>nr(t).rest),as.findProvider),Ts=Bt("neutral-outline-hover",(t=>nr(t).hover),as.findProvider),Os=Bt("neutral-outline-active",(t=>nr(t).active),as.findProvider),Rs=(Bt("neutral-outline-focus",(t=>nr(t).focus),as.findProvider),Bt("neutral-divider-rest",ar,as.findProvider),Bt("neutral-layer-floating",wr,as.findProvider),Bt("neutral-layer-card",$r,as.findProvider),Bt("neutral-layer-card-container",kr,as.findProvider),Bt("neutral-layer-l1",Fr,as.findProvider)),Ls=(Bt("neutral-layer-l1-alt",Pr,as.findProvider),Bt("neutral-layer-l2",Dr,as.findProvider),Bt("neutral-layer-l3",Sr,as.findProvider),Bt("neutral-layer-l4",Tr,as.findProvider),Bt("neutral-focus",Rr,as.findProvider)),As=Bt("neutral-focus-inner-accent",(Bs=zt,Yi(Rr)(jt)(function(t){return(e,i,o)=>i.indexOf(t(o))}(Bs))((function(t,e,i){return Wi(i)?1:-1}))(Or)),as.findProvider);var Bs;Bt("neutral-contrast-foreground-rest",(t=>to(Ar)(t)),as.findProvider),Bt("neutral-contrast-fill-rest",(t=>Lr(t).rest),as.findProvider),Bt("neutral-contrast-fill-hover",(t=>Lr(t).hover),as.findProvider),Bt("neutral-contrast-fill-active",(t=>Lr(t).active),as.findProvider),Bt("neutral-contrast-fill-focus",(t=>Lr(t).focus),as.findProvider),Bt("inline-start",(t=>_t(t)===Et.ltr?"left":"right"),as.findProvider),Bt("inline-end",(t=>_t(t)===Et.ltr?"right":"left"),as.findProvider);const Es=h`
    ${ft("inline-flex")} :host {
        font-family: var(--body-font);
        outline: none;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        height: calc(${Lt} * 1px);
        min-width: calc(${Lt} * 1px);
        background-color: ${vs.var};
        color: ${ls.var};
        border-radius: calc(var(--corner-radius) * 1px);
        fill: currentcolor;
        cursor: pointer;
    }

    .control {
        background: transparent;
        height: inherit;
        flex-grow: 1;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 calc((10 + (var(--design-unit) * 2 * var(--density))) * 1px);
        white-space: nowrap;
        outline: none;
        text-decoration: none;
        border: calc(var(--outline-width) * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-family: inherit;
    }

    .control, .end, .start {
        font: inherit;
    }

    .control.icon-only {
        padding: 0;
        line-height: 0;
    }

    :host(:hover) {
        background-color: ${gs.var};
    }

    :host(:active) {
        background-color: ${bs.var};
    }

    .control:${St} {
        border: calc(var(--outline-width) * 1px) solid ${Ls.var};
        box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${Ls.var};
    }

    .control::-moz-focus-inner {
        border: 0;
    }

    :host(.disabled) {
        opacity: var(--disabled-opacity);
        background-color: ${vs.var};
        cursor: ${Tt};
    }

    .start,
    .end {
        display: flex;
    }

    ::slotted(svg) {
        ${""} width: 16px;
        height: 16px;
    }

    .start {
        margin-inline-end: 11px;
    }

    .end {
        margin-inline-start: 11px;
    }
`.withBehaviors(vs,ls,gs,bs,Rt(h`
        :host {
          background-color: ${pt.ButtonFace};
          border-color: ${pt.ButtonText};
          color: ${pt.ButtonText};
          fill: currentcolor;
        }

        :host(:hover) {
          forced-color-adjust: none;
          background-color: ${pt.Highlight};
          color: ${pt.HighlightText};
        }

        .control:${St},
        :host(.outline) .control:${St} {
          forced-color-adjust: none;
          background-color: ${pt.Highlight};
          border-color: ${pt.ButtonText};
          box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${pt.ButtonText};
          color: ${pt.HighlightText};
        }

        .control:hover,
        :host(.outline) .control:hover {
          border-color: ${pt.ButtonText};
        }

        :host(.disabled),
        :host(.disabled) .control {
            forced-color-adjust: none;
            background-color: ${pt.ButtonFace};
            border-color: ${pt.GrayText};
            color: ${pt.GrayText};
            cursor: ${Tt};
            opacity: 1;
        }

        :host([href]) {
          color: ${pt.LinkText};
        }

        :host([href]) .control:hover,
        :host(.outline[href]) .control:hover
        :host(:hover[href]),
        :host([href]) .control:${St}{
          forced-color-adjust: none;
          background: ${pt.ButtonFace};
          border-color: ${pt.LinkText};
          box-shadow: 0 0 0 1px ${pt.LinkText} inset;
          color: ${pt.LinkText};
          fill: currentcolor;
        }
    `)),Ms=h`
    :host(.accent) {
        background: ${ks.var};
        color: ${fs.var};
    }

    :host(.accent:hover) {
        background: ${Fs.var};
    }

    :host(.accent:active) .control:active {
        background: ${Ps.var};
    }

    :host(.accent) .control:${St} {
        box-shadow: 0 0 0 calc(var(--focus-outline-width) * 1px) inset ${As.var}, 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${Ls.var}
    }

    :host(.accent.disabled) {
        background: ${ks.var};
    }
`.withBehaviors(ks,fs,Fs,Ps,As,Rt(h`
        :host(.accent) .control {
            forced-color-adjust: none;
            background: ${pt.Highlight};
            color: ${pt.HighlightText};
        }

        :host(.accent) .control:hover {
            background: ${pt.HighlightText};
            border-color: ${pt.Highlight};
            color: ${pt.Highlight};
        }

        :host(.accent) .control:${St} {
            border-color: ${pt.ButtonText};
            box-shadow: 0 0 0 2px ${pt.HighlightText} inset;
        }

        :host(.accent.disabled) .control,
        :host(.accent.disabled) .control:hover {
            background: ${pt.ButtonFace};
            border-color: ${pt.GrayText};
            color: ${pt.GrayText};
        }

        :host(.accent[href]) .control{
            background: ${pt.LinkText};
            color: ${pt.HighlightText};
        }

        :host(.accent[href]) .control:hover {
            background: ${pt.ButtonFace};
            border-color: ${pt.LinkText};
            box-shadow: none;
            color: ${pt.LinkText};
            fill: currentcolor;
        }

        :host(.accent[href]) .control:${St} {
          border-color: ${pt.LinkText};
          box-shadow: 0 0 0 2px ${pt.HighlightText} inset;
      }
    `)),Hs=(h`
    :host(.hypertext) {
        height: auto;
        font-size: inherit;
        line-height: inherit;
        background: transparent;
        min-width: 0;
    }

    :host(.hypertext) .control {
        display: inline;
        padding: 0;
        border: none;
        box-shadow: none;
        border-radius: 0;
        line-height: 1;
    }
    :host a.control:not(:link) {
        background-color: transparent;
        cursor: default;
    }
    :host(.hypertext) .control:link,
    :host(.hypertext) .control:visited {
        background: transparent;
        color: ${ds.var};
        border-bottom: calc(var(--outline-width) * 1px) solid ${ds.var};
    }
    :host(.hypertext) .control:hover {
        border-bottom-color: ${us.var};
    }
    :host(.hypertext) .control:active {
        border-bottom-color: ${ps.var};
    }
    :host(.hypertext) .control:${St} {
        border-bottom: calc(var(--focus-outline-width) * 1px) solid ${Ls.var};
        margin-bottom: calc(calc(var(--outline-width) - var(--focus-outline-width)) * 1px);
    }
`.withBehaviors(ds,us,ps,Ls,Rt(h`
      :host(.hypertext) .control:${St} {
        color: ${pt.LinkText};
        border-bottom-color: ${pt.LinkText};
      }
    `)),h`
    :host(.lightweight) {
        background: transparent;
        color: ${ds.var};
    }

    :host(.lightweight) .control {
        padding: 0;
        height: initial;
        border: none;
        box-shadow: none;
        border-radius: 0;
    }

    :host(.lightweight:hover) {
        color: ${us.var};
    }

    :host(.lightweight:active) {
        color: ${ps.var};
    }

    :host(.lightweight) .content {
        position: relative;
    }

    :host(.lightweight) .content::before {
        content: "";
        display: block;
        height: calc(var(--outline-width) * 1px);
        position: absolute;
        top: calc(1em + 3px);
        width: 100%;
    }

    :host(.lightweight:hover) .content::before {
        background: ${us.var};
    }

    :host(.lightweight:active) .content::before {
        background: ${ps.var};
    }

    :host(.lightweight) .control:${St} .content::before {
        background: ${ls.var};
        height: calc(var(--focus-outline-width) * 1px);
    }

    :host(.lightweight.disabled) .content::before {
        background: transparent;
    }
`.withBehaviors(ds,us,ps,us,ls,Rt(h`
        :host(.lightweight) .control:hover,
        :host(.lightweight) .control:${St} {
            forced-color-adjust: none;
            background: ${pt.ButtonFace};
            color: ${pt.Highlight};
        }
        :host(.lightweight) .control:hover .content::before,
        :host(.lightweight) .control:${St} .content::before {
            background: ${pt.Highlight};
        }

        :host(.lightweight.disabled) .control {
            forced-color-adjust: none;
            color: ${pt.GrayText};
        }

        :host(.lightweight.disabled) .control:hover .content::before {
            background: none;
        }

        :host(.lightweight[href]) .control:hover,
        :host(.lightweight[href]) .control:${St} {
            background: ${pt.ButtonFace};
            box-shadow: none;
            color: ${pt.LinkText};
        }

        :host(.lightweight[href]) .control:hover .content::before,
        :host(.lightweight[href]) .control:${St} .content::before {
            background: ${pt.LinkText};
        }
    `))),Ns=h`
    :host(.outline) {
        background: transparent;
        border-color: ${Ss.var};
    }

    :host(.outline:hover) {
        border-color: ${Ts.var};
    }

    :host(.outline:active) {
        border-color: ${Os.var};
    }

    :host(.outline) .control {
        border-color: inherit;
    }

    :host(.outline) .control:${St} {
        box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${Ls.var};
        border-color: ${Ls.var};
    }

    :host(.outline.disabled) {
        border-color: ${Ss.var};
    }
`.withBehaviors(Ss,Ts,Os,Ls,Rt(h`
      :host(.outline.disabled) .control {
        border-color: ${pt.GrayText};
      }
    `)),Is=h`
  :host(.stealth) {
    background: ${ys.var};
  }

  :host(.stealth:hover) {
    background: ${xs.var};
  }

  :host(.stealth:active) {
    background: ${Cs.var};
  }

  :host(.stealth.disabled) {
    background: ${ys.var};
  }
`.withBehaviors(ys,xs,Cs,Rt(h`
        :host(.stealth) .control {
            forced-color-adjust: none;
            background-color: none;
            border-color: transparent;
            color: ${pt.ButtonText};
            fill: currentcolor;
        }

        :host(.stealth:hover) .control {
            background-color: ${pt.Highlight};
            border-color: ${pt.Highlight};
            color: ${pt.HighlightText};
            fill: currentcolor;
        }

        :host(.stealth:${St}) .control {
            box-shadow: 0 0 0 1px ${pt.Highlight};
            color: ${pt.HighlightText};
            fill: currentcolor;
        }

        :host(.stealth.disabled) {
          background-color: ${pt.ButtonFace};
        }

        :host(.stealth.disabled) .control {
            background-color: ${pt.ButtonFace};
            border-color: transparent;
            color: ${pt.GrayText};
        }

        :host(.stealth[href]) .control {
            color: ${pt.LinkText};
        }

        :host(.stealth:hover[href]) .control {
            background-color: ${pt.LinkText};
            border-color: ${pt.LinkText};
            color: ${pt.HighlightText};
            fill: currentcolor;
        }

      :host(.stealth:${St}[href]) .control {
          box-shadow: 0 0 0 1px ${pt.LinkText};
          color: ${pt.LinkText};
          fill: currentcolor;
      }
    `)),zs=h`
    ${Es}
:host {
    background: var(--neutral-fill-rest);
    color: var(--neutral-foreground-rest);
    font-family: var(--body-font);
    font-size: var(--type-ramp-base-font-size);
    line-height: var(--type-ramp-base-line-height);
    height: calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px);
    min-width: calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px);
    padding: 0 calc((10 + (var(--design-unit) * 2 * var(--density))) * 1px);
    border-radius: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
:host(:active) {
    background: var(--neutral-fill-active);
}
:host(:hover), :host(:hover) label {
    background: var(--neutral-fill-hover);
    cursor: pointer;
}
:host(.checked) {
    background: var(--accent-fill-rest);
    color: var(--accent-foreground-cut-rest);
}
:host(.checked:active) {
    background: var(--accent-fill-active);
}
:host(.checked:hover), :host(.checked:hover) label {
    background: var(--accent-fill-hover);
}
`.withBehaviors(ks,Ps,Fs,fs,vs,bs,gs,ls);let Vs=class extends E{};var js;Vs=t([D({name:"maloo-radio",template:ut,styles:zs})],Vs),M(Vs,ct),function(t){t.horizontal="horizontal",t.vertical="vertical"}(js||(js={}));const _s=t=>{const e=t.closest("[dir]");return null!==e&&"rtl"===e.dir?Et.rtl:Et.ltr};class qs extends P{constructor(){super(...arguments),this.orientation=js.horizontal,this.isInsideToolbar=!1,this.radioChangeHandler=t=>{const e=t.target;e.checked&&(this.slottedRadioButtons.forEach((t=>{t!==e&&(t.checked=!1,t.setAttribute("tabindex","-1"))})),this.selectedRadio=e,this.value=e.value,e.setAttribute("tabindex","0"),this.focusedRadio=e),t.stopPropagation()},this.moveToRadioByIndex=(t,e)=>{const i=t[e];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach((t=>{t!==i&&t.setAttribute("tabindex","-1")})):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{this.nextElementSibling.focus()},this.moveLeftOffGroup=()=>{this.previousElementSibling.focus()},this.focusOutHandler=t=>{const e=this.slottedRadioButtons,i=t.target,o=null!==i?e.indexOf(i):0,r=this.focusedRadio?e.indexOf(this.focusedRadio):-1;return(0===r&&o===r||r===e.length-1&&r===o)&&(this.selectedRadio?(this.selectedRadio.setAttribute("tabindex","0"),this.focusedRadio=this.selectedRadio,e.forEach((t=>{t!==this.selectedRadio&&t.setAttribute("tabindex","-1")}))):(this.focusedRadio=e[0],this.focusedRadio.setAttribute("tabindex","0"),e.forEach((t=>{t!==this.focusedRadio&&t.setAttribute("tabindex","-1")})))),!0},this.clickHandler=t=>{const e=t.target;if(e){const t=this.slottedRadioButtons;e.checked||0===t.indexOf(e)?(e.setAttribute("tabindex","0"),this.selectedRadio=e):(e.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=e}t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,e,i)=>t===e.length&&this.isInsideToolbar&&39===i,this.shouldMoveOffGroupToTheLeft=(t,e)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&37===e,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const e=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?e.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,e,t.keyCode))this.moveRightOffGroup();else for(i===e.length&&(i=0);i<e.length&&e.length>1;){if(!e[i].disabled){this.moveToRadioByIndex(e,i);break}if(this.focusedRadio&&i===e.indexOf(this.focusedRadio))break;if(i+1>=e.length){if(this.isInsideToolbar)break;i=0}else i+=1}},this.moveLeft=t=>{const e=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?e.indexOf(this.focusedRadio)-1:0,i=i<0?e.length-1:i,this.shouldMoveOffGroupToTheLeft(e,t.keyCode))this.moveLeftOffGroup();else for(;i>=0&&e.length>1;){if(!e[i].disabled){this.moveToRadioByIndex(e,i);break}if(this.focusedRadio&&i===e.indexOf(this.focusedRadio))break;i-1<0?i=e.length-1:i-=1}},this.keydownHandler=t=>{switch(t.keyCode){case 13:this.checkFocusedRadio();break;case 39:case 40:this.direction===Et.ltr?this.moveRight(t):this.moveLeft(t);break;case 37:case 38:this.direction===Et.ltr?this.moveLeft(t):this.moveRight(t)}return 9===t.keyCode||32===t.keyCode}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{this.readOnly?t.readOnly=!0:t.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{this.disabled?t.disabled=!0:t.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{t.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{t.getAttribute("value")===this.value&&(t.checked=!0,this.selectedRadio=t)})),this.$emit("change")}slottedRadioButtonsChanged(t,e){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}connectedCallback(){var t;super.connectedCallback(),this.direction=_s(this),this.setupRadioButtons(),this.parentToolbar=null===(t=this.parentElement)||void 0===t?void 0:t.closest('[role="toolbar"]'),this.isInsideToolbar=void 0!==this.parentToolbar&&null!==this.parentToolbar}disconnectedCallback(){this.slottedRadioButtons.forEach((t=>{t.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const t=this.slottedRadioButtons.filter((t=>t.hasAttribute("checked"))),e=t?t.length:0;e>1&&(t[e-1].checked=!0);let i=!1;if(this.slottedRadioButtons.forEach((t=>{void 0!==this.name&&t.setAttribute("name",this.name),this.disabled&&(t.disabled=!0),this.readOnly&&(t.readOnly=!0),this.value&&this.value===t.getAttribute("value")?(this.selectedRadio=t,this.focusedRadio=t,t.checked=!0,t.setAttribute("tabindex","0"),i=!0):(t.setAttribute("tabindex","-1"),t.checked=!1),t.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const t=this.slottedRadioButtons.filter((t=>t.hasAttribute("checked"))),e=null!==t?t.length:0;if(e>0&&!i){const i=t[e-1];i.checked=!0,this.focusedRadio=i,i.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}t([v({attribute:"readonly",mode:"boolean"})],qs.prototype,"readOnly",void 0),t([v({attribute:"disabled",mode:"boolean"})],qs.prototype,"disabled",void 0),t([v],qs.prototype,"name",void 0),t([v],qs.prototype,"value",void 0),t([v],qs.prototype,"orientation",void 0),t([d.LO],qs.prototype,"childItems",void 0),t([d.LO],qs.prototype,"slottedRadioButtons",void 0);var Ws=i(754);const Gs=lt`
    <template
        role="radiogroup"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        @keydown="${(t,e)=>t.keydownHandler(e.event)}"
        @focusout="${(t,e)=>t.focusOutHandler(e.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${t=>t.orientation===js.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${(0,H.slotted)({property:"slottedRadioButtons",filter:(0,Ws.R)("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,Us=h`
  ${ft("flex")} :host {
    align-items: flex-start;
    margin: calc(var(--design-unit) * 1px) 0;
    flex-direction: column;
  }
  .positioning-region {
    display: flex;
    flex-wrap: nowrap;
  }
  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }
  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }

:host{
    --horizontal-corner-radius: calc(var(--corner-radius) * 1px);
    --vertical-corner-radius: calc(var(--corner-radius) * 1px);
}

::slotted(maloo-radio:first-child) {
    border-radius: var(--horizontal-corner-radius) 0 0 var(--horizontal-corner-radius);
}

::slotted(maloo-radio:last-child) {
    border-radius: 0 var(--horizontal-corner-radius) var(--horizontal-corner-radius) 0;
}

:host([orientation='vertical']) ::slotted(maloo-radio:first-child) {
    border-radius: var(--vertical-corner-radius) var(--vertical-corner-radius) 0 0;
}

:host([orientation='vertical']) ::slotted(maloo-radio:last-child) {
    border-radius: 0 0 var(--vertical-corner-radius) var(--vertical-corner-radius);
}
`;let Xs=class extends qs{};Xs=t([D({name:"maloo-radio-group",template:Gs,styles:Us})],Xs);class Ys{}t([v({attribute:"aria-atomic",mode:"fromView"})],Ys.prototype,"ariaAtomic",void 0),t([v({attribute:"aria-busy",mode:"fromView"})],Ys.prototype,"ariaBusy",void 0),t([v({attribute:"aria-controls",mode:"fromView"})],Ys.prototype,"ariaControls",void 0),t([v({attribute:"aria-current",mode:"fromView"})],Ys.prototype,"ariaCurrent",void 0),t([v({attribute:"aria-describedby",mode:"fromView"})],Ys.prototype,"ariaDescribedby",void 0),t([v({attribute:"aria-details",mode:"fromView"})],Ys.prototype,"ariaDetails",void 0),t([v({attribute:"aria-disabled",mode:"fromView"})],Ys.prototype,"ariaDisabled",void 0),t([v({attribute:"aria-errormessage",mode:"fromView"})],Ys.prototype,"ariaErrormessage",void 0),t([v({attribute:"aria-flowto",mode:"fromView"})],Ys.prototype,"ariaFlowto",void 0),t([v({attribute:"aria-haspopup",mode:"fromView"})],Ys.prototype,"ariaHaspopup",void 0),t([v({attribute:"aria-hidden",mode:"fromView"})],Ys.prototype,"ariaHidden",void 0),t([v({attribute:"aria-invalid",mode:"fromView"})],Ys.prototype,"ariaInvalid",void 0),t([v({attribute:"aria-keyshortcuts",mode:"fromView"})],Ys.prototype,"ariaKeyshortcuts",void 0),t([v({attribute:"aria-label",mode:"fromView"})],Ys.prototype,"ariaLabel",void 0),t([v({attribute:"aria-labelledby",mode:"fromView"})],Ys.prototype,"ariaLabelledby",void 0),t([v({attribute:"aria-live",mode:"fromView"})],Ys.prototype,"ariaLive",void 0),t([v({attribute:"aria-owns",mode:"fromView"})],Ys.prototype,"ariaOwns",void 0),t([v({attribute:"aria-relevant",mode:"fromView"})],Ys.prototype,"ariaRelevant",void 0),t([v({attribute:"aria-roledescription",mode:"fromView"})],Ys.prototype,"ariaRoledescription",void 0);class Ks extends(A(class extends P{constructor(){super(...arguments),this.proxy=document.createElement("input")}})){}class Qs extends Ks{constructor(){super(...arguments),this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;null===(t=this.form)||void 0===t||t.reset()}}formactionChanged(){this.proxy instanceof HTMLElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.type=this.type),"submit"===e&&this.addEventListener("click",this.handleSubmission),"submit"===t&&this.removeEventListener("click",this.handleSubmission),"reset"===e&&this.addEventListener("click",this.handleFormReset),"reset"===t&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type)}get root(){return this.control}}t([v({mode:"boolean"})],Qs.prototype,"autofocus",void 0),t([v({attribute:"form"})],Qs.prototype,"formId",void 0),t([v],Qs.prototype,"formaction",void 0),t([v],Qs.prototype,"formenctype",void 0),t([v],Qs.prototype,"formmethod",void 0),t([v({mode:"boolean"})],Qs.prototype,"formnovalidate",void 0),t([v],Qs.prototype,"formtarget",void 0),t([v],Qs.prototype,"type",void 0),t([d.LO],Qs.prototype,"defaultSlottedContent",void 0);class Zs{}t([v({attribute:"aria-expanded",mode:"fromView"})],Zs.prototype,"ariaExpanded",void 0),t([v({attribute:"aria-pressed",mode:"fromView"})],Zs.prototype,"ariaPressed",void 0),M(Zs,Ys),M(Qs,ct,Zs);const Js=lt`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedBy="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${(0,H.ref)("control")}
    >
        ${dt}
        <span class="content" part="content">
            <slot ${(0,H.slotted)("defaultSlottedContent")}></slot>
        </span>
        ${ht}
    </button>
`,tn=h`
    ${Es}
    ${Ms}
    ${Hs}
    ${Ns}
    ${Is}
`.withBehaviors(Ps,Fs,ks,ps,fs,us,ds,bs,ms,gs,vs,Cs,xs,ys,Ls,As,ls,Os,Ts,Ss);let en=class extends Qs{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter((t=>t.nodeType===Node.ELEMENT_NODE));1===t.length&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}};t([v],en.prototype,"appearance",void 0),en=t([D({name:"fluent-button",template:Js,styles:tn,shadowOptions:{delegatesFocus:!0,mode:"closed"}})],en);class on extends(A(class extends P{constructor(){super(...arguments),this.proxy=document.createElement("input")}})){}var rn;!function(t){t.email="email",t.password="password",t.tel="tel",t.text="text",t.url="url"}(rn||(rn={}));class sn extends on{constructor(){super(...arguments),this.type=rn.text}readOnlyChanged(){this.proxy instanceof HTMLElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&e.SO.queueUpdate((()=>{this.focus()}))}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}}t([v({attribute:"readonly",mode:"boolean"})],sn.prototype,"readOnly",void 0),t([v({mode:"boolean"})],sn.prototype,"autofocus",void 0),t([v],sn.prototype,"placeholder",void 0),t([v],sn.prototype,"type",void 0),t([v],sn.prototype,"list",void 0),t([v({converter:p})],sn.prototype,"maxlength",void 0),t([v({converter:p})],sn.prototype,"minlength",void 0),t([v],sn.prototype,"pattern",void 0),t([v({converter:p})],sn.prototype,"size",void 0),t([v({mode:"boolean"})],sn.prototype,"spellcheck",void 0),t([d.LO],sn.prototype,"defaultSlottedNodes",void 0);class nn{}M(nn,Ys),M(sn,ct,nn);const an=lt`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${(0,H.slotted)({property:"defaultSlottedNodes",filter:function(t,e,i){return t.nodeType===Node.TEXT_NODE&&"string"==typeof t.nodeValue&&!!t.nodeValue.trim().length}})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${dt}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedBy="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${(0,H.ref)("control")}
            />
            ${ht}
        </div>
    </template>
`,ln=h`
    ${ft("inline-block")} :host {
        font-family: var(--body-font);
        outline: none;
        user-select: none;
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        color: ${ls.var};
        background: ${ws.var};
        border-radius: calc(var(--corner-radius) * 1px);
        border: calc(var(--outline-width) * 1px) solid ${Ss.var};
        height: calc(${Lt} * 1px);
    }

    .control {
        -webkit-appearance: none;
        background: transparent;
        border: 0;
        height: calc(100% - 4px);
        width: 100%;
        margin-top: auto;
        margin-bottom: auto;
        border: none;
        padding: 0 calc(var(--design-unit) * 2px + 1px);
        color: ${ls.var};
        font-family: inherit;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
    }

    .control:hover,
    .control:${St},
    .control:disabled,
    .control:active {
        outline: none;
    }

    .label {
        display: block;
        color: ${ls.var};
        cursor: pointer;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        margin-bottom: 4px;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .start,
    .end {
        margin: auto;
        fill: currentcolor;
    }

    ::slotted(svg) {      ${""} width: 16px;
        height: 16px;
    }

    .start {
        margin-inline-start: 11px;
    }

    .end {
        margin-inline-end: 11px;
    }

    :host(:hover:not(.disabled)) .root {
        background: ${$s.var};
        border-color: ${Ts.var};
    }

    :host(:focus-within:not(.disabled)) .root {
        border-color: ${Ls.var};
        box-shadow: 0 0 0 1px ${Ls.var} inset;
    }

    :host(.filled) .root {
        background: ${vs.var};
        border-color: transparent;
    }

    :host(.filled:hover:not(.disabled)) .root {
        background: ${gs.var};
        border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
        cursor: ${Tt};
    }

    :host(.disabled) {
        opacity: var(--disabled-opacity);
    }
`.withBehaviors(gs,$s,ws,vs,Ls,ls,Ts,Ss,Rt(h`
      .root,
      :host(.filled) .root {
        forced-color-adjust: none;
        background: ${pt.Field};
        border-color: ${pt.FieldText};
      }
      :host(:hover:not(.disabled)) .root,
      :host(.filled:hover:not(.disabled)) .root,
      :host(.filled:hover) .root {
        background: ${pt.Field};
        border-color: ${pt.Highlight};
      }
      .start,
      .end {
        fill: ${pt.ButtonText};
      }
      :host(.disabled) {
        opacity: 1;
      }
      :host(.disabled) .root,
      :host(.filled:hover.disabled) .root {
        border-color: ${pt.GrayText};
        background: ${pt.Field};
      }
      :host(:focus-within:enabled) .root {
        border-color: ${pt.Highlight};
        box-shadow: 0 0 0 1px ${pt.Highlight} inset;
      }
      .control {
        color: ${pt.ButtonText};
      }
    `));let cn=class extends sn{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}};t([v],cn.prototype,"appearance",void 0),cn=t([D({name:"fluent-text-field",template:an,styles:ln,shadowOptions:{delegatesFocus:!0,mode:"closed"}})],cn);const hn=lt`
    <slot></slot>
`,dn=h`
  ${ft("block")} :host {
    --elevation: 4;
    display: block;
    contain: content;
    height: var(--card-height, 100%);
    width: var(--card-width, 100%);
    box-sizing: border-box;
    background: var(--background-color);
    border-radius: calc(var(--elevated-corner-radius) * 1px);
    ${"box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))));"}
  }

  :host(:hover) {
    --elevation: 8;
  }

  :host(:focus-within) {
    --elevation: 8;
  }
`.withBehaviors(Ds,Rt(h`
      :host {
        forced-color-adjust: none;
        background: ${pt.Canvas};
        box-shadow: 0 0 0 1px ${pt.CanvasText};
      }
    `));let un=class extends as{cardBackgroundColorChanged(t,e){e?null!==Ie(this.cardBackgroundColor)&&(this.neutralBaseColor=this.cardBackgroundColor,this.backgroundColor=this.cardBackgroundColor):this.provider&&this.provider.designSystem&&this.handleChange(this.provider.designSystem,"backgroundColor")}handleChange(t,e){this.cardBackgroundColor||(this.neutralBaseColor?this.backgroundColor=sr(this.designSystem):this.backgroundColor=sr(t))}connectedCallback(){var t,e;super.connectedCallback();const i=d.y$.getNotifier(null===(t=this.provider)||void 0===t?void 0:t.designSystem);i.subscribe(this,"backgroundColor"),i.subscribe(this,"neutralPalette"),this.handleChange(null===(e=this.provider)||void 0===e?void 0:e.designSystem,"backgroundColor")}};function pn(t,e,i,o){let r=(0,1,s=(t-e)/(i-e),Math.min(Math.max(s,0),1));var s;return o===Et.rtl&&(r=1-r),r}t([v({attribute:"card-background-color"})],un.prototype,"cardBackgroundColor",void 0),un=t([_r({name:"fluent-card",template:hn,styles:dn,shadowOptions:{mode:"closed"}})],un);class fn extends(A(class extends P{constructor(){super(...arguments),this.proxy=document.createElement("input")}})){}var vn;!function(t){t.singleValue="single-value"}(vn||(vn={}));class gn extends fn{constructor(){super(...arguments),this.direction=Et.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=js.horizontal,this.mode=vn.singleValue,this.keypressHandler=t=>{if(9!==t.keyCode&&t.preventDefault(),36===t.keyCode)this.value=`${this.min}`;else if(35===t.keyCode)this.value=`${this.max}`;else if(!t.shiftKey)switch(t.keyCode){case 39:case 38:this.increment();break;case 37:case 40:this.decrement()}},this.setupTrackConstraints=()=>{const t=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=t.bottom,this.trackMinHeight=t.top,this.trackLeft=this.getBoundingClientRect().left,0===this.trackWidth&&(this.trackWidth=1)},this.setupListeners=()=>{this.addEventListener("keydown",this.keypressHandler),this.addEventListener("mousedown",this.handleMouseDown),this.thumb.addEventListener("mousedown",this.handleThumbMouseDown),this.thumb.addEventListener("touchstart",this.handleThumbMouseDown)},this.initialValue="",this.handleThumbMouseDown=t=>{this.readOnly||this.disabled||t.defaultPrevented||(t.preventDefault(),t.target.focus(),window.addEventListener("mouseup",this.handleWindowMouseUp),window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("touchmove",this.handleMouseMove),window.addEventListener("touchend",this.handleWindowMouseUp),this.isDragging=!0)},this.handleMouseMove=t=>{if(this.readOnly||this.disabled||t.defaultPrevented)return;const e=window.TouchEvent&&t instanceof TouchEvent?t.touches[0]:t,i=this.orientation===js.horizontal?e.pageX-this.trackLeft:e.pageY;this.value=`${this.calculateNewValue(i)}`},this.calculateNewValue=t=>{const e=pn(t,this.orientation===js.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===js.horizontal?this.trackWidth:this.trackHeight,this.direction),i=(this.max-this.min)*e+this.min;return this.convertToConstrainedValue(i)},this.handleWindowMouseUp=t=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,window.removeEventListener("mouseup",this.handleWindowMouseUp),window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("touchmove",this.handleMouseMove),window.removeEventListener("touchend",this.handleWindowMouseUp)},this.handleMouseDown=t=>{if(t.preventDefault(),!this.disabled&&!this.readOnly){this.setupTrackConstraints(),t.target.focus(),window.addEventListener("mouseup",this.handleWindowMouseUp),window.addEventListener("mousemove",this.handleMouseMove);const e=this.orientation===js.horizontal?t.pageX-this.trackLeft:t.pageY;this.value=`${this.calculateNewValue(e)}`}},this.convertToConstrainedValue=t=>{isNaN(t)&&(t=this.min);let e=t-this.min;const i=e%Number(this.step);return e=i>=Number(this.step)/2?e-i+Number(this.step):e-i,e+this.min}}readOnlyChanged(){this.proxy instanceof HTMLElement&&(this.proxy.readOnly=this.readOnly)}valueChanged(t,e){super.valueChanged(t,e),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLElement&&(this.proxy.min=`${this.min}`),this.validate}maxChanged(){this.proxy instanceof HTMLElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLElement&&(this.proxy.step=`${this.step}`),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=_s(this),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.removeEventListener("keydown",this.keypressHandler),this.removeEventListener("mousedown",this.handleMouseDown),this.thumb.removeEventListener("mousedown",this.handleThumbMouseDown),this.thumb.removeEventListener("touchstart",this.handleThumbMouseDown)}increment(){const t=this.direction!==Et.rtl&&this.orientation!==js.vertical?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),e=this.convertToConstrainedValue(t),i=e<Number(this.max)?`${e}`:`${this.max}`;this.value=i}decrement(){const t=this.direction!==Et.rtl&&this.orientation!==js.vertical?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),e=this.convertToConstrainedValue(t),i=e>Number(this.min)?`${e}`:`${this.min}`;this.value=i}setThumbPositionForOrientation(t){const e=pn(Number(this.value),Number(this.min),Number(this.max),t),i=Math.round(100*(1-e));this.orientation===js.horizontal?this.position=this.isDragging?`right: ${i}%; transition: none;`:`right: ${i}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${i}%; transition: none;`:`bottom: ${i}%; transition: all 0.2s ease;`}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if("string"==typeof this.value)if(0===this.value.length)this.initialValue=this.midpoint;else{const t=parseFloat(this.value);!Number.isNaN(t)&&(t<this.min||t>this.max)&&(this.value=this.midpoint)}}}t([v({attribute:"readonly",mode:"boolean"})],gn.prototype,"readOnly",void 0),t([d.LO],gn.prototype,"direction",void 0),t([d.LO],gn.prototype,"isDragging",void 0),t([d.LO],gn.prototype,"position",void 0),t([d.LO],gn.prototype,"trackWidth",void 0),t([d.LO],gn.prototype,"trackMinWidth",void 0),t([d.LO],gn.prototype,"trackHeight",void 0),t([d.LO],gn.prototype,"trackLeft",void 0),t([d.LO],gn.prototype,"trackMinHeight",void 0),t([d.LO],gn.prototype,"valueTextFormatter",void 0),t([v({converter:p})],gn.prototype,"min",void 0),t([v({converter:p})],gn.prototype,"max",void 0),t([v({converter:p})],gn.prototype,"step",void 0),t([v],gn.prototype,"orientation",void 0),t([v],gn.prototype,"mode",void 0);const bn=lt`
    <template
        role="slider"
        class="${t=>t.readOnly?"readonly":""}
        ${t=>t.orientation||js.horizontal}"
        tabindex="${t=>t.disabled?null:0}"
        aria-valuetext="${t=>t.valueTextFormatter(t.value)}"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        aria-disabled="${t=>!!t.disabled||void 0}"
        aria-readonly="${t=>!!t.readOnly||void 0}"
        aria-orientation="${t=>t.orientation}"
        class="${t=>t.orientation}"
    >
        <div part="positioning-region" class="positioning-region">
            <div ${(0,H.ref)("track")} part="track-container" class="track">
                <slot name="track"></slot>
            </div>
            <slot></slot>
            <div
                ${(0,H.ref)("thumb")}
                part="thumb-container"
                class="thumb-container"
                style=${t=>t.position}
            >
                <slot name="thumb"><div class="thumb-cursor"></div></slot>
            </div>
        </div>
    </template>
`,mn=h`
    ${ft("inline-grid")} :host {
        --thumb-size: calc(${Lt} * 0.5);
        --thumb-translate: calc(var(--thumb-size) * 0.5);
        --track-overhang: calc((var(--design-unit) / 2) * -1);
        --track-width: var(--design-unit);
        align-items: center;
        width: 100%;
        margin: calc(var(--design-unit) * 1px) 0;
        user-select: none;
        box-sizing: border-box;
        border-radius: calc(var(--corner-radius) * 1px);
        outline: none;
        cursor: pointer;
    }
    :host(.horizontal) .positioning-region {
        position: relative;
        margin: 0 8px;
        display: grid;
        grid-template-rows: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(.vertical) .positioning-region {
        position: relative;
        margin: 0 8px;
        display: grid;
        height: 100%;
        grid-template-columns: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(:${St}) .thumb-cursor {
        box-shadow: 0 0 0 2px var(--background-color), 0 0 0 4px ${Ls.var};
    }
    .thumb-container {
        position: absolute;
        height: calc(var(--thumb-size) * 1px);
        width: calc(var(--thumb-size) * 1px);
        transition: all 0.2s ease;
    }
    .thumb-cursor {
        border: none;
        width: calc(var(--thumb-size) * 1px);
        height: calc(var(--thumb-size) * 1px);
        background: ${ls.var};
        border-radius: 50%;
    }
    .thumb-cursor:hover {
        background: ${cs.var};
        border-color: ${Ts.var};
    }
    .thumb-cursor:active {
        background: ${hs.var};
    }
    :host(.horizontal) .thumb-container {
        transform: translateX(calc(var(--thumb-translate) * 1px));
    }
    :host(.vertical) .thumb-container {
        transform: translateY(calc(var(--thumb-translate) * 1px));
    }
    :host(.horizontal) {
        min-width: calc(var(--thumb-size) * 1px);
    }
    :host(.horizontal) .track {
        right: calc(var(--track-overhang) * 1px);
        left: calc(var(--track-overhang) * 1px);
        align-self: start;
        margin-top: calc((var(--design-unit) + calc(var(--density) + 2)) * 1px);
        height: calc(var(--track-width) * 1px);
    }
    :host(.vertical) .track {
        top: calc(var(--track-overhang) * 1px);
        bottom: calc(var(--track-overhang) * 1px);
        margin-inline-start: calc((var(--design-unit) + calc(var(--density) + 2)) * 1px);
        width: calc(var(--track-width) * 1px);
        height: 100%;
    }
    .track {
        background: ${Ss.var};
        position: absolute;
    }
    :host(.vertical) {
        height: 100%;
        min-height: calc(var(--design-unit) * 60px);
        min-width: calc(var(--design-unit) * 20px);
    }
    :host(.disabled), :host(.readonly) {
        cursor: ${Tt};
    }
    :host(.disabled) {
        opacity: var(--disabled-opacity);
    }
`.withBehaviors(Ls,hs,cs,ls,Ts,Ss,Rt(h`
            .thumb-cursor {
                forced-color-adjust: none;
                border-color: ${pt.FieldText};
                background: ${pt.FieldText};
            }
            .thumb-cursor:hover,
            .thumb-cursor:active {
                background: ${pt.Highlight};
            }
            .track {
                forced-color-adjust: none;
                background: ${pt.FieldText};
            }
            :host(:${St}) .thumb-cursor {
                background: ${pt.Highlight};
                border-color: ${pt.Highlight};
                box-shadow: 0 0 0 2px ${pt.Field}, 0 0 0 4px ${pt.FieldText};
            }
            :host(.disabled) {
                opacity: 1;
            }
            :host(.disabled) .track,
            :host(.disabled) .thumb-cursor {
                forced-color-adjust: none;
                background: ${pt.GrayText};
            }
        `));let yn=class extends gn{};yn=t([D({name:"fluent-slider",template:bn,styles:mn,shadowOptions:{mode:"closed"}})],yn);const xn={min:0,max:0,direction:Et.ltr,orientation:js.horizontal,disabled:!1};class Cn extends P{constructor(){super(...arguments),this.hideMark=!1,this.sliderDirection=Et.ltr,this.getSliderConfiguration=()=>{if(this.isSliderConfig(this.parentNode)){const t=this.parentNode,{min:e,max:i,direction:o,orientation:r,disabled:s}=t;void 0!==s&&(this.disabled=s),this.sliderDirection=o||Et.ltr,this.sliderOrientation=r||js.horizontal,this.sliderMaxPosition=i,this.sliderMinPosition=e}else this.sliderDirection=xn.direction||Et.ltr,this.sliderOrientation=xn.orientation||js.horizontal,this.sliderMaxPosition=xn.max,this.sliderMinPosition=xn.min},this.positionAsStyle=()=>{const t=this.sliderDirection?this.sliderDirection:Et.ltr,e=pn(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition));let i=Math.round(100*(1-e)),o=Math.round(100*e);return o===Number.NaN&&i===Number.NaN&&(i=50,o=50),this.sliderOrientation===js.horizontal?t===Et.rtl?`right: ${o}%; left: ${i}%;`:`left: ${o}%; right: ${i}%;`:`top: ${o}%; bottom: ${i}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=d.y$.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(t,e){switch(e){case"direction":this.sliderDirection=t.direction;break;case"orientation":this.sliderOrientation=t.orientation;break;case"max":this.sliderMinPosition=t.max;break;case"min":this.sliderMinPosition=t.min}this.positionStyle=this.positionAsStyle()}isSliderConfig(t){return void 0!==t.max&&void 0!==t.min}}t([d.LO],Cn.prototype,"positionStyle",void 0),t([v],Cn.prototype,"position",void 0),t([v({attribute:"hide-mark",mode:"boolean"})],Cn.prototype,"hideMark",void 0),t([v({attribute:"disabled",mode:"boolean"})],Cn.prototype,"disabled",void 0),t([d.LO],Cn.prototype,"sliderOrientation",void 0),t([d.LO],Cn.prototype,"sliderMinPosition",void 0),t([d.LO],Cn.prototype,"sliderMaxPosition",void 0),t([d.LO],Cn.prototype,"sliderDirection",void 0);const wn=lt`
    <template
        aria-disabled="${t=>t.disabled}"
        class="${t=>t.sliderOrientation||js.horizontal}
            ${t=>t.disabled?"disabled":""}"
    >
        <div ${(0,H.ref)("root")} part="root" class="root" style="${t=>t.positionStyle}">
            <div class="container">
                ${(0,H.when)((t=>!t.hideMark),lt`
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`,$n=h`
  ${ft("block")} :host {
    font-family: var(--body-font);
  }
  .root {
    position: absolute;
    display: grid;
  }
  :host(.horizontal) {
    align-self: start;
    grid-row: 2;
    margin-top: -2px;
  }
  :host(.vertical) {
    justify-self: start;
    grid-column: 2;
    margin-left: 2px;
  }
  .container {
    display: grid;
    justify-self: center;
  }
  :host(.horizontal) .container {
    grid-template-rows: auto auto;
    grid-template-columns: 0;
  }
  :host(.vertical) .container {
    grid-template-columns: auto auto;
    grid-template-rows: 0;
    min-width: calc(var(--thumb-size) * 1px);
    height: calc(var(--thumb-size) * 1px);
  }
  .label {
    justify-self: center;
    align-self: center;
    white-space: nowrap;
    max-width: 30px;
    margin: 2px 0;
  }
  .mark {
    width: calc((var(--design-unit) / 2) * 1px);
    height: calc(${Lt} * 0.25 * 1px);
    background: ${Ss.var};
    justify-self: center;
  }
  :host(.vertical) .mark {
    transform: rotate(90deg);
    align-self: center;
  }
  :host(.vertical) .label {
    margin-left: calc((var(--design-unit) / 2) * 2px);
    align-self: center;
  }
  :host(.disabled) {
    opacity: var(--disabled-opacity);
  }
`.withBehaviors(Ss,Rt(h`
      .mark {
        forced-color-adjust: none;
        background: ${pt.FieldText};
      }
      :host(.disabled) {
        forced-color-adjust: none;
        opacity: 1;
      }
      :host(.disabled) .label {
        color: ${pt.GrayText};
      }
      :host(.disabled) .mark {
        background: ${pt.GrayText};
      }
    `));let kn=class extends Cn{};var Fn;kn=t([D({name:"fluent-slider-label",template:wn,styles:$n,shadowOptions:{mode:"closed"}})],kn),function(t){t.vertical="vertical",t.horizontal="horizontal"}(Fn||(Fn={}));class Pn extends P{constructor(){super(...arguments),this.orientation=Fn.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>"true"===t.getAttribute("aria-disabled"),this.isFocusableElement=t=>!this.isDisabledElement(t),this.setTabs=()=>{const t=this.isHorizontal()?"gridColumn":"gridRow";this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((e,i)=>{if("tab"===e.slot&&this.isFocusableElement(e)){this.activeindicator&&(this.showActiveIndicator=!0);const t=this.tabIds[i],o=this.tabpanelIds[i];e.setAttribute("id","string"!=typeof t?`tab-${i+1}`:t),e.setAttribute("aria-selected",this.activeTabIndex===i?"true":"false"),e.setAttribute("aria-controls","string"!=typeof o?`panel-${i+1}`:o),e.addEventListener("click",this.handleTabClick),e.addEventListener("keydown",this.handleTabKeyDown),e.setAttribute("tabindex",this.activeTabIndex===i?"0":"-1"),this.activeTabIndex===i&&(this.activetab=e)}e.style[t]=`${i+1}`,this.isHorizontal()?e.classList.remove("vertical"):e.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.tabpanels.forEach(((t,e)=>{const i=this.tabIds[e],o=this.tabpanelIds[e];t.setAttribute("id","string"!=typeof o?`panel-${e+1}`:o),t.setAttribute("aria-labelledby","string"!=typeof i?`tab-${e+1}`:i),this.activeTabIndex!==e?t.setAttribute("hidden",""):t.removeAttribute("hidden")}))},this.handleTabClick=t=>{const e=t.currentTarget;1===e.nodeType&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{const e=t.keyCode;if(this.isHorizontal())switch(e){case 37:t.preventDefault(),this.adjustBackward(t);break;case 39:t.preventDefault(),this.adjustForward(t)}else switch(e){case 38:t.preventDefault(),this.adjustBackward(t);break;case 40:t.preventDefault(),this.adjustForward(t)}switch(e){case 36:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case 35:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=t=>{const e=this.tabs;let i=0;for(i=this.activetab?e.indexOf(this.activetab)+1:1,i===e.length&&(i=0);i<e.length&&e.length>1;){if(this.isFocusableElement(e[i])){this.moveToTabByIndex(e,i);break}if(this.activetab&&i===e.indexOf(this.activetab))break;i+1>=e.length?i=0:i+=1}},this.adjustBackward=t=>{const e=this.tabs;let i=0;for(i=this.activetab?e.indexOf(this.activetab)-1:0,i=i<0?e.length-1:i;i>=0&&e.length>1;){if(this.isFocusableElement(e[i])){this.moveToTabByIndex(e,i);break}i-1<0?i=e.length-1:i-=1}},this.moveToTabByIndex=(t,e)=>{const i=t[e];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,i.focus(),this.setComponent()}}activeidChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((t=>t.getAttribute("id")))}getTabPanelIds(){return this.tabpanels.map((t=>t.getAttribute("id")))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.change(),this.setTabs(),this.handleActiveIndicatorPosition(),this.setTabPanels(),this.focusTab(),this.change())}isHorizontal(){return this.orientation===Fn.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",o=this.activeIndicatorRef[i];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const r=this.activeIndicatorRef[i];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`;const s=r-o;this.activeIndicatorRef.style.transform=`${e}(${s}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${e}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(t){var e,i;this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=(0,e=this.tabs.length-1,(i=this.activeTabIndex+t)<0?e:i>e?0:i),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}t([v],Pn.prototype,"orientation",void 0),t([v],Pn.prototype,"activeid",void 0),t([d.LO],Pn.prototype,"tabs",void 0),t([d.LO],Pn.prototype,"tabpanels",void 0),t([v({mode:"boolean"})],Pn.prototype,"activeindicator",void 0),t([d.LO],Pn.prototype,"activeIndicatorRef",void 0),t([d.LO],Pn.prototype,"showActiveIndicator",void 0),M(Pn,ct);const Dn=lt`
    <template class="${t=>t.orientation}">
        ${dt}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${(0,H.slotted)("tabs")}></slot>

            ${(0,H.when)((t=>t.showActiveIndicator),lt`
                    <div
                        ${(0,H.ref)("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${ht}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${(0,H.slotted)("tabpanels")}></slot>
        </div>
    </template>
`,Sn=h`
  ${ft("grid")} :host {
    box-sizing: border-box;
    font-family: var(--body-font);
    font-size: var(--type-ramp-base-font-size);
    line-height: var(--type-ramp-base-line-height);
    color: ${ls.var};
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto 1fr;
  }

  .tablist {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto;
    position: relative;
    width: max-content;
    align-self: end;
  }

  .start,
  .end {
    align-self: center;
  }

  .activeIndicator {
    grid-row: 2;
    grid-column: 1;
    width: 20px;
    height: 3px;
    border-radius: calc(var(--corner-radius) * 1px);
    justify-self: center;
    background: ${ks.var};
  }

  .activeIndicatorTransition {
    transition: transform 0.2s ease-in-out;
  }

  .tabpanel {
    grid-row: 2;
    grid-column-start: 1;
    grid-column-end: 4;
    position: relative;
  }

  :host(.vertical) {
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto 1fr;
  }

  :host(.vertical) .tablist {
    grid-row-start: 2;
    grid-row-end: 2;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto 1fr;
    position: relative;
    width: max-content;
    justify-self: end;
    width: 100%;
  }

  :host(.vertical) .tabpanel {
    grid-column: 2;
    grid-row-start: 1;
    grid-row-end: 4;
  }

  :host(.vertical) .end {
    grid-row: 3;
  }

  :host(.vertical) .activeIndicator {
    grid-column: 1;
    grid-row: 1;
    width: 3px;
    height: 20px;
    border-radius: calc(var(--corner-radius) * 1px);
    align-self: center;
    background: ${ks.var};
  }

  :host(.vertical) .activeIndicatorTransition {
    transition: transform 0.2s linear;
  }
`.withBehaviors(ks,ls,Rt(h`
      .activeIndicator,
      :host(.vertical) .activeIndicator {
        forced-color-adjust: none;
        background: ${pt.Highlight};
      }
    `));let Tn=class extends Pn{};Tn=t([D({name:"fluent-tabs",template:Dn,styles:Sn,shadowOptions:{mode:"closed"}})],Tn);class On extends P{}t([v({mode:"boolean"})],On.prototype,"disabled",void 0);const Rn=lt`
    <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
        <slot></slot>
    </template>
`,Ln=h`
    ${ft("inline-flex")} :host {
        box-sizing: border-box;
        font-family: var(--body-font);
        ${""} font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        height: calc(${Lt} * 1px);
        padding: 0 calc((6 + (var(--design-unit) * 2 * var(--density))) * 1px);
        color: ${ls.var};
        border-radius: calc(var(--corner-radius) * 1px);
        border: calc(var(--outline-width) * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1;
        cursor: pointer;
    }

    :host([aria-selected="true"]) {
        z-index: 2;
    }

    :host(:hover) {
        color: ${cs.var};
    }

    :host(:active) {
        color: ${hs.var};
    }

    :host(:${St}) {
        outline: none;
        border: calc(var(--outline-width) * 1px) solid ${Ls.var};
        box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px)
            ${Ls.var};
    }

    :host(:focus) {
        outline: none;
    }

    :host(.vertical) {
        justify-content: end;
        grid-column: 2
    }

    :host(.vertical[aria-selected="true"]) {
        z-index: 2;
    }

    :host(.vertical:hover) {
        color: ${cs.var};
    }

    :host(.vertical:active) {
        color: ${hs.var};
    }

    :host(.vertical:hover[aria-selected="true"]) {
    }
`.withBehaviors(Ls,ls,cs,hs,Rt(h`
            :host {
                forced-color-adjust: none;
                border-color: transparent;
                color: ${pt.ButtonText};
                fill: currentcolor;
            }
            :host(:hover),
            :host(.vertical:hover),
            :host([aria-selected="true"]:hover) {
                background: ${pt.Highlight};
                color: ${pt.HighlightText};
                fill: currentcolor;
            }
            :host([aria-selected="true"]) {
                background: ${pt.HighlightText};
                color: ${pt.Highlight};
                fill: currentcolor;
            }
            :host(:${St}) {
                border-color: ${pt.ButtonText};
                box-shadow: none;
            }
        `));let An=class extends On{};An=t([D({name:"fluent-tab",template:Rn,styles:Ln,shadowOptions:{mode:"closed"}})],An);class Bn extends P{}const En=lt`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,Mn=h`
  ${ft("flex")} :host {
    box-sizing: border-box;
    font-family: var(--body-font);
    ${""} font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    padding: 0 calc((6 + (var(--design-unit) * 2 * var(--density))) * 1px);
  }
`;let Hn=class extends Bn{};function Nn(t){return t.event.target.value}Hn=t([D({name:"fluent-tab-panel",template:En,styles:Mn,shadowOptions:{mode:"closed"}})],Hn);const In=lt`
  <fluent-card>
      <fluent-tabs id="myTab" activeId="TabOne">
        <fluent-tab id="TabOne"><h2>Adaptive UI</h2></fluent-tab>
        <fluent-tab-panel id="TabPanelOne">
        <div class="row">
            <h4>Corner Radius: ${t=>{var e;return null===(e=t.provider)||void 0===e?void 0:e.cornerRadius}}px</h4>
            <fluent-slider
                orientation="horizontal"
                min="0"
                max="50"
                step="1"
                value=${t=>{var e;return null===(e=t.provider)||void 0===e?void 0:e.cornerRadius}}
                @change=${(t,e)=>t.provider.cornerRadius=Nn(e)}
            >
                <fluent-slider-label position="0">0px</fluent-slider-label>
                <fluent-slider-label position="50">50px</fluent-slider-label>
            </fluent-slider>
        </div>

        <div class="row">
            <h4>Disabled Opacity: ${t=>{var e;return null===(e=t.provider)||void 0===e?void 0:e.disabledOpacity}}%</h4>
            <fluent-slider
                orientation="horizontal"
                min="0"
                max="1"
                step="0.01"
                value=${t=>{var e;return null===(e=t.provider)||void 0===e?void 0:e.disabledOpacity}}
                @change=${(t,e)=>t.provider.disabledOpacity=parseFloat(Nn(e)).toFixed(2)}
            >
                <fluent-slider-label position="0">0%</fluent-slider-label>
                <fluent-slider-label position="100">100%</fluent-slider-label>
            </fluent-slider>
        </div>

        <div class="row">
            <h4>Base Layer Luminance: ${t=>{var e;return null===(e=t.provider)||void 0===e?void 0:e.baseLayerLuminance}}</h4>
            <fluent-slider
                orientation="horizontal"
                min="0"
                max="1"
                step="0.01"
                value=${t=>{var e;return parseFloat(null===(e=t.provider)||void 0===e?void 0:e.baseLayerLuminance)}}
                @change=${(t,e)=>{t.provider.baseLayerLuminance=parseFloat(Nn(e)).toFixed(2),t.provider.backgroundColor=Rs.value(Object.assign({},t.provider.designSystem))}}
            >
                <fluent-slider-label position="0">Black</fluent-slider-label>
                <fluent-slider-label position="0.23">Dark</fluent-slider-label>
                <fluent-slider-label position="1">Light</fluent-slider-label>
            </fluent-slider>
        </div>

        <div class="row tight">
            <h4>Accent Color</h4>
            <input
                type="color"
                value=${t=>{var e;return null===(e=t.provider)||void 0===e?void 0:e.accentBaseColor}}
                @input=${(t,e)=>{var i;t.provider.accentBaseColor=Nn(e),t.provider.accentPalette=(i=Mi(Nn(e)),new is({baseColor:i}).palette.map((t=>t.toStringHexRGB().toUpperCase())))}}
            />
        </div>

        <div class="row tight">
            <h4>Density</h4>
            <fluent-text-field
                type="number"
                value=${t=>{var e;return null===(e=t.provider)||void 0===e?void 0:e.density}}
                @change=${(t,e)=>t.provider.density=Nn(e)}
            ></fluent-text-field>
        </div>

        <div class="row tight">
            <h4>Design Unit</h4>
            <fluent-text-field
                type="number"
                value=${t=>{var e;return null===(e=t.provider)||void 0===e?void 0:e.designUnit}}
                @change=${(t,e)=>t.provider.designUnit=Nn(e)}
            ></fluent-text-field>
        </div>

        <div class="row tight">
            <h4>Outline Width</h4>
            <fluent-text-field
                type="number"
                value=${t=>{var e;return null===(e=t.provider)||void 0===e?void 0:e.outlineWidth}}
                @input=${(t,e)=>t.provider.outlineWidth=Nn(e)}
            ></fluent-text-field>
        </div>

        <div class="row tight">
            <h4>Focus Outline Width</h4>
            <fluent-text-field
                type="number"
                value=${t=>{var e;return null===(e=t.provider)||void 0===e?void 0:e.focusOutlineWidth}}
                @input=${(t,e)=>t.provider.focusOutlineWidth=Nn(e)}
            ></fluent-text-field>
        </div>
      </fluent-tab-panel>
    </fluent-tabs>
  </fluent-card>
`,zn=h`
  ${h`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0px;
  }

  h1 {
    font-size: var(--type-ramp-plus-5-font-size);
    line-height: var(--type-ramp-plus-5-line-height);
  }

  h2 {
    font-size: var(--type-ramp-plus-3-font-size);
    line-height: var(--type-ramp-plus-3-line-height);
  }

  h4 {
    font-size: var(--type-ramp-plus-1-font-size);
    line-height: var(--type-ramp-plus-1-line-height);
  }

  .list-text {
    font-size: var(--type-ramp-plus-2-font-size);
    line-height: var(--type-ramp-plus-2-line-height);
  }
`} 
  
  :host {
      position: fixed;
      top: 0px;
      right: 0px;
      z-index: 999;
      height: 100%;
  }

  fluent-card {
      --card-width: 300px;
      border-radius: 0px;
      padding: 4px 16px;
  }

  fluent-tab-panel {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
  }

  .row {
      margin-bottom: 48px;
  }

  .tight {
      margin-bottom: 16px;
  }
`;let Vn=class extends P{providerChanged(){this.provider.registerCSSCustomProperty(Rs),this.provider.style.setProperty("background-color",`var(--${Rs.name})`),this.provider.backgroundColor=Rs.value(this.provider.designSystem),this.provider.baseLayerLuminance=1}connectedCallback(){this.provider=this.parentElement,super.connectedCallback()}};t([d.LO],Vn.prototype,"provider",void 0),Vn=t([D({name:"design-property-panel",template:In,styles:zn})],Vn)})()})();