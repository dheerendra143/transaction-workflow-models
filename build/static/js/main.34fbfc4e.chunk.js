(this["webpackJsonptransaction-workflow-models"]=this["webpackJsonptransaction-workflow-models"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(3),a=n.n(r),o=(n(13),n(14),n(2)),s=n(0),i=function(){var e=null,t=null,n=null,r=null,a=null,i=0,l=[],u=[],m=Object(o.b)();Object(c.useEffect)((function(){e=document.getElementById("canvas"),t=e.getContext("2d"),n=e.getBoundingClientRect(),n.left,n.top,r=e.width,a=e.height,e.onmousedown=j,e.onmouseup=b,h()}),[]);var d=function(e){var t=document.getElementById(e);l.includes(e)?t.classList.add("hide"):t.classList.toggle("hide"),console.log("entityList",u)},j=function(e){e.preventDefault(),e.stopPropagation(),console.log("mouse down")},b=function(e){e.preventDefault(),e.stopPropagation()},h=function(){t.clearRect(0,0,r,a)},p=function(e,n,c,r,a){t.beginPath(),t.rect(e,n,c,r),t.strokeText(a,e+30,n+15,c,r),t.fill(),t.closePath()},x=function(e,n){l.includes(e)||(!function(e,n){t.fillStyle="#FAF7F8",t.fillStyle="transparent";var c=150*i+10;console.log("data",c),p(c,40,100,23,n),i>0&&(t.moveTo(c-50,50),t.lineTo(c,50)),t.stroke(),l.push(e)}(e,n),i++)},O=function(e,t){m({type:"ADD",entity_list:e}),x(t.target.name,t.target[0].value),l.push(t.target[0].name),d(t.target[0].name)},f=function(e){if(e.preventDefault(),"customer"==e.target.name){var t={entityType:"Customer",customerId:"Customer1",customerName:e.target[0].value,customerEmail:e.target[1].value,customerBankCode:e.target[2].value};O(t,e)}else if("payment"==e.target.name){var n={entityType:"Payment Mode",paymentModeid:"Payment1",paymentMode:e.target[0].value,issuer:e.target[1].value,last4DigitsAccNo:e.target[2].value,payeeCode:e.target[3].value};O(n,e)}else if("marchent"==e.target.name){var c={entityType:"Merchant",merchantId:"Merchant1",merchantName:e.target[0].value,merchantCode:e.target[1].value,merchantBankCode:e.target[2].value};O(c,e)}else console.log("Invalid choice!")};return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("section",{className:"canvas-wp",children:[Object(s.jsxs)("section",{className:"menu-bar",children:[Object(s.jsxs)("section",{children:[Object(s.jsx)("button",{onClick:function(e){return d("customerName")},children:"Customer"}),Object(s.jsx)("section",{className:"customerFormWp hide",id:"customerName",children:Object(s.jsxs)("form",{name:"customer",onSubmit:function(e){return f(e)},children:[Object(s.jsx)("input",{type:"text",name:"customerName",role:"customerName",placeholder:"customer Name",title:"customer Name",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"customerEmail",role:"customerEmail",placeholder:"customer Email",title:"customer Email",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"customerBankCode",role:"customerBankCode",placeholder:"customer Bank Code",title:"customer Bank Code",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{children:"Update"})]})})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)("button",{onClick:function(e){return d("merchantName")},children:"Marchent"}),Object(s.jsx)("section",{className:"customerFormWp hide",id:"merchantName",children:Object(s.jsxs)("form",{name:"marchent",onSubmit:function(e){return f(e)},children:[Object(s.jsx)("input",{type:"text",name:"merchantName",role:"merchantName",placeholder:"merchant Name",title:"merchant Name",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"merchantName",role:"merchantName",placeholder:"merchant Code",title:"merchant Code",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"merchantBankCode",role:"merchantBankCode",placeholder:"merchant Bank Code",title:"merchant Bank Code",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{children:"Update"})]})})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)("button",{onClick:function(e){return d("paymentMode")},children:"Payment"}),Object(s.jsx)("section",{className:"customerFormWp hide",id:"paymentMode",children:Object(s.jsxs)("form",{name:"payment",onSubmit:function(e){return f(e)},children:[Object(s.jsx)("input",{type:"text",name:"paymentMode",role:"paymentMode",placeholder:"payment Mode",title:"payment Mode",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"issuer",role:"issuer",placeholder:"issuer",title:"issuer",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"last4DigitsAccNo",role:"last4DigitsAccNo",placeholder:"last4DigitsAccNo",title:"last4DigitsAccNo",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"payeeCode",role:"payeeCode",placeholder:"payeeCode",title:"payeeCode",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{children:"Update"})]})})]})]}),Object(s.jsx)("section",{className:"canvas-area",id:"canvasArea",children:Object(s.jsx)("canvas",{id:"canvas",width:"800",height:"500",style:{border:"1px solid #000000"}})})]})})},l=n(8),u=function(e){var t=Object(o.c)((function(e){return e.entity}));return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("a",{href:"#",onClick:function(e){return function(e){console.log("event: ",e.target);var n=e.target,c="text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({transactionWorkflow:Object(l.a)(t)}));n.setAttribute("href","data:"+c),n.setAttribute("download","data.json")}(e)},children:e.label})})};var m=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:"Transaction Flowchart Modal"})}),Object(s.jsx)("main",{children:Object(s.jsx)(i,{})}),Object(s.jsxs)("footer",{children:[Object(s.jsx)("br",{}),Object(s.jsx)(u,{label:"Download Entity"})]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return e.push(t.entity_list),e;default:return e}},b=n(4),h=Object(b.a)({entity:j}),p=Object(b.b)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(s.jsxs)(o.a,{store:p,children:[" ",Object(s.jsx)(m,{})," "]}),document.getElementById("root")),d()}},[[22,1,2]]]);
//# sourceMappingURL=main.34fbfc4e.chunk.js.map