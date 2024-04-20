"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8445],{28445:(v,h,r)=>{r.r(h),r.d(h,{CreditNoteDetailsModule:()=>A});var p=r(96814),c=r(1076),g=r(43818),t=r(65879),m=r(59840),u=r(98977),C=r(88059),d=r(60095),D=r(50363),_=r(14906);function b(a,l){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",27),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td",27),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA()()),2&a){const s=l.$implicit;t.xp6(2),t.Oqu(null==s?null:s.CNNumber),t.xp6(2),t.Oqu(null==s?null:s.CNDateS),t.xp6(2),t.Oqu(null==s?null:s.customerName),t.xp6(2),t.Oqu(null==s?null:s.SKUCode),t.xp6(2),t.Oqu(null==s?null:s.SKUDescription),t.xp6(2),t.Oqu(null==s?null:s.returnQty),t.xp6(2),t.Oqu(null==s?null:s.standardRate),t.xp6(2),t.Oqu(null==s?null:s.lineValue)}}const N=function(a,l,s,n){return{page:a,pageSize:l,collection:s,search:n,type:"list"}};let Z=(()=>{var a;class l{constructor(n,e,o,i,y){this.creditNoteService=n,this.exportExcelService=e,this.spinner=o,this.utilityService=i,this.activatedRoute=y,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.company={},this.originTableData=[],this.customerOptions=[],this.statusOptions=[],this.fromDate="",this.toDate="",this.customerId="",this.status=""}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getFiscalDate(),this.getAll()}getFiscalDate(){let n=this.utilityService.getCurrentMonthDates();this.fromDate=n.fromDate,this.toDate=n.toDate}trackByFn(n,e){return e?._id}eventHeader(n){switch(n.key){case"SEARCH":this.search=n.value,this.getAll();break;case"EXCEL":this.getAll(!0);break;case"PAGE":this.page=n.value,this.getAll()}}reset(){this.getFiscalDate(),this.customerId="",this.status="",this.getAll()}getAll(n=!1){this.spinner.show();let e={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:n,customer:this.customerId,fromDate:this.fromDate,toDate:this.toDate,CNStatus:this.status};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.creditNoteService.getAllCNDetailsReports(e).subscribe(o=>{n?this.excelDownload(o.rows):(this.tableData=o.rows,this.originTableData=o.rows,this.statusOptions=o.statusOptions,this.customerOptions=o.customers,this.collection=o.count,this.company=o.company,this.spinner.hide())})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(n){let e={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}},o={title:"Credit Note Details",csvData:n,headers:[{header:" Credit Note #",key:"CNNumber",...e},{header:"Date",key:"CNDateS",...e},{header:"Customer",key:"customerName",...e},{header:"SKU Code",key:"SKUCode",...e},{header:" SKU Description",key:"SKUDescription",...e},{header:"Quantity",key:"returnQty",...e},{header:"Rate",key:"standardRate",...e},{header:"Total Amount",key:"lineValue",...e}]};this.exportExcelService.exportExcel(o)}onSort({column:n,direction:e}){this.headers.forEach(o=>{o.sortable!==n&&(o.direction="")}),this.column=n,this.direction="asc"==e?1:-1,this.getAll()}}return(a=l).\u0275fac=function(n){return new(n||a)(t.Y36(m.hT),t.Y36(u.Ol),t.Y36(u.V),t.Y36(u.tI),t.Y36(c.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-credit-note-details"]],viewQuery:function(n,e){if(1&n&&t.Gf(g.j,5),2&n){let o;t.iGM(o=t.CRH())&&(e.headers=o)}},decls:56,vars:19,consts:[[1,"reportTablePage"],[1,"row","justify-content-center"],[1,"col-md-12"],[1,"row","pb-4","mb-4","border-bottom","mx-0"],[1,"col","mt-1","ps-0","pe-3"],[1,"form-label","mb-2"],["bindLabel","customerName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"col","mt-1","px-3"],[1,"text-danger"],["bindLabel","statusOptions","bindValue","statusOptions",3,"items","clearable","ngModel","ngModelChange"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-auto","align-self-end","ps-3","pe-0"],["type","button",1,"btn","btn-primary",3,"click"],[3,"data","dataChange"],[1,"table-responsive","mb-0"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","CNNumber",3,"sort"],["sortable","CNDateS",3,"sort"],["sortable","customerName",1,"text-start",3,"sort"],["sortable","SKUCode",3,"sort"],["sortable","SKUDescription",1,"text-start",3,"sort"],["sortable","returnQty",3,"sort"],["sortable","standardRate",3,"sort"],["sortable","lineValue",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"label",5),t._uU(6," Select Customer"),t.qZA(),t.TgZ(7,"ng-select",6),t.NdJ("ngModelChange",function(i){return e.customerId=i}),t.qZA()(),t.TgZ(8,"div",7)(9,"label",5),t._uU(10," Select Status "),t.TgZ(11,"span",8),t._uU(12,"*"),t.qZA()(),t.TgZ(13,"ng-select",9),t.NdJ("ngModelChange",function(i){return e.status=i}),t.qZA()(),t.TgZ(14,"div",7)(15,"label",5),t._uU(16," From Date "),t.TgZ(17,"span",8),t._uU(18,"*"),t.qZA()(),t.TgZ(19,"input",10),t.NdJ("ngModelChange",function(i){return e.fromDate=i}),t.qZA()(),t.TgZ(20,"div",7)(21,"label",5),t._uU(22," To Date "),t.TgZ(23,"span",8),t._uU(24,"*"),t.qZA()(),t.TgZ(25,"input",10),t.NdJ("ngModelChange",function(i){return e.toDate=i}),t.qZA()(),t.TgZ(26,"div",11)(27,"button",12),t.NdJ("click",function(){return e.getAll()}),t._uU(28,"Apply Filter"),t.qZA()(),t.TgZ(29,"div",11)(30,"button",12),t.NdJ("click",function(){return e.reset()}),t._uU(31,"Reset Filter"),t.qZA()()(),t.TgZ(32,"app-setting-header",13),t.NdJ("dataChange",function(i){return e.eventHeader(i)}),t.qZA(),t.TgZ(33,"div",14)(34,"table",15)(35,"thead",16)(36,"tr",17)(37,"th",18),t.NdJ("sort",function(i){return e.onSort(i)}),t._uU(38,"Credit Note #"),t.qZA(),t.TgZ(39,"th",19),t.NdJ("sort",function(i){return e.onSort(i)}),t._uU(40,"Date"),t.qZA(),t.TgZ(41,"th",20),t.NdJ("sort",function(i){return e.onSort(i)}),t._uU(42,"Customer"),t.qZA(),t.TgZ(43,"th",21),t.NdJ("sort",function(i){return e.onSort(i)}),t._uU(44,"SKU Code"),t.qZA(),t.TgZ(45,"th",22),t.NdJ("sort",function(i){return e.onSort(i)}),t._uU(46),t.ALo(47,"labelTranslate"),t.qZA(),t.TgZ(48,"th",23),t.NdJ("sort",function(i){return e.onSort(i)}),t._uU(49,"Quantity"),t.qZA(),t.TgZ(50,"th",24),t.NdJ("sort",function(i){return e.onSort(i)}),t._uU(51,"Rate"),t.qZA(),t.TgZ(52,"th",25),t.NdJ("sort",function(i){return e.onSort(i)}),t._uU(53,"Total Amount"),t.qZA()()(),t.TgZ(54,"tbody"),t.YNc(55,b,17,8,"tr",26),t.qZA()()()()()()),2&n&&(t.xp6(7),t.Q6J("items",e.customerOptions)("clearable",!1)("ngModel",e.customerId),t.xp6(6),t.Q6J("items",e.statusOptions)("clearable",!1)("ngModel",e.status),t.xp6(6),t.Q6J("ngModel",e.fromDate),t.xp6(6),t.Q6J("ngModel",e.toDate),t.xp6(7),t.Q6J("data",t.l5B(14,N,e.page,e.pageSize,e.collection,e.search)),t.xp6(14),t.hij(" ",t.lcZ(47,12,"SKU Description")," "),t.xp6(9),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn))},dependencies:[p.sg,C.P,d.Fj,d.JJ,d.On,D.w9,g.j,_.c],encapsulation:2}),l})();var T=r(56208);const f=[{path:"",component:Z}];let A=(()=>{var a;class l{}return(a=l).\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[p.ez,c.Bz.forChild(f),T.m]}),l})()}}]);