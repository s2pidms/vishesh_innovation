"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4087],{94087:(q,u,a)=>{a.r(u),a.d(u,{StockTransferModule:()=>w});var m=a(96814),T=a(1076),l=a(60095),h=a(43818),y=a(35469),C=a(25116),t=a(65879),_=a(99007),p=a(99328),v=a(16897),b=a(88059),S=a(37285),Z=a(50363),k=a(53421),D=a(95346),A=a(59103);function N(s,c){1&s&&t._UZ(0,"div",44)}function U(s,c){1&s&&t._UZ(0,"div",45)}function E(s,c){1&s&&t._UZ(0,"div",46)}const I=function(){return{standalone:!0}};function F(s,c){if(1&s){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",35,36)(7,"span",37),t._uU(8),t.qZA()(),t.TgZ(9,"td",35,38)(11,"span",37),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"UOMUnitsMaster"),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.ALo(20,"number"),t.qZA(),t.TgZ(21,"td")(22,"div",39)(23,"input",40),t.NdJ("input",function(){const i=t.CHM(n).index,o=t.oxw();return t.KtG(o.setTransferQty(i))})("ngModelChange",function(e){const o=t.CHM(n).$implicit;return t.KtG(o.transferQty=e)}),t.qZA()()(),t.TgZ(24,"td")(25,"span",39),t.YNc(26,N,1,0,"div",41),t.YNc(27,U,1,0,"div",42),t.YNc(28,E,1,0,"div",43),t.qZA()()()}if(2&s){const n=c.$implicit,r=t.MAs(6),e=t.MAs(10);t.xp6(2),t.Oqu(null==n?null:n.MRNNumber),t.xp6(2),t.Oqu(null==n?null:n.itemCode),t.xp6(1),t.Udp("width",r.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",n.itemName)("positionTarget",r),t.xp6(1),t.hij(" ",null==n?null:n.itemName," "),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",n.itemDescription)("positionTarget",e),t.xp6(1),t.hij(" ",null==n?null:n.itemDescription," "),t.xp6(2),t.Oqu(null==n?null:n.unitConversion),t.xp6(2),t.Oqu(t.lcZ(17,20,null==n?null:n.UOM)),t.xp6(3),t.hij(" ",t.xi3(20,22,null==n?null:n.PPICIRQty,"1.2-2")," "),t.xp6(4),t.Q6J("ngModel",n.transferQty)("ngModelOptions",t.DdM(25,I)),t.xp6(3),t.Q6J("ngIf","green"==(null==n?null:n.status)),t.xp6(1),t.Q6J("ngIf","red"==(null==n?null:n.status)),t.xp6(1),t.Q6J("ngIf","orange"==(null==n?null:n.status))}}const J=function(s,c,n,r){return{page:s,pageSize:c,collection:n,search:r,excelDisplay:"none"}};let M=(()=>{var s;class c{trackByFn(r,e){return e?._id}constructor(r,e,i,o,f){this.stockTransferToStoreService=r,this.utilityService=e,this.spinner=i,this.toastService=o,this.validationService=f,this.page=1,this.pageSize=5,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.ESCPreviewArr=[],this.filterTableData=[],this.itemList=[],this.itemCategoryList=[],this.submitted=!1,this.action="create",this.isPreview=!1,this.isESCPreview=!1,this.rolePermissionActions=C.a1,this.masterData={autoIncrementNo:"",itemCategoryList:[],WIPList:[]},this.form=new l.nJ({stockTransferCode:new l.p4(""),stockTransferDate:new l.p4(this.utilityService.getTodayDate("YYYY-MM-DD"),[l.kI.required]),itemCategory:new l.p4(null,[l.kI.required]),department:new l.p4("Stores",[l.kI.required]),remarks:new l.p4(""),stockTransferDetails:new l.p4([])})}ngOnInit(){this.getInitialData()}get f(){return this.form.controls}eventHeader(r){switch(r.key){case"SEARCH":this.search=r.value;break;case"EXCEL":default:break;case"PAGE":this.page=r.value}}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,y.Ob))return;let r=this.form.value;r.stockTransferDetails=this.filterTableData,this.create(r)}create(r){this.spinner.show(),this.stockTransferToStoreService.create(r).subscribe(e=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(e.message),this.reset()})}reset(){this.form.reset(),this.filterTableData=[],this.getInitialData(),this.collection=this.filterTableData.length}getInitialData(){this.spinner.show(),this.stockTransferToStoreService.getAllMasterData({}).subscribe(r=>{this.form.controls.stockTransferCode.setValue(r.autoIncrementNo),this.form.controls.department.setValue("Stores"),this.form.controls.stockTransferDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.itemCategoryList=r?.itemCategoryList,this.tableData=r?.WIPList.map(e=>({MRN:e?.MRN,MRNNumber:e?.MRNNumber,item:e?.item,WIPId:e?._id,itemCode:e?.itemCode,itemName:e?.itemName,itemDescription:e?.itemDescription,unitConversion:e?.unitConversion,UOM:e?.UOM,PPICIRQty:e?.PPICQty,itemType:e?.itemType,GINDate:e?.GINDate,shelfLife:e?.shelfLife,transferQty:0,status:e?.status})),this.spinner.hide()})}filterItemCategory(r){this.isESCPreview=!1,this.isPreview=!1,this.filterTableData=this.tableData,this.filterTableData=this.filterTableData.filter(e=>e.itemType==r.category),this.collection=this.filterTableData.length}preview(){this.search="",this.ESCPreviewArr=this.filterTableData,this.filterTableData=this.filterTableData.filter(r=>r.transferQty>0),this.filterTableData.length&&(this.isPreview=!0,this.isESCPreview=!0),this.collection=this.filterTableData.length}ESCPreview(){this.search="",this.isPreview=!1,this.filterTableData=this.ESCPreviewArr,this.collection=this.filterTableData.length}setTransferQty(r){this.filterTableData[r+=(this.page-1)*this.pageSize].transferQty>this.filterTableData[r].PPICIRQty&&(this.filterTableData[r].transferQty=0,this.toastService.warning("Transfer Qty. should not be greater than PPIC-IR Qty. "))}onSort({column:r,direction:e}){this.headers.forEach(i=>{i.sortable!==r&&(i.direction="")}),this.filterTableData=""===e||""===r?this.filterTableData:[...this.filterTableData].sort((i,o)=>{let f="string"==typeof i[r]?i[r].toLowerCase():i[r],d="string"==typeof o[r]?o[r].toLowerCase():o[r];const g=f<d?-1:f>d?1:0;return"asc"===e?g:-g})}}return(s=c).\u0275fac=function(r){return new(r||s)(t.Y36(_.CW),t.Y36(p.tI),t.Y36(p.V),t.Y36(p.kl),t.Y36(v.RJ))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-stock-transfer-entry-form"]],viewQuery:function(r,e){if(1&r&&t.Gf(h.j,5),2&r){let i;t.iGM(i=t.CRH())&&(e.headers=i)}},decls:70,vars:21,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row"],[1,"col-md-3"],[1,"form-label","mb-0"],[1,"text-danger"],["type","date","formControlName","stockTransferDate","readonly","",1,"form-control"],["bindLabel","category","bindValue","category","formControlName","itemCategory",3,"items","clearable","change"],["type","text","formControlName","department","readonly","",1,"form-control"],["type","text","formControlName","remarks",1,"form-control"],[1,"row","line-border"],[3,"data","dataChange"],[1,"table-responsive","mt-0","text-wrap",2,"min-height","19rem"],[1,"table","table-bordered","mt-0","table-sm"],[1,"bg-info"],[1,"text-white"],["sortable","MRNNumber",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","unitConversion",3,"sort"],["sortable","UOM",3,"sort"],["sortable","PPICIRQty",3,"sort"],["sortable","transferQty",3,"sort"],["sortable","aging",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],["appAccessControl","",1,"col","text-center",3,"accessType"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-3","me-3",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"],[1,"text-start"],["itemName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["itemDescription",""],[1,"d-flex","justify-content-center"],["type","number",1,"form-control","form-control-xs","w-25",3,"ngModel","ngModelOptions","input","ngModelChange"],["class","flaggreen",4,"ngIf"],["class","flagred",4,"ngIf"],["class","flagYellow",4,"ngIf"],[1,"flaggreen"],[1,"flagred"],[1,"flagYellow"]],template:function(r,e){1&r&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Stock Transfer (Entry)"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"label",8),t._uU(10," Stock Transfer Date (GIN Date)"),t.TgZ(11,"span",9),t._uU(12,"*"),t.qZA()(),t._UZ(13,"input",10),t.qZA(),t.TgZ(14,"div",7)(15,"label",8),t._uU(16," Item Category"),t.TgZ(17,"span",9),t._uU(18,"*"),t.qZA()(),t.TgZ(19,"ng-select",11),t.NdJ("change",function(o){return e.filterItemCategory(o)}),t.qZA()(),t.TgZ(20,"div",7)(21,"label",8),t._uU(22," Department/(Location)"),t.TgZ(23,"span",9),t._uU(24,"*"),t.qZA()(),t._UZ(25,"input",12),t.qZA(),t.TgZ(26,"div",7)(27,"label",8),t._uU(28," Remarks "),t.qZA(),t._UZ(29,"input",13),t.qZA()()(),t._UZ(30,"hr",14),t.TgZ(31,"app-setting-header",15),t.NdJ("dataChange",function(o){return e.eventHeader(o)}),t.qZA(),t.TgZ(32,"div",16)(33,"table",17)(34,"thead",18)(35,"tr",19)(36,"th",20),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(37,"MRN No."),t.qZA(),t.TgZ(38,"th",21),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(39,"Item Code"),t.qZA(),t.TgZ(40,"th",22),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(41,"Item Name"),t.qZA(),t.TgZ(42,"th",23),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(43,"Item Description"),t.qZA(),t.TgZ(44,"th",24),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(45,"Units Conversion"),t.qZA(),t.TgZ(46,"th",25),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(47,"UoM"),t.qZA(),t.TgZ(48,"th",26),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(49,"PPIC-IR Qty."),t.qZA(),t.TgZ(50,"th",27),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(51,"Transfer Qty."),t.qZA(),t.TgZ(52,"th",28),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(53,"Aging"),t.qZA()()(),t.TgZ(54,"tbody"),t.YNc(55,F,29,26,"tr",29),t.ALo(56,"slice"),t.ALo(57,"searchFi1ter"),t.qZA()()(),t._UZ(58,"hr",14),t.TgZ(59,"div",6)(60,"div",30)(61,"div",31)(62,"button",32),t.NdJ("click",function(){return e.reset()}),t._uU(63,"Reset"),t.qZA(),t.TgZ(64,"button",33),t.NdJ("click",function(){return e.ESCPreview()}),t._uU(65," Esc Preview "),t.qZA(),t.TgZ(66,"button",32),t.NdJ("click",function(){return e.preview()}),t._uU(67,"Preview"),t.qZA(),t.TgZ(68,"button",34),t.NdJ("click",function(){return e.submit()}),t._uU(69," Save "),t.qZA()()()()()()),2&r&&(t.Q6J("formGroup",e.form),t.xp6(19),t.Q6J("items",e.itemCategoryList)("clearable",!1),t.xp6(12),t.Q6J("data",t.l5B(16,J,e.page,e.pageSize,e.collection,e.search)),t.xp6(24),t.Q6J("ngForOf",t.Dn7(56,9,t.xi3(57,13,e.filterTableData,e.search),(e.page-1)*e.pageSize,(e.page-1)*e.pageSize+e.pageSize))("ngForTrackBy",e.trackByFn),t.xp6(5),t.Q6J("accessType",e.rolePermissionActions.createAction),t.xp6(4),t.Q6J("disabled",!e.isESCPreview),t.xp6(4),t.Q6J("disabled",!e.isPreview))},dependencies:[m.sg,m.O5,b.P,S._L,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.sg,l.u,l.On,Z.w9,h.j,k.J,m.OU,m.JJ,D.G,A.S],encapsulation:2}),c})();var P=a(56208);const Q=[{path:"",redirectTo:"stock-transfer-entry-form",pathMatch:"full"},{path:"stock-transfer-entry-form",component:M}];let w=(()=>{var s;class c{}return(s=c).\u0275fac=function(r){return new(r||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[m.ez,T.Bz.forChild(Q),P.m]}),c})()}}]);