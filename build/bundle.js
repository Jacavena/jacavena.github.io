var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function a(){return s(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let p;function g(t){p=t}function m(t){(function(){if(!p)throw new Error("Function called outside component initialization");return p})().$$.on_mount.push(t)}const $=[],b=[],y=[],_=[],x=Promise.resolve();let v=!1;function w(t){y.push(t)}let k=!1;const j=new Set;function E(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];g(n),A(n.$$)}for($.length=0;b.length;)b.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];j.has(n)||(j.add(n),n())}y.length=0}while($.length);for(;_.length;)_.pop()();v=!1,k=!1,j.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(w)}}const C=new Set;function N(t,n){-1===t.$$.dirty[0]&&($.push(t),v||(v=!0,x.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function O(c,u,i,f,s,a,d=[-1]){const h=p;g(c);const m=u.props||{},$=c.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:e(),dirty:d,skip_bound:!1};let b=!1;if($.ctx=i?i(c,m,(t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&s($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),b&&N(c,t)),n}):[],$.update(),b=!0,o($.before_update),$.fragment=!!f&&f($.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);$.fragment&&$.fragment.l(t),t.forEach(l)}else $.fragment&&$.fragment.c();u.intro&&((y=c.$$.fragment)&&y.i&&(C.delete(y),y.i(_))),function(t,e,c){const{fragment:u,on_mount:i,on_destroy:l,after_update:f}=t.$$;u&&u.m(e,c),w(()=>{const e=i.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]}),f.forEach(w)}(c,u.target,u.anchor),E()}var y,_;g(h)}function S(t,n,e){const o=t.slice();return o[1]=n[e],o}function T(t){let n;return{c(){n=f("p"),n.textContent="Loading repositories..."},m(t,e){i(t,n,e)},d(t){t&&l(n)}}}function q(t){let n,e,o,r,c,p,g,m,$,b=t[1].name+"",y=t[1].description+"";return{c(){n=f("div"),e=f("h2"),o=f("a"),r=s(b),p=a(),g=f("h3"),m=s(y),$=a(),d(o,"href",c=t[1].url)},m(t,c){i(t,n,c),u(n,e),u(e,o),u(o,r),u(n,p),u(n,g),u(g,m),u(n,$)},p(t,n){1&n&&b!==(b=t[1].name+"")&&h(r,b),1&n&&c!==(c=t[1].url)&&d(o,"href",c),1&n&&y!==(y=t[1].description+"")&&h(m,y)},d(t){t&&l(n)}}}function z(n){let e,o=n[0],r=[];for(let t=0;t<o.length;t+=1)r[t]=q(S(n,o,t));let c=null;return o.length||(c=T()),{c(){e=f("main");for(let t=0;t<r.length;t+=1)r[t].c();c&&c.c(),d(e,"class","svelte-1tky8bj")},m(t,n){i(t,e,n);for(let t=0;t<r.length;t+=1)r[t].m(e,null);c&&c.m(e,null)},p(t,[n]){if(1&n){let u;for(o=t[0],u=0;u<o.length;u+=1){const c=S(t,o,u);r[u]?r[u].p(c,n):(r[u]=q(c),r[u].c(),r[u].m(e,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=o.length,o.length?c&&(c.d(1),c=null):c||(c=T(),c.c(),c.m(e,null))}},i:t,o:t,d(t){t&&l(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(r,t),c&&c.d()}}}function B(t,n,e){let o=[];return m(async()=>{const t=await fetch("https://api.github.com/users/jacavena/repos",{headers:{Accept:"application/vnd.github.v3+json"}});e(0,o=await t.json())}),[o]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),O(this,t,B,z,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
