"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2594],{72594:(z,b,l)=>{l.r(b),l.d(b,{JobCardTrackingModule:()=>Q});var g=l(96814),m=l(1076),h=l(43818),v=l(25116),t=l(65879),c=l(37285),T=l(88059),C=l(95346);function Z(a,r){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",19,20)(5,"span",21),t._uU(6),t.qZA()(),t.TgZ(7,"td"),t._uU(8),t.qZA()()),2&a){const n=r.$implicit,i=r.index,e=t.MAs(4);let o;t.xp6(2),t.Oqu(null!==(o=null==n?null:n.seq)&&void 0!==o?o:i+1),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("positionTarget",e)("ngbTooltip",n.processName),t.xp6(1),t.hij(" ",null==n?null:n.processName," "),t.xp6(2),t.Oqu(null!=n&&n.processStatus?"Yes":"No")}}const y=function(a,r,n,i){return{page:a,pageSize:r,collection:n,search:i,excelDisplay:"none"}};let x=(()=>{var a;class r{constructor(i){this.activeModal=i,this.jobCardEntryList=[],this.page=1,this.pageSize=9,this.collection=0,this.search="",this.column="createdAt",this.direction=-1}ngOnInit(){this.collection=this.jobCardEntryList.length}eventHeader(i){switch(i.key){case"SEARCH":this.search=i.value,this.page=1;break;case"EXCEL":default:break;case"PAGE":this.page=i.value}}onSort({column:i,direction:e}){this.headers.forEach(o=>{o.sortable!==i&&(o.direction="")}),this.jobCardEntryList=""===e||""===i?this.jobCardEntryList:[...this.jobCardEntryList].sort((o,s)=>{let p="string"==typeof o[i]?o[i].toLowerCase():o[i],d="string"==typeof s[i]?s[i].toLowerCase():s[i];const u=p<d?-1:p>d?1:0;return"asc"===e?u:-u})}}return(a=r).\u0275fac=function(i){return new(i||a)(t.Y36(c.Kz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-view-jc-status"]],viewQuery:function(i,e){if(1&i&&t.Gf(h.j,5),2&i){let o;t.iGM(o=t.CRH())&&(e.headers=o)}},inputs:{jobCardEntryList:"jobCardEntryList"},decls:27,vars:14,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,""],[1,"container-fluid"],[1,"row","justify-content-center"],[1,"col-12","px-0","mt-4"],[1,"px-5","mt-0"],[3,"data","dataChange"],[1,"table-responsive","px-5",2,"min-height","33rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","seq",3,"sort"],["sortable","processName",1,"text-start",3,"sort"],["sortable","processStatus",3,"sort"],[4,"ngFor","ngForOf"],[1,"text-start"],["processName",""],[1,"pointer",3,"positionTarget","ngbTooltip"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Job Card Entry Status"),t.qZA(),t.TgZ(4,"div")(5,"button",3),t.NdJ("click",function(){return e.activeModal.close()}),t._UZ(6,"i",4),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"app-setting-header",10),t.NdJ("dataChange",function(s){return e.eventHeader(s)}),t.qZA()(),t.TgZ(13,"div",11)(14,"table",12)(15,"thead",13)(16,"tr",14)(17,"th",15),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(18,"PRC Seq."),t.qZA(),t.TgZ(19,"th",16),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(20," Process Name "),t.qZA(),t.TgZ(21,"th",17),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(22,"Status"),t.qZA()()(),t.TgZ(23,"tbody"),t.YNc(24,Z,9,7,"tr",18),t.ALo(25,"slice"),t.ALo(26,"searchFi1ter"),t.qZA()()()()()()()()),2&i&&(t.xp6(12),t.Q6J("data",t.l5B(9,y,e.page,e.pageSize,e.collection,e.search)),t.xp6(12),t.Q6J("ngForOf",t.Dn7(25,2,t.xi3(26,6,e.jobCardEntryList,e.search),(e.page-1)*e.pageSize,(e.page-1)*e.pageSize+e.pageSize)))},dependencies:[g.sg,T.P,c._L,h.j,g.OU,C.G],encapsulation:2}),r})();var _=l(99328),J=l(79475),f=l(60095),A=l(84231);function U(a,r){1&a&&t._UZ(0,"img",26)}function j(a,r){1&a&&t._UZ(0,"img",27)}function k(a,r){if(1&a&&(t.TgZ(0,"li",29)(1,"span",30),t._uU(2),t.qZA()()),2&a){const n=t.oxw(),i=n.$implicit,e=n.pages;t.xp6(2),t.AsE(" Page ",i," of ",e[e.length-1]," ")}}function S(a,r){1&a&&t.YNc(0,k,3,2,"li",28),2&a&&t.Q6J("ngIf",r.pages.length>0)}function M(a,r){if(1&a){const n=t.EpF();t.TgZ(0,"ngb-pagination",22),t.NdJ("pageChange",function(e){t.CHM(n);const o=t.oxw();return t.KtG(o.page=e)}),t.YNc(1,U,1,0,"ng-template",23),t.YNc(2,j,1,0,"ng-template",24),t.YNc(3,S,1,1,"ng-template",25),t.qZA()}if(2&a){const n=t.oxw();t.Q6J("collectionSize",n.jobTrackingData.length)("page",n.page)("pageSize",n.pageSize)("boundaryLinks",!1)}}function w(a,r){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.TgZ(2,"span"),t._uU(3,"x"),t.qZA(),t._uU(4),t.qZA()),2&a){const n=t.oxw().$implicit;t.xp6(1),t.AsE(" ",null==n?null:n.layoutDimensionsWidth," ",null==n?null:n.layoutDimensionsUnit," "),t.xp6(3),t.AsE(" ",null==n?null:n.layoutDimensionsLength," ",null==n?null:n.layoutDimensionsUnit," ")}}function L(a,r){if(1&a&&(t.TgZ(0,"span",58),t._uU(1),t.qZA()),2&a){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==n?null:n.UOM," ")}}function N(a,r){if(1&a){const n=t.EpF();t.TgZ(0,"div",31)(1,"div",32)(2,"div",33)(3,"div",34)(4,"div",35)(5,"div",36)(6,"div",37)(7,"div",38)(8,"div")(9,"span",39),t._uU(10,"JC No.:"),t.qZA(),t.TgZ(11,"span",40),t._uU(12),t.qZA()(),t.TgZ(13,"div",41),t._uU(14),t.qZA()(),t.TgZ(15,"div",42),t._UZ(16,"img",43),t.qZA()()(),t.TgZ(17,"div",44)(18,"div",37)(19,"div",45)(20,"div",46),t._uU(21),t.qZA(),t.TgZ(22,"div",47),t._uU(23),t.TgZ(24,"span",48),t._UZ(25,"img",49),t.qZA(),t.TgZ(26,"span"),t._uU(27),t.qZA(),t.TgZ(28,"span",48),t._UZ(29,"img",49),t.qZA(),t.TgZ(30,"span"),t._uU(31),t.qZA()()(),t.TgZ(32,"div",50),t._UZ(33,"img",43),t.qZA()()()()(),t.TgZ(34,"div",51)(35,"div",35)(36,"div",52)(37,"div",37)(38,"div",53)(39,"div",18),t._uU(40," PL Size: "),t.YNc(41,w,5,4,"span",54),t.qZA(),t.TgZ(42,"div",41),t._uU(43),t.TgZ(44,"span",48),t._UZ(45,"img",49),t.qZA(),t.TgZ(46,"span"),t._uU(47),t.qZA()()(),t.TgZ(48,"div",55),t._UZ(49,"img",43),t.qZA()()(),t.TgZ(50,"div",52)(51,"div",37)(52,"div",56)(53,"div",18),t._uU(54," Batch Input Qty: "),t.TgZ(55,"span",57),t._uU(56),t.TgZ(57,"span",58),t._uU(58),t.ALo(59,"SalesUOMUnitMaster"),t.qZA()()(),t.TgZ(60,"div",18),t._uU(61," Batch Output Qty: "),t.TgZ(62,"span",59),t._uU(63),t.YNc(64,L,2,1,"span",60),t.qZA()()()()(),t.TgZ(65,"div",61)(66,"span",62),t.NdJ("click",function(){const o=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.navigateTo("default/production/transactions/jc_production_entry/form","view",o))}),t._uU(67,"Status"),t.qZA()()()()(),t._UZ(68,"hr",63),t.qZA()()}if(2&a){const n=r.$implicit;t.xp6(12),t.hij(" ",null==n?null:n.jobCardNo,""),t.xp6(2),t.hij("JC Dt.: ",null==n?null:n.jobCardDate,""),t.xp6(7),t.hij(" ",null==n?null:n.SKUName," "),t.xp6(2),t.hij(" ",null==n?null:n.SKUNo," "),t.xp6(4),t.hij(" Batch Dt.: ",null==n?null:n.batchDate," "),t.xp6(4),t.hij(" ",null==n?null:n.customerName," "),t.xp6(10),t.Q6J("ngIf",(null==n?null:n.layoutDimensionsLength)&&(null==n?null:n.layoutDimensionsWidth)),t.xp6(2),t.hij(" ",null==n?null:n.layoutDimensionsUps," Ups "),t.xp6(4),t.hij(" Colours: ",null==n?null:n.totalNoOfColors," "),t.xp6(9),t.hij(" ",null==n?null:n.totalBatchQuantity," "),t.xp6(2),t.hij(" ",t.lcZ(59,13,null==n?null:n.UOM)," "),t.xp6(5),t.hij(" ",null==n?null:n.batchOutputQty," "),t.xp6(1),t.Q6J("ngIf",n.batchOutputQty)}}const O=function(){return{standalone:!0}};let q=(()=>{var a;class r{constructor(i,e,o,s,p,d,u){this.router=i,this.spinner=e,this.activatedRoute=o,this.jobCardOutputService=s,this.menuTitleService=p,this.utilityService=d,this.modalService=u,this.page=1,this.pageSize=5,this.collection=0,this.activeQualified=0,this.column="jobCardNo",this.direction=-1,this.search="",this.rolePermissionActions=v.a1,this.jobTrackingData=[]}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAllMasterData()}getAllMasterData(){this.spinner.show(),this.jobCardOutputService.getAllJobTrackingMasterData({}).subscribe(i=>{this.jobTrackingData=i,this.collection=this.jobTrackingData.length,this.jobTrackingData.length>0&&(this.activeQualified=this.jobTrackingData.length),this.spinner.hide()})}update(i,e){}navigateTo(i,e,o){o?.jobCardEntry?.length>0&&this.router.navigate([i],{queryParams:{id:o?.jobCardId,action:e}})}setPagination(){this.page=1}trackByFn(i,e){return e?._id}openStatusDetailsModal(i){if(i?.jobCardEntry?.length>0){const e=this.modalService.open(x,{centered:!0,windowClass:"custom-modal",backdrop:"static",keyboard:!1});e.componentInstance.jobCardEntryList=i.jobCardEntry,e.result.then(o=>{},o=>{})}}openDemoDetailsModal(i){}openDemoProposalModal(i){}}return(a=r).\u0275fac=function(i){return new(i||a)(t.Y36(m.F0),t.Y36(_.V),t.Y36(m.gz),t.Y36(J.L6),t.Y36(_.Uh),t.Y36(_.tI),t.Y36(c.FF))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-job-card-tracking-list"]],viewQuery:function(i,e){if(1&i&&t.Gf(h.j,5),2&i){let o;t.iGM(o=t.CRH())&&(e.headers=o)}},decls:28,vars:14,consts:[[1,"formCard","card"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"heading","ps-0"],[1,"form-body","pt-0"],[1,"row","justify-content-between","my-3","px-3"],[1,"col-4","d-flex","align-items-center"],[1,"d-flex"],["id","basic-addon1",1,"input-group-text","bg-primary"],["aria-hidden","true",1,"fa","fa-search","text-white"],["type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange","input"],[1,"col-4","d-flex","justify-content-center","align-items-center"],[3,"collectionSize","page","pageSize","boundaryLinks","pageChange",4,"ngIf"],[1,"col-1"],[1,"col-3"],[1,"d-flex","align-items-center"],[1,"col-form-label","text-nowrap"],[1,"fs-5","text-black-50"],[1,"ms-1","me-2","col-form-label","text-nowrap"],["type","text","readonly","",1,"form-control","border","border-primary",3,"ngModel","ngModelChange"],["class","row formCard card mt-2",4,"ngFor","ngForOf","ngForTrackBy"],[3,"collectionSize","page","pageSize","boundaryLinks","pageChange"],["ngbPaginationPrevious",""],["ngbPaginationNext",""],["ngbPaginationPages",""],["src","./assets/new_icons/pagination_prev.svg","width","20rem"],["src","./assets/new_icons/pagination_next.svg","width","20rem"],["class","ngb-custom-pages-item align-self-center",4,"ngIf"],[1,"ngb-custom-pages-item","align-self-center"],[1,"page-label","me-2","ms-1"],[1,"row","formCard","card","mt-2"],[1,"container"],[1,"row","justify-content-between","px-3","mt-3","mb-0"],[1,"col-7"],[1,"row","mb-0"],[1,"col-4"],[1,"row"],[1,"col-10","pe-0"],[1,"sub-text","text-black-50"],[1,"text-primary","fs-5"],[1,"sub-text","text-black-50","mt-1"],[1,"col-2","mt-1","ps-2"],["src","./assets/new_icons/09-03_separator.svg","alt","","height","47","width","10"],[1,"col-8"],[1,"col-11","px-0"],[1,"text-secondary","fs-5"],[1,"sub-text","text-black-50","mt-1","fs-"],[1,"me-2","ms-1"],["src","./assets/new_icons/09-03_separator.svg","alt","","height","19","width","8"],[1,"col-1","mt-1","ps-2"],[1,"col-5","px-0"],[1,"col-5","pe-0"],[1,"col-11"],[4,"ngIf"],[1,"col-1","px-0"],[1,"col","ms-3"],[1,"text-secondary"],[1,"text-black-50"],[1,"text-primary"],["class","text-black-50",4,"ngIf"],[1,"col-2","text-center","sub-text","d-flex","mt-4"],[1,"greenStatus","pointer",3,"click"],[1,"row","line-border","mb-0"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Job Card Tracking"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9),t._UZ(11,"i",10),t.qZA(),t.TgZ(12,"div")(13,"input",11),t.NdJ("ngModelChange",function(s){return e.search=s})("input",function(){return e.setPagination()}),t.qZA()()()(),t.TgZ(14,"div",12),t.YNc(15,M,4,4,"ngb-pagination",13),t.qZA(),t._UZ(16,"div",14),t.TgZ(17,"div",15)(18,"div",16)(19,"div",17)(20,"div",18),t._uU(21," Active Job Cards "),t.TgZ(22,"span",19),t._uU(23,"\u25b6"),t.qZA()()(),t.TgZ(24,"input",20),t.NdJ("ngModelChange",function(s){return e.activeQualified=s}),t.qZA()()()()()()(),t.YNc(25,N,69,15,"div",21),t.ALo(26,"slice"),t.ALo(27,"searchFi1ter")),2&i&&(t.xp6(13),t.Q6J("ngModel",e.search)("ngModelOptions",t.DdM(13,O)),t.xp6(2),t.Q6J("ngIf",e.jobTrackingData.length>0),t.xp6(9),t.Q6J("ngModel",e.activeQualified),t.xp6(1),t.Q6J("ngForOf",t.Dn7(26,6,t.xi3(27,10,e.jobTrackingData,e.search),(e.page-1)*e.pageSize,(e.page-1)*e.pageSize+e.pageSize))("ngForTrackBy",e.trackByFn))},dependencies:[g.sg,g.O5,c.N9,c.GZ,c.ju,c.Qy,f.Fj,f.JJ,f.On,g.OU,C.G,A.Q],styles:[".pagination[_ngcontent-%COMP%]{margin-bottom:0!important}ngb-pagination[_ngcontent-%COMP%]     ul.pagination{margin:0!important}.page-label[_ngcontent-%COMP%]{color:var(--bs-dark);padding:0 1rem;font-size:1.4rem}ngb-pagination[_ngcontent-%COMP%]     ul>li:not(.active)>a{border:none!important;color:var(--bs-white)!important;background-color:#fff!important;box-shadow:none}.input-group-text[_ngcontent-%COMP%]{border-radius:0!important;height:2.8rem!important;width:3rem}.fa[_ngcontent-%COMP%]{font-size:1.6rem!important}.demo[_ngcontent-%COMP%]{color:#00af7d!important}.offer[_ngcontent-%COMP%]{color:#ff0096!important}.greenStatus[_ngcontent-%COMP%]{color:#00af7d}.rating-color[_ngcontent-%COMP%]{color:#00afc8}.sub-text[_ngcontent-%COMP%]{font-size:1.2rem!important}"]}),r})();var D=l(56208);const P=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:q}];let Q=(()=>{var a;class r{}return(a=r).\u0275fac=function(i){return new(i||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[g.ez,m.Bz.forChild(P),D.m]}),r})()}}]);