(window.webpackJsonp=window.webpackJsonp||[]).push([[14,9],{151:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t})(r(0)),o=u(r(1)),a=u(r(111)),i=u(r(331));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return (function(e){if(Array.isArray(e))return e})(e)||(function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r})(e,t)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")})()}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e})(e):t}var d=/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/,b=(function(e){function t(e){var r;return (function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,t),(r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state={embedURL:""},r}var r,o,u;return (function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,n.Component),r=t,(o=[{key:"componentDidMount",value:function(){this.setState(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}({},this.props.content))}},{key:"shouldComponentUpdate",value:function(e,t){var r=e.isEditable,n=e.isViewMode;return(r||n)&&!(0,a.default)(this.state,t)}},{key:"render",value:function(){var e=this,t=this.props,r=t.isEditable,o=t.isViewMode,a=(t.saveContent,this.state.embedURL);return n.default.createElement("div",{className:i.default.video_wrapper},a&&n.default.createElement("div",{className:i.default.iframe_wrapper},n.default.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0})),!o&&n.default.createElement("input",{className:i.default.video_input,autoFocus:!0,type:"url",name:"url",value:a,onInput:function(t){return e.handleChange(t)},disabled:!r,placeholder:"Youtube oder Vimeo URL eingeben"}))}},{key:"handleChange",value:function(e){var t=this,r=c(d.exec(e.target.value),7),n=r[3],o=r[6],a="";n.indexOf("youtu")>-1?a="https://www.youtube.com/embed/":n.indexOf("vimeo")>-1&&(a="https://player.vimeo.com/video/"),this.setState({embedURL:a+o},(function(){return t.props.saveContent(t.state)}))}}])&&p(r.prototype,o),u&&p(r,u),t})();Object.defineProperty(b,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{isEditable:o.default.bool,isViewMode:o.default.bool.isRequired,content:o.default.object,saveContent:o.default.func}});var y=b;t.default=y},331:function(e,t,r){e.exports={video_wrapper:"_1ehvhhAerLvNcfEZ7v6B6",iframe_wrapper:"_2x4AFp9FnJADIS6GlFYqAk",video_input:"_1fVYQOt45kPAhJd9UnUxsF"}}}]);