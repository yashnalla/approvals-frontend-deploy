!function(e){function t(t){for(var a,i,s=t[0],c=t[1],l=t[2],d=0,f=[];d<s.length;d++)i=s[d],r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={0:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/beta/apps/approval/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([485,1]),n()}({108:function(e,t,n){"use strict";var a=n(17),r=n.n(a),o=n(129),i=n.n(o),s=n(3),c=n.n(s),l=n(0),u=n.n(l),d=n(356),f=n(337),p=n(285),m=n(305),h=n(307),b=n(306),v=n(107),w=n(489),y=n(490),g=n(353),j=n(67),E=n(296),k=n(83),R=function(e){var t=e.searchValue,n=e.onFilterChange,a=e.placeholder;return c.a.createElement(h.a,null,c.a.createElement(b.a,null,c.a.createElement("div",{className:"pf-c-input-group"},c.a.createElement(E.a,{placeholder:a,value:t,type:"text",onChange:n,"aria-label":"Find product button"}),c.a.createElement(k.c,{variant:"tertiary",id:"searchProductButton",onClick:function(){return n(t)}},c.a.createElement("i",{className:"fas fa-search","aria-hidden":"true"})))))};R.propTypes={onFilterChange:u.a.func.isRequired,placeholder:u.a.string,searchValue:u.a.string},R.defaultProps={searchValue:""};var q=R,O=n(354);n.d(t,"a",function(){return T});var T=function(e){var t=e.request,n=e.createInitialRows,a=e.columns,o=e.toolbarButtons,l=e.fetchData,u=e.data,E=e.actionResolver,k=e.routes,R=e.titlePlural,T=e.titleSingular,F=e.pagination,C=Object(s.useState)(""),L=i()(C,2),_=L[0],N=L[1],W=Object(s.useState)([]),x=i()(W,2),S=x[0],P=x[1];Object(s.useEffect)(function(){l(P),Object(j.c)()},[]);var D=function(e){return t({offset:F.offset,limit:e}).then(function(){return P(n(u))})},I=function(e,a){var r={offset:Object(j.b)(e,F.limit),limit:F.limit};return a?Object(d.a)(t,250)():t(r).then(function(e){var t=e.value.data;return P(n(t))})};return c.a.createElement(s.Fragment,null,k(),c.a.createElement(O.TableToolbar,null,c.a.createElement(f.a,{style:{flex:1}},c.a.createElement(p.a,null,c.a.createElement(m.a,null,c.a.createElement(q,{onFilterChange:function(e){return N(e)},searchValue:_,placeholder:"Find a ".concat(T)}),o())),c.a.createElement(p.a,null,c.a.createElement(m.a,null,c.a.createElement(h.a,null,c.a.createElement(b.a,null,c.a.createElement(g.Pagination,{itemsPerPage:F.limit||50,numberOfItems:F.count||50,onPerPageSelect:D,page:Object(j.a)(F.limit,F.offset),onSetPage:I,direction:"down"}))))))),c.a.createElement(v.b,{"aria-label":"Approval ".concat(R," table"),onCollapse:function(e,t,n,a){var o=a.id;return P(function(e){return function(e,t){return e.map(function(e){return e.id===t?r()({},e,{isOpen:!e.isOpen}):r()({},e)})}(e,o)})},rows:S,cells:a,onSelect:function(e,t,n){var a=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).id;return P(-1===n?S.map(function(e){return r()({},e,{selected:t})}):function(e){return function(e,t){return e.map(function(e){return e.id===t?r()({},e,{selected:!e.selected}):r()({},e)})}(e,a)})},actionResolver:E},c.a.createElement(w.a,null),c.a.createElement(y.a,null)))};T.propTypes={createInitialRows:u.a.func.isRequired,request:u.a.func.isRequired,columns:u.a.array.isRequired,toolbarButtons:u.a.func,fetchData:u.a.func.isRequired,data:u.a.array,pagination:u.a.shape({limit:u.a.number.isRequired,offset:u.a.number.isRequired,count:u.a.number.isRequired}),titlePlural:u.a.string,titleSingular:u.a.string,routes:u.a.func,actionResolver:u.a.func},T.defaultProps={requests:[],pagination:"",toolbarButtons:function(){return null},routes:function(){return null}}},109:function(e,t,n){"use strict";var a=n(42),r=n.n(a),o=n(24),i=n.n(o),s=n(17),c=n.n(s),l=n(41),u=n.n(l),d=n(3),f=n.n(d),p=n(0),m=n.n(p),h=n(39),b=n.n(h),v=n(85),w=n(37),y=n.n(w),g=n(295),j=n(300),E=n(299),k=n(286),R=n(114),q=function(e){var t=e.input,n=e.options,a=e.isReadOnly,o=e.isDisabled,i=(e.FieldProvider,e.isRequired),s=u()(e,["input","options","isReadOnly","isDisabled","FieldProvider","isRequired"]);return f.a.createElement(g.a,r()({},t,s,{isDisabled:o||a}),function(e,t,n){if(t&&n)return e;var a=y()(e);return a.find(function(e){return void 0===e.value})?y()(a):[{label:n?"Please choose":"None"}].concat(y()(a))}(n,t.value,i).map(function(e){return f.a.createElement(j.a,r()({key:e.value||e.label},e,{label:e.label.toString()}))}))};q.propTypes={input:m.a.object.isRequired,options:m.a.arrayOf(m.a.shape({value:m.a.any,label:m.a.string.isRequired})).isRequired,isReadOnly:m.a.bool,isDisabled:m.a.bool,isRequired:m.a.bool,FieldProvider:m.a.any};var O=function(e){e.componentType;var t=e.label,n=e.isRequired,a=e.helperText,o=e.meta,i=e.description,s=e.hideLabel,c=u()(e,["componentType","label","isRequired","helperText","meta","description","hideLabel"]),l=o.error,d=o.touched&&l;return f.a.createElement(E.a,{isRequired:n,label:!s&&t,fieldId:c.id,isValid:!d,helperText:a,helperTextInvalid:o.error},i&&f.a.createElement(k.a,null,f.a.createElement(R.b,{component:R.a.small},i)),f.a.createElement(q,r()({label:t,isValid:!d,isRequired:n},c)))};O.propTypes={componentType:m.a.string,label:m.a.string,isRequired:m.a.bool,helperText:m.a.string,meta:m.a.object,description:m.a.string,hideLabel:m.a.bool};var T=O,F={default:{},modal:{buttonOrder:["cancel","reset","save"],buttonClassName:"modal-form-right-align"}},C=function(e){var t=e.componentMapper,n=e.formContainer,a=u()(e,["componentMapper","formContainer"]);return f.a.createElement("div",{className:F[n].buttonClassName},f.a.createElement(b.a,r()({formFieldsMapper:c()({},v.formFieldsMapper,i()({componentMapper:t},h.componentTypes.SELECT,T)),layoutMapper:v.layoutMapper},F[n],a)))};C.propTypes={componentMapper:m.a.object,formContainer:m.a.oneOf(["default","modal"])},C.defaultProps={componentMapper:{},formContainer:"default"};t.a=C},20:function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"e",function(){return r}),n.d(t,"f",function(){return o}),n.d(t,"g",function(){return i}),n.d(t,"a",function(){return s}),n.d(t,"i",function(){return c}),n.d(t,"h",function(){return l}),n.d(t,"c",function(){return u});var a="FETCH_REQUEST",r="FETCH_REQUESTS",o="FETCH_WORKFLOW",i="FETCH_WORKFLOWS",s="ADD_WORKFLOW",c="UPDATE_WORKFLOW",l="REMOVE_WORKFLOW",u="FETCH_RBAC_GROUPS"},392:function(e,t,n){},398:function(e,t,n){var a={"./af":158,"./af.js":158,"./ar":159,"./ar-dz":160,"./ar-dz.js":160,"./ar-kw":161,"./ar-kw.js":161,"./ar-ly":162,"./ar-ly.js":162,"./ar-ma":163,"./ar-ma.js":163,"./ar-sa":164,"./ar-sa.js":164,"./ar-tn":165,"./ar-tn.js":165,"./ar.js":159,"./az":166,"./az.js":166,"./be":167,"./be.js":167,"./bg":168,"./bg.js":168,"./bm":169,"./bm.js":169,"./bn":170,"./bn.js":170,"./bo":171,"./bo.js":171,"./br":172,"./br.js":172,"./bs":173,"./bs.js":173,"./ca":174,"./ca.js":174,"./cs":175,"./cs.js":175,"./cv":176,"./cv.js":176,"./cy":177,"./cy.js":177,"./da":178,"./da.js":178,"./de":179,"./de-at":180,"./de-at.js":180,"./de-ch":181,"./de-ch.js":181,"./de.js":179,"./dv":182,"./dv.js":182,"./el":183,"./el.js":183,"./en-SG":184,"./en-SG.js":184,"./en-au":185,"./en-au.js":185,"./en-ca":186,"./en-ca.js":186,"./en-gb":187,"./en-gb.js":187,"./en-ie":188,"./en-ie.js":188,"./en-il":189,"./en-il.js":189,"./en-nz":190,"./en-nz.js":190,"./eo":191,"./eo.js":191,"./es":192,"./es-do":193,"./es-do.js":193,"./es-us":194,"./es-us.js":194,"./es.js":192,"./et":195,"./et.js":195,"./eu":196,"./eu.js":196,"./fa":197,"./fa.js":197,"./fi":198,"./fi.js":198,"./fo":199,"./fo.js":199,"./fr":200,"./fr-ca":201,"./fr-ca.js":201,"./fr-ch":202,"./fr-ch.js":202,"./fr.js":200,"./fy":203,"./fy.js":203,"./ga":204,"./ga.js":204,"./gd":205,"./gd.js":205,"./gl":206,"./gl.js":206,"./gom-latn":207,"./gom-latn.js":207,"./gu":208,"./gu.js":208,"./he":209,"./he.js":209,"./hi":210,"./hi.js":210,"./hr":211,"./hr.js":211,"./hu":212,"./hu.js":212,"./hy-am":213,"./hy-am.js":213,"./id":214,"./id.js":214,"./is":215,"./is.js":215,"./it":216,"./it-ch":217,"./it-ch.js":217,"./it.js":216,"./ja":218,"./ja.js":218,"./jv":219,"./jv.js":219,"./ka":220,"./ka.js":220,"./kk":221,"./kk.js":221,"./km":222,"./km.js":222,"./kn":223,"./kn.js":223,"./ko":224,"./ko.js":224,"./ku":225,"./ku.js":225,"./ky":226,"./ky.js":226,"./lb":227,"./lb.js":227,"./lo":228,"./lo.js":228,"./lt":229,"./lt.js":229,"./lv":230,"./lv.js":230,"./me":231,"./me.js":231,"./mi":232,"./mi.js":232,"./mk":233,"./mk.js":233,"./ml":234,"./ml.js":234,"./mn":235,"./mn.js":235,"./mr":236,"./mr.js":236,"./ms":237,"./ms-my":238,"./ms-my.js":238,"./ms.js":237,"./mt":239,"./mt.js":239,"./my":240,"./my.js":240,"./nb":241,"./nb.js":241,"./ne":242,"./ne.js":242,"./nl":243,"./nl-be":244,"./nl-be.js":244,"./nl.js":243,"./nn":245,"./nn.js":245,"./pa-in":246,"./pa-in.js":246,"./pl":247,"./pl.js":247,"./pt":248,"./pt-br":249,"./pt-br.js":249,"./pt.js":248,"./ro":250,"./ro.js":250,"./ru":251,"./ru.js":251,"./sd":252,"./sd.js":252,"./se":253,"./se.js":253,"./si":254,"./si.js":254,"./sk":255,"./sk.js":255,"./sl":256,"./sl.js":256,"./sq":257,"./sq.js":257,"./sr":258,"./sr-cyrl":259,"./sr-cyrl.js":259,"./sr.js":258,"./ss":260,"./ss.js":260,"./sv":261,"./sv.js":261,"./sw":262,"./sw.js":262,"./ta":263,"./ta.js":263,"./te":264,"./te.js":264,"./tet":265,"./tet.js":265,"./tg":266,"./tg.js":266,"./th":267,"./th.js":267,"./tl-ph":268,"./tl-ph.js":268,"./tlh":269,"./tlh.js":269,"./tr":270,"./tr.js":270,"./tzl":271,"./tzl.js":271,"./tzm":272,"./tzm-latn":273,"./tzm-latn.js":273,"./tzm.js":272,"./ug-cn":274,"./ug-cn.js":274,"./uk":275,"./uk.js":275,"./ur":276,"./ur.js":276,"./uz":277,"./uz-latn":278,"./uz-latn.js":278,"./uz.js":277,"./vi":279,"./vi.js":279,"./x-pseudo":280,"./x-pseudo.js":280,"./yo":281,"./yo.js":281,"./zh-cn":282,"./zh-cn.js":282,"./zh-hk":283,"./zh-hk.js":283,"./zh-tw":284,"./zh-tw.js":284};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=398},484:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),o=n(32),i=n(0),s=n.n(i),c=n(65),l=n(35),u=n(307),d=n(306),f=n(83),p=n(93),m=n(20),h=n(17),b=n.n(h),v=n(21),w=n.n(v),y=n(44),g=n.n(y),j=n(66),E=Object(j.a)();function k(){return R.apply(this,arguments)}function R(){return(R=g()(w.a.mark(function e(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.listGroups();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function q(e){return O.apply(this,arguments)}function O(){return(O=g()(w.a.mark(function e(t){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",Promise.all(t.map(function(){var e=g()(w.a.mark(function e(t){var n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getGroup(t);case 2:return n=e.sent,e.abrupt("return",n.name);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}var T=Object(j.d)(),F=Object(j.c)();function C(e){return L.apply(this,arguments)}function L(){return(L=g()(w.a.mark(function e(t){var n,a,r,o,i,s;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,a=void 0===n?10:n,r=t.offset,o=void 0===r?0:r,e.next=3,T.listWorkflows(a,o);case 3:return i=e.sent,s=i.data,e.abrupt("return",Promise.all(s.map(function(){var e=g()(w.a.mark(function e(t){var n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(t.group_refs);case 2:return n=e.sent,e.abrupt("return",b()({},t,{group_names:n}));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())).then(function(e){return b()({},i,{data:e})}));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function _(e){return N.apply(this,arguments)}function N(){return(N=g()(w.a.mark(function e(t){var n,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.showWorkflow(t);case 2:return n=e.sent,e.next=5,q(n.group_refs);case 5:return a=e.sent,e.abrupt("return",b()({},n,{group_names:a}));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function W(e){return x.apply(this,arguments)}function x(){return(x=g()(w.a.mark(function e(t){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.updateWorkflow(t.id,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(e){return P.apply(this,arguments)}function P(){return(P=g()(w.a.mark(function e(t){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:m.g,payload:C(e)}},I=function(e){return{type:m.f,payload:_(e)}},A=function(e){return{type:m.a,payload:(t=e,F.listTemplates().then(function(e){var t=e.data;if(!t[0])throw new Error("No template exists");return t[0].id}).then(function(e){return T.addWorkflowToTemplate(e,t,{})})),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding workflow",description:"The workflow was added successfully."},rejected:{variant:"danger",title:"Failed adding workflow",description:"The workflow was not added successfuly."}}}};var t},z=function(e){return{type:m.i,payload:W(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success updating workflow",description:"The workflow was updated successfully."},rejected:{variant:"danger",title:"Failed updating workflow",description:"The workflow was not updated successfuly."}}}}},G=function(e){return{type:m.h,payload:S(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing workflow",description:"The workflow was removed successfully."}}}}},M=n(24),U=n.n(M),K=n(37),B=n.n(K),V=n(41),H=n.n(V),Q=n(51),X=n(287),J=n(55),Z=n(85),Y=n(109),$=n(39),ee=function(e,t){return{fields:[{component:$.componentTypes.WIZARD,name:"workflow_wizard",fields:[{title:"Workflow information",name:"wf_step_info",stepKey:1,nextStep:"wf_step_stages",fields:[{component:$.componentTypes.TEXTAREA_FIELD,name:"name",type:"text",isRequired:!0,label:"Name",validate:[{type:$.validatorTypes.REQUIRED}]},{component:$.componentTypes.TEXTAREA_FIELD,name:"description",type:"text",label:"Description"}]},{stepKey:"wf_step_stages",title:"Set Approval Stages",name:"wf_step_stages",nextStep:"summary",fields:[{component:$.componentTypes.SELECT,name:"stage-1",isRequired:!1,label:"1st Stage",options:t},{component:$.componentTypes.SELECT,name:"stage-2",label:"2nd Stage",options:t},{component:$.componentTypes.SELECT,name:"stage-3",label:"3rd Stage",options:t}]},{fields:[{name:"summary",component:"summary"}],stepKey:"summary",name:"summary"}]}]}},te=n(286),ne=n(114),ae=function(e){var t=e.values,n=t.name,o=t.description,i=H()(t,["name","description"]);return r.a.createElement(a.Fragment,null,r.a.createElement(te.a,null,r.a.createElement(ne.b,{className:"data-table-detail heading",component:ne.a.h5},"Please review the workflow details")),r.a.createElement(te.a,null,r.a.createElement(ne.b,{className:"data-table-detail heading",component:ne.a.h5},"Name"),r.a.createElement(ne.b,{className:"data-table-detail content",component:ne.a.p},n)),r.a.createElement(te.a,null,r.a.createElement(ne.b,{className:"data-table-detail heading",component:ne.a.h5},"Description"),r.a.createElement(ne.b,{className:"data-table-detail content",component:ne.a.p},o)),r.a.createElement(te.a,null,r.a.createElement(ne.b,{className:"data-table-detail heading",component:ne.a.h5},"Approval Stages"),Object.keys(i).map(function(t){return t.startsWith("stage")&&r.a.createElement(ne.b,{key:t,className:"data-table-detail content",component:ne.a.p},"".concat(t," : ").concat(e.groupOptions.find(function(e){return e.value===i[t]}).label))})))};ae.propTypes={name:s.a.string,description:s.a.string,groups:s.a.array};var re=ae,oe=function(e){var t=e.history.push,n=e.addWorkflow,o=e.addNotification,i=e.fetchWorkflow,s=e.fetchWorkflows,c=e.initialValues,l=e.updateWorkflow,u=e.initialGroups,d=e.workflowId,f=e.rbacGroups;Object(a.useEffect)(function(){d&&i(d).then(function(e){return h(e)})},[d]);var p=function(){o({variant:"warning",title:c?"Editing workflow":"Creating workflow",description:c?"Edit workflow was cancelled by the user.":"Creating workflow was cancelled by the user."}),t("/workflows")},m=[].concat(B()(f),[{value:void 0,label:"None"}]),h=function(e){return e.value.group_refs.map(function(e,t){return U()({},"stage-".concat(t+1),e)}).reduce(function(e,t){return b()({},e,t)},{})};return r.a.createElement(X.a,{title:c?"Edit workflow":"Create workflow",isOpen:!0,onClose:p,isSmall:!0},r.a.createElement("div",{style:{padding:8}},r.a.createElement(Y.a,{schema:ee(0,m),schemaType:"default",onSubmit:function(e){var a=e.name,r=e.description,o=H()(e,["name","description"]),i={name:a,description:r,group_refs:Object.values(o)};c?l(i).then(t("/workflows")).then(function(){return s()}):n(i).then(t("/workflows")).then(function(){return s()})},onCancel:p,initialValues:b()({},c,u),formFieldsMapper:b()({},Z.formFieldsMapper,{summary:function(e){return r.a.createElement(re,{values:e.formOptions.getState().values,groupOptions:m})}}),formContainer:"modal",showFormControls:!1,buttonsLabels:{submitLabel:"Confirm"}})))};oe.defaultProps={rbacGroups:[],initialGroups:[]},oe.propTypes={history:s.a.shape({goBack:s.a.func.isRequired}).isRequired,addWorkflow:s.a.func.isRequired,addNotification:s.a.func.isRequired,fetchWorkflow:s.a.func.isRequired,fetchWorkflows:s.a.func.isRequired,initialValues:s.a.object,updateWorkflow:s.a.func.isRequired,workflowId:s.a.string,initialGroups:s.a.array,rbacGroups:s.a.arrayOf(s.a.shape({value:s.a.oneOfType([s.a.number,s.a.string]).isRequired,label:s.a.string.isRequired})).isRequired};var ie=Object(c.f)(Object(o.connect)(function(e,t){var n=t.match.params.id,a=e.workflowReducer.selectedWorkflow;return{rbacGroups:e.groupReducer.groups,initialValues:n&&a,workflowId:n}},function(e){return Object(Q.bindActionCreators)({addNotification:J.addNotification,addWorkflow:A,updateWorkflow:z,fetchWorkflows:D,fetchWorkflow:I},e)})(oe)),se=n(72),ce=function(e){var t=e.history,n=t.goBack,o=t.push,i=e.removeWorkflow,s=e.fetchWorkflows,c=e.fetchWorkflow,l=e.workflowId,u=e.workflow;if(Object(a.useEffect)(function(){l&&c(l)},[l]),!u)return null;var d=function(){return n()};return r.a.createElement(X.a,{isOpen:!0,isSmall:!0,title:"",onClose:d,actions:[r.a.createElement(f.c,{key:"cancel",variant:"secondary",type:"button",onClick:d},"Cancel"),r.a.createElement(f.c,{key:"submit",variant:"primary",type:"button",onClick:function(){return i(l).then(function(){s(),o("/workflows")})}},"Confirm")]},r.a.createElement(se.a,null,r.a.createElement(te.a,null,r.a.createElement(ne.b,{component:ne.a.h1},"Removing Workflow:  ",u.name))))};ce.propTypes={history:s.a.shape({goBack:s.a.func.isRequired,push:s.a.func.isRequired}).isRequired,removeWorkflow:s.a.func.isRequired,fetchWorkflows:s.a.func.isRequired,fetchWorkflow:s.a.func.isRequired,workflowId:s.a.string,workflow:s.a.object};var le=Object(c.f)(Object(o.connect)(function(e,t){var n=e.workflowReducer,a=n.selectedWorkflow,r=n.isLoading;return{workflowId:t.match.params.id,workflow:a,isLoading:r}},function(e){return Object(Q.bindActionCreators)({fetchWorkflow:I,fetchWorkflows:D,removeWorkflow:G},e)})(ce)),ue=function(e){var t=e.description,n=e.groups;return r.a.createElement(a.Fragment,null,r.a.createElement(te.a,null,r.a.createElement(ne.b,{className:"data-table-detail heading",component:ne.a.small},"Description"),r.a.createElement(ne.b,{className:"data-table-detail content",component:ne.a.h5},t)),r.a.createElement(te.a,null,r.a.createElement(ne.b,{className:"data-table-detail heading",component:ne.a.small},"Groups"),r.a.createElement(ne.b,{className:"data-table-detail content",component:ne.a.h5},n.join(","))))};ue.propTypes={description:s.a.string,groups:s.a.array};var de=ue,fe=function(e){return e.filter(function(e){return"Always approve"!==e.name}).reduce(function(e,t,n){var a=t.id,o=t.name,i=t.description,s=t.group_names;return[].concat(B()(e),[{id:a,isOpen:!1,selected:!1,cells:[o,i,s.length]},{parent:2*n,cells:[{title:r.a.createElement(de,{description:i,groups:s})}]}])},[])},pe=n(108),me=[{title:"Name",cellFormatters:[p.b]},"Description","Groups"],he=function(e){var t=e.fetchRbacGroups,n=e.fetchWorkflows,o=e.workflows,i=e.pagination,s=e.history;return r.a.createElement(pe.a,{data:o,createInitialRows:fe,columns:me,fetchData:function(e){t(),n().then(function(t){var n=t.value.data;return e(fe(n))})},request:n,routes:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(c.b,{exact:!0,path:"/workflows/add-workflow",component:ie}),r.a.createElement(c.b,{exact:!0,path:"/workflows/edit/:id",component:ie}),r.a.createElement(c.b,{exact:!0,path:"/workflows/remove/:id",component:le}))},actionResolver:function(e,t){return 1===t.rowIndex?null:[{title:"Edit",onClick:function(e,t,n){return s.push("/workflows/edit/".concat(n.id))}},{title:"Delete",style:{color:"var(--pf-global--danger-color--100)"},onClick:function(e,t,n){return s.push("/workflows/remove/".concat(n.id))}}]},titlePlural:"Workflows",titleSingular:"Workflow",pagination:i,toolbarButtons:function(){return r.a.createElement(u.a,null,r.a.createElement(d.a,null,r.a.createElement(l.b,{to:"/workflows/add-workflow"},r.a.createElement(f.c,{variant:"primary","aria-label":"Create Workflow"},"Create Workflow"))))}})};he.propTypes={history:s.a.shape({goBack:s.a.func.isRequired,push:s.a.func.isRequired}).isRequired,filteredItems:s.a.array,workflows:s.a.array,platforms:s.a.array,isLoading:s.a.bool,searchFilter:s.a.string,fetchWorkflows:s.a.func.isRequired,fetchRbacGroups:s.a.func.isRequired,pagination:s.a.shape({limit:s.a.number.isRequired,offset:s.a.number.isRequired,count:s.a.number.isRequired})},he.defaultProps={workflows:[],pagination:{}};t.default=Object(o.connect)(function(e){var t=e.workflowReducer,n=t.workflows,a=t.isLoading,r=e.groupReducer,o=r.groups,i=r.filterValue;return{workflows:n.data,pagination:n.meta,rbacGroups:o,isLoading:a,searchFilter:i}},function(e){return{fetchWorkflows:function(t){return e(D(t))},fetchRbacGroups:function(t){return e({type:m.c,payload:k().then(function(e){var t=e.data;return B()(t.map(function(e){return{value:e.uuid,label:e.name}}))})})}}})(he)},485:function(e,t,n){"use strict";n.r(t);var a,r,o,i=n(3),s=n.n(i),c=n(9),l=n.n(c),u=n(35),d=n(32),f=n(357),p=n(62),m=n(55),h=n(343),b=n.n(h),v=n(344),w=n(24),y=n.n(w),g=n(17),j=n.n(g),E=n(20),k=function(e){return j()({},e,{isRequestDataLoading:!0})},R=(a={},y()(a,"".concat(E.e,"_PENDING"),k),y()(a,"".concat(E.e,"_FULFILLED"),function(e,t){var n=t.payload;return j()({},e,{requests:n,isRequestDataLoading:!1})}),y()(a,"".concat(E.d,"_PENDING"),k),y()(a,"".concat(E.d,"_FULFILLED"),function(e,t){var n=t.payload;return j()({},e,{selectedRequest:n,isRequestDataLoading:!1})}),a),q=function(e){return j()({},e,{isLoading:!0})},O=(r={},y()(r,"".concat(E.g,"_PENDING"),q),y()(r,"".concat(E.g,"_FULFILLED"),function(e,t){var n=t.payload;return j()({},e,{workflows:n,isLoading:!1})}),y()(r,"".concat(E.f,"_PENDING"),q),y()(r,"".concat(E.f,"_FULFILLED"),function(e,t){var n=t.payload;return j()({},e,{selectedWorkflow:n,isLoading:!1})}),r),T=(o={},y()(o,"".concat(E.c,"_PENDING"),function(e){return j()({},e,{isLoading:!0})}),y()(o,"".concat(E.c,"_FULFILLED"),function(e,t){var n=t.payload;return j()({},e,{groups:n,isLoading:!1})}),o),F=new p.ReducerRegistry({},[v.a,Object(f.a)(),Object(m.notificationsMiddleware)({errorTitleKey:["message"],errorDescriptionKey:["errors","stack"]}),b.a]);F.register({requestReducer:Object(p.applyReducerHash)(R,{requests:[],request:{},filterValue:"",isRequestDataLoading:!1}),workflowReducer:Object(p.applyReducerHash)(O,{workflows:{data:[],meta:{count:0,limit:10,offset:0}},workflow:{},filterValue:"",isLoading:!1}),groupReducer:Object(p.applyReducerHash)(T,{groups:[],isLoading:!1}),notifications:m.notifications});var C=F.getStore(),L=n(347),_=n.n(L),N=n(348),W=n.n(N),x=n(349),S=n.n(x),P=n(350),D=n.n(P),I=n(122),A=n.n(I),z=n(351),G=n.n(z),M=n(0),U=n.n(M),K=n(65),B=n(41),V=n.n(B),H=n(128),Q=n.n(H),X=n(42),J=n.n(X),Z=n(37),Y=n.n(Z),$=n(127),ee=n(151),te=n(152),ne=n(153),ae=n(154),re=function(e){var t=e.items,n=V()(e,["items"]);return s.a.createElement(ee.a,{gutter:"md"},s.a.createElement(te.a,{sm:12,style:{padding:24}},s.a.createElement(ee.a,{gutter:"md"},Y()(Array(t)).map(function(e,t){return s.a.createElement(te.a,{sm:12,md:6,lg:3,key:t},s.a.createElement(ne.a,null,s.a.createElement(ae.a,null,s.a.createElement($.a,J()({height:160,width:300,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},n),s.a.createElement("rect",{x:"2",y:"99",rx:"3",ry:"3",width:"300",height:"6.4"})))))}))))};re.propTypes={items:U.a.number},re.defaultProps={items:1};var oe=function(e){return s.a.createElement("div",null,s.a.createElement($.a,J()({height:16,width:300,speed:2,primaryColor:"#FFFFFF",secondaryColor:"#FFFFFF"},e),s.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"420",height:"10"})),s.a.createElement(re,null))},ie=Object(i.lazy)(function(){return Promise.resolve().then(function(){return Q()(n(486))})}),se=Object(i.lazy)(function(){return Promise.resolve().then(function(){return Q()(n(484))})}),ce="/requests",le="/workflows",ue=function(e){var t=e.rootClass,n=V()(e,["rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(t),"pf-l-page__main","pf-c-page__main"),a.setAttribute("role","main"),s.a.createElement(K.b,n)};ue.propTypes={rootClass:U.a.string};var de=function(){return s.a.createElement(i.Suspense,{fallback:s.a.createElement(oe,null)},s.a.createElement(K.d,null,s.a.createElement(ue,{path:ce,component:ie,rootClass:"requests"}),s.a.createElement(ue,{path:le,component:se,rootClass:"workflows"}),s.a.createElement(K.b,{render:function(){return s.a.createElement(K.a,{to:le})}})))},fe=(n(392),n(336)),pe=n(157),me=[{eventKey:0,title:"Requests",name:"/requests"},{eventKey:1,title:"Workflows",name:"/workflows"}],he=function(e){var t=e.history.push,n=e.location.pathname,a=me.find(function(e){var t=e.name;return n.includes(t)});return s.a.createElement(fe.a,{className:"pf-u-mt-md",activeKey:a?a.eventKey:0,onSelect:function(e,n){return t(me[n].name)}},me.map(function(e){return s.a.createElement(pe.a,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})}))};he.propTypes={children:U.a.oneOfType([U.a.node,U.a.arrayOf(U.a.node)]),location:U.a.shape({pathname:U.a.string.isRequired}),history:U.a.shape({push:U.a.func.isRequired})};var be=Object(K.f)(he),ve=n(123),we=(n(393),function(e){function t(){var e,n;_()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=S()(this,(e=D()(t)).call.apply(e,[this].concat(r))),y()(A()(n),"state",{chromeNavAvailable:!0,auth:!1}),n}return G()(t,e),W()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.auth.getUser().then(function(){return e.setState({auth:!0})}),insights.chrome.identifyApp("approval")}},{key:"render",value:function(){return this.state.auth?s.a.createElement(s.a.Fragment,null,s.a.createElement(m.NotificationsPortal,null),s.a.createElement(p.PageHeader,{style:{paddingBottom:0}},s.a.createElement(ve.a,{headingLevel:"h1",size:"2xl"},"Approval"),s.a.createElement(be,null)),s.a.createElement(p.Main,null,s.a.createElement(de,null))):s.a.createElement(oe,null)}}]),t}(i.Component));we.propTypes={history:U.a.object};var ye=Object(K.f)(Object(d.connect)()(we)),ge=window.location.pathname.split("/");ge.shift();var je="/";"beta"===ge[0]&&(je="/".concat(ge.shift(),"/")),l.a.render(s.a.createElement(d.Provider,{store:C},s.a.createElement(u.a,{basename:"".concat(je).concat(ge[0],"/").concat(ge[1],"/").concat(ge[2])},s.a.createElement(ye,null))),document.getElementById("root"))},486:function(e,t,n){"use strict";n.r(t);var a=n(42),r=n.n(a),o=n(3),i=n.n(o),s=n(32),c=n(0),l=n.n(c),u=n(65),d=n(93),f=n(20),p=n(66),m=Object(p.b)();var h=function(e){return function(t,n){if(!n().requestReducer.isLoading)return t(function(){var e,t,n,a,r,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:f.e,payload:(e=o,t=e.limit,n=void 0===t?10:t,a=e.offset,r=void 0===a?0:a,m.listRequests(void 0,void 0,void 0,n,r))}}(e))}},b=n(109),v=n(51),w=n(287),y=n(55),g=n(39),j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=function(e){return{component:g.componentTypes.TEXTAREA_FIELD,name:"name",type:"text",isRequired:e,label:e?"Reason":"Comment"}}(e);return e&&(t.validate=[{type:g.validatorTypes.REQUIRED}]),{fields:[t]}},E=function(e){var t=e.history.push,n=e.actionType,a=e.addNotification,r=e.fetchRequests,o=e.requestId,s=function(){var e="Add Comment"===n?n:"".concat(n," Request");a({variant:"warning",title:e,description:"".concat(e," was cancelled by the user.")}),t("/requests")};return i.a.createElement(w.a,{isLarge:!0,title:"Add Comment"===n?"Request #".concat(o):"".concat(n," Request #").concat(o),isOpen:!0,onClose:s},i.a.createElement(b.a,{schema:j("Deny"===n),schemaType:"default",onSubmit:function(){r().then(t("/requests"))},onCancel:s,formContainer:"modal"}))};E.propTypes={history:l.a.shape({push:l.a.func.isRequired}).isRequired,addNotification:l.a.func.isRequired,fetchRequests:l.a.func.isRequired,requests:l.a.object,requestId:l.a.string,actionType:l.a.string,match:l.a.object,location:l.a.object};var k=Object(u.f)(Object(s.connect)(function(e,t){var n=t.match.params.id;return{requests:e.requestReducer.requests,requestId:n}},function(e){return Object(v.bindActionCreators)({addNotification:y.addNotification,fetchRequests:h},e)})(E)),R=n(37),q=n.n(R),O=n(35),T=n(337),F=n(285),C=n(286),L=n(114),_=n(83),N=function(e){var t=e.id,n=e.content;return i.a.createElement(o.Fragment,null,i.a.createElement(T.a,null,i.a.createElement(F.a,null,i.a.createElement(C.a,null,i.a.createElement(L.b,{className:"data-table-detail heading",component:L.a.small},"Product"),i.a.createElement(L.b,{className:"data-table-detail content",component:L.a.h5},n?n.product:"Unknown"))),i.a.createElement(F.a,null,i.a.createElement(O.b,{to:"/requests/approve/".concat(t)},i.a.createElement(_.c,{variant:"link","aria-label":"Approve Request"},"Approve")),i.a.createElement(O.b,{to:"/requests/deny/".concat(t)},i.a.createElement(_.c,{variant:"link",className:"destructive-color","aria-label":"Deny Request"},"Deny")))),i.a.createElement(T.a,null,i.a.createElement(F.a,null,i.a.createElement(C.a,null,i.a.createElement(L.b,{className:"data-table-detail heading",component:L.a.small},"Portfolio"),i.a.createElement(L.b,{className:"data-table-detail content",component:L.a.h5},n?n.portfolio:"Unknown")),i.a.createElement(C.a,null,i.a.createElement(L.b,{className:"data-table-detail heading",component:L.a.small},"Platform"),i.a.createElement(L.b,{className:"data-table-detail content",component:L.a.h5},n?n.platform:"Unknown")),i.a.createElement(C.a,null,i.a.createElement(L.b,{className:"data-table-detail heading",component:L.a.small},"Comments"),i.a.createElement(L.b,{className:"data-table-detail content",component:L.a.h5},n?n.comments:"Unknown")))))};N.propTypes={id:l.a.string,content:l.a.object};var W=N,x=n(67),S=function(e){return e.reduce(function(e,t,n){var a=t.id,r=t.requester,o=t.created_at,s=t.updated_at,c=t.state,l=t.decision,u=t.content;return[].concat(q()(e),[{id:a,isOpen:!1,selected:!1,cells:[a,r,Object(x.d)(o),Object(x.d)(s),c,l]},{parent:2*n,cells:[{title:i.a.createElement(W,{id:a,content:u})}]}])},[])},P=n(108),D=[{title:"RequestId",cellFormatters:[d.b]},"Requester","Opened","Updated","Stage Status","Decision"],I=function(e){var t=e.fetchRequests,n=e.requests,a=e.pagination,s=e.history;return i.a.createElement(P.a,{data:n,createInitialRows:S,columns:D,fetchData:function(e){t().then(function(t){var n=t.value.data;return e(S(n))})},request:t,routes:function(){return i.a.createElement(o.Fragment,null,i.a.createElement(u.b,{exact:!0,path:"/requests/add_comment/:id",render:function(e){return i.a.createElement(k,r()({},e,{actionType:"Add Comment"}))}}),i.a.createElement(u.b,{exact:!0,path:"/requests/approve/:id",render:function(e){return i.a.createElement(k,r()({},e,{actionType:"Approve"}))}}),i.a.createElement(u.b,{exact:!0,path:"/requests/deny/:id",render:function(e){return i.a.createElement(k,r()({},e,{actionType:"Deny"}))}}))},actionResolver:function(e,t){return 1===t.rowIndex?null:[{title:"Comment",onClick:function(){return s.push("/requests/add_comment/".concat(e.id))}}]},titlePlural:"Requests",titleSingular:"Request",pagination:a})};I.propTypes={history:l.a.shape({goBack:l.a.func.isRequired,push:l.a.func.isRequired}).isRequired,filteredItems:l.a.array,requests:l.a.array,platforms:l.a.array,isLoading:l.a.bool,searchFilter:l.a.string,fetchRequests:l.a.func.isRequired,pagination:l.a.shape({limit:l.a.number.isRequired,offset:l.a.number.isRequired,count:l.a.number.isRequired})},I.defaultProps={requests:[],pagination:{}};t.default=Object(s.connect)(function(e){var t=e.requestReducer,n=t.requests,a=t.isLoading,r=t.filterValue;return{requests:n.data,pagination:n.meta,isLoading:a,searchFilter:r}},function(e){return{fetchRequests:function(t){return e(h(t))}}})(I)},66:function(e,t,n){"use strict";var a=n(102),r=n.n(a),o="".concat("/api","/approval/v1.0"),i="".concat("/api","/rbac/v1"),s=n(110),c=n(86);n.d(t,"b",function(){return m}),n.d(t,"c",function(){return h}),n.d(t,"d",function(){return b}),n.d(t,"a",function(){return v});var l=r.a.create();l.interceptors.response.use(function(e){return e.data||e});var u=new c.WorkflowApi(void 0,o,l),d=(new c.ActionApi(void 0,o,l),new c.RequestApi(void 0,o,l)),f=new c.TemplateApi(void 0,o,l),p=(new s.AccessApi(void 0,i,l),new s.PrincipalApi(void 0,i,l),new s.GroupApi(void 0,i,l));function m(){return d}function h(){return f}function b(){return u}function v(){return p}},67:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"d",function(){return c});var a=n(5),r=n.n(a),o=function(){return document.getElementById("root").scrollTo({behavior:"smooth",top:0,left:0})},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(t/e)+1},s=function(){return((arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)-1)*(arguments.length>1?arguments[1]:void 0)},c=function(e){return r()(e).fromNow()}}});
//# sourceMappingURL=../sourcemaps/App.js.map