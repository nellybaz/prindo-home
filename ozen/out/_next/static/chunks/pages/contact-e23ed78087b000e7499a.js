(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9335],{7375:function(s,r,o){"use strict";function e(s,r){if(null==s)return{};var o,e,t=function(s,r){if(null==s)return{};var o,e,t={},a=Object.keys(s);for(e=0;e<a.length;e++)o=a[e],r.indexOf(o)>=0||(t[o]=s[o]);return t}(s,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(s);for(e=0;e<a.length;e++)o=a[e],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(s,o)&&(t[o]=s[o])}return t}o.d(r,{Z:function(){return e}})},6071:function(s,r,o){"use strict";var e=o(3038),t=o(862);r.default=void 0;var a=t(o(7294)),n=o(1689),i=o(2441),c=o(5749),l={};function x(s,r,o,e){if(s&&(0,n.isLocalURL)(r)){s.prefetch(r,o,e).catch((function(s){0}));var t=e&&"undefined"!==typeof e.locale?e.locale:s&&s.locale;l[r+"%"+o+(t?"%"+t:"")]=!0}}var d=function(s){var r=!1!==s.prefetch,o=(0,i.useRouter)(),t=o&&o.asPath||"/",d=a.default.useMemo((function(){var r=(0,n.resolveHref)(t,s.href,!0),o=e(r,2),a=o[0],i=o[1];return{href:a,as:s.as?(0,n.resolveHref)(t,s.as):i||a}}),[t,s.href,s.as]),m=d.href,j=d.as,f=s.children,p=s.replace,u=s.shallow,h=s.scroll,g=s.locale;"string"===typeof f&&(f=a.default.createElement("a",null,f));var b=a.Children.only(f),v=b&&"object"===typeof b&&b.ref,w=(0,c.useIntersection)({rootMargin:"200px"}),N=e(w,2),k=N[0],y=N[1],E=a.default.useCallback((function(s){k(s),v&&("function"===typeof v?v(s):"object"===typeof v&&(v.current=s))}),[v,k]);(0,a.useEffect)((function(){var s=y&&r&&(0,n.isLocalURL)(m),e="undefined"!==typeof g?g:o&&o.locale,t=l[m+"%"+j+(e?"%"+e:"")];s&&!t&&x(o,m,j,{locale:e})}),[j,m,y,g,r,o]);var _={ref:E,onClick:function(s){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(s),s.defaultPrevented||function(s,r,o,e,t,a,i,c){("A"!==s.currentTarget.nodeName||!function(s){var r=s.currentTarget.target;return r&&"_self"!==r||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.nativeEvent&&2===s.nativeEvent.which}(s)&&(0,n.isLocalURL)(o))&&(s.preventDefault(),null==i&&(i=e.indexOf("#")<0),r[t?"replace":"push"](o,e,{shallow:a,locale:c,scroll:i}))}(s,o,m,j,p,u,h,g)},onMouseEnter:function(s){(0,n.isLocalURL)(m)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(s),x(o,m,j,{priority:!0}))}};if(s.passHref||"a"===b.type&&!("href"in b.props)){var C="undefined"!==typeof g?g:o&&o.locale,z=o&&o.isLocaleDomain&&(0,n.getDomainLocale)(j,C,o&&o.locales,o&&o.domainLocales);_.href=z||(0,n.addBasePath)((0,n.addLocale)(j,C,o&&o.defaultLocale))}return a.default.cloneElement(b,_)};r.default=d},5749:function(s,r,o){"use strict";var e=o(3038);r.__esModule=!0,r.useIntersection=function(s){var r=s.rootMargin,o=s.disabled||!n,c=(0,t.useRef)(),l=(0,t.useState)(!1),x=e(l,2),d=x[0],m=x[1],j=(0,t.useCallback)((function(s){c.current&&(c.current(),c.current=void 0),o||d||s&&s.tagName&&(c.current=function(s,r,o){var e=function(s){var r=s.rootMargin||"",o=i.get(r);if(o)return o;var e=new Map,t=new IntersectionObserver((function(s){s.forEach((function(s){var r=e.get(s.target),o=s.isIntersecting||s.intersectionRatio>0;r&&o&&r(o)}))}),s);return i.set(r,o={id:r,observer:t,elements:e}),o}(o),t=e.id,a=e.observer,n=e.elements;return n.set(s,r),a.observe(s),function(){n.delete(s),a.unobserve(s),0===n.size&&(a.disconnect(),i.delete(t))}}(s,(function(s){return s&&m(s)}),{rootMargin:r}))}),[o,r,d]);return(0,t.useEffect)((function(){if(!n&&!d){var s=(0,a.requestIdleCallback)((function(){return m(!0)}));return function(){return(0,a.cancelIdleCallback)(s)}}}),[d]),[j,d]};var t=o(7294),a=o(8391),n="undefined"!==typeof IntersectionObserver;var i=new Map},2449:function(s,r,o){"use strict";o.r(r),o.d(r,{default:function(){return x}});var e=o(5893),t=(o(7294),o(6408)),a=o(1288),n=o(5988),i=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"jsx-884309994 contact-area ptb-100",children:(0,e.jsx)("div",{className:"jsx-884309994 container",children:(0,e.jsxs)("div",{className:"jsx-884309994 contact-form",children:[(0,e.jsx)("h3",{className:"jsx-884309994",children:"Get in Touch"}),(0,e.jsx)("form",{id:"contactForm",className:"jsx-884309994",children:(0,e.jsxs)("div",{className:"jsx-884309994 row",children:[(0,e.jsx)("div",{className:"jsx-884309994 col-lg-6 col-md-6",children:(0,e.jsx)("div",{className:"jsx-884309994 form-group",children:(0,e.jsx)("input",{type:"text",name:"name",id:"name",required:!0,placeholder:"Name*",className:"jsx-884309994 form-control"})})}),(0,e.jsx)("div",{className:"jsx-884309994 col-lg-6 col-md-6",children:(0,e.jsx)("div",{className:"jsx-884309994 form-group",children:(0,e.jsx)("input",{type:"email",name:"email",id:"email",required:!0,placeholder:"Email*",className:"jsx-884309994 form-control"})})}),(0,e.jsx)("div",{className:"jsx-884309994 col-lg-6 col-md-6",children:(0,e.jsx)("div",{className:"jsx-884309994 form-group",children:(0,e.jsx)("input",{type:"text",name:"phone_number",id:"phone_number",required:!0,placeholder:"Phone",className:"jsx-884309994 form-control"})})}),(0,e.jsx)("div",{className:"jsx-884309994 col-lg-6 col-md-6",children:(0,e.jsx)("div",{className:"jsx-884309994 form-group",children:(0,e.jsx)("input",{type:"text",name:"msg_subject",id:"msg_subject",required:!0,placeholder:"Subject",className:"jsx-884309994 form-control"})})}),(0,e.jsx)("div",{className:"jsx-884309994 col-lg-12 col-md-12",children:(0,e.jsx)("div",{className:"jsx-884309994 form-group",children:(0,e.jsx)("textarea",{name:"message",id:"message",cols:"30",rows:"5",required:!0,placeholder:"Message",className:"jsx-884309994 form-control"})})}),(0,e.jsx)("div",{className:"jsx-884309994 col-lg-12 col-md-12",children:(0,e.jsxs)("button",{type:"submit",className:"jsx-884309994 default-btn",children:["Send Message",(0,e.jsx)("i",{className:"jsx-884309994 ri-arrow-right-line"}),(0,e.jsx)("span",{className:"jsx-884309994"})]})})]})})]})})}),(0,e.jsx)(n.default,{id:"884309994",children:[".contact-form.jsx-884309994{text-align:center;max-width:1050px;margin:auto;}",".contact-form.jsx-884309994 h3.jsx-884309994{font-size:28px;margin-bottom:45px;}",".contact-form.jsx-884309994 .form-group.jsx-884309994{margin-bottom:20px;}",".contact-form.jsx-884309994 .form-group.jsx-884309994 .form-control.jsx-884309994{display:block;width:100%;height:60px;outline:0;background-color:#F4F8FC;border:1px solid #E6EDF6;border-radius:5px;-webkit-box-shadow:none;box-shadow:none;padding:15px;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);font-size:15px;}",".contact-form.jsx-884309994 .form-group.jsx-884309994 .form-control.jsx-884309994::-webkit-input-placeholder{-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);color:var(--paragraph-color);}",".contact-form.jsx-884309994 .form-group.jsx-884309994 .form-control.jsx-884309994:-ms-input-placeholder{-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);color:var(--paragraph-color);}",".contact-form.jsx-884309994 .form-group.jsx-884309994 .form-control.jsx-884309994::-ms-input-placeholder{-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);color:var(--paragraph-color);}",".contact-form.jsx-884309994 .form-group.jsx-884309994 .form-control.jsx-884309994::-webkit-input-placeholder{-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);color:var(--paragraph-color);}",".contact-form.jsx-884309994 .form-group.jsx-884309994 .form-control.jsx-884309994::-moz-placeholder{-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);color:var(--paragraph-color);}",".contact-form.jsx-884309994 .form-group.jsx-884309994 .form-control.jsx-884309994:-ms-input-placeholder{-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);color:var(--paragraph-color);}",".contact-form.jsx-884309994 .form-group.jsx-884309994 .form-control.jsx-884309994::placeholder{-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);color:var(--paragraph-color);}",".contact-form.jsx-884309994 .form-group.jsx-884309994 .form-control.jsx-884309994:focus{outline:0;background-color:var(--white-color);border-color:var(--optional-color);-webkit-box-shadow:none;box-shadow:none;}",".contact-form.jsx-884309994 .form-group.jsx-884309994 .form-control.jsx-884309994:focus.jsx-884309994::-webkit-input-placeholder{color:transparent;}",".contact-form.jsx-884309994 .form-group.jsx-884309994 .form-control.jsx-884309994:focus.jsx-884309994:-ms-input-placeholder{color:transparent;}",".contact-form.jsx-884309994 .form-group.jsx-884309994 .form-control.jsx-884309994:focus.jsx-884309994::-ms-input-placeholder{color:transparent;}",".contact-form.jsx-884309994 .form-group.jsx-884309994 .form-control.jsx-884309994:focus.jsx-884309994::-webkit-input-placeholder{color:transparent;}",".contact-form.jsx-884309994 .form-group.jsx-884309994 .form-control.jsx-884309994:focus.jsx-884309994::-moz-placeholder{color:transparent;}",".contact-form.jsx-884309994 .form-group.jsx-884309994 .form-control.jsx-884309994:focus.jsx-884309994:-ms-input-placeholder{color:transparent;}",".contact-form.jsx-884309994 .form-group.jsx-884309994 .form-control.jsx-884309994:focus.jsx-884309994::placeholder{color:transparent;}",".contact-form.jsx-884309994 .form-group.jsx-884309994 textarea.form-control.jsx-884309994{height:auto;padding:15px;line-height:1.5rem;}",".contact-form.jsx-884309994 .form-group.jsx-884309994 .help-block.with-errors.jsx-884309994 ul.jsx-884309994{color:red;margin-bottom:0;margin-top:10px;text-align:left;}",".contact-form.jsx-884309994 .form-group.jsx-884309994 .help-block.with-errors.jsx-884309994 ul.jsx-884309994 li.jsx-884309994{font-size:14px;}",".contact-form.jsx-884309994 #msgSubmit.jsx-884309994{margin:0;font-size:1.3rem;}",".contact-form.jsx-884309994 #msgSubmit.text-danger.jsx-884309994,.contact-form.jsx-884309994 #msgSubmit.text-success.jsx-884309994{margin-top:25px;font-size:18px;font-weight:500;}",".contact-form.jsx-884309994 .default-btn.jsx-884309994{margin-top:10px;}","@media only screen and (max-width:767px){}","@media only screen and (min-width :768px) and (max-width :991px){}","@media only screen and (min-width :992px) and (max-width :1199px){}"]})]})},c=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"jsx-4056705198 contact-info-area pb-100",children:(0,e.jsx)("div",{className:"jsx-4056705198 container",children:(0,e.jsxs)("div",{className:"jsx-4056705198 row align-items-center",children:[(0,e.jsx)("div",{className:"jsx-4056705198 col-lg-4 col-md-12",children:(0,e.jsxs)("div",{className:"jsx-4056705198 contact-address",children:[(0,e.jsx)("h3",{className:"jsx-4056705198",children:"Contact Address:"}),(0,e.jsx)("p",{className:"jsx-4056705198",children:"The IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more."}),(0,e.jsxs)("ul",{className:"jsx-4056705198 address-info",children:[(0,e.jsxs)("li",{className:"jsx-4056705198",children:[(0,e.jsx)("i",{className:"jsx-4056705198 ri-customer-service-line"}),(0,e.jsx)("a",{href:"tel:3128959800",className:"jsx-4056705198",children:"(312) 895-9800"})]}),(0,e.jsxs)("li",{className:"jsx-4056705198",children:[(0,e.jsx)("i",{className:"jsx-4056705198 ri-global-line"}),(0,e.jsx)("a",{href:"mailto:hello.me@ozen.com",className:"jsx-4056705198",children:"hello.me@ozen.com"})]}),(0,e.jsxs)("li",{className:"jsx-4056705198",children:[(0,e.jsx)("i",{className:"jsx-4056705198 ri-map-pin-line"}),"121 St, Melbourne VIC 3000, Australia"]})]}),(0,e.jsxs)("ul",{className:"jsx-4056705198 address-social",children:[(0,e.jsx)("li",{className:"jsx-4056705198",children:(0,e.jsx)("a",{href:"#",target:"_blank",className:"jsx-4056705198",children:(0,e.jsx)("i",{className:"jsx-4056705198 ri-facebook-line"})})}),(0,e.jsx)("li",{className:"jsx-4056705198",children:(0,e.jsx)("a",{href:"#",target:"_blank",className:"jsx-4056705198",children:(0,e.jsx)("i",{className:"jsx-4056705198 ri-twitter-fill"})})}),(0,e.jsx)("li",{className:"jsx-4056705198",children:(0,e.jsx)("a",{href:"#",target:"_blank",className:"jsx-4056705198",children:(0,e.jsx)("i",{className:"jsx-4056705198 ri-linkedin-fill"})})}),(0,e.jsx)("li",{className:"jsx-4056705198",children:(0,e.jsx)("a",{href:"#",target:"_blank",className:"jsx-4056705198",children:(0,e.jsx)("i",{className:"jsx-4056705198 ri-messenger-line"})})})]})]})}),(0,e.jsx)("div",{className:"jsx-4056705198 col-lg-8 col-md-12",children:(0,e.jsx)("div",{id:"map",className:"jsx-4056705198",children:(0,e.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd",className:"jsx-4056705198"})})})]})})}),(0,e.jsx)(n.default,{id:"4056705198",children:[".contact-address.jsx-4056705198{background:#F4F8FC;border:1px solid #E6EDF6;padding:45px 35px;border-radius:5px;}",".contact-address.jsx-4056705198 h3.jsx-4056705198{font-size:22px;margin-bottom:15px;}",".contact-address.jsx-4056705198 p.jsx-4056705198{font-size:15px;}",".contact-address.jsx-4056705198 .address-info.jsx-4056705198{padding-left:0;margin-top:30px;margin-bottom:0;}",".contact-address.jsx-4056705198 .address-info.jsx-4056705198 li.jsx-4056705198{list-style-type:none;margin-bottom:30px;font-size:15px;font-weight:500;color:#4B4B61;position:relative;padding-left:40px;}",".contact-address.jsx-4056705198 .address-info.jsx-4056705198 li.jsx-4056705198 a.jsx-4056705198{font-size:15px;font-weight:500;color:#4B4B61;}",".contact-address.jsx-4056705198 .address-info.jsx-4056705198 li.jsx-4056705198 a.jsx-4056705198:hover{color:var(--main-color);}",".contact-address.jsx-4056705198 .address-info.jsx-4056705198 li.jsx-4056705198 i.jsx-4056705198{position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);color:var(--main-color);font-size:30px;}",".contact-address.jsx-4056705198 .address-info.jsx-4056705198 li.jsx-4056705198 .ri-global-line.jsx-4056705198{color:#FF414B;}",".contact-address.jsx-4056705198 .address-info.jsx-4056705198 li.jsx-4056705198 .ri-map-pin-line.jsx-4056705198{color:#36CC72;}",".contact-address.jsx-4056705198 .address-info.jsx-4056705198 li.jsx-4056705198:last-child{margin-bottom:0;}",".contact-address.jsx-4056705198 .address-social.jsx-4056705198{padding-left:0;margin-bottom:0;margin-top:35px;text-align:center;}",".contact-address.jsx-4056705198 .address-social.jsx-4056705198 li.jsx-4056705198{display:inline-block;list-style-type:none;margin-bottom:0;margin-right:10px;}",".contact-address.jsx-4056705198 .address-social.jsx-4056705198 li.jsx-4056705198:last-child{margin-right:0;}",".contact-address.jsx-4056705198 .address-social.jsx-4056705198 li.jsx-4056705198 i.jsx-4056705198{display:inline-block;height:35px;width:35px;line-height:35px;background-color:var(--white-color);color:var(--main-color);-webkit-box-shadow:0px 15px 35px rgba(0,0,0,0.1);box-shadow:0px 15px 35px rgba(0,0,0,0.1);border-radius:50px;text-align:center;font-size:var(--font-size);-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);}",".contact-address.jsx-4056705198 .address-social.jsx-4056705198 li.jsx-4056705198 i.jsx-4056705198:hover{background-color:var(--main-color);color:var(--white-color);-webkit-transform:translateY(-5px);-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);}","#map.jsx-4056705198 iframe.jsx-4056705198{width:100%;height:440px;border:1px solid #E6EDF6;border-radius:5px;}","@media only screen and (max-width:767px){.contact-address.jsx-4056705198{padding:35px 20px;margin-bottom:30px;}}","@media only screen and (min-width :768px) and (max-width :991px){.contact-address.jsx-4056705198{padding:35px 20px;margin-bottom:30px;}}","@media only screen and (min-width :992px) and (max-width :1199px){}"]})]})},l=o(6918),x=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.Z,{}),(0,e.jsx)(a.Z,{pageTitle:"Contact",homePageUrl:"/",homePageText:"Home",activePageText:"Contact"}),(0,e.jsx)(i,{}),(0,e.jsx)(c,{}),(0,e.jsx)(l.Z,{})]})}},3269:function(s,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return o(2449)}])},1664:function(s,r,o){s.exports=o(6071)},1163:function(s,r,o){s.exports=o(2441)}},function(s){s.O(0,[8674,3899,9774,2888,179],(function(){return r=3269,s(s.s=r);var r}));var r=s.O();_N_E=r}]);