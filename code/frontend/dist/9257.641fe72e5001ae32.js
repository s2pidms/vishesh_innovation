"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9257],{99257:(O,d,l)=>{l.r(d),l.d(d,{MapProcessNameModule:()=>y});var g=l(96814),u=l(1076),m=l(43818),M=l(25116),P=l(97106),e=l(65879),c=l(99328),p=l(37398);let v=(()=>{var a;class n{constructor(t){this.http=t,this.routes={createPath:"/planning/processMaster/create",getAllPath:"/planning/processMaster/getAll",getAllMapProcessNamesPath:"/planning/processMaster/getAllMapProcessNames",getAllMasterDataPath:"/planning/processMaster/getAllMasterData",updatePath:s=>`/planning/processMaster/update/${s}`,getByIdPath:s=>`/planning/processMaster/getById/${s}`,deletePath:s=>`/planning/processMaster/delete/${s}`}}create(t){return this.http.post(this.routes.createPath,t).pipe((0,p.U)(s=>s))}getAll(t){return this.http.get(this.routes.getAllPath,t).pipe((0,p.U)(s=>s))}getAllMapProcessNames(t){return this.http.get(this.routes.getAllMapProcessNamesPath,t).pipe((0,p.U)(s=>s))}getAllMasterData(t){return this.http.get(this.routes.getAllMasterDataPath,t).pipe((0,p.U)(s=>s))}getMonthlySupplierEvaluation(t){return this.http.get(this.routes.getMonthlySupplierEvaluationPath,t).pipe((0,p.U)(s=>s))}update(t,s){return this.http.put(this.routes.updatePath(t),s).pipe((0,p.U)(r=>r))}getById(t){return this.http.get(this.routes.getByIdPath(t)).pipe((0,p.U)(s=>s))}delete(t){return this.http.delete(this.routes.deletePath(t)).pipe((0,p.U)(s=>s))}}return(a=n).\u0275fac=function(t){return new(t||a)(e.LFG(c.sM))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),n})();var f=l(88059),h=l(60095);function N(a,n){if(1&a&&(e.TgZ(0,"option",21),e._uU(1),e.qZA()),2&a){const o=n.$implicit;e.Q6J("value",o.value),e.xp6(1),e.hij(" ",null==o?null:o.label," ")}}function A(a,n){if(1&a){const o=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td")(6,"select",13),e.NdJ("ngModelChange",function(s){const i=e.CHM(o).$implicit;return e.KtG(i.processOriginalName=s)}),e.TgZ(7,"option",14),e._uU(8,"Select Process Original Name"),e.qZA(),e.YNc(9,N,2,2,"option",15),e.qZA()(),e.TgZ(10,"td")(11,"div",16),e._UZ(12,"button",17),e.TgZ(13,"div",18)(14,"a",19),e.NdJ("click",function(){const r=e.CHM(o).$implicit,i=e.oxw();return e.KtG(i.update(r,{processOriginalName:r.processOriginalName}))}),e._UZ(15,"i",20),e._uU(16," Update "),e.qZA()()()()()}if(2&a){const o=n.$implicit,t=e.oxw();e.xp6(2),e.Oqu(null==o?null:o.processId),e.xp6(2),e.Oqu(null==o?null:o.processName),e.xp6(2),e.Q6J("ngModel",o.processOriginalName),e.xp6(3),e.Q6J("ngForOf",t.processOptions)}}const C=function(a,n,o,t){return{page:a,pageSize:n,collection:o,search:t,type:"list"}};let b=(()=>{var a;class n{constructor(t,s,r,i,S,U,F){this.exportExcelService=t,this.router=s,this.spinner=r,this.activatedRoute=i,this.mapProcessNameService=S,this.exportToPDFService=U,this.toastService=F,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.processOptions=[],this.rolePermissionActions=M.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getAll(t=!1,s=""){this.spinner.show();let r={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:t};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.mapProcessNameService.getAllMapProcessNames(r).subscribe(i=>{"EXCEL"==s?this.excelDownload(i.rows):"PDF"==s?this.pdfDownload(i.rows):(this.processOptions=i.processOptions,this.tableData=i.rows,this.collection=i.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateTo(t,s,r){this.router.navigate([t],{queryParams:{id:s?._id,action:r}})}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=t.value,this.getAll()}}trackByFn(t,s){return s?._id}excelDownload(t){this.exportExcelService.exportExcel((0,P.ri)(t))}pdfDownload(t){let s=(0,P.RJ)(t);this.exportToPDFService.generatePdf(s.tableData,s.title)}onSort({column:t,direction:s}){this.headers.forEach(r=>{r.sortable!==t&&(r.direction="")}),this.column=t,this.direction="asc"==s?1:-1,this.getAll()}update(t,s){this.spinner.show(),this.mapProcessNameService.update(t._id,s).subscribe(r=>{this.toastService.success(r.message),this.spinner.hide()})}}return(a=n).\u0275fac=function(t){return new(t||a)(e.Y36(c.Ol),e.Y36(u.F0),e.Y36(c.V),e.Y36(u.gz),e.Y36(v),e.Y36(c.$L),e.Y36(c.kl))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-map-process-name-list"]],viewQuery:function(t,s){if(1&t&&e.Gf(m.j,5),2&t){let r;e.iGM(r=e.CRH())&&(s.headers=r)}},decls:20,vars:8,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-secondary"],[1,"text-white"],["sortable","processId",3,"sort"],["sortable","processName",3,"sort"],["sortable","processOriginalName",1,"text-start",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"form-select",3,"ngModel","ngModelChange"],["value","null","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],[3,"value"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Map Process Name Summary"),e.qZA()(),e._UZ(4,"hr",3),e.TgZ(5,"div",4)(6,"app-setting-header",5),e.NdJ("dataChange",function(i){return s.eventHeader(i)}),e.qZA(),e.TgZ(7,"table",6)(8,"thead",7)(9,"tr",8)(10,"th",9),e.NdJ("sort",function(i){return s.onSort(i)}),e._uU(11,"Process ID"),e.qZA(),e.TgZ(12,"th",10),e.NdJ("sort",function(i){return s.onSort(i)}),e._uU(13,"Process Name"),e.qZA(),e.TgZ(14,"th",11),e.NdJ("sort",function(i){return s.onSort(i)}),e._uU(15," Map Process Original Name "),e.qZA(),e.TgZ(16,"th"),e._uU(17,"Action"),e.qZA()()(),e.TgZ(18,"tbody"),e.YNc(19,A,17,4,"tr",12),e.qZA()()()()),2&t&&(e.xp6(6),e.Q6J("data",e.l5B(3,C,s.page,s.pageSize,s.collection,s.search)),e.xp6(13),e.Q6J("ngForOf",s.tableData)("ngForTrackBy",s.trackByFn))},dependencies:[g.sg,f.P,h.YN,h.Kr,h.EJ,h.JJ,h.On,m.j]}),n})();var Z=l(56208);const T=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:b}];let y=(()=>{var a;class n{}return(a=n).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[g.ez,u.Bz.forChild(T),Z.m]}),n})()}}]);