"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2543],{74779:(T,s,l)=>{l.r(s),l.d(s,{LeaveApplicationRModule:()=>C});var p=l(96814),h=l(1076),d=l(43818),m=l(63770),e=l(65879),v=l(68187),u=l(2742),c=l(88059),g=l(60095),Z=l(50363);function f(r,_){if(1&r&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",34),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA()()),2&r){const t=_.$implicit;e.xp6(2),e.Oqu(null==t?null:t.empCode),e.xp6(2),e.Oqu(null==t?null:t.empFullName),e.xp6(2),e.Oqu(null==t?null:t.fromDateS),e.xp6(2),e.Oqu(null==t?null:t.toDateS),e.xp6(2),e.Oqu(null==t?null:t.leaveType),e.xp6(2),e.Oqu(t.halfDay?t.halfDay:"-"),e.xp6(2),e.Oqu(null==t?null:t.leaveDays),e.xp6(2),e.Oqu(null==t?null:t.approvedBy),e.xp6(2),e.Oqu(null==t?null:t.updatedAt)}}const b=function(r,_,t,i){return{page:r,pageSize:_,collection:t,search:i,type:"list",pdfDisplay:!0}};let A=(()=>{class r{constructor(t,i,a,n,o,L,S){this.leavesApplicationService=t,this.exportToPDFService=i,this.exportExcelService=a,this.activatedRoute=n,this.router=o,this.spinner=L,this.utilityService=S,this.page=1,this.pageSize=12,this.collection=0,this.column="empCode",this.direction=-1,this.search="",this.tableData=[],this.user=[],this.date=new Date,this.originTableData=[],this.employee=[],this.userId=[],this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getInitialData()}trackByFn(t,i){return i?._id}navigateTo(t,i,a){this.router.navigate([t],{queryParams:{id:i,action:a}})}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value,this.getInitialData();break;case"PDF":this.getInitialData(!0,"PDF");break;case"EXCEL":this.getInitialData(!0,"EXCEL");break;case"PAGE":this.page=t.value,this.getInitialData()}}onSort({column:t,direction:i}){this.headers.forEach(a=>{a.sortable!==t&&(a.direction="")}),this.column=t,this.direction="asc"==i?1:-1,this.getInitialData()}clearFilter(){this.search="",this.page=1,this.pageSize=10,this.collection=0,this.column="empCode",this.direction=-1,this.search="",this.employee="",this.userId="",this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.tableData=[],this.getInitialData()}pdfDownload(t){let i=(0,m.m6)(t);this.exportToPDFService.generatePdf(i.tableData,i.title)}excelDownload(t){this.exportExcelService.exportExcel((0,m.P7)(t))}getInitialData(t=!1,i=""){let a={employeeId:this.userId,fromDate:this.fromDate,toDate:this.toDate,page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:t};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.leavesApplicationService.getAllReports(a).subscribe(n=>{"EXCEL"==i?this.excelDownload(n.rows):"PDF"==i?this.pdfDownload(n.rows):(this.employee=n.employees,this.collection=n.count,this.tableData=n.rows,this.user=this.employee.map(o=>({label:o.empCode+"  -  "+o.empFullName,value:o._id})))})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static#e=this.\u0275fac=function(i){return new(i||r)(e.Y36(v.FL),e.Y36(u.$L),e.Y36(u.Ol),e.Y36(h.gz),e.Y36(h.F0),e.Y36(u.V),e.Y36(u.tI))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-leave-application-r"]],viewQuery:function(i,a){if(1&i&&e.Gf(d.j,5),2&i){let n;e.iGM(n=e.CRH())&&(a.headers=n)}},decls:60,vars:14,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],[1,"text-danger"],["bindLabel","label","bindValue","value",3,"items","multiple","ngModel","clearable","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image","pe-4"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","empCode",3,"sort"],["sortable","empFullName",1,"text-start",3,"sort"],["sortable","fromDate",3,"sort"],["sortable","toDate",3,"sort"],["sortable","leaveType",3,"sort"],["sortable","halfDay",3,"sort"],["sortable","leaveDays",3,"sort"],["sortable","approvedBy",3,"sort"],["sortable","updatedAt",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),e._uU(5,"Leave Application Report"),e.qZA()()(),e.TgZ(6,"div",5)(7,"div",6)(8,"label",7),e._uU(9," Employee Name"),e.TgZ(10,"span",8),e._uU(11,"*"),e.qZA()(),e.TgZ(12,"ng-select",9),e.NdJ("ngModelChange",function(o){return a.userId=o}),e.qZA(),e.TgZ(13,"span",10),e._UZ(14,"img",11),e.qZA()(),e.TgZ(15,"div",12)(16,"label",7),e._uU(17," From Date"),e.TgZ(18,"span",8),e._uU(19,"*"),e.qZA()(),e.TgZ(20,"input",13),e.NdJ("ngModelChange",function(o){return a.fromDate=o}),e.qZA()(),e.TgZ(21,"div",12)(22,"label",7),e._uU(23," To Date "),e.TgZ(24,"span",8),e._uU(25,"*"),e.qZA()(),e.TgZ(26,"input",13),e.NdJ("ngModelChange",function(o){return a.toDate=o}),e.qZA()(),e.TgZ(27,"div",14)(28,"span",15),e._UZ(29,"img",11),e.qZA(),e.TgZ(30,"button",16),e.NdJ("click",function(){return a.getInitialData()}),e._uU(31,"Apply Filter"),e.qZA(),e.TgZ(32,"button",17),e.NdJ("click",function(){return a.clearFilter()}),e._uU(33,"Reset Filter"),e.qZA()()(),e._UZ(34,"hr",18),e.TgZ(35,"div",19)(36,"app-setting-header",20),e.NdJ("dataChange",function(o){return a.eventHeader(o)}),e.qZA(),e.TgZ(37,"table",21)(38,"thead",22)(39,"tr",23)(40,"th",24),e.NdJ("sort",function(o){return a.onSort(o)}),e._uU(41,"Employee Code"),e.qZA(),e.TgZ(42,"th",25),e.NdJ("sort",function(o){return a.onSort(o)}),e._uU(43,"Employee Name"),e.qZA(),e.TgZ(44,"th",26),e.NdJ("sort",function(o){return a.onSort(o)}),e._uU(45,"From Date"),e.qZA(),e.TgZ(46,"th",27),e.NdJ("sort",function(o){return a.onSort(o)}),e._uU(47,"To Date"),e.qZA(),e.TgZ(48,"th",28),e.NdJ("sort",function(o){return a.onSort(o)}),e._uU(49,"Leave Type"),e.qZA(),e.TgZ(50,"th",29),e.NdJ("sort",function(o){return a.onSort(o)}),e._uU(51,"Half Day"),e.qZA(),e.TgZ(52,"th",30),e.NdJ("sort",function(o){return a.onSort(o)}),e._uU(53,"Leave Days"),e.qZA(),e.TgZ(54,"th",31),e.NdJ("sort",function(o){return a.onSort(o)}),e._uU(55,"Approved By"),e.qZA(),e.TgZ(56,"th",32),e.NdJ("sort",function(o){return a.onSort(o)}),e._uU(57,"Approved Date"),e.qZA()()(),e.TgZ(58,"tbody"),e.YNc(59,f,19,9,"tr",33),e.qZA()()()()()),2&i&&(e.xp6(12),e.Q6J("items",a.user)("multiple",!1)("ngModel",a.userId)("clearable",!1),e.xp6(8),e.Q6J("ngModel",a.fromDate),e.xp6(6),e.Q6J("ngModel",a.toDate),e.xp6(10),e.Q6J("data",e.l5B(9,b,a.page,a.pageSize,a.collection,a.search)),e.xp6(23),e.Q6J("ngForOf",a.tableData)("ngForTrackBy",a.trackByFn))},dependencies:[p.sg,c.P,g.Fj,g.JJ,g.On,Z.w9,d.j],encapsulation:2})}return r})();var D=l(56208);const y=[{path:"",component:A}];let C=(()=>{class r{static#e=this.\u0275fac=function(i){return new(i||r)};static#t=this.\u0275mod=e.oAB({type:r});static#a=this.\u0275inj=e.cJS({imports:[p.ez,h.Bz.forChild(y),D.m]})}return r})()},13107:(T,s,l)=>{l.d(s,{t:()=>p});const p={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(T,s,l)=>{l.d(s,{J:()=>p});const p=({data:h,headers:d,widths:m,title:e})=>({tableData:{widths:m,headerRows:1,body:[d.map(c=>({text:c.header,style:"header"})),...h.map(c=>d.map(g=>({style:"subheader",text:c[g.key]})))]},title:e})}}]);