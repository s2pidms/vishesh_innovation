"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1859],{41859:(w,p,a)=>{a.r(p),a.d(p,{StockTransferModule:()=>Q});var m=a(96814),g=a(1076),l=a(60095),h=a(43818),T=a(35469),y=a(25116),t=a(65879),C=a(38011),f=a(2742),_=a(16897),b=a(88059),v=a(37285),Z=a(50363),S=a(53421),D=a(95346),k=a(59103);function A(s,c){1&s&&t._UZ(0,"div",44)}function N(s,c){1&s&&t._UZ(0,"div",45)}function U(s,c){1&s&&t._UZ(0,"div",46)}const E=function(){return{standalone:!0}};function I(s,c){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",35,36)(7,"span",37),t._uU(8),t.qZA()(),t.TgZ(9,"td",35,38)(11,"span",37),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"UOMUnitsMaster"),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.ALo(20,"number"),t.qZA(),t.TgZ(21,"td")(22,"div",39)(23,"input",40),t.NdJ("input",function(){const i=t.CHM(e).index,o=t.oxw();return t.KtG(o.setTransferQty(i))})("ngModelChange",function(r){const o=t.CHM(e).$implicit;return t.KtG(o.transferQty=r)}),t.qZA()()(),t.TgZ(24,"td")(25,"span",39),t.YNc(26,A,1,0,"div",41),t.YNc(27,N,1,0,"div",42),t.YNc(28,U,1,0,"div",43),t.qZA()()()}if(2&s){const e=c.$implicit,n=t.MAs(6),r=t.MAs(10);t.xp6(2),t.Oqu(null==e?null:e.MRNNumber),t.xp6(2),t.Oqu(null==e?null:e.itemCode),t.xp6(1),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("positionTarget",n)("ngbTooltip",e.itemName),t.xp6(1),t.hij(" ",null==e?null:e.itemName," "),t.xp6(1),t.Udp("width",r.clientWidth),t.xp6(2),t.Q6J("positionTarget",r)("ngbTooltip",e.itemDescription),t.xp6(1),t.hij(" ",null==e?null:e.itemDescription," "),t.xp6(2),t.Oqu(null==e?null:e.unitConversion),t.xp6(2),t.Oqu(t.lcZ(17,20,null==e?null:e.UOM)),t.xp6(3),t.hij(" ",t.xi3(20,22,null==e?null:e.PPICIRQty,"1.2-2")," "),t.xp6(4),t.Q6J("ngModel",e.transferQty)("ngModelOptions",t.DdM(25,E)),t.xp6(3),t.Q6J("ngIf","green"==(null==e?null:e.status)),t.xp6(1),t.Q6J("ngIf","red"==(null==e?null:e.status)),t.xp6(1),t.Q6J("ngIf","orange"==(null==e?null:e.status))}}const J=function(s,c,e,n){return{page:s,pageSize:c,collection:e,search:n,excelDisplay:"none"}};let F=(()=>{class s{trackByFn(e,n){return n?._id}constructor(e,n,r,i,o){this.stockTransferToStoreService=e,this.utilityService=n,this.spinner=r,this.toastService=i,this.validationService=o,this.page=1,this.pageSize=6,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.departments=[],this.ESCPreviewArr=[],this.filterTableData=[],this.itemList=[],this.itemCategoryList=[],this.submitted=!1,this.action="create",this.isPreview=!1,this.isESCPreview=!1,this.rolePermissionActions=y.a1,this.masterData={autoIncrementNo:"",itemCategoryList:[],WIPList:[]},this.form=new l.nJ({stockTransferCode:new l.p4(""),stockTransferDate:new l.p4(this.utilityService.getTodayDate("YYYY-MM-DD"),[l.kI.required]),itemCategory:new l.p4(null,[l.kI.required]),department:new l.p4("Stores",[l.kI.required]),remarks:new l.p4(""),stockTransferDetails:new l.p4([])})}ngOnInit(){this.getInitialData()}get f(){return this.form.controls}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value;break;case"EXCEL":default:break;case"PAGE":this.page=e.value}}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,T.Ob))return;let e=this.form.value;e.stockTransferDetails=this.filterTableData,this.create(e)}create(e){this.spinner.show(),this.stockTransferToStoreService.create(e).subscribe(n=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(n.message),this.reset()})}reset(){this.form.reset(),this.filterTableData=[],this.getInitialData(),this.collection=this.filterTableData.length}getInitialData(){this.spinner.show(),this.stockTransferToStoreService.getAllMasterData({}).subscribe(e=>{this.form.controls.stockTransferCode.setValue(e.autoIncrementNo),this.form.controls.department.setValue("Stores"),this.form.controls.stockTransferDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.departments=e?.department,this.itemCategoryList=e?.itemCategoryList,this.tableData=e?.WIPList.map(n=>({MRN:n?.MRN,MRNNumber:n?.MRNNumber,item:n?.item,WIPId:n?._id,itemCode:n?.itemCode,itemName:n?.itemName,itemDescription:n?.itemDescription,unitConversion:n?.unitConversion,UOM:n?.UOM,PPICIRQty:n?.PPICQty,itemType:n?.itemType,GINDate:n?.GINDate,shelfLife:n?.shelfLife,transferQty:0,status:n?.status})),this.spinner.hide()})}filterItemCategory(e){this.isESCPreview=!1,this.isPreview=!1,this.filterTableData=this.tableData,this.filterTableData=this.filterTableData.filter(n=>n.itemType==e.category),this.collection=this.filterTableData.length}preview(){this.search="",this.ESCPreviewArr=this.filterTableData,this.filterTableData=this.filterTableData.filter(e=>e.transferQty>0),this.filterTableData.length&&(this.isPreview=!0,this.isESCPreview=!0),this.collection=this.filterTableData.length}ESCPreview(){this.search="",this.isPreview=!1,this.filterTableData=this.ESCPreviewArr,this.collection=this.filterTableData.length}setTransferQty(e){this.filterTableData[e+=(this.page-1)*this.pageSize].transferQty>this.filterTableData[e].PPICIRQty&&(this.filterTableData[e].transferQty=0,this.toastService.warning("Transfer Qty. should not be greater than PPIC-IR Qty. "))}onSort({column:e,direction:n}){this.headers.forEach(r=>{r.sortable!==e&&(r.direction="")}),this.filterTableData=""===n||""===e?this.filterTableData:[...this.filterTableData].sort((r,i)=>{let o="string"==typeof r[e]?r[e].toLowerCase():r[e],u="string"==typeof i[e]?i[e].toLowerCase():i[e];const d=o<u?-1:o>u?1:0;return"asc"===n?d:-d})}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(C.CW),t.Y36(f.tI),t.Y36(f.V),t.Y36(f.kl),t.Y36(_.RJ))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-stock-transfer-entry-form"]],viewQuery:function(n,r){if(1&n&&t.Gf(h.j,5),2&n){let i;t.iGM(i=t.CRH())&&(r.headers=i)}},decls:70,vars:21,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row"],[1,"col-md-3"],[1,"form-label","mb-0"],[1,"text-danger"],["type","date","formControlName","stockTransferDate","readonly","",1,"form-control"],["bindLabel","category","bindValue","category","formControlName","itemCategory",3,"items","clearable","change"],["type","text","formControlName","department","readonly","",1,"form-control"],["type","text","formControlName","remarks",1,"form-control"],[1,"row","line-border"],[3,"data","dataChange"],[1,"table-responsive","mt-0","text-wrap",2,"min-height","23rem"],[1,"table","table-bordered","mt-0","table-sm"],[1,"bg-info"],[1,"text-white"],["sortable","MRNNumber",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","unitConversion",3,"sort"],["sortable","UOM",3,"sort"],["sortable","PPICIRQty",3,"sort"],["sortable","transferQty",3,"sort"],["sortable","aging",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],["appAccessControl","",1,"col","text-center",3,"accessType"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-3","me-3",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""],[1,"d-flex","justify-content-center"],["type","number",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelOptions","input","ngModelChange"],["class","flaggreen",4,"ngIf"],["class","flagred",4,"ngIf"],["class","flagYellow",4,"ngIf"],[1,"flaggreen"],[1,"flagred"],[1,"flagYellow"]],template:function(n,r){1&n&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Stock Transfer (Entry)"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"label",8),t._uU(10," Stock Transfer Date (GIN Date)"),t.TgZ(11,"span",9),t._uU(12,"*"),t.qZA()(),t._UZ(13,"input",10),t.qZA(),t.TgZ(14,"div",7)(15,"label",8),t._uU(16," Item Category"),t.TgZ(17,"span",9),t._uU(18,"*"),t.qZA()(),t.TgZ(19,"ng-select",11),t.NdJ("change",function(o){return r.filterItemCategory(o)}),t.qZA()(),t.TgZ(20,"div",7)(21,"label",8),t._uU(22," Department/(Location)"),t.TgZ(23,"span",9),t._uU(24,"*"),t.qZA()(),t._UZ(25,"input",12),t.qZA(),t.TgZ(26,"div",7)(27,"label",8),t._uU(28," Remarks "),t.qZA(),t._UZ(29,"input",13),t.qZA()()(),t._UZ(30,"hr",14),t.TgZ(31,"app-setting-header",15),t.NdJ("dataChange",function(o){return r.eventHeader(o)}),t.qZA(),t.TgZ(32,"div",16)(33,"table",17)(34,"thead",18)(35,"tr",19)(36,"th",20),t.NdJ("sort",function(o){return r.onSort(o)}),t._uU(37,"MRN No."),t.qZA(),t.TgZ(38,"th",21),t.NdJ("sort",function(o){return r.onSort(o)}),t._uU(39,"Item Code"),t.qZA(),t.TgZ(40,"th",22),t.NdJ("sort",function(o){return r.onSort(o)}),t._uU(41,"Item Name"),t.qZA(),t.TgZ(42,"th",23),t.NdJ("sort",function(o){return r.onSort(o)}),t._uU(43,"Item Description"),t.qZA(),t.TgZ(44,"th",24),t.NdJ("sort",function(o){return r.onSort(o)}),t._uU(45,"Units Conversion"),t.qZA(),t.TgZ(46,"th",25),t.NdJ("sort",function(o){return r.onSort(o)}),t._uU(47,"UoM"),t.qZA(),t.TgZ(48,"th",26),t.NdJ("sort",function(o){return r.onSort(o)}),t._uU(49,"PPIC-IR Qty."),t.qZA(),t.TgZ(50,"th",27),t.NdJ("sort",function(o){return r.onSort(o)}),t._uU(51,"Transfer Qty."),t.qZA(),t.TgZ(52,"th",28),t.NdJ("sort",function(o){return r.onSort(o)}),t._uU(53,"Aging"),t.qZA()()(),t.TgZ(54,"tbody"),t.YNc(55,I,29,26,"tr",29),t.ALo(56,"slice"),t.ALo(57,"searchFi1ter"),t.qZA()()(),t._UZ(58,"hr",14),t.TgZ(59,"div",6)(60,"div",30)(61,"div",31)(62,"button",32),t.NdJ("click",function(){return r.reset()}),t._uU(63,"Reset"),t.qZA(),t.TgZ(64,"button",33),t.NdJ("click",function(){return r.ESCPreview()}),t._uU(65," Esc Preview "),t.qZA(),t.TgZ(66,"button",32),t.NdJ("click",function(){return r.preview()}),t._uU(67,"Preview"),t.qZA(),t.TgZ(68,"button",34),t.NdJ("click",function(){return r.submit()}),t._uU(69," Save "),t.qZA()()()()()()),2&n&&(t.Q6J("formGroup",r.form),t.xp6(19),t.Q6J("items",r.itemCategoryList)("clearable",!1),t.xp6(12),t.Q6J("data",t.l5B(16,J,r.page,r.pageSize,r.collection,r.search)),t.xp6(24),t.Q6J("ngForOf",t.Dn7(56,9,t.xi3(57,13,r.filterTableData,r.search),(r.page-1)*r.pageSize,(r.page-1)*r.pageSize+r.pageSize))("ngForTrackBy",r.trackByFn),t.xp6(5),t.Q6J("accessType",r.rolePermissionActions.createAction),t.xp6(4),t.Q6J("disabled",!r.isESCPreview),t.xp6(4),t.Q6J("disabled",!r.isPreview))},dependencies:[m.sg,m.O5,b.P,v._L,l.Fj,l.wV,l.JJ,l.JL,l.sg,l.u,l.On,Z.w9,h.j,S.J,m.OU,m.JJ,D.G,k.S],encapsulation:2})}return s})();var P=a(56208);const M=[{path:"",redirectTo:"stock-transfer-entry-form",pathMatch:"full"},{path:"stock-transfer-entry-form",component:F}];let Q=(()=>{class s{static#t=this.\u0275fac=function(n){return new(n||s)};static#e=this.\u0275mod=t.oAB({type:s});static#r=this.\u0275inj=t.cJS({imports:[m.ez,g.Bz.forChild(M),P.m]})}return s})()}}]);