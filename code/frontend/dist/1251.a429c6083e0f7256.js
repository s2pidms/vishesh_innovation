"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1251],{91251:(D,d,i)=>{i.r(d),i.d(d,{GtRequestFulfillmentStatusModule:()=>W});var h=i(96814),p=i(1076),m=i(43818),e=i(13107);i(95249),i(90861),i(72834);var I=i(28402);let M=[55,55,55,55,55,55,55,55,55,55],k="GT Request Fulfillment Status Report",q=[{header:"GTR No",key:"GTRequestNo",...e.t},{header:"GTR Date",key:"GTRequestDate",...e.t},{header:"Item Code",key:"itemCode",...e.t},{header:"Item Name",key:"itemName",...e.t},{header:"Item Description",key:"itemDescription",...e.t},{header:"UoM",key:"UOM",...e.t},{header:"GTR Qty",key:"GTRequestQty",...e.t},{header:"GT Qty",key:"GTQty",...e.t},{header:"GTR Status",key:"GTStatus",...e.t}];var t=i(65879),Q=i(54935),g=i(98977),K=i(88059),J=i(37285),y=i(60095),w=i(50363),B=i(59103);function x(n,u){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",34,35)(9,"span",36),t._uU(10),t.qZA()(),t.TgZ(11,"td",34,37)(13,"span",36),t._uU(14),t.qZA()(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"UOMUnitsMaster"),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA()()),2&n){const o=u.$implicit,r=t.MAs(8),a=t.MAs(12);t.xp6(2),t.Oqu(null==o?null:o.GTRequestNo),t.xp6(2),t.Oqu(null==o?null:o.GTRequestDate),t.xp6(2),t.Oqu(null==o?null:o.itemCode),t.xp6(1),t.Udp("width",r.clientWidth),t.xp6(2),t.Q6J("positionTarget",r)("ngbTooltip",o.itemName),t.xp6(1),t.hij(" ",o.itemName," "),t.xp6(1),t.Udp("width",a.clientWidth),t.xp6(2),t.Q6J("positionTarget",a)("ngbTooltip",o.itemDescription),t.xp6(1),t.hij(" ",o.itemDescription," "),t.xp6(2),t.Oqu(t.lcZ(17,17,null==o?null:o.UOM)),t.xp6(3),t.Oqu(null==o?null:o.GTRequestQty),t.xp6(2),t.Oqu(null==o?null:o.GTQty),t.xp6(2),t.Oqu(null==o?null:o.GTStatus)}}const Y=function(n,u,o,r){return{page:n,pageSize:u,collection:o,search:r,type:"list",pdfDisplay:!0}};let X=(()=>{var n;class u{constructor(r,a,l,s,j,H){this.gtRequestService=r,this.exportExcelService=a,this.spinner=l,this.utilityService=s,this.activatedRoute=j,this.exportToPDFService=H,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.statusOptions=[],this.GRStatus="All",this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}trackByFn(r,a){return a?._id}eventHeader(r){switch(r.key){case"SEARCH":this.search=r.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=r.value,this.getAll()}}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.GRStatus="All",this.getAll()}getAll(r=!1,a=""){this.spinner.show();let l={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:r,fromDate:this.fromDate,toDate:this.toDate,status:this.GRStatus};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.gtRequestService.getAllGtRequestFulfillmentReports(l).subscribe(s=>{"EXCEL"==a?this.excelDownload(s.rows):"PDF"==a?this.pdfDownload(s.rows):(this.tableData=s.rows,this.statusOptions=s.statusOptions,this.collection=s.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(r){let a=(n=>(0,I.J)({data:n,headers:q,widths:M,title:k}))(r);this.exportToPDFService.generatePdf(a.tableData,a.title)}excelDownload(r){this.exportExcelService.exportExcel((n=>({title:k,csvData:n,headers:q}))(r))}onSort({column:r,direction:a}){this.headers.forEach(l=>{l.sortable!==r&&(l.direction="")}),this.column=r,this.direction="asc"==a?1:-1,this.getAll()}}return(n=u).\u0275fac=function(r){return new(r||n)(t.Y36(Q.pq),t.Y36(g.Ol),t.Y36(g.V),t.Y36(g.tI),t.Y36(p.gz),t.Y36(g.$L))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-gt-request-fulfillment-status"]],viewQuery:function(r,a){if(1&r&&t.Gf(m.j,5),2&r){let l;t.iGM(l=t.CRH())&&(a.headers=l)}},decls:58,vars:13,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],["bindLabel","label","bindValue","value",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","GTRequestNo",3,"sort"],["sortable","GTRequestDate",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","GTRequestQty",3,"sort"],["sortable","GTQty",3,"sort"],["sortable","GTStatus",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""]],template:function(r,a){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"GT Request Fulfillment Status Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"GT Request Status"),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(s){return a.GRStatus=s}),t.qZA(),t.TgZ(11,"span",9),t._UZ(12,"img",10),t.qZA()(),t.TgZ(13,"div",11)(14,"label",7),t._uU(15," From Date "),t.TgZ(16,"span",12),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",13),t.NdJ("ngModelChange",function(s){return a.fromDate=s}),t.qZA()(),t.TgZ(19,"div",11)(20,"label",7),t._uU(21," To Date "),t.TgZ(22,"span",12),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",13),t.NdJ("ngModelChange",function(s){return a.toDate=s}),t.qZA()(),t.TgZ(25,"div",14)(26,"span",15),t._UZ(27,"img",10),t.qZA(),t.TgZ(28,"button",16),t.NdJ("click",function(){return a.getAll()}),t._uU(29,"Apply Filter"),t.qZA(),t.TgZ(30,"button",17),t.NdJ("click",function(){return a.reset()}),t._uU(31,"Reset Filter"),t.qZA()()(),t._UZ(32,"hr",18),t.TgZ(33,"div",19)(34,"app-setting-header",20),t.NdJ("dataChange",function(s){return a.eventHeader(s)}),t.qZA(),t.TgZ(35,"table",21)(36,"thead",22)(37,"tr",23)(38,"th",24),t.NdJ("sort",function(s){return a.onSort(s)}),t._uU(39,"GTR No."),t.qZA(),t.TgZ(40,"th",25),t.NdJ("sort",function(s){return a.onSort(s)}),t._uU(41,"GTR Date"),t.qZA(),t.TgZ(42,"th",26),t.NdJ("sort",function(s){return a.onSort(s)}),t._uU(43,"Item Code"),t.qZA(),t.TgZ(44,"th",27),t.NdJ("sort",function(s){return a.onSort(s)}),t._uU(45,"Item Name"),t.qZA(),t.TgZ(46,"th",28),t.NdJ("sort",function(s){return a.onSort(s)}),t._uU(47,"Item Description"),t.qZA(),t.TgZ(48,"th",29),t.NdJ("sort",function(s){return a.onSort(s)}),t._uU(49,"UoM"),t.qZA(),t.TgZ(50,"th",30),t.NdJ("sort",function(s){return a.onSort(s)}),t._uU(51,"GTR Qty"),t.qZA(),t.TgZ(52,"th",31),t.NdJ("sort",function(s){return a.onSort(s)}),t._uU(53,"GT Qty"),t.qZA(),t.TgZ(54,"th",32),t.NdJ("sort",function(s){return a.onSort(s)}),t._uU(55,"GTR Status"),t.qZA()()(),t.TgZ(56,"tbody"),t.YNc(57,x,24,19,"tr",33),t.qZA()()()()()),2&r&&(t.xp6(10),t.Q6J("items",a.statusOptions)("clearable",!1)("ngModel",a.GRStatus),t.xp6(8),t.Q6J("ngModel",a.fromDate),t.xp6(6),t.Q6J("ngModel",a.toDate),t.xp6(10),t.Q6J("data",t.l5B(8,Y,a.page,a.pageSize,a.collection,a.search)),t.xp6(23),t.Q6J("ngForOf",a.tableData)("ngForTrackBy",a.trackByFn))},dependencies:[h.sg,K.P,J._L,y.Fj,y.JJ,y.On,w.w9,m.j,B.S],encapsulation:2}),u})();var V=i(56208);const z=[{path:"",component:X}];let W=(()=>{var n;class u{}return(n=u).\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.ez,p.Bz.forChild(z),V.m]}),u})()},13107:(D,d,i)=>{i.d(d,{t:()=>h});const h={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(D,d,i)=>{i.d(d,{J:()=>h});const h=({data:p,headers:m,widths:e,title:S})=>({tableData:{widths:e,headerRows:1,body:[m.map(_=>({text:_.header,style:"header"})),...p.map(_=>m.map(R=>({style:"subheader",text:_[R.key]})))]},title:S})}}]);