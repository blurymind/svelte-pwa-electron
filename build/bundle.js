var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function l(){return t=" ",document.createTextNode(t);var t}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let d;function p(t){d=t}const m=[],g=[],h=[],$=[],y=Promise.resolve();let x=!1;function b(t){h.push(t)}let v=!1;const _=new Set;function w(){if(!v){v=!0;do{for(let t=0;t<m.length;t+=1){const e=m[t];p(e),k(e.$$)}for(m.length=0;g.length;)g.pop()();for(let t=0;t<h.length;t+=1){const e=h[t];_.has(e)||(_.add(e),e())}h.length=0}while(m.length);for(;$.length;)$.pop()();x=!1,v=!1,_.clear()}}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const E=new Set;function A(t,e){-1===t.$$.dirty[0]&&(m.push(t),x||(x=!0,y.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(c,u,s,i,l,f,m=[-1]){const g=d;p(c);const h=u.props||{},$=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:[]),callbacks:n(),dirty:m};let y=!1;if($.ctx=s?s(c,h,(t,e,...n)=>{const o=n.length?n[0]:e;return $.ctx&&l($.ctx[t],$.ctx[t]=o)&&($.bound[t]&&$.bound[t](o),y&&A(c,t)),e}):[],$.update(),y=!0,o($.before_update),$.fragment=!!i&&i($.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);$.fragment&&$.fragment.l(t),t.forEach(a)}else $.fragment&&$.fragment.c();u.intro&&((x=c.$$.fragment)&&x.i&&(E.delete(x),x.i(v))),function(t,n,c){const{fragment:u,on_mount:s,on_destroy:a,after_update:i}=t.$$;u&&u.m(n,c),b(()=>{const n=s.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]}),i.forEach(b)}(c,u.target,u.anchor),w()}var x,v;p(g)}function C(e){let n,o,r,c,d,p;return{c(){n=l(),o=i("main"),r=i("h1"),r.textContent=`hello ${N}!`,c=l(),d=i("img"),document.title="svelte pwa template",f(r,"class","svelte-1cp0utu"),d.src!==(p="/assets/android-chrome-192x192.png")&&f(d,"src","/assets/android-chrome-192x192.png"),f(d,"alt","svelte_icon"),f(o,"class","svelte-1cp0utu")},m(t,e){s(t,n,e),s(t,o,e),u(o,r),u(o,c),u(o,d)},p:t,i:t,o:t,d(t){t&&a(n),t&&a(o)}}}const N="pwa";const O=new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),j(this,t,null,C,c,{})}}({target:document.body,props:{}});return"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js"),O}();
//# sourceMappingURL=bundle.js.map