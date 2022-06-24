(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[108],{2346:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/proyectos",function(){return r(4491)}])},6050:function(t,e,r){"use strict";var n=r(6690),a=r(5988),i=r(7966);e.Z=function(t){var e=t.title,r=t.description,o=t.imgSrc,c=t.href;return(0,n.tZ)("div",{className:"md p-4 md:w-1/2",style:{maxWidth:"544px"},children:(0,n.BX)("div",{className:"".concat(o&&"h-full","  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700"),children:[o&&(c?(0,n.tZ)(i.Z,{href:c,"aria-label":"Link to ".concat(e),children:(0,n.tZ)(a.Z,{alt:e,src:o,className:"object-cover object-center md:h-36 lg:h-48",width:896,height:394})}):(0,n.tZ)(a.Z,{alt:e,src:o,className:"object-cover object-center md:h-36 lg:h-48",width:544,height:306})),(0,n.BX)("div",{className:"p-6",children:[(0,n.tZ)("h2",{className:"mb-3 text-2xl font-bold leading-8 tracking-tight",children:c?(0,n.tZ)(i.Z,{href:c,"aria-label":"Link to ".concat(e),children:e}):e}),(0,n.tZ)("p",{className:"prose mb-3 max-w-none text-gray-500 dark:text-gray-400",children:r}),c&&(0,n.tZ)(i.Z,{href:c,className:"text-base font-medium leading-6 text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400","aria-label":"Link to ".concat(e),children:"Abrir web del proyecto \u2192"})]})]})})}},5988:function(t,e,r){"use strict";var n=r(6690),a=r(5675),i=r.n(a);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c.apply(this,arguments)}e.Z=function(t){var e=c({},t);return(0,n.tZ)(i(),function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){o(t,e,r[e])}))}return t}({},e))}},9829:function(t,e,r){"use strict";r.d(e,{$t:function(){return m},TQ:function(){return d},Uy:function(){return p}});var n=r(6690),a=r(9008),i=r.n(a),o=r(1163),c=r(1576),l=r.n(c),s=function(t){var e=t.title,r=t.description,a=t.ogType,c=t.ogImage,s=t.twImage,d=t.canonicalUrl,m=(0,o.useRouter)();return(0,n.BX)(i(),{children:[(0,n.tZ)("title",{children:e}),(0,n.tZ)("meta",{name:"robots",content:"follow, index"}),(0,n.tZ)("meta",{name:"description",content:r}),(0,n.tZ)("meta",{property:"og:url",content:"".concat(l().siteUrl).concat(m.asPath)}),(0,n.tZ)("meta",{property:"og:type",content:a}),(0,n.tZ)("meta",{property:"og:site_name",content:l().title}),(0,n.tZ)("meta",{property:"og:description",content:r}),(0,n.tZ)("meta",{property:"og:title",content:e}),Array.isArray(c)?c.map((function(t){var e=t.url;return(0,n.tZ)("meta",{property:"og:image",content:e},e)})):(0,n.tZ)("meta",{property:"og:image",content:c},c),(0,n.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.tZ)("meta",{name:"twitter:site",content:l().twitter}),(0,n.tZ)("meta",{name:"twitter:title",content:e}),(0,n.tZ)("meta",{name:"twitter:description",content:r}),(0,n.tZ)("meta",{name:"twitter:image",content:s}),(0,n.tZ)("link",{rel:"canonical",href:d||"".concat(l().siteUrl).concat(m.asPath)})]})},d=function(t){var e=t.title,r=t.description,a=l().siteUrl+l().socialBanner,i=l().siteUrl+l().socialBanner;return(0,n.tZ)(s,{title:e,description:r,ogType:"website",ogImage:a,twImage:i})},m=function(t){var e=t.title,r=t.description,a=l().siteUrl+l().socialBanner,c=l().siteUrl+l().socialBanner,d=(0,o.useRouter)();return(0,n.BX)(n.HY,{children:[(0,n.tZ)(s,{title:e,description:r,ogType:"website",ogImage:a,twImage:c}),(0,n.tZ)(i(),{children:(0,n.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(r," - RSS feed"),href:"".concat(l().siteUrl).concat(d.asPath,"/feed.xml")})})]})},p=function(t){var e=t.authorDetails,r=t.title,a=t.summary,o=t.date,c=t.lastmod,d=t.url,m=t.images,p=void 0===m?[]:m,u=t.canonicalUrl,g=new Date(o).toISOString(),h=new Date(c||o).toISOString(),y=(0===p.length?[l().socialBanner]:"string"===typeof p?[p]:p).map((function(t){return{"@type":"ImageObject",url:"".concat(l().siteUrl).concat(t)}})),f={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":d},headline:r,image:y,datePublished:g,dateModified:h,author:e?e.map((function(t){return{"@type":"Person",name:t.name}})):{"@type":"Person",name:l().author},publisher:{"@type":"Organization",name:l().author,logo:{"@type":"ImageObject",url:"".concat(l().siteUrl).concat(l().siteLogo)}},description:a},b=y[0].url;return(0,n.BX)(n.HY,{children:[(0,n.tZ)(s,{title:r,description:a,ogType:"article",ogImage:y,twImage:b,canonicalUrl:u}),(0,n.BX)(i(),{children:[o&&(0,n.tZ)("meta",{property:"article:published_time",content:g}),c&&(0,n.tZ)("meta",{property:"article:modified_time",content:h}),(0,n.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(f,null,2)}})]})]})}},1415:function(t,e){"use strict";e.Z=[{title:"Bootstrap 5 en Espa\xf1ol",description:"La biblioteca HTML, CSS y JS m\xe1s popular del mundo. Dise\xf1a y personaliza r\xe1pidamente sitios responsive mobile-first con Bootstrap, el toolkit de c\xf3digo abierto de front-end m\xe1s popular del mundo.",imgSrc:"/static/images/projects/getbootstrap.jpg",href:"https://getbootstrap.esdocu.com/"}]},4491:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return s}});var n=r(6690),a=r(1576),i=r.n(a),o=r(1415),c=r(6050),l=r(9829);function s(){return(0,n.BX)(n.HY,{children:[(0,n.tZ)(l.TQ,{title:"Proyectos de traducci\xf3n - ".concat(i().author),description:i().description}),(0,n.BX)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,n.BX)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:[(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:"Proyectos"}),(0,n.tZ)("p",{className:"text-lg leading-7 text-gray-500 dark:text-gray-400",children:"Documentaciones traducidas completamente al espa\xf1ol"})]}),(0,n.tZ)("div",{className:"container py-12",children:(0,n.tZ)("div",{className:"-m-4 flex flex-wrap",children:o.Z.map((function(t){return(0,n.tZ)(c.Z,{title:t.title,description:t.description,imgSrc:t.imgSrc,href:t.href},t.title)}))})})]})]})}}},function(t){t.O(0,[873,888,179],(function(){return e=2346,t(t.s=e);var e}));var e=t.O();_N_E=e}]);