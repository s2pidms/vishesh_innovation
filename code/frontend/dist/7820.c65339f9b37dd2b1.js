"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7820],{27820:(X,I,l)=>{l.r(I),l.d(I,{ChildItemModule:()=>$});var m=l(96814),d=l(1076),U=l(43818),p=l(25116),Z=l(4882),y=l(77203),t=l(65879),u=l(2742),b=l(38011),h=l(37285),T=l(88059),S=l(53421),A=l(59103);function D(r,c){1&r&&t._UZ(0,"div",35)}function M(r,c){1&r&&t._UZ(0,"div",36)}function N(r,c){if(1&r){const s=t.EpF();t.TgZ(0,"a",37),t.NdJ("click",function(){t.CHM(s);const i=t.oxw().$implicit,n=t.oxw();return t.KtG(n.openConfirmModal(null==i?null:i._id,null==i?null:i.itemCode))}),t._UZ(1,"i",38),t._uU(2," Delete "),t.qZA()}}function x(r,c){if(1&r){const s=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",21,22)(5,"span",23),t._uU(6),t.qZA()(),t.TgZ(7,"td",21,24)(9,"span",23),t._uU(10),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"UOMUnitsMaster"),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"span",25),t.YNc(22,D,1,0,"div",26),t.YNc(23,M,1,0,"div",27),t.qZA()(),t.TgZ(24,"td")(25,"div",28),t._UZ(26,"button",29),t.TgZ(27,"div",30)(28,"a",31),t.NdJ("click",function(){const n=t.CHM(s).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",null==n?null:n._id,"view"))}),t._UZ(29,"i",32),t._uU(30," View "),t.qZA(),t.TgZ(31,"a",31),t.NdJ("click",function(){const n=t.CHM(s).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",null==n?null:n._id,"edit"))}),t._UZ(32,"i",33),t._uU(33," Edit "),t.qZA(),t.YNc(34,N,3,0,"a",34),t.qZA()()()()}if(2&r){const s=c.$implicit,e=t.MAs(4),i=t.MAs(8),n=t.oxw();t.xp6(2),t.Oqu(null==s?null:s.itemCode),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("positionTarget",e)("ngbTooltip",s.itemName),t.xp6(1),t.hij(" ",s.itemName?s.itemName:null," "),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("positionTarget",i)("ngbTooltip",s.itemDescription),t.xp6(1),t.hij(" ",s.itemDescription?s.itemDescription:null," "),t.xp6(2),t.Oqu(t.lcZ(13,20,null==s?null:s.unitOfMeasurement)),t.xp6(3),t.Oqu(null==s?null:s.HSNCode),t.xp6(2),t.Oqu(null==s?null:s.shelfLife),t.xp6(2),t.Oqu(null==s?null:s.sourceOfManufacturing),t.xp6(3),t.Q6J("ngIf","Active"==s.status),t.xp6(1),t.Q6J("ngIf","Inactive"==s.status),t.xp6(5),t.Q6J("accessType",n.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",n.rolePermissionActions.editAction),t.xp6(3),t.Q6J("ngIf",n.user==n.superAdminId)}}const O=function(r,c,s,e){return{page:r,pageSize:c,collection:s,search:e,type:"list"}};let w=(()=>{var r;class c{constructor(e,i,n,a,f,v,g,C,_){this.exportExcelService=e,this.router=i,this.childItemsService=n,this.activatedRoute=a,this.spinner=f,this.exportToPDFService=v,this.storageService=g,this.toastService=C,this.modalService=_,this.page=1,this.pageSize=8,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.tableData=[],this.superAdminId=p.dA,this.user="",this.rolePermissionActions=p.a1}ngOnInit(){this.user=this.storageService.get("IDMSAUser")?.roles?.find(e=>e==this.superAdminId),this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,i,n){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:i,action:n}})}trackByFn(e,i){return i?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}excelDownload(e){this.exportExcelService.exportExcel((0,Z.t_)(e))}pdfDownload(e){let i=(0,Z.FY)(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}getAll(e=!1,i=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e,childItemCategoryName:"L20/Child Item"};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.childItemsService.getAll(n).subscribe(a=>{"EXCEL"==i?this.excelDownload(a.rows):"PDF"==i?this.pdfDownload(a.rows):(this.tableData=a.rows,this.collection=a.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}onSort({column:e,direction:i}){this.headers.forEach(n=>{n.sortable!==e&&(n.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}delete(e){this.spinner.show(),this.childItemsService.delete(e).subscribe(i=>{this.spinner.hide(),this.toastService.success(i.message),this.getAll()})}openConfirmModal(e,i){const n=this.modalService.open(y.hn,{centered:!0,size:"md",backdrop:"static",keyboard:!1});n.componentInstance.heading="Confirm Deletion",n.componentInstance.confirmText=`Confirm Deletion of Item Code ${i} ?`,n.result.then(a=>{"Yes"==a.title&&this.delete(e)},a=>{})}}return(r=c).\u0275fac=function(e){return new(e||r)(t.Y36(u.Ol),t.Y36(d.F0),t.Y36(b.BH),t.Y36(d.gz),t.Y36(u.V),t.Y36(u.$L),t.Y36(u.V1),t.Y36(u.kl),t.Y36(h.FF))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-child-item-list"]],viewQuery:function(e,i){if(1&e&&t.Gf(U.j,5),2&e){let n;t.iGM(n=t.CRH())&&(i.headers=n)}},decls:34,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","btn-add","px-4",3,"click"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","unitOfMeasurement",3,"sort"],["sortable","HSNCode",3,"sort"],["sortable","shelfLife",3,"sort"],["sortable","sourceOfManufacturing",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""],[1,"d-flex","justify-content-center"],["class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["href","javascript:void(0)",3,"click",4,"ngIf"],[1,"statusActive"],[1,"statusInActive"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-primary"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Child Item (Summary)"),t.qZA()(),t.TgZ(4,"div",3),t._UZ(5,"button",4),t.TgZ(6,"button",5),t.NdJ("click",function(){return i.navigateTo("../form",null,"create")}),t._uU(7," Child Item "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(a){return i.eventHeader(a)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(15,"Item Code"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(17,"Item Name"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(19,"Item Description"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(21,"UoM"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(23,"HSN Code"),t.qZA(),t.TgZ(24,"th",17),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(25,"Shelf Life (M)"),t.qZA(),t.TgZ(26,"th",18),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(27,"Source of mfg."),t.qZA(),t.TgZ(28,"th",19),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(29,"Status"),t.qZA(),t.TgZ(30,"th"),t._uU(31,"Action"),t.qZA()()(),t.TgZ(32,"tbody"),t.YNc(33,x,35,22,"tr",20),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("accessType",i.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,O,i.page,i.pageSize,i.collection,i.search)),t.xp6(23),t.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[m.sg,m.O5,T.P,h._L,U.j,S.J,A.S],encapsulation:2}),c})();var o=l(60095),J=l(21631),F=l(22096),q=l(72370),L=l(72414),V=l(9202),k=l(16897),H=l(50363),Y=l(83344);function P(r,c){if(1&r&&(t.TgZ(0,"option",17),t._uU(1),t.qZA()),2&r){const s=c.$implicit;t.Q6J("value",s.value),t.xp6(1),t.hij(" ",null==s?null:s.label," ")}}function Q(r,c){1&r&&t._UZ(0,"div",41)}function E(r,c){1&r&&t._UZ(0,"div",42)}function R(r,c){if(1&r){const s=t.EpF();t.TgZ(0,"button",43),t.NdJ("click",function(){t.CHM(s);const i=t.oxw();return t.KtG(i.submit())}),t._uU(1," Save "),t.qZA()}}let j=(()=>{var r;class c{constructor(e,i,n,a,f,v,g,C,_){this.activatedRoute=e,this.spinner=i,this.toastService=n,this.validationService=a,this.childItemsService=f,this.modalService=v,this.utilityService=g,this.location=C,this.appGlobalService=_,this.action="create",this.submitted=!1,this.isDisabled=!0,this.autoIncValues={},this.sourceOfMfg=p.mt,this.childItemId="",this.masterData={HSNCodesList:[],suppliersOptions:[],WXLDimensionsUnit:[]},this.supplierDetails=[],this.UOMUintMasterOptions=[],this.UOMDefaultValueOptions=[],this.form=new o.nJ({_id:new o.p4(null),childItemCategory:new o.p4(null,[o.kI.required]),itemCode:new o.p4(null,[o.kI.required]),itemName:new o.p4(null,[o.kI.required]),itemDescription:new o.p4(null,[o.kI.required]),HSNCode:new o.p4(null),HSN:new o.p4(null,[o.kI.required]),unitOfMeasurement:new o.p4(null,[o.kI.required]),primaryUnit:new o.p4(null,[o.kI.required]),secondaryUnit:new o.p4(null),primaryToSecondaryConversion:new o.p4(null),secondaryToPrimaryConversion:new o.p4(null),conversionOfUnits:new o.p4(null),unitConversionFlag:new o.p4(1),primaryConversion:new o.p4(1),secondaryConversion:new o.p4(1),itemCost:new o.p4(null,[o.kI.required]),sourceOfManufacturing:new o.p4(null,[o.kI.required]),shelfLife:new o.p4(null),status:new o.p4("Active"),supplierDetails:new o.p4([]),dualUnitsDimensionsDetails:new o.nJ({type:new o.p4(null),width:new o.p4(null),length:new o.p4(null),widthUnit:new o.p4(null),lengthUnit:new o.p4(null),widthInMM:new o.p4(null),lengthInM:new o.p4(null),sqmPerRoll:new o.p4(null)})})}get dimensionData(){return this.form.get("dualUnitsDimensionsDetails")}get f(){return this.form.controls}ngOnInit(){if(this.UOMUintMasterOptions=this.appGlobalService.UOMUintMasterOptions,this.getInitialData(),this.UOMDefaultValueOptions=this.appGlobalService?.UOMDefaultValueOptions,this.UOMDefaultValueOptions?.length>0){if(!this.f.unitOfMeasurement.value){let e=null;e=this.findValue(this.UOMDefaultValueOptions,"PURCHASE_UOM"),this.f.unitOfMeasurement.setValue(e)}if(!this.f.primaryUnit.value){let e=null;e=this.findValue(this.UOMDefaultValueOptions,"PURCHASE_PRIMARY_UNIT"),this.f.primaryUnit.setValue(e)}if(!this.f.secondaryUnit.value){let e=null;e=this.findValue(this.UOMDefaultValueOptions,"PURCHASE_SECONDARY_UNIT"),this.f.secondaryUnit.setValue(e)}}}findValue(e,i){return e?.find(n=>n?.parameterLabel==i)?.parameterName}trackByFn(e,i){return i?._id}reset(){this.form.reset(),this.isDisabled=!0,this.getInitialData()}submit(){if(this.submitted=!0,this.form.enable(),this.validationService.checkErrors(this.form,q.ax))return;let e=this.form.value;e.supplierDetails=this.supplierDetails,e.conversionOfUnits=e.primaryToSecondaryConversion?`1 ${e.primaryUnit} = ${e.primaryToSecondaryConversion} ${e.secondaryUnit}`:`1 ${e.secondaryUnit??"Unit"} = ${e.secondaryToPrimaryConversion??1} ${e.primaryUnit??"Unit"}`,e._id?this.update(e._id,e):(delete e._id,this.create(e))}create(e){this.spinner.show(),this.childItemsService.create(e).subscribe(i=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(i.message),this.location.back()})}update(e,i){this.spinner.show(),this.childItemsService.update(e,i).subscribe(n=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(n.message),this.location.back()})}getInitialData(){this.spinner.show(),this.childItemsService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.autoIncValues=e?.autoIncValues,this.form.controls.childItemCategory.setValue("L20/Child Item"),this.form.controls.itemCode.setValue(this.autoIncValues["L20/Child Item"]),this.form.controls.unitConversionFlag.setValue(1),this.form.controls.primaryConversion.setValue(1),this.form.controls.secondaryConversion.setValue(1),this.form.controls.status.setValue("Active"),this.activatedRoute.queryParams.pipe((0,J.z)(i=>(this.action=i.action,this.utilityService.accessDenied(this.action),i.id?this.childItemsService.getById(i.id):(0,F.of)({})))).subscribe(i=>{this.spinner.hide(),0!=Object.keys(i).length&&(this.supplierDetails=i.supplierDetails,this.childItemId=i?._id,this.form.patchValue(i),"view"==this.action&&this.form.disable(),"edit"==this.action&&this.form.controls.sourceOfManufacturing.disable())})})}setItemCode(e){this.form.controls.itemCode.setValue(this.autoIncValues[e.target.value])}setSourceOfManufacturing(e){}setServiceProviderName(e){}setHSNId(e){this.form.controls.HSNCode.setValue(e.hsnCode)}setPrimaryUnit(){this.form.controls.primaryUnit.setValue(this.form.controls.unitOfMeasurement.value)}openServiceProviderDetailsModal(){}openStockLevelDetailsModal(){}openUOMDetailsModal(){const e=this.modalService.open(y.dQ,{centered:!0,size:"lg",backdrop:"static",keyboard:!1});e.componentInstance.ModalUOMsUnit=this.UOMUintMasterOptions,e.componentInstance.WXLDimensionsUnit=this.masterData?.WXLDimensionsUnit,e.componentInstance.flag=!0,e.componentInstance.dimensionData=this.dimensionData.value,e.componentInstance.dualUnits={primaryUnit:this.form.value.primaryUnit,secondaryUnit:this.form.value.secondaryUnit,unitConversionFlag:this.form.value.unitConversionFlag,primaryConversion:this.form.value.primaryConversion,secondaryConversion:this.form.value.secondaryConversion,primaryToSecondaryConversion:this.form.value.primaryToSecondaryConversion,secondaryToPrimaryConversion:this.form.value.secondaryToPrimaryConversion},e.result.then(i=>{i&&["create","edit"].includes(this.action)&&(this.form.patchValue(i),this.form.controls.unitOfMeasurement.setValue(i?.primaryUnit),this.form.controls.dualUnitsDimensionsDetails.patchValue(i?.dualUnitsDimensionsDetails))},i=>{})}viewBOM(){}openSuppliersDetailsModal(){const e=this.modalService.open(L.V,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.sourceOfManufacturing=this.form.controls.sourceOfManufacturing.value,e.componentInstance.primaryUnit=this.form.controls.unitOfMeasurement.value,e.componentInstance.unitConversionFlag=this.form.controls.unitConversionFlag.value,e.componentInstance.secondaryUnit=this.form.controls.secondaryUnit.value,e.componentInstance.primaryToSecondaryConversion=this.form.controls.primaryToSecondaryConversion.value,e.componentInstance.secondaryToPrimaryConversion=this.form.controls.secondaryToPrimaryConversion.value,e.componentInstance.supplierDetails=this.supplierDetails,e.componentInstance.suppliers=this.masterData?.suppliersOptions,e.result.then(i=>{i&&["create","edit"].includes(this.action)&&(this.supplierDetails=i?.supplierDetails,this.form.controls.sourceOfManufacturing.setValue(i?.sourceOfManufacturing))},i=>{})}openFormulationHSNModal(){const e=this.modalService.open(V.K,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.HSNCodeArr=this.masterData?.HSNCodesList,e.componentInstance.editScreen="Edit Screen",e.componentInstance.HSNCode=this.form.controls.HSNCode.value,e.result.then(i=>{if(i&&(this.form.controls.HSNCode.setValue(i?.HSNSelectCode),i.HSNSelectCode)){let n=this.masterData?.HSNCodesList.find(a=>a.hsnCode==i.HSNSelectCode)?._id;this.form.controls.HSN.setValue(n)}},i=>{})}}return(r=c).\u0275fac=function(e){return new(e||r)(t.Y36(d.gz),t.Y36(u.V),t.Y36(u.kl),t.Y36(k.RJ),t.Y36(b.BH),t.Y36(h.FF),t.Y36(u.tI),t.Y36(m.Ye),t.Y36(u.P0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-child-item-form"]],decls:100,vars:21,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-3"],[1,"form-label","mb-1"],[1,"text-danger"],["type","text","formControlName","childItemCategory","readonly","",1,"form-control"],["type","text","formControlName","itemCode","readonly","",1,"form-control"],["type","text","formControlName","itemName",1,"form-control"],["type","text","formControlName","itemDescription",1,"form-control"],[1,"form-label","mb-1","d-flex","justify-content-between"],["type","button",1,"btn","btn-primary","form-btn-sm","py-0",3,"disabled","click"],["formControlName","unitOfMeasurement",1,"form-select",3,"change"],["selected","","disabled","",3,"value"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"d-flex","align-items-center"],[1,"flex-grow-1"],["bindLabel","hsnCode","bindValue","_id","formControlName","HSN",3,"items","clearable","change"],["id","basic-addon1",1,"input-group-text","bg-primary","pointer",2,"height","2.9rem",3,"click"],["aria-hidden","true",1,"fa","fa-search","fs-4","text-white"],["onkeypress","return event.charCode >= 48 && event.charCode <= 57","type","number","formControlName","shelfLife",1,"form-control"],[1,"d-flex"],[1,"input-group-text","text-secondary","combine-INR"],[1,"vr","ms-3"],["type","number","formControlName","itemCost",1,"form-control","border-start-0"],[1,"row","line-border"],[1,"col-2","pe-0"],[1,"plusIconSvg","btn","btn-primary","me-1",3,"disabled"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"],[1,"col-md-auto","text-nowrap"],["type","button",1,"btn","btn-primary","px-3"],["formControlName","status",1,"form-select","statusSelectBorder"],[1,"input-group-text","statusSpanHeight"],["class","statusActive","class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],[1,"col-7","mb-0","d-flex","align-self-end","justify-content-end"],["class","btn btn-primary px-5","type","button",3,"click",4,"ngIf"],[1,"statusActive"],[1,"statusInActive"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4),t.ALo(5,"titlecase"),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),t._uU(10," Child Item Category "),t.TgZ(11,"span",8),t._uU(12,"*"),t.qZA()(),t._UZ(13,"input",9),t.qZA(),t.TgZ(14,"div",6)(15,"label",7),t._uU(16," Item Code "),t.TgZ(17,"span",8),t._uU(18,"*"),t.qZA()(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"div",6)(21,"label",7),t._uU(22," Item Name "),t.TgZ(23,"span",8),t._uU(24,"*"),t.qZA()(),t._UZ(25,"input",11),t.qZA(),t.TgZ(26,"div",6)(27,"label",7),t._uU(28," Item Description "),t.TgZ(29,"span",8),t._uU(30,"*"),t.qZA()(),t._UZ(31,"input",12),t.qZA()(),t.TgZ(32,"div",5)(33,"div",6)(34,"label",13),t._uU(35," Unit of Measurement "),t.TgZ(36,"span",8),t._uU(37,"*"),t.qZA(),t._UZ(38,"span")(39,"span")(40,"span")(41,"span")(42,"span"),t.TgZ(43,"button",14),t.NdJ("click",function(){return i.openUOMDetailsModal()}),t._uU(44," Dual Units "),t.qZA()(),t.TgZ(45,"select",15),t.NdJ("change",function(){return i.setPrimaryUnit()}),t.TgZ(46,"option",16),t._uU(47,"Select Primary Unit"),t.qZA(),t.TgZ(48,"option",17),t._uU(49,"Unit"),t.qZA(),t.YNc(50,P,2,2,"option",18),t.qZA()(),t.TgZ(51,"div",6)(52,"label",7),t._uU(53," HSN Code "),t.TgZ(54,"span",8),t._uU(55,"*"),t.qZA()(),t.TgZ(56,"div",19)(57,"div",20)(58,"ng-select",21),t.NdJ("change",function(a){return i.setHSNId(a)}),t.qZA()(),t.TgZ(59,"div",22),t.NdJ("click",function(){return i.openFormulationHSNModal()}),t._UZ(60,"i",23),t.qZA()()(),t.TgZ(61,"div",6)(62,"label",7),t._uU(63," Shelf Life (Months) "),t._UZ(64,"span",8),t.qZA(),t._UZ(65,"input",24),t.qZA(),t.TgZ(66,"div",6)(67,"label",7),t._uU(68," Item Cost (Exclusive of GST) "),t.TgZ(69,"span",8),t._uU(70,"*"),t.qZA()(),t.TgZ(71,"div",25)(72,"span",26),t._uU(73),t.ALo(74,"companyCurrency"),t._UZ(75,"div",27),t.qZA(),t._UZ(76,"input",28),t.qZA()()()(),t._UZ(77,"hr",29),t.TgZ(78,"div",5)(79,"div",30),t._UZ(80,"button",31),t.TgZ(81,"button",32),t.NdJ("click",function(){return i.openSuppliersDetailsModal()}),t._uU(82," Supplier "),t.qZA()(),t.TgZ(83,"div",6)(84,"div",19)(85,"div",33)(86,"button",34),t._uU(87,"Status"),t.qZA()(),t.TgZ(88,"select",35)(89,"option",16),t._uU(90,"Select Status"),t.qZA(),t.TgZ(91,"option",17),t._uU(92,"Active"),t.qZA(),t.TgZ(93,"option",17),t._uU(94,"Inactive"),t.qZA()(),t.TgZ(95,"span",36),t.YNc(96,Q,1,0,"div",37),t.YNc(97,E,1,0,"div",38),t.qZA()()(),t.TgZ(98,"div",39),t.YNc(99,R,2,0,"button",40),t.qZA()()()()),2&e&&(t.Q6J("formGroup",i.form),t.xp6(4),t.hij("Child Item Master (",t.lcZ(5,17,i.action),")"),t.xp6(39),t.Q6J("disabled",!i.form.controls.unitOfMeasurement.value),t.xp6(3),t.Q6J("value",null),t.xp6(2),t.Q6J("value","Unit"),t.xp6(2),t.Q6J("ngForOf",i.UOMUintMasterOptions),t.xp6(8),t.Q6J("items",i.masterData.HSNCodesList)("clearable",!1),t.xp6(15),t.hij(" ",t.lcZ(74,19,"INR")," "),t.xp6(7),t.Q6J("disabled",!i.f.unitOfMeasurement.value),t.xp6(1),t.Q6J("disabled",!i.f.unitOfMeasurement.value),t.xp6(8),t.Q6J("value","null"),t.xp6(2),t.Q6J("value","Active"),t.xp6(2),t.Q6J("value","Inactive"),t.xp6(3),t.Q6J("ngIf","Active"==i.form.value.status),t.xp6(1),t.Q6J("ngIf","Inactive"==i.form.value.status),t.xp6(2),t.Q6J("ngIf","view"!=i.action))},dependencies:[m.sg,m.O5,o._Y,o.YN,o.Kr,o.Fj,o.wV,o.EJ,o.JJ,o.JL,o.sg,o.u,H.w9,m.rS,Y.f],encapsulation:2}),c})();var z=l(56208);const G=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:w},{path:"form",component:j,resolve:{accessScreen:l(65876).x}}];let $=(()=>{var r;class c{}return(r=c).\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[m.ez,d.Bz.forChild(G),z.m]}),c})()}}]);