(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9671:function(u,D,e){const t=e(1701);u.exports=r;const F=Object.hasOwnProperty;function r(){if(!(this instanceof r))return new r;this.reset()}function n(u,D){return"string"!==typeof u?"":(D||(u=u.toLowerCase()),u.replace(t,"").replace(/ /g,"-"))}r.prototype.slug=function(u,D){const e=this;let t=n(u,!0===D);const r=t;for(;F.call(e.occurrences,t);)e.occurrences[r]++,t=r+"-"+e.occurrences[r];return e.occurrences[t]=0,t},r.prototype.reset=function(){this.occurrences=Object.create(null)},r.slug=n},1701:function(u){u.exports=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08BE-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D04\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1ABF-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31BB-\u31EF\u3200-\u33FF\u4DB6-\u4DFF\u9FF0-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7C7-\uA7F6\uA828-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB68-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD47-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD-\uDDCF\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC60-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD00-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD823-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D-\uD83F\uD87B-\uD87D\uD87F-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE4-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD822[\uDEF3-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD869[\uDED7-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g},8312:function(u,D,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(4186)}])},6050:function(u,D,e){"use strict";var t=e(6690),F=e(5988),r=e(7966);D.Z=function(u){var D=u.title,e=u.description,n=u.imgSrc,a=u.href;return(0,t.tZ)("div",{className:"md p-4 md:w-1/2",style:{maxWidth:"544px"},children:(0,t.BX)("div",{className:"".concat(n&&"h-full","  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700"),children:[n&&(a?(0,t.tZ)(r.Z,{href:a,"aria-label":"Link to ".concat(D),children:(0,t.tZ)(F.Z,{alt:D,src:n,className:"object-cover object-center md:h-36 lg:h-48",width:896,height:394})}):(0,t.tZ)(F.Z,{alt:D,src:n,className:"object-cover object-center md:h-36 lg:h-48",width:544,height:306})),(0,t.BX)("div",{className:"p-6",children:[(0,t.tZ)("h2",{className:"mb-3 text-2xl font-bold leading-8 tracking-tight",children:a?(0,t.tZ)(r.Z,{href:a,"aria-label":"Link to ".concat(D),children:D}):D}),(0,t.tZ)("p",{className:"prose mb-3 max-w-none text-gray-500 dark:text-gray-400",children:e}),a&&(0,t.tZ)(r.Z,{href:a,className:"text-base font-medium leading-6 text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400","aria-label":"Link to ".concat(D),children:"Abrir web del proyecto \u2192"})]})]})})}},5988:function(u,D,e){"use strict";var t=e(6690),F=e(5675),r=e.n(F);function n(u,D,e){return D in u?Object.defineProperty(u,D,{value:e,enumerable:!0,configurable:!0,writable:!0}):u[D]=e,u}function a(){return a=Object.assign||function(u){for(var D=1;D<arguments.length;D++){var e=arguments[D];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(u[t]=e[t])}return u},a.apply(this,arguments)}D.Z=function(u){var D=a({},u);return(0,t.tZ)(r(),function(u){for(var D=1;D<arguments.length;D++){var e=null!=arguments[D]?arguments[D]:{},t=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e).filter((function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})))),t.forEach((function(D){n(u,D,e[D])}))}return u}({},D))}},5769:function(u,D,e){"use strict";e.d(D,{w:function(){return l}});var t=e(4051),F=e.n(t),r=e(6690),n=e(1720),a=e(1576),i=e.n(a);function c(u,D,e,t,F,r,n){try{var a=u[r](n),i=a.value}catch(c){return void e(c)}a.done?D(i):Promise.resolve(i).then(t,F)}var o=function(u){var D=u.title,e=void 0===D?"Subscribe to the newsletter":D,t=(0,n.useRef)(null),a=(0,n.useState)(!1),o=a[0],l=a[1],s=(0,n.useState)(""),C=s[0],E=s[1],A=(0,n.useState)(!1),d=A[0],B=A[1],m=function(){var u,D=(u=F().mark((function u(D){var e;return F().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return D.preventDefault(),u.next=3,fetch("/api/".concat(i().newsletter.provider),{body:JSON.stringify({email:t.current.value}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return e=u.sent,u.next=6,e.json();case 6:if(!u.sent.error){u.next=11;break}return l(!0),E("Your e-mail address is invalid or you are already subscribed!"),u.abrupt("return");case 11:t.current.value="",l(!1),B(!0),E("Successfully! \ud83c\udf89 You are now subscribed.");case 15:case"end":return u.stop()}}),u)})),function(){var D=this,e=arguments;return new Promise((function(t,F){var r=u.apply(D,e);function n(u){c(r,t,F,n,a,"next",u)}function a(u){c(r,t,F,n,a,"throw",u)}n(void 0)}))});return function(u){return D.apply(this,arguments)}}();return(0,r.BX)("div",{children:[(0,r.tZ)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:e}),(0,r.BX)("form",{className:"flex flex-col sm:flex-row",onSubmit:m,children:[(0,r.BX)("div",{children:[(0,r.tZ)("label",{className:"sr-only",htmlFor:"email-input",children:"Email address"}),(0,r.tZ)("input",{autoComplete:"email",className:"w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black",id:"email-input",name:"email",placeholder:d?"You're subscribed !  \ud83c\udf89":"Enter your email",ref:t,required:!0,type:"email",disabled:d})]}),(0,r.tZ)("div",{className:"mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,r.tZ)("button",{className:"w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 ".concat(d?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"," focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black"),type:"submit",disabled:d,children:d?"Thank you!":"Sign up"})})]}),o&&(0,r.tZ)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:C})]})};D.Z=o;var l=function(u){var D=u.title;return(0,r.tZ)("div",{className:"flex items-center justify-center",children:(0,r.tZ)("div",{className:"bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,r.tZ)(o,{title:D})})})}},9829:function(u,D,e){"use strict";e.d(D,{$t:function(){return l},TQ:function(){return o},Uy:function(){return s}});var t=e(6690),F=e(9008),r=e.n(F),n=e(1163),a=e(1576),i=e.n(a),c=function(u){var D=u.title,e=u.description,F=u.ogType,a=u.ogImage,c=u.twImage,o=u.canonicalUrl,l=(0,n.useRouter)();return(0,t.BX)(r(),{children:[(0,t.tZ)("title",{children:D}),(0,t.tZ)("meta",{name:"robots",content:"follow, index"}),(0,t.tZ)("meta",{name:"description",content:e}),(0,t.tZ)("meta",{property:"og:url",content:"".concat(i().siteUrl).concat(l.asPath)}),(0,t.tZ)("meta",{property:"og:type",content:F}),(0,t.tZ)("meta",{property:"og:site_name",content:i().title}),(0,t.tZ)("meta",{property:"og:description",content:e}),(0,t.tZ)("meta",{property:"og:title",content:D}),Array.isArray(a)?a.map((function(u){var D=u.url;return(0,t.tZ)("meta",{property:"og:image",content:D},D)})):(0,t.tZ)("meta",{property:"og:image",content:a},a),(0,t.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,t.tZ)("meta",{name:"twitter:site",content:i().twitter}),(0,t.tZ)("meta",{name:"twitter:title",content:D}),(0,t.tZ)("meta",{name:"twitter:description",content:e}),(0,t.tZ)("meta",{name:"twitter:image",content:c}),(0,t.tZ)("link",{rel:"canonical",href:o||"".concat(i().siteUrl).concat(l.asPath)})]})},o=function(u){var D=u.title,e=u.description,F=i().siteUrl+i().socialBanner,r=i().siteUrl+i().socialBanner;return(0,t.tZ)(c,{title:D,description:e,ogType:"website",ogImage:F,twImage:r})},l=function(u){var D=u.title,e=u.description,F=i().siteUrl+i().socialBanner,a=i().siteUrl+i().socialBanner,o=(0,n.useRouter)();return(0,t.BX)(t.HY,{children:[(0,t.tZ)(c,{title:D,description:e,ogType:"website",ogImage:F,twImage:a}),(0,t.tZ)(r(),{children:(0,t.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(e," - RSS feed"),href:"".concat(i().siteUrl).concat(o.asPath,"/feed.xml")})})]})},s=function(u){var D=u.authorDetails,e=u.title,F=u.summary,n=u.date,a=u.lastmod,o=u.url,l=u.images,s=void 0===l?[]:l,C=u.canonicalUrl,E=new Date(n).toISOString(),A=new Date(a||n).toISOString(),d=(0===s.length?[i().socialBanner]:"string"===typeof s?[s]:s).map((function(u){return{"@type":"ImageObject",url:"".concat(i().siteUrl).concat(u)}})),B={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":o},headline:e,image:d,datePublished:E,dateModified:A,author:D?D.map((function(u){return{"@type":"Person",name:u.name}})):{"@type":"Person",name:i().author},publisher:{"@type":"Organization",name:i().author,logo:{"@type":"ImageObject",url:"".concat(i().siteUrl).concat(i().siteLogo)}},description:F},m=d[0].url;return(0,t.BX)(t.HY,{children:[(0,t.tZ)(c,{title:e,description:F,ogType:"article",ogImage:d,twImage:m,canonicalUrl:C}),(0,t.BX)(r(),{children:[n&&(0,t.tZ)("meta",{property:"article:published_time",content:E}),a&&(0,t.tZ)("meta",{property:"article:modified_time",content:A}),(0,t.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(B,null,2)}})]})]})}},2065:function(u,D,e){"use strict";var t=e(6690),F=e(1664),r=e.n(F),n=e(195);D.Z=function(u){var D=u.text;return(0,t.tZ)(r(),{href:"/tags/".concat((0,n.Z)(D)),children:(0,t.tZ)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400",children:D.split(" ").join("-")})})}},1415:function(u,D){"use strict";D.Z=[{title:"Bootstrap 5 en Espa\xf1ol",description:"La biblioteca HTML, CSS y JS m\xe1s popular del mundo. Dise\xf1a y personaliza r\xe1pidamente sitios responsive mobile-first con Bootstrap, el toolkit de c\xf3digo abierto de front-end m\xe1s popular del mundo.",imgSrc:"/static/images/projects/getbootstrap.jpg",href:"https://getbootstrap.esdocu.com/"}]},9870:function(u,D,e){"use strict";var t=e(1576),F=e.n(t);D.Z=function(u){return new Date(u).toLocaleDateString(F().locale,{year:"numeric",month:"long",day:"numeric"})}},195:function(u,D,e){"use strict";var t=e(9671);D.Z=function(u){return(0,t.slug)(u)}},4186:function(u,D,e){"use strict";e.r(D),e.d(D,{__N_SSG:function(){return E},default:function(){return A}});var t=e(6690),F=e(5988),r=e(7966),n=e(9829),a=e(2065),i=e(1576),c=e.n(i),o=e(9870),l=e(5769),s=e(6050),C=e(1415),E=!0;function A(u){var D=u.posts;return(0,t.BX)(t.HY,{children:[(0,t.tZ)(n.TQ,{title:c().title,description:c().description}),(0,t.BX)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,t.BX)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:[(0,t.tZ)("h2",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14",children:"\xbfQu\xe9 es Esdocu?"}),(0,t.tZ)("p",{className:"text-lg leading-7 text-gray-500 dark:text-gray-400",children:c().description}),(0,t.tZ)("p",{className:"text-lg leading-7 text-gray-500 dark:text-gray-400",children:"Estos son nuestros proyectos de traducci\xf3n finalizados:"}),(0,t.tZ)("div",{className:"container py-12",children:(0,t.tZ)("div",{className:"-m-4 flex flex-wrap",children:C.Z.map((function(u){return(0,t.tZ)(s.Z,{title:u.title,description:u.description,imgSrc:u.imgSrc,href:u.href},u.title)}))})})]}),(0,t.BX)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:[(0,t.tZ)("h2",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14",children:"Nuestro Blog"}),(0,t.tZ)("p",{className:"text-lg leading-7 text-gray-500 dark:text-gray-400",children:"Lee las \xfaltimas entradas publicadas en nuestro blog"})]}),(0,t.tZ)("div",{children:(0,t.BX)("ul",{className:"mx-auto max-w-4xl divide-y divide-gray-200 dark:divide-gray-700",children:[!D.length&&"No se han encontrado publicaciones.",D.slice(0,5).map((function(u){var D=u.slug,e=u.date,n=u.title,i=u.summary,c=u.tags,l=u.images;return(0,t.tZ)("li",{className:"py-12",children:(0,t.tZ)("article",{children:(0,t.BX)("div",{className:"space-y-2",children:[(0,t.tZ)(r.Z,{href:"/blog/".concat(D),children:(0,t.tZ)(F.Z,{src:l[0],alt:"Post image",className:"object-cover object-center md:h-36 lg:h-48",width:1024,height:450})}),(0,t.BX)("div",{className:"space-y-5 xl:col-span-3",children:[(0,t.BX)("div",{className:"space-y-6",children:[(0,t.BX)("div",{children:[(0,t.tZ)("h2",{className:"text-4xl font-bold leading-14 tracking-tight",children:(0,t.tZ)(r.Z,{href:"/blog/".concat(D),className:"text-gray-900 dark:text-gray-100",children:n})}),(0,t.tZ)("div",{className:"flex flex-wrap",children:c.map((function(u){return(0,t.tZ)(a.Z,{text:u},u)}))})]}),(0,t.tZ)("div",{className:"prose max-w-none text-gray-500 dark:text-gray-400",children:i})]}),(0,t.tZ)("div",{className:"text-base font-medium leading-3 text-gray-500 dark:text-gray-400",children:(0,t.tZ)("time",{dateTime:e,children:(0,o.Z)(e)})}),(0,t.tZ)("div",{className:"text-base font-medium leading-6",children:(0,t.tZ)(r.Z,{href:"/blog/".concat(D),className:"text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400","aria-label":'Read "'.concat(n,'"'),children:"Leer m\xe1s \u2192"})})]})]})})},D)}))]})})]}),D.length>5&&(0,t.tZ)("div",{className:"flex justify-end text-base font-medium leading-6",children:(0,t.tZ)(r.Z,{href:"/blog",className:"text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400","aria-label":"todas las publicaciones",children:"Todas las publicaciones \u2192"})}),""!==c().newsletter.provider&&(0,t.tZ)("div",{className:"flex items-center justify-center pt-4",children:(0,t.tZ)(l.Z,{})})]})}}},function(u){u.O(0,[873,888,179],(function(){return D=8312,u(u.s=D);var D}));var D=u.O();_N_E=D}]);