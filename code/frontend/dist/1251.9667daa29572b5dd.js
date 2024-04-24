"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1251],{91251:(D,u,l)=>{l.r(u),l.d(u,{GtRequestFulfillmentStatusModule:()=>W});var d=l(96814),c=l(1076),h=l(43818),e=l(13107);l(95249),l(90861),l(72834);var I=l(28402);let L=[55,55,55,55,55,55,55,55,55,55],k="GT Request Fulfillment Status Report",Z=[{header:"GTR No",key:"GTRequestNo",...e.t},{header:"GTR Date",key:"GTRequestDate",...e.t},{header:"Item Code",key:"itemCode",...e.t},{header:"Item Name",key:"itemName",...e.t},{header:"Item Description",key:"itemDescription",...e.t},{header:"UoM",key:"UOM",...e.t},{header:"GTR Qty",key:"GTRequestQty",...e.t},{header:"GT Qty",key:"GTQty",...e.t},{header:"GTR Status",key:"GTStatus",...e.t}];var t=l(65879),Q=l(54935),_=l(98977),K=l(88059),J=l(37285),S=l(60095),w=l(50363),B=l(59103);function x(n,y){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",34,35)(9,"span",36),t._uU(10),t.qZA()(),t.TgZ(11,"td",34,37)(13,"span",36),t._uU(14),t.qZA()(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"UOMUnitsMaster"),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA()()),2&n){const a=y.$implicit,o=t.MAs(8),s=t.MAs(12);t.xp6(2),t.Oqu(null==a?null:a.GTRequestNo),t.xp6(2),t.Oqu(null==a?null:a.GTRequestDate),t.xp6(2),t.Oqu(null==a?null:a.itemCode),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",a.itemName),t.xp6(1),t.hij(" ",a.itemName," "),t.xp6(1),t.Udp("width",s.clientWidth),t.xp6(2),t.Q6J("positionTarget",s)("ngbTooltip",a.itemDescription),t.xp6(1),t.hij(" ",a.itemDescription," "),t.xp6(2),t.Oqu(t.lcZ(17,17,null==a?null:a.UOM)),t.xp6(3),t.Oqu(null==a?null:a.GTRequestQty),t.xp6(2),t.Oqu(null==a?null:a.GTQty),t.xp6(2),t.Oqu(null==a?null:a.GTStatus)}}const Y=function(n,y,a,o){return{page:n,pageSize:y,collection:a,search:o,type:"list",pdfDisplay:!0}};let X=(()=>{class n{constructor(a,o,s,i,r,j){this.gtRequestService=a,this.exportExcelService=o,this.spinner=s,this.utilityService=i,this.activatedRoute=r,this.exportToPDFService=j,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.statusOptions=[],this.GRStatus="All",this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}trackByFn(a,o){return o?._id}eventHeader(a){switch(a.key){case"SEARCH":this.search=a.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=a.value,this.getAll()}}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.GRStatus="All",this.getAll()}getAll(a=!1,o=""){this.spinner.show();let s={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:a,fromDate:this.fromDate,toDate:this.toDate,status:this.GRStatus};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.gtRequestService.getAllGtRequestFulfillmentReports(s).subscribe(i=>{"EXCEL"==o?this.excelDownload(i.rows):"PDF"==o?this.pdfDownload(i.rows):(this.tableData=i.rows,this.statusOptions=i.statusOptions,this.collection=i.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(a){let o=(n=>(0,I.J)({data:n,headers:Z,widths:L,title:k}))(a);this.exportToPDFService.generatePdf(o.tableData,o.title)}excelDownload(a){this.exportExcelService.exportExcel((n=>({title:k,csvData:n,headers:Z}))(a))}onSort({column:a,direction:o}){this.headers.forEach(s=>{s.sortable!==a&&(s.direction="")}),this.column=a,this.direction="asc"==o?1:-1,this.getAll()}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(Q.pq),t.Y36(_.Ol),t.Y36(_.V),t.Y36(_.tI),t.Y36(c.gz),t.Y36(_.$L))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-gt-request-fulfillment-status"]],viewQuery:function(o,s){if(1&o&&t.Gf(h.j,5),2&o){let i;t.iGM(i=t.CRH())&&(s.headers=i)}},decls:58,vars:13,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],["bindLabel","label","bindValue","value",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","GTRequestNo",3,"sort"],["sortable","GTRequestDate",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","GTRequestQty",3,"sort"],["sortable","GTQty",3,"sort"],["sortable","GTStatus",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"GT Request Fulfillment Status Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"GT Request Status"),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(r){return s.GRStatus=r}),t.qZA(),t.TgZ(11,"span",9),t._UZ(12,"img",10),t.qZA()(),t.TgZ(13,"div",11)(14,"label",7),t._uU(15," From Date "),t.TgZ(16,"span",12),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",13),t.NdJ("ngModelChange",function(r){return s.fromDate=r}),t.qZA()(),t.TgZ(19,"div",11)(20,"label",7),t._uU(21," To Date "),t.TgZ(22,"span",12),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",13),t.NdJ("ngModelChange",function(r){return s.toDate=r}),t.qZA()(),t.TgZ(25,"div",14)(26,"span",15),t._UZ(27,"img",10),t.qZA(),t.TgZ(28,"button",16),t.NdJ("click",function(){return s.getAll()}),t._uU(29,"Apply Filter"),t.qZA(),t.TgZ(30,"button",17),t.NdJ("click",function(){return s.reset()}),t._uU(31,"Reset Filter"),t.qZA()()(),t._UZ(32,"hr",18),t.TgZ(33,"div",19)(34,"app-setting-header",20),t.NdJ("dataChange",function(r){return s.eventHeader(r)}),t.qZA(),t.TgZ(35,"table",21)(36,"thead",22)(37,"tr",23)(38,"th",24),t.NdJ("sort",function(r){return s.onSort(r)}),t._uU(39,"GTR No."),t.qZA(),t.TgZ(40,"th",25),t.NdJ("sort",function(r){return s.onSort(r)}),t._uU(41,"GTR Date"),t.qZA(),t.TgZ(42,"th",26),t.NdJ("sort",function(r){return s.onSort(r)}),t._uU(43,"Item Code"),t.qZA(),t.TgZ(44,"th",27),t.NdJ("sort",function(r){return s.onSort(r)}),t._uU(45,"Item Name"),t.qZA(),t.TgZ(46,"th",28),t.NdJ("sort",function(r){return s.onSort(r)}),t._uU(47,"Item Description"),t.qZA(),t.TgZ(48,"th",29),t.NdJ("sort",function(r){return s.onSort(r)}),t._uU(49,"UoM"),t.qZA(),t.TgZ(50,"th",30),t.NdJ("sort",function(r){return s.onSort(r)}),t._uU(51,"GTR Qty"),t.qZA(),t.TgZ(52,"th",31),t.NdJ("sort",function(r){return s.onSort(r)}),t._uU(53,"GT Qty"),t.qZA(),t.TgZ(54,"th",32),t.NdJ("sort",function(r){return s.onSort(r)}),t._uU(55,"GTR Status"),t.qZA()()(),t.TgZ(56,"tbody"),t.YNc(57,x,24,19,"tr",33),t.qZA()()()()()),2&o&&(t.xp6(10),t.Q6J("items",s.statusOptions)("clearable",!1)("ngModel",s.GRStatus),t.xp6(8),t.Q6J("ngModel",s.fromDate),t.xp6(6),t.Q6J("ngModel",s.toDate),t.xp6(10),t.Q6J("data",t.l5B(8,Y,s.page,s.pageSize,s.collection,s.search)),t.xp6(23),t.Q6J("ngForOf",s.tableData)("ngForTrackBy",s.trackByFn))},dependencies:[d.sg,K.P,J._L,S.Fj,S.JJ,S.On,w.w9,h.j,B.S],encapsulation:2})}return n})();var V=l(56208);const z=[{path:"",component:X}];let W=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#a=this.\u0275inj=t.cJS({imports:[d.ez,c.Bz.forChild(z),V.m]})}return n})()},13107:(D,u,l)=>{l.d(u,{t:()=>d});const d={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(D,u,l)=>{l.d(u,{J:()=>d});const d=({data:c,headers:h,widths:e,title:g})=>({tableData:{widths:e,headerRows:1,body:[h.map(T=>({text:T.header,style:"header"})),...c.map(T=>h.map(R=>({style:"subheader",text:T[R.key]})))]},title:g})}}]);