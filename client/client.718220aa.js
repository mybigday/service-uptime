function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function c(t,e,n,s,r,o,a){const c=function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(e,s,r,o);if(c){const r=i(e,n,s,a);t.p(r,c)}}function l(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function u(t){return null==t?"":t}function d(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function y(){return b(" ")}function v(){return b("")}function $(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function w(t){return function(e){return e.preventDefault(),t.call(this,e)}}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:E(t,s,e[s])}function S(t){return Array.from(t.childNodes)}function x(t,e,n,s){for(let s=0;s<t.length;s+=1){const r=t[s];if(r.nodeName===e){let e=0;const o=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)r.removeAttribute(o[t]);return t.splice(s,1)[0]}}return s?g(e):m(e)}function A(t,e){for(let n=0;n<t.length;n+=1){const s=t[n];if(3===s.nodeType)return s.data=""+e,t.splice(n,1)[0]}return b(e)}function T(t){return A(t," ")}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function I(t,e){t.value=null==e?"":e}let R,P;function L(){if(void 0===R){R=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){R=!0}}return R}function N(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=m("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=L();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=$(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=$(n.contentWindow,"resize",e)}),d(t,n),()=>{(s||r&&n.contentWindow)&&r(),h(n)}}function C(t,e=document.body){return Array.from(e.querySelectorAll(t))}class O{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=m(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)f(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(h)}}function H(t){P=t}function U(){if(!P)throw new Error("Function called outside component initialization");return P}function M(t){U().$$.on_mount.push(t)}function B(t){U().$$.after_update.push(t)}function j(t){U().$$.on_destroy.push(t)}const D=[],G=[],q=[],K=[],z=Promise.resolve();let J=!1;function V(t){q.push(t)}let F=!1;const W=new Set;function Y(){if(!F){F=!0;do{for(let t=0;t<D.length;t+=1){const e=D[t];H(e),Q(e.$$)}for(H(null),D.length=0;G.length;)G.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];W.has(e)||(W.add(e),e())}q.length=0}while(D.length);for(;K.length;)K.pop()();J=!1,F=!1,W.clear()}}function Q(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}const X=new Set;let Z;function tt(){Z={r:0,c:[],p:Z}}function et(){Z.r||r(Z.c),Z=Z.p}function nt(t,e){t&&t.i&&(X.delete(t),t.i(e))}function st(t,e,n,s){if(t&&t.o){if(X.has(t))return;X.add(t),Z.c.push((()=>{X.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function rt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(s[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[o]=i}else for(const t in a)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function ot(t){return"object"==typeof t&&null!==t?t:{}}function at(t){t&&t.c()}function it(t,e){t&&t.l(e)}function ct(t,e,s,a){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,s),a||V((()=>{const e=c.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(V)}function lt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){-1===t.$$.dirty[0]&&(D.push(t),J||(J=!0,z.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function dt(e,n,o,a,i,c,l=[-1]){const u=P;H(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:s(),dirty:l,skip_bound:!1};let f=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),f&&ut(e,t)),n})):[],d.update(),f=!0,r(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=S(n.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&nt(e.$$.fragment),ct(e,n.target,n.anchor,n.customElement),Y()}H(u)}class ft{$destroy(){lt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ht=[];function pt(e,n=t){let s;const r=[];function o(t){if(a(e,t)&&(e=t,s)){const t=!ht.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),ht.push(n,e)}if(t){for(let t=0;t<ht.length;t+=2)ht[t][0](ht[t+1]);ht.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return r.push(c),1===r.length&&(s=n(o)||t),a(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}const mt={};var gt={owner:"mybigday",repo:"service-uptime",sites:[{name:"BRICKS",method:"HEAD",url:"https://display.bricks.tools"},{name:"BRICKS BETA",method:"HEAD",url:"https://display-beta.bricks.tools"},{name:"BRICKS Bank",url:"https://bank.bricks.tools/update"},{name:"BRICKS Bank BETA",url:"https://bank-beta.bricks.tools/update"},{name:"MyBigDay Group",url:"https://group.mybigday.com.tw"},{name:"MyBigDay Group BETA",url:"https://group-beta.mybigday.com.tw"},{name:"BotHub (GCP)",url:"https://bothub.mybigday.com.tw"},{name:"BotHub BETA",url:"https://bothub-beta.bricks.tw"},{name:"Media Flow BETA",url:"https://media-beta.bricks.tools",expectedStatusCodes:[404]},{name:"Media Companion",url:"https://media-companion.bricks.tools",expectedStatusCodes:[500]},{name:"Media Resource (Auth0)",url:"https://media-beta.bricks.tw"},{name:"Media Resource (Legacy)",url:"https://media.mybigday.com.tw"},{name:"MyBigDay User (Legacy)",url:"https://media.mybigday.com.tw"}],"status-website":{cname:"status.bricks.tools",logoUrl:"https://cdn.mybigday.com.tw/bricks/bricks.png",name:"BRICKS Status",introTitle:"",introMessage:"",navbar:[{title:"Status",href:"/"}]},i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"},path:"https://status.bricks.tools"};function bt(t,e,n){const s=t.slice();return s[1]=e[n],s}function yt(e){let n,s,r,o=gt["status-website"]&&!gt["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=m("img"),this.h()},l(t){n=x(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){E(n,"alt",""),n.src!==(s=gt["status-website"].logoUrl)&&E(n,"src",s),E(n,"class","svelte-a08hsz")},m(t,e){f(t,n,e)},p:t,d(t){t&&h(n)}}}(),a=gt["status-website"]&&!gt["status-website"].hideNavTitle&&function(e){let n,s,r=gt["status-website"].name+"";return{c(){n=m("div"),s=b(r)},l(t){n=x(t,"DIV",{});var e=S(n);s=A(e,r),e.forEach(h)},m(t,e){f(t,n,e),d(n,s)},p:t,d(t){t&&h(n)}}}();return{c(){n=m("div"),s=m("a"),o&&o.c(),r=y(),a&&a.c(),this.h()},l(t){n=x(t,"DIV",{});var e=S(n);s=x(e,"A",{href:!0,class:!0});var i=S(s);o&&o.l(i),r=T(i),a&&a.l(i),i.forEach(h),e.forEach(h),this.h()},h(){E(s,"href",gt["status-website"].logoHref||gt.path),E(s,"class","logo svelte-a08hsz")},m(t,e){f(t,n,e),d(n,s),o&&o.m(s,null),d(s,r),a&&a.m(s,null)},p(t,e){gt["status-website"]&&!gt["status-website"].hideNavLogo&&o.p(t,e),gt["status-website"]&&!gt["status-website"].hideNavTitle&&a.p(t,e)},d(t){t&&h(n),o&&o.d(),a&&a.d()}}}function vt(t){let e,n,s,r,o,a=t[1].title+"";return{c(){e=m("li"),n=m("a"),s=b(a),o=y(),this.h()},l(t){e=x(t,"LI",{});var r=S(e);n=x(r,"A",{"aria-current":!0,href:!0,class:!0});var i=S(n);s=A(i,a),i.forEach(h),o=T(r),r.forEach(h),this.h()},h(){E(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),E(n,"href",t[1].href.replace("$OWNER",gt.owner).replace("$REPO",gt.repo)),E(n,"class","svelte-a08hsz")},m(t,r){f(t,e,r),d(e,n),d(n,s),d(e,o)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&E(n,"aria-current",r)},d(t){t&&h(e)}}}function $t(e){let n,s,r,o,a,i=gt["status-website"]&&gt["status-website"].logoUrl&&yt(),c=gt["status-website"]&&gt["status-website"].navbar&&function(t){let e,n=gt["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=vt(bt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=v()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=v()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);f(t,e,n)},p(t,r){if(1&r){let o;for(n=gt["status-website"].navbar,o=0;o<n.length;o+=1){const a=bt(t,n,o);s[o]?s[o].p(a,r):(s[o]=vt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){p(s,t),t&&h(e)}}}(e),l=gt["status-website"]&&gt["status-website"].navbarGitHub&&!gt["status-website"].navbar&&function(e){let n,s,r,o=gt.i18n.navGitHub+"";return{c(){n=m("li"),s=m("a"),r=b(o),this.h()},l(t){n=x(t,"LI",{});var e=S(n);s=x(e,"A",{href:!0,class:!0});var a=S(s);r=A(a,o),a.forEach(h),e.forEach(h),this.h()},h(){E(s,"href",`https://github.com/${gt.owner}/${gt.repo}`),E(s,"class","svelte-a08hsz")},m(t,e){f(t,n,e),d(n,s),d(s,r)},p:t,d(t){t&&h(n)}}}();return{c(){n=m("nav"),s=m("div"),i&&i.c(),r=y(),o=m("ul"),c&&c.c(),a=y(),l&&l.c(),this.h()},l(t){n=x(t,"NAV",{class:!0});var e=S(n);s=x(e,"DIV",{class:!0});var u=S(s);i&&i.l(u),r=T(u),o=x(u,"UL",{class:!0});var d=S(o);c&&c.l(d),a=T(d),l&&l.l(d),d.forEach(h),u.forEach(h),e.forEach(h),this.h()},h(){E(o,"class","svelte-a08hsz"),E(s,"class","container svelte-a08hsz"),E(n,"class","svelte-a08hsz")},m(t,e){f(t,n,e),d(n,s),i&&i.m(s,null),d(s,r),d(s,o),c&&c.m(o,null),d(o,a),l&&l.m(o,null)},p(t,[e]){gt["status-website"]&&gt["status-website"].logoUrl&&i.p(t,e),gt["status-website"]&&gt["status-website"].navbar&&c.p(t,e),gt["status-website"]&&gt["status-website"].navbarGitHub&&!gt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&h(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function wt(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class Et extends ft{constructor(t){super(),dt(this,t,wt,$t,a,{segment:0})}}var _t={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function St(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function xt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function At(t,e){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},d=0;function f(t){var e=_t[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=f(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(t);)s=t.substring(d,r.index),d=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+St(xt(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=At(St(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+xt(r[8])+'" alt="'+xt(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+xt(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+At(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+xt(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Tt(t,e,n){const s=t.slice();return s[3]=e[n],s}function kt(t,e,n){const s=t.slice();return s[3]=e[n],s}function It(t,e,n){const s=t.slice();return s[8]=e[n],s}function Rt(e){let n;return{c(){n=m("link"),this.h()},l(t){n=x(t,"LINK",{rel:!0,href:!0}),this.h()},h(){E(n,"rel","stylesheet"),E(n,"href",`${gt.path}/themes/${(gt["status-website"]||{}).theme||"light"}.css`)},m(t,e){f(t,n,e)},p:t,d(t){t&&h(n)}}}function Pt(e){let n;return{c(){n=m("link"),this.h()},l(t){n=x(t,"LINK",{rel:!0,href:!0}),this.h()},h(){E(n,"rel","stylesheet"),E(n,"href",(gt["status-website"]||{}).themeUrl)},m(t,e){f(t,n,e)},p:t,d(t){t&&h(n)}}}function Lt(e){let n,s;return{c(){n=m("script"),this.h()},l(t){n=x(t,"SCRIPT",{src:!0,async:!0,defer:!0}),S(n).forEach(h),this.h()},h(){n.src!==(s=e[8].src)&&E(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){f(t,n,e)},p:t,d(t){t&&h(n)}}}function Nt(e){let n;return{c(){n=m("link"),this.h()},l(t){n=x(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){E(n,"rel",e[3].rel),E(n,"href",e[3].href),E(n,"media",e[3].media)},m(t,e){f(t,n,e)},p:t,d(t){t&&h(n)}}}function Ct(e){let n;return{c(){n=m("meta"),this.h()},l(t){n=x(t,"META",{name:!0,content:!0}),this.h()},h(){E(n,"name",e[3].name),E(n,"content",e[3].content)},m(t,e){f(t,n,e)},p:t,d(t){t&&h(n)}}}function Ot(e){let n,s,r,o,a,l,u,g,b,$,w,_,A,k,I,R,P,L,N=At(gt.i18n.footer.replace(/\$REPO/,`https://github.com/${gt.owner}/${gt.repo}`))+"",H=(gt["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(gt["status-website"]||{}).customHeadHtml+"";return{c(){s=v(),this.h()},l(t){s=v(),this.h()},h(){n=new O(s)},m(t,e){n.m(r,t,e),f(t,s,e)},p:t,d(t){t&&h(s),t&&n.d()}}}();let U=((gt["status-website"]||{}).themeUrl?Pt:Rt)(e),M=(gt["status-website"]||{}).scripts&&function(t){let e,n=(gt["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=Lt(It(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=v()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=v()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);f(t,e,n)},p(t,r){if(0&r){let o;for(n=(gt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=It(t,n,o);s[o]?s[o].p(a,r):(s[o]=Lt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){p(s,t),t&&h(e)}}}(e),B=(gt["status-website"]||{}).links&&function(t){let e,n=(gt["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=Nt(kt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=v()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=v()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);f(t,e,n)},p(t,r){if(0&r){let o;for(n=(gt["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=kt(t,n,o);s[o]?s[o].p(a,r):(s[o]=Nt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){p(s,t),t&&h(e)}}}(e),j=(gt["status-website"]||{}).metaTags&&function(t){let e,n=(gt["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Ct(Tt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=v()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=v()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);f(t,e,n)},p(t,r){if(0&r){let o;for(n=(gt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Tt(t,n,o);s[o]?s[o].p(a,r):(s[o]=Ct(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){p(s,t),t&&h(e)}}}(e),D=gt["status-website"].css&&function(e){let n,s,r=`<style>${gt["status-website"].css}</style>`;return{c(){s=v(),this.h()},l(t){s=v(),this.h()},h(){n=new O(s)},m(t,e){n.m(r,t,e),f(t,s,e)},p:t,d(t){t&&h(s),t&&n.d()}}}(),G=gt["status-website"].js&&function(e){let n,s,r=`<script>${gt["status-website"].js}<\/script>`;return{c(){s=v(),this.h()},l(t){s=v(),this.h()},h(){n=new O(s)},m(t,e){n.m(r,t,e),f(t,s,e)},p:t,d(t){t&&h(s),t&&n.d()}}}(),q=(gt["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(gt["status-website"]||{}).customBodyHtml+"";return{c(){s=v(),this.h()},l(t){s=v(),this.h()},h(){n=new O(s)},m(t,e){n.m(r,t,e),f(t,s,e)},p:t,d(t){t&&h(s),t&&n.d()}}}();_=new Et({props:{segment:e[0]}});const K=e[2].default,z=function(t,e,n,s){if(t){const r=i(t,e,n,s);return t[0](r)}}(K,e,e[1],null);return{c(){H&&H.c(),n=v(),U.c(),s=m("link"),r=m("link"),o=m("link"),M&&M.c(),a=v(),B&&B.c(),l=v(),j&&j.c(),u=v(),D&&D.c(),g=v(),G&&G.c(),b=v(),$=y(),q&&q.c(),w=y(),at(_.$$.fragment),A=y(),k=m("main"),z&&z.c(),I=y(),R=m("footer"),P=m("p"),this.h()},l(t){const e=C('[data-svelte="svelte-ri9y7q"]',document.head);H&&H.l(e),n=v(),U.l(e),s=x(e,"LINK",{rel:!0,href:!0}),r=x(e,"LINK",{rel:!0,type:!0,href:!0}),o=x(e,"LINK",{rel:!0,type:!0,href:!0}),M&&M.l(e),a=v(),B&&B.l(e),l=v(),j&&j.l(e),u=v(),D&&D.l(e),g=v(),G&&G.l(e),b=v(),e.forEach(h),$=T(t),q&&q.l(t),w=T(t),it(_.$$.fragment,t),A=T(t),k=x(t,"MAIN",{class:!0});var i=S(k);z&&z.l(i),i.forEach(h),I=T(t),R=x(t,"FOOTER",{class:!0});var c=S(R);P=x(c,"P",{}),S(P).forEach(h),c.forEach(h),this.h()},h(){E(s,"rel","stylesheet"),E(s,"href",`${gt.path}/global.css`),E(r,"rel","icon"),E(r,"type","image/svg"),E(r,"href",(gt["status-website"]||{}).faviconSvg||(gt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),E(o,"rel","icon"),E(o,"type","image/png"),E(o,"href",(gt["status-website"]||{}).favicon||"/logo-192.png"),E(k,"class","container"),E(R,"class","svelte-jbr799")},m(t,e){H&&H.m(document.head,null),d(document.head,n),U.m(document.head,null),d(document.head,s),d(document.head,r),d(document.head,o),M&&M.m(document.head,null),d(document.head,a),B&&B.m(document.head,null),d(document.head,l),j&&j.m(document.head,null),d(document.head,u),D&&D.m(document.head,null),d(document.head,g),G&&G.m(document.head,null),d(document.head,b),f(t,$,e),q&&q.m(t,e),f(t,w,e),ct(_,t,e),f(t,A,e),f(t,k,e),z&&z.m(k,null),f(t,I,e),f(t,R,e),d(R,P),P.innerHTML=N,L=!0},p(t,[e]){(gt["status-website"]||{}).customHeadHtml&&H.p(t,e),U.p(t,e),(gt["status-website"]||{}).scripts&&M.p(t,e),(gt["status-website"]||{}).links&&B.p(t,e),(gt["status-website"]||{}).metaTags&&j.p(t,e),gt["status-website"].css&&D.p(t,e),gt["status-website"].js&&G.p(t,e),(gt["status-website"]||{}).customBodyHtml&&q.p(t,e);const n={};1&e&&(n.segment=t[0]),_.$set(n),z&&z.p&&(!L||2&e)&&c(z,K,t,t[1],e,null,null)},i(t){L||(nt(_.$$.fragment,t),nt(z,t),L=!0)},o(t){st(_.$$.fragment,t),st(z,t),L=!1},d(t){H&&H.d(t),h(n),U.d(t),h(s),h(r),h(o),M&&M.d(t),h(a),B&&B.d(t),h(l),j&&j.d(t),h(u),D&&D.d(t),h(g),G&&G.d(t),h(b),t&&h($),q&&q.d(t),t&&h(w),lt(_,t),t&&h(A),t&&h(k),z&&z.d(t),t&&h(I),t&&h(R)}}}function Ht(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Ut extends ft{constructor(t){super(),dt(this,t,Ht,Ot,a,{segment:0})}}function Mt(t){let e,n,s=t[1].stack+"";return{c(){e=m("pre"),n=b(s)},l(t){e=x(t,"PRE",{});var r=S(e);n=A(r,s),r.forEach(h)},m(t,s){f(t,e,s),d(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&k(n,s)},d(t){t&&h(e)}}}function Bt(e){let n,s,r,o,a,i,c,l,u,p=e[1].message+"";document.title=n=e[0];let g=e[2]&&e[1].stack&&Mt(e);return{c(){s=y(),r=m("h1"),o=b(e[0]),a=y(),i=m("p"),c=b(p),l=y(),g&&g.c(),u=v(),this.h()},l(t){C('[data-svelte="svelte-1moakz"]',document.head).forEach(h),s=T(t),r=x(t,"H1",{class:!0});var n=S(r);o=A(n,e[0]),n.forEach(h),a=T(t),i=x(t,"P",{class:!0});var d=S(i);c=A(d,p),d.forEach(h),l=T(t),g&&g.l(t),u=v(),this.h()},h(){E(r,"class","svelte-17w3omn"),E(i,"class","svelte-17w3omn")},m(t,e){f(t,s,e),f(t,r,e),d(r,o),f(t,a,e),f(t,i,e),d(i,c),f(t,l,e),g&&g.m(t,e),f(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&k(o,t[0]),2&e&&p!==(p=t[1].message+"")&&k(c,p),t[2]&&t[1].stack?g?g.p(t,e):(g=Mt(t),g.c(),g.m(u.parentNode,u)):g&&(g.d(1),g=null)},i:t,o:t,d(t){t&&h(s),t&&h(r),t&&h(a),t&&h(i),t&&h(l),g&&g.d(t),t&&h(u)}}}function jt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Dt extends ft{constructor(t){super(),dt(this,t,jt,Bt,a,{status:0,error:1})}}function Gt(t){let n,s,r;const o=[t[4].props];var a=t[4].component;function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(i())),{c(){n&&at(n.$$.fragment),s=v()},l(t){n&&it(n.$$.fragment,t),s=v()},m(t,e){n&&ct(n,t,e),f(t,s,e),r=!0},p(t,e){const r=16&e?rt(o,[ot(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){tt();const t=n;st(t.$$.fragment,1,0,(()=>{lt(t,1)})),et()}a?(n=new a(i()),at(n.$$.fragment),nt(n.$$.fragment,1),ct(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(t){r||(n&&nt(n.$$.fragment,t),r=!0)},o(t){n&&st(n.$$.fragment,t),r=!1},d(t){t&&h(s),n&&lt(n,t)}}}function qt(t){let e,n;return e=new Dt({props:{error:t[0],status:t[1]}}),{c(){at(e.$$.fragment)},l(t){it(e.$$.fragment,t)},m(t,s){ct(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){lt(e,t)}}}function Kt(t){let e,n,s,r;const o=[qt,Gt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),s=v()},l(t){n.l(t),s=v()},m(t,n){a[e].m(t,n),f(t,s,n),r=!0},p(t,r){let c=e;e=i(t),e===c?a[e].p(t,r):(tt(),st(a[c],1,1,(()=>{a[c]=null})),et(),n=a[e],n?n.p(t,r):(n=a[e]=o[e](t),n.c()),nt(n,1),n.m(s.parentNode,s))},i(t){r||(nt(n),r=!0)},o(t){st(n),r=!1},d(t){a[e].d(t),t&&h(s)}}}function zt(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Kt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Ut({props:o}),{c(){at(n.$$.fragment)},l(t){it(n.$$.fragment,t)},m(t,e){ct(n,t,e),s=!0},p(t,[e]){const s=12&e?rt(r,[4&e&&{segment:t[2][0]},8&e&&ot(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(nt(n.$$.fragment,t),s=!0)},o(t){st(n.$$.fragment,t),s=!1},d(t){lt(n,t)}}}function Jt(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,d;return B(l),u=mt,d=s,U().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,a,i,c,s,l]}class Vt extends ft{constructor(t){super(),dt(this,t,Jt,zt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Ft=[],Wt=[{js:()=>Promise.all([import("./index.d6eeabcc.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.083fea51.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].4bdb3da8.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].1771ec0a.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.214fa9ec.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],Yt=(Qt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:Qt(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:Qt(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var Qt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Xt(t,e,n,s){return new(n||(n=Promise))((function(r,o){function a(t){try{c(s.next(t))}catch(t){o(t)}}function i(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}c((s=s.apply(t,e||[])).next())}))}function Zt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let te,ee=1;const ne="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},se={};let re,oe;function ae(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function ie(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(re))return null;let e=t.pathname.slice(re.length);if(""===e&&(e="/"),!Ft.some((t=>t.test(e))))for(let n=0;n<Yt.length;n+=1){const s=Yt[n],r=s.pattern.exec(e);if(r){const n=ae(t.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:s,match:r,page:i}}}}function ce(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Zt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=ie(r);if(o){de(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),ne.pushState({id:te},"",r.href)}}function le(){return{x:pageXOffset,y:pageYOffset}}function ue(t){if(se[te]=le(),t.state){const e=ie(new URL(location.href));e?de(e,t.state.id):location.href=location.href}else!function(t){ee=t}(ee+1),function(t){te=t}(ee),ne.replaceState({id:te},"",location.href)}function de(t,e,n,s){return Xt(this,void 0,void 0,(function*(){const r=!!e;if(r)te=e;else{const t=le();se[te]=t,te=e=++ee,se[te]=n?t:{x:0,y:0}}if(yield oe(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=se[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),se[te]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function fe(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let he,pe=null;function me(t){const e=Zt(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=ie(new URL(t,fe(document)));if(e)pe&&t===pe.href||(pe={href:t,promise:Le(e)}),pe.promise}(e.href)}function ge(t){clearTimeout(he),he=setTimeout((()=>{me(t)}),20)}function be(t,e={noscroll:!1,replaceState:!1}){const n=ie(new URL(t,fe(document)));if(n){const s=de(n,null,e.noscroll);return ne[e.replaceState?"replaceState":"pushState"]({id:te},"",t),s}return location.href=t,new Promise((()=>{}))}const ye="undefined"!=typeof __SAPPER__&&__SAPPER__;let ve,$e,we,Ee=!1,_e=[],Se="{}";const xe={page:function(t){const e=pt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:pt(null),session:pt(ye&&ye.session)};let Ae,Te,ke;function Ie(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Re(t){return Xt(this,void 0,void 0,(function*(){ve&&xe.preloading.set(!0);const e=function(t){return pe&&pe.href===t.href?pe.promise:Le(t)}(t),n=$e={},s=yield e,{redirect:r}=s;if(n===$e)if(r)yield be(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield Pe(n,e,Ie(e,t.page))}}))}function Pe(t,e,n){return Xt(this,void 0,void 0,(function*(){xe.page.set(n),xe.preloading.set(!1),ve?ve.$set(e):(e.stores={page:{subscribe:xe.page.subscribe},preloading:{subscribe:xe.preloading.subscribe},session:xe.session},e.level0={props:yield we},e.notify=xe.page.notify,ve=new Vt({target:ke,props:e,hydrate:!0})),_e=t,Se=JSON.stringify(n.query),Ee=!0,Te=!1}))}function Le(t){return Xt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!we){const t=()=>({});we=ye.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ae)}let i,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>Xt(this,void 0,void 0,(function*(){const d=s[i];if(function(t,e,n,s){if(s!==Se)return!0;const r=_e[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,d,l,r)&&(u=!0),o.segments[c]=s[i+1],!e)return{segment:d};const f=c++;let h;if(Te||u||!_e[i]||_e[i].part!==e.i){u=!1;const{default:s,preload:r}=yield Wt[e.i].js();let o;o=Ee||!ye.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ae):{}:ye.preloaded[i+1],h={component:s,props:o,segment:d,match:l,part:e.i}}else h=_e[i];return o[`level${f}`]=h})))))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var Ne,Ce,Oe;xe.session.subscribe((t=>Xt(void 0,void 0,void 0,(function*(){if(Ae=t,!Ee)return;Te=!0;const e=ie(new URL(location.href)),n=$e={},{redirect:s,props:r,branch:o}=yield Le(e);n===$e&&(s?yield be(s.location,{replaceState:!0}):yield Pe(o,r,Ie(r,e.page)))})))),Ne={target:document.querySelector("#sapper")},Ce=Ne.target,ke=Ce,Oe=ye.baseUrl,re=Oe,oe=Re,"scrollRestoration"in ne&&(ne.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ne.scrollRestoration="auto"})),addEventListener("load",(()=>{ne.scrollRestoration="manual"})),addEventListener("click",ce),addEventListener("popstate",ue),addEventListener("touchstart",me),addEventListener("mousemove",ge),ye.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:a}=ye;we||(we=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:we},level1:{props:{status:o,error:a},component:Dt},segments:r},c=ae(n);Pe([],i,{host:t,path:e,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;ne.replaceState({id:ee},"",e);const n=ie(new URL(location.href));if(n)return de(n,ee,!0,t)}));export{lt as A,$ as B,r as C,G as D,u as E,C as F,At as G,O as H,g as I,be as J,I as K,w as L,e as M,_ as N,rt as O,B as P,j as Q,l as R,ft as S,ot as T,V as U,N as V,S as a,A as b,x as c,h as d,m as e,E as f,f as g,d as h,dt as i,y as j,T as k,tt as l,st as m,t as n,et as o,nt as p,M as q,gt as r,a as s,b as t,k as u,v,p as w,at as x,it as y,ct as z};

import __inject_styles from './inject_styles.5607aec6.js';