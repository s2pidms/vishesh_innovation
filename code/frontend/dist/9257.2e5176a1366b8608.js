"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9257],{99257:(U,d,l)=>{l.r(d),l.d(d,{MapProcessNameModule:()=>y});var g=l(96814),u=l(1076),m=l(43818),M=l(25116),P=l(9531),e=l(65879),c=l(2742),p=l(37398);let N=(()=>{var a;class n{constructor(t){this.http=t,this.routes={createPath:"/planning/processMaster/create",getAllPath:"/planning/processMaster/getAll",getAllMapProcessNamesPath:"/planning/processMaster/getAllMapProcessNames",getAllMasterDataPath:"/planning/processMaster/getAllMasterData",updatePath:s=>`/planning/processMaster/update/${s}`,getByIdPath:s=>`/planning/processMaster/getById/${s}`,deletePath:s=>`/planning/processMaster/delete/${s}`}}create(t){return this.http.post(this.routes.createPath,t).pipe((0,p.U)(s=>s))}getAll(t){return this.http.get(this.routes.getAllPath,t).pipe((0,p.U)(s=>s))}getAllMapProcessNames(t){return this.http.get(this.routes.getAllMapProcessNamesPath,t).pipe((0,p.U)(s=>s))}getAllMasterData(t){return this.http.get(this.routes.getAllMasterDataPath,t).pipe((0,p.U)(s=>s))}getMonthlySupplierEvaluation(t){return this.http.get(this.routes.getMonthlySupplierEvaluationPath,t).pipe((0,p.U)(s=>s))}update(t,s){return this.http.put(this.routes.updatePath(t),s).pipe((0,p.U)(o=>o))}getById(t){return this.http.get(this.routes.getByIdPath(t)).pipe((0,p.U)(s=>s))}delete(t){return this.http.delete(this.routes.deletePath(t)).pipe((0,p.U)(s=>s))}}return(a=n).\u0275fac=function(t){return new(t||a)(e.LFG(c.sM))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),n})();var f=l(88059),h=l(60095);function v(a,n){if(1&a&&(e.TgZ(0,"option",22),e._uU(1),e.qZA()),2&a){const r=n.$implicit;e.Q6J("value",r.value),e.xp6(1),e.hij(" ",null==r?null:r.label," ")}}function A(a,n){if(1&a&&(e.TgZ(0,"option",22),e._uU(1),e.qZA()),2&a){const r=n.$implicit;e.Q6J("value",r.value),e.xp6(1),e.hij(" ",null==r?null:r.label," ")}}function _(a,n){if(1&a){const r=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td")(6,"select",14),e.NdJ("ngModelChange",function(s){const i=e.CHM(r).$implicit;return e.KtG(i.processOriginalName=s)}),e.TgZ(7,"option",15),e._uU(8,"Select Process Original Name"),e.qZA(),e.YNc(9,v,2,2,"option",16),e.qZA()(),e.TgZ(10,"td")(11,"select",14),e.NdJ("ngModelChange",function(s){const i=e.CHM(r).$implicit;return e.KtG(i.qualityOriginalName=s)}),e.TgZ(12,"option",15),e._uU(13,"Select IPQA Original Name"),e.qZA(),e.YNc(14,A,2,2,"option",16),e.qZA()(),e.TgZ(15,"td")(16,"div",17),e._UZ(17,"button",18),e.TgZ(18,"div",19)(19,"a",20),e.NdJ("click",function(){const o=e.CHM(r).$implicit,i=e.oxw();return e.KtG(i.update(o,{processOriginalName:o.processOriginalName,qualityOriginalName:o.qualityOriginalName}))}),e._UZ(20,"i",21),e._uU(21," Update "),e.qZA()()()()()}if(2&a){const r=n.$implicit,t=e.oxw();e.xp6(2),e.Oqu(null==r?null:r.processId),e.xp6(2),e.Oqu(null==r?null:r.processName),e.xp6(2),e.Q6J("ngModel",r.processOriginalName),e.xp6(3),e.Q6J("ngForOf",t.processOptions),e.xp6(2),e.Q6J("ngModel",r.qualityOriginalName),e.xp6(3),e.Q6J("ngForOf",t.IPQAOptions)}}const C=function(a,n,r,t){return{page:a,pageSize:n,collection:r,search:t,type:"list"}};let Z=(()=>{var a;class n{constructor(t,s,o,i,O,S,x){this.exportExcelService=t,this.router=s,this.spinner=o,this.activatedRoute=i,this.mapProcessNameService=O,this.exportToPDFService=S,this.toastService=x,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.processOptions=[],this.IPQAOptions=[],this.rolePermissionActions=M.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getAll(t=!1,s=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:t};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.mapProcessNameService.getAllMapProcessNames(o).subscribe(i=>{"EXCEL"==s?this.excelDownload(i.rows):"PDF"==s?this.pdfDownload(i.rows):(this.processOptions=i.processOptions,this.IPQAOptions=i.IPQAOptions,this.tableData=i.rows,this.collection=i.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateTo(t,s,o){this.router.navigate([t],{queryParams:{id:s?._id,action:o}})}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=t.value,this.getAll()}}trackByFn(t,s){return s?._id}excelDownload(t){this.exportExcelService.exportExcel((0,P.ri)(t))}pdfDownload(t){let s=(0,P.RJ)(t);this.exportToPDFService.generatePdf(s.tableData,s.title)}onSort({column:t,direction:s}){this.headers.forEach(o=>{o.sortable!==t&&(o.direction="")}),this.column=t,this.direction="asc"==s?1:-1,this.getAll()}update(t,s){this.spinner.show(),this.mapProcessNameService.update(t._id,s).subscribe(o=>{this.toastService.success(o.message),this.spinner.hide()})}}return(a=n).\u0275fac=function(t){return new(t||a)(e.Y36(c.Ol),e.Y36(u.F0),e.Y36(c.V),e.Y36(u.gz),e.Y36(N),e.Y36(c.$L),e.Y36(c.kl))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-map-process-name-list"]],viewQuery:function(t,s){if(1&t&&e.Gf(m.j,5),2&t){let o;e.iGM(o=e.CRH())&&(s.headers=o)}},decls:22,vars:8,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-secondary"],[1,"text-white"],["sortable","processId",3,"sort"],["sortable","processName",3,"sort"],["sortable","processOriginalName",1,"text-start",3,"sort"],["sortable","qualityOriginalName",1,"text-start",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"form-select",3,"ngModel","ngModelChange"],["value","null","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],[3,"value"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Map Process Name Summary"),e.qZA()(),e._UZ(4,"hr",3),e.TgZ(5,"div",4)(6,"app-setting-header",5),e.NdJ("dataChange",function(i){return s.eventHeader(i)}),e.qZA(),e.TgZ(7,"table",6)(8,"thead",7)(9,"tr",8)(10,"th",9),e.NdJ("sort",function(i){return s.onSort(i)}),e._uU(11,"Process ID"),e.qZA(),e.TgZ(12,"th",10),e.NdJ("sort",function(i){return s.onSort(i)}),e._uU(13,"Process Name"),e.qZA(),e.TgZ(14,"th",11),e.NdJ("sort",function(i){return s.onSort(i)}),e._uU(15," Map Process Original Name "),e.qZA(),e.TgZ(16,"th",12),e.NdJ("sort",function(i){return s.onSort(i)}),e._uU(17," Map IPQA Original Name "),e.qZA(),e.TgZ(18,"th"),e._uU(19,"Action"),e.qZA()()(),e.TgZ(20,"tbody"),e.YNc(21,_,22,6,"tr",13),e.qZA()()()()),2&t&&(e.xp6(6),e.Q6J("data",e.l5B(3,C,s.page,s.pageSize,s.collection,s.search)),e.xp6(15),e.Q6J("ngForOf",s.tableData)("ngForTrackBy",s.trackByFn))},dependencies:[g.sg,f.P,h.YN,h.Kr,h.EJ,h.JJ,h.On,m.j]}),n})();var T=l(56208);const b=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:Z}];let y=(()=>{var a;class n{}return(a=n).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[g.ez,u.Bz.forChild(b),T.m]}),n})()}}]);