(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{159:function(e,t,a){"use strict";var n=a(155);a.d(t,"a",(function(){return n.a}))},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(152),c=a(156),o=a(158),m=a(161);t.default=function(){var e=Object(r.a)().siteConfig,t=Object(m.useVersions)(),a=Object(m.useLatestVersion)(),n=t.find((function(e){return"current"===e.name})),u=t.filter((function(e){return e!==a&&"current"!==e.name})),i=u.shift(),s="https://github.com/"+e.organizationName+"/"+e.projectName;return l.a.createElement(o.a,{title:"Versions",permalink:"/versions",description:"Docusaurus 2 Versions page listing all documented site versions"},l.a.createElement("main",{className:"container margin-vert--lg"},l.a.createElement("h1",null,"Docusaurus documentation versions"),i&&l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"next"},"Current version (Stable)"),l.a.createElement("p",null,"Here you can find the documentation for current released version."),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,i.name),l.a.createElement("td",null,l.a.createElement(c.a,{to:i.path},"Documentation")),l.a.createElement("td",null,l.a.createElement("a",{href:s+"/releases/tag/v"+i.name},"Release Notes")))))),l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"latest"},"Next version (Unreleased)"),l.a.createElement("p",null,"Here you can find the documentation for work-in-process unreleased version."),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,a.label),l.a.createElement("td",null,l.a.createElement(c.a,{to:a.path},"Documentation")))))),n!==a&&l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"next"},"Next version (Unreleased)"),l.a.createElement("p",null,"Here you can find the documentation for unreleased version."),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"master"),l.a.createElement("td",null,l.a.createElement(c.a,{to:n.path},"Documentation")),l.a.createElement("td",null,l.a.createElement("a",{href:s},"Source Code")))))),u.length>0&&l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"archive"},"Past versions (Not maintained anymore)"),l.a.createElement("p",null,"Here you can find documentation for previous versions of Docusaurus."),l.a.createElement("table",null,l.a.createElement("tbody",null,u.map((function(e){return l.a.createElement("tr",{key:e.name},l.a.createElement("th",null,e.label),l.a.createElement("td",null,l.a.createElement(c.a,{to:e.path},"Documentation")),l.a.createElement("td",null,l.a.createElement("a",{href:s+"/releases/tag/v"+e.name},"Release Notes")))})))))))}}}]);