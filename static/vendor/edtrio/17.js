(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{147:function(t,e,n){var r=n(155);t.exports=r.call(Function.call,Object.prototype.hasOwnProperty)},154:function(t,e,n){"use strict";var r=Array.prototype.slice,o=Object.prototype.toString;t.exports=function(t){var e=this;if("function"!=typeof e||"[object Function]"!==o.call(e))throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var n,i=r.call(arguments,1),u=Math.max(0,e.length-i.length),a=[],c=0;c<u;c++)a.push("$"+c);if(n=Function("binder","return function ("+a.join(",")+"){ return binder.apply(this,arguments); }")((function(){if(this instanceof n){var o=e.apply(this,i.concat(r.call(arguments)));return Object(o)===o?o:this}return e.apply(t,i.concat(r.call(arguments)))})),e.prototype){var l=function(){};l.prototype=e.prototype,n.prototype=new l,l.prototype=null}return n}},155:function(t,e,n){"use strict";var r=n(154);t.exports=Function.prototype.bind||r},323:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e})(n(0)),o=c(n(1)),i=(c(n(147)),c(n(342))),u=n(339),a=(n(340),n(42));function c(t){return t&&t.__esModule?t:{default:t}}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){return (function(t){if(Array.isArray(t))return t})(t)||(function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n})(t,e)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")})()}function f(t){return (function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}})(t)||(function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)})(t)||(function(){throw new TypeError("Invalid attempt to spread non-iterable instance")})()}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t})(t):e}var h=(function(t){function e(t){var n;return (function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,e),(n=y(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))).state={valid:null,userChoice:[]},n}var n,o,c;return (function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)})(e,r.PureComponent),n=e,(o=[{key:"validate",value:function(){var t=this;this.setState({valid:this.props.content.solution.every((function(e){return t.state.userChoice.includes(e)}))&&this.props.content.solution.length===this.state.userChoice.length})}},{key:"toggleChoice",value:function(t){this.setState({valid:null});var e=this.state.userChoice.findIndex((function(e){return e===t})),n=f(this.state.userChoice);e>-1?n=this.state.userChoice.filter((function(e){return e!==t})):n.push(t),this.setState({userChoice:n})}},{key:"render",value:function(){var t=this,e=this.props.content,n=e.question,o=e.choices;e.solution;return r.default.createElement("span",null,r.default.createElement("p",{className:i.default.question},n),Object.entries(o).map((function(e){var n=s(e,2),o=n[0],i=n[1].label;return r.default.createElement("div",{key:o},r.default.createElement(u.Checkbox,{onClick:function(){return t.toggleChoice(+o)}},i))})),r.default.createElement(a.ValidatorButton,{onClick:function(){return t.validate()},valid:this.state.valid}))}}])&&p(n.prototype,o),c&&p(n,c),e})();Object.defineProperty(h,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{content:o.default.object.isRequired}});var b=h;e.default=b},342:function(t,e,n){t.exports={question:"md7Lq9d9PQ2JrWhhOTLpD",addOption:"IMyq4CFRkHDXALEk01H81"}}}]);