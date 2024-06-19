"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2835],{92835:(y,p,a)=>{a.r(p),a.d(p,{WorkOrderStatusModule:()=>A});var h=a(96814),g=a(1076),c=a(43818),m=a(6019),t=a(65879),l=a(2742),Z=a(10583),_=a(88059),u=a(60095),f=a(50363);function b(i,d){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",36),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA()()),2&i){const e=d.$implicit;t.xp6(2),t.Oqu(null==e?null:e.workOrderCode),t.xp6(2),t.Oqu(null==e?null:e.equipmentCode),t.xp6(2),t.Oqu(null==e?null:e.equipmentName),t.xp6(2),t.Oqu(null==e?null:e.priority),t.xp6(2),t.Oqu(null==e?null:e.status),t.xp6(2),t.Oqu(null==e?null:e.technicianName),t.xp6(2),t.Oqu(null==e?null:e.scheduleDate),t.xp6(2),t.Oqu(null==e?null:e.completionDate)}}const S=function(i,d,e,s){return{page:i,pageSize:d,collection:e,search:s,type:"list",pdfDisplay:!0}};let T=(()=>{class i{constructor(e,s,r,n,o,D){this.exportExcelService=e,this.spinner=s,this.generateWorkOrderService=r,this.activatedRoute=n,this.utilityService=o,this.exportToPDFService=D,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.priorityValues=[],this.taskStatus=[],this.priority="",this.status="",this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getIntialdata(){}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.priority="",this.status=""}getAll(e=!1,s=""){this.spinner.show();let r={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e,toDate:this.toDate,fromDate:this.fromDate,priority:this.priority,status:this.status};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.generateWorkOrderService.getAllReports(r).subscribe(n=>{"EXCEL"==s?this.excelDownload(n.rows):"PDF"==s?this.pdfDownload(n.rows):(this.tableData=n.rows,this.priorityValues=n.priorityValues,this.taskStatus=n.taskStatus,this.collection=n.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let s=(0,m.gW)(e);this.exportToPDFService.generatePdf(s.tableData,s.title)}excelDownload(e){this.exportExcelService.exportExcel((0,m.Yl)(e))}onSort({column:e,direction:s}){this.headers.forEach(r=>{r.sortable!==e&&(r.direction="")}),this.column=e,this.direction="asc"==s?1:-1,this.getAll()}static#t=this.\u0275fac=function(s){return new(s||i)(t.Y36(l.Ol),t.Y36(l.V),t.Y36(Z.zD),t.Y36(g.gz),t.Y36(l.tI),t.Y36(l.$L))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-work-order-status"]],viewQuery:function(s,r){if(1&s&&t.Gf(c.j,5),2&s){let n;t.iGM(n=t.CRH())&&(r.headers=n)}},decls:62,vars:15,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-9"],[1,"row"],[1,"col-3","ps-3"],[1,"form-label"],["bindLabel","label","bindValue","value",3,"items","clearable","ngModel","ngModelChange"],[1,"col-3","separate-row"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","workOrderCode",3,"sort"],["sortable","equipmentCode",3,"sort"],["sortable","equipmentName",1,"text-start",3,"sort"],["sortable","priority",3,"sort"],["sortable","status",3,"sort"],["sortable","technicianName",3,"sort"],["sortable","scheduleDate",3,"sort"],["sortable","completionDate",3,"sort"],[4,"ngFor","ngForOf"],[1,"text-start"]],template:function(s,r){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Work Order Status Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"label",9),t._uU(11,"Priority"),t.qZA(),t.TgZ(12,"ng-select",10),t.NdJ("ngModelChange",function(o){return r.priority=o}),t.qZA()(),t.TgZ(13,"div",11)(14,"label",9),t._uU(15,"Status"),t.qZA(),t.TgZ(16,"ng-select",10),t.NdJ("ngModelChange",function(o){return r.status=o}),t.qZA(),t.TgZ(17,"span",12),t._UZ(18,"img",13),t.qZA()(),t.TgZ(19,"div",14)(20,"label",9),t._uU(21," From Date "),t.TgZ(22,"span",15),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",16),t.NdJ("ngModelChange",function(o){return r.fromDate=o}),t.qZA()(),t.TgZ(25,"div",14)(26,"label",9),t._uU(27," To Date "),t.TgZ(28,"span",15),t._uU(29,"*"),t.qZA()(),t.TgZ(30,"input",16),t.NdJ("ngModelChange",function(o){return r.toDate=o}),t.qZA()()()(),t.TgZ(31,"div",17)(32,"span",18),t._UZ(33,"img",13),t.qZA(),t.TgZ(34,"button",19),t.NdJ("click",function(){return r.getAll()}),t._uU(35,"Apply Filter"),t.qZA(),t.TgZ(36,"button",20),t.NdJ("click",function(){return r.reset()}),t._uU(37,"Reset Filter"),t.qZA()()(),t._UZ(38,"hr",21),t.TgZ(39,"div",22)(40,"app-setting-header",23),t.NdJ("dataChange",function(o){return r.eventHeader(o)}),t.qZA(),t.TgZ(41,"table",24)(42,"thead",25)(43,"tr",26)(44,"th",27),t.NdJ("sort",function(o){return r.onSort(o)}),t._uU(45,"Work Order ID"),t.qZA(),t.TgZ(46,"th",28),t.NdJ("sort",function(o){return r.onSort(o)}),t._uU(47,"Equipment Code"),t.qZA(),t.TgZ(48,"th",29),t.NdJ("sort",function(o){return r.onSort(o)}),t._uU(49,"Equipment Name"),t.qZA(),t.TgZ(50,"th",30),t.NdJ("sort",function(o){return r.onSort(o)}),t._uU(51,"Priority"),t.qZA(),t.TgZ(52,"th",31),t.NdJ("sort",function(o){return r.onSort(o)}),t._uU(53,"Status"),t.qZA(),t.TgZ(54,"th",32),t.NdJ("sort",function(o){return r.onSort(o)}),t._uU(55,"Assigned Technician"),t.qZA(),t.TgZ(56,"th",33),t.NdJ("sort",function(o){return r.onSort(o)}),t._uU(57,"Scheduled Date"),t.qZA(),t.TgZ(58,"th",34),t.NdJ("sort",function(o){return r.onSort(o)}),t._uU(59,"Completion Date"),t.qZA()()(),t.TgZ(60,"tbody"),t.YNc(61,b,17,8,"tr",35),t.qZA()()()()()),2&s&&(t.xp6(12),t.Q6J("items",r.priorityValues)("clearable",!1)("ngModel",r.priority),t.xp6(4),t.Q6J("items",r.taskStatus)("clearable",!1)("ngModel",r.status),t.xp6(8),t.Q6J("ngModel",r.fromDate),t.xp6(6),t.Q6J("ngModel",r.toDate),t.xp6(10),t.Q6J("data",t.l5B(10,S,r.page,r.pageSize,r.collection,r.search)),t.xp6(21),t.Q6J("ngForOf",r.tableData))},dependencies:[h.sg,_.P,u.Fj,u.JJ,u.On,f.w9,c.j],encapsulation:2})}return i})();var C=a(56208);const v=[{path:"",component:T}];let A=(()=>{class i{static#t=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275mod=t.oAB({type:i});static#r=this.\u0275inj=t.cJS({imports:[h.ez,g.Bz.forChild(v),C.m]})}return i})()}}]);