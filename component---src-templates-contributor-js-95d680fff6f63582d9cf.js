(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{OGtf:function(e,t,a){var r=a("XKFU"),n=a("eeVq"),o=a("vhPU"),c=/"/g,l=function(e,t,a,r){var n=String(o(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(c,"&quot;")+'"'),l+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},jfu0:function(e,t,a){"use strict";a.r(t);a("f3/d"),a("tUrg"),a("pIFo");var r=a("q1tI"),n=a.n(r),o=a("TJpk"),c=a.n(o),l=a("7oih"),i=a("/Uhd"),s=a("lTWZ"),m='target="_blank" rel="nofollow noopener noreferrer"',u=function(e){var t=e.value,a=e.icon,r=e.link,o="@"===t.charAt(0)?"https://github.com/"+t.substring(1):null;return r||o?n.a.createElement("a",{rel:"nofollow noopener noreferrer",target:"_blank",href:r||o,className:"contributor__info"},n.a.createElement("span",{className:"icon-"+a}),"@"===t.charAt(0)?t.substring(1):t):n.a.createElement("p",{className:"contributor__info"},n.a.createElement("span",{className:"icon-"+a}),t)};u.defaultProps={link:null};t.default=function(e){var t,a=e.location,r=e.pageContext,o=r.projects.length,b=1<o?o+" repositories":o+" repository",p=Object(s.a)(r);return n.a.createElement(l.a,{location:a},n.a.createElement("div",{className:"contributor bg-grey-light"},n.a.createElement(c.a,{title:p+", API Platform contributor"}),n.a.createElement("header",{className:"contributor__header bg-blue-extralight"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"header__content"},n.a.createElement("p",{className:"h1-like header__title color-blue-dark"},"Contributor #"+r.position)))),n.a.createElement("section",null,n.a.createElement("div",{className:"container contributor__main"},n.a.createElement("div",{className:"contributor__card"},n.a.createElement("div",{className:"card__top bg-blue-dark color-white"},n.a.createElement("div",{className:"contributor__picture"},n.a.createElement("div",{className:"avatar crop"},n.a.createElement("img",{src:r.avatar,alt:r.login})),Object(s.b)(r)&&n.a.createElement("img",{className:"contributor__badge",src:"/badges/core-team.svg",alt:"core-team",title:"Core team member"})),n.a.createElement("div",{className:"card__content"},n.a.createElement("h1",{className:"h1-like color-white"},p),n.a.createElement("p",{className:"contributor__subtitle color-blue-extralight"},"("+r.login+")"),r.bio&&n.a.createElement("p",{className:"contributor__bio",dangerouslySetInnerHTML:{__html:(t=r.bio,t.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi,(function(e){return'<a href="'+e+'" '+m+'">'+e+"</a>"})).replace(/(^|\s)@([a-zA-Z-]+)/gi,(function(e){return'<a href="https://github.com/'+e.trim().replace("@","")+'" '+m+'">'+e+"</a>"})))}}),n.a.createElement("div",{className:"contributor__infos"},r.location&&n.a.createElement(u,{icon:"location",value:r.location}),r.company&&n.a.createElement(u,{icon:"office",value:r.company}),r.blog&&n.a.createElement(u,{icon:"sphere",link:r.blog,value:"website"}),n.a.createElement(u,{icon:"github",value:"@"+r.login}))))),n.a.createElement("div",{className:"contributor__content"},n.a.createElement("div",{className:"contributor__description"},n.a.createElement("p",{className:"text-big",dangerouslySetInnerHTML:{__html:(10>=r.position?(Object(s.b)(r)?"As an API Platform core team member, ":"")+p+" is one of the most active contributors to the API Platform framework and worked on":20<r.contributions?(Object(s.b)(r)?"As an API Platform core team member, ":"")+p+" enhanced the API Platform framework with no less than "+r.contributions+" contributions. This active contributor worked on":p+" is a "+(Object(s.b)(r)?"core team member and a ":"")+"contributor to the API Platform framework and worked on")+" "+b+": "+function(){if(!o)return"";var e=r.projects.map((function(e){return'<a href="'+e.link+'" '+m+">"+e.name+"</a>"}));if(1===e.length)return e[0];var t=e.pop();return e.join(", ")+" and "+t}()+"."}})),n.a.createElement(i.a,{className:"contributor__projects"},r.projects.map((function(e){return n.a.createElement(i.b,{padding:5},n.a.createElement("a",{href:"https://github.com/"+e.fullName+"/commits?author="+r.login,className:"contributor__project card p-10 clickable",rel:"nofollow noopener noreferrer",target:"_blank"},n.a.createElement("p",{className:"project__name color-blue-extradark text-big"},n.a.createElement("span",{className:"icon-github"}),e.name),n.a.createElement("p",{className:"project__contributions color-blue-dark text-xs"},e.contributions+" "+(1<e.contributions?"contributions":"contribution")),n.a.createElement("p",{className:"project__lines color-grey-dark text-xs"},e.additions||e.deletions?n.a.createElement(n.a.Fragment,null,n.a.createElement("span",null,e.additions+"++"),n.a.createElement("span",null,e.deletions+"--")):n.a.createElement("span",{className:"no-stat"},"(no stats)"))))}))))))))}},lTWZ:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}));a("f3/d"),a("Z2Ku"),a("L9s1");var r=function(e){return e.teams&&(e.teams.includes("core-team")||e.teams.includes("core-team-js")||e.teams.includes("core-team-website"))},n=function(e){return e.name||e.login}},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-templates-contributor-js-95d680fff6f63582d9cf.js.map