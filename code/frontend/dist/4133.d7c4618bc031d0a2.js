"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4133],{82649:(ft,b,c)=>{c.r(b),c.d(b,{BomOfProductModule:()=>pt});var u=c(96814),h=c(1076),_=c(43818),U=c(25116),O=c(65129),t=c(65879),m=c(98977),Z=c(99007),M=c(88059),g=c(37285),D=c(53421),T=c(59103);function y(s,l){1&s&&t._UZ(0,"div",35)}function S(s,l){1&s&&t._UZ(0,"div",36)}function x(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",21,22)(7,"span",23),t._uU(8),t.qZA()(),t.TgZ(9,"td",21,24)(11,"span",23),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"UOMUnitsMaster"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"span",25),t.YNc(22,y,1,0,"div",26),t.YNc(23,S,1,0,"div",27),t.qZA()(),t.TgZ(24,"td")(25,"div",28),t._UZ(26,"button",29),t.TgZ(27,"div",30)(28,"a",31),t.NdJ("click",function(){const n=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.navigateTo("../form",n,"view"))}),t._UZ(29,"i",32),t._uU(30," View "),t.qZA(),t.TgZ(31,"a",31),t.NdJ("click",function(){const n=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.navigateTo("../form",n,"edit"))}),t._UZ(32,"i",33),t._uU(33," Edit "),t.qZA(),t.TgZ(34,"a",31),t.NdJ("click",function(){const n=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.navigateTo("../form",n,"copy"))}),t._UZ(35,"i",34),t._uU(36," Copy "),t.qZA()()()()()}if(2&s){const e=l.$implicit,i=t.MAs(6),o=t.MAs(10),n=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.BOMNo),t.xp6(2),t.Oqu(null==e?null:e.productNo),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("positionTarget",i)("ngbTooltip",e.productName),t.xp6(1),t.hij(" ",e.productName?e.productName:null," "),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",e.productDescription),t.xp6(1),t.hij(" ",e.productDescription?e.productDescription:null," "),t.xp6(2),t.Oqu(t.lcZ(15,20,null==e?null:e.UOM)),t.xp6(3),t.Oqu(null==e?null:e.partCount),t.xp6(2),t.Oqu(null==e?null:e.totalMaterialCost),t.xp6(3),t.Q6J("ngIf","Active"==e.status),t.xp6(1),t.Q6J("ngIf","Inactive"==e.status),t.xp6(5),t.Q6J("accessType",n.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",n.rolePermissionActions.editAction),t.xp6(3),t.Q6J("accessType",n.rolePermissionActions.editAction)}}const B=function(s,l,e,i){return{page:s,pageSize:l,collection:e,search:i,type:"list"}};let N=(()=>{class s{constructor(e,i,o,n,r,d){this.exportExcelService=e,this.bomOfProductService=i,this.router=o,this.activatedRoute=n,this.spinner=r,this.exportToPDFService=d,this.page=1,this.pageSize=8,this.collection=0,this.column="BOMNo",this.direction=1,this.search="",this.tableData=[],this.rolePermissionActions=U.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,i,o){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:i?._id,action:o}})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}trackByFn(e,i){return i?._id}getAll(e=!1,i=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.bomOfProductService.getAll(o).subscribe(n=>{"EXCEL"==i?this.excelDownload(n.rows):"PDF"==i?this.pdfDownload(n.rows):(this.tableData=n.rows,this.collection=n.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let i=(0,O.cz)(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}excelDownload(e){this.exportExcelService.exportExcel((0,O.Xg)(e))}onSort({column:e,direction:i}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}static#t=this.\u0275fac=function(i){return new(i||s)(t.Y36(m.Ol),t.Y36(Z.KY),t.Y36(h.F0),t.Y36(h.gz),t.Y36(m.V),t.Y36(m.$L))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-bom-of-product-list"]],viewQuery:function(i,o){if(1&i&&t.Gf(_.j,5),2&i){let n;t.iGM(n=t.CRH())&&(o.headers=n)}},decls:34,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","BOMNo",3,"sort"],["sortable","productNo",3,"sort"],["sortable","productName",1,"text-start",3,"sort"],["sortable","productDescription",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","partCount",3,"sort"],["sortable","totalMaterialCost",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["productName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["productDescription",""],[1,"d-flex","justify-content-center"],["class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-clone","fa-lg","me-2","text-primary"],[1,"statusActive"],[1,"statusInActive"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"BoM Summary of Product "),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return o.navigateTo("../form",null,"create")}),t._UZ(6,"i",5),t._uU(7," Create BoM "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(r){return o.eventHeader(r)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(15,"BoM No."),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(17,"Product Code"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(19,"Product Name"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(21," Product Description "),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(23,"UoM"),t.qZA(),t.TgZ(24,"th",17),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(25,"Part Count"),t.qZA(),t.TgZ(26,"th",18),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(27,"Material Cost"),t.qZA(),t.TgZ(28,"th",19),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(29,"Status"),t.qZA(),t.TgZ(30,"th"),t._uU(31,"Action"),t.qZA()()(),t.TgZ(32,"tbody"),t.YNc(33,x,37,22,"tr",20),t.qZA()()()()),2&i&&(t.xp6(4),t.Q6J("accessType",o.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,B,o.page,o.pageSize,o.collection,o.search)),t.xp6(23),t.Q6J("ngForOf",o.tableData)("ngForTrackBy",o.trackByFn))},dependencies:[u.sg,u.O5,M.P,g._L,_.j,D.J,T.S],encapsulation:2})}return s})();var a=c(60095),w=c(21631),q=c(22096),F=c(45594),J=c(66177),p=c(13107);let P=[{header:"Item Code<",key:"itemCode",...p.t},{header:"Item Name",key:"itemName",...p.t},{header:"Item Description",key:"itemDescription",...p.t},{header:"UoM",key:"UOM",...p.t},{header:"Qty/SKU Unit",key:"qtyPerSKUUnit",...p.t},{header:"Waste %",key:"wastePercentage",...p.t},{header:"Qty/Part Count",key:"partCount",...p.t},{header:"Unit Cost",key:"unitCost",...p.t},{header:"Item Cost",key:"itemCost",...p.t}];var k=c(16857),Y=c(50363),Q=c(95346),E=c(14906),L=c(83344);function j(s,l){1&s&&t._UZ(0,"img",72)}function z(s,l){1&s&&t._UZ(0,"img",73)}function G(s,l){if(1&s&&(t.TgZ(0,"li",75)(1,"span",76),t._uU(2),t.qZA()()),2&s){const e=t.oxw(),i=e.$implicit,o=e.pages;t.xp6(2),t.AsE(" Page ",i," of ",o[o.length-1]," ")}}function R(s,l){1&s&&t.YNc(0,G,3,2,"li",74),2&s&&t.Q6J("ngIf",l.pages.length>0)}function H(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"ngb-pagination",68),t.NdJ("pageChange",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.page=o)}),t.YNc(1,j,1,0,"ng-template",69),t.YNc(2,z,1,0,"ng-template",70),t.YNc(3,R,1,1,"ng-template",71),t.qZA()}if(2&s){const e=t.oxw();t.Q6J("collectionSize",e.BoMOfSKUDetailsArr.length)("page",e.page)("pageSize",e.pageSize)("boundaryLinks",!1)}}function V(s,l){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.qtyPerSKUUnit)}}const C=function(){return{standalone:!0}};function $(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"input",84),t.NdJ("input",function(){t.CHM(e);const o=t.oxw().$implicit,n=t.oxw();return t.KtG(n.setItemCostDetails(o))})("ngModelChange",function(o){t.CHM(e);const n=t.oxw().$implicit;return t.KtG(n.qtyPerSKUUnit=o)}),t.qZA()}if(2&s){const e=t.oxw().$implicit;t.Q6J("ngModel",e.qtyPerSKUUnit)("ngModelOptions",t.DdM(2,C))}}function X(s,l){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.wastePercentage)}}function W(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"input",84),t.NdJ("input",function(){t.CHM(e);const o=t.oxw().$implicit,n=t.oxw();return t.KtG(n.setItemCostDetails(o))})("ngModelChange",function(o){t.CHM(e);const n=t.oxw().$implicit;return t.KtG(n.wastePercentage=o)}),t.qZA()}if(2&s){const e=t.oxw().$implicit;t.Q6J("ngModel",e.wastePercentage)("ngModelOptions",t.DdM(2,C))}}const tt=function(){return["SKU","ink"]},et=function(s,l,e){return{"text-black":s,"text-primary":l,blueColor:e}},f=function(){return["view"]};function ot(s,l){if(1&s&&(t.TgZ(0,"tr")(1,"td",77),t._uU(2),t.qZA(),t.TgZ(3,"td",78,79)(5,"span",80),t._uU(6),t.qZA()(),t.TgZ(7,"td",78,81)(9,"span",80),t._uU(10),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"UOMUnitsMaster"),t.qZA(),t.TgZ(14,"td")(15,"div",82),t.YNc(16,V,2,1,"span",67),t.YNc(17,$,1,3,"input",83),t.qZA()(),t.TgZ(18,"td")(19,"div",82),t.YNc(20,X,2,1,"span",67),t.YNc(21,W,1,3,"input",83),t.qZA()(),t.TgZ(22,"td"),t._uU(23),t.ALo(24,"number"),t.qZA(),t.TgZ(25,"td"),t._uU(26),t.qZA(),t.TgZ(27,"td"),t._uU(28),t.ALo(29,"number"),t.qZA()()),2&s){const e=l.$implicit,i=t.MAs(4),o=t.MAs(8),n=t.oxw();t.xp6(1),t.Q6J("ngClass",t.kEZ(29,et,"items"==e.type,"childItem"==e.type,t.DdM(28,tt).includes(e.type))),t.xp6(1),t.hij(" ",e.itemCode," "),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.itemName)("positionTarget",i),t.xp6(1),t.hij(" ",e.itemName," "),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.itemDescription)("positionTarget",o),t.xp6(1),t.hij(" ",e.itemDescription," "),t.xp6(2),t.Oqu(t.lcZ(13,20,e.UOM)),t.xp6(4),t.Q6J("ngIf",t.DdM(33,f).includes(n.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(34,f).includes(n.action)),t.xp6(3),t.Q6J("ngIf",t.DdM(35,f).includes(n.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(36,f).includes(n.action)),t.xp6(2),t.Oqu(t.xi3(24,22,e.partCount,"1.5-5")),t.xp6(3),t.Oqu(e.unitCost),t.xp6(2),t.Oqu(t.xi3(29,25,e.itemCost,"1.2-2"))}}function it(s,l){1&s&&t._UZ(0,"div",85)}function nt(s,l){1&s&&t._UZ(0,"div",86)}function rt(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"div",87)(1,"button",88),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.reset())}),t._uU(2,"Reset"),t.qZA(),t.TgZ(3,"button",89),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.ESCPreview())}),t._uU(4," Esc "),t.qZA(),t.TgZ(5,"button",90),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.preview())}),t._uU(6," Preview "),t.qZA(),t.TgZ(7,"button",91),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.submit())}),t._uU(8," Save "),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(3),t.Q6J("disabled",!e.isESCPreview),t.xp6(2),t.Q6J("disabled",e.isConditionPreview),t.xp6(2),t.Q6J("disabled",!e.isPreview)}}function st(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"div")(1,"button",92),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.navigateTo())}),t._uU(2,"Back"),t.qZA()()}}const at=function(){return["create","edit","copy"]};let ct=(()=>{class s{constructor(e,i,o,n,r,d,v,mt,gt){this.bomOfProductService=e,this.activatedRoute=i,this.spinner=o,this.toastService=n,this.validationService=r,this.utilityService=d,this.modalService=v,this.exportExcelService=mt,this.location=gt,this.isPreview=!1,this.isConditionPreview=!1,this.isESCPreview=!1,this.page=1,this.pageSize=5,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.submitted=!1,this.action="create",this.BoMOfSKUDetailsArr=[],this.ESCPreviewArr=[],this.ESCPreviewInkDetails=[],this.documentDetails=[],this.oldDocumentDetails=[],this.documentDetailsObj={documentNo:null,documentDate:this.utilityService.getTodayDate("YYYY-MM-DD"),revisionNo:null,revisionDate:this.utilityService.getTodayDate("YYYY-MM-DD"),docCreatedBy:null,docApprovedBy:null,QMSDocumentNo:null},this.masterData={autoIncrementNo:"",productMasterOptions:[]},this.form=new a.nJ({_id:new a.p4(null),BOMNo:new a.p4(null,[a.kI.required]),product:new a.p4(null),productNo:new a.p4(null,[a.kI.required]),productCategory:new a.p4(null,[a.kI.required]),productName:new a.p4(null,[a.kI.required]),productDescription:new a.p4(null),UOM:new a.p4(null),partCount:new a.p4(1,[a.kI.required]),documentDetails:new a.p4([]),BoMOfProductDetails:new a.p4([]),totalMaterialCost:new a.p4(null),status:new a.p4("Active")})}ngOnInit(){this.getInitialData()}trackByFn(e,i){return i?._id}reset(){this.form.reset(),this.documentDetails=[],this.documentDetailsObj={documentNo:null,documentDate:this.utilityService.getTodayDate("YYYY-MM-DD"),revisionNo:null,revisionDate:this.utilityService.getTodayDate("YYYY-MM-DD"),docCreatedBy:null,docApprovedBy:null,QMSDocumentNo:null},this.BoMOfSKUDetailsArr=[],this.collection=this.BoMOfSKUDetailsArr.length,this.isPreview=!1,this.isESCPreview=!1,this.getInitialData()}submit(){if(this.submitted=!0,this.form.enable(),this.validationService.checkErrors(this.form,F.ZA))return;let e=this.form.value;"copy"==this.action&&delete e._id,e.BoMOfProductDetails=this.BoMOfSKUDetailsArr.filter(i=>i.qtyPerSKUUnit>0),e.documentDetails=this.documentDetails,e._id?this.update(e):(delete e._id,this.create(e))}navigateTo(){this.location.back()}create(e){this.spinner.show(),this.bomOfProductService.create(e).subscribe(i=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(i.message),this.location.back()})}update(e){this.spinner.show(),this.bomOfProductService.update(e._id,e).subscribe(i=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(i.message),this.location.back()})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value;break;case"EXCEL":default:break;case"PAGE":this.page=e.value}}commonChange(){this.exportExcelService.exportExcel((s=>({title:"BOM Of Product",csvData:this.BoMOfSKUDetailsArr,headers:P}))())}getInitialData(){this.spinner.show(),this.bomOfProductService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.form.controls.BOMNo.setValue(this.masterData.autoIncrementNo),this.form.controls.status.setValue("Active"),this.form.controls.partCount.setValue(1),this.activatedRoute.queryParams.pipe((0,w.z)(i=>(this.action=i.action,this.utilityService.accessDenied(this.action),i.id?this.bomOfProductService.getById(i.id):(0,q.of)({})))).subscribe(i=>{this.spinner.hide(),0!=Object.keys(i).length&&(i.BoMOfProductDetails&&this.bomOfProductService.getAllMergedItemForBOMOfProduct({product:i?.SKU}).subscribe(o=>{this.BoMOfSKUDetailsArr=i.BoMOfProductDetails,i.BoMOfProductDetails=i.BoMOfProductDetails;let n=o?.mergedItems.map(r=>(r.qtyPerSKUUnit=0,r.wastePercentage=0,r));for(const r of i.BoMOfProductDetails)n=n.filter(d=>d.itemCode!=r.itemCode),this.ESCPreviewArr=[...i.BoMOfProductDetails,...n];this.collection=this.BoMOfSKUDetailsArr.length}),i.documentDetails.length>0&&(this.documentDetailsObj=JSON.parse(JSON.stringify(i.documentDetails.slice(-1)[0])),this.documentDetailsObj.documentDate=this.utilityService.getFormatDate(this.documentDetailsObj.documentDate,"YYYY-MM-DD"),this.documentDetailsObj.revisionDate=this.utilityService.getFormatDate(this.documentDetailsObj.revisionDate,"YYYY-MM-DD"),this.documentDetails=[...i.documentDetails],this.oldDocumentDetails=[...this.documentDetails]),this.collection=this.BoMOfSKUDetailsArr.length,this.form.patchValue(i),"create"!=this.action&&(this.isESCPreview=!0,this.isConditionPreview=!0,this.isPreview=!0,this.form.disable(),"edit"==this.action&&(this.form.controls.status.enable(),this.form.controls.partCount.enable())),"copy"==this.action&&(this.form.controls.BOMNo.setValue(e.autoIncrementNo),this.form.enable(),delete i._id))})})}setSKUDetails(e){this.spinner.show(),this.bomOfProductService.getAllMergedItemForBOMOfProduct({product:e._id,action:"create"}).subscribe(i=>{this.spinner.hide(),this.BoMOfSKUDetailsArr=i?.mergedItems.map(o=>(o.qtyPerSKUUnit=0,o.wastePercentage=0,o))}),this.form.controls.productDescription.setValue(e.productDescription),this.form.controls.product.setValue(e._id),this.form.controls.productName.setValue(e.productName),this.form.controls.productCategory.setValue(e.productCategory),this.form.controls.productNo.setValue(e.productNo),this.form.controls.UOM.setValue(e.primaryUnit),"copy"!=this.action&&(this.form.controls.totalMaterialCost.setValue(null),this.BoMOfSKUDetailsArr=[])}setPartCount(){let e=+this.form.controls.partCount.value;if(this.BoMOfSKUDetailsArr.length>0){this.BoMOfSKUDetailsArr=this.BoMOfSKUDetailsArr.map(o=>(o.inkCostPerKg=+o.inkCostPerKg||0,o.unitCost=+o.unitCost||0,o.partCount=+o.partCount||0,o.qtyPerSKUUnit=+o.qtyPerSKUUnit||0,o.wastePercentage=+o.wastePercentage||0,o.itemCost=+o.itemCost||0,o.partCount=(+o.qtyPerSKUUnit+ +o.qtyPerSKUUnit*+o.wastePercentage/100)*e,o.itemCost=+o.partCount*+o.unitCost,o));let i=this.BoMOfSKUDetailsArr.map(o=>o.itemCost).reduce((o,n)=>+o+ +n);this.form.controls.totalMaterialCost.setValue(+i.toFixed(2))}}setItemCostDetails(e){let i=this.form.controls.partCount.value,o=this.BoMOfSKUDetailsArr.map(r=>r.itemCode).indexOf(e.itemCode);this.BoMOfSKUDetailsArr[o].partCount=(+e.qtyPerSKUUnit+ +e.qtyPerSKUUnit*+e.wastePercentage/100)*+i,this.BoMOfSKUDetailsArr[o].itemCost=+e.partCount*+e.unitCost;let n=this.BoMOfSKUDetailsArr.map(r=>r.itemCost).reduce((r,d)=>+r+ +d);this.form.controls.totalMaterialCost.setValue(+n.toFixed(2))}openBOMDocumentDetailsModal(){const e=this.modalService.open(J.Y,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.documentDetailsObj=this.documentDetailsObj,e.componentInstance.oldDocumentDetails=this.oldDocumentDetails,e.componentInstance.BOMNo=this.form.controls.BOMNo.value,e.result.then(i=>{["create","edit","copy"].includes(this.action)&&i&&(this.documentDetails=i.documentDetails,this.documentDetailsObj=i.documentDetailsObj)},i=>{})}preview(){this.search="",this.ESCPreviewArr=this.BoMOfSKUDetailsArr,this.BoMOfSKUDetailsArr=this.BoMOfSKUDetailsArr.filter(e=>e.qtyPerSKUUnit>0),this.collection=this.BoMOfSKUDetailsArr.length,this.BoMOfSKUDetailsArr.length>0?(this.isPreview=!0,this.isESCPreview=!0):(this.toastService.warning("At least One Row is Required"),this.isPreview=!1,this.isESCPreview=!0)}ESCPreview(){this.search="",this.isPreview=!1,this.isConditionPreview=!1,this.BoMOfSKUDetailsArr=this.ESCPreviewArr,this.collection=this.BoMOfSKUDetailsArr.length}onSort({column:e,direction:i}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.BoMOfSKUDetailsArr=""===i||""===e?this.BoMOfSKUDetailsArr:[...this.BoMOfSKUDetailsArr].sort((o,n)=>{let r="string"==typeof o[e]?o[e].toLowerCase():o[e],d="string"==typeof n[e]?n[e].toLowerCase():n[e];const v=r<d?-1:r>d?1:0;return"asc"===i?v:-v})}static#t=this.\u0275fac=function(i){return new(i||s)(t.Y36(Z.KY),t.Y36(h.gz),t.Y36(m.V),t.Y36(m.kl),t.Y36(k.R),t.Y36(m.tI),t.Y36(g.FF),t.Y36(m.Ol),t.Y36(u.Ye))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-bom-of-product-form"]],viewQuery:function(i,o){if(1&i&&t.Gf(_.j,5),2&i){let n;t.iGM(n=t.CRH())&&(o.headers=n)}},decls:136,vars:49,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-6"],[1,"col-7"],[1,"col-6","pe-0"],[1,"form-label","mb-2"],[1,"text-danger"],[1,"d-flex","align-items-center"],["type","text","formControlName","BOMNo","readonly","",1,"form-control","border-end-0"],[1,"input-group-text","statusSpanHeight"],[1,"bomDocInfo","pointer",3,"click"],["bindLabel","productNo","bindValue","productNo","formControlName","productNo",3,"items","clearable","change"],[1,"col-5","pe-0"],["bindLabel","productCategory","bindValue","productCategory","formControlName","productCategory",3,"items","clearable","change"],["bindLabel","productName","bindValue","productName","formControlName","productName",3,"items","clearable","change"],[1,"col-8","pe-0"],["type","text","formControlName","productDescription","readonly","",1,"form-control"],[1,"col-4"],["type","text","formControlName","UOM","readonly","",1,"form-control"],[1,"row","line-border"],[1,"row","justify-content-between","settingMargin"],[1,"d-flex"],["id","basic-addon1",1,"input-group-text","bg-primary"],["aria-hidden","true",1,"fa","fa-search","text-white"],["type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[1,"col-4","d-flex","justify-content-center"],[3,"collectionSize","page","pageSize","boundaryLinks","pageChange",4,"ngIf"],[1,"col-1"],[1,"col-3"],[1,"col-9","pe-0"],[1,"col-form-label","text-nowrap"],[1,"fa","fa-caret-right","fa-5x","mx-2"],["type","number","formControlName","partCount","min","0","oninput","this.value = !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : 1",1,"form-control",3,"input"],[1,"col-3","d-flex","justify-content-end","align-items-center"],[1,"d-flex","justify-content-end"],["src","./assets/images/excel.svg","height","28",1,"",3,"click"],[1,"table-responsive",2,"min-height","20rem"],[1,"table","table-bordered","table-sticky","mt-1"],[1,"bg-primary"],[1,"text-white"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","qtyPerSKUUnit",3,"sort"],["sortable","wastePercentage",3,"sort"],["sortable","partCount",3,"sort"],["sortable","unitCost",3,"sort"],["sortable","itemCost",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"fa","fa-caret-right","fa-5x","mx-1"],[1,"input-group-text","text-secondary","combine-INR"],[1,"vr","ms-3"],["type","number","formControlName","totalMaterialCost","readonly","",1,"form-control","border-start-0"],[1,"col-md-auto","text-nowrap"],["type","button",1,"btn","btn-primary","px-3"],["formControlName","status",1,"form-select","statusSelectBorder"],["selected","","disabled","",3,"value"],[3,"value"],["class","statusActive","class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],[1,"col-md-auto","ms-auto"],["class","d-grid gap-2 d-md-block",4,"ngIf"],[4,"ngIf"],[3,"collectionSize","page","pageSize","boundaryLinks","pageChange"],["ngbPaginationPrevious",""],["ngbPaginationNext",""],["ngbPaginationPages",""],["src","./assets/new_icons/pagination_prev.svg","width","20rem"],["src","./assets/new_icons/pagination_next.svg","width","20rem"],["class","ngb-custom-pages-item align-self-center",4,"ngIf"],[1,"ngb-custom-pages-item","align-self-center"],[1,"page-label","me-2","ms-1"],[3,"ngClass"],[1,"text-start"],["itemName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["itemDescription",""],[1,"d-flex","justify-content-center"],["class","form-control text-center form-control-size-lg","type","number",3,"ngModel","ngModelOptions","input","ngModelChange",4,"ngIf"],["type","number",1,"form-control","text-center","form-control-size-lg",3,"ngModel","ngModelOptions","input","ngModelChange"],[1,"statusActive"],[1,"statusInActive"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","me-1",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(i,o){1&i&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",5)(11,"div",7)(12,"div",5)(13,"div",8)(14,"label",9),t._uU(15," BoM No. "),t.TgZ(16,"span",10),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"div",11),t._UZ(19,"input",12),t.TgZ(20,"span",13)(21,"div",14),t.NdJ("click",function(){return o.openBOMDocumentDetailsModal()}),t.qZA()()()(),t.TgZ(22,"div",8)(23,"label",9),t._uU(24,"Product No. "),t.TgZ(25,"span",10),t._uU(26,"*"),t.qZA()(),t.TgZ(27,"ng-select",15),t.NdJ("change",function(r){return o.setSKUDetails(r)}),t.qZA()()()(),t.TgZ(28,"div",16)(29,"label",9),t._uU(30," Product Category/Code"),t.qZA(),t.TgZ(31,"ng-select",17),t.NdJ("change",function(r){return o.setSKUDetails(r)}),t.qZA()()()(),t.TgZ(32,"div",6)(33,"div",5)(34,"div",16)(35,"label",9),t._uU(36," Product Name "),t.TgZ(37,"span",10),t._uU(38,"*"),t.qZA()(),t.TgZ(39,"ng-select",18),t.NdJ("change",function(r){return o.setSKUDetails(r)}),t.qZA()(),t.TgZ(40,"div",7)(41,"div",5)(42,"div",19)(43,"label",9),t._uU(44," Product Description"),t.qZA(),t._UZ(45,"input",20),t.qZA(),t.TgZ(46,"div",21)(47,"label",9),t._uU(48," UoM"),t.qZA(),t._UZ(49,"input",22),t.qZA()()()()()()(),t._UZ(50,"hr",23),t.TgZ(51,"div",24)(52,"div",21)(53,"div",25)(54,"div",26),t._UZ(55,"i",27),t.qZA(),t.TgZ(56,"div")(57,"input",28),t.NdJ("ngModelChange",function(r){return o.search=r}),t.qZA()()()(),t.TgZ(58,"div",29),t.YNc(59,H,4,4,"ngb-pagination",30),t.qZA(),t._UZ(60,"div",31),t.TgZ(61,"div",32)(62,"div",5)(63,"div",33)(64,"div",11)(65,"div",34)(66,"span"),t._uU(67,"Part Count"),t.qZA(),t.TgZ(68,"span",10),t._uU(69,"*"),t.qZA(),t._UZ(70,"i",35),t.qZA(),t.TgZ(71,"input",36),t.NdJ("input",function(){return o.setPartCount()}),t.qZA()()(),t.TgZ(72,"div",37)(73,"div",38)(74,"img",39),t.NdJ("click",function(){return o.commonChange()}),t.qZA()()()()()(),t.TgZ(75,"div",40)(76,"table",41)(77,"thead",42)(78,"tr",43)(79,"th",44),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(80),t.ALo(81,"labelTranslate"),t.qZA(),t.TgZ(82,"th",45),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(83),t.ALo(84,"labelTranslate"),t.qZA(),t.TgZ(85,"th",46),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(86),t.ALo(87,"labelTranslate"),t.qZA(),t.TgZ(88,"th",47),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(89,"UoM"),t.qZA(),t.TgZ(90,"th",48),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(91,"Qty/SKU Unit"),t.qZA(),t.TgZ(92,"th",49),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(93,"Waste %"),t.qZA(),t.TgZ(94,"th",50),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(95,"Qty/Part Count"),t.qZA(),t.TgZ(96,"th",51),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(97,"Unit Cost"),t.qZA(),t.TgZ(98,"th",52),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(99),t.ALo(100,"labelTranslate"),t.qZA()()(),t.TgZ(101,"tbody"),t.YNc(102,ot,30,37,"tr",53),t.ALo(103,"slice"),t.ALo(104,"searchFi1ter"),t.qZA()()(),t._UZ(105,"hr",23),t.TgZ(106,"div",5)(107,"div",21)(108,"div",11)(109,"div",34),t._uU(110," Total Material Cost "),t._UZ(111,"i",54),t.qZA(),t.TgZ(112,"div",25)(113,"span",55),t._uU(114),t.ALo(115,"companyCurrency"),t._UZ(116,"div",56),t.qZA(),t._UZ(117,"input",57),t.qZA()()(),t.TgZ(118,"div",32)(119,"div",11)(120,"div",58)(121,"button",59),t._uU(122,"Status"),t.qZA()(),t.TgZ(123,"select",60)(124,"option",61),t._uU(125,"Select Status"),t.qZA(),t.TgZ(126,"option",62),t._uU(127,"Active"),t.qZA(),t.TgZ(128,"option",62),t._uU(129,"Inactive"),t.qZA()(),t.TgZ(130,"span",13),t.YNc(131,it,1,0,"div",63),t.YNc(132,nt,1,0,"div",64),t.qZA()()(),t.TgZ(133,"div",65),t.YNc(134,rt,9,3,"div",66),t.YNc(135,st,3,0,"div",67),t.qZA()()()()),2&i&&(t.Q6J("formGroup",o.form),t.xp6(5),t.hij("BoM of Product (",t.lcZ(6,27,o.action),")"),t.xp6(22),t.Q6J("items",o.masterData.productMasterOptions)("clearable",!1),t.xp6(4),t.Q6J("items",o.masterData.productMasterOptions)("clearable",!1),t.xp6(8),t.Q6J("items",o.masterData.productMasterOptions)("clearable",!1),t.xp6(18),t.Q6J("ngModel",o.search)("ngModelOptions",t.DdM(46,C)),t.xp6(2),t.Q6J("ngIf",o.BoMOfSKUDetailsArr.length>0),t.xp6(15),t.Udp("cursor","pointer"),t.xp6(6),t.Oqu(t.lcZ(81,29,"Item Code")),t.xp6(3),t.hij(" ",t.lcZ(84,31,"Item Name")," "),t.xp6(3),t.hij(" ",t.lcZ(87,33,"Item Description")," "),t.xp6(13),t.Oqu(t.lcZ(100,35,"Item Cost")),t.xp6(3),t.Q6J("ngForOf",t.Dn7(103,37,t.xi3(104,41,o.BoMOfSKUDetailsArr,o.search),(o.page-1)*o.pageSize,(o.page-1)*o.pageSize+o.pageSize))("ngForTrackBy",o.trackByFn),t.xp6(12),t.hij(" ",t.lcZ(115,44,"INR")," "),t.xp6(10),t.Q6J("value","null"),t.xp6(2),t.Q6J("value","Active"),t.xp6(2),t.Q6J("value","Inactive"),t.xp6(3),t.Q6J("ngIf","Active"==o.form.value.status),t.xp6(1),t.Q6J("ngIf","Inactive"==o.form.value.status),t.xp6(2),t.Q6J("ngIf",t.DdM(47,at).includes(o.action)),t.xp6(1),t.Q6J("ngIf",t.DdM(48,f).includes(o.action)))},dependencies:[u.mk,u.sg,u.O5,g.N9,g.GZ,g.ju,g.Qy,g._L,a._Y,a.YN,a.Kr,a.Fj,a.wV,a.EJ,a.JJ,a.JL,a.qQ,a.sg,a.u,a.On,Y.w9,_.j,u.OU,u.JJ,u.rS,Q.G,E.c,L.f,T.S],styles:[".fa[_ngcontent-%COMP%]{font-size:1.6rem!important}.blueColor[_ngcontent-%COMP%]{color:#00f}.pagination[_ngcontent-%COMP%]{margin-bottom:0!important}ngb-pagination[_ngcontent-%COMP%]     ul.pagination{margin:0!important}.page-label[_ngcontent-%COMP%]{color:var(--bs-dark);padding:0 1rem;font-size:1.4rem}ngb-pagination[_ngcontent-%COMP%]     ul>li:not(.active)>a{border:none!important;color:var(--bs-white)!important;background-color:#fff!important;box-shadow:none}"]})}return s})();var lt=c(56208);const dt=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:N},{path:"form",component:ct,resolve:{accessScreen:c(19964).xr}}];let pt=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#o=this.\u0275inj=t.cJS({imports:[u.ez,h.Bz.forChild(dt),lt.m]})}return s})()}}]);