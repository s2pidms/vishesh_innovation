"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4284],{84284:($,f,l)=>{l.r(f),l.d(f,{GrandChildItemModule:()=>j});var d=l(96814),m=l(1076),v=l(43818),g=l(25116),C=l(65129),t=l(65879),u=l(98977),Z=l(99007),y=l(88059),I=l(37285),b=l(53421),_=l(59103);function U(s,c){1&s&&t._UZ(0,"div",34)}function T(s,c){1&s&&t._UZ(0,"div",35)}function S(s,c){if(1&s){const r=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",21,22)(5,"span",23),t._uU(6),t.qZA()(),t.TgZ(7,"td",21,24)(9,"span",23),t._uU(10),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"UOMUnitsMaster"),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"span",25),t.YNc(22,U,1,0,"div",26),t.YNc(23,T,1,0,"div",27),t.qZA()(),t.TgZ(24,"td")(25,"div",28),t._UZ(26,"button",29),t.TgZ(27,"div",30)(28,"a",31),t.NdJ("click",function(){const o=t.CHM(r).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",null==o?null:o._id,"view"))}),t._UZ(29,"i",32),t._uU(30," View "),t.qZA(),t.TgZ(31,"a",31),t.NdJ("click",function(){const o=t.CHM(r).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",null==o?null:o._id,"edit"))}),t._UZ(32,"i",33),t._uU(33," Edit "),t.qZA()()()()()}if(2&s){const r=c.$implicit,e=t.MAs(4),n=t.MAs(8),o=t.oxw();t.xp6(2),t.Oqu(null==r?null:r.itemCode),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("positionTarget",e)("ngbTooltip",r.itemName),t.xp6(1),t.hij(" ",r.itemName?r.itemName:null," "),t.xp6(1),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("positionTarget",n)("ngbTooltip",r.itemDescription),t.xp6(1),t.hij(" ",r.itemDescription?r.itemDescription:null," "),t.xp6(2),t.Oqu(t.lcZ(13,19,null==r?null:r.unitOfMeasurement)),t.xp6(3),t.Oqu(null==r?null:r.HSNCode),t.xp6(2),t.Oqu(null==r?null:r.shelfLife),t.xp6(2),t.Oqu(null==r?null:r.sourceOfManufacturing),t.xp6(3),t.Q6J("ngIf","Active"==r.status),t.xp6(1),t.Q6J("ngIf","Inactive"==r.status),t.xp6(5),t.Q6J("accessType",o.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",o.rolePermissionActions.editAction)}}const A=function(s,c,r,e){return{page:s,pageSize:c,collection:r,search:e,type:"list"}};let N=(()=>{var s;class c{constructor(e,n,o,a,p,h){this.exportExcelService=e,this.router=n,this.childItemsService=o,this.activatedRoute=a,this.spinner=p,this.exportToPDFService=h,this.page=1,this.pageSize=8,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.tableData=[],this.rolePermissionActions=g.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,n,o){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:n,action:o}})}trackByFn(e,n){return n?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1,n=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e,childItemCategoryName:"L30/Grand Child"};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.childItemsService.getAll(o).subscribe(a=>{"EXCEL"==n?this.excelDownload(a.rows):"PDF"==n?this.pdfDownload(a.rows):(this.tableData=a.rows,this.collection=a.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(e){this.exportExcelService.exportExcel((0,C.lX)(e))}pdfDownload(e){let n=(0,C.KY)(e);this.exportToPDFService.generatePdf(n.tableData,n.title)}onSort({column:e,direction:n}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==n?1:-1,this.getAll()}}return(s=c).\u0275fac=function(e){return new(e||s)(t.Y36(u.Ol),t.Y36(m.F0),t.Y36(Z.BH),t.Y36(m.gz),t.Y36(u.V),t.Y36(u.$L))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-grand-child-item-list"]],viewQuery:function(e,n){if(1&e&&t.Gf(v.j,5),2&e){let o;t.iGM(o=t.CRH())&&(n.headers=o)}},decls:34,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","btn-add","px-4",3,"click"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","unitOfMeasurement",3,"sort"],["sortable","HSNCode",3,"sort"],["sortable","shelfLife",3,"sort"],["sortable","sourceOfManufacturing",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["SKUName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""],[1,"d-flex","justify-content-center"],["class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],[1,"statusActive"],[1,"statusInActive"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Gr. Child Item (Summary)"),t.qZA()(),t.TgZ(4,"div",3),t._UZ(5,"button",4),t.TgZ(6,"button",5),t.NdJ("click",function(){return n.navigateTo("../form",null,"create")}),t._uU(7," Gr. Child Item "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(a){return n.eventHeader(a)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(a){return n.onSort(a)}),t._uU(15,"Item Code"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(a){return n.onSort(a)}),t._uU(17,"Item Name"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(a){return n.onSort(a)}),t._uU(19,"Item Description"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(a){return n.onSort(a)}),t._uU(21,"UoM"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(a){return n.onSort(a)}),t._uU(23,"HSN Code"),t.qZA(),t.TgZ(24,"th",17),t.NdJ("sort",function(a){return n.onSort(a)}),t._uU(25,"Shelf Life (M)"),t.qZA(),t.TgZ(26,"th",18),t.NdJ("sort",function(a){return n.onSort(a)}),t._uU(27,"Source of mfg."),t.qZA(),t.TgZ(28,"th",19),t.NdJ("sort",function(a){return n.onSort(a)}),t._uU(29,"Status"),t.qZA(),t.TgZ(30,"th"),t._uU(31,"Action"),t.qZA()()(),t.TgZ(32,"tbody"),t.YNc(33,S,34,21,"tr",20),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("accessType",n.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,A,n.page,n.pageSize,n.collection,n.search)),t.xp6(23),t.Q6J("ngForOf",n.tableData)("ngForTrackBy",n.trackByFn))},dependencies:[d.sg,d.O5,y.P,I._L,v.j,b.J,_.S],encapsulation:2}),c})();var i=l(60095),D=l(77609),x=l(21631),M=l(22096),G=l(72370),O=l(9202),w=l(72414),J=l(16897),q=l(50363),F=l(83344);function L(s,c){if(1&s&&(t.TgZ(0,"option",17),t._uU(1),t.qZA()),2&s){const r=c.$implicit;t.Q6J("value",r.value),t.xp6(1),t.hij(" ",null==r?null:r.label," ")}}function H(s,c){1&s&&t._UZ(0,"div",41)}function k(s,c){1&s&&t._UZ(0,"div",42)}function P(s,c){if(1&s){const r=t.EpF();t.TgZ(0,"button",43),t.NdJ("click",function(){t.CHM(r);const n=t.oxw();return t.KtG(n.submit())}),t._uU(1," Save "),t.qZA()}}let Q=(()=>{var s;class c{constructor(e,n,o,a,p,h,R,z,B){this.activatedRoute=e,this.spinner=n,this.toastService=o,this.validationService=a,this.childItemsService=p,this.modalService=h,this.utilityService=R,this.location=z,this.appGlobalService=B,this.action="create",this.submitted=!1,this.isDisabled=!0,this.autoIncValues={},this.sourceOfMfg=g.mt,this.childItemId="",this.masterData={HSNCodesList:[],suppliersOptions:[],WXLDimensionsUnit:[]},this.supplierDetails=[],this.UOMUintMasterOptions=[],this.form=new i.nJ({_id:new i.p4(null),childItemCategory:new i.p4(null,[i.kI.required]),itemCode:new i.p4(null,[i.kI.required]),itemName:new i.p4(null,[i.kI.required]),itemDescription:new i.p4(null,[i.kI.required]),HSNCode:new i.p4(null),HSN:new i.p4(null,[i.kI.required]),unitOfMeasurement:new i.p4(null,[i.kI.required]),primaryUnit:new i.p4(null,[i.kI.required]),secondaryUnit:new i.p4(null),primaryToSecondaryConversion:new i.p4(null),secondaryToPrimaryConversion:new i.p4(null),conversionOfUnits:new i.p4(null),unitConversionFlag:new i.p4(1),primaryConversion:new i.p4(1),secondaryConversion:new i.p4(1),itemCost:new i.p4(null,[i.kI.required]),sourceOfManufacturing:new i.p4(null,[i.kI.required]),shelfLife:new i.p4(null),status:new i.p4("Active"),supplierDetails:new i.p4([]),dualUnitsDimensionsDetails:new i.nJ({type:new i.p4(null),width:new i.p4(null),length:new i.p4(null),widthUnit:new i.p4(null),lengthUnit:new i.p4(null),widthInMM:new i.p4(null),lengthInM:new i.p4(null),sqmPerRoll:new i.p4(null)})})}get dimensionData(){return this.form.get("dualUnitsDimensionsDetails")}get f(){return this.form.controls}ngOnInit(){this.UOMUintMasterOptions=this.appGlobalService.UOMUintMasterOptions,this.getInitialData()}trackByFn(e,n){return n?._id}reset(){this.form.reset(),this.isDisabled=!0,this.getInitialData()}submit(){if(this.submitted=!0,this.form.enable(),this.validationService.checkErrors(this.form,G.ax))return;let e=this.form.value;e.supplierDetails=this.supplierDetails,e.conversionOfUnits=e.primaryToSecondaryConversion?`1 ${e.primaryUnit} - ${e.primaryToSecondaryConversion} ${e.secondaryUnit}`:`1 ${e.secondaryUnit} - ${e.secondaryToPrimaryConversion} ${e.primaryUnit}`,e._id?this.update(e._id,e):(delete e._id,this.create(e))}create(e){this.spinner.show(),this.childItemsService.create(e).subscribe(n=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(n.message),this.location.back()})}update(e,n){this.spinner.show(),this.childItemsService.update(e,n).subscribe(o=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(o.message),this.location.back()})}getInitialData(){this.spinner.show(),this.childItemsService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.autoIncValues=e?.autoIncValues,this.form.controls.childItemCategory.setValue("L30/Grand Child"),this.form.controls.itemCode.setValue(this.autoIncValues["L30/Grand Child"]),this.form.controls.unitConversionFlag.setValue(1),this.form.controls.primaryConversion.setValue(1),this.form.controls.secondaryConversion.setValue(1),this.form.controls.status.setValue("Active"),this.activatedRoute.queryParams.pipe((0,x.z)(n=>(this.action=n.action,this.utilityService.accessDenied(this.action),n.id?this.childItemsService.getById(n.id):(0,M.of)({})))).subscribe(n=>{this.spinner.hide(),0!=Object.keys(n).length&&(this.supplierDetails=n.supplierDetails,this.childItemId=n?._id,this.form.patchValue(n),"view"==this.action&&this.form.disable(),"edit"==this.action&&this.form.controls.sourceOfManufacturing.disable())})})}setItemCode(e){this.form.controls.itemCode.setValue(this.autoIncValues[e.target.value])}setSourceOfManufacturing(e){}setServiceProviderName(e){}setHSNId(e){this.form.controls.HSNCode.setValue(e.hsnCode)}setPrimaryUnit(){this.form.controls.primaryUnit.setValue(this.form.controls.unitOfMeasurement.value)}openServiceProviderDetailsModal(){}openStockLevelDetailsModal(){}openUOMDetailsModal(){const e=this.modalService.open(D.dQ,{centered:!0,size:"lg",backdrop:"static",keyboard:!1});e.componentInstance.ModalUOMsUnit=this.UOMUintMasterOptions,e.componentInstance.WXLDimensionsUnit=this.masterData?.WXLDimensionsUnit,e.componentInstance.flag=!0,e.componentInstance.dimensionData=this.dimensionData.value,e.componentInstance.dualUnits={primaryUnit:this.form.value.primaryUnit,secondaryUnit:this.form.value.secondaryUnit,unitConversionFlag:this.form.value.unitConversionFlag,primaryConversion:this.form.value.primaryConversion,secondaryConversion:this.form.value.secondaryConversion,primaryToSecondaryConversion:this.form.value.primaryToSecondaryConversion,secondaryToPrimaryConversion:this.form.value.secondaryToPrimaryConversion},e.result.then(n=>{n&&["create","edit"].includes(this.action)&&(this.form.patchValue(n),this.form.controls.unitOfMeasurement.setValue(n?.primaryUnit),this.form.controls.dualUnitsDimensionsDetails.patchValue(n?.dualUnitsDimensionsDetails))},n=>{})}viewBOM(){}openSuppliersDetailsModal(){const e=this.modalService.open(w.V,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.sourceOfManufacturing=this.form.controls.sourceOfManufacturing.value,e.componentInstance.primaryUnit=this.form.controls.unitOfMeasurement.value,e.componentInstance.unitConversionFlag=this.form.controls.unitConversionFlag.value,e.componentInstance.secondaryUnit=this.form.controls.secondaryUnit.value,e.componentInstance.primaryToSecondaryConversion=this.form.controls.primaryToSecondaryConversion.value,e.componentInstance.secondaryToPrimaryConversion=this.form.controls.secondaryToPrimaryConversion.value,e.componentInstance.supplierDetails=this.supplierDetails,e.componentInstance.suppliers=this.masterData?.suppliersOptions,e.result.then(n=>{n&&["create","edit"].includes(this.action)&&(this.supplierDetails=n?.supplierDetails,this.form.controls.sourceOfManufacturing.setValue(n?.sourceOfManufacturing))},n=>{})}openFormulationHSNModal(){const e=this.modalService.open(O.K,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.HSNCodeArr=this.masterData?.HSNCodesList,e.componentInstance.editScreen="Edit Screen",e.componentInstance.HSNCode=this.form.controls.HSNCode.value,e.result.then(n=>{if(n&&(this.form.controls.HSNCode.setValue(n?.HSNSelectCode),n.HSNSelectCode)){let o=this.masterData?.HSNCodesList.find(a=>a.hsnCode==n.HSNSelectCode)?._id;this.form.controls.HSN.setValue(o)}},n=>{})}}return(s=c).\u0275fac=function(e){return new(e||s)(t.Y36(m.gz),t.Y36(u.V),t.Y36(u.kl),t.Y36(J.RJ),t.Y36(Z.BH),t.Y36(I.FF),t.Y36(u.tI),t.Y36(d.Ye),t.Y36(u.P0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-grand-child-item-form"]],decls:100,vars:21,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-3"],[1,"form-label","mb-1"],[1,"text-danger"],["type","text","formControlName","childItemCategory","readonly","",1,"form-control"],["type","text","formControlName","itemCode","readonly","",1,"form-control"],["type","text","formControlName","itemName",1,"form-control"],["type","text","formControlName","itemDescription",1,"form-control"],[1,"form-label","mb-1","d-flex","justify-content-between"],["type","button",1,"btn","btn-primary","form-btn-sm","py-0",3,"disabled","click"],["formControlName","unitOfMeasurement",1,"form-select",3,"change"],["selected","","disabled","",3,"value"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"d-flex","align-items-center"],[1,"flex-grow-1"],["bindLabel","hsnCode","bindValue","_id","formControlName","HSN",3,"items","clearable","change"],["id","basic-addon1",1,"input-group-text","bg-primary","pointer",2,"height","2.9rem",3,"click"],["aria-hidden","true",1,"fa","fa-search","fs-4","text-white"],["onkeypress","return event.charCode >= 48 && event.charCode <= 57","type","number","formControlName","shelfLife",1,"form-control"],[1,"d-flex"],[1,"input-group-text","text-secondary","combine-INR"],[1,"vr","ms-3"],["type","number","formControlName","itemCost",1,"form-control","border-start-0"],[1,"row","line-border"],[1,"col-2","pe-0"],[1,"plusIconSvg","btn","btn-primary","me-1",3,"disabled"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"],[1,"col-md-auto","text-nowrap"],["type","button",1,"btn","btn-primary","px-3"],["formControlName","status",1,"form-select","statusSelectBorder"],[1,"input-group-text","statusSpanHeight"],["class","statusActive","class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],[1,"col-7","mb-0","d-flex","align-self-end","justify-content-end"],["class","btn btn-primary px-5","type","button",3,"click",4,"ngIf"],[1,"statusActive"],[1,"statusInActive"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4),t.ALo(5,"titlecase"),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),t._uU(10," Gr. Child Item Category "),t.TgZ(11,"span",8),t._uU(12,"*"),t.qZA()(),t._UZ(13,"input",9),t.qZA(),t.TgZ(14,"div",6)(15,"label",7),t._uU(16," Item Code "),t.TgZ(17,"span",8),t._uU(18,"*"),t.qZA()(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"div",6)(21,"label",7),t._uU(22," Item Name "),t.TgZ(23,"span",8),t._uU(24,"*"),t.qZA()(),t._UZ(25,"input",11),t.qZA(),t.TgZ(26,"div",6)(27,"label",7),t._uU(28," Item Description "),t.TgZ(29,"span",8),t._uU(30,"*"),t.qZA()(),t._UZ(31,"input",12),t.qZA()(),t.TgZ(32,"div",5)(33,"div",6)(34,"label",13),t._uU(35," Unit of Measurement "),t.TgZ(36,"span",8),t._uU(37,"*"),t.qZA(),t._UZ(38,"span")(39,"span")(40,"span")(41,"span")(42,"span"),t.TgZ(43,"button",14),t.NdJ("click",function(){return n.openUOMDetailsModal()}),t._uU(44," Dual Units "),t.qZA()(),t.TgZ(45,"select",15),t.NdJ("change",function(){return n.setPrimaryUnit()}),t.TgZ(46,"option",16),t._uU(47,"Select Primary Unit"),t.qZA(),t.TgZ(48,"option",17),t._uU(49,"Unit"),t.qZA(),t.YNc(50,L,2,2,"option",18),t.qZA()(),t.TgZ(51,"div",6)(52,"label",7),t._uU(53," HSN Code "),t.TgZ(54,"span",8),t._uU(55,"*"),t.qZA()(),t.TgZ(56,"div",19)(57,"div",20)(58,"ng-select",21),t.NdJ("change",function(a){return n.setHSNId(a)}),t.qZA()(),t.TgZ(59,"div",22),t.NdJ("click",function(){return n.openFormulationHSNModal()}),t._UZ(60,"i",23),t.qZA()()(),t.TgZ(61,"div",6)(62,"label",7),t._uU(63," Shelf Life (Months) "),t._UZ(64,"span",8),t.qZA(),t._UZ(65,"input",24),t.qZA(),t.TgZ(66,"div",6)(67,"label",7),t._uU(68," Item Cost (Exclusive of GST) "),t.TgZ(69,"span",8),t._uU(70,"*"),t.qZA()(),t.TgZ(71,"div",25)(72,"span",26),t._uU(73),t.ALo(74,"companyCurrency"),t._UZ(75,"div",27),t.qZA(),t._UZ(76,"input",28),t.qZA()()()(),t._UZ(77,"hr",29),t.TgZ(78,"div",5)(79,"div",30),t._UZ(80,"button",31),t.TgZ(81,"button",32),t.NdJ("click",function(){return n.openSuppliersDetailsModal()}),t._uU(82," Supplier "),t.qZA()(),t.TgZ(83,"div",6)(84,"div",19)(85,"div",33)(86,"button",34),t._uU(87,"Status"),t.qZA()(),t.TgZ(88,"select",35)(89,"option",16),t._uU(90,"Select Status"),t.qZA(),t.TgZ(91,"option",17),t._uU(92,"Active"),t.qZA(),t.TgZ(93,"option",17),t._uU(94,"Inactive"),t.qZA()(),t.TgZ(95,"span",36),t.YNc(96,H,1,0,"div",37),t.YNc(97,k,1,0,"div",38),t.qZA()()(),t.TgZ(98,"div",39),t.YNc(99,P,2,0,"button",40),t.qZA()()()()),2&e&&(t.Q6J("formGroup",n.form),t.xp6(4),t.hij("Gr. Child Item Master (",t.lcZ(5,17,n.action),")"),t.xp6(39),t.Q6J("disabled",!n.form.controls.unitOfMeasurement.value),t.xp6(3),t.Q6J("value",null),t.xp6(2),t.Q6J("value","Unit"),t.xp6(2),t.Q6J("ngForOf",n.UOMUintMasterOptions),t.xp6(8),t.Q6J("items",n.masterData.HSNCodesList)("clearable",!1),t.xp6(15),t.hij(" ",t.lcZ(74,19,"INR")," "),t.xp6(7),t.Q6J("disabled",!n.f.unitOfMeasurement.value),t.xp6(1),t.Q6J("disabled",!n.f.unitOfMeasurement.value),t.xp6(8),t.Q6J("value","null"),t.xp6(2),t.Q6J("value","Active"),t.xp6(2),t.Q6J("value","Inactive"),t.xp6(3),t.Q6J("ngIf","Active"==n.form.value.status),t.xp6(1),t.Q6J("ngIf","Inactive"==n.form.value.status),t.xp6(2),t.Q6J("ngIf","view"!=n.action))},dependencies:[d.sg,d.O5,i.YN,i.Kr,i.Fj,i.wV,i.EJ,i.JJ,i.JL,i.sg,i.u,q.w9,d.rS,F.f],encapsulation:2}),c})();var V=l(19964),Y=l(56208);const E=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:N},{path:"form",component:Q,resolve:{accessScreen:V.xr}}];let j=(()=>{var s;class c{}return(s=c).\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[d.ez,m.Bz.forChild(E),Y.m]}),c})()}}]);