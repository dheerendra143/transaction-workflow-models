(this["webpackJsonpui-task"]=this["webpackJsonpui-task"]||[]).push([[0],{12:function(A,e,t){},13:function(A,e,t){},15:function(A,e,t){"use strict";t.r(e);var n=t(1),a=t.n(n),r=t(6),c=t.n(r),s=(t(12),t(7)),i=t(2),l=(t(13),t(0));var o=function(){var A=Object(n.useState)([]),e=Object(i.a)(A,2),t=(e[0],e[1],Object(n.useState)([])),a=Object(i.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)("dheerendra"),u=Object(i.a)(o,2),j=u[0],d=u[1],b=Object(n.useState)("singhdheerendra34@gmail.co"),C=Object(i.a)(b,2),h=C[0],O=C[1],m=Object(n.useState)("GHHFG45655BGG65"),g=Object(i.a)(m,2),k=g[0],y=g[1],B=Object(n.useState)("customer"),Q=Object(i.a)(B,2),I=Q[0],p=Q[1],v=Object(n.useState)("MAC"),x=Object(i.a)(v,2),E=x[0],M=x[1],N={customer:["Customer Name","customer Email","customer BankCode"],paymentMode:["Payment Mode","issuer","last4Digits AccNo","Payee Code"],merchant:["Merchant Name","Merchant Code","Merchant BankCode"],paymentServiceProviders:["PSP Name","PSP Email","PSP City Code"],networkProvider:["Network Provider Name","Network Provider Email","Network Provider BankCode"],issuer:["Issuer Name","Issuer Email","Issuer BankCode"],acquirer:["Acquirer Name","Acquirer Email","Acquirer BankCode"],banks:["Banks Name","Banks Email","Banks Code"]},w=[{label:"Customer",value:"customer"},{label:"Payment Mode",value:"paymentMode"},{label:"Merchant",value:"merchant"},{label:"Payment Service Providers",value:"paymentServiceProviders"},{label:"Network Provider",value:"networkProvider"},{label:"Issuer",value:"issuer"},{label:"Acquirer",value:"acquirer"},{label:"Financial Institution/Banks",value:"institution"}];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{children:Object(l.jsxs)("section",{children:[Object(l.jsxs)("section",{children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("label",{children:"Entity Type: "}),Object(l.jsx)("select",{onChange:function(A){return p(A.target.value)},children:w&&w.map((function(A,e){return Object(l.jsx)("option",{value:A.value,children:A.label},e)}))})]}),Object(l.jsxs)("p",{children:[Object(l.jsxs)("label",{children:[N[I][0],": "]}),Object(l.jsx)("input",{type:"text",value:j,onChange:function(A){return d(A.currentTarget.value)}})]}),Object(l.jsxs)("p",{children:[Object(l.jsxs)("label",{children:[N[I][1],": "]}),Object(l.jsx)("input",{type:"text",value:h,onChange:function(A){return O(A.currentTarget.value)}})]}),Object(l.jsxs)("p",{children:[Object(l.jsxs)("label",{children:[N[I][2],": "]}),Object(l.jsx)("input",{type:"text",value:k,onChange:function(A){return y(A.currentTarget.value)}})]}),"paymentMode"==I&&Object(l.jsxs)("p",{children:[Object(l.jsxs)("label",{children:[N[I][3],": "]}),Object(l.jsx)("input",{type:"text",value:E,onChange:function(A){return M(A.currentTarget.value)}})]})]}),Object(l.jsx)("button",{onClick:function(A){!function(A){var e={};if("paymentMode"==I)e={entityType:I,paymentModeid:"payment"+r.length+1,paymentMode:j,issuer:h,last4DigitsAccNo:k,payeeCode:E};else{var t=I+"Id",n="merchant"==I?"merchantCode":I+"Email",a=I+"Name",s=I+"BankCode";e.entityType=I,e[t]=I+r.length+1,e[a]=j,e[n]=h,e[s]=k}c(r?r.concat(e):e)}()},children:"Create"})]})}),Object(l.jsxs)("main",{children:[Object(l.jsx)("hr",{}),Object(l.jsx)("section",{children:r.map((function(A,e){return Object(l.jsxs)("p",{className:"box-wp",children:[Object(l.jsxs)("label",{className:"modal-box",children:[" ",A["paymentMode"==A.entityType?A.entityType:A.entityType+"Name"]," "]},e),Object(l.jsx)("img",{className:"arrow",src:"data:image/png;base64,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"})]},e)}))}),Object(l.jsx)("hr",{})]}),Object(l.jsx)("footer",{children:r.length>0&&Object(l.jsx)("a",{href:"#",onClick:function(A){return function(A){console.log("event: ",A.target);var e=A.target,t="text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({transactionWorkflow:Object(s.a)(r)}));e.setAttribute("href","data:"+t),e.setAttribute("download","data.json")}(A)},children:"Download Modal"})})]})},u=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(e){var t=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;t(A),n(A),a(A),r(A),c(A)}))};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("root")),u()}},[[15,1,2]]]);
//# sourceMappingURL=main.d0b31f19.chunk.js.map