(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[913],{9618:function(e,t,r){var a={"./AboutLayout":3518,"./AboutLayout.tsx":3518,"./ListLayout":5717,"./ListLayout.tsx":5717,"./PostLayout":3605,"./PostLayout.tsx":3605,"./PostSimple":8507,"./PostSimple.tsx":8507};function n(e){var t=i(e);return r(t)}function i(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id=9618},2913:function(e,t,r){"use strict";r.d(t,{J:function(){return y}});var a=r(6690),n=r(1720),i=r(5929);r(4051),r(195);function l(e){return function(e,t){var r=Object.assign({},e);return t.forEach((function(e){delete r[e]})),r}(e,["body","_raw","_id"])}var c=r(5988),o=r(7966),d=function(e){var t=e.toc,r=e.indentDepth,n=void 0===r?3:r,i=e.fromHeading,l=void 0===i?1:i,c=e.toHeading,o=void 0===c?6:c,d=e.asDisclosure,s=void 0!==d&&d,u=e.exclude,m=void 0===u?"":u,p=Array.isArray(m)?new RegExp("^("+m.join("|")+")$","i"):new RegExp("^("+m+")$","i"),h=t.filter((function(e){return e.depth>=l&&e.depth<=o&&!p.test(e.value)})),x=(0,a.tZ)("ul",{children:h.map((function(e){return(0,a.tZ)("li",{className:"".concat(e.depth>=n&&"ml-6"),children:(0,a.tZ)("a",{href:e.url,children:e.value})},e.value)}))});return(0,a.tZ)(a.HY,{children:s?(0,a.BX)("details",{open:!0,children:[(0,a.tZ)("summary",{className:"ml-6 pt-2 pb-2 text-xl font-bold",children:"Table of Contents"}),(0,a.tZ)("div",{className:"ml-6",children:x})]}):x})},s=function(e){var t=e.children,r=(0,n.useRef)(null),i=(0,n.useState)(!1),l=i[0],c=i[1],o=(0,n.useState)(!1),d=o[0],s=o[1];return(0,a.BX)("div",{ref:r,onMouseEnter:function(){c(!0)},onMouseLeave:function(){c(!1),s(!1)},className:"relative",children:[l&&(0,a.tZ)("button",{"aria-label":"Copy code",type:"button",className:"absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ".concat(d?"border-green-400 focus:border-green-400 focus:outline-none":"border-gray-300"),onClick:function(){s(!0),navigator.clipboard.writeText(r.current.textContent),setTimeout((function(){s(!1)}),2e3)},children:(0,a.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:d?"text-green-400":"text-gray-300",children:d?(0,a.tZ)(a.HY,{children:(0,a.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,a.tZ)(a.HY,{children:(0,a.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,a.tZ)("pre",{children:t})]})},u=r(5769);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){m(e,t,r[t])}))}return e}function h(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var x={Image:c.Z,TOCInline:d,a:o.Z,pre:s,wrapper:function(e){var t=e.layout,n=e.content,i=h(e,["layout","content"]),l=r(9618)("./".concat(t)).default;return(0,a.tZ)(l,p({content:n},i))},BlogNewsletterForm:u.w},y=function(e){var t=e.layout,r=e.content,n=h(e,["layout","content"]),c=(0,i.z)(r.body.code),o=l(r);return(0,a.tZ)(c,p({layout:t,content:o,components:x},n))}},5769:function(e,t,r){"use strict";r.d(t,{w:function(){return u}});var a=r(4051),n=r.n(a),i=r(6690),l=r(1720),c=r(1576),o=r.n(c);function d(e,t,r,a,n,i,l){try{var c=e[i](l),o=c.value}catch(d){return void r(d)}c.done?t(o):Promise.resolve(o).then(a,n)}var s=function(e){var t=e.title,r=void 0===t?"Esdocu DEV News":t,a=(0,l.useRef)(null),c=(0,l.useState)(!1),s=c[0],u=c[1],m=(0,l.useState)(""),p=m[0],h=m[1],x=(0,l.useState)(!1),y=x[0],f=x[1],g=function(){var e,t=(e=n().mark((function e(t){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/".concat(o().newsletter.provider),{body:JSON.stringify({email:a.current.value}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return r=e.sent,e.next=6,r.json();case 6:if(!e.sent.error){e.next=11;break}return u(!0),h("\xa1Tu direcci\xf3n de correo electr\xf3nico no es v\xe1lida o ya est\xe1s suscrito!"),e.abrupt("return");case 11:a.current.value="",u(!1),f(!0),h("\xa1\xc9xito! \ud83c\udf89 Ya est\xe1s suscrito.");case 15:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,n){var i=e.apply(t,r);function l(e){d(i,a,n,l,c,"next",e)}function c(e){d(i,a,n,l,c,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,i.BX)("div",{className:"max-w-md px-3",children:[(0,i.tZ)("div",{className:"pb-1 text-xl font-semibold uppercase text-gray-800 dark:text-gray-100",children:r}),(0,i.tZ)("div",{className:"pb-4 text-base text-gray-800 dark:text-gray-100",children:"Ent\xe9rate de todas las novedades del mundo DEV en un solo correo semanal."}),(0,i.BX)("form",{className:"flex flex-col msm:flex-row",onSubmit:g,children:[(0,i.BX)("div",{className:"w-full",children:[(0,i.tZ)("label",{className:"sr-only",htmlFor:"email-input",children:"Direcci\xf3n de email"}),(0,i.tZ)("input",{autoComplete:"email",className:"w-full rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black msm:w-72",id:"email-input",name:"email",placeholder:y?"Ahora est\xe1s suscrito! \ud83c\udf89":"Ingresa tu email",ref:a,required:!0,type:"email",disabled:y})]}),(0,i.tZ)("div",{className:"mt-2 flex w-full rounded-md shadow-sm msm:mt-0 msm:ml-3",children:(0,i.tZ)("button",{className:"w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 ".concat(y?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"," focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black"),type:"submit",disabled:y,children:y?"\xa1Gracias!":"Suscribirme"})})]}),s&&(0,i.tZ)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:p})]})};t.Z=s;var u=function(e){var t=e.title;return(0,i.tZ)("div",{className:"flex items-center justify-center",children:(0,i.tZ)("div",{className:"bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,i.tZ)(s,{title:t})})})}},2866:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(6690);function n(e){var t=e.children;return(0,a.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",children:t})}},7930:function(e,t,r){"use strict";var a=r(6690),n=r(1720);t.Z=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1];(0,n.useEffect)((function(){var e=function(){window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);return(0,a.BX)("div",{className:"fixed right-8 bottom-8 hidden flex-col gap-3 ".concat(t?"md:flex":"md:hidden"),children:[(0,a.tZ)("button",{"aria-label":"Scroll To Comment",type:"button",onClick:function(){document.getElementById("comment").scrollIntoView()},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,a.tZ)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.tZ)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})})}),(0,a.tZ)("button",{"aria-label":"Scroll To Top",type:"button",onClick:function(){window.scrollTo({top:0})},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,a.tZ)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.tZ)("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})]})}},3518:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var a=r(6690),n=r(4273),i=r(5988),l=r(9829);function c(e){var t=e.children,r=e.content,c=r.name,o=r.avatar,d=r.occupation,s=r.company,u=r.email,m=r.twitter,p=r.linkedin,h=r.github;return(0,a.BX)(a.HY,{children:[(0,a.tZ)(l.TQ,{title:"Acerca del proyecto Esdocu",description:"Esdocu es un proyecto de traducci\xf3n al espa\xf1ol de documentaci\xf3n de tecnolog\xedas open\n            source"}),(0,a.BX)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,a.tZ)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:(0,a.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:"Acerca de Esdocu"})}),(0,a.BX)("div",{className:"prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2",children:[(0,a.tZ)("p",{children:"Esdocu es un proyecto de traducci\xf3n al espa\xf1ol de documentaci\xf3n de tecnolog\xedas open source, iniciando por algunas de las tecnolog\xedas m\xe1s populares para el desarrollo web y de aplicaciones m\xf3viles."}),(0,a.tZ)("p",{children:"El proyecto pretende no solo realizar las traducciones, sino tambi\xe9n mantenerlas siempre actualizadas y sincronizadas con la versi\xf3n original en ingl\xe9s."}),(0,a.BX)("p",{children:["Esdocu es un proyecto open source en el que cualquier persona puede colaborar a trav\xe9s de los repositorios en nuestra cuenta de"," ",(0,a.tZ)("a",{href:"https://github.com/esdocu",target:"_blank",className:"text-sky-600 hover:text-sky-800",rel:"noreferrer",children:"GitHub"}),"."]})]})]}),(0,a.BX)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,a.tZ)("div",{className:"mt-7 pt-4 pb-6 md:space-y-5",children:(0,a.tZ)("h2",{className:"text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14",children:"Traducciones siempre actualizadas"})}),(0,a.BX)("div",{className:"prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2",children:[(0,a.tZ)("p",{children:"Luego de finalizar la primera traducci\xf3n completa de una documentaci\xf3n, nuestro sistema monitorea las modificaciones (commits) que se realicen en el repositorio original en ingl\xe9s. En ese momento analizamos el commit y aplicamos los mismos cambios (si est\xe1n relacionados con el contenido de documentaci\xf3n) al repositorio de la traducci\xf3n al espa\xf1ol."}),(0,a.tZ)("p",{children:"De esta manera las traducciones se mantienen siempre actualizadas y sincronizadas con la versi\xf3n en ingl\xe9s."})]})]}),(0,a.BX)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,a.tZ)("div",{className:"mt-7 pt-4 pb-6 md:space-y-5",children:(0,a.tZ)("h2",{className:"text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14",children:"Equipo"})}),(0,a.BX)("div",{className:"items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0",children:[(0,a.BX)("div",{className:"flex flex-col items-center pt-8",children:[(0,a.tZ)(i.Z,{src:o,alt:"avatar",width:"100px",height:"100px",className:"h-48 w-48 rounded-full"}),(0,a.tZ)("h3",{className:"pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight",children:c}),(0,a.tZ)("div",{className:"text-gray-500 dark:text-gray-400",children:d}),(0,a.tZ)("div",{className:"text-gray-500 dark:text-gray-400",children:s}),(0,a.BX)("div",{className:"flex space-x-3 pt-6",children:[(0,a.tZ)(n.Z,{kind:"mail",href:"mailto:".concat(u)}),(0,a.tZ)(n.Z,{kind:"github",href:h}),(0,a.tZ)(n.Z,{kind:"linkedin",href:p}),(0,a.tZ)(n.Z,{kind:"twitter",href:m})]})]}),(0,a.tZ)("div",{className:"prose max-w-none pt-12 pb-8 dark:prose-dark xl:col-span-2",children:t})]})]})]})}},3605:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var a=r(6690),n=r(7966),i=r(2866),l=r(1536),c=r(9829),o=r(5988),d=r(2065),s=r(1576),u=r.n(s),m=r(7930);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){p(e,t,r[t])}))}return e}var x=function(e){return"".concat(u().siteRepo,"/blob/master/data/blog/").concat(e)},y={weekday:"long",year:"numeric",month:"long",day:"numeric"};function f(e){var t=e.content,r=e.authorDetails,s=e.next,p=e.prev,f=e.children,g=t.slug,v=t.date,b=t.title,Z=t.tags;return(0,a.BX)(l.Z,{children:[(0,a.tZ)(c.Uy,h({url:"".concat(u().siteUrl,"/blog/").concat(g),authorDetails:r},t)),(0,a.tZ)(m.Z,{}),(0,a.tZ)("article",{children:(0,a.BX)("div",{className:"xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",children:[(0,a.tZ)("header",{className:"pt-6 xl:pb-6",children:(0,a.BX)("div",{className:"space-y-1 text-center",children:[(0,a.tZ)("dl",{className:"space-y-10",children:(0,a.BX)("div",{children:[(0,a.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,a.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,a.tZ)("time",{dateTime:v,children:new Date(v).toLocaleDateString(u().locale,y)})})]})}),(0,a.tZ)("div",{children:(0,a.tZ)(i.Z,{children:b})})]})}),(0,a.BX)("div",{className:"divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0",style:{gridTemplateRows:"auto 1fr"},children:[(0,a.BX)("dl",{className:"pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700",children:[(0,a.tZ)("dt",{className:"sr-only",children:"Authors"}),(0,a.tZ)("dd",{children:(0,a.tZ)("ul",{className:"flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8",children:r.map((function(e){return(0,a.BX)("li",{className:"flex items-center space-x-2",children:[e.avatar&&(0,a.tZ)(o.Z,{src:"/".concat(e.avatar),width:"38px",height:"38px",alt:"avatar",className:"h-10 w-10 rounded-full"}),(0,a.BX)("dl",{className:"whitespace-nowrap text-sm font-medium leading-5",children:[(0,a.tZ)("dt",{className:"sr-only",children:"Name"}),(0,a.tZ)("dd",{className:"text-gray-900 dark:text-gray-100",children:e.name}),(0,a.tZ)("dt",{className:"sr-only",children:"Twitter"}),(0,a.tZ)("dd",{children:e.twitter&&(0,a.tZ)(n.Z,{href:e.twitter,className:"text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400",children:e.twitter.replace("https://twitter.com/","@")})})]})]},e.name)}))})})]}),(0,a.BX)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",children:[(0,a.tZ)("div",{className:"prose max-w-none pt-10 pb-8 text-lg dark:prose-dark",children:f}),(0,a.tZ)("div",{className:"pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300",children:(0,a.tZ)(n.Z,{href:x(g),children:"Ver en GitHub"})})]}),(0,a.BX)("footer",{children:[(0,a.BX)("div",{className:"divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y",children:[Z&&(0,a.BX)("div",{className:"py-4 xl:py-8",children:[(0,a.tZ)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"Tags"}),(0,a.tZ)("div",{className:"flex flex-wrap",children:Z.map((function(e){return(0,a.tZ)(d.Z,{text:e},e)}))})]}),(s||p)&&(0,a.BX)("div",{className:"flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",children:[p&&(0,a.BX)("div",{children:[(0,a.tZ)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"Art\xedculo anterior"}),(0,a.tZ)("div",{className:"text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400",children:(0,a.tZ)(n.Z,{href:"/blog/".concat(p.slug),children:p.title})})]}),s&&(0,a.BX)("div",{children:[(0,a.tZ)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"Siguiente art\xedculo"}),(0,a.tZ)("div",{className:"text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400",children:(0,a.tZ)(n.Z,{href:"/blog/".concat(s.slug),children:s.title})})]})]})]}),(0,a.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,a.tZ)(n.Z,{href:"/blog",className:"text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400",children:"\u2190 Volver al blog"})})]})]})]})})]})}},8507:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var a=r(6690),n=r(7966),i=r(2866),l=r(1536),c=r(9829),o=r(1576),d=r.n(o),s=r(9870),u=r(5152),m=r.n(u),p=m()((function(){return r.e(864).then(r.bind(r,6864))}),{loadableGenerated:{webpack:function(){return[6864]}},ssr:!1}),h=m()((function(){return r.e(655).then(r.bind(r,5655))}),{loadableGenerated:{webpack:function(){return[5655]}},ssr:!1}),x=m()((function(){return r.e(971).then(r.bind(r,5971))}),{loadableGenerated:{webpack:function(){return[5971]}},ssr:!1}),y=function(e){var t=e.frontMatter,r=null===d()||void 0===d()?void 0:d().comment;return r&&0!==Object.keys(r).length?(0,a.BX)("div",{id:"comment",children:[d().comment&&"giscus"===d().comment.provider&&(0,a.tZ)(h,{}),d().comment&&"utterances"===d().comment.provider&&(0,a.tZ)(p,{}),d().comment&&"disqus"===d().comment.provider&&(0,a.tZ)(x,{frontMatter:t})]}):(0,a.tZ)(a.HY,{})},f=r(7930);function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){g(e,t,r[t])}))}return e}function b(e){var t=e.content,r=e.next,o=e.prev,u=e.children,m=t.slug,p=t.date,h=t.title;return(0,a.BX)(l.Z,{children:[(0,a.tZ)(c.Uy,v({url:"".concat(d().siteUrl,"/blog/").concat(m)},t)),(0,a.tZ)(f.Z,{}),(0,a.tZ)("article",{children:(0,a.BX)("div",{children:[(0,a.tZ)("header",{children:(0,a.BX)("div",{className:"space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700",children:[(0,a.tZ)("dl",{children:(0,a.BX)("div",{children:[(0,a.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,a.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,a.tZ)("time",{dateTime:p,children:(0,s.Z)(p)})})]})}),(0,a.tZ)("div",{children:(0,a.tZ)(i.Z,{children:h})})]})}),(0,a.BX)("div",{className:"divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 ",style:{gridTemplateRows:"auto 1fr"},children:[(0,a.tZ)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",children:(0,a.tZ)("div",{className:"prose max-w-none pt-10 pb-8 dark:prose-dark",children:u})}),(0,a.tZ)(y,{frontMatter:t}),(0,a.tZ)("footer",{children:(0,a.BX)("div",{className:"flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",children:[o&&(0,a.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,a.BX)(n.Z,{href:"/blog/".concat(o.slug),className:"text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400",children:["\u2190 ",o.title]})}),r&&(0,a.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,a.BX)(n.Z,{href:"/blog/".concat(r.slug),className:"text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400",children:[r.title," \u2192"]})})]})})]})]})})]})}}}]);