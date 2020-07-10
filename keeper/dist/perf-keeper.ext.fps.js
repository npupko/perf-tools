var perfKeeperExtFps=function(n){"use strict";var e="object"==typeof globalThis&&globalThis||"object"==typeof window&&window||"object"==typeof global&&global||{},w=e.document,t=e.performance,M=t&&t.now?function(){return t.now()}:Date.now;function F(n){"complete"===w.readyState?n():w.addEventListener("DOMContentLoaded",n)}var x,o,c=[];function C(a,i,l,u){var r={};return[function(n,t,e,o){var a=r;c.concat(n).forEach(function(n){var t=a.nested||(a.nested={});a=t[n]||(t[n]={name:n})}),null!=a.end?a.end+=e-t:(a.start=t,a.end=e,a.unit=o)},function(n,t,e,o){r.name=n?a+"-"+n:a,r.start=t,r.end=e,function t(n,e){var o,a=n.nested,r=a?Object.keys(a):c;r.length?((o=(e||i).group(n.name,n.start,!e))._=!0,o.unit=l||"ms",(!1===u?r:r.sort()).forEach(function(n){t(a[n],o)}),o.stop(n.end)):e&&(e.add(n.name,n.start,n.end),e.entries[e.entries.length-1].unit=n.unit||e.unit)}(r,null),o&&(r={})}]}var a,r,i,A,l=0,L=0,S=!1,j=!1,P=300;var u="0px";function s(){l=M(),a=e.mozPaintCount||0,r=0,i=-1,o.left=o.left===u?window.innerWidth/2+"px":u,f()}function f(){var n=e.getComputedStyle(x,null),t=n&&n.left?+n.left.slice(0,-2):0;i!==t&&(r++,i=t),L=requestAnimationFrame(f)}function d(){var n=M()-l,t=(e.mozPaintCount||r)-a;cancelAnimationFrame(L),S&&(A(Math.min(Math.round(1e3*t/n),60)),s())}function m(){x||((x=w.createElement("div")).id="FPSMeterHelper",(o=x.style).position="absolute",o.backgroundColor="transparent",o.width="1px",o.height="1px",o.left=u,o.bottom=u,o.transition="left "+P+"ms linear",x.addEventListener("transitionend",d,!1))}function T(){S&&(m(),j=!0,w.body.appendChild(x),setTimeout(s,0))}F(m);var k={rate:300,scrollableName:function(n){return n===document?"page":null},scrollableElement:e};return n.defaultFPSMeterOptions=k,n.fpsMeter=function(c,n){void 0===n&&(n=k);var s,t=n.rate,f=n.scrollableName,e=n.scrollableElement,o=!1,a=0,r=0,i=!1,d=[],l=0,m=0;function u(n){d.push(n)}function p(){i||(i=!0,r=a,setTimeout(v,t))}function v(){i=!1,r===a?(o=!1,y()):p()}function h(){var n=f?f(s):null,t=C("pk-fps"+(n?"-"+n:""),c,"fps"),e=t[0],o=t[1],a=d.length,r=Math.floor(a/2),i=0,l=60,u=0;(d=d.sort()).forEach(function(n){l=Math.min(l,n),u=Math.max(u,n),i+=n}),0<a&&(i/=a,e("latency",0,m,"ms"),e("min",0,l),e("max",0,u),e("avg",0,i),e("median",0,a%2?d[r]:(d[r-1]+d[r])/2),o(null,0,i),d.length=0)}function b(){m=M()-l}function g(){var n;l=M(),A=u,(n=t)&&(P=n),S=!0,F(T)}function y(){S&&(S=!1,cancelAnimationFrame(L),j&&w.body.removeChild(x),j=!1),h()}function E(n){var t=n.target;o?s!==t&&(h(),l=M(),requestAnimationFrame(b)):(o=!0,g(),requestAnimationFrame(b)),s=t,a++,p()}return e&&e.addEventListener("scroll",E,!0),{start:g,stop:y,handleScroll:E,destory:function(){e&&e.removeEventListener("scroll",E,!0)}}},n}({});
