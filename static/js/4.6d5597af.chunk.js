webpackJsonp([4],{104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),u=n.n(r),c=n(25),o=n(27),i=n.n(o),s=n(28),a=n(96),l=i()({loader:function(){return n.e(2).then(n.bind(null,105))},loading:s.a,delay:500}),f=function(e){var t=e.location.pathname,n=e.postTypeIndex;if(!Object(a.d)(t,n))return u.a.createElement(c.d,{to:e.home});var r=Object(a.b)(t,n),o=Object(a.c)(t,n+1);return"methods"===r&&(o+="::"+Object(a.c)(t,n+2)),u.a.createElement(l,Object.assign({},e,{postType:r,slug:o}))};t.default=f},96:function(e,t,n){"use strict";function r(e,t){var n="",r=o(e);return t+1<=r.length&&(n=r[t].toLowerCase()),n&&u(n)?n=t+3===r.length?"methods":n:""}function u(e){return 1===["functions","hooks","classes","methods"].filter(function(t){return e===t}).length}function c(e){if(!u(e))return"";var t=e.substring(0,e.length-1);return"wp-parser-"+(t="classe"===t?"class":t)}function o(e){return Object(a.trim)(e,"/").split("/").filter(function(e){return""!==e})}function i(e,t){var n="",r=o(e);return t<=r.length&&(n=r[t]),n}function s(e,t){var n=o(e),u=r(e,t);if(!u.length)return!1;if("methods"===u){if(t+3===n.length)return!0}else if(t+2===n.length)return!0;return!1}t.b=r,t.a=c,t.c=i,t.d=s;var a=n(24);n.n(a)}});
//# sourceMappingURL=4.6d5597af.chunk.js.map