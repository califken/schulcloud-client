(window.webpackJsonp=window.webpackJsonp||[]).push([[13,18],{153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t})(n(0)),o=(n(36),a(n(1))),u=a(n(111));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e})(e):t}var s=(function(e){function t(e){var n;return (function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,t),(n=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state={lx:"XXX",ly:"YYY"},n}var n,o,a;return (function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,r.Component),n=t,(o=[{key:"shouldComponentUpdate",value:function(e,t){return e.isEditable&&!(0,u.default)(this.state,t)}},{key:"componentDidMount",value:function(){this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},this.props.content))}},{key:"handleChange",value:function(e){var t=this;this.setState(i({},e.target.name,e.target.value),(function(){t.props.saveContent(t.state)}))}},{key:"render",value:function(){var e=this,t=this.props.isEditable;return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",null,"unstyled"),r.default.createElement("h2",null,"Static dummy text plugin"),r.default.createElement("div",null,"Editable: ".concat(t)),r.default.createElement("input",{autoFocus:!0,type:"text",name:"lx",value:this.state.lx,onChange:function(t){return e.handleChange(t)}}),r.default.createElement("input",{type:"text",name:"ly",value:this.state.ly,onChange:function(t){return e.handleChange(t)}}))}}])&&c(n.prototype,o),a&&c(n,a),t})();Object.defineProperty(s,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{isEditable:o.default.bool.isRequired,content:o.default.object,saveContent:o.default.func.isRequired}});var p=s;t.default=p}}]);