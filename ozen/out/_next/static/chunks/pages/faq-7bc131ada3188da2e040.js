(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7746],{7375:function(e,n,o){"use strict";function s(e,n){if(null==e)return{};var o,s,a=function(e,n){if(null==e)return{};var o,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)o=r[s],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)o=r[s],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}o.d(n,{Z:function(){return s}})},6071:function(e,n,o){"use strict";var s=o(3038),a=o(862);n.default=void 0;var r=a(o(7294)),t=o(1689),i=o(2441),l=o(5749),c={};function f(e,n,o,s){if(e&&(0,t.isLocalURL)(n)){e.prefetch(n,o,s).catch((function(e){0}));var a=s&&"undefined"!==typeof s.locale?s.locale:e&&e.locale;c[n+"%"+o+(a?"%"+a:"")]=!0}}var u=function(e){var n=!1!==e.prefetch,o=(0,i.useRouter)(),a=o&&o.asPath||"/",u=r.default.useMemo((function(){var n=(0,t.resolveHref)(a,e.href,!0),o=s(n,2),r=o[0],i=o[1];return{href:r,as:e.as?(0,t.resolveHref)(a,e.as):i||r}}),[a,e.href,e.as]),d=u.href,m=u.as,h=e.children,g=e.replace,p=e.shallow,v=e.scroll,x=e.locale;"string"===typeof h&&(h=r.default.createElement("a",null,h));var j=r.Children.only(h),y=j&&"object"===typeof j&&j.ref,b=(0,l.useIntersection)({rootMargin:"200px"}),T=s(b,2),I=T[0],N=T[1],M=r.default.useCallback((function(e){I(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,I]);(0,r.useEffect)((function(){var e=N&&n&&(0,t.isLocalURL)(d),s="undefined"!==typeof x?x:o&&o.locale,a=c[d+"%"+m+(s?"%"+s:"")];e&&!a&&f(o,d,m,{locale:s})}),[m,d,N,x,n,o]);var O={ref:M,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,n,o,s,a,r,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,t.isLocalURL)(o))&&(e.preventDefault(),null==i&&(i=s.indexOf("#")<0),n[a?"replace":"push"](o,s,{shallow:r,locale:l,scroll:i}))}(e,o,d,m,g,p,v,x)},onMouseEnter:function(e){(0,t.isLocalURL)(d)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),f(o,d,m,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var C="undefined"!==typeof x?x:o&&o.locale,E=o&&o.isLocaleDomain&&(0,t.getDomainLocale)(m,C,o&&o.locales,o&&o.domainLocales);O.href=E||(0,t.addBasePath)((0,t.addLocale)(m,C,o&&o.defaultLocale))}return r.default.cloneElement(j,O)};n.default=u},5749:function(e,n,o){"use strict";var s=o(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,o=e.disabled||!t,l=(0,a.useRef)(),c=(0,a.useState)(!1),f=s(c,2),u=f[0],d=f[1],m=(0,a.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),o||u||e&&e.tagName&&(l.current=function(e,n,o){var s=function(e){var n=e.rootMargin||"",o=i.get(n);if(o)return o;var s=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=s.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;n&&o&&n(o)}))}),e);return i.set(n,o={id:n,observer:a,elements:s}),o}(o),a=s.id,r=s.observer,t=s.elements;return t.set(e,n),r.observe(e),function(){t.delete(e),r.unobserve(e),0===t.size&&(r.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[o,n,u]);return(0,a.useEffect)((function(){if(!t&&!u){var e=(0,r.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,r.cancelIdleCallback)(e)}}}),[u]),[m,u]};var a=o(7294),r=o(8391),t="undefined"!==typeof IntersectionObserver;var i=new Map},2515:function(e,n,o){"use strict";o.r(n);var s=o(5893),a=(o(7294),o(6408)),r=o(1288),t=(o(1664),o(6918)),i=o(1876);n.default=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{}),(0,s.jsx)(r.Z,{pageTitle:"FAQs",homePageUrl:"/",homePageText:"Home",activePageText:"FAQs"}),(0,s.jsxs)("div",{className:"faq-area ptb-100",children:[(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"faq-accordion accordion-box",children:(0,s.jsxs)(i.UQ,{allowZeroExpanded:!0,preExpanded:["a"],children:[(0,s.jsxs)(i.Qd,{uuid:"a",children:[(0,s.jsx)(i.Ol,{children:(0,s.jsx)(i.on,{children:"Why Are Consultants Important?"})}),(0,s.jsx)(i.Mt,{children:(0,s.jsx)("p",{children:"The IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more. IT consulting services are important because they play a vital role in businesses by covering the management, implementation, deployment, and maintenance of an IT infrastructure. IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more."})})]}),(0,s.jsxs)(i.Qd,{uuid:"b",children:[(0,s.jsx)(i.Ol,{children:(0,s.jsx)(i.on,{children:"What is The Purpose of a Consultant?"})}),(0,s.jsx)(i.Mt,{children:(0,s.jsx)("p",{children:"The IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more. IT consulting services are important because they play a vital role in businesses by covering the management, implementation, deployment, and maintenance of an IT infrastructure. IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more."})})]}),(0,s.jsxs)(i.Qd,{uuid:"c",children:[(0,s.jsx)(i.Ol,{children:(0,s.jsx)(i.on,{children:"What Attracts You To The Role of a Consultant?"})}),(0,s.jsx)(i.Mt,{children:(0,s.jsx)("p",{children:"The IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more. IT consulting services are important because they play a vital role in businesses by covering the management, implementation, deployment, and maintenance of an IT infrastructure. IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more."})})]}),(0,s.jsxs)(i.Qd,{uuid:"d",children:[(0,s.jsx)(i.Ol,{children:(0,s.jsx)(i.on,{children:"What Are The Advantages of Being a Consultant?"})}),(0,s.jsx)(i.Mt,{children:(0,s.jsx)("p",{children:"The IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more. IT consulting services are important because they play a vital role in businesses by covering the management, implementation, deployment, and maintenance of an IT infrastructure. IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more."})})]}),(0,s.jsxs)(i.Qd,{uuid:"e",children:[(0,s.jsx)(i.Ol,{children:(0,s.jsx)(i.on,{children:"Is Consulting a Good Career?"})}),(0,s.jsx)(i.Mt,{children:(0,s.jsx)("p",{children:"The IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more. IT consulting services are important because they play a vital role in businesses by covering the management, implementation, deployment, and maintenance of an IT infrastructure. IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more."})})]}),(0,s.jsxs)(i.Qd,{uuid:"f",children:[(0,s.jsx)(i.Ol,{children:(0,s.jsx)(i.on,{children:"How is Working in Consulting?"})}),(0,s.jsx)(i.Mt,{children:(0,s.jsx)("p",{children:"The IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more. IT consulting services are important because they play a vital role in businesses by covering the management, implementation, deployment, and maintenance of an IT infrastructure. IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more."})})]})]})}),(0,s.jsxs)("div",{className:"ticket-box",children:[(0,s.jsx)("h3",{children:"Have Any Question in Mind Please Call or Mail Us"}),(0,s.jsxs)("div",{className:"box-one",children:[(0,s.jsx)("i",{className:"ri-customer-service-line"}),(0,s.jsx)("a",{href:"tel:3128959800",children:"(312) 895-9800"})]}),(0,s.jsxs)("div",{className:"box-two",children:[(0,s.jsx)("i",{className:"ri-earth-line"}),(0,s.jsx)("a",{href:"mailto:hello.me@ozen.com",children:"hello.me@ozen.com"})]})]})]}),(0,s.jsx)("div",{className:"faq-shape-1",children:(0,s.jsx)("img",{src:"/images/faq/shape-1.png",alt:"image"})}),(0,s.jsx)("div",{className:"faq-shape-2",children:(0,s.jsx)("img",{src:"/images/faq/shape-2.png",alt:"image"})}),(0,s.jsx)("div",{className:"faq-shape-3",children:(0,s.jsx)("img",{src:"/images/faq/shape-3.png",alt:"image"})}),(0,s.jsx)("div",{className:"faq-shape-4",children:(0,s.jsx)("img",{src:"/images/faq/shape-4.png",alt:"image"})}),(0,s.jsx)("div",{className:"faq-shape-5",children:(0,s.jsx)("img",{src:"/images/faq/shape-5.png",alt:"image"})})]}),(0,s.jsx)(t.Z,{})]})}},5770:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return o(2515)}])},1664:function(e,n,o){e.exports=o(6071)},1163:function(e,n,o){e.exports=o(2441)}},function(e){e.O(0,[1876,8674,3899,9774,2888,179],(function(){return n=5770,e(e.s=n);var n}));var n=e.O();_N_E=n}]);