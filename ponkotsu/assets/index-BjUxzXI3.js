(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(a){if(a.ep)return;a.ep=!0;const c=r(a);fetch(a.href,c)}})();var ge,E,It,q,Ye,St,Lt,Ce,le,ee,Rt,He,Oe,De,fe={},pe=[],Zt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,xe=Array.isArray;function j(t,e){for(var r in e)t[r]=e[r];return t}function Be(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Qt(t,e,r){var o,a,c,s={};for(c in e)c=="key"?o=e[c]:c=="ref"?a=e[c]:s[c]=e[c];if(arguments.length>2&&(s.children=arguments.length>3?ge.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(c in t.defaultProps)s[c]===void 0&&(s[c]=t.defaultProps[c]);return ie(t,s,o,a,null)}function ie(t,e,r,o,a){var c={type:t,props:e,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:a??++It,__i:-1,__u:0};return a==null&&E.vnode!=null&&E.vnode(c),c}function ye(t){return t.children}function de(t,e){this.props=t,this.context=e}function X(t,e){if(e==null)return t.__?X(t.__,t.__i+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?X(t):null}function en(t){if(t.__P&&t.__d){var e=t.__v,r=e.__e,o=[],a=[],c=j({},e);c.__v=e.__v+1,E.vnode&&E.vnode(c),Pe(t.__P,c,e,t.__n,t.__P.namespaceURI,32&e.__u?[r]:null,o,r??X(e),!!(32&e.__u),a),c.__v=e.__v,c.__.__k[c.__i]=c,Ft(o,c,a),e.__e=e.__=null,c.__e!=r&&Ot(c)}}function Ot(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(e){if(e!=null&&e.__e!=null)return t.__e=t.__c.base=e.__e}),Ot(t)}function Je(t){(!t.__d&&(t.__d=!0)&&q.push(t)&&!me.__r++||Ye!=E.debounceRendering)&&((Ye=E.debounceRendering)||St)(me)}function me(){try{for(var t,e=1;q.length;)q.length>e&&q.sort(Lt),t=q.shift(),e=q.length,en(t)}finally{q.length=me.__r=0}}function Dt(t,e,r,o,a,c,s,i,u,l,h){var f,d,p,m,y,x,v=o&&o.__k||pe,_=e.length;for(u=tn(r,e,v,u,_),f=0;f<_;f++)(p=r.__k[f])!=null&&(d=p.__i!=-1&&v[p.__i]||fe,p.__i=f,x=Pe(t,p,d,a,c,s,i,u,l,h),m=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&ze(d.ref,null,p),h.push(p.ref,p.__c||m,p)),y==null&&m!=null&&(y=m),4&p.__u?(u=Nt(p,u,t),d.__e&&(d.__e=null)):typeof p.type=="function"&&x!==void 0?u=x:m&&(u=m.nextSibling),p.__u&=-7);return r.__e=y,u}function tn(t,e,r,o,a){var c,s,i,u,l,h=r.length,f=h,d=0;for(t.__k=new Array(a),c=0;c<a;c++)(s=e[c])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=t.__k[c]=ie(null,s,null,null,null):xe(s)?s=t.__k[c]=ie(ye,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=t.__k[c]=ie(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):t.__k[c]=s,u=c+d,s.__=t,s.__b=t.__b+1,i=null,(l=s.__i=nn(s,r,u,f))!=-1&&(f--,(i=r[l])&&(i.__u|=2)),i==null||i.__v==null?(l==-1&&(a>h?d--:a<h&&d++),typeof s.type!="function"&&(s.__u|=4)):l!=u&&(l==u-1?d--:l==u+1?d++:(l>u?d--:d++,s.__u|=4))):t.__k[c]=null;if(f)for(c=0;c<h;c++)(i=r[c])!=null&&(2&i.__u)==0&&(i.__e==o&&(o=X(i)),Bt(i,i));return o}function Nt(t,e,r){var o,a;if(typeof t.type=="function"){for(o=t.__k,a=0;o&&a<o.length;a++)o[a]&&(o[a].__=t,e=Nt(o[a],e,r));return e}t.__e!=e&&(e&&t.type&&!e.parentNode&&(e=X(t)),e=r.insertBefore(t.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function nn(t,e,r,o){var a,c,s,i=t.key,u=t.type,l=e[r],h=l!=null&&(2&l.__u)==0;if(l===null&&i==null||h&&i==l.key&&u==l.type)return r;if(o>(h?1:0)){for(a=r-1,c=r+1;a>=0||c<e.length;)if((l=e[s=a>=0?a--:c++])!=null&&(2&l.__u)==0&&i==l.key&&u==l.type)return s}return-1}function Ke(t,e,r){e[0]=="-"?t.setProperty(e,r??""):t[e]=r==null?"":typeof r!="number"||Zt.test(e)?r:r+"px"}function ce(t,e,r,o,a){var c,s;e:if(e=="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)r&&e in r||Ke(t.style,e,"");if(r)for(e in r)o&&r[e]==o[e]||Ke(t.style,e,r[e])}else if(e[0]=="o"&&e[1]=="n")c=e!=(e=e.replace(Rt,"$1")),s=e.toLowerCase(),e=s in t||e=="onFocusOut"||e=="onFocusIn"?s.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+c]=r,r?o?r[ee]=o[ee]:(r[ee]=He,t.addEventListener(e,c?De:Oe,c)):t.removeEventListener(e,c?De:Oe,c);else{if(a=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&r==1?"":r))}}function Xe(t){return function(e){if(this.l){var r=this.l[e.type+t];if(e[le]==null)e[le]=He++;else if(e[le]<r[ee])return;return r(E.event?E.event(e):e)}}}function Pe(t,e,r,o,a,c,s,i,u,l){var h,f,d,p,m,y,x,v,_,b,w,k,C,T,A,S,M=e.type;if(e.constructor!==void 0)return null;128&r.__u&&(u=!!(32&r.__u),c=[i=e.__e=r.__e]),(h=E.__b)&&h(e);e:if(typeof M=="function"){f=s.length;try{if(_=e.props,b=M.prototype&&M.prototype.render,w=(h=M.contextType)&&o[h.__c],k=h?w?w.props.value:h.__:o,r.__c?v=(d=e.__c=r.__c).__=d.__E:(b?e.__c=d=new M(_,k):(e.__c=d=new de(_,k),d.constructor=M,d.render=on),w&&w.sub(d),d.state||(d.state={}),d.__n=o,p=d.__d=!0,d.__h=[],d._sb=[]),b&&d.__s==null&&(d.__s=d.state),b&&M.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=j({},d.__s)),j(d.__s,M.getDerivedStateFromProps(_,d.__s))),m=d.props,y=d.state,d.__v=e,p)b&&M.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),b&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(b&&M.getDerivedStateFromProps==null&&_!==m&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(_,k),e.__v==r.__v||!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(_,d.__s,k)===!1){e.__v!=r.__v&&(d.props=_,d.state=d.__s,d.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.some(function($){$&&($.__=e)}),pe.push.apply(d.__h,d._sb),d._sb=[],d.__h.length&&s.push(d),i=X(r);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(_,d.__s,k),b&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(m,y,x)})}if(d.context=k,d.props=_,d.__P=t,d.__e=!1,C=E.__r,T=0,b)d.state=d.__s,d.__d=!1,C&&C(e),h=d.render(d.props,d.state,d.context),pe.push.apply(d.__h,d._sb),d._sb=[];else do d.__d=!1,C&&C(e),h=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++T<25);d.state=d.__s,d.getChildContext!=null&&(o=j(j({},o),d.getChildContext())),b&&!p&&d.getSnapshotBeforeUpdate!=null&&(x=d.getSnapshotBeforeUpdate(m,y)),A=h!=null&&h.type===ye&&h.key==null?Ht(h.props.children):h,i=Dt(t,xe(A)?A:[A],e,r,o,a,c,s,i,u,l),d.base=e.__e,e.__u&=-161,d.__h.length&&s.push(d),v&&(d.__E=d.__=null)}catch($){if(s.length=f,e.__v=null,u||c!=null){if($.then){for(e.__u|=u?160:128;i&&i.nodeType==8&&i.nextSibling;)i=i.nextSibling;c!=null&&(c[c.indexOf(i)]=null),e.__e=i}else if(c!=null)for(S=c.length;S--;)Be(c[S])}else e.__e=r.__e;e.__k==null&&(e.__k=r.__k||[]),$.then||$t(e),E.__e($,e,r)}}else c==null&&e.__v==r.__v?(e.__k=r.__k,e.__e=r.__e):i=e.__e=rn(r.__e,e,r,o,a,c,s,u,l);return(h=E.diffed)&&h(e),128&e.__u?void 0:i}function $t(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some($t))}function Ft(t,e,r){for(var o=0;o<r.length;o++)ze(r[o],r[++o],r[++o]);E.__c&&E.__c(e,t),t.some(function(a){try{t=a.__h,a.__h=[],t.some(function(c){c.call(a)})}catch(c){E.__e(c,a.__v)}})}function Ht(t){return typeof t!="object"||t==null||t.__b>0?t:xe(t)?t.map(Ht):t.constructor!==void 0?null:j({},t)}function rn(t,e,r,o,a,c,s,i,u){var l,h,f,d,p,m,y,x=r.props||fe,v=e.props,_=e.type;if(_=="svg"?a="http://www.w3.org/2000/svg":_=="math"?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),c!=null){for(l=0;l<c.length;l++)if((p=c[l])&&"setAttribute"in p==!!_&&(_?p.localName==_:p.nodeType==3)){t=p,c[l]=null;break}}if(t==null){if(_==null)return document.createTextNode(v);t=document.createElementNS(a,_,v.is&&v),i&&(E.__m&&E.__m(e,c),i=!1),c=null}if(_==null)x===v||i&&t.data==v||(t.data=v);else{if(c=_=="textarea"&&v.defaultValue!=null?null:c&&ge.call(t.childNodes),!i&&c!=null)for(x={},l=0;l<t.attributes.length;l++)x[(p=t.attributes[l]).name]=p.value;for(l in x)p=x[l],l=="dangerouslySetInnerHTML"?f=p:l=="children"||l in v||l=="value"&&"defaultValue"in v||l=="checked"&&"defaultChecked"in v||ce(t,l,null,p,a);for(l in v)p=v[l],l=="children"?d=p:l=="dangerouslySetInnerHTML"?h=p:l=="value"?m=p:l=="checked"?y=p:i&&typeof p!="function"||x[l]===p||ce(t,l,p,x[l],a);if(h)i||f&&(h.__html==f.__html||h.__html==t.innerHTML)||(t.innerHTML=h.__html),e.__k=[];else if(f&&(t.innerHTML=""),Dt(e.type=="template"?t.content:t,xe(d)?d:[d],e,r,o,_=="foreignObject"?"http://www.w3.org/1999/xhtml":a,c,s,c?c[0]:r.__k&&X(r,0),i,u),c!=null)for(l=c.length;l--;)Be(c[l]);i&&_!="textarea"||(l="value",_=="progress"&&m==null?t.removeAttribute("value"):m!=null&&(m!==t[l]||_=="progress"&&!m||_=="option"&&m!=x[l])&&ce(t,l,m,x[l],a),l="checked",y!=null&&y!=t[l]&&ce(t,l,y,x[l],a))}return t}function ze(t,e,r){try{if(typeof t=="function"){var o=typeof t.__u=="function";o&&t.__u(),o&&e==null||(t.__u=t(e))}else t.current=e}catch(a){E.__e(a,r)}}function Bt(t,e,r){var o,a;if(E.unmount&&E.unmount(t),(o=t.ref)&&(o.current&&o.current!=t.__e||ze(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(c){E.__e(c,e)}o.base=o.__P=o.__n=null}if(o=t.__k)for(a=0;a<o.length;a++)o[a]&&Bt(o[a],e,r||typeof t.type!="function");r||Be(t.__e),t.__c=t.__=t.__e=void 0}function on(t,e,r){return this.constructor(t,r)}function an(t,e,r){var o,a,c,s;e==document&&(e=document.documentElement),E.__&&E.__(t,e),a=(o=!1)?null:e.__k,c=[],s=[],Pe(e,t=e.__k=Qt(ye,null,[t]),a||fe,fe,e.namespaceURI,a?null:e.firstChild?ge.call(e.childNodes):null,c,a?a.__e:e.firstChild,o,s),Ft(c,t,s),t.props.children=null}ge=pe.slice,E={__e:function(t,e,r,o){for(var a,c,s;e=e.__;)if((a=e.__c)&&!a.__)try{if((c=a.constructor)&&c.getDerivedStateFromError!=null&&(a.setState(c.getDerivedStateFromError(t)),s=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(t,o||{}),s=a.__d),s)return a.__E=a}catch(i){t=i}throw t}},It=0,de.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=j({},this.state),typeof t=="function"&&(t=t(j({},r),this.props)),t&&j(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),Je(this))},de.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Je(this))},de.prototype.render=ye,q=[],St=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Lt=function(t,e){return t.__v.__b-e.__v.__b},me.__r=0,Ce=Math.random().toString(8),le="__d"+Ce,ee="__a"+Ce,Rt=/(PointerCapture)$|Capture$/i,He=0,Oe=Xe(!1),De=Xe(!0);var cn=0;function n(t,e,r,o,a,c){e||(e={});var s,i,u=e;if("ref"in u)for(i in u={},e)i=="ref"?s=e[i]:u[i]=e[i];var l={type:t,props:u,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--cn,__i:-1,__u:0,__source:a,__self:c};if(typeof t=="function"&&(s=t.defaultProps))for(i in s)u[i]===void 0&&(u[i]=s[i]);return E.vnode&&E.vnode(l),l}var te,L,Ee,Ze,be=0,Pt=[],O=E,Qe=O.__b,et=O.__r,tt=O.diffed,nt=O.__c,rt=O.unmount,ot=O.__;function je(t,e){O.__h&&O.__h(L,t,be||e),be=0;var r=L.__H||(L.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({}),r.__[t]}function I(t){return be=1,sn(Vt,t)}function sn(t,e,r){var o=je(te++,2);if(o.t=t,!o.__c&&(o.__=[Vt(void 0,e),function(i){var u=o.__N?o.__N[0]:o.__[0],l=o.t(u,i);u!==l&&(o.__N=[l,o.__[1]],o.__c.setState({}))}],o.__c=L,!L.__f)){var a=function(i,u,l){if(!o.__c.__H)return!0;var h=!1,f=o.__c.props!==i;if(o.__c.__H.__.some(function(p){if(p.__N){h=!0;var m=p.__[0];p.__=p.__N,p.__N=void 0,m!==p.__[0]&&(f=!0)}}),c){var d=c.call(this,i,u,l);return h?d||f:d}return!h||f};L.__f=!0;var c=L.shouldComponentUpdate,s=L.componentWillUpdate;L.componentWillUpdate=function(i,u,l){if(this.__e){var h=c;c=void 0,a(i,u,l),c=h}s&&s.call(this,i,u,l)},L.shouldComponentUpdate=a}return o.__N||o.__}function zt(t,e){var r=je(te++,3);!O.__s&&Ut(r.__H,e)&&(r.__=t,r.u=e,L.__H.__h.push(r))}function ln(t){return be=5,jt(function(){return{current:t}},[])}function jt(t,e){var r=je(te++,7);return Ut(r.__H,e)&&(r.__=t(),r.__H=e,r.__h=t),r.__}function dn(){for(var t;t=Pt.shift();){var e=t.__H;if(t.__P&&e)try{e.__h.some(ue),e.__h.some(Ne),e.__h=[]}catch(r){e.__h=[],O.__e(r,t.__v)}}}O.__b=function(t){L=null,Qe&&Qe(t)},O.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),ot&&ot(t,e)},O.__r=function(t){et&&et(t),te=0;var e=(L=t.__c).__H;e&&(Ee===L?(e.__h=[],L.__h=[],e.__.some(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(e.__h.some(ue),e.__h.some(Ne),e.__h=[],te=0)),Ee=L},O.diffed=function(t){tt&&tt(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Pt.push(e)!==1&&Ze===O.requestAnimationFrame||((Ze=O.requestAnimationFrame)||un)(dn)),e.__H.__.some(function(r){r.u&&(r.__H=r.u,r.u=void 0)})),Ee=L=null},O.__c=function(t,e){e.some(function(r){try{r.__h.some(ue),r.__h=r.__h.filter(function(o){return!o.__||Ne(o)})}catch(o){e.some(function(a){a.__h&&(a.__h=[])}),e=[],O.__e(o,r.__v)}}),nt&&nt(t,e)},O.unmount=function(t){rt&&rt(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.some(function(o){try{ue(o)}catch(a){e=a}}),r.__H=void 0,e&&O.__e(e,r.__v))};var at=typeof requestAnimationFrame=="function";function un(t){var e,r=function(){clearTimeout(o),at&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(r,35);at&&(e=requestAnimationFrame(r))}function ue(t){var e=L,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),L=e}function Ne(t){var e=L;t.__c=t.__(),L=e}function Ut(t,e){return!t||t.length!==e.length||e.some(function(r,o){return r!==t[o]})}function Vt(t,e){return typeof e=="function"?e(t):e}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t){return t<0?-1:t===0?0:1}function ct(t,e,r){return(1-r)*t+r*e}function hn(t,e,r){return r<t?t:r>e?e:r}function ve(t){return t=t%360,t<0&&(t=t+360),t}function fn(t,e){return ve(e-t)<=180?1:-1}function pn(t,e){return 180-Math.abs(Math.abs(t-e)-180)}function $e(t,e){const r=t[0]*e[0][0]+t[1]*e[0][1]+t[2]*e[0][2],o=t[0]*e[1][0]+t[1]*e[1][1]+t[2]*e[1][2],a=t[0]*e[2][0]+t[1]*e[2][1]+t[2]*e[2][2];return[r,o,a]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],bn=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],_n=[95.047,100,108.883];function Ue(t,e,r){return(255<<24|(t&255)<<16|(e&255)<<8|r&255)>>>0}function st(t){const e=K(t[0]),r=K(t[1]),o=K(t[2]);return Ue(e,r,o)}function gn(t){return t>>16&255}function xn(t){return t>>8&255}function yn(t){return t&255}function vn(t,e,r){const o=bn,a=o[0][0]*t+o[0][1]*e+o[0][2]*r,c=o[1][0]*t+o[1][1]*e+o[1][2]*r,s=o[2][0]*t+o[2][1]*e+o[2][2]*r,i=K(a),u=K(c),l=K(s);return Ue(i,u,l)}function wn(t){const e=Q(gn(t)),r=Q(xn(t)),o=Q(yn(t));return $e([e,r,o],mn)}function Tn(t){const e=_e(t),r=K(e);return Ue(r,r,r)}function Fe(t){const e=wn(t)[1];return 116*Gt(e/100)-16}function _e(t){return 100*An((t+16)/116)}function Mn(t){return Gt(t/100)*116-16}function Q(t){const e=t/255;return e<=.040449936?e/12.92*100:Math.pow((e+.055)/1.055,2.4)*100}function K(t){const e=t/100;let r=0;return e<=.0031308?r=e*12.92:r=1.055*Math.pow(e,1/2.4)-.055,hn(0,255,Math.round(r*255))}function kn(){return _n}function Gt(t){const e=.008856451679035631,r=24389/27;return t>e?Math.pow(t,1/3):(r*t+16)/116}function An(t){const e=.008856451679035631,r=24389/27,o=t*t*t;return o>e?o:(116*t-16)/r}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static make(e=kn(),r=200/Math.PI*_e(50)/100,o=50,a=2,c=!1){const s=e,i=s[0]*.401288+s[1]*.650173+s[2]*-.051461,u=s[0]*-.250268+s[1]*1.204414+s[2]*.045854,l=s[0]*-.002079+s[1]*.048952+s[2]*.953127,h=.8+a/10,f=h>=.9?ct(.59,.69,(h-.9)*10):ct(.525,.59,(h-.8)*10);let d=c?1:h*(1-1/3.6*Math.exp((-r-42)/92));d=d>1?1:d<0?0:d;const p=h,m=[d*(100/i)+1-d,d*(100/u)+1-d,d*(100/l)+1-d],y=1/(5*r+1),x=y*y*y*y,v=1-x,_=x*r+.1*v*v*Math.cbrt(5*r),b=_e(o)/e[1],w=1.48+Math.sqrt(b),k=.725/Math.pow(b,.2),C=k,T=[Math.pow(_*m[0]*i/100,.42),Math.pow(_*m[1]*u/100,.42),Math.pow(_*m[2]*l/100,.42)],A=[400*T[0]/(T[0]+27.13),400*T[1]/(T[1]+27.13),400*T[2]/(T[2]+27.13)],S=(2*A[0]+A[1]+.05*A[2])*k;return new z(b,S,k,C,f,p,m,_,Math.pow(_,.25),w)}constructor(e,r,o,a,c,s,i,u,l,h){this.n=e,this.aw=r,this.nbb=o,this.ncb=a,this.c=c,this.nc=s,this.rgbD=i,this.fl=u,this.fLRoot=l,this.z=h}}z.DEFAULT=z.make();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,r,o,a,c,s,i,u,l){this.hue=e,this.chroma=r,this.j=o,this.q=a,this.m=c,this.s=s,this.jstar=i,this.astar=u,this.bstar=l}distance(e){const r=this.jstar-e.jstar,o=this.astar-e.astar,a=this.bstar-e.bstar,c=Math.sqrt(r*r+o*o+a*a);return 1.41*Math.pow(c,.63)}static fromInt(e){return D.fromIntInViewingConditions(e,z.DEFAULT)}static fromIntInViewingConditions(e,r){const o=(e&16711680)>>16,a=(e&65280)>>8,c=e&255,s=Q(o),i=Q(a),u=Q(c),l=.41233895*s+.35762064*i+.18051042*u,h=.2126*s+.7152*i+.0722*u,f=.01932141*s+.11916382*i+.95034478*u,d=.401288*l+.650173*h-.051461*f,p=-.250268*l+1.204414*h+.045854*f,m=-.002079*l+.048952*h+.953127*f,y=r.rgbD[0]*d,x=r.rgbD[1]*p,v=r.rgbD[2]*m,_=Math.pow(r.fl*Math.abs(y)/100,.42),b=Math.pow(r.fl*Math.abs(x)/100,.42),w=Math.pow(r.fl*Math.abs(v)/100,.42),k=F(y)*400*_/(_+27.13),C=F(x)*400*b/(b+27.13),T=F(v)*400*w/(w+27.13),A=(11*k+-12*C+T)/11,S=(k+C-2*T)/9,M=(20*k+20*C+21*T)/20,$=(40*k+20*C+T)/20,Z=Math.atan2(S,A)*180/Math.PI,B=ve(Z),ne=B*Math.PI/180,re=$*r.nbb,G=100*Math.pow(re/r.aw,r.c*r.z),oe=4/r.c*Math.sqrt(G/100)*(r.aw+4)*r.fLRoot,Te=B<20.14?B+360:B,Me=.25*(Math.cos(Te*Math.PI/180+2)+3.8),Ae=5e4/13*Me*r.nc*r.ncb*Math.sqrt(A*A+S*S)/(M+.305),ae=Math.pow(Ae,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),Ge=ae*Math.sqrt(G/100),We=Ge*r.fLRoot,Yt=50*Math.sqrt(ae*r.c/(r.aw+4)),Jt=(1+100*.007)*G/(1+.007*G),qe=1/.0228*Math.log(1+.0228*We),Kt=qe*Math.cos(ne),Xt=qe*Math.sin(ne);return new D(B,Ge,G,oe,We,Yt,Jt,Kt,Xt)}static fromJch(e,r,o){return D.fromJchInViewingConditions(e,r,o,z.DEFAULT)}static fromJchInViewingConditions(e,r,o,a){const c=4/a.c*Math.sqrt(e/100)*(a.aw+4)*a.fLRoot,s=r*a.fLRoot,i=r/Math.sqrt(e/100),u=50*Math.sqrt(i*a.c/(a.aw+4)),l=o*Math.PI/180,h=(1+100*.007)*e/(1+.007*e),f=1/.0228*Math.log(1+.0228*s),d=f*Math.cos(l),p=f*Math.sin(l);return new D(o,r,e,c,s,u,h,d,p)}static fromUcs(e,r,o){return D.fromUcsInViewingConditions(e,r,o,z.DEFAULT)}static fromUcsInViewingConditions(e,r,o,a){const c=r,s=o,i=Math.sqrt(c*c+s*s),l=(Math.exp(i*.0228)-1)/.0228/a.fLRoot;let h=Math.atan2(s,c)*(180/Math.PI);h<0&&(h+=360);const f=e/(1-(e-100)*.007);return D.fromJchInViewingConditions(f,l,h,a)}toInt(){return this.viewed(z.DEFAULT)}viewed(e){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),o=Math.pow(r/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),a=this.hue*Math.PI/180,c=.25*(Math.cos(a+2)+3.8),s=e.aw*Math.pow(this.j/100,1/e.c/e.z),i=c*(5e4/13)*e.nc*e.ncb,u=s/e.nbb,l=Math.sin(a),h=Math.cos(a),f=23*(u+.305)*o/(23*i+11*o*h+108*o*l),d=f*h,p=f*l,m=(460*u+451*d+288*p)/1403,y=(460*u-891*d-261*p)/1403,x=(460*u-220*d-6300*p)/1403,v=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),_=F(m)*(100/e.fl)*Math.pow(v,1/.42),b=Math.max(0,27.13*Math.abs(y)/(400-Math.abs(y))),w=F(y)*(100/e.fl)*Math.pow(b,1/.42),k=Math.max(0,27.13*Math.abs(x)/(400-Math.abs(x))),C=F(x)*(100/e.fl)*Math.pow(k,1/.42),T=_/e.rgbD[0],A=w/e.rgbD[1],S=C/e.rgbD[2],M=1.86206786*T-1.01125463*A+.14918677*S,$=.38752654*T+.62144744*A-.00897398*S,V=-.0158415*T-.03412294*A+1.04996444*S;return vn(M,$,V)}static fromXyzInViewingConditions(e,r,o,a){const c=.401288*e+.650173*r-.051461*o,s=-.250268*e+1.204414*r+.045854*o,i=-.002079*e+.048952*r+.953127*o,u=a.rgbD[0]*c,l=a.rgbD[1]*s,h=a.rgbD[2]*i,f=Math.pow(a.fl*Math.abs(u)/100,.42),d=Math.pow(a.fl*Math.abs(l)/100,.42),p=Math.pow(a.fl*Math.abs(h)/100,.42),m=F(u)*400*f/(f+27.13),y=F(l)*400*d/(d+27.13),x=F(h)*400*p/(p+27.13),v=(11*m+-12*y+x)/11,_=(m+y-2*x)/9,b=(20*m+20*y+21*x)/20,w=(40*m+20*y+x)/20,C=Math.atan2(_,v)*180/Math.PI,T=C<0?C+360:C>=360?C-360:C,A=T*Math.PI/180,S=w*a.nbb,M=100*Math.pow(S/a.aw,a.c*a.z),$=4/a.c*Math.sqrt(M/100)*(a.aw+4)*a.fLRoot,V=T<20.14?T+360:T,Z=1/4*(Math.cos(V*Math.PI/180+2)+3.8),ne=5e4/13*Z*a.nc*a.ncb*Math.sqrt(v*v+_*_)/(b+.305),re=Math.pow(ne,.9)*Math.pow(1.64-Math.pow(.29,a.n),.73),G=re*Math.sqrt(M/100),oe=G*a.fLRoot,Te=50*Math.sqrt(re*a.c/(a.aw+4)),Me=(1+100*.007)*M/(1+.007*M),ke=Math.log(1+.0228*oe)/.0228,Ae=ke*Math.cos(A),ae=ke*Math.sin(A);return new D(T,G,M,$,oe,Te,Me,Ae,ae)}xyzInViewingConditions(e){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),o=Math.pow(r/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),a=this.hue*Math.PI/180,c=.25*(Math.cos(a+2)+3.8),s=e.aw*Math.pow(this.j/100,1/e.c/e.z),i=c*(5e4/13)*e.nc*e.ncb,u=s/e.nbb,l=Math.sin(a),h=Math.cos(a),f=23*(u+.305)*o/(23*i+11*o*h+108*o*l),d=f*h,p=f*l,m=(460*u+451*d+288*p)/1403,y=(460*u-891*d-261*p)/1403,x=(460*u-220*d-6300*p)/1403,v=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),_=F(m)*(100/e.fl)*Math.pow(v,1/.42),b=Math.max(0,27.13*Math.abs(y)/(400-Math.abs(y))),w=F(y)*(100/e.fl)*Math.pow(b,1/.42),k=Math.max(0,27.13*Math.abs(x)/(400-Math.abs(x))),C=F(x)*(100/e.fl)*Math.pow(k,1/.42),T=_/e.rgbD[0],A=w/e.rgbD[1],S=C/e.rgbD[2],M=1.86206786*T-1.01125463*A+.14918677*S,$=.38752654*T+.62144744*A-.00897398*S,V=-.0158415*T-.03412294*A+1.04996444*S;return[M,$,V]}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{static sanitizeRadians(e){return(e+Math.PI*8)%(Math.PI*2)}static trueDelinearized(e){const r=e/100;let o=0;return r<=.0031308?o=r*12.92:o=1.055*Math.pow(r,1/2.4)-.055,o*255}static chromaticAdaptation(e){const r=Math.pow(Math.abs(e),.42);return F(e)*400*r/(r+27.13)}static hueOf(e){const r=$e(e,g.SCALED_DISCOUNT_FROM_LINRGB),o=g.chromaticAdaptation(r[0]),a=g.chromaticAdaptation(r[1]),c=g.chromaticAdaptation(r[2]),s=(11*o+-12*a+c)/11,i=(o+a-2*c)/9;return Math.atan2(i,s)}static areInCyclicOrder(e,r,o){const a=g.sanitizeRadians(r-e),c=g.sanitizeRadians(o-e);return a<c}static intercept(e,r,o){return(r-e)/(o-e)}static lerpPoint(e,r,o){return[e[0]+(o[0]-e[0])*r,e[1]+(o[1]-e[1])*r,e[2]+(o[2]-e[2])*r]}static setCoordinate(e,r,o,a){const c=g.intercept(e[a],r,o[a]);return g.lerpPoint(e,c,o)}static isBounded(e){return 0<=e&&e<=100}static nthVertex(e,r){const o=g.Y_FROM_LINRGB[0],a=g.Y_FROM_LINRGB[1],c=g.Y_FROM_LINRGB[2],s=r%4<=1?0:100,i=r%2===0?0:100;if(r<4){const u=s,l=i,h=(e-u*a-l*c)/o;return g.isBounded(h)?[h,u,l]:[-1,-1,-1]}else if(r<8){const u=s,l=i,h=(e-l*o-u*c)/a;return g.isBounded(h)?[l,h,u]:[-1,-1,-1]}else{const u=s,l=i,h=(e-u*o-l*a)/c;return g.isBounded(h)?[u,l,h]:[-1,-1,-1]}}static bisectToSegment(e,r){let o=[-1,-1,-1],a=o,c=0,s=0,i=!1,u=!0;for(let l=0;l<12;l++){const h=g.nthVertex(e,l);if(h[0]<0)continue;const f=g.hueOf(h);if(!i){o=h,a=h,c=f,s=f,i=!0;continue}(u||g.areInCyclicOrder(c,f,s))&&(u=!1,g.areInCyclicOrder(c,r,f)?(a=h,s=f):(o=h,c=f))}return[o,a]}static midpoint(e,r){return[(e[0]+r[0])/2,(e[1]+r[1])/2,(e[2]+r[2])/2]}static criticalPlaneBelow(e){return Math.floor(e-.5)}static criticalPlaneAbove(e){return Math.ceil(e-.5)}static bisectToLimit(e,r){const o=g.bisectToSegment(e,r);let a=o[0],c=g.hueOf(a),s=o[1];for(let i=0;i<3;i++)if(a[i]!==s[i]){let u=-1,l=255;a[i]<s[i]?(u=g.criticalPlaneBelow(g.trueDelinearized(a[i])),l=g.criticalPlaneAbove(g.trueDelinearized(s[i]))):(u=g.criticalPlaneAbove(g.trueDelinearized(a[i])),l=g.criticalPlaneBelow(g.trueDelinearized(s[i])));for(let h=0;h<8&&!(Math.abs(l-u)<=1);h++){const f=Math.floor((u+l)/2),d=g.CRITICAL_PLANES[f],p=g.setCoordinate(a,d,s,i),m=g.hueOf(p);g.areInCyclicOrder(c,r,m)?(s=p,l=f):(a=p,c=m,u=f)}}return g.midpoint(a,s)}static inverseChromaticAdaptation(e){const r=Math.abs(e),o=Math.max(0,27.13*r/(400-r));return F(e)*Math.pow(o,1/.42)}static findResultByJ(e,r,o){let a=Math.sqrt(o)*11;const c=z.DEFAULT,s=1/Math.pow(1.64-Math.pow(.29,c.n),.73),u=.25*(Math.cos(e+2)+3.8)*(5e4/13)*c.nc*c.ncb,l=Math.sin(e),h=Math.cos(e);for(let f=0;f<5;f++){const d=a/100,p=r===0||a===0?0:r/Math.sqrt(d),m=Math.pow(p*s,1/.9),x=c.aw*Math.pow(d,1/c.c/c.z)/c.nbb,v=23*(x+.305)*m/(23*u+11*m*h+108*m*l),_=v*h,b=v*l,w=(460*x+451*_+288*b)/1403,k=(460*x-891*_-261*b)/1403,C=(460*x-220*_-6300*b)/1403,T=g.inverseChromaticAdaptation(w),A=g.inverseChromaticAdaptation(k),S=g.inverseChromaticAdaptation(C),M=$e([T,A,S],g.LINRGB_FROM_SCALED_DISCOUNT);if(M[0]<0||M[1]<0||M[2]<0)return 0;const $=g.Y_FROM_LINRGB[0],V=g.Y_FROM_LINRGB[1],Z=g.Y_FROM_LINRGB[2],B=$*M[0]+V*M[1]+Z*M[2];if(B<=0)return 0;if(f===4||Math.abs(B-o)<.002)return M[0]>100.01||M[1]>100.01||M[2]>100.01?0:st(M);a=a-(B-o)*a/(2*B)}return 0}static solveToInt(e,r,o){if(r<1e-4||o<1e-4||o>99.9999)return Tn(o);e=ve(e);const a=e/180*Math.PI,c=_e(o),s=g.findResultByJ(a,r,c);if(s!==0)return s;const i=g.bisectToLimit(c,a);return st(i)}static solveToCam(e,r,o){return D.fromInt(g.solveToInt(e,r,o))}}g.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];g.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];g.Y_FROM_LINRGB=[.2126,.7152,.0722];g.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static from(e,r,o){return new N(g.solveToInt(e,r,o))}static fromInt(e){return new N(e)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(e){this.setInternalState(g.solveToInt(e,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(e){this.setInternalState(g.solveToInt(this.internalHue,e,this.internalTone))}get tone(){return this.internalTone}set tone(e){this.setInternalState(g.solveToInt(this.internalHue,this.internalChroma,e))}setValue(e,r){this[e]=r}toString(){return`HCT(${this.hue.toFixed(0)}, ${this.chroma.toFixed(0)}, ${this.tone.toFixed(0)})`}static isBlue(e){return e>=250&&e<270}static isYellow(e){return e>=105&&e<125}static isCyan(e){return e>=170&&e<207}constructor(e){this.argb=e;const r=D.fromInt(e);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=Fe(e),this.argb=e}setInternalState(e){const r=D.fromInt(e);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=Fe(e),this.argb=e}inViewingConditions(e){const o=D.fromInt(this.toInt()).xyzInViewingConditions(e),a=D.fromXyzInViewingConditions(o[0],o[1],o[2],z.make());return N.from(a.hue,a.chroma,Mn(o[1]))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static fromInt(e){const r=N.fromInt(e);return R.fromHct(r)}static fromHct(e){return new R(e.hue,e.chroma,e)}static fromHueAndChroma(e,r){const o=new Cn(e,r).create();return new R(e,r,o)}constructor(e,r,o){this.hue=e,this.chroma=r,this.keyColor=o,this.cache=new Map}tone(e){let r=this.cache.get(e);return r===void 0&&(e==99&&N.isYellow(this.hue)?r=this.averageArgb(this.tone(98),this.tone(100)):r=N.from(this.hue,this.chroma,e).toInt(),this.cache.set(e,r)),r}getHct(e){return N.fromInt(this.tone(e))}averageArgb(e,r){const o=e>>>16&255,a=e>>>8&255,c=e&255,s=r>>>16&255,i=r>>>8&255,u=r&255,l=Math.round((o+s)/2),h=Math.round((a+i)/2),f=Math.round((c+u)/2);return(255<<24|(l&255)<<16|(h&255)<<8|f&255)>>>0}}class Cn{constructor(e,r){this.hue=e,this.requestedChroma=r,this.chromaCache=new Map,this.maxChromaValue=200}create(){let a=0,c=100;for(;a<c;){const s=Math.floor((a+c)/2),i=this.maxChroma(s)<this.maxChroma(s+1);if(this.maxChroma(s)>=this.requestedChroma-.01)if(Math.abs(a-50)<Math.abs(c-50))c=s;else{if(a===s)return N.from(this.hue,this.requestedChroma,a);a=s}else i?a=s+1:c=s}return N.from(this.hue,this.requestedChroma,a)}maxChroma(e){if(this.chromaCache.has(e))return this.chromaCache.get(e);const r=N.from(this.hue,this.maxChromaValue,e).chroma;return this.chromaCache.set(e,r),r}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{static of(e){return new H(e,!1)}static contentOf(e){return new H(e,!0)}static fromColors(e){return H.createPaletteFromColors(!1,e)}static contentFromColors(e){return H.createPaletteFromColors(!0,e)}static createPaletteFromColors(e,r){const o=new H(r.primary,e);if(r.secondary){const a=new H(r.secondary,e);o.a2=a.a1}if(r.tertiary){const a=new H(r.tertiary,e);o.a3=a.a1}if(r.error){const a=new H(r.error,e);o.error=a.a1}if(r.neutral){const a=new H(r.neutral,e);o.n1=a.n1}if(r.neutralVariant){const a=new H(r.neutralVariant,e);o.n2=a.n2}return o}constructor(e,r){const o=N.fromInt(e),a=o.hue,c=o.chroma;r?(this.a1=R.fromHueAndChroma(a,c),this.a2=R.fromHueAndChroma(a,c/3),this.a3=R.fromHueAndChroma(a+60,c/2),this.n1=R.fromHueAndChroma(a,Math.min(c/12,4)),this.n2=R.fromHueAndChroma(a,Math.min(c/6,8))):(this.a1=R.fromHueAndChroma(a,Math.max(48,c)),this.a2=R.fromHueAndChroma(a,16),this.a3=R.fromHueAndChroma(a+60,24),this.n1=R.fromHueAndChroma(a,4),this.n2=R.fromHueAndChroma(a,8)),this.error=R.fromHueAndChroma(25,84)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static harmonize(e,r){const o=N.fromInt(e),a=N.fromInt(r),c=pn(o.hue,a.hue),s=Math.min(c*.5,15),i=ve(o.hue+s*fn(o.hue,a.hue));return N.from(i,o.chroma,o.tone).toInt()}static hctHue(e,r,o){const a=we.cam16Ucs(e,r,o),c=D.fromInt(a),s=D.fromInt(e);return N.from(c.hue,s.chroma,Fe(e)).toInt()}static cam16Ucs(e,r,o){const a=D.fromInt(e),c=D.fromInt(r),s=a.jstar,i=a.astar,u=a.bstar,l=c.jstar,h=c.astar,f=c.bstar,d=s+(l-s)*o,p=i+(h-i)*o,m=u+(f-u)*o;return D.fromUcs(d,p,m).toInt()}}const En=10,J=t=>Math.max(0,Math.min(100,t));function Y(t){const e=t.replace("#",""),r=parseInt(e.substring(0,2),16),o=parseInt(e.substring(2,4),16),a=parseInt(e.substring(4,6),16);return(255<<24|(r&255)<<16|(o&255)<<8|a&255)>>>0}function W(t){const e=t>>16&255,r=t>>8&255,o=t&255,a=c=>c.toString(16).padStart(2,"0");return`#${a(e)}${a(r)}${a(o)}`}function Ie(t){const e=t/255;return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Se(t){const e=t<=.0031308?12.92*t:1.055*Math.pow(t,.4166666666666667)-.055;return Math.round(Math.max(0,Math.min(1,e))*255)}function lt(t){const e=Ie(t>>16&255),r=Ie(t>>8&255),o=Ie(t&255),a=Math.cbrt(.4122214708*e+.5363325363*r+.0514459929*o),c=Math.cbrt(.2119034982*e+.6806995451*r+.1073969566*o),s=Math.cbrt(.0883024619*e+.2817188376*r+.6299787005*o);return{l:.2104542553*a+.793617785*c-.0040720468*s,a:1.9779984951*a-2.428592205*c+.4505937099*s,b:.0259040371*a+.7827717662*c-.808675766*s}}function In(t){const e=t.l+.3963377774*t.a+.2158037573*t.b,r=t.l-.1055613458*t.a-.0638541728*t.b,o=t.l-.0894841775*t.a-1.291485548*t.b,a=e*e*e,c=r*r*r,s=o*o*o,i=Se(4.0767416621*a-3.3077115913*c+.2309699292*s),u=Se(-1.2684380046*a+2.6097574011*c-.3413193965*s),l=Se(-.0041960863*a-.7034186147*c+1.707614701*s);return(255<<24|(i&255)<<16|(u&255)<<8|l&255)>>>0}function it(t,e,r){const o=lt(Y(t)),a=lt(Y(r)),c=e/100;return W(In({l:a.l+(o.l-a.l)*c,a:a.a+(o.a-a.a)*c,b:a.b+(o.b-a.b)*c}))}function dt(t,e){const r=Math.round(e/100*255);return`${t}${r.toString(16).padStart(2,"0")}`}const Sn={pink:"#b48fb0",red:"#c97e6d",yellow:"#9c9250",green:"#699c7c",blue:"#3f8bcc"},Ln="#c97e6d",Rn="#699c7c";function ut(t,e){const r=N.fromInt(we.harmonize(Y(t),e));return R.fromHueAndChroma(r.hue,r.chroma)}const On=71,Dn=10,Nn=80,$n=10,Fn=62,Hn=10,Bn=1.2,Pn=.75,zn=42,jn=85,Un=68,Vn=5,Gn=30,Wn=85,qn=1.3,Yn=[["primary","on-primary"],["secondary","on-secondary"],["tertiary","on-tertiary"],["error","on-error"],["success","on-success"],["surface-container-1","on-surface"]],Jn=["primary","secondary","tertiary","error","success","on-surface"],ht=12,ft=24;function pt(t){return H.contentFromColors({primary:Y(t.primary),secondary:Y(t.secondary),tertiary:Y(t.tertiary)})}function mt(t,e){return(t?e<0:e>0)?1:0}const Kn=.65,Xn={primary:{axis:"p",lightTone:40,darkTone:80,naturalDirectionOnly:!0,dimmable:!0},"on-primary":{axis:"p",lightTone:96,darkTone:20,naturalDirectionOnly:!0},"primary-container":{axis:"p",lightTone:90,darkTone:30,dimmable:!0},"on-primary-container":{axis:"p",lightTone:10,darkTone:90},secondary:{axis:"s",lightTone:40,darkTone:80,naturalDirectionOnly:!0,dimmable:!0},"on-secondary":{axis:"s",lightTone:96,darkTone:20,naturalDirectionOnly:!0},"secondary-container":{axis:"s",lightTone:90,darkTone:30,dimmable:!0},"on-secondary-container":{axis:"s",lightTone:10,darkTone:90},tertiary:{axis:"t",lightTone:40,darkTone:80,naturalDirectionOnly:!0,dimmable:!0},"on-tertiary":{axis:"t",lightTone:96,darkTone:20,naturalDirectionOnly:!0},"tertiary-container":{axis:"t",lightTone:90,darkTone:30,dimmable:!0},"on-tertiary-container":{axis:"t",lightTone:10,darkTone:90},error:{axis:"error",lightTone:40,darkTone:80,naturalDirectionOnly:!0,dimmable:!0},"on-error":{axis:"error",lightTone:96,darkTone:20,naturalDirectionOnly:!0},"error-container":{axis:"error",lightTone:90,darkTone:30,dimmable:!0},"on-error-container":{axis:"error",lightTone:10,darkTone:90},success:{axis:"success",lightTone:40,darkTone:80,naturalDirectionOnly:!0,dimmable:!0},"on-success":{axis:"success",lightTone:96,darkTone:20,naturalDirectionOnly:!0},"success-container":{axis:"success",lightTone:90,darkTone:30,dimmable:!0},"on-success-container":{axis:"success",lightTone:10,darkTone:90},surface:{axis:"n",lightTone:98,darkTone:6},"on-surface":{axis:"n",lightTone:10,darkTone:90,shiftMultiplier:0},"on-surface-variant":{axis:"nv",lightTone:30,darkTone:80,shiftMultiplier:0},"surface-container-1":{axis:"n",lightTone:93,darkTone:11},"surface-container-2":{axis:"n",lightTone:88,darkTone:16},"surface-container-3":{axis:"n",lightTone:83,darkTone:21},"surface-container-4":{axis:"n",lightTone:78,darkTone:26},"surface-container-5":{axis:"n",lightTone:73,darkTone:31},"surface-container-6":{axis:"n",lightTone:68,darkTone:36},"surface-dim":{axis:"n",lightTone:87,darkTone:6},"surface-bright":{axis:"n",lightTone:98,darkTone:24},outline:{axis:"nv",lightTone:50,darkTone:60},"outline-variant":{axis:"nv",lightTone:80,darkTone:30},"inverse-surface":{axis:"n",lightTone:20,darkTone:90},"inverse-on-surface":{axis:"n",lightTone:95,darkTone:20},"inverse-primary":{axis:"p",lightTone:80,darkTone:40}};function bt(t,e,r){const o=Y(e.primary),a=ut(Ln,o),c=ut(Rn,o),s={p:t.a1,s:t.a2,t:t.a3,n:t.n1,nv:t.n2,error:a,success:c},i=(e.shift??0)*En,u=e.dimBaseline??Kn,l={};for(const[b,w]of Object.entries(Xn)){const k=s[w.axis],C=r?w.darkTone:w.lightTone,T=w.naturalDirectionOnly?mt(r,i):w.shiftMultiplier??1,A=w.dimmable?u:1,S=A===1?k:R.fromHueAndChroma(k.hue,k.chroma*A);l[b]=W(S.tone(J(C+i*T)))}const h=i*mt(r,i),f=u*1.5*(r?1:qn),d=s.p.chroma,p=r?On:zn,m=r?Dn:jn,y=r?Nn:Un,x=r?$n:Vn,v=r?Fn:Gn,_=r?Hn:Wn;for(const[b,w]of Object.entries(Sn)){const k=N.fromInt(we.harmonize(Y(w),o)),C=R.fromHueAndChroma(k.hue,d*f);l[b]=W(C.tone(J(p+h))),l[`on-${b}`]=W(C.tone(J(m+h)));const T=R.fromHueAndChroma((360+k.hue-16)%360,d*f*Bn);l[`d-${b}`]=W(T.tone(J(v+h))),l[`on-d-${b}`]=W(T.tone(J(_+h)));const A=R.fromHueAndChroma((360+k.hue)%360,d*f*Pn);l[`l-${b}`]=W(A.tone(J(y+h))),l[`on-l-${b}`]=W(A.tone(J(x+h)))}for(const[b,w]of Yn)l[`${b}-hover`]=it(l[w],ht,l[b]),l[`${b}-focus`]=it(l[w],ft,l[b]);for(const b of Jn)l[`${b}-hover-tint`]=dt(l[b],ht),l[`${b}-focus-tint`]=dt(l[b],ft);return l}const Zn=`
@theme {
    --radius-sm: 4px;
    --radius-md: 8px;
}

@layer base {
    html {
        -webkit-text-size-adjust: 100%;
    }

    body {
        color: var(--color-c-on-surface);
        background-color: var(--color-c-surface);
        line-height: 1.5;
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--color-c-on-surface);
    }
    h1 { font-size: 1.75rem; line-height: 2.25rem; font-weight: 425; }
    h2 { font-size: 1.375rem; line-height: 1.75rem; font-weight: 425; }
    h3 { font-size: 1.125rem; line-height: 1.5rem; font-weight: 500; }
    h4, h5, h6 { font-size: 1rem; line-height: 1.5rem; font-weight: 500; }

    strong, b {
        font-weight: 500;
    }

    small {
        color: var(--color-c-on-surface-variant);
        @apply text-sm;
    }

    a {
        color: var(--color-c-primary);
        text-decoration: none;
        @apply std-focus;
    }
    a:hover {
        text-decoration: underline;
    }

    hr {
        border: none;
        border-top: 1px solid var(--color-c-outline-variant);
    }

    code, pre {
        font-family: ui-monospace, monospace;
        background: var(--color-c-surface-container-1);
        @apply rounded-sm;
    }
    code {
        @apply px-1 py-0.5;
    }
    pre {
        @apply p-3 overflow-x-auto;
    }
    pre code {
        background: transparent;
        padding: 0;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }
    th, td {
        border: 1px solid var(--color-c-outline-variant);
        @apply px-2 py-1 text-left;
    }
    th {
        background: var(--color-c-surface-container-2);
        font-weight: 500;
    }

    fieldset {
        border: 1px solid var(--color-c-outline-variant);
        min-width: 0;
        @apply rounded-md p-3;
    }
    legend {
        color: var(--color-c-on-surface-variant);
        @apply px-1 text-sm;
    }

    /* A caption doesn't forward clicks/hover to its field; the field itself does. */
    label {
        color: var(--color-c-on-surface-variant);
        pointer-events: none;
        @apply text-sm;
    }
    label > * {
        pointer-events: auto;
    }
    label:has(> input[type="checkbox"], > input[type="radio"]) {
        color: var(--color-c-on-surface);
        pointer-events: auto;
        @apply text-base;
    }

    input, select, textarea, button {
        @apply input-like;
    }

    /* Fields default to a ~20 character width (the size attribute), which stops
       their containers shrinking on narrow screens. A real width replaces it. */
    input, select, textarea {
        min-width: 0;
    }
    label > input, label > select, label > textarea {
        width: 100%;
    }

    button {
        user-select: none;
        -webkit-touch-callout: none;
        @apply enabled:hover:cursor-pointer
            not-disabled:not-aria-disabled:focus:border-c-outline
            not-disabled:not-aria-disabled:focus:inset-ring-0
            not-disabled:not-aria-disabled:focus-within:border-c-outline
            not-disabled:not-aria-disabled:focus-within:inset-ring-0
            enabled:hover:bg-c-surface-container-1-hover
            enabled:active:bg-c-surface-container-1-focus
            std-focus!
            ;
    }

    input[type="checkbox"], input[type="radio"], input[type="range"], input[type="color"] {
        all: revert;
        pointer-events: auto;
        accent-color: var(--color-c-primary);
        @apply hover:cursor-pointer std-focus;
    }
    input[type="checkbox"]:disabled, input[type="radio"]:disabled, input[type="range"]:disabled, input[type="color"]:disabled {
        @apply cursor-not-allowed opacity-60;
    }

    ::selection {
        background: var(--color-c-primary);
        color: var(--color-c-on-primary);
    }
}

@utility std-focus {
    @apply focus-visible:outline-solid
        focus-visible:outline-2
        focus-visible:outline-c-primary
        focus-visible:outline-offset-2
}

@utility input-like {
    @apply text-c-on-surface
        text-base font-normal
        bg-c-surface-container-1

        rounded-sm
        px-2
        py-1
        border
        border-c-outline
        not-disabled:not-aria-disabled:hover:bg-c-surface-container-1-hover
        not-disabled:not-aria-disabled:focus:border-c-primary
        not-disabled:not-aria-disabled:focus:inset-ring-1
        not-disabled:not-aria-disabled:focus:inset-ring-c-primary
        not-disabled:not-aria-disabled:focus-within:border-c-primary
        not-disabled:not-aria-disabled:focus-within:inset-ring-1
        not-disabled:not-aria-disabled:focus-within:inset-ring-c-primary
        focus:outline-none
        focus-within:outline-none
        std-focus

        disabled:bg-c-surface-container-2
        disabled:text-c-on-surface-variant
        disabled:border-c-outline-variant
        disabled:cursor-not-allowed
        disabled:opacity-60

        aria-disabled:bg-c-surface-container-2
        aria-disabled:text-c-on-surface-variant
        aria-disabled:border-c-outline-variant
        aria-disabled:cursor-not-allowed
        aria-disabled:opacity-60
        aria-disabled:pointer-events-none;
}

/* input-like on a wrapper (a composite field): the wrapper draws hover/focus,
   the fields inside stay flat. */
.input-like :is(input, select, textarea, .input-like) {
    background-color: transparent !important;
    box-shadow: none !important;
}

/*
 * surface-N backs onto surface-container-N directly, so the number tells
 * you the tone step - no separate name mapping to remember. Starts at 1,
 * not 0: the page background is plain \`surface\`, set on <body>, so nothing
 * needs to nest *below* surface-1.
 */
@utility surface-1 {
    background: var(--color-c-surface-container-1);
    @apply text-c-on-surface rounded-md p-3;
}
@utility surface-2 {
    background: var(--color-c-surface-container-2);
    @apply text-c-on-surface rounded-md p-3;
}
@utility surface-3 {
    background: var(--color-c-surface-container-3);
    @apply text-c-on-surface rounded-md p-3;
}
@utility surface-4 {
    background: var(--color-c-surface-container-4);
    @apply text-c-on-surface rounded-md p-3;
}
@utility surface-5 {
    background: var(--color-c-surface-container-5);
    @apply text-c-on-surface rounded-md p-3;
}
@utility surface-6 {
    background: var(--color-c-surface-container-6);
    @apply text-c-on-surface rounded-md p-3;
}

/* Opt-in border: on its own for a box flush with the page, or added to a
   surface-N that needs a drawn boundary. */
@utility surface-border {
    @apply text-c-on-surface border border-c-outline-variant rounded-md p-3;
}

@utility btn-filled {
    @apply px-3 py-1 rounded font-medium border-none enabled:hover:cursor-pointer
        disabled:opacity-38 disabled:cursor-not-allowed;
}
@utility btn-primary {
    @apply btn-filled bg-c-primary text-c-on-primary
        enabled:hover:bg-c-primary-hover enabled:active:bg-c-primary-focus;
}
@utility btn-secondary {
    @apply btn-filled bg-c-secondary text-c-on-secondary
        enabled:hover:bg-c-secondary-hover
        enabled:active:bg-c-secondary-focus;
}
@utility btn-tertiary {
    @apply btn-filled bg-c-tertiary text-c-on-tertiary
        enabled:hover:bg-c-tertiary-hover
        enabled:active:bg-c-tertiary-focus;
}
@utility btn-error {
    @apply btn-filled bg-c-error text-c-on-error
        enabled:hover:bg-c-error-hover enabled:active:bg-c-error-focus;
}
@utility btn-success {
    @apply btn-filled bg-c-success text-c-on-success
        enabled:hover:bg-c-success-hover
        enabled:active:bg-c-success-focus;
}

@utility btn-outlined {
    @apply px-3 py-1 rounded font-medium bg-transparent border enabled:hover:cursor-pointer
        border-c-outline text-c-on-surface
        enabled:hover:bg-c-on-surface-hover-tint
        enabled:active:bg-c-on-surface-focus-tint
        disabled:opacity-38 disabled:cursor-not-allowed;
}
@utility btn-outlined-primary {
    @apply btn-outlined border-c-primary text-c-primary
        enabled:hover:bg-c-primary-hover-tint
        enabled:active:bg-c-primary-focus-tint;
}
@utility btn-outlined-secondary {
    @apply btn-outlined border-c-secondary text-c-secondary
        enabled:hover:bg-c-secondary-hover-tint
        enabled:active:bg-c-secondary-focus-tint;
}
@utility btn-outlined-tertiary {
    @apply btn-outlined border-c-tertiary text-c-tertiary
        enabled:hover:bg-c-tertiary-hover-tint
        enabled:active:bg-c-tertiary-focus-tint;
}
@utility btn-outlined-error {
    @apply btn-outlined border-c-error text-c-error
        enabled:hover:bg-c-error-hover-tint
        enabled:active:bg-c-error-focus-tint;
}
@utility btn-outlined-success {
    @apply btn-outlined border-c-success text-c-success
        enabled:hover:bg-c-success-hover-tint
        enabled:active:bg-c-success-focus-tint;
}
`;function Qn(t){const e={};for(const[r,o]of Object.entries(t))e[`--color-c-${r}`]=o;return e}function _t(t,e){return Object.entries(t).map(([r,o])=>`${e}--color-c-${r}: ${o};`).join(`
`)}function Le({label:t,value:e,onChange:r}){return n("label",{class:"flex items-center gap-2 text-sm",children:[n("input",{type:"color",value:e,onInput:o=>r(o.target.value),class:"h-8 w-12 cursor-pointer rounded-sm border border-c-outline bg-transparent"}),n("span",{children:t}),n("span",{class:"text-c-on-surface-variant",children:e})]})}function gt({label:t,value:e,onChange:r,min:o=-1,max:a=1}){return n("label",{class:"flex items-center gap-2 text-sm",children:[n("input",{type:"range",min:o,max:a,step:.01,value:e,onInput:c=>r(Number(c.target.value)),class:"w-32 cursor-pointer"}),n("span",{children:t}),n("span",{class:"text-c-on-surface-variant",children:e.toFixed(2)})]})}const P=["red","yellow","green","blue","pink"];function he({names:t}){const e=100/t.length,r=t.map((o,a)=>`var(--color-c-${o}) ${a*e}% ${(a+1)*e}%`).join(", ");return n("div",{class:"h-32 w-32 rounded-full flex-shrink-0",style:{background:`conic-gradient(${r})`}})}function Re({names:t}){return n("div",{class:"flex flex-wrap gap-2",children:t.map(e=>n("div",{class:"flex flex-col items-center gap-1",children:[n("div",{class:"h-8 w-14 rounded-sm flex items-center justify-center text-xs font-medium",style:{background:`var(--color-c-${e})`,color:`var(--color-c-on-${e})`},children:"Aa"}),n("span",{class:"text-c-on-surface-variant text-xs",children:e})]},e))})}function er({names:t}){return n("div",{class:"flex h-10 w-full max-w-2xl overflow-hidden rounded-sm border border-c-outline-variant",children:t.map(e=>n("div",{class:"h-full flex-1",style:{background:`var(--color-c-${e})`}},e))})}const xt=["14:17","15:41","17:04","19:49","11:53"],yt=40,tr=90,vt=40,nr=50,rr=220,or=44;function ar(t){const e=ln(null),[r,o]=I(t);return zt(()=>{const a=e.current;if(!a)return;const c=new ResizeObserver(s=>{var u;const i=(u=s[0])==null?void 0:u.contentRect.width;i&&o(i)});return c.observe(a),()=>c.disconnect()},[]),{ref:e,width:r}}function cr(t,e){const r=t*2.399963+e*1.618034;return(Math.sin(r)+1)/2}function se({names:t}){const{ref:e,width:r}=ar(800),o=xt.length,a=Array.from({length:o},(h,f)=>yt+f*(r-yt-tr)/(o-1)),c=Math.max(rr,t.length*or),s=vt+c+nr,i=c/t.length,u=i*.25,l=i-u*2;return n("div",{ref:e,class:"w-full",children:n("svg",{width:r,height:s,class:"surface-2 p-0 text-c-on-surface-variant",children:[t.map((h,f)=>{const d=vt+f*i+u,p=a.map((m,y)=>{const x=cr(f,y);return{x:m,y:d+x*l,value:1+(t.length-f)*10+x*20}});return n("g",{children:[n("polyline",{fill:"none",stroke:`var(--color-c-${h})`,"stroke-width":"2",points:p.map(m=>`${m.x},${m.y}`).join(" ")}),p.map((m,y)=>n("g",{children:[n("circle",{cx:m.x,cy:m.y,r:"5",fill:`var(--color-c-${h})`}),n("text",{x:m.x+5,y:m.y-5,fill:`var(--color-c-${h})`,class:"text-chart-sm","text-anchor":"start",children:m.value.toFixed(1)})]},y))]},h)}),a.map((h,f)=>n("text",{fill:"currentColor",class:"text-chart","text-anchor":"start",x:h-5,y:s-5,children:xt[f]},f))]})})}function sr({seeds:t,onSeedsChange:e,isDark:r,onDarkChange:o,font:a,onFontChange:c,onCopyCss:s,copied:i}){const[u,l]=I(!1);return n("div",{class:"fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2",children:[u&&n("div",{class:"surface-1 flex flex-col gap-3 w-full max-w-72 max-h-[70vh] overflow-y-auto",children:[n("div",{class:"flex items-center justify-between",children:[n("h4",{children:"Theme controls"}),n("button",{class:"btn-outlined",onClick:()=>o(!r),children:r?"Dark":"Light"})]}),n(Le,{label:"Primary",value:t.primary,onChange:h=>e({...t,primary:h})}),n(Le,{label:"Secondary",value:t.secondary,onChange:h=>e({...t,secondary:h})}),n(Le,{label:"Tertiary",value:t.tertiary,onChange:h=>e({...t,tertiary:h})}),n(gt,{label:"Shift",value:t.shift??0,onChange:h=>e({...t,shift:h})}),n(gt,{label:"Dim baseline",min:0,max:1,value:t.dimBaseline??.4,onChange:h=>e({...t,dimBaseline:h})}),n("div",{class:"flex items-center justify-between gap-2",children:[n("button",{class:"btn-outlined",onClick:()=>c(a==="M PLUS 1"?"M PLUS 2":"M PLUS 1"),children:["Font: ",a]}),n("button",{class:"btn-primary",onClick:s,children:i?"Copied!":"Copy CSS"})]})]}),n("button",{class:"btn-primary rounded-full h-12 w-12 flex items-center justify-center text-xl",onClick:()=>l(!u),children:u?"✕":"⚙"})]})}const lr=[{id:"dashboard",label:"Dashboard"},{id:"workout",label:"Workout"},{id:"tags",label:"Tags"},{id:"settings",label:"Settings"}];function ir({active:t,onSelect:e,class:r}){return n("nav",{class:`flex flex-wrap gap-1 ${r??""}`,children:lr.map(o=>n("button",{class:t===o.id?"btn-primary":"btn-outlined",onClick:()=>e(o.id),children:o.label},o.id))})}const dr=[{name:"Oatmeal & berries",time:"7:30 AM",calories:320,tag:"Breakfast",tagColor:"yellow"},{name:"Grilled chicken salad",time:"12:15 PM",calories:480,tag:"Lunch",tagColor:"green"},{name:"Apple + almonds",time:"3:00 PM",calories:210,tag:"Snack",tagColor:"pink"},{name:"Salmon & rice",time:"6:45 PM",calories:560,tag:"Dinner",tagColor:"blue"}];function ur({name:t,color:e}){return n("span",{class:"rounded-full px-2 py-0.5 text-xs font-medium",style:{background:`var(--color-c-${e})`,color:`var(--color-c-on-${e})`},children:t})}const wt=[{label:"Protein",color:"blue",grams:92},{label:"Carbs",color:"yellow",grams:210},{label:"Fat",color:"pink",grams:58}],Tt={Breakfast:"yellow",Lunch:"green",Snack:"pink",Dinner:"blue"};function hr({onCancel:t,onSave:e}){const[r,o]=I(""),[a,c]=I("Breakfast"),[s,i]=I(300);return n("div",{class:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",children:n("div",{class:"surface-1 flex w-full max-w-sm flex-col gap-2",children:[n("h3",{children:"Add meal"}),n("label",{class:"flex flex-col gap-1",children:["Name",n("input",{type:"text",placeholder:"e.g. Greek yogurt",value:r,onInput:u=>o(u.target.value)})]}),n("label",{class:"flex flex-col gap-1",children:["Meal type",n("select",{value:a,onChange:u=>c(u.target.value),children:Object.keys(Tt).map(u=>n("option",{children:u},u))})]}),n("label",{class:"flex flex-col gap-1",children:["Calories",n("input",{type:"number",min:0,value:s,onInput:u=>i(Number(u.target.value))})]}),n("div",{class:"flex justify-end gap-2 pt-2",children:[n("button",{onClick:t,children:"Cancel"}),n("button",{class:"btn-primary",disabled:r.trim()==="",onClick:()=>e({name:r,time:"Just now",calories:s,tag:a,tagColor:Tt[a]}),children:"Save"})]})]})})}function fr(){const[t,e]=I(!1),[r,o]=I(dr),[a,c]=I(!1);return n("div",{class:"flex flex-col gap-4",children:[n("div",{class:"flex flex-wrap items-start justify-between gap-3",children:[n("div",{children:[n("h2",{children:"Good evening, Sam"}),n("small",{children:"Here's how today went."})]}),n("button",{class:"btn-primary",onClick:()=>c(!0),children:"+ Add meal"})]}),a&&n(hr,{onCancel:()=>c(!1),onSave:s=>{o(i=>[...i,s]),c(!1)}}),!t&&n("div",{class:"surface-2 flex flex-wrap items-center justify-between gap-3",children:[n("div",{children:[n("h4",{children:"Meal saved successfully"}),n("small",{children:"Your weekly meal plan is ready."})]}),n("div",{class:"flex gap-2",children:[n("button",{onClick:()=>e(!0),children:"Dismiss"}),n("button",{class:"btn-success",children:"View meal plan"})]})]}),n("div",{class:"grid grid-cols-1 gap-4 md:grid-cols-3",children:[n("div",{class:"surface-1 flex flex-col gap-1",children:[n("small",{children:"Calories today"}),n("p",{class:"text-2xl",children:"1,570 / 2,200"}),n("div",{class:"h-2 rounded-full bg-c-surface-container-3 overflow-hidden",children:n("div",{class:"h-full rounded-full bg-c-yellow",style:{width:"71%"}})})]}),n("div",{class:"surface-1 flex flex-col gap-1",children:[n("small",{children:"Water intake"}),n("p",{class:"text-2xl",children:"5 / 8 cups"}),n("div",{class:"h-2 rounded-full bg-c-surface-container-3 overflow-hidden",children:n("div",{class:"h-full rounded-full bg-c-blue",style:{width:"62%"}})})]}),n("div",{class:"surface-1 flex flex-wrap items-center gap-3",children:[n(he,{names:wt.map(s=>s.color)}),n("div",{class:"flex flex-col gap-1 text-sm",children:wt.map(s=>n("div",{class:"flex items-center gap-2",children:[n("span",{class:"h-2.5 w-2.5 rounded-full flex-shrink-0",style:{background:`var(--color-c-${s.color})`}}),n("span",{children:[s.label," - ",s.grams,"g"]})]},s.label))})]})]}),n("div",{class:"rounded-md p-3 bg-c-primary-container text-c-on-primary-container",children:[n("strong",{children:"Tip:"})," log a food once and reuse it from your recent items next time."]}),n("div",{class:"surface-1 flex flex-col gap-2",children:[n("h3",{children:"Today's meals"}),n("div",{class:"overflow-x-auto",children:n("table",{children:[n("thead",{children:n("tr",{children:[n("th",{children:"Meal"}),n("th",{children:"Time"}),n("th",{children:"Calories"}),n("th",{children:"Tag"})]})}),n("tbody",{children:r.map(s=>n("tr",{children:[n("td",{children:s.name}),n("td",{children:s.time}),n("td",{children:s.calories}),n("td",{children:n(ur,{name:s.tag,color:s.tagColor})})]},s.name))})]})}),n("small",{children:["Need help logging a meal? ",n("a",{href:"#",children:"Read the guide"}),"."]})]})]})}function pr(){return n("div",{class:"flex flex-col gap-4",children:[n("div",{children:[n("h2",{children:"Settings"}),n("small",{children:"Manage your profile and preferences."})]}),n("div",{class:"surface-1 flex flex-col gap-4",children:[n("h3",{children:"Profile"}),n("div",{class:"grid grid-cols-1 gap-2 sm:grid-cols-2",children:[n("label",{class:"flex flex-col gap-1",children:["Display name",n("input",{type:"text",defaultValue:"Sam"})]}),n("label",{class:"flex flex-col gap-1",children:["Units",n("select",{children:[n("option",{children:"Metric"}),n("option",{children:"Imperial"})]})]}),n("label",{class:"flex flex-col gap-1",children:["Daily calorie goal",n("input",{type:"number",min:0,defaultValue:2200})]}),n("label",{class:"flex flex-col gap-1",children:["Linked device",n("input",{type:"text",defaultValue:"Not connected",disabled:!0})]})]}),n("div",{class:"surface-2 flex flex-col gap-2",children:[n("h4",{children:"Notifications"}),n("label",{class:"flex flex-row items-center gap-2",children:[n("input",{type:"checkbox",defaultChecked:!0}),"Daily meal reminder"]}),n("div",{class:"surface-3 flex items-center justify-between gap-4",children:[n("label",{for:"reminder-time",children:"...at a custom time"}),n("input",{id:"reminder-time",type:"time",defaultValue:"09:00"})]}),n("label",{class:"flex flex-row items-center gap-2",children:[n("input",{type:"checkbox"}),"Weekly summary email"]}),n("label",{class:"flex flex-row items-center gap-2",children:[n("input",{type:"checkbox",disabled:!0}),"Sync to watch (unavailable)"]})]}),n("div",{class:"flex justify-end gap-2",children:[n("button",{children:"Cancel"}),n("button",{class:"btn-primary",children:"Save changes"})]})]}),n("div",{class:"surface-border flex flex-col gap-2",children:[n("h4",{class:"text-c-error",children:"Danger zone"}),n("p",{children:"Deleting your account removes all logged meals and goals permanently."}),n("button",{class:"btn-outlined-error self-start",children:"Delete account"})]})]})}const mr=["Timed","Reps"];function br(){const[t,e]=I([{name:"Warm up",rounds:1,steps:[{exercise:"Jumping jacks",kind:"Timed",target:60},{exercise:"Rest",kind:"Timed",target:15}]},{name:"Tabata",rounds:8,steps:[{exercise:"Burpees",kind:"Timed",target:20},{exercise:"Rest",kind:"Timed",target:10}]}]),r=(o,a)=>e(c=>c.map((s,i)=>i===o?{...s,steps:s.steps.filter((u,l)=>l!==a)}:s));return n("div",{class:"flex flex-col gap-4",children:[n("div",{children:[n("h2",{children:"New workout"}),n("small",{children:"A workout is a list of sets. Each set repeats its steps for its number of rounds."})]}),n("div",{class:"surface-1 flex flex-col gap-4",children:[n("div",{class:"flex flex-col gap-2",children:[n("label",{class:"flex flex-col gap-1",children:["Name",n("input",{type:"text",placeholder:"e.g. Leg day"})]}),n("label",{class:"flex flex-col gap-1",children:["Note",n("textarea",{rows:2,placeholder:"Optional"})]}),n("div",{class:"flex flex-col gap-1",children:[n("label",{children:"Sounds"}),n("label",{class:"flex flex-row items-center gap-2",children:[n("input",{type:"checkbox",defaultChecked:!0}),"Beeps"]}),n("label",{class:"flex flex-row items-center gap-2",children:[n("input",{type:"checkbox"}),"Say each exercise as it starts"]})]})]}),t.map((o,a)=>n("div",{class:"surface-2 flex flex-col gap-4",children:[n("div",{class:"flex flex-wrap items-end gap-2",children:[n("label",{class:"flex flex-1 flex-col gap-1",children:["Set name",n("input",{type:"text",defaultValue:o.name})]}),n("label",{class:"flex w-24 flex-col gap-1",children:["Rounds",n("input",{type:"number",min:1,defaultValue:o.rounds})]})]}),n("div",{class:"flex flex-col gap-2",children:o.steps.map((c,s)=>n("div",{class:"flex flex-wrap items-center gap-2",children:[n("span",{class:"flex-1",children:c.exercise}),n("select",{"aria-label":"Step kind",defaultValue:c.kind,children:mr.map(i=>n("option",{children:i},i))}),n("input",{class:"w-20",type:"number","aria-label":"Seconds",defaultValue:c.target}),n("button",{class:"btn-outlined-error",onClick:()=>r(a,s),children:"Remove"})]},s))}),n("label",{class:"flex flex-col gap-1",children:["Add exercise",n("input",{type:"text",placeholder:"Search exercises"})]}),n("div",{class:"flex justify-end gap-2",children:[n("button",{children:"Duplicate set"}),n("button",{class:"btn-outlined-error",onClick:()=>e(c=>c.filter((s,i)=>i!==a)),children:"Delete set"})]})]},a)),n("button",{class:"self-start",onClick:()=>e(o=>[...o,{name:"",rounds:1,steps:[]}]),children:"Add set"}),n("div",{class:"flex items-center justify-end gap-2",children:[n("small",{class:"mr-auto",children:[t.reduce((o,a)=>o+a.rounds*a.steps.length,0)," steps"]}),n("button",{children:"Cancel"}),n("button",{class:"btn-success",children:"Save"})]})]})]})}const _r=["pink","red","yellow","green","blue"].flatMap(t=>[`--color-c-${t}`,`--color-c-l-${t}`,`--color-c-d-${t}`]),gr=["work:development","work:meetings","project:karopon","project:ponkotsu","issue:312","cardio:jumping_jack","cardio:running","workout:leg_day"],Mt={work:"--color-c-blue",project:"--color-c-d-green",issue:"--color-c-red",cardio:"--color-c-l-yellow",workout:"--color-c-pink"},xr=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/,yr=/^--[a-zA-Z][a-zA-Z0-9-]*$/,Wt=t=>t.length>0&&(xr.test(t)||yr.test(t)),qt=t=>t.startsWith("-")?`var(${t})`:t;function vr({tag:t,color:e}){var c;const r=e&&Wt(e)?qt(e):"var(--color-c-pink)",o=(c=r.match(/^var\(--color-c-([\w-]+)\)$/))==null?void 0:c[1],a=o?`var(--color-c-on-${o})`:void 0;return n("span",{class:"flex items-center min-h-8 rounded w-fit px-3",style:{backgroundColor:r,color:a},children:t})}function wr(){const[t,e]=I(Mt),[r,o]=I(!0),[a,c]=I(""),s=Object.keys(Mt),i=gr.filter(u=>u.includes(a.trim()));return n("div",{class:"flex flex-col gap-4",children:[n("div",{class:"flex flex-wrap justify-evenly gap-2",children:[n("button",{children:"New Tag"}),n("button",{disabled:r,onClick:()=>o(!0),children:"Tag Colors"})]}),r&&n("div",{class:"surface-1 flex flex-col gap-2",children:[n("details",{class:"w-full",children:[n("summary",{class:"cursor-pointer",children:[n("h2",{class:"inline",children:"Tag Colors"}),n("small",{children:" (click for help)"})]}),n("div",{class:"flex flex-col gap-2 pt-2",children:[n("p",{children:["Assign a color to each namespace. Accepts hex (",n("code",{children:"#rgb"}),", ",n("code",{children:"#rrggbb"}),") or a CSS variable name (",n("code",{children:"--xyz"}),"). Leave empty to remove a color."]}),n("p",{children:"Below are the variable names available, the colors change with the color theme."}),n("ul",{class:"flex flex-col gap-2",children:_r.map(u=>n("li",{class:"flex items-center gap-2",children:[n("span",{class:"w-6 h-6 rounded",style:{background:`var(${u})`}}),n("code",{children:u})]},u))})]})]}),s.map(u=>{const l=t[u]??"",h=l.trim()!==""&&!Wt(l.trim());return n("div",{class:"flex flex-wrap justify-between items-center gap-2",children:[n("div",{class:"flex items-center gap-2 min-w-0",children:[n("span",{class:"w-6 h-6 rounded flex-shrink-0",style:{backgroundColor:h?"transparent":qt(l.trim())}}),n("code",{class:"break-all",children:u})]}),n("div",{class:"flex flex-col gap-1 min-w-40",children:[n("input",{type:"text",class:"w-64 font-mono",placeholder:"#rrggbb or --name","aria-label":`Color for ${u}`,value:l,onInput:f=>e(d=>({...d,[u]:f.target.value}))}),h&&n("small",{class:"text-c-error",children:"Must be #rgb, #rrggbb, or --name"})]})]},u)}),n("div",{class:"flex gap-2 justify-end",children:[n("button",{onClick:()=>o(!1),children:"Cancel"}),n("button",{class:"btn-success",onClick:()=>o(!1),children:"Save"})]})]}),n("input",{type:"text",placeholder:"Search tags...","aria-label":"Search tags",value:a,onInput:u=>c(u.target.value)}),n("div",{class:"flex flex-col gap-2",children:i.length===0?n("p",{children:"No tags match your search."}):i.map(u=>{var l;return n("div",{class:"surface-1 flex items-center gap-2",children:[n("div",{class:"flex-1",children:n(vr,{tag:u,color:(l=t[u.split(":")[0]])==null?void 0:l.trim()})}),n("button",{children:"Edit"})]},u)})})]})}function Tr(){const[t,e]=I("dashboard");return n("div",{class:"flex flex-col md:flex-row gap-4 max-w-5xl mx-auto",children:[n("aside",{class:"surface-1 flex flex-row md:flex-col gap-2 md:w-48 md:flex-shrink-0",children:[n("h3",{class:"hidden md:block",children:"Meal Planner"}),n(ir,{active:t,onSelect:e,class:"flex-row md:flex-col"})]}),n("main",{class:"flex-1 min-w-0",children:[t==="dashboard"&&n(fr,{}),t==="workout"&&n(br,{}),t==="tags"&&n(wr,{}),t==="settings"&&n(pr,{})]})]})}function U({code:t,children:e}){return n("div",{class:"flex flex-col gap-2",children:[n("div",{class:"surface-border flex flex-wrap items-center gap-2",children:e}),n("pre",{class:"text-xs",children:n("code",{children:t})})]})}const Ve=["primary","secondary","tertiary","error","success"],Mr={primary:"rounded px-3 py-1 font-medium border-none bg-c-primary text-c-on-primary enabled:hover:bg-c-primary-hover enabled:active:bg-c-primary-focus",secondary:"rounded px-3 py-1 font-medium border-none bg-c-secondary text-c-on-secondary enabled:hover:bg-c-secondary-hover enabled:active:bg-c-secondary-focus",tertiary:"rounded px-3 py-1 font-medium border-none bg-c-tertiary text-c-on-tertiary enabled:hover:bg-c-tertiary-hover enabled:active:bg-c-tertiary-focus",error:"rounded px-3 py-1 font-medium border-none bg-c-error text-c-on-error enabled:hover:bg-c-error-hover enabled:active:bg-c-error-focus",success:"rounded px-3 py-1 font-medium border-none bg-c-success text-c-on-success enabled:hover:bg-c-success-hover enabled:active:bg-c-success-focus"},kr={primary:"rounded px-3 py-1 font-medium bg-transparent border border-c-primary text-c-primary enabled:hover:bg-c-primary-hover-tint enabled:active:bg-c-primary-focus-tint",secondary:"rounded px-3 py-1 font-medium bg-transparent border border-c-secondary text-c-secondary enabled:hover:bg-c-secondary-hover-tint enabled:active:bg-c-secondary-focus-tint",tertiary:"rounded px-3 py-1 font-medium bg-transparent border border-c-tertiary text-c-tertiary enabled:hover:bg-c-tertiary-hover-tint enabled:active:bg-c-tertiary-focus-tint",error:"rounded px-3 py-1 font-medium bg-transparent border border-c-error text-c-error enabled:hover:bg-c-error-hover-tint enabled:active:bg-c-error-focus-tint",success:"rounded px-3 py-1 font-medium bg-transparent border border-c-success text-c-success enabled:hover:bg-c-success-hover-tint enabled:active:bg-c-success-focus-tint"};function Ar(){const[t,e]=I(!1),[r,o]=I(!1),[a,c]=I(!1);return{state:a?"active":t?"hover":r?"focus":"idle",handlers:{onMouseEnter:()=>e(!0),onMouseLeave:()=>{e(!1),c(!1)},onFocus:i=>{i.currentTarget.matches(":focus-visible")&&o(!0)},onBlur:()=>o(!1),onMouseDown:()=>c(!0),onMouseUp:()=>c(!1)}}}function kt({cls:t,label:e,children:r}){const{state:o,handlers:a}=Ar();return n("div",{class:"flex flex-wrap items-center gap-3",children:[n("button",{class:t,...a,children:r}),n("code",{class:"text-xs",children:e[o]})]})}function Cr(){const[t,e]=I("primary");return n("section",{class:"flex flex-col gap-2",children:[n("h2",{children:"Interaction / state colors"}),n("small",{children:["There are four state colors per role: ",n("code",{children:"-hover"})," ","and ",n("code",{children:"-focus"})," are opaque colors for replacing a component's background, while ",n("code",{children:"-hover-tint"})," and ",n("code",{children:"-focus-tint"})," ","are translucent overlays for components that keep their existing background. You will need this if you're making custom components."]}),n("label",{class:"flex w-40 flex-col gap-1",children:["Role",n("select",{value:t,onChange:r=>e(r.target.value),children:Ve.map(r=>n("option",{value:r,children:r},r))})]}),n(U,{code:`<button class="bg-c-${t} text-c-on-${t}
  enabled:hover:bg-c-${t}-hover
  enabled:active:bg-c-${t}-focus">
  Custom button
</button>`,children:n(kt,{cls:Mr[t],label:{idle:`bg-c-${t}`,hover:`enabled:hover:bg-c-${t}-hover`,focus:`bg-c-${t}`,active:`enabled:active:bg-c-${t}-focus`},children:"Custom button"})}),n(U,{code:`<button class="border border-c-${t} text-c-${t}
  enabled:hover:bg-c-${t}-hover-tint
  enabled:active:bg-c-${t}-focus-tint">
  Custom outlined button
</button>`,children:n(kt,{cls:kr[t],label:{idle:"bg-transparent",hover:`enabled:hover:bg-c-${t}-hover-tint`,focus:"bg-transparent",active:`enabled:active:bg-c-${t}-focus-tint`},children:"Custom outlined button"})})]})}const Er={primary:"rounded-md p-3 bg-c-primary-container text-c-on-primary-container",secondary:"rounded-md p-3 bg-c-secondary-container text-c-on-secondary-container",tertiary:"rounded-md p-3 bg-c-tertiary-container text-c-on-tertiary-container",error:"rounded-md p-3 bg-c-error-container text-c-on-error-container",success:"rounded-md p-3 bg-c-success-container text-c-on-success-container"},At={primary:"Tip: drinking water is good for you.",secondary:"Note: switching units converts your existing goals automatically.",tertiary:"Heads up: this feature is still in beta.",error:"Network error while saving.",success:"Meal saved successfully."};function Ir(){const[t,e]=I("primary");return n("section",{class:"flex flex-col gap-2",children:[n("h2",{children:"Containers"}),n("small",{children:"The roles also have containers."}),n("label",{class:"flex w-40 flex-col gap-1",children:["Role",n("select",{value:t,onChange:r=>e(r.target.value),children:Ve.map(r=>n("option",{value:r,children:r},r))})]}),n(U,{code:`<div class="bg-c-${t}-container text-c-on-${t}-container">
  ${At[t]}
</div>`,children:n("div",{class:Er[t],children:At[t]})})]})}const Sr=[["on-surface","surface","Page background and primary content"],["on-surface-variant","surface","Lower-emphasis text on the page background (e.g. a caption or hint)"],["on-surface","surface-container-1","Backs surface-1"],["on-surface","surface-container-2","Backs surface-2"],["on-surface","surface-container-3","Backs surface-3"],["on-surface","surface-container-4","Backs surface-4"],["on-surface","surface-container-5","Backs surface-5"],["on-surface","surface-container-6","Backs surface-6"],["on-surface","surface-dim","Dimmed surface"],["on-surface","surface-bright","Bright surface"],["-","outline","Borders and dividers needing real contrast"],["-","outline-variant","Subtle, low-emphasis borders and dividers"],["inverse-on-surface","inverse-surface","Inverted surface for things like toasts and tooltips"],["inverse-primary","inverse-surface","Accent for a link/action on top of inverse-surface"]];function Lr({fg:t,bg:e}){return n("div",{class:"flex h-8 w-16 items-center justify-center rounded-sm border border-c-outline-variant text-xs font-medium",style:{background:`var(--color-c-${e})`,color:t==="-"?void 0:`var(--color-c-${t})`},children:t!=="-"&&"Aa"})}const Ct=P.flatMap(t=>[`d-${t}`,t,`l-${t}`]);function Rr(){return n("div",{class:"flex flex-col gap-4",children:[n("div",{class:"overflow-x-scroll",children:n("table",{children:[n("thead",{children:n("tr",{children:[n("th",{children:"Preview"}),n("th",{children:"Foreground"}),n("th",{children:"Background"}),n("th",{children:"Description"})]})}),n("tbody",{children:Sr.map(([t,e,r])=>n("tr",{children:[n("td",{children:n(Lr,{fg:t,bg:e})}),n("td",{children:t==="-"?"-":n("code",{children:t})}),n("td",{children:e==="-"?"-":n("code",{children:e})}),n("td",{children:r})]},`${t}-${e}`))})]})}),n("section",{class:"flex flex-col gap-3 surface-1",children:[n("h3",{children:"Categorical"}),n("small",{children:["There are 5 fixed hues that shift toward the primary color. Mainly for cases where you need a specific color by name. Each has a pale (default), a light (",n("code",{children:"l-"}),"), and a dark/vivid (",n("code",{children:"d-"}),") variant."]}),n("div",{class:"flex flex-col gap-2",children:[n("small",{children:"Pale (default)"}),n("div",{class:"flex flex-wrap items-center gap-4",children:[n(Re,{names:P}),n(he,{names:P})]}),n(se,{names:P})]}),n("div",{class:"flex flex-col gap-2",children:[n("small",{children:"Light (l-*)"}),n("div",{class:"flex flex-wrap items-center gap-4",children:[n(Re,{names:P.map(t=>`l-${t}`)}),n(he,{names:P.map(t=>`l-${t}`)})]}),n(se,{names:P.map(t=>`l-${t}`)})]}),n("div",{class:"flex flex-col gap-2",children:[n("small",{children:"Dark/vivid (d-*)"}),n("div",{class:"flex flex-wrap items-center gap-4",children:[n(Re,{names:P.map(t=>`d-${t}`)}),n(he,{names:P.map(t=>`d-${t}`)})]}),n(se,{names:P.map(t=>`d-${t}`)})]}),n("div",{class:"flex flex-col gap-2",children:[n("small",{children:"All variants together (stacked bar)"}),n(er,{names:Ct})]}),n("div",{class:"flex flex-col gap-2",children:[n("small",{children:"All variants together (line chart)"}),n(se,{names:Ct})]})]})]})}function Or(){return n("section",{class:"flex flex-col gap-2",children:[n("h2",{children:"Surfaces"}),n("small",{children:["Body is always set as ",n("code",{children:"surface"}),", use ",n("code",{children:"surface-n"})," for containers meant for nesting. (the max value for n is 6)"]}),n(U,{code:`<div class="surface-1">
  <div class="surface-2">
    <div class="surface-3">
      <div class="surface-4">
        <div class="surface-5">
          <div class="surface-6">surface-6</div>
        </div>
      </div>
    </div>
  </div>
</div>`,children:n("div",{class:"surface-1 flex flex-col gap-2",children:[n("code",{children:"surface-1"}),n("div",{class:"surface-2 flex flex-col gap-2",children:[n("code",{children:"surface-2"}),n("div",{class:"surface-3 flex flex-col gap-2",children:[n("code",{children:"surface-3"}),n("div",{class:"surface-4 flex flex-col gap-2",children:[n("code",{children:"surface-4"}),n("div",{class:"surface-5 flex flex-col gap-2",children:[n("code",{children:"surface-5"}),n("div",{class:"surface-6",children:n("code",{children:"surface-6"})})]})]})]})]})]})}),n("small",{children:["Surfaces have no border. Add ",n("code",{children:"surface-border"})," when a box needs a drawn edge: on its own for a box flush with the page, or next to a ",n("code",{children:"surface-N"}),"."]}),n(U,{code:`<div class="surface-border">...</div>
<div class="surface-2 surface-border">...</div>`,children:[n("div",{class:"surface-border w-40",children:n("code",{children:"surface-border"})}),n("div",{class:"surface-2 surface-border w-56",children:n("code",{children:"surface-2 surface-border"})})]})]})}const Dr={primary:{filled:"btn-primary",outlined:"btn-outlined-primary"},secondary:{filled:"btn-secondary",outlined:"btn-outlined-secondary"},tertiary:{filled:"btn-tertiary",outlined:"btn-outlined-tertiary"},error:{filled:"btn-error",outlined:"btn-outlined-error"},success:{filled:"btn-success",outlined:"btn-outlined-success"}};function Nr(){const[t,e]=I("primary"),{filled:r,outlined:o}=Dr[t];return n("section",{class:"flex flex-col gap-2",children:[n("h2",{children:"Buttons"}),n("small",{children:["Emphasis goes filled, then outlined, then plain. Use one filled button per group, for the main action. Use outlined for a colored secondary action such as an inline delete. Everything else, including Cancel, is a plain ",n("code",{children:"<button>"}),"."]}),n(U,{code:`<button class="btn-success">Save</button>
<button class="btn-outlined-error">Delete</button>
<button>Cancel</button>`,children:[n("button",{class:"btn-success",children:"Save"}),n("button",{class:"btn-outlined-error",children:"Delete"}),n("button",{children:"Cancel"})]}),n("small",{children:"Filled and outlined buttons come in every role."}),n("label",{class:"flex w-40 flex-col gap-1",children:["Role",n("select",{value:t,onChange:a=>e(a.target.value),children:Ve.map(a=>n("option",{value:a,children:a},a))})]}),n(U,{code:`<button class="btn-${t}">Button</button>
<button class="btn-${t}" disabled>Button</button>`,children:[n("button",{class:r,children:"Button"}),n("button",{class:r,disabled:!0,children:"Button"})]}),n(U,{code:`<button class="btn-outlined-${t}">Button</button>
<button class="btn-outlined-${t}" disabled>Button</button>`,children:[n("button",{class:o,children:"Button"}),n("button",{class:o,disabled:!0,children:"Button"})]})]})}function $r(){return n("section",{class:"flex flex-col gap-3 surface-1",children:[n("h2",{children:"Base HTML elements"}),n("small",{children:"This is what plain markup without any classes looks like."}),n("div",{class:"flex flex-col gap-2",children:[n("h1",{children:"h1 heading"}),n("h2",{children:"h2 heading"}),n("h3",{children:"h3 heading"}),n("h4",{children:"h4 heading"}),n("h5",{children:"h5 heading"}),n("h6",{children:"h6 heading"})]}),n("p",{children:["A paragraph with a ",n("a",{href:"#",children:"link"}),", ",n("strong",{children:"strong text"}),", and ",n("small",{children:"small print"}),". Inline code: ",n("code",{children:"c-primary"}),"."]}),n("pre",{children:`pre-formatted
  block of text`}),n("table",{children:[n("thead",{children:n("tr",{children:[n("th",{children:"Column A"}),n("th",{children:"Column B"})]})}),n("tbody",{children:[n("tr",{children:[n("td",{children:"Row 1"}),n("td",{children:"Value"})]}),n("tr",{children:[n("td",{children:"Row 2"}),n("td",{children:"Value"})]})]})]}),n("fieldset",{class:"flex flex-col gap-2 surface-2",children:[n("legend",{children:"Fieldset legend"}),n("label",{class:"flex flex-col gap-1",children:["Text input",n("input",{type:"text",placeholder:"Placeholder"})]}),n("label",{class:"flex flex-col gap-1",children:["Select",n("select",{children:[n("option",{children:"Option A"}),n("option",{children:"Option B"})]})]}),n("label",{class:"flex flex-col gap-1",children:["Textarea",n("textarea",{rows:2,placeholder:"Placeholder"})]}),n("button",{class:"self-start",children:"Button"}),n("hr",{}),n("label",{class:"flex flex-row items-center gap-2",children:[n("input",{type:"checkbox",defaultChecked:!0}),"Checkbox"]}),n("label",{class:"flex flex-row items-center gap-2",children:[n("input",{type:"radio",name:"ref-radio",defaultChecked:!0}),"Radio A"]}),n("label",{class:"flex flex-row items-center gap-2",children:[n("input",{type:"radio",name:"ref-radio"}),"Radio B"]}),n("label",{class:"flex flex-col gap-1",children:["Range",n("input",{type:"range",min:0,max:100,defaultValue:50})]}),n("label",{class:"flex flex-col gap-1",children:["Disabled input",n("input",{type:"text",defaultValue:"Can't touch this",disabled:!0})]})]})]})}const Fr=[[n("h1",{children:"Page title"}),"<h1>","One per page. 28px, weight 425."],[n("h2",{children:"Section or panel"}),"<h2>","A panel or section title. 22px, weight 425."],[n("h3",{children:"Group in a panel"}),"<h3>","A group inside a panel. 18px, weight 500."],[n("h4",{children:"Small heading"}),"<h4>","A card or row title. 16px, weight 500."],[n("p",{children:"Body text"}),"<p>","Everything else. 16px, weight 400."],[n("label",{children:"Field caption"}),"<label>","The caption above a field. 14px, muted."],[n("small",{children:"Hint text"}),"<small>","Subtitles, hints, metadata. 14px, muted."],[n("span",{children:["Some ",n("strong",{children:"emphasis"})]}),"<strong>","Inline emphasis. Weight 500."]];function Hr(){return n("section",{class:"flex flex-col gap-2",children:[n("h2",{children:"Type"}),n("small",{children:"Plain elements are already styled. Pick the element by meaning; don't add font-weight, text-size or text-color utilities to restyle it."}),n("div",{class:"overflow-x-auto",children:n("table",{children:[n("thead",{children:n("tr",{children:[n("th",{children:"Looks like"}),n("th",{children:"Element"}),n("th",{children:"Use"})]})}),n("tbody",{children:Fr.map(([t,e,r])=>n("tr",{children:[n("td",{children:t}),n("td",{children:n("code",{children:e})}),n("td",{children:r})]},e))})]})})]})}const Br=[["gap-1","4px","Inside one control: a caption and its input, an icon and its text."],["gap-2","8px","Between related fields, rows or buttons."],["gap-4","16px","Between sections or panels."],["p-3","12px","Container padding (built into surface-N)."],["px-4","16px","Page margin."]];function Pr(){return n("section",{class:"flex flex-col gap-2",children:[n("h2",{children:"Spacing"}),n("small",{children:["Spacing comes from ",n("code",{children:"gap"})," on the parent (",n("code",{children:"flex flex-col gap-2"}),"), not margins on the children. Headings, paragraphs and ",n("code",{children:"hr"})," have no margin."]}),n("div",{class:"overflow-x-auto",children:n("table",{children:[n("thead",{children:n("tr",{children:[n("th",{children:"Class"}),n("th",{children:"Size"}),n("th",{children:"Use"})]})}),n("tbody",{children:Br.map(([t,e,r])=>n("tr",{children:[n("td",{children:n("code",{children:t})}),n("td",{children:e}),n("td",{children:r})]},t))})]})})]})}function zr(){return n("section",{class:"flex flex-col gap-2",children:[n("h2",{children:"Forms"}),n("small",{children:["A field is a ",n("code",{children:"<label>"})," wrapping its caption and input. A checkbox or radio label reads as body text."]}),n(U,{code:`<div class="surface-1 flex flex-col gap-2">
  <label class="flex flex-col gap-1">
    Note
    <textarea rows={2} placeholder="Optional" />
  </label>
  <label class="flex items-center gap-2">
    <input type="checkbox" /> Beeps
  </label>
</div>`,children:n("div",{class:"surface-1 flex w-full max-w-md flex-col gap-2",children:[n("label",{class:"flex flex-col gap-1",children:["Note",n("textarea",{rows:2,placeholder:"Optional"})]}),n("label",{class:"flex items-center gap-2",children:[n("input",{type:"checkbox"})," Beeps"]})]})})]})}function jr(){return n("div",{class:"flex flex-col gap-4 max-w-5xl mx-auto",children:[n("div",{children:[n("h1",{children:"Reference"}),n("small",{children:"ponkotsu-css reference."})]}),n(Hr,{}),n(Pr,{}),n(zr,{}),n(Nr,{}),n(Cr,{}),n(Ir,{}),n(Or,{}),n(Rr,{}),n($r,{})]})}function Et(t){switch(t){case"#reference":return"reference";case"#app":default:return"app"}}function Ur(){const[t,e]=I({dark:{primary:"#D2AE61",secondary:"#5AA9E6",tertiary:"#C77DFF",shift:1,dimBaseline:.6},light:{primary:"#D2AE61",secondary:"#5AA9E6",tertiary:"#C77DFF",shift:-1,dimBaseline:.6}}),[r,o]=I(!0),a=r?t.dark:t.light,c=b=>e(w=>r?{...w,dark:b}:{...w,light:b}),[s,i]=I("M PLUS 1"),[u,l]=I(!1),[h,f]=I(()=>Et(window.location.hash)),d=b=>{f(b),window.location.hash=b};zt(()=>{const b=()=>f(Et(window.location.hash));return window.addEventListener("hashchange",b),()=>window.removeEventListener("hashchange",b)},[]);const{roles:p,light:m,dark:y}=jt(()=>{const b=bt(pt(t.light),t.light,!1),w=bt(pt(t.dark),t.dark,!0);return{roles:r?w:b,light:b,dark:w}},[t,r]),x=`@import 'tailwindcss';

@theme static {
    --color-*: initial;
${_t(y,"    ")}
}

[data-theme='light'] {
${_t(m,"    ")}
}

${Zn}`,v=async()=>{await navigator.clipboard.writeText(x),l(!0),setTimeout(()=>l(!1),1500)},_={...Qn(p),fontFamily:`'${s}', system-ui, sans-serif`};return n("div",{style:_,class:"min-h-screen bg-c-surface text-c-on-surface",children:[n("div",{class:"flex justify-center gap-1 p-3 border-b border-c-outline-variant",children:[n("button",{class:h==="app"?"btn-primary":"btn-outlined",onClick:()=>d("app"),children:"Theme Preview"}),n("button",{class:h==="reference"?"btn-primary":"btn-outlined",onClick:()=>d("reference"),children:"Reference"})]}),n("div",{class:"p-4 sm:p-6",children:h==="app"?n(Tr,{}):n(jr,{})}),n(sr,{seeds:a,onSeedsChange:c,isDark:r,onDarkChange:o,font:s,onFontChange:i,onCopyCss:v,copied:u})]})}an(n(Ur,{}),document.getElementById("app"));
