"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4233],{64233:(M,c,s)=>{s.r(c),s.d(c,{PayrollModule:()=>J});var u=s(96814),h=s(1076),g=s(43818),y=s(25116),t=s(65879),d=s(98977),f=s(68187),T=s(88059),i=s(60095),b=s(53421),Z=s(95346);function A(l,p){if(1&l&&(t.TgZ(0,"option",39),t._uU(1),t.ALo(2,"date"),t.qZA()),2&l){const e=p.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",t.xi3(2,2,e.value,"MMMM YYYY")," ")}}function v(l,p){if(1&l&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&l){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.TDS,"1.2-2"))}}function C(l,p){if(1&l){const e=t.EpF();t.TgZ(0,"input",48),t.NdJ("ngModelChange",function(o){t.CHM(e);const r=t.oxw().$implicit;return t.KtG(r.TDS=o)})("input",function(){t.CHM(e);const o=t.oxw().$implicit,r=t.oxw();return t.KtG(r.setNetPayable(o.employeeId,o))}),t.qZA()}if(2&l){const e=t.oxw().$implicit;t.Q6J("ngModel",e.TDS)}}function P(l,p){if(1&l){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",40),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"number"),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.ALo(14,"number"),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"number"),t.qZA(),t.TgZ(18,"td"),t.YNc(19,v,3,4,"span",41),t.YNc(20,C,1,1,"input",42),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.ALo(23,"number"),t.qZA(),t.TgZ(24,"td"),t._uU(25),t.ALo(26,"number"),t.qZA(),t.TgZ(27,"td"),t._uU(28),t.ALo(29,"number"),t.qZA(),t.TgZ(30,"td"),t._uU(31),t.qZA(),t.TgZ(32,"td")(33,"div",43),t._UZ(34,"button",44),t.TgZ(35,"div",45)(36,"a",46),t.NdJ("click",function(){const r=t.CHM(e).$implicit,n=t.oxw();return t.KtG(n.flag=r._id)}),t._UZ(37,"i",47),t._uU(38," Edit "),t.qZA()()()()()}if(2&l){const e=p.$implicit,a=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.employeeCode),t.xp6(2),t.Oqu(null==e?null:e.employeeName),t.xp6(2),t.Oqu(null==e?null:e.department),t.xp6(2),t.Oqu(null==e?null:e.paidDays),t.xp6(2),t.Oqu(t.xi3(11,14,null==e?null:e.gross,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(14,17,null==e?null:e.PF,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(17,20,null==e?null:e.ESIC,"1.2-2")),t.xp6(3),t.Q6J("ngIf",e.status&&!("Draft"==e.status&&e._id==a.flag)),t.xp6(1),t.Q6J("ngIf",!e.status||"Draft"==e.status&&e._id==a.flag),t.xp6(2),t.Oqu(t.xi3(23,23,null==e?null:e.PT,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(26,26,null==e?null:e.advSalary,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(29,29,null==e?null:e.netPayable,"1.2-2")),t.xp6(3),t.Oqu(null==e?null:e.status),t.xp6(5),t.Q6J("accessType",a.rolePermissionActions.editAction)}}const S=function(l,p,e,a){return{page:l,pageSize:p,collection:e,search:a}},D=[{path:"",component:(()=>{class l{constructor(e,a,o,r,n){this.router=e,this.spinner=a,this.toastService=o,this.payrollService=r,this.exportExcelService=n,this.page=1,this.pageSize=9,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.originTableData=[],this.user={},this.fromDate="",this.toDate="",this.payrollForMonthYear=null,this.submitted=!1,this.date=new Date,this.flag=-1,this.month=new Date(this.date.getFullYear(),this.date.getMonth()+1,1).toISOString().slice(0,7),this.monthOptions=[{value:new Date(this.date.getFullYear(),this.date.getMonth()+1,1).toISOString().slice(0,7)},{value:new Date(this.date.getFullYear(),this.date.getMonth(),1).toISOString().slice(0,7)},{value:new Date(this.date.getFullYear(),this.date.getMonth()-1,1).toISOString().slice(0,7)}],this.btnFlag=!0,this.rolePermissionActions=y.a1}ngOnInit(){}trackByFn(e,a){return a?._id}reset(){this.payrollForMonthYear=null,this.tableData=[],this.collection=this.tableData.length}setNetPayable(e,a){let o=this.tableData.map(r=>r.employeeId).indexOf(e);this.tableData[o].netPayable=a.gross-(a.PF+a.ESIC+a.TDS+a.advSalary+a.PT)}create(e){this.spinner.show(),this.tableData=this.tableData.map(a=>(a.status=e,a)),this.payrollService.create(this.tableData).subscribe(a=>{this.spinner.hide(),this.submitted=!1,this.tableData=[],this.payrollForMonthYear=null,this.flag=-1,this.toastService.success(a.message)})}navigateTo(e,a,o){this.router.navigate([e],{queryParams:{id:a,action:o}})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.flag=-1;break;case"EXCEL":this.excelDownload(this.tableData);break;case"PAGE":this.page=e.value}}getAllData(){this.spinner.show(),this.payrollService.getAllMasterData(this.payrollForMonthYear).subscribe(e=>{this.spinner.hide(),this.tableData=e.salaryPayrollOfMonth,this.collection=e.salaryPayrollOfMonth.length,this.btnFlag=this.tableData.every(a=>"Approved"==a.status)})}onSort({column:e,direction:a}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.tableData=""===a||""===e?this.tableData:[...this.tableData].sort((o,r)=>{let n="string"==typeof o[e]?o[e].toLowerCase():o[e],m="string"==typeof r[e]?r[e].toLowerCase():r[e];const _=n<m?-1:n>m?1:0;return"asc"===a?_:-_})}excelDownload(e){let a={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}},o={title:"Payroll List",csvData:e,headers:[{header:"Employee Code",key:"employeeCode",...a},{header:"Employee Name",key:"employeeName",...a},{header:"Department",key:"department",...a},{header:"Paid Days",key:"paidDays",...a},{header:"Gross",key:"gross",...a},{header:"PF",key:"PF",...a},{header:"ESIC",key:"ESIC",...a},{header:"TDS",key:"TDS",...a},{header:"PT",key:"PT",...a},{header:"Adv. Salary",key:"advSalary",...a},{header:"Net Payable",key:"netPayable",...a},{header:"Status",key:"status",...a}]};this.exportExcelService.exportExcel(o)}static#t=this.\u0275fac=function(a){return new(a||l)(t.Y36(h.F0),t.Y36(d.V),t.Y36(d.kl),t.Y36(f.Et),t.Y36(d.Ol))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-payroll"]],viewQuery:function(a,o){if(1&a&&t.Gf(g.j,5),2&a){let r;t.iGM(r=t.CRH())&&(o.headers=r)}},decls:62,vars:21,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],[1,"row","justify-content-center","mt-4"],[1,"col-4"],[1,"row"],[1,"col-5","mt-1","pe-1"],[1,"form-label","text-nowrap"],[1,"text-danger"],[1,"col-1","ps-3","pe-0"],[1,"fa","fa-caret-right","mt-1","text-secondary"],[1,"col-6","ps-0"],[1,"form-select",3,"ngModel","ngModelChange","change"],["disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"row","mt-3","line-border"],[1,"table-responsive",2,"min-height","33rem"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","employeeCode",3,"sort"],["sortable","employeeName",1,"text-start",3,"sort"],["sortable","department",3,"sort"],["sortable","paidDays",3,"sort"],["sortable","gross",3,"sort"],["sortable","PF",3,"sort"],["sortable","ESIC",3,"sort"],["sortable","TDS",3,"sort"],["sortable","PT",3,"sort"],["sortable","advSalary",3,"sort"],["sortable","netPayable",3,"sort"],["sortable","isActive",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"line-border"],["appAccessControl","",1,"text-center","mt-2",3,"accessType"],["type","button",1,"btn","bg-primary","px-5","mx-2",3,"click"],[1,"btn","bg-primary","px-5","mx-2",3,"disabled","click"],["type","button",1,"btn","bg-primary","px-5","mx-2",3,"disabled","click"],[3,"value"],[1,"text-start"],[4,"ngIf"],["class","form-control form-control-sm w-25","type","number",3,"ngModel","ngModelChange","input",4,"ngIf"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["type","number",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelChange","input"]],template:function(a,o){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Payroll Management Staff"),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Payroll for Month'Year"),t._UZ(10,"span",8),t.qZA()(),t.TgZ(11,"div",9),t._UZ(12,"i",10),t.qZA(),t.TgZ(13,"div",11)(14,"select",12),t.NdJ("ngModelChange",function(n){return o.payrollForMonthYear=n})("change",function(){return o.getAllData()}),t.TgZ(15,"option",13),t._uU(16,"Select Month"),t.qZA(),t.YNc(17,A,3,5,"option",14),t.qZA()()()()(),t._UZ(18,"hr",15),t.TgZ(19,"div",16)(20,"app-setting-header",17),t.NdJ("dataChange",function(n){return o.eventHeader(n)}),t.qZA(),t.TgZ(21,"table",18)(22,"thead",19)(23,"tr",20)(24,"th",21),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(25,"Employee Code"),t.qZA(),t.TgZ(26,"th",22),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(27,"Employee Name"),t.qZA(),t.TgZ(28,"th",23),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(29,"Department"),t.qZA(),t.TgZ(30,"th",24),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(31,"Paid Days"),t.qZA(),t.TgZ(32,"th",25),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(33,"Gross"),t.qZA(),t.TgZ(34,"th",26),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(35,"PF"),t.qZA(),t.TgZ(36,"th",27),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(37,"ESIC"),t.qZA(),t.TgZ(38,"th",28),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(39,"TDS"),t.qZA(),t.TgZ(40,"th",29),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(41,"PT"),t.qZA(),t.TgZ(42,"th",30),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(43,"Adv. Salary"),t.qZA(),t.TgZ(44,"th",31),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(45,"Net Payable"),t.qZA(),t.TgZ(46,"th",32),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(47,"Status"),t.qZA(),t.TgZ(48,"th"),t._uU(49,"Action"),t.qZA()()(),t.TgZ(50,"tbody"),t.YNc(51,P,39,32,"tr",33),t.ALo(52,"slice"),t.ALo(53,"searchFi1ter"),t.qZA()()(),t._UZ(54,"hr",34),t.TgZ(55,"div",35)(56,"button",36),t.NdJ("click",function(){return o.reset()}),t._uU(57,"Reset"),t.qZA(),t.TgZ(58,"button",37),t.NdJ("click",function(){return o.create("Draft")}),t._uU(59,"Save"),t.qZA(),t.TgZ(60,"button",38),t.NdJ("click",function(){return o.create("Approved")}),t._uU(61," Approve "),t.qZA()()()),2&a&&(t.xp6(14),t.Q6J("ngModel",o.payrollForMonthYear),t.xp6(1),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",o.monthOptions),t.xp6(3),t.Q6J("data",t.l5B(16,S,o.page,o.pageSize,o.collection,o.search)),t.xp6(31),t.Q6J("ngForOf",t.Dn7(52,9,t.xi3(53,13,o.tableData,o.search),(o.page-1)*o.pageSize,(o.page-1)*o.pageSize+o.pageSize))("ngForTrackBy",o.trackByFn),t.xp6(4),t.Q6J("accessType",o.rolePermissionActions.createAction),t.xp6(3),t.Q6J("disabled",o.btnFlag),t.xp6(2),t.Q6J("disabled",o.btnFlag))},dependencies:[u.sg,u.O5,T.P,i.YN,i.Kr,i.Fj,i.wV,i.EJ,i.JJ,i.On,g.j,b.J,u.OU,u.JJ,u.uU,Z.G],styles:[".fa-caret-right[_ngcontent-%COMP%]{font-size:2rem!important;margin-right:4rem!important}"]})}return l})()}];let U=(()=>{class l{static#t=this.\u0275fac=function(a){return new(a||l)};static#e=this.\u0275mod=t.oAB({type:l});static#o=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(D),h.Bz]})}return l})();var q=s(56208);let J=(()=>{class l{static#t=this.\u0275fac=function(a){return new(a||l)};static#e=this.\u0275mod=t.oAB({type:l});static#o=this.\u0275inj=t.cJS({imports:[u.ez,U,q.m]})}return l})()}}]);