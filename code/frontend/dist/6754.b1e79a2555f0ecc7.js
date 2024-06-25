"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6754],{61441:(F,D,p)=>{p.d(D,{Q:()=>A});var r=p(43818),n=p(65879),C=p(37285),T=p(96814),y=p(88059),t=p(95346);const b=function(){return["view","edit","rejection","reject","approval","approve","cancel"]};function x(k,f){if(1&k){const m=n.EpF();n.TgZ(0,"tr")(1,"td"),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td",26,27)(7,"span",28),n._uU(8),n.qZA()(),n.TgZ(9,"td",26,29)(11,"span",28),n._uU(12),n.qZA()(),n.TgZ(13,"td"),n._uU(14),n.qZA(),n.TgZ(15,"td"),n._uU(16),n.qZA(),n.TgZ(17,"td")(18,"input",30),n.NdJ("change",function(){const g=n.CHM(m).$implicit,d=n.oxw();return n.KtG(d.setSelectData(g))}),n.qZA()()()}if(2&k){const m=f.$implicit,c=f.index,_=n.MAs(6),g=n.MAs(10),d=n.oxw();n.xp6(2),n.Oqu(null==m?null:m.jobCardNo),n.xp6(2),n.Oqu(null==m?null:m.SKUNo),n.xp6(1),n.Udp("width",_.clientWidth),n.xp6(2),n.Q6J("ngbTooltip",m.SKUName)("positionTarget",_),n.xp6(1),n.hij(" ",m.SKUName," "),n.xp6(1),n.Udp("width",g.clientWidth),n.xp6(2),n.Q6J("ngbTooltip",m.SKUDescription)("positionTarget",g),n.xp6(1),n.hij(" ",m.SKUDescription," "),n.xp6(2),n.Oqu(null==m?null:m.UOM),n.xp6(2),n.Oqu(null==m?null:m.batchQty),n.xp6(2),n.MGl("name","formValue",d.JCOptions[c],""),n.Q6J("disabled",n.DdM(17,b).includes(d.action))("checked",m.select)}}function Z(k,f){1&k&&n._UZ(0,"hr",31)}function M(k,f){if(1&k){const m=n.EpF();n.TgZ(0,"div",32)(1,"button",33),n.NdJ("click",function(){n.CHM(m);const _=n.oxw();return n.KtG(_.dismissModel())}),n._uU(2,"Save & Close"),n.qZA()()}}const O=function(k,f,m,c){return{page:k,pageSize:f,collection:m,search:c,excelDisplay:"none"}};let A=(()=>{var k;class f{constructor(c){this.activeModal=c,this.action="edit",this.jobCard="",this.JCOptions=[],this.selectedJobCardDetails={},this.btnDisable=!1,this.page=1,this.pageSize=9,this.collection=0,this.search="",this.column="jobCardNo",this.direction=-1}ngOnInit(){this.jobCard&&(this.selectedJobCardDetails._id=this.jobCard,this.JCOptions=this.JCOptions?.map(c=>(c.select=!1,c._id==this.jobCard&&(c.select=!0),c))),this.collection=this.JCOptions?.length}setSelectData(c){this.selectedJobCardDetails=c}dismissModel(){let c={};c.selectedJobCardDetails=this.selectedJobCardDetails,this.activeModal.close(c)}eventHeader(c){switch(c.key){case"SEARCH":this.search=c.value;break;case"EXCEL":default:break;case"PAGE":this.page=c.value}}onSort({column:c,direction:_}){this.headers.forEach(g=>{g.sortable!==c&&(g.direction="")}),this.JCOptions=""===_||""===c?this.JCOptions:[...this.JCOptions].sort((g,d)=>{let U="string"==typeof g[c]?g[c].toLowerCase():g[c],I="string"==typeof d[c]?d[c].toLowerCase():d[c];const J=U<I?-1:U>I?1:0;return"asc"===_?J:-J})}}return(k=f).\u0275fac=function(c){return new(c||k)(n.Y36(C.Kz))},k.\u0275cmp=n.Xpm({type:k,selectors:[["app-job-card-details-modal"]],viewQuery:function(c,_){if(1&c&&n.Gf(r.j,5),2&c){let g;n.iGM(g=n.CRH())&&(_.headers=g)}},inputs:{action:"action",jobCard:"jobCard",JCOptions:"JCOptions",selectedJobCardDetails:"selectedJobCardDetails"},decls:39,vars:18,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,""],[1,"container-fluid"],[1,"row","justify-content-center"],[1,"col-12","px-0","mt-4"],[1,"px-5","mt-0"],[3,"data","dataChange"],[1,"table-responsive","px-5",2,"min-height","33rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","jobCardNo",3,"sort"],["sortable","SKUNo",3,"sort"],["sortable","SKUName",1,"text-start",3,"sort"],["sortable","SKUDescription",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","batchQty",3,"sort"],[4,"ngFor","ngForOf"],[1,"row"],[1,"col","px-0","mb-3"],["class","line-border",4,"ngIf"],["class","text-center mb-2",4,"ngIf"],[1,"text-start"],["SKUName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["SKUDescription",""],["type","radio",1,"form-check-input","pointer",3,"disabled","name","checked","change"],[1,"line-border"],[1,"text-center","mb-2"],["type","button",1,"btn","bg-primary","px-5","mb-4",3,"click"]],template:function(c,_){1&c&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n._uU(3,"Select Job Card"),n.qZA(),n.TgZ(4,"div")(5,"button",3),n.NdJ("click",function(){return _.activeModal.close()}),n._UZ(6,"i",4),n.qZA()()(),n.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"app-setting-header",10),n.NdJ("dataChange",function(d){return _.eventHeader(d)}),n.qZA()(),n.TgZ(13,"div",11)(14,"table",12)(15,"thead",13)(16,"tr",14)(17,"th",15),n.NdJ("sort",function(d){return _.onSort(d)}),n._uU(18,"Job Card No."),n.qZA(),n.TgZ(19,"th",16),n.NdJ("sort",function(d){return _.onSort(d)}),n._uU(20,"SKU No."),n.qZA(),n.TgZ(21,"th",17),n.NdJ("sort",function(d){return _.onSort(d)}),n._uU(22,"SKU Name"),n.qZA(),n.TgZ(23,"th",18),n.NdJ("sort",function(d){return _.onSort(d)}),n._uU(24," SKU Description "),n.qZA(),n.TgZ(25,"th",19),n.NdJ("sort",function(d){return _.onSort(d)}),n._uU(26,"UoM"),n.qZA(),n.TgZ(27,"th",20),n.NdJ("sort",function(d){return _.onSort(d)}),n._uU(28,"Batch Qty."),n.qZA(),n.TgZ(29,"th"),n._uU(30,"Select"),n.qZA()()(),n.TgZ(31,"tbody"),n.YNc(32,x,19,18,"tr",21),n.ALo(33,"slice"),n.ALo(34,"searchFi1ter"),n.qZA()()()()(),n.TgZ(35,"div",22)(36,"div",23),n.YNc(37,Z,1,0,"hr",24),n.qZA()(),n.YNc(38,M,3,0,"div",25),n.qZA()()()),2&c&&(n.xp6(12),n.Q6J("data",n.l5B(11,O,_.page,_.pageSize,_.collection,_.search)),n.xp6(20),n.Q6J("ngForOf",n.Dn7(33,4,n.xi3(34,8,_.JCOptions,_.search),(_.page-1)*_.pageSize,(_.page-1)*_.pageSize+_.pageSize)),n.xp6(5),n.Q6J("ngIf",!n.DdM(16,b).includes(_.action)),n.xp6(1),n.Q6J("ngIf",!n.DdM(17,b).includes(_.action)))},dependencies:[T.sg,T.O5,y.P,C._L,r.j,T.OU,t.G],encapsulation:2}),f})()},6754:(F,D,p)=>{p.r(D),p.d(D,{InkMixingModule:()=>ot});var r=p(96814),n=p(1076),C=p(43818),T=p(25116),y=p(34183),t=p(65879),b=p(2742),x=p(23396),Z=p(88059),M=p(37285),O=p(53421),A=p(59103);function k(l,h){if(1&l){const o=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",19,20)(7,"span",21),t._uU(8),t.qZA()(),t.TgZ(9,"td",19,22)(11,"span",21),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"UOMUnitsMaster"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td")(23,"div",23),t._UZ(24,"button",24),t.TgZ(25,"div",25)(26,"a",26),t.NdJ("click",function(){const a=t.CHM(o).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",a,"view"))}),t._UZ(27,"i",27),t._uU(28," View "),t.qZA(),t.TgZ(29,"a",26),t.NdJ("click",function(){const a=t.CHM(o).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",a,"edit"))}),t._UZ(30,"i",28),t._uU(31," Edit "),t.qZA()()()()()}if(2&l){const o=h.$implicit,e=t.MAs(6),i=t.MAs(10),a=t.oxw();t.xp6(2),t.Oqu(null==o?null:o.jobCardNo),t.xp6(2),t.Oqu(null==o?null:o.itemCode),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("positionTarget",e)("ngbTooltip",o.itemName),t.xp6(1),t.hij(" ",o.itemName," "),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("positionTarget",i)("ngbTooltip",o.itemDescription),t.xp6(1),t.hij(" ",o.itemDescription," "),t.xp6(2),t.Oqu(t.lcZ(15,18,o.UOM)),t.xp6(3),t.Oqu(o.batchQty),t.xp6(2),t.Oqu(o.batchDate),t.xp6(2),t.Oqu(o.logBookRef),t.xp6(5),t.Q6J("accessType",a.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",a.rolePermissionActions.editAction)}}const f=function(l,h,o,e){return{page:l,pageSize:h,collection:o,search:e,type:"list"}};let m=(()=>{var l;class h{constructor(e,i,a,s,S,N){this.exportExcelService=e,this.inkMixingService=i,this.router=a,this.spinner=s,this.activatedRoute=S,this.exportToPDFService=N,this.page=1,this.pageSize=8,this.collection=0,this.column="itemCode",this.direction=1,this.search="",this.tableData=[],this.rolePermissionActions=T.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,i,a){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:i?._id,action:a}})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}trackByFn(e,i){return i?._id}getAll(e=!1,i=""){this.spinner.show();let a={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.inkMixingService.getAll(a).subscribe(s=>{"EXCEL"==i?this.excelDownload(s.rows):"PDF"==i?this.pdfDownload(s.rows):(this.tableData=s.rows,this.collection=s.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let i=(0,y.R6)(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}excelDownload(e){this.exportExcelService.exportExcel((0,y.M5)(e))}onSort({column:e,direction:i}){this.headers.forEach(a=>{a.sortable!==e&&(a.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}}return(l=h).\u0275fac=function(e){return new(e||l)(t.Y36(b.Ol),t.Y36(x.or),t.Y36(n.F0),t.Y36(b.V),t.Y36(n.gz),t.Y36(b.$L))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-ink-mixing-list"]],viewQuery:function(e,i){if(1&e&&t.Gf(C.j,5),2&e){let a;t.iGM(a=t.CRH())&&(i.headers=a)}},decls:34,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","btn-add","px-4",3,"click"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","UoM",3,"sort"],["sortable","inkCostPerKg",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Ink Mixing Summary"),t.qZA()(),t.TgZ(4,"div",3),t._UZ(5,"button",4),t.TgZ(6,"button",5),t.NdJ("click",function(){return i.navigateTo("../form",null,"create")}),t._uU(7," Ink Mixing "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(s){return i.eventHeader(s)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(15,"JC No."),t.qZA(),t.TgZ(16,"th",12),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(17,"F20 Ink Code"),t.qZA(),t.TgZ(18,"th",13),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(19,"F20 Ink Name"),t.qZA(),t.TgZ(20,"th",14),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(21,"F20 Ink Description"),t.qZA(),t.TgZ(22,"th",15),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(23,"UoM"),t.qZA(),t.TgZ(24,"th",16),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(25,"Batch Qty."),t.qZA(),t.TgZ(26,"th",16),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(27,"Batch Date"),t.qZA(),t.TgZ(28,"th",17),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(29,"Log Book Ref"),t.qZA(),t.TgZ(30,"th"),t._uU(31,"Action"),t.qZA()()(),t.TgZ(32,"tbody"),t.YNc(33,k,32,20,"tr",18),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("accessType",i.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,f,i.page,i.pageSize,i.collection,i.search)),t.xp6(23),t.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[r.sg,Z.P,M._L,C.j,O.J,A.S],encapsulation:2}),h})();var c=p(21631),_=p(22096),g=p(61441),d=p(60095),U=p(15094),I=p(16897),J=p(50363);const K=function(){return["view","approve","reject"]};let P=(()=>{var l;class h{get f(){return this.form.controls}constructor(e,i,a,s){this.activeModal=e,this.validationService=i,this.utilityService=a,this.modalService=s,this.remarksDetails={},this.action="",this.shiftOptions=[],this.form=new d.nJ({remarks:new d.nJ({manufacturingDate:new d.p4(null),shift:new d.p4(null),logBookRef:new d.p4(null),preparedBy:new d.p4(null),checkedBy:new d.p4(null)}),labValues:new d.p4({})})}ngOnInit(){this.remarksDetails&&(console.log("this.remarksDetails",this.remarksDetails),this.form.patchValue(this.remarksDetails)),["view","approve","reject"].includes(this.action)&&this.form.disable()}dismissModel(){this.activeModal.close(this.form.value)}openLabValuesModal(){const e=this.modalService.open(U.W,{centered:!0,size:"sm",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.labValues=this.form.controls.labValues.value,e.result.then(i=>{console.log("success",i),this.form.controls.labValues.patchValue(i)},i=>{})}}return(l=h).\u0275fac=function(e){return new(e||l)(t.Y36(M.Kz),t.Y36(I.RJ),t.Y36(b.tI),t.Y36(M.FF))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-ink-mixing-remarks-details"]],inputs:{remarksDetails:"remarksDetails",action:"action",shiftOptions:"shiftOptions"},decls:47,vars:5,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,""],[3,"formGroup"],["formGroupName","remarks"],[1,"row","my-4","px-5"],[1,"col-4"],[1,"form-label","mb-1"],[1,"text-danger"],["type","date","formControlName","manufacturingDate",1,"form-control"],["bindValue","parameterName","bindLabel","parameterLabel","formControlName","shift",3,"items","clearable"],["type","text","formControlName","logBookRef",1,"form-control"],[1,"row","px-5"],["type","text","formControlName","preparedBy",1,"form-control"],["type","text","formControlName","checkedBy",1,"form-control"],[1,"col-4","mt-4"],[1,"d-grid"],["type","button",1,"btn","btn-primary","mt-2",3,"click"],[1,"line-border","my-4"],[1,"col-12","d-flex","justify-content-center"],[1,"mb-4"],["type","button",1,"btn","bg-primary","px-4",3,"disabled","click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Remarks"),t.qZA(),t.TgZ(4,"div")(5,"button",3),t.NdJ("click",function(){return i.activeModal.close()}),t._UZ(6,"i",4),t.qZA()()(),t.TgZ(7,"div",5)(8,"form",6),t.ynx(9,7),t.TgZ(10,"div",8)(11,"div",9)(12,"label",10),t._uU(13," Mfg/Batch Date "),t._UZ(14,"span",11),t.qZA(),t._UZ(15,"input",12),t.qZA(),t.TgZ(16,"div",9)(17,"label",10),t._uU(18,"Shift "),t._UZ(19,"span",11),t.qZA(),t._UZ(20,"ng-select",13),t.qZA(),t.TgZ(21,"div",9)(22,"label",10),t._uU(23," Log Book Reference/Pg. No. "),t._UZ(24,"span",11),t.qZA(),t._UZ(25,"input",14),t.qZA()(),t.TgZ(26,"div",15)(27,"div",9)(28,"label",10),t._uU(29," Prepared by (Prod)"),t._UZ(30,"span",11),t.qZA(),t._UZ(31,"input",16),t.qZA(),t.TgZ(32,"div",9)(33,"label",10),t._uU(34," Checked By (QC)"),t._UZ(35,"span",11),t.qZA(),t._UZ(36,"input",17),t.qZA(),t.TgZ(37,"div",18)(38,"div",19)(39,"button",20),t.NdJ("click",function(){return i.openLabValuesModal()}),t._uU(40," Add L a b Values "),t.qZA()()()(),t.BQk(),t._UZ(41,"hr",21),t.qZA(),t.TgZ(42,"div",15)(43,"div",22)(44,"div",23)(45,"button",24),t.NdJ("click",function(){return i.dismissModel()}),t._uU(46," Save & Close "),t.qZA()()()()()()),2&e&&(t.xp6(8),t.Q6J("formGroup",i.form),t.xp6(12),t.Q6J("items",i.shiftOptions)("clearable",!1),t.xp6(25),t.Q6J("disabled",t.DdM(4,K).includes(i.action)))},dependencies:[d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,d.x0,J.w9],encapsulation:2}),h})();var q=p(95346);const R=function(){return["view","edit","rejection","reject","approval","approve","cancel"]};function et(l,h){if(1&l){const o=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",27,28)(5,"span",29),t._uU(6),t.qZA()(),t.TgZ(7,"td",27,30)(9,"span",29),t._uU(10),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"UOMUnitsMaster"),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"input",31),t.NdJ("change",function(){const a=t.CHM(o).$implicit,s=t.oxw();return t.KtG(s.setSelectData(a))}),t.qZA()()()}if(2&l){const o=h.$implicit,e=h.index,i=t.MAs(4),a=t.MAs(8),s=t.oxw();t.xp6(2),t.Oqu(null==o?null:o.itemCode),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",o.itemName)("positionTarget",i),t.xp6(1),t.hij(" ",o.itemName," "),t.xp6(1),t.Udp("width",a.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",o.itemDescription)("positionTarget",a),t.xp6(1),t.hij(" ",o.itemDescription," "),t.xp6(2),t.Oqu(t.lcZ(13,18,null==o?null:o.UOM)),t.xp6(3),t.Oqu(null==o?null:o.MRPQty),t.xp6(2),t.Oqu(null==o?null:o.openQty),t.xp6(2),t.Oqu(null==o?null:o.batchQty),t.xp6(2),t.MGl("name","formValue",s.inkMixingDetails[e],""),t.Q6J("disabled",t.DdM(20,R).includes(s.action))("checked",o.select)}}function B(l,h){1&l&&t._UZ(0,"hr",32)}function Q(l,h){if(1&l){const o=t.EpF();t.TgZ(0,"div",33)(1,"button",34),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.dismissModel())}),t._uU(2,"Save & Close"),t.qZA()()}}const w=function(l,h,o,e){return{page:l,pageSize:h,collection:o,search:e,excelDisplay:"none"}};let Y=(()=>{var l;class h{constructor(e){this.activeModal=e,this.action="edit",this.inkId="",this.inkMixingDetails=[],this.btnDisable=!1,this.page=1,this.pageSize=9,this.collection=0,this.search="",this.column="jobCardNo",this.direction=-1}ngOnInit(){this.inkId&&(this.inkMixingDetails=this.inkMixingDetails.map(e=>(e.select=!1,e.ink==this.inkId&&(e.select=!0),e))),this.collection=this.inkMixingDetails.length}setSelectData(e){this.inkId=e.ink}dismissModel(){this.activeModal.close(this.inkId)}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value;break;case"EXCEL":default:break;case"PAGE":this.page=e.value}}onSort({column:e,direction:i}){this.headers.forEach(a=>{a.sortable!==e&&(a.direction="")}),this.inkMixingDetails=""===i||""===e?this.inkMixingDetails:[...this.inkMixingDetails].sort((a,s)=>{let S="string"==typeof a[e]?a[e].toLowerCase():a[e],N="string"==typeof s[e]?s[e].toLowerCase():s[e];const j=S<N?-1:S>N?1:0;return"asc"===i?j:-j})}}return(l=h).\u0275fac=function(e){return new(e||l)(t.Y36(M.Kz))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-ink-code-details-modal"]],viewQuery:function(e,i){if(1&e&&t.Gf(C.j,5),2&e){let a;t.iGM(a=t.CRH())&&(i.headers=a)}},inputs:{action:"action",inkId:"inkId",inkMixingDetails:"inkMixingDetails"},decls:41,vars:18,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,""],[1,"container-fluid"],[1,"row","justify-content-center"],[1,"col-12","px-0","mt-4"],[1,"px-5","mt-0"],[3,"data","dataChange"],[1,"table-responsive","px-5",2,"min-height","33rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","MRPQty",3,"sort"],["sortable","openQty",3,"sort"],["sortable","batchQty",3,"sort"],[4,"ngFor","ngForOf"],[1,"row"],[1,"col","px-0","mb-3"],["class","line-border",4,"ngIf"],["class","text-center mb-2",4,"ngIf"],[1,"text-start"],["itemName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["itemDescription",""],["type","radio",1,"form-check-input","pointer",3,"disabled","name","checked","change"],[1,"line-border"],[1,"text-center","mb-2"],["type","button",1,"btn","bg-primary","px-5","mb-4",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Select Ink to be prepared"),t.qZA(),t.TgZ(4,"div")(5,"button",3),t.NdJ("click",function(){return i.activeModal.close()}),t._UZ(6,"i",4),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"app-setting-header",10),t.NdJ("dataChange",function(s){return i.eventHeader(s)}),t.qZA()(),t.TgZ(13,"div",11)(14,"table",12)(15,"thead",13)(16,"tr",14)(17,"th",15),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(18,"F20 Ink Code"),t.qZA(),t.TgZ(19,"th",16),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(20,"F20 Ink Name"),t.qZA(),t.TgZ(21,"th",17),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(22," F20 Ink Description "),t.qZA(),t.TgZ(23,"th",18),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(24,"UoM"),t.qZA(),t.TgZ(25,"th",19),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(26,"MRP Qty"),t.qZA(),t.TgZ(27,"th",20),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(28,"Opn Qty"),t.qZA(),t.TgZ(29,"th",21),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(30,"Batch Qty."),t.qZA(),t.TgZ(31,"th"),t._uU(32,"Select"),t.qZA()()(),t.TgZ(33,"tbody"),t.YNc(34,et,22,21,"tr",22),t.ALo(35,"slice"),t.ALo(36,"searchFi1ter"),t.qZA()()()()(),t.TgZ(37,"div",23)(38,"div",24),t.YNc(39,B,1,0,"hr",25),t.qZA()(),t.YNc(40,Q,3,0,"div",26),t.qZA()()()),2&e&&(t.xp6(12),t.Q6J("data",t.l5B(11,w,i.page,i.pageSize,i.collection,i.search)),t.xp6(22),t.Q6J("ngForOf",t.Dn7(35,4,t.xi3(36,8,i.inkMixingDetails,i.search),(i.page-1)*i.pageSize,(i.page-1)*i.pageSize+i.pageSize)),t.xp6(5),t.Q6J("ngIf",!t.DdM(16,R).includes(i.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(17,R).includes(i.action)))},dependencies:[r.sg,r.O5,Z.P,M._L,C.j,r.OU,q.G,A.S],encapsulation:2}),h})();function H(l,h){if(1&l&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&l){const o=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,o.gramQty,"1.2-2")," ")}}const z=function(){return{standalone:!0}};function E(l,h){if(1&l){const o=t.EpF();t.TgZ(0,"input",45),t.NdJ("ngModelChange",function(i){t.CHM(o);const a=t.oxw().$implicit;return t.KtG(a.gramQty=i)})("input",function(){t.CHM(o);const i=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.setQuantity(i))}),t.qZA()}if(2&l){const o=t.oxw().$implicit;t.Q6J("ngModel",o.gramQty)("ngModelOptions",t.DdM(2,z))}}const v=function(){return["view"]};function V(l,h){if(1&l&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",31,39)(7,"span",40),t._uU(8),t.qZA()(),t.TgZ(9,"td",31,41)(11,"span",40),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"UOMUnitsMaster"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"div",42),t.YNc(22,H,3,4,"span",43),t.YNc(23,E,1,3,"input",44),t.qZA()()()),2&l){const o=h.$implicit,e=t.MAs(6),i=t.MAs(10),a=t.oxw(2);t.xp6(2),t.Oqu(o.seq),t.xp6(2),t.Oqu(o.itemCode),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",o.itemName)("positionTarget",e),t.xp6(1),t.hij(" ",o.itemName," "),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",o.itemDescription)("positionTarget",i),t.xp6(1),t.hij(" ",o.itemDescription," "),t.xp6(2),t.hij(" ",t.lcZ(15,17,o.UOM)," "),t.xp6(3),t.hij(" ",o.qty," "),t.xp6(2),t.hij(" ",o.gramUOM," "),t.xp6(3),t.Q6J("ngIf",t.DdM(19,v).includes(a.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(20,v).includes(a.action))}}function $(l,h){if(1&l){const o=t.EpF();t.TgZ(0,"button",46),t.NdJ("click",function(){t.CHM(o);const i=t.oxw(2);return t.KtG(i.reset())}),t._uU(1," Reset "),t.qZA()}}function W(l,h){if(1&l){const o=t.EpF();t.TgZ(0,"button",47),t.NdJ("click",function(){t.CHM(o);const i=t.oxw(2);return t.KtG(i.submit())}),t._uU(1," Save "),t.qZA()}}const G=function(){return["view","edit"]},L=function(l,h,o,e){return{page:l,pageSize:h,collection:o,search:e,excelDisplay:"none"}};function X(l,h){if(1&l){const o=t.EpF();t.ynx(0),t.TgZ(1,"div",3)(2,"div",4)(3,"label",5),t._uU(4),t.ALo(5,"titlecase"),t.qZA()()(),t.TgZ(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"label",11),t._uU(12,"Job Card No. "),t.TgZ(13,"span",12),t._uU(14,"*"),t.qZA()(),t.TgZ(15,"div",13)(16,"div",14)(17,"ng-select",15),t.NdJ("ngModelChange",function(i){t.CHM(o);const a=t.oxw();return t.KtG(a.formData.jobCardNo=i)})("change",function(i){t.CHM(o);const a=t.oxw();return t.KtG(a.setJobCardId(i))}),t.qZA()(),t.TgZ(18,"div",16),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.openJobCardDetailsModal())}),t._UZ(19,"i",17),t.qZA()()(),t.TgZ(20,"div",10)(21,"label",11),t._uU(22,"F20 Ink Code "),t.TgZ(23,"span",12),t._uU(24,"*"),t.qZA()(),t.TgZ(25,"div",13)(26,"div",14)(27,"ng-select",18),t.NdJ("ngModelChange",function(i){t.CHM(o);const a=t.oxw();return t.KtG(a.selectedInkFormulation=i)})("change",function(i){t.CHM(o);const a=t.oxw();return t.KtG(a.setInkDetails(i))}),t.qZA()(),t.TgZ(28,"div",16),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.openInkDetailsModal())}),t._UZ(29,"i",17),t.qZA()()()()(),t.TgZ(30,"div",19)(31,"div",7)(32,"div",20)(33,"label",11),t._uU(34,"F20 Ink Name "),t.TgZ(35,"span",12),t._uU(36,"*"),t.qZA()(),t.TgZ(37,"input",21),t.NdJ("ngModelChange",function(i){const s=t.CHM(o).$implicit;return t.KtG(s.itemName=i)}),t.qZA()(),t.TgZ(38,"div",22)(39,"label",11),t._uU(40,"F20 Ink Description "),t.TgZ(41,"span",12),t._uU(42,"*"),t.qZA()(),t.TgZ(43,"input",21),t.NdJ("ngModelChange",function(i){const s=t.CHM(o).$implicit;return t.KtG(s.itemDescription=i)}),t.qZA()(),t.TgZ(44,"div",23)(45,"label",11),t._uU(46,"UoM "),t.TgZ(47,"span",12),t._uU(48,"*"),t.qZA()(),t.TgZ(49,"input",21),t.NdJ("ngModelChange",function(i){const s=t.CHM(o).$implicit;return t.KtG(s.UOM=i)}),t.qZA()(),t.TgZ(50,"div",23)(51,"label",11),t._uU(52," Batch Qty "),t.TgZ(53,"span",12),t._uU(54,"*"),t.qZA()(),t.TgZ(55,"input",24),t.NdJ("ngModelChange",function(i){const s=t.CHM(o).$implicit;return t.KtG(s.batchQty=i)}),t.qZA()()()()()(),t._UZ(56,"hr",25),t.TgZ(57,"app-setting-header",26),t.NdJ("dataChange",function(i){t.CHM(o);const a=t.oxw();return t.KtG(a.eventHeader(i))}),t.qZA(),t.TgZ(58,"div",27)(59,"table",28)(60,"thead",29)(61,"tr",30)(62,"th"),t._uU(63,"Seq."),t.qZA(),t.TgZ(64,"th"),t._uU(65,"Item Code"),t.qZA(),t.TgZ(66,"th",31),t._uU(67,"Item Name"),t.qZA(),t.TgZ(68,"th",31),t._uU(69,"Item Description"),t.qZA(),t.TgZ(70,"th"),t._uU(71,"UoM"),t.qZA(),t.TgZ(72,"th"),t._uU(73,"Quantity"),t.qZA(),t.TgZ(74,"th"),t._uU(75,"UoM"),t.qZA(),t.TgZ(76,"th"),t._uU(77,"Quantity"),t.qZA()()(),t.TgZ(78,"tbody"),t.YNc(79,V,24,21,"tr",32),t.ALo(80,"slice"),t.ALo(81,"searchFi1ter"),t.qZA()()(),t._UZ(82,"hr",25),t.TgZ(83,"div",7)(84,"div",33),t._UZ(85,"button",34),t.TgZ(86,"button",35),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.openRemarksDetailsModal())}),t._uU(87," Remarks "),t.qZA()(),t.TgZ(88,"div",36),t.YNc(89,$,2,0,"button",37),t.YNc(90,W,2,0,"button",38),t.qZA()(),t.BQk()}if(2&l){const o=h.$implicit,e=t.oxw();t.xp6(4),t.hij("Ink Mixing (",t.lcZ(5,19,e.action),") "),t.xp6(13),t.Q6J("items",e.masterData.JCOptions)("clearable",!1)("ngModel",e.formData.jobCardNo)("disabled",t.DdM(28,G).includes(e.action)),t.xp6(10),t.Q6J("items",e.inkMixingDetails)("clearable",!1)("ngModel",e.selectedInkFormulation)("disabled",t.DdM(29,v).includes(e.action)),t.xp6(10),t.Q6J("ngModel",o.itemName),t.xp6(6),t.Q6J("ngModel",o.itemDescription),t.xp6(6),t.Q6J("ngModel",o.UOM),t.xp6(6),t.Q6J("ngModel",o.batchQty)("disabled",t.DdM(30,v).includes(e.action)),t.xp6(2),t.Q6J("data",t.l5B(31,L,e.page,e.pageSize,e.inkMixingDetails[e.inkPage-1].inkDetails.length,e.search)),t.xp6(22),t.Q6J("ngForOf",t.Dn7(80,21,t.xi3(81,25,o.inkDetails,e.search),(e.page-1)*e.pageSize,(e.page-1)*e.pageSize+e.pageSize))("ngForTrackBy",e.trackByFn),t.xp6(10),t.Q6J("ngIf",!t.DdM(36,v).includes(e.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(37,v).includes(e.action))}}let tt=(()=>{var l;class h{constructor(e,i,a,s,S,N,j,at,rt){this.inkMixingService=e,this.router=i,this.activatedRoute=a,this.spinner=s,this.toastService=S,this.validationService=N,this.modalService=j,this.utilityService=at,this.location=rt,this.submitted=!1,this.action="create",this.page=1,this.inkPage=1,this.pageSize=5,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.selectedJobCardDetails={},this.inkMixingDetails=[{_id:"",ink:"",itemCode:"",itemName:"",itemDescription:"",UOM:"",MRPQty:0,openQty:0,batchQty:0,inkDetails:[]}],this.masterData={autoIncrementNo:"",shiftOptions:[],JCOptions:[]},this.selectedInkFormulation=null,this.formData={_id:null,jobCard:null,jobCardNo:null,inkMixingCode:"000000"}}ngOnInit(){this.getInitialData()}navigateTo(e,i,a){this.router.navigate([e])}reset(){this.selectedInkFormulation=null,this.formData={_id:null,jobCard:null,jobCardNo:null,inkMixingCode:"000000"},this.inkMixingDetails=[{_id:"",ink:"",itemCode:"",itemName:"",itemDescription:"",UOM:"",MRPQty:0,openQty:0,batchQty:0,inkDetails:[]}],this.collection=this.inkMixingDetails.length,this.getInitialData()}submit(){if(this.submitted=!0,!this.formData.jobCardNo)return void this.toastService.warning("Job Card No. is required");if(!this.selectedInkFormulation)return void this.toastService.warning("F20 Ink Code is required");if(this.inkMixingDetails.some(i=>0==i.inkDetails.length))return void this.toastService.warning("F20 Ink Code Table Data is required");let e={...this.formData,inkMixingDetails:this.inkMixingDetails};e._id?this.update(e):(delete e._id,this.create(e))}trackByFn(e,i){return i?._id}create(e){this.spinner.show(),this.inkMixingService.create(e).subscribe(i=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(i.message),this.location.back()})}update(e){this.spinner.show(),this.inkMixingService.update(e._id,e).subscribe(i=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(i.message),this.location.back()})}getInitialData(){this.spinner.show(),this.inkMixingService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.collection=this.inkMixingDetails.length,this.activatedRoute.queryParams.pipe((0,c.z)(i=>(this.action=i.action,this.utilityService.accessDenied(this.action),i.id?this.inkMixingService.getById(i.id):(0,_.of)({})))).subscribe(i=>{this.spinner.hide(),0!=Object.keys(i).length&&(this.formData=i,this.inkMixingDetails=i.inkMixingDetails.map(a=>(a.remarks&&a.remarks.manufacturingDate&&(a.remarks.manufacturingDate=this.utilityService.getFormatDate(a.remarks.manufacturingDate,"YYYY-MM-DD")),a)),this.selectedInkFormulation=i.inkMixingDetails[0].ink,this.collection=this.inkMixingDetails.length)})})}setJobCardId(e){this.formData.jobCard=e?._id,this.spinner.show(),this.inkMixingService.getInkDataBySKUId({SKUId:e?.SKU,batchQty:e?.batchQty}).subscribe(i=>{i.length>0?(this.inkMixingDetails=i,this.selectedInkFormulation=i[0].ink):this.inkMixingDetails=[{_id:"",ink:"",itemCode:"",itemName:"",itemDescription:"",UOM:"",MRPQty:0,openQty:0,batchQty:0,inkDetails:[]}],this.spinner.hide()})}setInkDetails(e){let i=this.inkMixingDetails.findIndex(a=>a.ink==e.ink);-1!=i&&(this.inkPage=i+1)}setQuantity(e){let i=this.inkMixingDetails[this.inkPage-1].inkDetails.findIndex(a=>a.item==e.item);["KG","LTR"].includes(e.UOM.toUpperCase())&&(this.inkMixingDetails[this.inkPage-1].inkDetails[i].qty=e.gramQty/1e3)}openJobCardDetailsModal(){const e=this.modalService.open(g.Q,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.selectedJobCardDetails=this.selectedJobCardDetails,e.componentInstance.JCOptions=this.masterData.JCOptions,e.componentInstance.jobCard=this.formData.jobCard,e.result.then(i=>{i&&(this.selectedJobCardDetails=i?.selectedJobCardDetails,this.formData.jobCard=i?.selectedJobCardDetails?._id,this.formData.jobCardNo=i?.selectedJobCardDetails?.jobCardNo,this.setJobCardId(i?.selectedJobCardDetails))},i=>{})}openInkDetailsModal(){const e=this.modalService.open(Y,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});e.componentInstance.action="edit"==this.action?"create":this.action,e.componentInstance.inkMixingDetails=this.inkMixingDetails,e.componentInstance.inkId=this.inkMixingDetails[this.inkPage-1].ink,e.result.then(i=>{if(i){this.selectedInkFormulation=i;let a=this.inkMixingDetails.findIndex(s=>s.ink==i);-1!=a&&(this.inkPage=a+1)}},i=>{})}openRemarksDetailsModal(){const e=this.modalService.open(P,{centered:!0,size:"lg",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.shiftOptions=this.masterData.shiftOptions,e.componentInstance.remarksDetails={remarks:this.inkMixingDetails[this.inkPage-1].remarks,labValues:this.inkMixingDetails[this.inkPage-1].labValues},e.result.then(i=>{i&&(this.inkMixingDetails[this.inkPage-1].remarks=i?.remarks,this.inkMixingDetails[this.inkPage-1].labValues=i?.labValues)},i=>{})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value;break;case"EXCEL":default:break;case"PAGE":this.page=e.value}}}return(l=h).\u0275fac=function(e){return new(e||l)(t.Y36(x.or),t.Y36(n.F0),t.Y36(n.gz),t.Y36(b.V),t.Y36(b.kl),t.Y36(I.RJ),t.Y36(M.FF),t.Y36(b.tI),t.Y36(r.Ye))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-ink-mixing-form"]],decls:4,vars:5,consts:[[1,"formCard","card"],[1,"set-remaining-margin"],[4,"ngFor","ngForOf"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row"],[1,"col-4","pe-5"],[1,"row","pe-4"],[1,"col-6"],[1,"form-label"],[1,"text-danger"],[1,"d-flex","align-items-center"],[1,"col-11"],["bindLabel","jobCardNo","bindValue","jobCardNo",3,"items","clearable","ngModel","disabled","ngModelChange","change"],["id","basic-addon1",1,"set-input-group-text","input-group-text","bg-primary","pointer","col-auto",2,"height","2.9rem",3,"click"],["aria-hidden","true",1,"fa","fa-search","text-white","fs-4"],["bindLabel","itemCode","bindValue","ink",3,"items","clearable","ngModel","disabled","ngModelChange","change"],[1,"col-8","ps-0"],[1,"col-4","pe-0"],["type","text","readonly","",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-4"],[1,"col-2","ps-0"],["type","text",1,"form-control",3,"ngModel","disabled","ngModelChange"],[1,"row","line-border"],[3,"data","dataChange"],[1,"table-responsive",2,"min-height","20rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],[1,"text-start"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-6","d-flex"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","px-5",3,"click"],[1,"col-md-auto","ms-auto"],["type","button","class","btn bg-primary px-5 me-3",3,"click",4,"ngIf"],["type","button","class","btn bg-primary px-5",3,"click",4,"ngIf"],["itemName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["itemDescription",""],[1,"d-flex","justify-content-center"],[4,"ngIf"],["class","form-control form-control-sm w-25","type","number",3,"ngModel","ngModelOptions","ngModelChange","input",4,"ngIf"],["type","number",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelOptions","ngModelChange","input"],["type","button",1,"btn","bg-primary","px-5","me-3",3,"click"],["type","button",1,"btn","bg-primary","px-5",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,X,91,38,"ng-container",2),t.ALo(3,"slice"),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngForOf",t.Dn7(3,1,i.inkMixingDetails,i.inkPage-1,i.inkPage)))},dependencies:[r.sg,r.O5,Z.P,M._L,d.Fj,d.wV,d.JJ,d.On,J.w9,r.OU,r.JJ,r.rS,q.G,A.S],encapsulation:2}),h})();var u=p(19964),it=p(56208);const nt=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:m},{path:"form",component:tt,resolve:{accessScreen:u.xr}}];let ot=(()=>{var l;class h{}return(l=h).\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[r.ez,n.Bz.forChild(nt),it.m]}),h})()},13107:(F,D,p)=>{p.d(D,{t:()=>r});const r={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(F,D,p)=>{p.d(D,{J:()=>r});const r=({data:n,headers:C,widths:T,title:y})=>({tableData:{widths:T,headerRows:1,body:[C.map(x=>({text:x.header,style:"header"})),...n.map(x=>C.map(Z=>({style:"subheader",text:x[Z.key]})))]},title:y})},34183:(F,D,p)=>{p.d(D,{yz:()=>R,oO:()=>b,rv:()=>t,cY:()=>tt,ho:()=>X,R6:()=>H,M5:()=>Y,MO:()=>$,GF:()=>V,YJ:()=>A,kQ:()=>O,Y3:()=>_,Wb:()=>c,i4:()=>J,mU:()=>I});var r=p(13107),n=p(28402);let C=["*","*","*","*","*","*","*","*"],T="Goods Requisition",y=[{header:"GR No.",key:"GRNumber",...r.t},{header:"GR Date",key:"GRDateS",...r.t},{header:"Location (Store)",key:"deliveryLocation",...r.t},{header:"Department",key:"department",...r.t},{header:"Remarks/Order Reference",key:"salesOrderSKUReference",...r.t},{header:"Status",key:"GRStatus",...r.t}];const t=u=>({title:T,csvData:u,headers:y}),b=u=>(0,n.J)({data:u,headers:y,widths:C,title:T});let x=["*","*","*","*","*","*","*","*"],Z="Child Part Production",M=[{header:"Process Name",key:"processName",...r.t},{header:"Machine Name",key:"machineName",...r.t},{header:"Prod. Date",key:"productionDate",...r.t},{header:"Shift",key:"productionShift",...r.t},{header:"Operating Staff",key:"operatingStaff",...r.t},{header:"Remarks",key:"remarks",...r.t},{header:"Status",key:"status",...r.t}];const O=u=>({title:Z,csvData:u,headers:M}),A=u=>(0,n.J)({data:u,headers:M,widths:x,title:Z});let k=["*","*","*","*","*","*","*","*"],f="Gr. Child Part Production",m=[{header:"Process Name",key:"processName",...r.t},{header:"Machine Name",key:"machineName",...r.t},{header:"Prod. Date",key:"productionDate",...r.t},{header:"Shift",key:"productionShift",...r.t},{header:"Operating Staff",key:"operatingStaff",...r.t},{header:"Remarks",key:"remarks",...r.t},{header:"Status",key:"status",...r.t}];const c=u=>({title:f,csvData:u,headers:m}),_=u=>(0,n.J)({data:u,headers:m,widths:k,title:f});let g=["*","*","*","*","*","*","*","*"],d="SKU Production",U=[{header:"Process Name",key:"processName",...r.t},{header:"Machine Name",key:"machineName",...r.t},{header:"Prod. Date",key:"productionDate",...r.t},{header:"Shift",key:"productionShift",...r.t},{header:"Operating Staff",key:"operatingStaff",...r.t},{header:"Remarks",key:"remarks",...r.t},{header:"Status",key:"status",...r.t}];const I=u=>({title:d,csvData:u,headers:U}),J=u=>(0,n.J)({data:u,headers:U,widths:g,title:d});let q=[{header:"#",key:"GRLineNumber",...r.t},{header:"Item Code",key:"itemCode",...r.t},{header:"Item Name",key:"itemName",...r.t},{header:"Item Description",key:"itemDescription",...r.t},{header:"Conversion Of Units",key:"conversionOfUnits",...r.t},{header:"UoM",key:"primaryUnit",...r.t},{header:"IR Qty.",key:"closedIRQty",...r.t},{header:"GR Qty.",key:"GRQty",...r.t}];const R=u=>({title:"Goods Requisition",csvData:u,headers:q});let B=["*","*","*","*","*","*","*","*"],Q="Ink Mixing",w=[{header:"JC No.",key:"jobCardNo",...r.t},{header:"F20 Ink Code",key:"itemCode",...r.t},{header:"F20 Ink Name",key:"itemName",...r.t},{header:"F20 Ink Description",key:"itemDescription",...r.t},{header:"UoM",key:"UOM",...r.t},{header:"Batch Qty.",key:"batchQty",...r.t},{header:"Batch Date",key:"batchDate",...r.t},{header:"Log Book Ref",key:"logBookRef",...r.t}];const Y=u=>({title:Q,csvData:u,headers:w}),H=u=>(0,n.J)({data:u,headers:w,widths:B,title:Q});let z=["*","*","*","*","*","*","*"],E="Job Card Entry",v=[{header:"Job Card No",key:"jobCardNo",...r.t},{header:"SKU No",key:"SKUNo",...r.t},{header:"SKU Name",key:"SKUName",...r.t},{header:"SKU Description",key:"SKUDescription",...r.t},{header:"UoM",key:"UOM",...r.t},{header:"Batch I/P Qty.",key:"totalBatchQuantity",...r.t},{header:"Batch O/P Qty.",key:"batchOutputQty",...r.t},{header:"Batch Number",key:"batchNumber",...r.t},{header:"Status",key:"status",...r.t}];const V=u=>({title:E,csvData:u,headers:v}),$=u=>(0,n.J)({data:u,headers:v,widths:z,title:E});let W=["*","*","*","*","*","*"],G="Goods Transfer Request (Intra) Report",L=[{header:"GT Req #",key:"GTRequestNo",...r.t},{header:"GT Request Dt.",key:"GTRequestDate",...r.t},{header:"Location",key:"location",...r.t},{header:"From Department",key:"fromDepartment",...r.t},{header:"To Department",key:"toDepartment",...r.t},{header:"Status",key:"status",...r.t}];const X=u=>({title:G,csvData:u,headers:L}),tt=u=>(0,n.J)({data:u,headers:L,widths:W,title:G})}}]);