(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[507],{7375:function(e,t,o){"use strict";function s(e,t){if(null==e)return{};var o,s,n=function(e,t){if(null==e)return{};var o,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}o.d(t,{Z:function(){return s}})},6071:function(e,t,o){"use strict";var s=o(3038),n=o(862);t.default=void 0;var r=n(o(7294)),a=o(1689),i=o(2441),c=o(5749),l={};function u(e,t,o,s){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,o,s).catch((function(e){0}));var n=s&&"undefined"!==typeof s.locale?s.locale:e&&e.locale;l[t+"%"+o+(n?"%"+n:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,o=(0,i.useRouter)(),n=o&&o.asPath||"/",d=r.default.useMemo((function(){var t=(0,a.resolveHref)(n,e.href,!0),o=s(t,2),r=o[0],i=o[1];return{href:r,as:e.as?(0,a.resolveHref)(n,e.as):i||r}}),[n,e.href,e.as]),f=d.href,m=d.as,p=e.children,h=e.replace,x=e.shallow,j=e.scroll,v=e.locale;"string"===typeof p&&(p=r.default.createElement("a",null,p));var g=r.Children.only(p),y=g&&"object"===typeof g&&g.ref,b=(0,c.useIntersection)({rootMargin:"200px"}),N=s(b,2),w=N[0],k=N[1],S=r.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);(0,r.useEffect)((function(){var e=k&&t&&(0,a.isLocalURL)(f),s="undefined"!==typeof v?v:o&&o.locale,n=l[f+"%"+m+(s?"%"+s:"")];e&&!n&&u(o,f,m,{locale:s})}),[m,f,k,v,t,o]);var O={ref:S,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,o,s,n,r,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(o))&&(e.preventDefault(),null==i&&(i=s.indexOf("#")<0),t[n?"replace":"push"](o,s,{shallow:r,locale:c,scroll:i}))}(e,o,f,m,h,x,j,v)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(o,f,m,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var E="undefined"!==typeof v?v:o&&o.locale,T=o&&o.isLocaleDomain&&(0,a.getDomainLocale)(m,E,o&&o.locales,o&&o.domainLocales);O.href=T||(0,a.addBasePath)((0,a.addLocale)(m,E,o&&o.defaultLocale))}return r.default.cloneElement(g,O)};t.default=d},5749:function(e,t,o){"use strict";var s=o(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,o=e.disabled||!a,c=(0,n.useRef)(),l=(0,n.useState)(!1),u=s(l,2),d=u[0],f=u[1],m=(0,n.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),o||d||e&&e.tagName&&(c.current=function(e,t,o){var s=function(e){var t=e.rootMargin||"",o=i.get(t);if(o)return o;var s=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=s.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)}))}),e);return i.set(t,o={id:t,observer:n,elements:s}),o}(o),n=s.id,r=s.observer,a=s.elements;return a.set(e,t),r.observe(e),function(){a.delete(e),r.unobserve(e),0===a.size&&(r.disconnect(),i.delete(n))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[o,t,d]);return(0,n.useEffect)((function(){if(!a&&!d){var e=(0,r.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,r.cancelIdleCallback)(e)}}}),[d]),[m,d]};var n=o(7294),r=o(8391),a="undefined"!==typeof IntersectionObserver;var i=new Map},3064:function(e,t,o){"use strict";o.r(t);var s=o(5893),n=o(5988),r=(o(7294),o(6408)),a=o(1288),i=o(6918);t.default=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{}),(0,s.jsx)(a.Z,{pageTitle:"Terms of Service",homePageUrl:"/",homePageText:"Home",activePageText:"Terms of Service"}),(0,s.jsxs)("div",{className:"jsx-2747286434 terms-of-service-area ptb-100",children:[(0,s.jsx)("div",{className:"jsx-2747286434 container",children:(0,s.jsx)("div",{className:"jsx-2747286434 row justify-content-center",children:(0,s.jsx)("div",{className:"jsx-2747286434 col-lg-8 col-md-12",children:(0,s.jsxs)("div",{className:"jsx-2747286434 terms-of-service-content",children:[(0,s.jsx)("img",{src:"/images/terms-of-service.jpg",alt:"image",className:"jsx-2747286434"}),(0,s.jsx)("p",{className:"jsx-2747286434",children:(0,s.jsx)("i",{className:"jsx-2747286434",children:"This Terms of Service was last updated on September 1, 2021."})}),(0,s.jsxs)("h3",{className:"jsx-2747286434",children:[(0,s.jsx)("span",{className:"jsx-2747286434",children:"1."})," Our Website"]}),(0,s.jsx)("p",{className:"jsx-2747286434",children:"Our website address is: http://ozen.com"}),(0,s.jsx)("blockquote",{className:"jsx-2747286434 blockquote",children:(0,s.jsx)("p",{className:"jsx-2747286434",children:"We collect certain data from you directly, like information you enter yourself, data about your participation in courses, and data from third-party platforms you connect with Ozen. We also collect some data automatically, like information about your device and what parts of our Services you interact with or spend time using."})}),(0,s.jsxs)("h3",{className:"jsx-2747286434",children:[(0,s.jsx)("span",{className:"jsx-2747286434",children:"2."})," Data You Provide to Us"]}),(0,s.jsx)("p",{className:"jsx-2747286434",children:"We may collect different data from or about you depending on how you use the Services. Below are some examples to help you better understand the data we collect."}),(0,s.jsxs)("h3",{className:"jsx-2747286434",children:[(0,s.jsx)("span",{className:"jsx-2747286434",children:"3."})," How We Get Data About You"]}),(0,s.jsx)("p",{className:"jsx-2747286434",children:"We use tools like cookies, web beacons, analytics services, and advertising providers to gather the data listed above. Some of these tools offer you the ability to opt out of data collection."}),(0,s.jsxs)("h3",{className:"jsx-2747286434",children:[(0,s.jsx)("span",{className:"jsx-2747286434",children:"4."})," What We Use Your Data For"]}),(0,s.jsxs)("ol",{className:"jsx-2747286434",children:[(0,s.jsx)("li",{className:"jsx-2747286434",children:"Responding to your questions and concerns;"}),(0,s.jsx)("li",{className:"jsx-2747286434",children:"Sending you administrative messages and information, including messages from instructors and teaching assistants, notifications about changes to our Service, and updates to our agreements;"}),(0,s.jsx)("li",{className:"jsx-2747286434",children:"Sending push notifications to your wireless device to provide updates and other relevant messages (which you can manage from the \u201coptions\u201d or \u201csettings\u201d page of the mobile app);"})]}),(0,s.jsxs)("h3",{className:"jsx-2747286434",children:[(0,s.jsx)("span",{className:"jsx-2747286434",children:"5."})," Your Choices About the Use of Your Data"]}),(0,s.jsx)("p",{className:"jsx-2747286434",children:"You can choose not to provide certain data to us, but you may not be able to use certain features of the Services."}),(0,s.jsxs)("ul",{className:"jsx-2747286434",children:[(0,s.jsx)("li",{className:"jsx-2747286434",children:"To stop receiving promotional communications from us, you can opt out by using the unsubscribe mechanism in the promotional communication you receive or by changing the email preferences in your account. Note that regardless of your email preference settings, we will send you transactional and relationship messages regarding the Services, including administrative confirmations, order confirmations, important updates about the Services, and notices about our policies."}),(0,s.jsx)("li",{className:"jsx-2747286434",children:"The browser or device you use may allow you to control cookies and other types of local data storage. Your wireless device may also allow you to control whether location or other data is collected and shared. You can manage Adobe\u2019s LSOs through their Website Storage Settings panel."}),(0,s.jsx)("li",{className:"jsx-2747286434",children:"To get information and control cookies used for tailored advertising from participating companies, see the consumer opt-out pages for the Network Advertising Initiative and Digital Advertising Alliance, or if you\u2019re located in the European Union, visit the Your Online Choices site. To opt out of Google\u2019s display advertising or customize Google Display Network ads, visit the Google Ads Settings page. To opt out of Taboola\u2019s targeted ads, see the Opt-out Link in their Cookie Policy."}),(0,s.jsx)("li",{className:"jsx-2747286434",children:"To update data you provide directly, log into your account and update your account at any time."})]}),(0,s.jsxs)("h3",{className:"jsx-2747286434",children:[(0,s.jsx)("span",{className:"jsx-2747286434",children:"6."})," Our Policy Concerning Children"]}),(0,s.jsx)("p",{className:"jsx-2747286434",children:"We recognize the privacy interests of children and encourage parents and guardians to take an active role in their children\u2019s online activities and interests. Children under 13 (or under 16 in the European Economic Area) should not use the Services. If we learn that we\u2019ve collected personal data from a child under those ages."})]})})})}),(0,s.jsx)(n.default,{id:"2747286434",children:[".terms-of-service-content.jsx-2747286434 img.jsx-2747286434{border-radius:5px;margin-bottom:30px;}",".terms-of-service-content.jsx-2747286434 h3.jsx-2747286434{margin-top:25px;margin-bottom:15px;font-size:25px;}",".terms-of-service-content.jsx-2747286434 .blockquote.jsx-2747286434,.terms-of-service-content.jsx-2747286434 blockquote.jsx-2747286434{margin-top:25px;margin-bottom:30px;background-color:#e6f2f5;text-align:left !important;padding:25px !important;border-radius:5px;}",".terms-of-service-content.jsx-2747286434 .blockquote.jsx-2747286434 p.jsx-2747286434,.terms-of-service-content.jsx-2747286434 blockquote.jsx-2747286434 p.jsx-2747286434{margin-bottom:0;line-height:1.8;font-size:15px !important;font-weight:500;}",".terms-of-service-content.jsx-2747286434 .blockquote.jsx-2747286434::after,.terms-of-service-content.jsx-2747286434 blockquote.jsx-2747286434::after{display:none;}",".terms-of-service-content.jsx-2747286434 .blockquote.jsx-2747286434::before,.terms-of-service-content.jsx-2747286434 blockquote.jsx-2747286434::before{display:none;}",".terms-of-service-content.jsx-2747286434 ol.jsx-2747286434,.terms-of-service-content.jsx-2747286434 ul.jsx-2747286434{margin-top:20px;}",".terms-of-service-content.jsx-2747286434 ol.jsx-2747286434 li.jsx-2747286434,.terms-of-service-content.jsx-2747286434 ul.jsx-2747286434 li.jsx-2747286434{margin-bottom:10px;color:var(--paragraph-color);line-height:1.8;font-weight:500;font-size:15px;}","@media only screen and (max-width:767px){.terms-of-service-content.jsx-2747286434 h3.jsx-2747286434{font-size:22px;}}","@media only screen and (min-width :768px) and (max-width :991px){}","@media only screen and (min-width :992px) and (max-width :1199px){}"]})]}),(0,s.jsx)(i.Z,{})]})}},3519:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/terms-of-service",function(){return o(3064)}])},1664:function(e,t,o){e.exports=o(6071)},1163:function(e,t,o){e.exports=o(2441)}},function(e){e.O(0,[8674,3899,9774,2888,179],(function(){return t=3519,e(e.s=t);var t}));var t=e.O();_N_E=t}]);