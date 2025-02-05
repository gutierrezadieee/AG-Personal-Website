function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"==_typeof(e)?e:e+""}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);n=n.call(e,t||"default");if("object"!=_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}function _callSuper(e,t,n){return t=_getPrototypeOf(t),_possibleConstructorReturn(e,_isNativeReflectConstruct()?Reflect.construct(t,n||[],_getPrototypeOf(e).constructor):t.apply(e,n))}function _possibleConstructorReturn(e,t){if(t&&("object"==_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}window.addEventListener("DOMContentLoaded",function(){var t=(()=>{function e(){return _classCallCheck(this,e),_callSuper(this,e,arguments)}return _inherits(e,elementorModules.frontend.handlers.Base),_createClass(e,[{key:"bindEvents",value:function(){var e,t=this;["","simple-sticky","mask-reveal",void 0].includes(this.getElementSettings("uicore_onscroll_effect"))||(e=this.$element.hasClass("e-con-boxed")?this.$element.find("> .e-con-inner > .e-con"):this.$element.find("> .e-con"),e=this.init(e),window.addEventListener("scroll",function(r){var o,i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,l=!(2<arguments.length&&void 0!==arguments[2])||arguments[2];return function(){var e=this,t=arguments,n=l&&!o;clearTimeout(o),o=setTimeout(function(){o=null,l||r.apply(e,t)},i),n&&r.apply(e,t)}}(function(){return t.handleScroll(e)})),this.handleScroll(e)),this.addCss()}},{key:"onElementChange",value:function(e){"uicore_onscroll_effect"===e&&this.addCss()}},{key:"addCss",value:function(){var e,t=this.$element.attr("data-id"),n=(document.getElementById("uicore-onscroll-".concat(t))&&document.getElementById("uicore-onscroll-".concat(t)).remove(),document.getElementById("uicore-onscroll-sticky-".concat(t))&&document.getElementById("uicore-onscroll-sticky-".concat(t)).remove(),null);"mask-reveal"===this.getElementSettings("uicore_onscroll_effect")?((n=document.createElement("style")).id="uicore-onscroll-".concat(t),e=elementorFrontend.isEditMode()?"#ffffff24":"transparent",n.innerHTML="\n                    .elementor-element-".concat(t,"{\n                        min-height: var(--ui-e-onscroll-reveal-height,170vh);\n                        display: block;\n                        -webkit-mask-image: radial-gradient(circle at 50% 98%,white 37%,").concat(e," 50%);\n                        mask-image:radial-gradient(circle at 50% 98%,white 37%,").concat(e," 50%)\n                    }\n                    .elementor-element-").concat(t," > .e-con-inner{\n                        position:sticky;\n                        height:auto;\n                        top:var(--ui-e-onscroll-offset,0px);\n                    }\n                ")):["",void 0].includes(this.getElementSettings("uicore_onscroll_effect"))||((n=document.createElement("style")).id="uicore-onscroll-sticky-".concat(t),n.innerHTML="\n                .elementor-element-".concat(t,".e-con-boxed > .e-con-inner > *,\n                .elementor-element-").concat(t,".e-con-full > * {\n                    position:sticky;\n                    top:calc(var(--ui-e-onscroll-offset,0px) + calc(var(--ui-e-onscroll-items-offset) * var(--item-index)));\n                    margin-top:var(--ui-e-onscroll-items-offset,0px);\n                    transition-timing-function: cubic-bezier(0.17, 1.1, 0.42, 1) !important;\n                    transition: background var(--background-transition, .3s), border var(--border-transition, .3s), box-shadow var(--border-transition, .3s), transform var(--e-con-transform-transition-duration, 1s);\n                }\n                ")),n&&document.head.appendChild(n)}},{key:"handleScroll",value:function(i){var l=this,a=this.getAnimationOptions(),s=a.offsetPercentage||10,c=a.offsetEndPercentage||10,u=a.nextElementOffsetPercentage||10,f=a.intensity||1,m=window.innerHeight;i.forEach(function(e,t){var n=l.calculateScrollProgress(e,m,s,c),r=t===i.length-1||t===i.length-2,o=l.calculateNextElementProgress(i,t,m,u);l.applyTransformations(e,t,i.length,r,n,o,f,a,i.length)})}},{key:"calculateScrollProgress",value:function(e,t,n,r){var e=e.getBoundingClientRect(),o=e.height,e=e.top+document.documentElement.scrollTop,t=e-t+o*n/100;return Math.max(0,Math.min(1,(document.documentElement.scrollTop-t)/(e+o-o*r/100-t)))}},{key:"calculateNextElementProgress",value:function(e,t,n,r){var o=0;return t<e.length-1&&(t=(e=e[t+1].getBoundingClientRect()).height,n=(e=e.top+document.documentElement.scrollTop)-n+t*r/100,o=Math.max(0,Math.min(1,(document.documentElement.scrollTop-n)/(e+t-n)))),o}},{key:"applyTransformations",value:function(t,l,a,n,s,c,u,f,m){var d=f.excludeFromLast||[],p=f.useNextElementProgress||[];Object.keys(f.end).forEach(function(r){var o,i,e;n&&d.includes(r)||(o=(f.start&&f.start[r]?f.start:f.end)[r],i=f.end[r],e="object"===_typeof(o)&&"object"===_typeof(i)&&null==o.value&&null==i.value?Object.keys(o).map(function(e){var t=o[e],n=t.value,t=t.unit,n=parseFloat(n),n=(parseFloat(i[e].value)-n)*(p.includes(r)?c:s)*Math.pow(u,a-1-l)+n;return"".concat(e,"(").concat(n).concat(t,")")}).join(" "):(e=parseFloat(o.value),e=(parseFloat(i.value)-e)*(p.includes(r)&&1<m?c:s)*Math.pow(u,a-1-l)+e,"".concat(e).concat(o.unit)),t.style.setProperty(r,e))})}},{key:"init",value:function(e){e=Array.from(e);var t,n,r,o={};return"sticky-scale-alt"===this.getElementSettings("uicore_onscroll_effect")?o["transform-origin"]="center bottom":["sticky-mask","sticky-mask-grow"].includes(this.getElementSettings("uicore_onscroll_effect"))&&(o["clip-path"]="inset(0 var(--ui-e-onscroll-path,0%) round var(--ui-e-onscroll-path-radius,0))"),e.forEach(function(t,e){t.style.setProperty("--item-index",e),Object.keys(o).forEach(function(e){t.style[e]=o[e]})}),1<e.length&&(n=(t=e[e.length-1]).getBoundingClientRect().height,(r=document.createElement("div")).classList=t.classList,r.style.height="".concat(n,"px"),r.style.opacity=0,t.after(r),e.push(r)),e}},{key:"getAnimationOptions",value:function(){switch(this.getElementSettings("uicore_onscroll_effect")){case"sticky-scale":return{start:{filter:{brightness:{value:"100",unit:"%"},contrast:{value:"100",unit:"%"}},transform:{scale:{value:"1",unit:""}}},end:{filter:{brightness:{value:"93",unit:"%"},contrast:{value:"105",unit:"%"}},transform:{scale:{value:"0.9",unit:""}}},excludeFromLast:["filter"],useNextElementProgress:["transform","filter"],intensity:1.3,offsetPercentage:70};case"sticky-scale-small":return{start:{filter:{brightness:{value:"100",unit:"%"},contrast:{value:"100",unit:"%"}},transform:{scale:{value:"1",unit:""}}},end:{filter:{brightness:{value:"96",unit:"%"},contrast:{value:"103",unit:"%"}},transform:{scale:{value:"0.9",unit:""}}},excludeFromLast:["filter"],useNextElementProgress:["transform","filter"],intensity:1.5,offsetPercentage:90,nextElementOffsetPercentage:90};case"sticky-scale-alt":return{start:{filter:{brightness:{value:"100",unit:"%"},contrast:{value:"100",unit:"%"}},transform:{scale:{value:"1",unit:""}}},end:{filter:{brightness:{value:"97",unit:"%"},contrast:{value:"105",unit:"%"}},transform:{scale:{value:"0.95",unit:""}}},excludeFromLast:["filter"],useNextElementProgress:["transform","filter"],intensity:1.4,offsetPercentage:70};case"sticky-scale-blur":return{start:{filter:{brightness:{value:"100",unit:"%"},contrast:{value:"100",unit:"%"},blur:{value:"0",unit:"px"}},transform:{scale:{value:"1",unit:""}}},end:{filter:{brightness:{value:"93",unit:"%"},contrast:{value:"105",unit:"%"},blur:{value:"3",unit:"px"}},transform:{scale:{value:"0.9",unit:""}}},excludeFromLast:["filter"],useNextElementProgress:["transform","filter"],intensity:1.2,offsetPercentage:80};case"sticky-scale-blur-small":return{start:{filter:{brightness:{value:"100",unit:"%"},contrast:{value:"100",unit:"%"},blur:{value:"0",unit:"px"}},transform:{scale:{value:"1",unit:""}}},end:{filter:{brightness:{value:"93",unit:"%"},contrast:{value:"105",unit:"%"},blur:{value:"2",unit:"px"}},transform:{scale:{value:"0.9",unit:""}}},excludeFromLast:["filter"],useNextElementProgress:["transform","filter"],intensity:1.3,offsetPercentage:80,nextElementOffsetPercentage:90};case"sticky-parallax":return{start:{filter:{brightness:{value:"100",unit:"%"},contrast:{value:"100",unit:"%"}},transform:{translateY:{value:"0",unit:"%"}}},end:{filter:{brightness:{value:"98",unit:"%"},contrast:{value:"102",unit:"%"}},transform:{translateY:{value:"-20",unit:"%"}}},excludeFromLast:["filter"],useNextElementProgress:["transform","filter"],intensity:1.3,offsetPercentage:70};case"sticky-mask":return{start:{"--ui-e-onscroll-path":{value:"0",unit:"%"},"--ui-e-onscroll-path-radius":{value:"0",unit:"px"}},end:{"--ui-e-onscroll-path":{value:"14",unit:"%"},"--ui-e-onscroll-path-radius":{value:"30",unit:"px"}},useNextElementProgress:["--ui-e-onscroll-path","--ui-e-onscroll-path-radius"],intensity:1.3,offsetPercentage:80};case"sticky-mask-grow":return{start:{"--ui-e-onscroll-path":{value:"5",unit:"%"},"--ui-e-onscroll-path-radius":{value:"20",unit:"px"}},end:{"--ui-e-onscroll-path":{value:"0",unit:"%"},"--ui-e-onscroll-path-radius":{value:"0",unit:"px"}},useNextElementProgress:["--ui-e-onscroll-path","--ui-e-onscroll-path-radius"],intensity:4,offsetPercentage:1,offsetEndPercentage:85};default:return{}}}}])})();jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/container",function(e){elementorFrontend.elementsHandler.addHandler(t,{$element:e})})})},!1);