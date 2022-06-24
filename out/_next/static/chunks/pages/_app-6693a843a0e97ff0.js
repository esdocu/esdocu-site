(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{425:function(e,t,n){"use strict";n.d(t,{F:function(){return l},f:function(){return s}});var r=n(1720),a=n(9008),o=n.n(a),i=(0,r.createContext)({setTheme:function(e){},themes:[]}),l=function(){return(0,r.useContext)(i)},c=["light","dark"],u="(prefers-color-scheme: dark)",s=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,a=void 0!==n&&n,o=e.enableSystem,l=void 0===o||o,s=e.enableColorScheme,p=void 0===s||s,v=e.storageKey,g=void 0===v?"theme":v,y=e.themes,b=void 0===y?["light","dark"]:y,w=e.defaultTheme,x=void 0===w?l?"system":"light":w,_=e.attribute,E=void 0===_?"data-theme":_,O=e.value,Z=e.children,k=(0,r.useState)((function(){return d(g,x)})),T=k[0],j=k[1],C=(0,r.useState)((function(){return d(g)})),S=C[0],M=C[1],I=O?Object.values(O):b,N=(0,r.useCallback)((function(e){var n=h(e);M(n),"system"!==T||t||L(n,!1)}),[T,t]),B=(0,r.useRef)(N);B.current=N;var L=(0,r.useCallback)((function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=!0);var r=(null==O?void 0:O[e])||e,o=a&&n?m():null;if(t)try{localStorage.setItem(g,e)}catch(e){}if("system"===e&&l){var i=h();r=(null==O?void 0:O[i])||i}if(n){var c,u=document.documentElement;"class"===E?((c=u.classList).remove.apply(c,I),u.classList.add(r)):u.setAttribute(E,r),null==o||o()}}),[]);(0,r.useEffect)((function(){var e=function(){return B.current.apply(B,[].slice.call(arguments))},t=window.matchMedia(u);return t.addListener(e),e(t),function(){return t.removeListener(e)}}),[]);var z=(0,r.useCallback)((function(e){t?L(e,!0,!1):L(e),j(e)}),[t]);return(0,r.useEffect)((function(){var e=function(e){e.key===g&&z(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[z]),(0,r.useEffect)((function(){if(p){var e=t&&c.includes(t)?t:T&&c.includes(T)?T:"system"===T&&S||null;document.documentElement.style.setProperty("color-scheme",e)}}),[p,T,S,t]),r.default.createElement(i.Provider,{value:{theme:T,setTheme:z,forcedTheme:t,resolvedTheme:"system"===T?S:T,themes:l?[].concat(b,["system"]):b,systemTheme:l?S:void 0}},r.default.createElement(f,{forcedTheme:t,storageKey:g,attribute:E,value:O,enableSystem:l,defaultTheme:x,attrs:I}),Z)},f=(0,r.memo)((function(e){var t=e.forcedTheme,n=e.storageKey,a=e.attribute,i=e.enableSystem,l=e.defaultTheme,c=e.value,s="class"===a?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",f=function(e,t){e=(null==c?void 0:c[e])||e;var n=t?e:"'"+e+"'";return"class"===a?"d.add("+n+")":"d.setAttribute('"+a+"', "+n+")"},d="system"===l;return r.default.createElement(o(),null,r.default.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+s+f(t)+"}()"}}:i?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+s+"var e=localStorage.getItem('"+n+"');"+(d?"":f(l)+";")+'if("system"===e||(!e&&'+d+')){var t="'+u+'",m=window.matchMedia(t);m.media!==t||m.matches?'+f("dark")+":"+f("light")+"}else if(e) "+(c?"var x="+JSON.stringify(c)+";":"")+f(c?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+s+'var e=localStorage.getItem("'+n+'");if(e){'+(c?"var x="+JSON.stringify(c)+";":"")+f(c?"x[e]":"e",!0)+"}else{"+f(l)+";}}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),d=function(e,t){if("undefined"!=typeof window){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},m=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout((function(){document.head.removeChild(e)}),1)}},h=function(e){return e||(e=window.matchMedia(u)),e.matches?"dark":"light"}},3454:function(e,t,n){"use strict";var r,a;e.exports=(null===(r=n.g.process)||void 0===r?void 0:r.env)&&"object"===typeof(null===(a=n.g.process)||void 0===a?void 0:a.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6546)}])},7966:function(e,t,n){"use strict";var r=n(6690),a=n(1664),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.Z=function(e){var t=e.href,n=c(e,["href"]),a=t&&t.startsWith("/"),i=t&&t.startsWith("#");return a?(0,r.tZ)(o(),{href:t,children:(0,r.tZ)("a",l({},n))}):i?(0,r.tZ)("a",l({href:t},n)):(0,r.tZ)("a",l({target:"_blank",rel:"noopener noreferrer",href:t},n))}},1536:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(6690);function a(e){var t=e.children;return(0,r.tZ)("div",{className:"mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0",children:t})}},4273:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r,a,o=n(6690),i=n(1720);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var c;function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var s;function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}var d;function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var h;function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var v;function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var y={mail:function(e){return i.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),r||(r=i.createElement("path",{d:"M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"})),a||(a=i.createElement("path",{d:"m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"})))},github:function(e){return i.createElement("svg",u({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),c||(c=i.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))},facebook:function(e){return i.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),s||(s=i.createElement("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})))},youtube:function(e){return i.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),d||(d=i.createElement("path",{d:"M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"})))},linkedin:function(e){return i.createElement("svg",p({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),h||(h=i.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})))},twitter:function(e){return i.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),v||(v=i.createElement("path",{d:"M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"})))}},b=function(e){var t=e.kind,n=e.href,r=e.size,a=void 0===r?8:r;if(!n||"mail"===t&&!/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(n))return null;var i=y[t];return(0,o.BX)("a",{className:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:n,children:[(0,o.tZ)("span",{className:"sr-only",children:t}),(0,o.tZ)(i,{className:"fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-".concat(a," w-").concat(a)})]})}},1576:function(e,t,n){"use strict";var r=n(3454),a={title:"Esdocu - Documentaciones Open Source en Espa\xf1ol",author:"Esdocu",headerTitle:"Esdocu",description:"Esdocu es un proyecto de traducci\xf3n al Espa\xf1ol de documentaciones de tecnolog\xedas Open Source.",language:"es-es",theme:"system",siteUrl:"https://esdocu.com",siteRepo:"https://github.com/esdocu/esdocu-site",siteLogo:"/static/images/logo.png",image:"/static/images/avatar.png",socialBanner:"/static/images/twitter-card.png",email:"hola.esdocu@gmail.com",github:"https://github.com/esdocu",locale:"es-ES",analytics:{plausibleDataDomain:"",simpleAnalytics:!1,umamiWebsiteId:"",googleAnalyticsId:""},newsletter:{provider:""},comment:{provider:"giscus",giscusConfig:{repo:r.env.NEXT_PUBLIC_GISCUS_REPO,repositoryId:r.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,category:r.env.NEXT_PUBLIC_GISCUS_CATEGORY,categoryId:r.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,mapping:"pathname",reactions:"1",metadata:"0",theme:"light",darkTheme:"transparent_dark",themeURL:""},utterancesConfig:{repo:r.env.NEXT_PUBLIC_UTTERANCES_REPO,issueTerm:"",label:"",theme:"",darkTheme:""},disqusConfig:{shortname:r.env.NEXT_PUBLIC_DISQUS_SHORTNAME}}};e.exports=a},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=(o=n(1720))&&o.__esModule?o:{default:o},l=n(1003),c=n(880),u=n(9246);function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f={};function d(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(a?"%"+a:"")]=!0}}var m=i.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,o=void 0===r?!0!==Boolean(!1):r,m=e.href,h=e.as,p=e.children,v=e.prefetch,g=e.passHref,y=e.replace,b=e.shallow,w=e.scroll,x=e.locale,_=e.onClick,E=e.onMouseEnter,O=s(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=p,o&&"string"===typeof n&&(n=i.default.createElement("a",null,n));var Z,k=!1!==v,T=c.useRouter(),j=i.default.useMemo((function(){var e=a(l.resolveHref(T,m,!0),2),t=e[0],n=e[1];return{href:t,as:h?l.resolveHref(T,h):n||t}}),[T,m,h]),C=j.href,S=j.as,M=i.default.useRef(C),I=i.default.useRef(S);o&&(Z=i.default.Children.only(n));var N=o?Z&&"object"===typeof Z&&Z.ref:t,B=a(u.useIntersection({rootMargin:"200px"}),3),L=B[0],z=B[1],P=B[2],A=i.default.useCallback((function(e){I.current===S&&M.current===C||(P(),I.current=S,M.current=C),L(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[S,N,C,P,L]);i.default.useEffect((function(){var e=z&&k&&l.isLocalURL(C),t="undefined"!==typeof x?x:T&&T.locale,n=f[C+"%"+S+(t?"%"+t:"")];e&&!n&&d(T,C,S,{locale:t})}),[S,C,z,x,k,T]);var R={ref:A,onClick:function(e){o||"function"!==typeof _||_(e),o&&Z.props&&"function"===typeof Z.props.onClick&&Z.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:i}))}(e,T,C,S,y,b,w,x)},onMouseEnter:function(e){o||"function"!==typeof E||E(e),o&&Z.props&&"function"===typeof Z.props.onMouseEnter&&Z.props.onMouseEnter(e),l.isLocalURL(C)&&d(T,C,S,{priority:!0})}};if(!o||g||"a"===Z.type&&!("href"in Z.props)){var U="undefined"!==typeof x?x:T&&T.locale,H=T&&T.isLocaleDomain&&l.getDomainLocale(S,U,T&&T.locales,T&&T.domainLocales);R.href=H||l.addBasePath(l.addLocale(S,U,T&&T.defaultLocale))}return o?i.default.cloneElement(Z,R):i.default.createElement("a",Object.assign({},O,R),n)}));t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,s=o.useRef(),f=a(o.useState(!1),2),d=f[0],m=f[1],h=a(o.useState(t?t.current:null),2),p=h[0],v=h[1],g=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),u.push(n));if(t)return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:o,elements:a}),t}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),c.delete(a);var t=u.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:p,rootMargin:n}))}),[r,p,n,d]),y=o.useCallback((function(){m(!1)}),[]);return o.useEffect((function(){if(!l&&!d){var e=i.requestIdleCallback((function(){return m(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&v(t.current)}),[t]),[g,d,y]};var o=n(1720),i=n(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},6546:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(6690),a=(n(2604),n(7661),n(3941),n(8102),n(425)),o=n(9008),i=n.n(o),l=n(1576),c=n.n(l),u=n(4298),s=n.n(u),f=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(s(),{strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=".concat(c().analytics.googleAnalyticsId)}),(0,r.tZ)(s(),{strategy:"lazyOnload",id:"ga-script",children:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(c().analytics.googleAnalyticsId,"', {\n              page_path: window.location.pathname,\n            });\n        ")})]})};var d,m,h=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(s(),{strategy:"lazyOnload","data-domain":c().analytics.plausibleDataDomain,src:"https://plausible.io/js/plausible.js"}),(0,r.tZ)(s(),{strategy:"lazyOnload",id:"plausible-script",children:"\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }\n        "})]})},p=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(s(),{strategy:"lazyOnload",id:"sa-script",children:"\n            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};\n        "}),(0,r.tZ)(s(),{strategy:"lazyOnload",src:"https://scripts.simpleanalyticscdn.com/latest.js"})]})},v=function(){return(0,r.tZ)(r.HY,{children:(0,r.tZ)(s(),{async:!0,defer:!0,"data-website-id":c().analytics.umamiWebsiteId,src:"https://umami.example.com/umami.js"})})},g=function(){return(0,r.BX)(r.HY,{children:[c().analytics.plausibleDataDomain&&(0,r.tZ)(h,{}),c().analytics.simpleAnalytics&&(0,r.tZ)(p,{}),c().analytics.umamiWebsiteId&&(0,r.tZ)(v,{}),c().analytics.googleAnalyticsId&&(0,r.tZ)(f,{})]})},y=[{href:"/blog",title:"Blog"},{href:"/proyectos",title:"Proyectos"},{href:"/acerca",title:"Acerca de"}],b=n(1720);function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}var x=function(e){return b.createElement("svg",w({width:50,height:50,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d||(d=b.createElement("g",{clipPath:"url(#logo_svg__a)"},b.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.951 48.145c9.897 0 17.92-8.023 17.92-17.92 0-9.897-8.023-17.92-17.92-17.92-9.897 0-17.92 8.023-17.92 17.92 0 9.897 8.023 17.92 17.92 17.92Zm0-9.32a8.6 8.6 0 1 0 0-17.201 8.6 8.6 0 0 0 0 17.201Z",fill:"url(#logo_svg__b)"}),b.createElement("g",{filter:"url(#logo_svg__c)"},b.createElement("path",{d:"M33.606 9.734c0-7.424 6.792-8.024 9.204-7.867V33.1c0 13.711-15.839 15.865-21.398 14.711C33.606 42.303 33.606 33.1 33.606 33.1V9.734Z",fill:"url(#logo_svg__d)"})))),m||(m=b.createElement("defs",null,b.createElement("linearGradient",{id:"logo_svg__b",x1:30.248,y1:12.67,x2:17.958,y2:46.964,gradientUnits:"userSpaceOnUse"},b.createElement("stop",{stopColor:"#5B51D8"}),b.createElement("stop",{offset:1,stopColor:"#833AB4"})),b.createElement("linearGradient",{id:"logo_svg__d",x1:35.274,y1:2.318,x2:11.109,y2:33.528,gradientUnits:"userSpaceOnUse"},b.createElement("stop",{stopColor:"#5B51D8"}),b.createElement("stop",{offset:1,stopColor:"#833AB4"})),b.createElement("clipPath",{id:"logo_svg__a"},b.createElement("path",{fill:"#fff",d:"M0 0h50v50H0z"})),b.createElement("filter",{id:"logo_svg__c",x:18.412,y:-.153,width:25.399,height:50.232,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},b.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),b.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),b.createElement("feOffset",{dx:-1}),b.createElement("feGaussianBlur",{stdDeviation:1}),b.createElement("feComposite",{in2:"hardAlpha",operator:"out"}),b.createElement("feColorMatrix",{values:"0 0 0 0 0.916667 0 0 0 0 0.916667 0 0 0 0 0.916667 0 0 0 0.08 0"}),b.createElement("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow_101_309"}),b.createElement("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow_101_309",result:"shape"})))))},_=n(7966),E=n(1536),O=n(4273);function Z(){return(0,r.tZ)("footer",{children:(0,r.BX)("div",{className:"mt-16 flex flex-col items-center",children:[(0,r.BX)("div",{className:"mb-3 flex space-x-4",children:[(0,r.tZ)(O.Z,{kind:"mail",href:"mailto:".concat(c().email),size:6}),(0,r.tZ)(O.Z,{kind:"github",href:c().github,size:6}),(0,r.tZ)(O.Z,{kind:"facebook",href:c().facebook,size:6}),(0,r.tZ)(O.Z,{kind:"youtube",href:c().youtube,size:6}),(0,r.tZ)(O.Z,{kind:"linkedin",href:c().linkedin,size:6}),(0,r.tZ)(O.Z,{kind:"twitter",href:c().twitter,size:6})]}),(0,r.BX)("div",{className:"mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400",children:[(0,r.tZ)("div",{children:c().author}),(0,r.tZ)("div",{children:" \u2022 "}),(0,r.tZ)("div",{children:"\xa9 ".concat((new Date).getFullYear())}),(0,r.tZ)("div",{children:" \u2022 "}),(0,r.tZ)(_.Z,{href:"/",children:c().title})]}),(0,r.tZ)("div",{className:"mb-8 text-sm text-gray-500 dark:text-gray-400",children:(0,r.tZ)(_.Z,{href:"https://github.com/timlrx/tailwind-nextjs-starter-blog",children:"Tailwind Nextjs Theme"})})]})})}var k=function(){var e=(0,b.useState)(!1),t=e[0],n=e[1],a=function(){n((function(e){return document.body.style.overflow=e?"auto":"hidden",!e}))};return(0,r.BX)("div",{className:"sm:hidden",children:[(0,r.tZ)("button",{type:"button",className:"ml-1 mr-1 h-8 w-8 rounded py-1","aria-label":"Toggle Menu",onClick:a,children:(0,r.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:t?(0,r.tZ)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}):(0,r.tZ)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,r.BX)("div",{className:"fixed top-24 right-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ".concat(t?"translate-x-0":"translate-x-full"),children:[(0,r.tZ)("button",{type:"button","aria-label":"toggle modal",className:"fixed h-full w-full cursor-auto focus:outline-none",onClick:a}),(0,r.tZ)("nav",{className:"fixed mt-8 h-full",children:y.map((function(e){return(0,r.tZ)("div",{className:"px-12 py-4",children:(0,r.tZ)(_.Z,{href:e.href,className:"text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",onClick:a,children:e.title})},e.title)}))})]})]})},T=function(){var e=(0,b.useState)(!1),t=e[0],n=e[1],o=(0,a.F)(),i=o.theme,l=o.setTheme,c=o.resolvedTheme;return(0,b.useEffect)((function(){return n(!0)}),[]),(0,r.tZ)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4",onClick:function(){return l("dark"===i||"dark"===c?"light":"dark")},children:(0,r.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:!t||"dark"!==i&&"dark"!==c?(0,r.tZ)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}):(0,r.tZ)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})})})},j=function(e){var t=e.children;return(0,r.tZ)(E.Z,{children:(0,r.BX)("div",{className:"flex h-screen flex-col justify-between",children:[(0,r.BX)("header",{className:"flex items-center justify-between py-10",children:[(0,r.tZ)("div",{children:(0,r.tZ)(_.Z,{href:"/","aria-label":c().headerTitle,children:(0,r.BX)("div",{className:"flex items-center justify-between",children:[(0,r.tZ)("div",{className:"mr-3",children:(0,r.tZ)(x,{})}),"string"===typeof c().headerTitle?(0,r.tZ)("div",{className:"hidden h-6 text-2xl font-semibold sm:block",children:c().headerTitle}):c().headerTitle]})})}),(0,r.BX)("div",{className:"flex items-center text-base leading-5",children:[(0,r.tZ)("div",{className:"hidden sm:block",children:y.map((function(e){return(0,r.tZ)(_.Z,{href:e.href,className:"p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4",children:e.title},e.title)}))}),(0,r.tZ)(T,{}),(0,r.tZ)(k,{})]})]}),(0,r.tZ)("main",{className:"mb-auto",children:t}),(0,r.tZ)(Z,{})]})})};function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){C(e,t,n[t])}))}return e}function M(e){var t=e.Component,n=e.pageProps;return(0,r.BX)(a.f,{attribute:"class",defaultTheme:c().theme,children:[(0,r.tZ)(i(),{children:(0,r.tZ)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),(0,r.tZ)(g,{}),(0,r.tZ)(j,{children:(0,r.tZ)(t,S({},n))})]})}},8102:function(){},3941:function(){},7661:function(){},2604:function(){},7663:function(e){!function(){var t={162:function(e){var t,n,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l,c=[],u=!1,s=-1;function f(){u&&l&&(u=!1,l.length?c=l.concat(c):s=-1,c.length&&d())}function d(){if(!u){var e=i(f);u=!0;for(var t=c.length;t;){for(l=c,c=[];++s<t;)l&&l[s].run();s=-1,t=c.length}l=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||u||i(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}},i=!0;try{t[e](o,o.exports,r),i=!1}finally{i&&delete n[e]}return o.exports}r.ab="//";var a=r(162);e.exports=a}()},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},4298:function(e,t,n){e.exports=n(3573)},6690:function(e,t,n){"use strict";n.d(t,{BX:function(){return r.jsxs},HY:function(){return r.Fragment},tZ:function(){return r.jsx}});var r=n(6584)},6584:function(e,t,n){"use strict";n.r(t),n.d(t,{Fragment:function(){return r.HY},jsx:function(){return o},jsxDEV:function(){return o},jsxs:function(){return o}});var r=n(6400),a=0;function o(e,t,n,o,i){var l,c,u={};for(c in t)"ref"==c?l=t[c]:u[c]=t[c];var s={type:e,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--a,__source:o,__self:i};if("function"==typeof e&&(l=e.defaultProps))for(c in l)void 0===u[c]&&(u[c]=l[c]);return r.YM.vnode&&r.YM.vnode(s),s}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[179],(function(){return t(6840),t(880)}));var n=e.O();_N_E=n}]);