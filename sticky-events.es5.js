!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.observeStickyEvents=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;window.requestAnimationFrame(function(){!function(t){var e=new IntersectionObserver(function(t){t.forEach(function(t){var e=t.boundingClientRect,n=t.target.parentElement,o=n.querySelector(i),r=t.rootBounds;n.style.position="relative",e.bottom<r.top&&c(!0,o),e.bottom>=r.top&&e.bottom<r.bottom&&c(!1,o)})},Object.assign({threshold:[0]},!(t instanceof HTMLDocument)&&{root:t}));s(t,r.SENTINEL_TOP).forEach(function(t){return e.observe(t)})}(t),function(t){var e=new IntersectionObserver(function(t){t.forEach(function(t){var e=t.boundingClientRect,n=t.target.parentElement.querySelector(i),o=t.rootBounds,r=t.intersectionRatio,s=Math.round(e.top/o.height);e.bottom>o.top&&1===r&&0===s&&c(!0,n),e.top<o.top&&e.bottom<o.bottom&&c(!1,n)})},Object.assign({threshold:[1]},!(t instanceof HTMLDocument)&&{root:t}));s(t,r.SENTINEL_BOTTOM).forEach(function(t){return e.observe(t)})}(t)})};var o=e.StickyEvent={CHANGE:"sticky-change",STUCK:"sticky-stuck",UNSTUCK:"sticky-unstuck"},r={SENTINEL:"sticky-events--sentinel",SENTINEL_TOP:"sticky-events--sentinel-top",SENTINEL_BOTTOM:"sticky-events--sentinel-bottom"},i=".sticky-events";function c(t,e){e.dispatchEvent(new CustomEvent(o.CHANGE,{detail:{isSticky:t}})),e.dispatchEvent(new CustomEvent(t?o.STUCK:o.UNSTUCK))}function s(t,e){return Array.from(t.querySelectorAll(i)).map(function(t){var n=document.createElement("div"),o=t.parentElement;switch(n.classList.add(r.SENTINEL,e),e){case r.SENTINEL_TOP:o.insertBefore(n,t),Object.assign(n.style,u(t,n,e));break;case r.SENTINEL_BOTTOM:o.appendChild(n),Object.assign(n.style,u(t,n,e))}return n})}function u(t,e,n){var o=window.getComputedStyle(t),i=window.getComputedStyle(t.parentElement);switch(n){case r.SENTINEL_TOP:return{top:"calc("+o.getPropertyValue("top")+" * -1)"};case r.SENTINEL_BOTTOM:var c=parseInt(i.paddingTop);return{bottom:o.top,height:t.scrollHeight+c+"px"}}}}])});