var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function f(){return s(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let h;function g(t){h=t}function m(t){(function(){if(!h)throw new Error("Function called outside component initialization");return h})().$$.on_mount.push(t)}const $=[],b=[],y=[],_=[],x=Promise.resolve();let w=!1;function v(t){y.push(t)}let k=!1;const E=new Set;function A(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];g(n),j(n.$$)}for($.length=0;b.length;)b.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];E.has(n)||(E.add(n),n())}y.length=0}while($.length);for(;_.length;)_.pop()();w=!1,k=!1,E.clear()}}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const C=new Set;function T(t,n){-1===t.$$.dirty[0]&&($.push(t),w||(w=!0,x.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function O(i,c,u,a,s,f,d=[-1]){const p=h;g(i);const m=c.props||{},$=i.$$={fragment:null,ctx:null,props:f,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:e(),dirty:d,skip_bound:!1};let b=!1;if($.ctx=u?u(i,m,(t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&s($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),b&&T(i,t)),n}):[],$.update(),b=!0,o($.before_update),$.fragment=!!a&&a($.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);$.fragment&&$.fragment.l(t),t.forEach(l)}else $.fragment&&$.fragment.c();c.intro&&((y=i.$$.fragment)&&y.i&&(C.delete(y),y.i(_))),function(t,e,i){const{fragment:c,on_mount:u,on_destroy:l,after_update:a}=t.$$;c&&c.m(e,i),v(()=>{const e=u.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(v)}(i,c.target,c.anchor),A()}var y,_;g(p)}function S(t,n,e){const o=t.slice();return o[1]=n[e],o}function N(t){let n;return{c(){n=a("p"),n.textContent="Loading repositories..."},m(t,e){u(t,n,e)},d(t){t&&l(n)}}}function q(t){let n,e,o,r,i,h,g,m,$,b=t[1].name+"",y=t[1].description+"";return{c(){n=a("div"),e=a("h2"),o=a("a"),r=s(b),h=f(),g=a("h3"),m=s(y),$=f(),d(o,"href",i=t[1].url)},m(t,i){u(t,n,i),c(n,e),c(e,o),c(o,r),c(n,h),c(n,g),c(g,m),c(n,$)},p(t,n){1&n&&b!==(b=t[1].name+"")&&p(r,b),1&n&&i!==(i=t[1].url)&&d(o,"href",i),1&n&&y!==(y=t[1].description+"")&&p(m,y)},d(t){t&&l(n)}}}function z(n){let e,o=n[0],r=[];for(let t=0;t<o.length;t+=1)r[t]=q(S(n,o,t));let i=null;return o.length||(i=N()),{c(){e=a("main");for(let t=0;t<r.length;t+=1)r[t].c();i&&i.c(),d(e,"class","svelte-1tky8bj")},m(t,n){u(t,e,n);for(let t=0;t<r.length;t+=1)r[t].m(e,null);i&&i.m(e,null)},p(t,[n]){if(1&n){let c;for(o=t[0],c=0;c<o.length;c+=1){const i=S(t,o,c);r[c]?r[c].p(i,n):(r[c]=q(i),r[c].c(),r[c].m(e,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=o.length,o.length?i&&(i.d(1),i=null):i||(i=N(),i.c(),i.m(e,null))}},i:t,o:t,d(t){t&&l(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(r,t),i&&i.d()}}}function B(t,n,e){let o=[];return m(async()=>{const t=await fetch("https://api.github.com/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"bearer 1231bd41fe7c993085126219a6c4a129af1eb05a"},body:JSON.stringify({query:"{\n\t\t\tviewer {\n\t\t\t\trepositories(first: 25, orderBy: {direction: DESC, field: CREATED_AT}) {\n\t\t\t\t\tnodes {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}"})}),n=await t.json();e(0,o=n.data.viewer.repositories.nodes),console.log(o)}),[o]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),O(this,t,B,z,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
