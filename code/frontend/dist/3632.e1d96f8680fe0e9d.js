"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3632],{63632:(q,h,l)=>{l.r(h),l.d(h,{AttendanceReviewModule:()=>U});var c=l(96814),_=l(1076),g=l(43818),v=l(25116),e=l(65879),u=l(99328),A=l(68187),y=l(88059),d=l(60095),Z=l(53421),T=l(95346);function w(r,s){if(1&r&&(e.TgZ(0,"option",36),e._uU(1),e.ALo(2,"date"),e.qZA()),2&r){const n=s.$implicit;e.Q6J("value",n.value),e.xp6(1),e.hij(" ",e.xi3(2,2,n.value,"MMMM YYYY")," ")}}function D(r,s){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&r){const n=e.oxw().$implicit;e.xp6(1),e.Oqu(n.paidLeaves)}}function C(r,s){if(1&r){const n=e.EpF();e.TgZ(0,"input",45),e.NdJ("ngModelChange",function(t){e.CHM(n);const o=e.oxw().$implicit;return e.KtG(o.paidLeaves=t)})("input",function(){e.CHM(n);const t=e.oxw().$implicit,o=e.oxw();return e.KtG(o.setLOP(t._id,t))}),e.qZA()}if(2&r){const n=e.oxw().$implicit;e.Q6J("ngModel",n.paidLeaves)}}function b(r,s){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&r){const n=e.oxw().$implicit;e.xp6(1),e.Oqu(n.presentDays)}}function O(r,s){if(1&r){const n=e.EpF();e.TgZ(0,"input",45),e.NdJ("ngModelChange",function(t){e.CHM(n);const o=e.oxw().$implicit;return e.KtG(o.presentDays=t)})("input",function(){e.CHM(n);const t=e.oxw().$implicit,o=e.oxw();return e.KtG(o.setLOP(t._id,t))}),e.qZA()}if(2&r){const n=e.oxw().$implicit;e.Q6J("ngModel",n.presentDays)}}function M(r,s){if(1&r){const n=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",37),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e.YNc(12,D,2,1,"span",38),e.YNc(13,C,1,1,"input",39),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e.YNc(17,b,2,1,"span",38),e.YNc(18,O,1,1,"input",39),e.qZA(),e.TgZ(19,"td"),e._uU(20),e.qZA(),e.TgZ(21,"td"),e._uU(22),e.qZA(),e.TgZ(23,"td")(24,"div",40),e._UZ(25,"button",41),e.TgZ(26,"div",42)(27,"a",43),e.NdJ("click",function(){const o=e.CHM(n).$implicit,i=e.oxw();return e.KtG(i.flag=o._id)}),e._UZ(28,"i",44),e._uU(29," Edit "),e.qZA()()()()()}if(2&r){const n=s.$implicit,a=e.oxw();e.xp6(2),e.Oqu(null==n?null:n.employeeCode),e.xp6(2),e.Oqu(null==n?null:n.employeeName),e.xp6(2),e.Oqu(null==n?null:n.monthDays),e.xp6(2),e.Oqu(null==n?null:n.weeklyOff),e.xp6(2),e.Oqu(null==n?null:n.paidHolidays),e.xp6(2),e.Q6J("ngIf",n.status&&!("Draft"==n.status&&n._id==a.flag)),e.xp6(1),e.Q6J("ngIf",!n.status||"Draft"==n.status&&n._id==a.flag),e.xp6(2),e.Oqu(null==n?null:n.ODDays),e.xp6(2),e.Q6J("ngIf",n.status&&!("Draft"==n.status&&n._id==a.flag)),e.xp6(1),e.Q6J("ngIf",!n.status||"Draft"==n.status&&n._id==a.flag),e.xp6(2),e.Oqu(null==n?null:n.LOPDiff),e.xp6(2),e.Oqu(null==n?null:n.status),e.xp6(5),e.Q6J("accessType",a.rolePermissionActions.editAction)}}const R=function(r,s,n,a){return{page:r,pageSize:s,collection:n,search:a}};let x=(()=>{var r;class s{constructor(a,t,o,i,p){this.router=a,this.spinner=t,this.attendanceService=o,this.toastService=i,this.exportExcelService=p,this.page=1,this.pageSize=9,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.originTableData=[],this.user={},this.fromDate="",this.toDate="",this.attendanceForMonthYear=null,this.submitted=!1,this.date=new Date,this.flag=-1,this.month=new Date(this.date.getFullYear(),this.date.getMonth()+1,1).toISOString().slice(0,7),this.monthOptions=[{value:new Date(this.date.getFullYear(),this.date.getMonth()+1,1).toISOString().slice(0,7)},{value:new Date(this.date.getFullYear(),this.date.getMonth(),1).toISOString().slice(0,7)},{value:new Date(this.date.getFullYear(),this.date.getMonth()-1,1).toISOString().slice(0,7)}],this.btnFlag=!0,this.rolePermissionActions=v.a1}ngOnInit(){}trackByFn(a,t){return t?._id}reset(){this.attendanceForMonthYear=null,this.tableData=[],this.collection=this.tableData.length}setLOP(a,t){let o=this.tableData.map(i=>i._id).indexOf(a);this.tableData[o].LOPDiff=t.monthDays-(t.paidLeaves+t.presentDays+t.weeklyOff+t.ODDays+t.paidHolidays)}create(a){this.spinner.show(),this.tableData=this.tableData.map(t=>(t.status=a,t)),this.attendanceService.create(this.tableData).subscribe(t=>{this.spinner.hide(),this.submitted=!1,this.tableData=[],this.attendanceForMonthYear=null,this.flag=-1,this.toastService.success(t.message)})}navigateTo(a,t,o){this.router.navigate([a],{queryParams:{id:t,action:o}})}eventHeader(a){switch(a.key){case"SEARCH":this.search=a.value,this.flag=-1;break;case"EXCEL":this.excelDownload(this.tableData);break;case"PAGE":this.page=a.value}}getAllData(){this.spinner.show(),this.attendanceService.getAllMasterData(this.attendanceForMonthYear).subscribe(a=>{this.tableData=a.attendanceOfMonth,this.collection=a.attendanceOfMonth.length,this.btnFlag=this.tableData.every(t=>"Approved"==t.status),this.spinner.hide()})}onSort({column:a,direction:t}){this.headers.forEach(o=>{o.sortable!==a&&(o.direction="")}),this.tableData=""===t||""===a?this.tableData:[...this.tableData].sort((o,i)=>{let p="string"==typeof o[a]?o[a].toLowerCase():o[a],m="string"==typeof i[a]?i[a].toLowerCase():i[a];const f=p<m?-1:p>m?1:0;return"asc"===t?f:-f})}excelDownload(a){let t={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}},o={title:"Attendance Review",csvData:a,headers:[{header:"Employee Code",key:"employeeCode",...t},{header:"Employee Name",key:"employeeName",...t},{header:"Month Days",key:"monthDays",...t},{header:"Weekly Off",key:"weeklyOff",...t},{header:"Paid Holidays",key:"paidHolidays",...t},{header:"Paid Leaves",key:"paidLeaves",...t},{header:"OD Days",key:"ODDays",...t},{header:"Present Days",key:"presentDays",...t},{header:"LOP/Diff",key:"LOPDiff",...t},{header:"Status",key:"status",...t}]};this.exportExcelService.exportExcel(o)}}return(r=s).\u0275fac=function(a){return new(a||r)(e.Y36(_.F0),e.Y36(u.V),e.Y36(A.VG),e.Y36(u.kl),e.Y36(u.Ol))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-attendance-review"]],viewQuery:function(a,t){if(1&a&&e.Gf(g.j,5),2&a){let o;e.iGM(o=e.CRH())&&(t.headers=o)}},decls:58,vars:21,consts:[[1,"listCard","card","mb-4"],[1,"table-header"],[1,"heading"],[1,"row","justify-content-center","mt-4"],[1,"col-4"],[1,"row"],[1,"col-6","mt-1","pe-1"],[1,"form-label","text-nowrap"],[1,"text-danger"],[1,"col-1","ps-3","pe-0"],[1,"fa","fa-caret-right","mt-1","text-secondary"],[1,"col-5","ps-0"],[1,"form-select",3,"ngModel","ngModelChange","change"],["disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"row","mt-3","line-border"],[1,"table-responsive",2,"min-height","33rem"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","employeeCode",3,"sort"],["sortable","employeeName",1,"text-start",3,"sort"],["sortable","monthDays",3,"sort"],["sortable","weeklyOff",3,"sort"],["sortable","paidHolidays",3,"sort"],["sortable","paidLeaves",3,"sort"],["sortable","ODDays",3,"sort"],["sortable","presentDays",3,"sort"],["sortable","LOPDiff",3,"sort"],["sortable","isActive",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"line-border"],["appAccessControl","",1,"text-center","mt-3",3,"accessType"],["type","button",1,"btn","bg-primary","px-5","mx-2",3,"click"],["type","button",1,"btn","bg-primary","px-5","mx-2",3,"disabled","click"],[3,"value"],[1,"text-start"],[4,"ngIf"],["class","form-control form-control-sm w-25","type","number",3,"ngModel","ngModelChange","input",4,"ngIf"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["type","number",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelChange","input"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Attendance Review"),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"label",7),e._uU(9,"Attendance for Month'Year"),e._UZ(10,"span",8),e.qZA()(),e.TgZ(11,"div",9),e._UZ(12,"i",10),e.qZA(),e.TgZ(13,"div",11)(14,"select",12),e.NdJ("ngModelChange",function(i){return t.attendanceForMonthYear=i})("change",function(){return t.getAllData()}),e.TgZ(15,"option",13),e._uU(16,"Select Month"),e.qZA(),e.YNc(17,w,3,5,"option",14),e.qZA()()()()(),e._UZ(18,"hr",15),e.TgZ(19,"div",16)(20,"app-setting-header",17),e.NdJ("dataChange",function(i){return t.eventHeader(i)}),e.qZA(),e.TgZ(21,"table",18)(22,"thead",19)(23,"tr",20)(24,"th",21),e.NdJ("sort",function(i){return t.onSort(i)}),e._uU(25,"Employee Code"),e.qZA(),e.TgZ(26,"th",22),e.NdJ("sort",function(i){return t.onSort(i)}),e._uU(27,"Employee Name"),e.qZA(),e.TgZ(28,"th",23),e.NdJ("sort",function(i){return t.onSort(i)}),e._uU(29,"Month Days"),e.qZA(),e.TgZ(30,"th",24),e.NdJ("sort",function(i){return t.onSort(i)}),e._uU(31,"Weekly Off"),e.qZA(),e.TgZ(32,"th",25),e.NdJ("sort",function(i){return t.onSort(i)}),e._uU(33,"Paid Holidays"),e.qZA(),e.TgZ(34,"th",26),e.NdJ("sort",function(i){return t.onSort(i)}),e._uU(35,"Paid Leaves/Comp off"),e.qZA(),e.TgZ(36,"th",27),e.NdJ("sort",function(i){return t.onSort(i)}),e._uU(37,"OD Days"),e.qZA(),e.TgZ(38,"th",28),e.NdJ("sort",function(i){return t.onSort(i)}),e._uU(39,"Present Days"),e.qZA(),e.TgZ(40,"th",29),e.NdJ("sort",function(i){return t.onSort(i)}),e._uU(41,"LOP/Diff"),e.qZA(),e.TgZ(42,"th",30),e.NdJ("sort",function(i){return t.onSort(i)}),e._uU(43,"Status"),e.qZA(),e.TgZ(44,"th"),e._uU(45,"Action"),e.qZA()()(),e.TgZ(46,"tbody"),e.YNc(47,M,30,13,"tr",31),e.ALo(48,"slice"),e.ALo(49,"searchFi1ter"),e.qZA()()(),e._UZ(50,"hr",32),e.TgZ(51,"div",33)(52,"button",34),e.NdJ("click",function(){return t.reset()}),e._uU(53,"Reset"),e.qZA(),e.TgZ(54,"button",35),e.NdJ("click",function(){return t.create("Draft")}),e._uU(55," Save "),e.qZA(),e.TgZ(56,"button",35),e.NdJ("click",function(){return t.create("Approved")}),e._uU(57," Approve "),e.qZA()()()),2&a&&(e.xp6(14),e.Q6J("ngModel",t.attendanceForMonthYear),e.xp6(1),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",t.monthOptions),e.xp6(3),e.Q6J("data",e.l5B(16,R,t.page,t.pageSize,t.collection,t.search)),e.xp6(27),e.Q6J("ngForOf",e.Dn7(48,9,e.xi3(49,13,t.tableData,t.search),(t.page-1)*t.pageSize,(t.page-1)*t.pageSize+t.pageSize))("ngForTrackBy",t.trackByFn),e.xp6(4),e.Q6J("accessType",t.rolePermissionActions.createAction),e.xp6(3),e.Q6J("disabled",t.btnFlag),e.xp6(2),e.Q6J("disabled",t.btnFlag))},dependencies:[c.sg,c.O5,y.P,d.YN,d.Kr,d.Fj,d.wV,d.EJ,d.JJ,d.On,g.j,Z.J,c.OU,c.uU,T.G],styles:[".fa-caret-right[_ngcontent-%COMP%]{font-size:2rem!important;margin-right:4rem!important}"]}),s})();var J=l(56208);const S=[{path:"",redirectTo:"attendance-review",pathMatch:"full"},{path:"attendance-review",component:x}];let U=(()=>{var r;class s{}return(r=s).\u0275fac=function(a){return new(a||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[c.ez,_.Bz.forChild(S),J.m]}),s})()}}]);