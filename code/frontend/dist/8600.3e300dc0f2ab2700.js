"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8600],{6786:(f,u,s)=>{s.r(u),s.d(u,{EmployeeAttendanceRModule:()=>M});var p=s(96814),h=s(1076),c=s(43818),y=s(63770),e=s(65879),A=s(68187),m=s(99328),g=s(88059),d=s(60095),Z=s(50363);function T(i,r){if(1&i&&(e.TgZ(0,"option",40),e._uU(1),e.ALo(2,"date"),e.qZA()),2&i){const o=r.$implicit;e.Q6J("value",o.value),e.xp6(1),e.hij(" ",e.xi3(2,2,o.value,"MMMM YYYY")," ")}}function b(i,r){if(1&i&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",41),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA()()),2&i){const o=r.$implicit;e.xp6(2),e.Oqu(null==o?null:o.employeeCode),e.xp6(2),e.Oqu(null==o?null:o.employeeName),e.xp6(2),e.Oqu(null==o?null:o.monthDays),e.xp6(2),e.Oqu(null==o?null:o.weeklyOff),e.xp6(2),e.Oqu(null==o?null:o.paidHolidays),e.xp6(2),e.Oqu(null==o?null:o.paidLeaves),e.xp6(2),e.Oqu(null==o?null:o.presentDays),e.xp6(2),e.Oqu(null==o?null:o.LOPDiff),e.xp6(2),e.Oqu(null==o?null:o.status)}}const v=function(i,r,o,a){return{page:i,pageSize:r,collection:o,search:a,type:"list",pdfDisplay:!0}};let D=(()=>{var i;class r{constructor(a,t,l,n,_,S){this.employeeAttendanceService=a,this.router=t,this.activatedRoute=l,this.exportExcelService=n,this.spinner=_,this.exportToPDFService=S,this.page=1,this.pageSize=12,this.collection=0,this.column="employeeCode",this.direction=-1,this.search="",this.tableData=[],this.employee=[],this.emp=[],this.user=[],this.fromDate="",this.toDate="",this.attendanceForMonthYear="",this.date=new Date,this.month=new Date(this.date.getFullYear(),this.date.getMonth()+1,1).toISOString().slice(0,7),this.monthOptions=[{value:new Date(this.date.getFullYear(),this.date.getMonth()+1,1).toISOString().slice(0,7)},{value:new Date(this.date.getFullYear(),this.date.getMonth(),1).toISOString().slice(0,7)},{value:new Date(this.date.getFullYear(),this.date.getMonth()-1,1).toISOString().slice(0,7)},{value:new Date(this.date.getFullYear(),this.date.getMonth()-2,1).toISOString().slice(0,7)},{value:new Date(this.date.getFullYear(),this.date.getMonth()-3,1).toISOString().slice(0,7)},{value:new Date(this.date.getFullYear(),this.date.getMonth()-4,1).toISOString().slice(0,7)}]}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAllData()}trackByFn(a,t){return t?._id}navigateTo(a,t,l){this.router.navigate([a],{queryParams:{id:t,action:l}})}eventHeader(a){switch(a.key){case"SEARCH":this.search=a.value,this.getAllData();break;case"PDF":this.getAllData(!0,"PDF");break;case"EXCEL":this.getAllData(!0,"EXCEL");break;case"PAGE":this.page=a.value,this.getAllData()}}clearFilter(){this.fromDate="",this.toDate="",this.attendanceForMonthYear="",this.search="",this.page=1,this.pageSize=10,this.collection=0,this.column="employeeCode",this.direction=-1,this.search="",this.user="",this.tableData=[],this.getAllData()}pdfDownload(a){let t=(0,y.Az)(a);this.exportToPDFService.generatePdf(t.tableData,t.title)}excelDownload(a){this.exportExcelService.exportExcel((0,y.Dc)(a))}onSort({column:a,direction:t}){this.headers.forEach(l=>{l.sortable!==a&&(l.direction="")}),this.column=a,this.direction="asc"==t?1:-1,this.getAllData()}getAllData(a=!1,t=""){this.spinner.show();let l={employeeId:this.user,fromDate:this.fromDate,toDate:this.toDate,page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,attendanceForMonthYear:this.attendanceForMonthYear,excel:a};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.employeeAttendanceService.getAllReports(l).subscribe(n=>{this.spinner.hide(),"EXCEL"==t?this.excelDownload(n.rows):"PDF"==t?this.pdfDownload(n.rows):(this.tableData=n.rows,this.collection=n.count,n.employees.length&&(this.employee=n.employees.map(_=>({label:_.empCode+"  -  "+_.empFullName,value:_._id}))))})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return(i=r).\u0275fac=function(a){return new(a||i)(e.Y36(A.VG),e.Y36(h.F0),e.Y36(h.gz),e.Y36(m.Ol),e.Y36(m.V),e.Y36(m.$L))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-employee-attendance-r"]],viewQuery:function(a,t){if(1&a&&e.Gf(c.j,5),2&a){let l;e.iGM(l=e.CRH())&&(t.headers=l)}},decls:68,vars:16,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-9"],[1,"row"],[1,"col-3","ps-3","pe-0"],[1,"form-label"],[1,"text-danger"],["bindLabel","label","bindValue","value",3,"items","multiple","ngModel","clearable","ngModelChange"],[1,"col-3","ps-5","separate-row"],[1,"form-select",3,"ngModel","ngModelChange"],["value","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","employeeCode",3,"sort"],["sortable","employeeName",1,"text-start",3,"sort"],["sortable","monthDays",3,"sort"],["sortable","weeklyOff",3,"sort"],["sortable","paidHolidays",3,"sort"],["sortable","paidLeaves",3,"sort"],["sortable","presentDays",3,"sort"],["sortable","LOPDiff",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"value"],[1,"text-start"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),e._uU(5,"Employee Attendance Report"),e.qZA()()(),e.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"label",9),e._uU(11," Employee Name"),e._UZ(12,"span",10),e.qZA(),e.TgZ(13,"ng-select",11),e.NdJ("ngModelChange",function(n){return t.user=n}),e.qZA()(),e.TgZ(14,"div",12)(15,"label",9),e._uU(16," Attendance month"),e.qZA(),e.TgZ(17,"select",13),e.NdJ("ngModelChange",function(n){return t.attendanceForMonthYear=n}),e.TgZ(18,"option",14),e._uU(19,"Select Month"),e.qZA(),e.YNc(20,T,3,5,"option",15),e.qZA(),e.TgZ(21,"span",16),e._UZ(22,"img",17),e.qZA()(),e.TgZ(23,"div",18)(24,"label",9),e._uU(25," From Date"),e.TgZ(26,"span",10),e._uU(27,"*"),e.qZA()(),e.TgZ(28,"input",19),e.NdJ("ngModelChange",function(n){return t.fromDate=n}),e.qZA()(),e.TgZ(29,"div",18)(30,"label",9),e._uU(31," To Date "),e.TgZ(32,"span",10),e._uU(33,"*"),e.qZA()(),e.TgZ(34,"input",19),e.NdJ("ngModelChange",function(n){return t.toDate=n}),e.qZA()()()(),e.TgZ(35,"div",20)(36,"span",21),e._UZ(37,"img",17),e.qZA(),e.TgZ(38,"button",22),e.NdJ("click",function(){return t.getAllData()}),e._uU(39,"Apply Filter"),e.qZA(),e.TgZ(40,"button",23),e.NdJ("click",function(){return t.clearFilter()}),e._uU(41,"Reset Filter"),e.qZA()()(),e._UZ(42,"hr",24),e.TgZ(43,"div",25)(44,"app-setting-header",26),e.NdJ("dataChange",function(n){return t.eventHeader(n)}),e.qZA(),e.TgZ(45,"table",27)(46,"thead",28)(47,"tr",29)(48,"th",30),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(49,"Employee Code"),e.qZA(),e.TgZ(50,"th",31),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(51,"Employee Name"),e.qZA(),e.TgZ(52,"th",32),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(53,"Month Days"),e.qZA(),e.TgZ(54,"th",33),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(55,"Weekly Off"),e.qZA(),e.TgZ(56,"th",34),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(57,"Paid Holidays"),e.qZA(),e.TgZ(58,"th",35),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(59,"Paid Leaves"),e.qZA(),e.TgZ(60,"th",36),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(61,"Present Days"),e.qZA(),e.TgZ(62,"th",37),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(63,"LOP[Diff]"),e.qZA(),e.TgZ(64,"th",38),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(65,"Status"),e.qZA()()(),e.TgZ(66,"tbody"),e.YNc(67,b,19,9,"tr",39),e.qZA()()()()()),2&a&&(e.xp6(13),e.Q6J("items",t.employee)("multiple",!1)("ngModel",t.user)("clearable",!1),e.xp6(4),e.Q6J("ngModel",t.attendanceForMonthYear),e.xp6(3),e.Q6J("ngForOf",t.monthOptions),e.xp6(8),e.Q6J("ngModel",t.fromDate),e.xp6(6),e.Q6J("ngModel",t.toDate),e.xp6(10),e.Q6J("data",e.l5B(11,v,t.page,t.pageSize,t.collection,t.search)),e.xp6(23),e.Q6J("ngForOf",t.tableData)("ngForTrackBy",t.trackByFn))},dependencies:[p.sg,g.P,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.On,Z.w9,c.j,p.uU],encapsulation:2}),r})();var C=s(56208);const E=[{path:"",component:D}];let M=(()=>{var i;class r{}return(i=r).\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.ez,h.Bz.forChild(E),C.m]}),r})()},13107:(f,u,s)=>{s.d(u,{t:()=>p});const p={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(f,u,s)=>{s.d(u,{J:()=>p});const p=({data:h,headers:c,widths:y,title:e})=>({tableData:{widths:y,headerRows:1,body:[c.map(g=>({text:g.header,style:"header"})),...h.map(g=>c.map(d=>({style:"subheader",text:g[d.key]})))]},title:e})}}]);