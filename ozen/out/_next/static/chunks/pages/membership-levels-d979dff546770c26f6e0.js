(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[676],{7375:function(s,e,a){"use strict";function c(s,e){if(null==s)return{};var a,c,l=function(s,e){if(null==s)return{};var a,c,l={},i=Object.keys(s);for(c=0;c<i.length;c++)a=i[c],e.indexOf(a)>=0||(l[a]=s[a]);return l}(s,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);for(c=0;c<i.length;c++)a=i[c],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(s,a)&&(l[a]=s[a])}return l}a.d(e,{Z:function(){return c}})},6071:function(s,e,a){"use strict";var c=a(3038),l=a(862);e.default=void 0;var i=l(a(7294)),n=a(1689),r=a(2441),t=a(5749),x={};function j(s,e,a,c){if(s&&(0,n.isLocalURL)(e)){s.prefetch(e,a,c).catch((function(s){0}));var l=c&&"undefined"!==typeof c.locale?c.locale:s&&s.locale;x[e+"%"+a+(l?"%"+l:"")]=!0}}var d=function(s){var e=!1!==s.prefetch,a=(0,r.useRouter)(),l=a&&a.asPath||"/",d=i.default.useMemo((function(){var e=(0,n.resolveHref)(l,s.href,!0),a=c(e,2),i=a[0],r=a[1];return{href:i,as:s.as?(0,n.resolveHref)(l,s.as):r||i}}),[l,s.href,s.as]),m=d.href,o=d.as,h=s.children,N=s.replace,f=s.shallow,u=s.scroll,p=s.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=i.Children.only(h),v=b&&"object"===typeof b&&b.ref,k=(0,t.useIntersection)({rootMargin:"200px"}),g=c(k,2),y=g[0],w=g[1],P=i.default.useCallback((function(s){y(s),v&&("function"===typeof v?v(s):"object"===typeof v&&(v.current=s))}),[v,y]);(0,i.useEffect)((function(){var s=w&&e&&(0,n.isLocalURL)(m),c="undefined"!==typeof p?p:a&&a.locale,l=x[m+"%"+o+(c?"%"+c:"")];s&&!l&&j(a,m,o,{locale:c})}),[o,m,w,p,e,a]);var M={ref:P,onClick:function(s){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(s),s.defaultPrevented||function(s,e,a,c,l,i,r,t){("A"!==s.currentTarget.nodeName||!function(s){var e=s.currentTarget.target;return e&&"_self"!==e||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.nativeEvent&&2===s.nativeEvent.which}(s)&&(0,n.isLocalURL)(a))&&(s.preventDefault(),null==r&&(r=c.indexOf("#")<0),e[l?"replace":"push"](a,c,{shallow:i,locale:t,scroll:r}))}(s,a,m,o,N,f,u,p)},onMouseEnter:function(s){(0,n.isLocalURL)(m)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(s),j(a,m,o,{priority:!0}))}};if(s.passHref||"a"===b.type&&!("href"in b.props)){var C="undefined"!==typeof p?p:a&&a.locale,E=a&&a.isLocaleDomain&&(0,n.getDomainLocale)(o,C,a&&a.locales,a&&a.domainLocales);M.href=E||(0,n.addBasePath)((0,n.addLocale)(o,C,a&&a.defaultLocale))}return i.default.cloneElement(b,M)};e.default=d},5749:function(s,e,a){"use strict";var c=a(3038);e.__esModule=!0,e.useIntersection=function(s){var e=s.rootMargin,a=s.disabled||!n,t=(0,l.useRef)(),x=(0,l.useState)(!1),j=c(x,2),d=j[0],m=j[1],o=(0,l.useCallback)((function(s){t.current&&(t.current(),t.current=void 0),a||d||s&&s.tagName&&(t.current=function(s,e,a){var c=function(s){var e=s.rootMargin||"",a=r.get(e);if(a)return a;var c=new Map,l=new IntersectionObserver((function(s){s.forEach((function(s){var e=c.get(s.target),a=s.isIntersecting||s.intersectionRatio>0;e&&a&&e(a)}))}),s);return r.set(e,a={id:e,observer:l,elements:c}),a}(a),l=c.id,i=c.observer,n=c.elements;return n.set(s,e),i.observe(s),function(){n.delete(s),i.unobserve(s),0===n.size&&(i.disconnect(),r.delete(l))}}(s,(function(s){return s&&m(s)}),{rootMargin:e}))}),[a,e,d]);return(0,l.useEffect)((function(){if(!n&&!d){var s=(0,i.requestIdleCallback)((function(){return m(!0)}));return function(){return(0,i.cancelIdleCallback)(s)}}}),[d]),[o,d]};var l=a(7294),i=a(8391),n="undefined"!==typeof IntersectionObserver;var r=new Map},4974:function(s,e,a){"use strict";a.r(e);var c=a(5893),l=a(5988),i=(a(7294),a(6408)),n=a(1288),r=a(6918);e.default=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z,{}),(0,c.jsx)(n.Z,{pageTitle:"Membership Levels",homePageUrl:"/",homePageText:"Home",activePageText:"Membership Levels"}),(0,c.jsxs)("div",{className:"jsx-1537687976 membership-levels-area ptb-100",children:[(0,c.jsx)("div",{className:"jsx-1537687976 container",children:(0,c.jsx)("div",{className:"jsx-1537687976 membership-levels-table table-responsive",children:(0,c.jsxs)("table",{className:"jsx-1537687976 table table-striped",children:[(0,c.jsx)("thead",{className:"jsx-1537687976",children:(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("th",{className:"jsx-1537687976"}),(0,c.jsxs)("th",{className:"jsx-1537687976",children:[(0,c.jsx)("span",{className:"jsx-1537687976 desc-1",children:"$500"}),(0,c.jsx)("span",{className:"jsx-1537687976 desc-2",children:"Silver Membership"}),(0,c.jsx)("span",{className:"jsx-1537687976 desc-3",children:"You can view few features"})]}),(0,c.jsxs)("th",{className:"jsx-1537687976",children:[(0,c.jsx)("span",{className:"jsx-1537687976 desc-1",children:"$1,000"}),(0,c.jsx)("span",{className:"jsx-1537687976 desc-2",children:"Gold Membership"}),(0,c.jsx)("span",{className:"jsx-1537687976 desc-3",children:"You can view most features"})]}),(0,c.jsxs)("th",{className:"jsx-1537687976",children:[(0,c.jsx)("span",{className:"jsx-1537687976 desc-1",children:"$1,500"}),(0,c.jsx)("span",{className:"jsx-1537687976 desc-2",children:"Diamond Membership"}),(0,c.jsx)("span",{className:"jsx-1537687976 desc-3",children:"You can view all features"})]})]})}),(0,c.jsxs)("tbody",{className:"jsx-1537687976",children:[(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:"Number of features"}),(0,c.jsx)("td",{className:"jsx-1537687976",children:"4"}),(0,c.jsx)("td",{className:"jsx-1537687976",children:"8"}),(0,c.jsx)("td",{className:"jsx-1537687976",children:"15"})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"Investment Fundamentals & Data Analytics"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"Hands-On Python & R In Data Science"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"Complete Data Science Bootcamp"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"Programming MasterclassName for Developers"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"Hands-On Artificial Neural Networks"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"PRINCE2\xae Practitioner Certification Training"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"PMI-RMP\xae Certification Training"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"PRINCE2\xae Foundation Certification Training"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"PMP\xae Plus"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"PMP\xae Renewal Pack"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"Digital Project Manager"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"Agile Project Management; Agile Delivery"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"Vue JS 2 - The Complete Guide"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"Everything You Need to Program in Python"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"Mathematical Foundation For Machine Learning"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"Drawing Course - Beginner to Advanced"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"Deep Learning and Artificial Intelligence"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"Information About UI/UX Design Degree"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"Photography Photo modify and Beautiful"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976",children:"Professional IT Expert Certificate Course"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-none",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-close-line"})}),(0,c.jsx)("td",{className:"jsx-1537687976 item-check",children:(0,c.jsx)("i",{className:"jsx-1537687976 ri-check-line"})})]}),(0,c.jsxs)("tr",{className:"jsx-1537687976",children:[(0,c.jsx)("td",{className:"jsx-1537687976"}),(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976 select-btn",children:"Get it now"})}),(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976 select-btn",children:"Get it now"})}),(0,c.jsx)("td",{className:"jsx-1537687976",children:(0,c.jsx)("a",{href:"#",className:"jsx-1537687976 select-btn",children:"Get it now"})})]})]})]})})}),(0,c.jsx)(l.default,{id:"1537687976",children:[".membership-levels-table.jsx-1537687976 .table.jsx-1537687976{margin-bottom:0;}",".membership-levels-table.jsx-1537687976 .table.jsx-1537687976 thead.jsx-1537687976 th.jsx-1537687976{vertical-align:middle;background-color:var(--main-color);white-space:nowrap;padding:20px;text-align:center;color:var(--white-color);border-left:1px solid var(--white-color);border-right:1px solid var(--white-color);border-bottom:none;}",".membership-levels-table.jsx-1537687976 .table.jsx-1537687976 thead.jsx-1537687976 th.jsx-1537687976 .desc-1.jsx-1537687976{color:var(--white-color);margin-bottom:0;font-size:35px;font-weight:500;font-family:var(--main-font-family);display:block;}",".membership-levels-table.jsx-1537687976 .table.jsx-1537687976 thead.jsx-1537687976 th.jsx-1537687976 .desc-2.jsx-1537687976{color:var(--white-color);margin-top:15px;margin-bottom:10px;font-size:var(--font-size);font-weight:400;font-family:var(--main-font-family);display:block;}",".membership-levels-table.jsx-1537687976 .table.jsx-1537687976 thead.jsx-1537687976 th.jsx-1537687976 .desc-3.jsx-1537687976{color:var(--white-color);font-size:var(--font-size);font-weight:400;font-family:var(--main-font-family);display:block;}",".membership-levels-table.jsx-1537687976 .table.jsx-1537687976 thead.jsx-1537687976 th.jsx-1537687976:first-child{border-left:none;}",".membership-levels-table.jsx-1537687976 .table.jsx-1537687976 thead.jsx-1537687976 th.jsx-1537687976:last-child{border-right:none;}",".membership-levels-table.jsx-1537687976 .table.jsx-1537687976 tbody.jsx-1537687976 tr.jsx-1537687976 td.jsx-1537687976{padding:20px 25px;white-space:nowrap;vertical-align:middle;border:none;text-align:center;font-size:var(--font-size);font-weight:600;}",".membership-levels-table.jsx-1537687976 .table.jsx-1537687976 tbody.jsx-1537687976 tr.jsx-1537687976 td.jsx-1537687976:first-child{text-align:left;}",".membership-levels-table.jsx-1537687976 .table.jsx-1537687976 tbody.jsx-1537687976 tr.jsx-1537687976 td.item-check.jsx-1537687976 i.jsx-1537687976{width:20px;height:20px;line-height:20px;border-radius:100%;background-color:#0eb582;color:var(--white-color);display:block;margin:0 auto;}",".membership-levels-table.jsx-1537687976 .table.jsx-1537687976 tbody.jsx-1537687976 tr.jsx-1537687976 td.item-none.jsx-1537687976 i.jsx-1537687976{width:20px;height:20px;line-height:20px;border-radius:100%;background-color:#d85554;color:var(--white-color);display:block;margin:0 auto;}",".membership-levels-table.jsx-1537687976 .table.jsx-1537687976 tbody.jsx-1537687976 tr.jsx-1537687976 td.jsx-1537687976 .select-btn.jsx-1537687976{display:inline-block;color:var(--black-color);background-color:#efefef;padding:15px 35px;border-radius:5px;margin-top:10px;font-size:var(--font-size);font-weight:bold;}",".membership-levels-table.jsx-1537687976 .table.jsx-1537687976 tbody.jsx-1537687976 tr.jsx-1537687976 td.jsx-1537687976 .select-btn.jsx-1537687976:hover{color:var(--white-color);background-color:var(--main-color);}","@media only screen and (max-width:767px){}","@media only screen and (min-width :768px) and (max-width :991px){}","@media only screen and (min-width :992px) and (max-width :1199px){}"]})]}),(0,c.jsx)(r.Z,{})]})}},4945:function(s,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/membership-levels",function(){return a(4974)}])},1664:function(s,e,a){s.exports=a(6071)},1163:function(s,e,a){s.exports=a(2441)}},function(s){s.O(0,[674,899,774,888,179],(function(){return e=4945,s(s.s=e);var e}));var e=s.O();_N_E=e}]);