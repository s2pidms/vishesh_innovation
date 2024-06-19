"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[901],{30901:(A,h,s)=>{s.r(h),s.d(h,{MaintenanceScheduleModule:()=>S});var d=s(96814),p=s(1076),g=s(43818),m=s(6019),e=s(65879),r=s(2742),b=s(10583),f=s(88059),u=s(60095),T=s(50363);function Z(l,c){if(1&l&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",34),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA()()),2&l){const n=c.$implicit;e.xp6(2),e.Oqu(null==n?null:n.equipmentCode),e.xp6(2),e.Oqu(null==n?null:n.equipmentName),e.xp6(2),e.Oqu(null==n?null:n.equipmentType),e.xp6(2),e.Oqu(null==n?null:n.taskCategory),e.xp6(2),e.Oqu(null==n?null:n.createdAt)}}const C=function(l,c,n,i){return{page:l,pageSize:c,collection:n,search:i,type:"list",pdfDisplay:!0}};let M=(()=>{class l{constructor(n,i,t,a,o,y){this.exportExcelService=n,this.spinner=i,this.maintenanceScheduleCreationService=t,this.activatedRoute=a,this.utilityService=o,this.exportToPDFService=y,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.maintenanceType=[],this.equipments=[],this.equipmentId="",this.maintenanceTask="",this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}eventHeader(n){switch(n.key){case"SEARCH":this.search=n.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=n.value,this.getAll()}}reset(){this.maintenanceTask="",this.equipmentId="",this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate}getAll(n=!1,i=""){this.spinner.show();let t={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:n,toDate:this.toDate,fromDate:this.fromDate,equipmentId:this.equipmentId,maintenanceTask:this.maintenanceTask};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.maintenanceScheduleCreationService.getAllReports(t).subscribe(a=>{"EXCEL"==i?this.excelDownload(a.rows):"PDF"==i?this.pdfDownload(a.rows):(this.tableData=a.rows,this.maintenanceType=a.taskCategory,this.equipments=a.equipments,this.collection=a.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(n){let i=(0,m.bK)(n);this.exportToPDFService.generatePdf(i.tableData,i.title)}excelDownload(n){this.exportExcelService.exportExcel((0,m.By)(n))}onSort({column:n,direction:i}){this.headers.forEach(t=>{t.sortable!==n&&(t.direction="")}),this.column=n,this.direction="asc"==i?1:-1,this.getAll()}static#e=this.\u0275fac=function(i){return new(i||l)(e.Y36(r.Ol),e.Y36(r.V),e.Y36(b.fC),e.Y36(p.gz),e.Y36(r.tI),e.Y36(r.$L))};static#t=this.\u0275cmp=e.Xpm({type:l,selectors:[["app-maintenance-schedule"]],viewQuery:function(i,t){if(1&i&&e.Gf(g.j,5),2&i){let a;e.iGM(a=e.CRH())&&(t.headers=a)}},decls:56,vars:15,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-9"],[1,"row"],[1,"col-3","ps-3"],[1,"form-label"],["bindLabel","label","bindValue","value",3,"items","clearable","ngModel","ngModelChange"],[1,"col-3","separate-row"],["bindLabel","assetName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","equipmentCode",3,"sort"],["sortable","equipmentName",1,"text-start",3,"sort"],["sortable","equipmentType",3,"sort"],["sortable","taskCategory",3,"sort"],["sortable","createdAt",3,"sort"],[4,"ngFor","ngForOf"],[1,"text-start"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),e._uU(5,"Maintenance Schedule Report"),e.qZA()()(),e.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"label",9),e._uU(11,"Maintenance Type"),e.qZA(),e.TgZ(12,"ng-select",10),e.NdJ("ngModelChange",function(o){return t.maintenanceTask=o}),e.qZA()(),e.TgZ(13,"div",11)(14,"label",9),e._uU(15,"Equipment Category"),e.qZA(),e.TgZ(16,"ng-select",12),e.NdJ("ngModelChange",function(o){return t.equipmentId=o}),e.qZA(),e.TgZ(17,"span",13),e._UZ(18,"img",14),e.qZA()(),e.TgZ(19,"div",15)(20,"label",9),e._uU(21," From Date "),e.TgZ(22,"span",16),e._uU(23,"*"),e.qZA()(),e.TgZ(24,"input",17),e.NdJ("ngModelChange",function(o){return t.fromDate=o}),e.qZA()(),e.TgZ(25,"div",15)(26,"label",9),e._uU(27," To Date "),e.TgZ(28,"span",16),e._uU(29,"*"),e.qZA()(),e.TgZ(30,"input",17),e.NdJ("ngModelChange",function(o){return t.toDate=o}),e.qZA()()()(),e.TgZ(31,"div",18)(32,"span",19),e._UZ(33,"img",14),e.qZA(),e.TgZ(34,"button",20),e.NdJ("click",function(){return t.getAll()}),e._uU(35,"Apply Filter"),e.qZA(),e.TgZ(36,"button",21),e.NdJ("click",function(){return t.reset()}),e._uU(37,"Reset Filter"),e.qZA()()(),e._UZ(38,"hr",22),e.TgZ(39,"div",23)(40,"app-setting-header",24),e.NdJ("dataChange",function(o){return t.eventHeader(o)}),e.qZA(),e.TgZ(41,"table",25)(42,"thead",26)(43,"tr",27)(44,"th",28),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(45,"Equipment Code"),e.qZA(),e.TgZ(46,"th",29),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(47,"Equipment Name"),e.qZA(),e.TgZ(48,"th",30),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(49,"Equipment Category"),e.qZA(),e.TgZ(50,"th",31),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(51,"Maintenance Type"),e.qZA(),e.TgZ(52,"th",32),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(53,"Maintenance Date"),e.qZA()()(),e.TgZ(54,"tbody"),e.YNc(55,Z,11,5,"tr",33),e.qZA()()()()()),2&i&&(e.xp6(12),e.Q6J("items",t.maintenanceType)("clearable",!1)("ngModel",t.maintenanceTask),e.xp6(4),e.Q6J("items",t.equipments)("clearable",!1)("ngModel",t.equipmentId),e.xp6(8),e.Q6J("ngModel",t.fromDate),e.xp6(6),e.Q6J("ngModel",t.toDate),e.xp6(10),e.Q6J("data",e.l5B(10,C,t.page,t.pageSize,t.collection,t.search)),e.xp6(15),e.Q6J("ngForOf",t.tableData))},dependencies:[d.sg,f.P,u.Fj,u.JJ,u.On,T.w9,g.j],encapsulation:2})}return l})();var v=s(56208);const _=[{path:"",component:M}];let S=(()=>{class l{static#e=this.\u0275fac=function(i){return new(i||l)};static#t=this.\u0275mod=e.oAB({type:l});static#n=this.\u0275inj=e.cJS({imports:[d.ez,p.Bz.forChild(_),v.m]})}return l})()}}]);