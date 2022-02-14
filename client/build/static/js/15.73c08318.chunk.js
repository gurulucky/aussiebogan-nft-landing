(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[15],{1264:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var n=i(7),r=i(22),a=i(21),c=i(6),s=i(91),o=i(1),d=Object(c.a)("header")((function(e){var t=e.theme;return Object(n.a)({top:0,left:0,lineHeight:0,width:"100%",position:"absolute",padding:t.spacing(3,3,0)},t.breakpoints.up("sm"),{padding:t.spacing(5,5,0)})}));function u(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{children:Object(o.jsx)(r.b,{to:"/",children:Object(o.jsx)(s.a,{})})}),Object(o.jsx)(a.a,{})]})}},1640:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return z}));var n=i(25),r=i(22),a=i(330),c=i.n(a),s=i(6),o=i(1199),d=i(350),u=i(1204),l=i(203),b=i(1190),j=i(1264),h=i(90),m=i(351),x=i(3),p=i(37),g=i.n(p),O=i(68),f=i(210),v=i(207),y=i(21),q=i(209),k=i(1157),w=i(1186),C=i(1201),S=i(1209);function V(e){return new Promise((function(t){return setTimeout(t,e)}))}var I=i(1);function P(e){if(e.target.value.length>e.target.maxLength)return e.target.value=e.target.value.slice(0,e.target.maxLength)}function L(){var e=Object(y.g)(),t=Object(v.useSnackbar)().enqueueSnackbar,i=f.b().shape({code1:f.a().required("Code is required"),code2:f.a().required("Code is required"),code3:f.a().required("Code is required"),code4:f.a().required("Code is required"),code5:f.a().required("Code is required"),code6:f.a().required("Code is required")}),n=Object(q.c)({initialValues:{code1:"",code2:"",code3:"",code4:"",code5:"",code6:""},validationSchema:i,onSubmit:function(){var i=Object(O.a)(g.a.mark((function i(){return g.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,V(500);case 2:t("Verify success",{variant:"success"}),e(h.b.root);case 4:case"end":return i.stop()}}),i)})));return function(){return i.apply(this,arguments)}}()}),r=n.values,a=n.errors,c=n.isValid,s=n.touched,o=n.isSubmitting,d=n.handleSubmit,u=n.getFieldProps;return Object(I.jsx)(q.b,{value:n,children:Object(I.jsxs)(q.a,{autoComplete:"off",noValidate:!0,onSubmit:d,children:[Object(I.jsx)(k.a,{direction:"row",spacing:2,justifyContent:"center",children:Object.keys(r).map((function(e){return Object(I.jsx)(w.a,Object(x.a)(Object(x.a)({},u(e)),{},{type:"number",placeholder:"-",onInput:P,error:Boolean(s[e]&&a[e]),inputProps:{maxLength:1,sx:{p:0,textAlign:"center",width:{xs:36,sm:56},height:{xs:36,sm:56}}}}),e)}))}),Object(I.jsx)(C.a,{error:!c,style:{textAlign:"right"},children:!c&&"Code is required"}),Object(I.jsx)(S.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:o,sx:{mt:3},children:"Verify"})]})})}var W=Object(s.a)(m.a)((function(e){return{display:"flex",minHeight:"100%",alignItems:"center",padding:e.theme.spacing(12,0)}}));function z(){return Object(I.jsxs)(W,{title:"Verify | Minimal UI",children:[Object(I.jsx)(j.a,{}),Object(I.jsx)(o.a,{children:Object(I.jsxs)(d.a,{sx:{maxWidth:480,mx:"auto"},children:[Object(I.jsx)(u.a,{size:"small",component:r.b,to:h.a.login,startIcon:Object(I.jsx)(n.Icon,{icon:c.a,width:20,height:20}),sx:{mb:3},children:"Back"}),Object(I.jsx)(l.a,{variant:"h3",paragraph:!0,children:"Please check your email!"}),Object(I.jsx)(l.a,{sx:{color:"text.secondary"},children:"We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email."}),Object(I.jsx)(d.a,{sx:{mt:5,mb:3},children:Object(I.jsx)(L,{})}),Object(I.jsxs)(l.a,{variant:"body2",align:"center",children:["Don\u2019t have a code? \xa0",Object(I.jsx)(b.a,{variant:"subtitle2",underline:"none",onClick:function(){},children:"Resend code"})]})]})})]})}}}]);
//# sourceMappingURL=15.73c08318.chunk.js.map