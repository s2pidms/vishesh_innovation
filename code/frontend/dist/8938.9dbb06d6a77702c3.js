"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8938],{91090:(C,h,s)=>{s.r(h),s.d(h,{ShortPoClosingModule:()=>O});var c=s(96814),m=s(1076),g=s(43818),l=s(60095),t=s(65879),u=s(37285),b=s(16897),p=s(48720),d=s(99328);let v=(()=>{class r{constructor(e,n,o,a,i){this.activeModal=e,this.validationService=n,this.purchaseOrderService=o,this.toastService=a,this.spinner=i,this.action="",this.condition="",this.tableData={},this.btnDisable=!1,this.page=1,this.pageSize=4,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.itemId="",this.form=new l.nJ({canceledReason:new l.p4("",[l.kI.required])}),this.findFormErrors=[{message:"Cancel Reason is Required",key:"canceledReason"}]}ngOnInit(){this.collection=this.tableData.length,"view"==this.action&&this.form.disable()}save(){if(this.validationService.checkErrors(this.form,this.findFormErrors))return;this.spinner.show();let e=this.tableData;e.lineStatus="Cancelled",e.canceledReason=this.form.value.canceledReason,e.canceledQty=this.tableData.balancedQty,e.balancedQty=0,this.purchaseOrderService.updatePODetailsLineStatusById(this.tableData._id,e).subscribe(n=>{this.spinner.hide(),this.toastService.success(n.message),this.activeModal.close()})}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(u.Kz),t.Y36(b.RJ),t.Y36(p.x$),t.Y36(d.kl),t.Y36(d.V))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-cancel-po-line"]],inputs:{action:"action",condition:"condition",tableData:"tableData"},decls:54,vars:12,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"row"],[3,"formGroup"],[1,""],[1,"px-5","mt-4"],[1,"table-responsive","px-5",2,"min-height","15rem"],[1,"table","table-bordered","table-sticky"],[1,"text-start"],[1,"col","px-5"],[1,"form-label","mb-3"],[1,"text-danger"],["type","text","formControlName","canceledReason",1,"form-control"],[1,"line-border","my-3","px-5"],[1,"text-center","d-grid","gap-2","d-md-block","mb-4"],["type","button",1,"btn","btn-primary","px-5","me-4",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Are you sure that you want to Cancel PO Line Item?"),t.qZA(),t.TgZ(4,"div")(5,"button",3),t.NdJ("click",function(){return o.activeModal.close(o.tableData)}),t._UZ(6,"i",4),t.qZA()()(),t.TgZ(7,"div",5)(8,"Form",6)(9,"div",7)(10,"h5",8),t._uU(11,"PO Line Details:"),t.qZA(),t.TgZ(12,"div",9)(13,"table",10)(14,"tbody")(15,"tr")(16,"td",11),t._uU(17,"PO #"),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA()(),t.TgZ(20,"tr")(21,"td",11),t._uU(22,"PO Date"),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.qZA()(),t.TgZ(25,"tr")(26,"td",11),t._uU(27,"Item Name"),t.qZA(),t.TgZ(28,"td"),t._uU(29),t.qZA()(),t.TgZ(30,"tr")(31,"td",11),t._uU(32,"Balance Qty"),t.qZA(),t.TgZ(33,"td"),t._uU(34),t.ALo(35,"number"),t.qZA()(),t.TgZ(36,"tr")(37,"td",11),t._uU(38,"Cancel Qty"),t.qZA(),t.TgZ(39,"td"),t._uU(40),t.ALo(41,"number"),t.qZA()()()()(),t.TgZ(42,"div",12)(43,"label",13),t._uU(44," Cancellation Reason"),t.TgZ(45,"span",14),t._uU(46,"*"),t.qZA()(),t._UZ(47,"input",15),t.qZA(),t._UZ(48,"hr",16),t.TgZ(49,"div",17)(50,"button",18),t.NdJ("click",function(){return o.activeModal.close(o.tableData)}),t._uU(51," Close "),t.qZA(),t.TgZ(52,"button",19),t.NdJ("click",function(){return o.save()}),t._uU(53,"Save"),t.qZA()()()()()()),2&n&&(t.xp6(8),t.Q6J("formGroup",o.form),t.xp6(11),t.Oqu(null==o.tableData?null:o.tableData.POLineNumber),t.xp6(5),t.Oqu(null==o.tableData?null:o.tableData.PODate),t.xp6(5),t.Oqu(null==o.tableData?null:o.tableData.itemName),t.xp6(5),t.Oqu(t.xi3(35,6,null==o.tableData?null:o.tableData.balancedQty,"1.2-2")),t.xp6(6),t.Oqu(t.xi3(41,9,null==o.tableData?null:o.tableData.balancedQty,"1.2-2")))},dependencies:[l.Fj,l.JJ,l.JL,l.sg,l.u,c.JJ],encapsulation:2})}return r})();var f=s(25116),_=s(86514),T=s(88059),A=s(53421);function S(r,Z){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td",18,19)(11,"span",20),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"number"),t.qZA(),t.TgZ(18,"td",18,21)(20,"span",20),t._uU(21),t.qZA()(),t.TgZ(22,"td")(23,"div",22),t._UZ(24,"button",23),t.TgZ(25,"div",24)(26,"a",25),t.NdJ("click",function(){const a=t.CHM(e).$implicit,i=t.oxw();return t.KtG(i.openCancelPoModal(a))}),t._UZ(27,"i",26),t._uU(28," Cancel "),t.qZA()()()()()}if(2&r){const e=Z.$implicit,n=t.MAs(10),o=t.MAs(19),a=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.PODate),t.xp6(2),t.Oqu(null==e?null:e.PONumber),t.xp6(2),t.Oqu(null==e?null:e.POLineNumber),t.xp6(2),t.Oqu(null==e?null:e.itemCode),t.xp6(1),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("positionTarget",n)("ngbTooltip",e.itemName),t.xp6(1),t.hij(" ",e.itemName," "),t.xp6(2),t.Oqu(null==e?null:e.balancedQty),t.xp6(2),t.Oqu(t.xi3(17,19,null==e?null:e.lineValue,"1.2-2")),t.xp6(2),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",e.supplierName),t.xp6(1),t.hij(" ",e.supplierName," "),t.xp6(5),t.ekj("disable","Cancelled"===(null==e?null:e.POStatus)),t.Q6J("accessType",a.rolePermissionActions.approveAction)}}const P=function(r,Z,e,n){return{page:r,pageSize:Z,collection:e,search:n,type:"list"}};let y=(()=>{class r{constructor(e,n,o,a,i,q,N,x,J){this.purchaseService=e,this.router=n,this.toastService=o,this.spinner=a,this.exportExcelService=i,this.activeModal=q,this.modalService=N,this.activatedRoute=x,this.exportToPDFService=J,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.statusArray=["Rejected","GRN Partial Created","GRN Created","Closed","Cancelled"],this.rolePermissionActions=f.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,n,o){this.router.navigate([e],{queryParams:{id:n?._id,action:o}})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1,n=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,statusArray:this.statusArray,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.purchaseService.getAllShortPOForClosing(o).subscribe(a=>{"EXCEL"==n?this.excelDownload(a.rows):"PDF"==n?this.pdfDownload(a.rows):(this.tableData=a.rows,this.collection=a.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}trackByFn(e,n){return n?._id}update(e,n){"Approved"===e?.POStatus&&(e.POStatus=n,this.spinner.show(),this.purchaseService.update(e._id,e).subscribe(o=>{this.toastService.success(o.message),this.getAll(),this.spinner.hide()}))}excelDownload(e){this.exportExcelService.exportExcel((0,_.Ow)(e))}pdfDownload(e){let n=(0,_.m0)(e);this.exportToPDFService.generatePdf(n.tableData,n.title)}onSort({column:e,direction:n}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==n?1:-1,this.getAll()}openCancelPoModal(e){const n=this.modalService.open(v,{centered:!0,backdrop:"static",keyboard:!1,windowClass:"modelPage"});n.componentInstance.tableData=e,n.result.then(o=>{this.getAll()},o=>{})}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(p.x$),t.Y36(m.F0),t.Y36(d.kl),t.Y36(d.V),t.Y36(d.Ol),t.Y36(u.Kz),t.Y36(u.FF),t.Y36(m.gz),t.Y36(d.$L))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-short-po-closing"]],viewQuery:function(n,o){if(1&n&&t.Gf(g.j,5),2&n){let a;t.iGM(a=t.CRH())&&(o.headers=a)}},decls:30,vars:8,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],[1,"row","line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","PODateS",3,"sort"],["sortable","PONumber",3,"sort"],["sortable","POLineNumber",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","balancedQty",3,"sort"],["sortable","lineValue",3,"sort"],["sortable","supplierName",1,"text-start",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["supplierName",""],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-close","fa-lg","text-primary"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Short PO Closing"),t.qZA()(),t._UZ(4,"hr",3),t.TgZ(5,"div",4)(6,"app-setting-header",5),t.NdJ("dataChange",function(i){return o.eventHeader(i)}),t.qZA(),t.TgZ(7,"table",6)(8,"thead",7)(9,"tr",8)(10,"th",9),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(11,"PO Date"),t.qZA(),t.TgZ(12,"th",10),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(13,"PO #"),t.qZA(),t.TgZ(14,"th",11),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(15,"Line #"),t.qZA(),t.TgZ(16,"th",12),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(17,"Item #"),t.qZA(),t.TgZ(18,"th",13),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(19,"Item Name #"),t.qZA(),t.TgZ(20,"th",14),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(21,"Bal Qty"),t.qZA(),t.TgZ(22,"th",15),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(23,"Bal Value (\u20b9)"),t.qZA(),t.TgZ(24,"th",16),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(25,"Supplier Name"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Action"),t.qZA()()(),t.TgZ(28,"tbody"),t.YNc(29,S,29,22,"tr",17),t.qZA()()()()),2&n&&(t.xp6(6),t.Q6J("data",t.l5B(3,P,o.page,o.pageSize,o.collection,o.search)),t.xp6(23),t.Q6J("ngForOf",o.tableData)("ngForTrackBy",o.trackByFn))},dependencies:[c.sg,T.P,u._L,g.j,A.J,c.JJ],encapsulation:2})}return r})();var D=s(56208);const U=[{path:"",component:y}];let O=(()=>{class r{static#t=this.\u0275fac=function(n){return new(n||r)};static#e=this.\u0275mod=t.oAB({type:r});static#o=this.\u0275inj=t.cJS({providers:[u.Kz],imports:[c.ez,m.Bz.forChild(U),D.m]})}return r})()},13107:(C,h,s)=>{s.d(h,{t:()=>c});const c={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(C,h,s)=>{s.d(h,{J:()=>c});const c=({data:m,headers:g,widths:l,title:t})=>({tableData:{widths:l,headerRows:1,body:[g.map(p=>({text:p.header,style:"header"})),...m.map(p=>g.map(d=>({style:"subheader",text:p[d.key]})))]},title:t})}}]);