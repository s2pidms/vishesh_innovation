"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3017],{93017:(D,h,l)=>{l.r(h),l.d(h,{AssetMasterModule:()=>ct});var u=l(96814),m=l(1076),A=l(43818),C=l(25116),d=l(13107),T=l(28402);let v="Asset Master",f=[{header:"Asset Class",key:"assetType",...d.t},{header:"Asset No.",key:"assetCode",...d.t},{header:"Asset Name",key:"assetName",...d.t},{header:"Asset Description",key:"assetDescription",...d.t},{header:"Purchase Cost",key:"assetPurchaseCost",...d.t},{header:"Purchase Date",key:"assetPurchaseDateS",...d.t},{header:"Depreciation Start Date",key:"depreciationStartDateS",...d.t},{header:"Location",key:"location",...d.t},{header:"Life (Yr)",key:"estimatedUsefulLifeInYear",...d.t},{header:"Asset Cost/Hr",key:"totalAssetCostPerHr",...d.t},{header:"Status",key:"status",...d.t}];var F=l(77203),t=l(65879),p=l(2742),S=l(2498),Z=l(37285),M=l(88059),N=l(53421),y=l(83344);function Y(a,c){if(1&a){const e=t.EpF();t.TgZ(0,"th",20),t.NdJ("sort",function(i){t.CHM(e);const o=t.oxw();return t.KtG(o.onSort(i))}),t._uU(1," Asset Cost/Hr "),t.qZA()}}function q(a,c){1&a&&t._UZ(0,"div",39)}function w(a,c){1&a&&t._UZ(0,"div",40)}function J(a,c){1&a&&t._UZ(0,"div",41)}function L(a,c){1&a&&(t.TgZ(0,"span",46),t._uU(1),t.ALo(2,"companyCurrency"),t._UZ(3,"div",47),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"INR")," "))}function O(a,c){if(1&a&&(t.TgZ(0,"td",42)(1,"div",43),t.YNc(2,L,4,3,"span",44),t.TgZ(3,"span",45),t._uU(4),t.ALo(5,"number"),t.qZA()()()),2&a){const e=t.oxw().$implicit;t.xp6(2),t.Q6J("ngIf",null==e?null:e.totalAssetCostPerHr),t.xp6(2),t.hij(" ",t.xi3(5,2,null==e?null:e.totalAssetCostPerHr,"1.2-2")," ")}}function k(a,c){1&a&&t._UZ(0,"div",48)}function E(a,c){1&a&&t._UZ(0,"div",49)}function R(a,c){if(1&a){const e=t.EpF();t.TgZ(0,"a",50),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,o=t.oxw();return t.KtG(o.openConfirmModal(null==i?null:i._id,null==i?null:i.assetCode))}),t._UZ(1,"i",51),t._uU(2," Delete "),t.qZA()}}function H(a,c){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",21,22)(5,"span",23),t._uU(6),t.qZA()(),t.TgZ(7,"td",21,24)(9,"span",23),t._uU(10),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td")(16,"span",25),t.YNc(17,q,1,0,"div",26),t.YNc(18,w,1,0,"div",27),t.YNc(19,J,1,0,"div",28),t.qZA()(),t.YNc(20,O,6,5,"td",29),t.TgZ(21,"td")(22,"span",25),t.YNc(23,k,1,0,"div",30),t.YNc(24,E,1,0,"div",31),t.qZA()(),t.TgZ(25,"td")(26,"div",32),t._UZ(27,"button",33),t.TgZ(28,"div",34)(29,"a",35),t.NdJ("click",function(){const o=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.navigateTo("../form",o,"view"))}),t._UZ(30,"i",36),t._uU(31," View "),t.qZA(),t.TgZ(32,"a",35),t.NdJ("click",function(){const o=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.navigateTo("../form",o,"edit"))}),t._UZ(33,"i",37),t._uU(34," Edit "),t.qZA(),t.YNc(35,R,3,0,"a",38),t.qZA()()()()}if(2&a){const e=c.$implicit,s=t.MAs(4),i=t.MAs(8),o=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.assetCode),t.xp6(1),t.Udp("width",s.clientWidth),t.xp6(2),t.Q6J("positionTarget",s)("ngbTooltip",e.assetName),t.xp6(1),t.hij(" ",e.assetName," "),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("positionTarget",i)("ngbTooltip",e.assetDescription),t.xp6(1),t.hij(" ",e.assetDescription," "),t.xp6(2),t.Oqu(e.assetPurchaseDateS),t.xp6(2),t.Oqu(e.estimatedUsefulLifeInYear),t.xp6(3),t.Q6J("ngIf","green"==e.expiryStatus),t.xp6(1),t.Q6J("ngIf","red"==e.expiryStatus),t.xp6(1),t.Q6J("ngIf","orange"==e.expiryStatus),t.xp6(1),t.Q6J("ngIf",o.menuItemId==o.financeMenuItemId),t.xp6(3),t.Q6J("ngIf","Active"==e.status),t.xp6(1),t.Q6J("ngIf","Inactive"==e.status),t.xp6(5),t.Q6J("accessType",o.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",o.rolePermissionActions.editAction),t.xp6(3),t.Q6J("ngIf",o.user==o.superAdminId)}}const Q=function(a,c,e,s){return{page:a,pageSize:c,collection:e,search:s,type:"list"}};let V=(()=>{class a{constructor(e,s,i,o,r,g,_,I,P,ut){this.exportExcelService=e,this.router=s,this.spinner=i,this.activatedRoute=o,this.assetMasterService=r,this.exportToPDFService=g,this.appGlobalService=_,this.storageService=I,this.toastService=P,this.modalService=ut,this.page=1,this.pageSize=8,this.collection=0,this.column="assetCode",this.direction=1,this.search="",this.tableData=[],this.menuItemId="",this.superAdminId=C.dA,this.user="",this.financeMenuItemId="64a6c1e33339d4dc9d8141ad",this.rolePermissionActions=C.a1}ngOnInit(){this.user=this.storageService.get("IDMSAUser")?.roles?.find(e=>e==this.superAdminId),this.menuItemId=this.appGlobalService.menuItemId,this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getAll(e=!1,s=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.assetMasterService.getAll(i).subscribe(o=>{"EXCEL"==s?this.excelDownload(o?.rows):"PDF"==s?this.pdfDownload(o?.rows):(this.tableData=o?.rows,this.collection=o?.count),this.spinner.hide()})}delete(e){this.spinner.show(),this.assetMasterService.delete(e).subscribe(s=>{this.spinner.hide(),this.toastService.success(s.message),this.getAll()})}openConfirmModal(e,s){const i=this.modalService.open(F.hn,{centered:!0,size:"md",backdrop:"static",keyboard:!1});i.componentInstance.heading="Confirm Deletion",i.componentInstance.confirmText=`Confirm Deletion of Asset Number ${s} ?`,i.result.then(o=>{"Yes"==o.title&&this.delete(e)},o=>{})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateTo(e,s,i){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:s?._id,action:i}})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}trackByFn(e,s){return s?._id}pdfDownload(e){let s=(a=>(0,T.J)({data:a,headers:f,title:v}))(e);this.exportToPDFService.generatePdf(s.tableData,s.title)}excelDownload(e){this.exportExcelService.exportExcel((a=>({title:v,csvData:a,headers:f}))(e))}onSort({column:e,direction:s}){this.headers.forEach(i=>{i.sortable!==e&&(i.direction="")}),this.column=e,this.direction="asc"==s?1:-1,this.getAll()}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(p.Ol),t.Y36(m.F0),t.Y36(p.V),t.Y36(m.gz),t.Y36(S.Z9),t.Y36(p.$L),t.Y36(p.P0),t.Y36(p.V1),t.Y36(p.kl),t.Y36(Z.FF))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-asset-master-list"]],viewQuery:function(s,i){if(1&s&&t.Gf(A.j,5),2&s){let o;t.iGM(o=t.CRH())&&(i.headers=o)}},decls:33,vars:10,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","btn-add","px-5",3,"click"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-secondary"],[1,"text-white"],["sortable","assetCode",3,"sort"],["sortable","assetName",1,"text-start",3,"sort"],["sortable","assetDescription",1,"text-start",3,"sort"],["sortable","assetPurchaseDate",3,"sort"],["sortable","estimatedUsefulLifeInYear",3,"sort"],["sortable","location",3,"sort"],["class","text-start","sortable","assetPurchaseDateS",3,"sort",4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],["sortable","assetPurchaseDateS",1,"text-start",3,"sort"],[1,"text-start"],["assetName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["assetDescription",""],[1,"d-flex","justify-content-center"],["class","flaggreen",4,"ngIf"],["class","flagred",4,"ngIf"],["class","flagYellow",4,"ngIf"],["class","text-start","class","py-0 text-center",4,"ngIf"],["class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["href","javascript:void(0)",3,"click",4,"ngIf"],[1,"flaggreen"],[1,"flagred"],[1,"flagYellow"],[1,"py-0","text-center"],[1,"d-flex","justify-content-start","align-items-center"],["class","input-group-text text-secondary combine-INR border border-0",4,"ngIf"],[1,"total-cost-color"],[1,"input-group-text","text-secondary","combine-INR","border","border-0"],[1,"vr","ms-3"],[1,"statusActive"],[1,"statusInActive"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-primary"]],template:function(s,i){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Asset Summary"),t.qZA()(),t.TgZ(4,"div",3),t._UZ(5,"button",4),t.TgZ(6,"button",5),t.NdJ("click",function(){return i.navigateTo("../form",{},"create")}),t._uU(7," Asset "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(r){return i.eventHeader(r)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(15,"Asset No."),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(17,"Asset Name"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(19,"Asset Description"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(21,"Purchase Date"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(23,"Life (Yr)"),t.qZA(),t.TgZ(24,"th",17),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(25,"Aging"),t.qZA(),t.YNc(26,Y,2,0,"th",18),t.TgZ(27,"th"),t._uU(28,"Status"),t.qZA(),t.TgZ(29,"th"),t._uU(30,"Action"),t.qZA()()(),t.TgZ(31,"tbody"),t.YNc(32,H,36,22,"tr",19),t.qZA()()()()),2&s&&(t.xp6(4),t.Q6J("accessType",i.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(5,Q,i.page,i.pageSize,i.collection,i.search)),t.xp6(16),t.Q6J("ngIf",i.menuItemId==i.financeMenuItemId),t.xp6(6),t.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[u.sg,u.O5,M.P,Z._L,A.j,N.J,u.JJ,y.f],styles:[".total-cost-color[_ngcontent-%COMP%]{font-size:1.2rem!important;color:#000}"]})}return a})();var n=l(60095),j=l(21631),G=l(22096);const z=[{message:"Asset Class is Required",key:"assetClassId"},{message:"Asset Code is Required",key:"assetCode"},{message:"Asset Name is Required",key:"assetName"},{message:"Asset Description is Required",key:"assetDescription"},{message:"Purchase Cost is Required",key:"assetPurchaseCost"},{message:"Status  is Required",key:"status"}];function K(a,c){1&a&&t._UZ(0,"hr",24)}function B(a,c){if(1&a){const e=t.EpF();t.TgZ(0,"div",31)(1,"button",32),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.dismissModel())}),t._uU(2," Save & Close "),t.qZA()()}}const U=function(){return["create","edit"]};let X=(()=>{class a{constructor(e,s){this.activeModal=e,this.toastService=s,this.action="",this.assetPurchaseCost=null,this.totalAssetCostPerHr=null,this.totalAssetCostPerShift=null,this.costingInput={},this.assetConfiguration=[],this.estimatedResidualPercentage=0,this.maintenanceDownTime=0,this.btnDisable=!1,this.page=1,this.pageSize=4,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.numberOfDaysOfYear=365,this.numberOfSundays=52,this.companyHoliday=10,this.noOfMonths=12,this.shiftHr=8,this.form=new n.nJ({assetPurchaseCost:new n.p4(null),financeCost:new n.p4(null),totalAssetClass:new n.p4(null),estimatedUsefulLifeInYear:new n.p4(null),depreciatedAssetCostPerYear:new n.p4(null),noOfOperationalDaysPerYear:new n.p4(null),noOfShiftsRunPerDays:new n.p4(null),machineEfficiencyPercentage:new n.p4(null),totalAssetCostPerHr:new n.p4(null),totalAssetCostPerShift:new n.p4(null)})}setFormField(e,s){this.form.controls[e].setValue(Number(s).toFixed(2))}getFormField(e){return+this.form.controls[e].value||0}setConfigurableData(){this.form.controls.totalAssetCostPerHr.setValue(this.totalAssetCostPerHr),this.form.controls.totalAssetCostPerShift.setValue(this.totalAssetCostPerShift),this.assetConfiguration.length>0&&(this.estimatedResidualPercentage=this.getParamsValue(this.assetConfiguration,"ESTIMATED_RESIDUAL"),this.maintenanceDownTime=this.getParamsValue(this.assetConfiguration,"MAINT_DOWN_TIME"),this.form.controls.noOfShiftsRunPerDays.setValue(Number(this.getParamsValue(this.assetConfiguration,"NO_OF_SHIFTS_RPD")).toFixed(2)),this.setFormField("machineEfficiencyPercentage",this.getParamsValue(this.assetConfiguration,"MACHINE_EFFICIENCY")),this.setFormField("noOfOperationalDaysPerYear",this.getParamsValue(this.assetConfiguration,"NO_OPS_DAYS_PER_YEAR"))),this.form.patchValue(this.costingInput),this.form.controls.assetPurchaseCost.setValue(this.assetPurchaseCost),this.setFormField("financeCost",+this.form.controls.assetPurchaseCost.value/100*35),this.setTotalAsset()}ngOnInit(){this.setConfigurableData(),"view"==this.action&&this.form.disable()}getParamsValue(e,s){return e.find(i=>i?.parameterLabel==s)?.parameterName??0}reset(){this.form.reset(),this.setConfigurableData()}dismissModel(){this.form.enable(),this.activeModal.close(this.form.value)}setTotalAsset(){let e=this.getFormField("assetPurchaseCost"),s=this.getFormField("financeCost"),i=this.getFormField("estimatedUsefulLifeInYear");this.setFormField("totalAssetClass",+e+ +s),e&&i&&this.setDepreciatedCostPerYear()}setDepreciatedCostPerYear(){let e=this.getFormField("estimatedUsefulLifeInYear"),s=this.getFormField("totalAssetClass");e?this.setFormField("depreciatedAssetCostPerYear",+s/+e):(this.setFormField("depreciatedAssetCostPerYear",0),this.setFormField("totalAssetCostPerHr",0)),this.setDepreciationCostPerHour()}setDepreciationCostPerHour(){let e=this.getFormField("assetPurchaseCost"),s=this.getFormField("estimatedUsefulLifeInYear"),i=this.getFormField("noOfShiftsRunPerDays"),o=this.getFormField("machineEfficiencyPercentage"),r=this.getFormField("noOfOperationalDaysPerYear"),g=this.getFormField("depreciatedAssetCostPerYear");if(!e)return void this.toastService.warning("Pls first enter the value of Purchase Cost and Finance Cost");if(!s)return void this.toastService.warning("Pls enter the value of Estimated Useful Life (Years)");r>366&&(this.toastService.warning("No. of Operational Days/Year Should be less than 366 Days "),this.setFormField("noOfOperationalDaysPerYear",0),r=this.getFormField("noOfOperationalDaysPerYear")),+g&&r&&+i&&this.shiftHr&&+o?this.setFormField("totalAssetCostPerHr",+g/+r/(+i*+this.shiftHr*+o)):(this.setFormField("totalAssetCostPerHr",0),this.setFormField("totalAssetCostPerShift",0));let _=this.getFormField("totalAssetCostPerHr");this.setFormField("totalAssetCostPerShift",_?+_*+this.shiftHr:0)}changeEstimatedResidual(){this.getFormField("assetPurchaseCost")||this.toastService.warning("Pls first enter the value of Actual Machine Cost and Finance Cost")}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(Z.Kz),t.Y36(p.kl))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-asset-costing-modal"]],inputs:{action:"action",assetPurchaseCost:"assetPurchaseCost",totalAssetCostPerHr:"totalAssetCostPerHr",totalAssetCostPerShift:"totalAssetCostPerShift",costingInput:"costingInput",assetConfiguration:"assetConfiguration"},decls:111,vars:23,consts:[[3,"formGroup"],[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"container-fluid","mt-4","mb-3"],[1,"row"],[1,"col-12","px-0"],[1,"row","px-5","mb-4"],[1,"col-6"],[1,"form-label"],[1,"text-danger"],[1,"d-flex"],[1,"input-group-text","combine-INR","text-secondary"],[1,"vr","ms-3"],["type","number","formControlName","assetPurchaseCost","readonly","",1,"form-control","border-start-0",3,"input"],["type","number","formControlName","financeCost",1,"form-control","border-start-0",3,"input"],["type","number","formControlName","totalAssetClass","readonly","",1,"form-control","border-start-0"],["type","number","formControlName","estimatedUsefulLifeInYear",1,"form-control",3,"input"],["type","number","formControlName","depreciatedAssetCostPerYear","readonly","",1,"form-control","border-start-0"],["type","number","formControlName","machineEfficiencyPercentage",1,"form-control",3,"input"],["type","number","formControlName","noOfOperationalDaysPerYear",1,"form-control",3,"input"],["type","number","formControlName","noOfShiftsRunPerDays",1,"form-control",3,"input"],[1,"line-border"],["type","number","formControlName","totalAssetCostPerHr","readonly","",1,"form-control","border-start-0"],["type","number","formControlName","totalAssetCostPerShift","readonly","",1,"form-control","border-start-0"],["class","line-border",4,"ngIf"],[1,"row","px-5","d-flex","justify-content-center","mt-4","mb-3"],[1,"col-md-auto"],["class","d-grid gap-2 d-md-block",4,"ngIf"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-3",3,"click"]],template:function(s,i){1&s&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4,"Asset Cost"),t.qZA(),t.TgZ(5,"div")(6,"button",4),t.NdJ("click",function(){return i.activeModal.close()}),t._UZ(7,"i",5),t.qZA()()(),t.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"div",10)(13,"label",11),t._uU(14," Purchase Cost"),t.TgZ(15,"span",12),t._uU(16,"*"),t.qZA()(),t.TgZ(17,"div",13)(18,"span",14),t._uU(19),t.ALo(20,"companyCurrency"),t._UZ(21,"div",15),t.qZA(),t.TgZ(22,"input",16),t.NdJ("input",function(){return i.setTotalAsset()}),t.qZA()()(),t.TgZ(23,"div",10)(24,"label",11),t._uU(25," Finance Cost"),t.TgZ(26,"span",12),t._uU(27,"*"),t.qZA()(),t.TgZ(28,"div",13)(29,"span",14),t._uU(30),t.ALo(31,"companyCurrency"),t._UZ(32,"div",15),t.qZA(),t.TgZ(33,"input",17),t.NdJ("input",function(){return i.setTotalAsset()}),t.qZA()()()(),t.TgZ(34,"div",9)(35,"div",10)(36,"label",11),t._uU(37," Total Asset Cost"),t.TgZ(38,"span",12),t._uU(39,"*"),t.qZA()(),t.TgZ(40,"div",13)(41,"span",14),t._uU(42),t.ALo(43,"companyCurrency"),t._UZ(44,"div",15),t.qZA(),t._UZ(45,"input",18),t.qZA()(),t.TgZ(46,"div",10)(47,"label",11),t._uU(48," Estimated Useful Life (Years) "),t.TgZ(49,"span",12),t._uU(50,"*"),t.qZA()(),t.TgZ(51,"input",19),t.NdJ("input",function(){return i.setDepreciatedCostPerYear()}),t.qZA()()(),t.TgZ(52,"div",9)(53,"div",10)(54,"label",11),t._uU(55," Depreciated Asset Cost/Year "),t.TgZ(56,"span",12),t._uU(57,"*"),t.qZA()(),t.TgZ(58,"div",13)(59,"span",14),t._uU(60),t.ALo(61,"companyCurrency"),t._UZ(62,"div",15),t.qZA(),t._UZ(63,"input",20),t.qZA()(),t.TgZ(64,"div",10)(65,"label",11),t._uU(66," Machine Efficiency % "),t.TgZ(67,"span",12),t._uU(68,"*"),t.qZA()(),t.TgZ(69,"input",21),t.NdJ("input",function(){return i.setDepreciationCostPerHour()}),t.qZA()()(),t.TgZ(70,"div",9)(71,"div",10)(72,"label",11),t._uU(73," No. of Operational Days/Year "),t.TgZ(74,"span",12),t._uU(75,"*"),t.qZA()(),t.TgZ(76,"input",22),t.NdJ("input",function(){return i.setDepreciationCostPerHour()}),t.qZA()(),t.TgZ(77,"div",10)(78,"label",11),t._uU(79," No. of shifts/Day "),t.TgZ(80,"span",12),t._uU(81,"*"),t.qZA()(),t.TgZ(82,"input",23),t.NdJ("input",function(){return i.setDepreciationCostPerHour()}),t.qZA()()(),t._UZ(83,"hr",24),t.TgZ(84,"div",9)(85,"div",10)(86,"label",11),t._uU(87," Total Cost/Hr"),t.TgZ(88,"span",12),t._uU(89,"*"),t.qZA()(),t.TgZ(90,"div",13)(91,"span",14),t._uU(92),t.ALo(93,"companyCurrency"),t._UZ(94,"div",15),t.qZA(),t._UZ(95,"input",25),t.qZA()(),t.TgZ(96,"div",10)(97,"label",11),t._uU(98," Total Cost/Shift"),t.TgZ(99,"span",12),t._uU(100,"*"),t.qZA()(),t.TgZ(101,"div",13)(102,"span",14),t._uU(103),t.ALo(104,"companyCurrency"),t._UZ(105,"div",15),t.qZA(),t._UZ(106,"input",26),t.qZA()()(),t.YNc(107,K,1,0,"hr",27),t.TgZ(108,"div",28)(109,"div",29),t.YNc(110,B,3,0,"div",30),t.qZA()()()()()()()),2&s&&(t.Q6J("formGroup",i.form),t.xp6(19),t.hij(" ",t.lcZ(20,9,"INR")," "),t.xp6(11),t.hij(" ",t.lcZ(31,11,"INR")," "),t.xp6(12),t.hij(" ",t.lcZ(43,13,"INR")," "),t.xp6(18),t.hij(" ",t.lcZ(61,15,"INR")," "),t.xp6(32),t.hij(" ",t.lcZ(93,17,"INR")," "),t.xp6(11),t.hij(" ",t.lcZ(104,19,"INR")," "),t.xp6(4),t.Q6J("ngIf",t.DdM(21,U).includes(i.action)),t.xp6(3),t.Q6J("ngIf",t.DdM(22,U).includes(i.action)))},dependencies:[u.O5,n._Y,n.Fj,n.wV,n.JJ,n.JL,n.sg,n.u,y.f],encapsulation:2})}return a})();var $=l(16897),W=l(50363);function tt(a,c){if(1&a&&(t.TgZ(0,"option",36),t._uU(1),t.qZA()),2&a){const e=c.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",null==e?null:e.label," ")}}function et(a,c){if(1&a){const e=t.EpF();t.TgZ(0,"div",37),t._UZ(1,"button",38),t.TgZ(2,"button",39),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.openInfoModal())}),t._uU(3," Costing Input "),t.qZA()()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("disabled",!e.f.assetPurchaseCost.value),t.xp6(1),t.Q6J("disabled",!e.f.assetPurchaseCost.value)}}function st(a,c){1&a&&t._UZ(0,"div",40)}function it(a,c){1&a&&t._UZ(0,"div",41)}function at(a,c){if(1&a){const e=t.EpF();t.TgZ(0,"div",42)(1,"button",43),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.reset())}),t._uU(2,"Reset"),t.qZA(),t.TgZ(3,"button",44),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.submit())}),t._uU(4,"Save"),t.qZA()()}if(2&a){const e=t.oxw();t.Q6J("ngClass",e.menuItemId==e.financeMenuItemId?"col-7 text-end":"col-9 text-end")}}let ot=(()=>{class a{constructor(e,s,i,o,r,g,_,I,P){this.router=e,this.activatedRoute=s,this.spinner=i,this.toastService=o,this.assetMasterService=r,this.validationService=g,this.utilityService=_,this.modalService=I,this.appGlobalService=P,this.assetTypeArr=[],this.autoIncValues={},this.submitted=!1,this.action="create",this.menuItemId="",this.financeMenuItemId="64a6c1e33339d4dc9d8141ad",this.masterData={assetClassOptions:[],assetConfigurationOptions:[],locationOptions:[]},this.form=new n.nJ({_id:new n.p4(null),assetType:new n.p4(null),assetClassId:new n.p4(null,[n.kI.required]),assetCode:new n.p4(null,[n.kI.required]),assetName:new n.p4(null,[n.kI.required]),assetDescription:new n.p4(null,[n.kI.required]),assetPurchaseDate:new n.p4(null),assetPurchaseCost:new n.p4(null,[n.kI.required]),location:new n.p4(null),depreciationStartDate:new n.p4(null),costingInput:new n.p4({}),status:new n.p4("Active",[n.kI.required]),totalAssetCostPerHr:new n.p4(null),totalAssetCostPerShift:new n.p4(null)})}get f(){return this.form.controls}ngOnInit(){this.menuItemId=this.appGlobalService.menuItemId,this.getInitialData()}navigateTo(e,s,i){this.router.navigate([e],{queryParams:{id:s,action:i}})}reset(){this.form.reset(),this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,z))return;this.form.enable();let e=this.form.value;e._id?this.update(e):(delete e._id,this.create(e))}create(e){this.spinner.show(),this.assetMasterService.create(e).subscribe(s=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(s.message),this.router.navigate(["/default/finance/master/cost_sheet/asset_master/list"])})}update(e){this.spinner.show(),this.assetMasterService.update(e._id,e).subscribe(s=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(s.message),this.router.navigate(["/default/finance/master/cost_sheet/asset_master/list"])})}getInitialData(){this.spinner.show(),this.assetMasterService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.autoIncValues=e?.autoIncValues,this.form.controls.assetPurchaseDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.setDepreciationStartDate(),this.form.controls.status.setValue("Active"),this.activatedRoute.queryParams.pipe((0,j.z)(s=>(this.action=s.action,this.utilityService.accessDenied(this.action),s.id?this.assetMasterService.getById(s.id):(0,G.of)({})))).subscribe(s=>{this.spinner.hide(),0!=Object.keys(s).length&&(s.assetClassId&&this.masterData?.assetClassOptions.find(o=>o._id==s?.assetClassId),s.costingInput&&s.costingInput.depreciationStartDate&&(s.costingInput.depreciationStartDate=this.utilityService.getFormatDate(s.costingInput.depreciationStartDate,"YYYY-MM-DD")),s.assetPurchaseDate&&(s.assetPurchaseDate=this.utilityService.getFormatDate(s.assetPurchaseDate,"YYYY-MM-DD")),s.depreciationStartDate&&(s.depreciationStartDate=this.utilityService.getFormatDate(s.depreciationStartDate,"YYYY-MM-DD")),this.form.patchValue(s),"view"==this.action&&this.form.disable())})})}setDepreciationStartDate(){let s=this.utilityService.setFutureDateInDays(this.f.assetPurchaseDate.value,15);this.f.depreciationStartDate.setValue(s)}setAssetClassDetails(e){this.form.controls.assetType.setValue(e?.assetClassName),"create"==this.action&&e.assetClassName&&this.form.controls.assetCode.setValue(this.autoIncValues[e.assetClassName])}openInfoModal(){const e=this.modalService.open(X,{centered:!0,size:"lg",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.assetConfiguration=this.masterData?.assetConfigurationOptions,e.componentInstance.assetPurchaseCost=this.form.controls.assetPurchaseCost.value,e.componentInstance.costingInput=this.form.controls.costingInput.value,e.componentInstance.totalAssetCostPerHr=this.form.controls.totalAssetCostPerHr.value,e.componentInstance.totalAssetCostPerShift=this.form.controls.totalAssetCostPerShift.value,e.result.then(s=>{s&&["create","edit"].includes(this.action)&&(this.form.controls.costingInput.patchValue(s),this.form.controls.totalAssetCostPerHr.setValue(s?.totalAssetCostPerHr),this.form.controls.totalAssetCostPerShift.setValue(s?.totalAssetCostPerShift))},s=>{})}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(m.F0),t.Y36(m.gz),t.Y36(p.V),t.Y36(p.kl),t.Y36(S.Z9),t.Y36($.RJ),t.Y36(p.tI),t.Y36(Z.FF),t.Y36(p.P0))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-asset-master-form"]],decls:85,vars:16,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-md-3"],[1,"form-label"],[1,"text-danger"],["bindLabel","assetClassName","bindValue","_id","formControlName","assetClassId",3,"items","clearable","change"],["type","text","formControlName","assetCode","readonly","",1,"form-control"],["type","text","formControlName","assetName",1,"form-control"],["type","text","formControlName","assetDescription",1,"form-control"],[1,"d-flex"],[1,"input-group-text","text-secondary","combine-INR"],[1,"vr","ms-3"],["formControlName","assetPurchaseCost","type","number",1,"form-control","border-start-0"],["type","date","formControlName","assetPurchaseDate",1,"form-control",3,"change"],["type","date","formControlName","depreciationStartDate",1,"form-control"],["formControlName","location",1,"form-select"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"row","line-border","my-4"],[1,"row","my-4"],["class","col-2 pe-0",4,"ngIf"],[1,"col-3","ps-3"],[1,"d-flex","align-items-center"],[1,"col-md-auto","text-nowrap"],["type","button",1,"btn","btn-primary","px-3"],["formControlName","status",1,"form-select","statusSelectBorder"],["value","Active"],["value","Inactive"],[1,"input-group-text","statusSpanHeight"],["class","statusActive","class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"value"],[1,"col-2","pe-0"],[1,"plusIconSvg","btn","btn-primary","me-1",3,"disabled"],["type","button",1,"btn","btn-primary","px-3",3,"disabled","click"],[1,"statusActive"],[1,"statusInActive"],[3,"ngClass"],["type","button",1,"btn","btn-primary","px-5","me-5",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(s,i){1&s&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),t._uU(11," Asset Class "),t.TgZ(12,"span",8),t._uU(13,"*"),t.qZA()(),t.TgZ(14,"ng-select",9),t.NdJ("change",function(r){return i.setAssetClassDetails(r)}),t.qZA()(),t.TgZ(15,"div",6)(16,"label",7),t._uU(17," Asset No. "),t.TgZ(18,"span",8),t._uU(19,"*"),t.qZA()(),t._UZ(20,"input",10),t.qZA(),t.TgZ(21,"div",6)(22,"label",7),t._uU(23," Asset Name "),t.TgZ(24,"span",8),t._uU(25,"*"),t.qZA()(),t._UZ(26,"input",11),t.qZA(),t.TgZ(27,"div",6)(28,"label",7),t._uU(29," Asset Description "),t.TgZ(30,"span",8),t._uU(31,"*"),t.qZA()(),t._UZ(32,"input",12),t.qZA()(),t.TgZ(33,"div",5)(34,"div",6)(35,"label",7),t._uU(36," Purchase Cost "),t.TgZ(37,"span",8),t._uU(38,"*"),t.qZA()(),t.TgZ(39,"div",13)(40,"span",14),t._uU(41),t.ALo(42,"companyCurrency"),t._UZ(43,"div",15),t.qZA(),t._UZ(44,"input",16),t.qZA()(),t.TgZ(45,"div",6)(46,"label",7),t._uU(47," Purchase Date "),t.TgZ(48,"span",8),t._uU(49,"*"),t.qZA()(),t.TgZ(50,"input",17),t.NdJ("change",function(){return i.setDepreciationStartDate()}),t.qZA()(),t.TgZ(51,"div",6)(52,"label",7),t._uU(53," Depreciation Start Date "),t.TgZ(54,"span",8),t._uU(55,"*"),t.qZA()(),t._UZ(56,"input",18),t.qZA(),t.TgZ(57,"div",6)(58,"label",7),t._uU(59," Location"),t.TgZ(60,"span",8),t._uU(61,"*"),t.qZA()(),t.TgZ(62,"select",19)(63,"option",20),t._uU(64,"Select Location"),t.qZA(),t.YNc(65,tt,2,2,"option",21),t.qZA()()()(),t._UZ(66,"hr",22),t.TgZ(67,"div",23),t.YNc(68,et,4,2,"div",24),t.TgZ(69,"div",25)(70,"div",26)(71,"div",27)(72,"button",28),t._uU(73,"Status"),t.qZA()(),t.TgZ(74,"select",29)(75,"option",20),t._uU(76,"Select Status"),t.qZA(),t.TgZ(77,"option",30),t._uU(78,"Active"),t.qZA(),t.TgZ(79,"option",31),t._uU(80,"Inactive"),t.qZA()(),t.TgZ(81,"span",32),t.YNc(82,st,1,0,"div",33),t.YNc(83,it,1,0,"div",34),t.qZA()()(),t.YNc(84,at,5,1,"div",35),t.qZA()()()),2&s&&(t.Q6J("formGroup",i.form),t.xp6(5),t.hij(" Asset (",t.lcZ(6,12,i.action),")"),t.xp6(9),t.Q6J("items",i.masterData.assetClassOptions)("clearable",!1),t.xp6(27),t.hij(" ",t.lcZ(42,14,"INR")," "),t.xp6(22),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",i.masterData.locationOptions),t.xp6(3),t.Q6J("ngIf",i.menuItemId==i.financeMenuItemId),t.xp6(7),t.Q6J("value","null"),t.xp6(7),t.Q6J("ngIf","Active"==i.form.value.status),t.xp6(1),t.Q6J("ngIf","Inactive"==i.form.value.status),t.xp6(1),t.Q6J("ngIf","view"!==i.action))},dependencies:[u.mk,u.sg,u.O5,n.YN,n.Kr,n.Fj,n.wV,n.EJ,n.JJ,n.JL,n.sg,n.u,W.w9,u.rS,y.f],encapsulation:2})}return a})();var nt=l(19964),rt=l(56208);const lt=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:V},{path:"form",component:ot,resolve:{accessScreen:nt.xr}}];let ct=(()=>{class a{static#t=this.\u0275fac=function(s){return new(s||a)};static#e=this.\u0275mod=t.oAB({type:a});static#s=this.\u0275inj=t.cJS({imports:[u.ez,m.Bz.forChild(lt),rt.m]})}return a})()},13107:(D,h,l)=>{l.d(h,{t:()=>u});const u={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(D,h,l)=>{l.d(h,{J:()=>u});const u=({data:m,headers:A,widths:C,title:d})=>({tableData:{widths:C,headerRows:1,body:[A.map(f=>({text:f.header,style:"header"})),...m.map(f=>A.map(b=>({style:"subheader",text:f[b.key]})))]},title:d})}}]);