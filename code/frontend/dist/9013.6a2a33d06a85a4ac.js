"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9013],{9013:(N,Z,p)=>{p.d(Z,{Wo:()=>U,Fm:()=>w,$6:()=>q});var u=p(43818),t=p(65879),_=p(37285),A=p(99328),d=p(96814),f=p(88059),c=p(60095),T=p(95346),h=p(83344);const m=function(){return["view"]};function v(r,a){if(1&r){const n=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"div",37)(3,"input",38),t.NdJ("ngModelChange",function(o){const i=t.CHM(n).$implicit;return t.KtG(i.PFSeq=o)}),t.qZA()()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td",39,40)(8,"span",41),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td")(13,"div",37)(14,"input",42),t.NdJ("ngModelChange",function(o){const i=t.CHM(n).$implicit;return t.KtG(i.specQuantity=o)})("input",function(o){const i=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.setAssetCostData(o,i))}),t.qZA()()(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td",43)(18,"div",44)(19,"span",45),t._uU(20),t.ALo(21,"companyCurrency"),t._UZ(22,"div",34),t.qZA(),t.TgZ(23,"span",46),t._uU(24),t.ALo(25,"number"),t.qZA()()(),t.TgZ(26,"td",43)(27,"div",44)(28,"span",45),t._uU(29),t.ALo(30,"companyCurrency"),t._UZ(31,"div",34),t.qZA(),t.TgZ(32,"span",46),t._uU(33),t.ALo(34,"number"),t.qZA()()(),t.TgZ(35,"td")(36,"div",37)(37,"input",47),t.NdJ("ngModelChange",function(o){const i=t.CHM(n).$implicit;return t.KtG(i.CAUnits=o)})("input",function(o){const i=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.setAssetCostData(o,i))}),t.qZA()()(),t.TgZ(38,"td",43)(39,"div",44)(40,"span",45),t._uU(41),t.ALo(42,"companyCurrency"),t._UZ(43,"div",34),t.qZA(),t.TgZ(44,"span",46),t._uU(45),t.ALo(46,"number"),t.qZA()()()()}if(2&r){const n=a.$implicit,e=t.MAs(7),o=t.oxw();t.xp6(3),t.Q6J("ngModel",n.PFSeq)("disabled",t.DdM(35,m).includes(o.action)),t.xp6(2),t.Oqu(n.processId),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",n.processName)("positionTarget",e),t.xp6(1),t.hij(" ",n.processName," "),t.xp6(2),t.Oqu(n.unitProcessOutput),t.xp6(3),t.Q6J("ngModel",n.specQuantity)("disabled",t.DdM(36,m).includes(o.action)),t.xp6(2),t.Oqu(n.processHrs),t.xp6(4),t.hij(" ",t.lcZ(21,20,"INR")," "),t.xp6(4),t.hij(" ",t.xi3(25,22,null==n?null:n.assetRatePerHr,"1.2-2")," "),t.xp6(5),t.hij(" ",t.lcZ(30,25,"INR")," "),t.xp6(4),t.hij(" ",t.xi3(34,27,null==n?null:n.assetCost,"1.2-2")," "),t.xp6(4),t.Q6J("ngModel",n.CAUnits)("disabled",t.DdM(37,m).includes(o.action)),t.xp6(4),t.hij(" ",t.lcZ(42,30,"INR")," "),t.xp6(4),t.hij(" ",t.xi3(46,32,null==n?null:n.assetCostPerUnit,"1.2-2")," ")}}function M(r,a){if(1&r){const n=t.EpF();t.TgZ(0,"div",48)(1,"button",49),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.reset())}),t._uU(2,"\xa0 Reset \xa0"),t.qZA(),t.TgZ(3,"button",50),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.ESCPreview())}),t._uU(4," Esc "),t.qZA(),t.TgZ(5,"button",51),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.preview())}),t._uU(6," Preview "),t.qZA(),t.TgZ(7,"button",52),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.dismissModel())}),t._uU(8," Save & Close "),t.qZA()()}if(2&r){const n=t.oxw();t.xp6(3),t.Q6J("disabled",!n.isESCPreview),t.xp6(2),t.Q6J("disabled",n.isConditionPreview),t.xp6(2),t.Q6J("disabled",!n.isPreview)}}const x=function(r,a,n,e){return{page:r,pageSize:a,collection:n,search:e,excelDisplay:"none"}};let U=(()=>{var r;class a{constructor(e,o){this.activeModal=e,this.toastService=o,this.processList=[],this.ESCPreviewArr=[],this.totalAssetCostPerUnit=0,this.totalLabourCostPerUnit=0,this.action="create",this.oldAssetAllocationData=[],this.collection=0,this.page=1,this.pageSize=6,this.column="assetCode",this.direction=1,this.search="",this.active=1,this.isPreview=!1,this.isConditionPreview=!1,this.isESCPreview=!0}trackByFn(e,o){return o?._id}ngOnInit(){this.processList=this.processList;let e=JSON.parse(JSON.stringify(this.oldAssetAllocationData));for(const o of this.processList)e=e.filter(s=>s.processId!=o.processId),this.ESCPreviewArr=[...this.processList,...e];this.collection=this.processList.length,"create"!=this.action&&(this.isESCPreview=!0,this.isConditionPreview=!0,this.isPreview=!0,this.oldAssetAllocationData=JSON.parse(JSON.stringify(this.ESCPreviewArr)))}dismissModel(){this.activeModal.close({processList:this.processList,totalAssetCostPerUnit:this.totalAssetCostPerUnit,oldAssetAllocationData:this.oldAssetAllocationData,totalLabourCostPerUnit:this.totalLabourCostPerUnit})}reset(){this.processList=[],this.processList=JSON.parse(JSON.stringify(this.oldAssetAllocationData)),this.collection=this.processList.length,this.calTotalAssetCost()}calTotalAssetCost(){let e=this.processList.map(s=>s.assetCostPerUnit||0).reduce((s,i)=>+s+ +i,0);this.totalAssetCostPerUnit=+e.toFixed(2);let o=this.processList.map(s=>s.labourCostPerUnit||0).reduce((s,i)=>+s+ +i,0);this.totalLabourCostPerUnit=+o.toFixed(2)}preview(){this.search="",this.ESCPreviewArr=JSON.parse(JSON.stringify(this.processList)),this.processList=this.processList.filter(e=>e?.PFSeq>0).sort((e,o)=>e.PFSeq-o.PFSeq),this.collection=this.processList.length,this.processList.length>0?(this.isPreview=!0,this.isESCPreview=!0):(this.toastService.warning("At least One Row is Required"),this.isPreview=!1,this.isESCPreview=!0),this.calTotalAssetCost()}ESCPreview(){this.search="",this.isPreview=!1,this.isConditionPreview=!1,this.processList=JSON.parse(JSON.stringify(this.ESCPreviewArr)),this.collection=this.processList.length,this.calTotalAssetCost()}setAssetCostData(e,o){let s=this.processList.map(i=>i.processId).indexOf(o?.processId);this.processList[s].processHrs=o.outputPerHr?+(+o?.specQuantity/+o?.outputPerHr).toFixed(2):0,this.processList[s].assetCost=+(+o?.processHrs*o?.assetRatePerHr).toFixed(2),this.processList[s].assetCostPerUnit=o.assetCost&&o?.CAUnits?+(+o?.assetCost/+o?.CAUnits).toFixed(2):0,this.processList[s].labourCost=+(+o?.processHrs*o?.labourRatePerHr).toFixed(2),this.processList[s].labourCostPerUnit=o.labourCost&&o?.CAUnits?+(+o?.labourCost/+o?.CAUnits).toFixed(2):0,this.calTotalAssetCost()}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value;break;case"EXCEL":default:break;case"PAGE":this.page=e.value}}onSort({column:e,direction:o}){this.headers.forEach(s=>{s.sortable!==e&&(s.direction="")}),this.processList=""===o||""===e?this.processList:[...this.processList].sort((s,i)=>{let l="string"==typeof s[e]?s[e].toLowerCase():s[e],C="string"==typeof i[e]?i[e].toLowerCase():i[e];const g=l<C?-1:l>C?1:0;return"asc"===o?g:-g})}}return(r=a).\u0275fac=function(e){return new(e||r)(t.Y36(_.Kz),t.Y36(A.kl))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-asset-cost-modal"]],viewQuery:function(e,o){if(1&e&&t.Gf(u.j,5),2&e){let s;t.iGM(s=t.CRH())&&(o.headers=s)}},inputs:{processList:"processList",ESCPreviewArr:"ESCPreviewArr",totalAssetCostPerUnit:"totalAssetCostPerUnit",totalLabourCostPerUnit:"totalLabourCostPerUnit",action:"action",oldAssetAllocationData:"oldAssetAllocationData"},decls:55,vars:20,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"container-fluid"],[1,"row"],[1,"col-12","px-5"],[3,"data","dataChange"],[1,"table-responsive",2,"min-height","25rem"],[1,"table","table-bordered","table-sticky","mt-1"],[1,"bg-primary"],[1,"text-white"],["sortable","PFSeq",3,"sort"],["sortable","processId",3,"sort"],["sortable","processName",1,"text-start",3,"sort"],["sortable","unitProcessOutput",1,"text-start",3,"sort"],["sortable","specQuantity",3,"sort"],["sortable","processHrs",3,"sort"],["sortable","assetRatePerHr",3,"sort"],["sortable","assetCost",3,"sort"],["sortable","CAUnits",3,"sort"],["sortable","assetCostPerUnit",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"row","mt-4"],[1,"col","px-0"],[1,"line-border","mt-0"],[1,"row","px-4","mb-3"],[1,"col-5"],[1,"d-flex","align-items-center"],[1,"col-form-label","text-nowrap"],[1,"fa","fa-caret-right","fs-3","mx-2"],[1,"d-flex"],[1,"input-group-text","text-secondary","combine-INR"],[1,"vr","ms-3"],["type","number","readonly","",1,"form-control","border-start-0",3,"ngModel","ngModelChange"],["class","col-7 d-flex justify-content-end",4,"ngIf"],[1,"d-flex","justify-content-center"],["type","number",1,"form-control","form-control-ls-xs",3,"ngModel","disabled","ngModelChange"],[1,"text-start"],["processName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["type","number",1,"form-control","form-control-ls-sm",3,"ngModel","disabled","ngModelChange","input"],[1,"py-0","text-center"],[1,"d-flex","justify-content-center","align-items-center"],[1,"input-group-text","text-secondary","combine-INR","border-0"],[1,"total-cost-color"],["type","number","readonly","",1,"form-control","form-control-ls-sm",3,"ngModel","disabled","ngModelChange","input"],[1,"col-7","d-flex","justify-content-end"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-3","me-1",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-4",3,"disabled","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Direct Asset Cost"),t.qZA(),t.TgZ(4,"div")(5,"button",3),t.NdJ("click",function(){return o.activeModal.close()}),t._UZ(6,"i",4),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(i){return o.eventHeader(i)}),t.qZA(),t.TgZ(11,"div",9)(12,"table",10)(13,"thead",11)(14,"tr",12)(15,"th",13),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(16,"PF Seq."),t.qZA(),t.TgZ(17,"th",14),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(18,"Process ID"),t.qZA(),t.TgZ(19,"th",15),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(20,"Process Name"),t.qZA(),t.TgZ(21,"th",16),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(22," Output Unit "),t.qZA(),t.TgZ(23,"th",17),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(24,"Spec. Qty."),t.qZA(),t.TgZ(25,"th",18),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(26,"Process Hrs"),t.qZA(),t.TgZ(27,"th",19),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(28,"Asset Rate/Hr"),t.qZA(),t.TgZ(29,"th",20),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(30,"Asset Cost"),t.qZA(),t.TgZ(31,"th",21),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(32,"CA Units"),t.qZA(),t.TgZ(33,"th",22),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(34,"Asset Cost/Unit"),t.qZA()()(),t.TgZ(35,"tbody"),t.YNc(36,v,47,38,"tr",23),t.ALo(37,"slice"),t.ALo(38,"searchFi1ter"),t.qZA()()()()(),t.TgZ(39,"div",24)(40,"div",25),t._UZ(41,"hr",26),t.qZA()(),t.TgZ(42,"div",27)(43,"div",28)(44,"div",29)(45,"div",30),t._uU(46," Total Asset Cost/Unit "),t._UZ(47,"i",31),t.qZA(),t.TgZ(48,"div",32)(49,"span",33),t._uU(50),t.ALo(51,"companyCurrency"),t._UZ(52,"div",34),t.qZA(),t.TgZ(53,"input",35),t.NdJ("ngModelChange",function(i){return o.totalAssetCostPerUnit=i}),t.qZA()()()(),t.YNc(54,M,9,3,"div",36),t.qZA()()()),2&e&&(t.xp6(10),t.Q6J("data",t.l5B(15,x,o.page,o.pageSize,o.collection,o.search)),t.xp6(26),t.Q6J("ngForOf",t.Dn7(37,6,t.xi3(38,10,o.processList,o.search),(o.page-1)*o.pageSize,(o.page-1)*o.pageSize+o.pageSize))("ngForTrackBy",o.trackByFn),t.xp6(14),t.hij(" ",t.lcZ(51,13,"INR")," "),t.xp6(3),t.Q6J("ngModel",o.totalAssetCostPerUnit),t.xp6(1),t.Q6J("ngIf","view"!==o.action))},dependencies:[d.sg,d.O5,f.P,_._L,c.Fj,c.wV,c.JJ,c.On,u.j,d.OU,d.JJ,T.G,h.f],styles:[".form-control-ls-sm[_ngcontent-%COMP%]{margin:0!important;height:2.4rem!important;width:8rem!important;text-align:center!important}.form-control-ls-xs[_ngcontent-%COMP%]{margin:0!important;height:2.4rem!important;width:5rem!important;text-align:center!important}"]}),a})();const b=function(){return["view"]};function P(r,a){if(1&r){const n=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"div",37)(3,"input",38),t.NdJ("ngModelChange",function(o){const i=t.CHM(n).$implicit;return t.KtG(i.PFSeq=o)}),t.qZA()()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td",39,40)(8,"span",41),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td")(13,"div",37)(14,"input",42),t.NdJ("ngModelChange",function(o){const i=t.CHM(n).$implicit;return t.KtG(i.specQuantity=o)})("input",function(o){const i=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.setLabourCostData(o,i))}),t.qZA()()(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td",43)(18,"div",44)(19,"span",45),t._uU(20),t.ALo(21,"companyCurrency"),t._UZ(22,"div",34),t.qZA(),t.TgZ(23,"span",46),t._uU(24),t.ALo(25,"number"),t.qZA()()(),t.TgZ(26,"td",43)(27,"div",44)(28,"span",45),t._uU(29),t.ALo(30,"companyCurrency"),t._UZ(31,"div",34),t.qZA(),t.TgZ(32,"span",46),t._uU(33),t.ALo(34,"number"),t.qZA()()(),t.TgZ(35,"td")(36,"div",37)(37,"input",42),t.NdJ("ngModelChange",function(o){const i=t.CHM(n).$implicit;return t.KtG(i.CAUnits=o)})("input",function(o){const i=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.setLabourCostData(o,i))}),t.qZA()()(),t.TgZ(38,"td",43)(39,"div",44)(40,"span",45),t._uU(41),t.ALo(42,"companyCurrency"),t._UZ(43,"div",34),t.qZA(),t.TgZ(44,"span",46),t._uU(45),t.ALo(46,"number"),t.qZA()()()()}if(2&r){const n=a.$implicit,e=t.MAs(7),o=t.oxw();t.xp6(3),t.Q6J("ngModel",n.PFSeq)("disabled",t.DdM(35,b).includes(o.action)),t.xp6(2),t.Oqu(n.processId),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",n.processName)("positionTarget",e),t.xp6(1),t.hij(" ",n.processName," "),t.xp6(2),t.Oqu(n.unitProcessOutput),t.xp6(3),t.Q6J("ngModel",n.specQuantity)("disabled",t.DdM(36,b).includes(o.action)),t.xp6(2),t.Oqu(n.processHrs),t.xp6(4),t.hij(" ",t.lcZ(21,20,"INR")," "),t.xp6(4),t.hij(" ",t.xi3(25,22,null==n?null:n.labourRatePerHr,"1.2-2")," "),t.xp6(5),t.hij(" ",t.lcZ(30,25,"INR")," "),t.xp6(4),t.hij(" ",t.xi3(34,27,null==n?null:n.labourCost,"1.2-2")," "),t.xp6(4),t.Q6J("ngModel",n.CAUnits)("disabled",t.DdM(37,b).includes(o.action)),t.xp6(4),t.hij(" ",t.lcZ(42,30,"INR")," "),t.xp6(4),t.hij(" ",t.xi3(46,32,null==n?null:n.labourCostPerUnit,"1.2-2")," ")}}function L(r,a){if(1&r){const n=t.EpF();t.TgZ(0,"div",47)(1,"button",48),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.reset())}),t._uU(2,"\xa0 Reset \xa0"),t.qZA(),t.TgZ(3,"button",49),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.ESCPreview())}),t._uU(4," Esc "),t.qZA(),t.TgZ(5,"button",50),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.preview())}),t._uU(6," Preview "),t.qZA(),t.TgZ(7,"button",51),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.dismissModel())}),t._uU(8," Save & Close "),t.qZA()()}if(2&r){const n=t.oxw();t.xp6(3),t.Q6J("disabled",!n.isESCPreview),t.xp6(2),t.Q6J("disabled",n.isConditionPreview),t.xp6(2),t.Q6J("disabled",!n.isPreview)}}const y=function(r,a,n,e){return{page:r,pageSize:a,collection:n,search:e,excelDisplay:"none"}};let w=(()=>{var r;class a{constructor(e,o){this.activeModal=e,this.toastService=o,this.processList=[],this.ESCPreviewArr=[],this.totalAssetCostPerUnit=0,this.totalLabourCostPerUnit=0,this.action="create",this.oldAssetAllocationData=[],this.labourOldAllocationData=[],this.collection=0,this.page=1,this.pageSize=6,this.column="assetCode",this.direction=1,this.search="",this.active=1,this.isPreview=!1,this.isConditionPreview=!1,this.isESCPreview=!1}trackByFn(e,o){return o?._id}ngOnInit(){this.oldAssetAllocationData=JSON.parse(JSON.stringify(this.processList)),this.collection=this.processList.length,"create"!=this.action&&(this.isESCPreview=!0,this.isConditionPreview=!0,this.isPreview=!0,this.oldAssetAllocationData=JSON.parse(JSON.stringify(this.ESCPreviewArr)))}dismissModel(){this.activeModal.close({processList:this.processList,oldAssetAllocationData:this.oldAssetAllocationData,totalLabourCostPerUnit:this.totalLabourCostPerUnit,totalAssetCostPerUnit:this.totalAssetCostPerUnit})}reset(){this.processList=[],this.processList=JSON.parse(JSON.stringify(this.oldAssetAllocationData)),this.collection=this.processList.length,this.calTotalLabourCost()}calTotalLabourCost(){let e=this.processList.map(s=>s.assetCostPerUnit||0).reduce((s,i)=>+s+ +i,0);this.totalAssetCostPerUnit=+e.toFixed(2);let o=this.processList.map(s=>s.labourCostPerUnit||0).reduce((s,i)=>+s+ +i,0);this.totalLabourCostPerUnit=+o.toFixed(2)}preview(){this.search="",this.ESCPreviewArr=JSON.parse(JSON.stringify(this.processList)),this.processList=this.processList.filter(e=>e?.PFSeq>0).sort((e,o)=>e.PFSeq-o.PFSeq),this.collection=this.processList.length,this.processList.length>0?(this.isPreview=!0,this.isESCPreview=!0):(this.toastService.warning("At least One Row is Required"),this.isPreview=!1,this.isESCPreview=!0),this.calTotalLabourCost()}ESCPreview(){if(this.search="",this.isPreview=!1,this.isConditionPreview=!1,this.processList=JSON.parse(JSON.stringify(this.ESCPreviewArr)),"create"==this.action){let e=JSON.parse(JSON.stringify(this.labourOldAllocationData));for(const o of this.ESCPreviewArr)e=e.filter(s=>s.processId!=o.processId),this.processList=[...this.ESCPreviewArr,...e]}this.collection=this.processList.length,this.calTotalLabourCost()}setLabourCostData(e,o){let s=this.processList.map(i=>i.processId).indexOf(o?.processId);this.processList[s].processHrs=o.outputPerHr?+(+o?.specQuantity/+o?.outputPerHr).toFixed(2):0,this.processList[s].labourCost=+(+o?.processHrs*o?.labourRatePerHr).toFixed(2),this.processList[s].labourCostPerUnit=o.labourCost&&o?.CAUnits?+(+o?.labourCost/+o?.CAUnits).toFixed(2):0,this.processList[s].assetCost=+(+o?.processHrs*o?.assetRatePerHr).toFixed(2),this.processList[s].assetCostPerUnit=o.assetCost&&o?.CAUnits?+(+o?.assetCost/+o?.CAUnits).toFixed(2):0,this.calTotalLabourCost()}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value;break;case"EXCEL":default:break;case"PAGE":this.page=e.value}}onSort({column:e,direction:o}){this.headers.forEach(s=>{s.sortable!==e&&(s.direction="")}),this.processList=""===o||""===e?this.processList:[...this.processList].sort((s,i)=>{let l="string"==typeof s[e]?s[e].toLowerCase():s[e],C="string"==typeof i[e]?i[e].toLowerCase():i[e];const g=l<C?-1:l>C?1:0;return"asc"===o?g:-g})}}return(r=a).\u0275fac=function(e){return new(e||r)(t.Y36(_.Kz),t.Y36(A.kl))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-labour-cost-modal"]],viewQuery:function(e,o){if(1&e&&t.Gf(u.j,5),2&e){let s;t.iGM(s=t.CRH())&&(o.headers=s)}},inputs:{processList:"processList",ESCPreviewArr:"ESCPreviewArr",totalAssetCostPerUnit:"totalAssetCostPerUnit",totalLabourCostPerUnit:"totalLabourCostPerUnit",action:"action",oldAssetAllocationData:"oldAssetAllocationData",labourOldAllocationData:"labourOldAllocationData"},decls:55,vars:20,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"container-fluid"],[1,"row"],[1,"col-12","px-5"],[3,"data","dataChange"],[1,"table-responsive",2,"min-height","25rem"],[1,"table","table-bordered","table-sticky","mt-1"],[1,"bg-primary"],[1,"text-white"],["sortable","PFSeq",3,"sort"],["sortable","processId",3,"sort"],["sortable","processName",1,"text-start",3,"sort"],["sortable","unitProcessOutput",1,"text-start",3,"sort"],["sortable","specQuantity",3,"sort"],["sortable","processHrs",3,"sort"],["sortable","labourRatePerHr",3,"sort"],["sortable","labourCost",3,"sort"],["sortable","CAUnits",3,"sort"],["sortable","labourCostPerUnit",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"row","mt-4"],[1,"col","px-0"],[1,"line-border","mt-0"],[1,"row","px-4","mb-3"],[1,"col-5"],[1,"d-flex","align-items-center"],[1,"col-form-label","text-nowrap"],[1,"fa","fa-caret-right","fs-3","mx-2"],[1,"d-flex"],[1,"input-group-text","text-secondary","combine-INR"],[1,"vr","ms-3"],["type","number","readonly","",1,"form-control","border-start-0",3,"ngModel","ngModelChange"],["class","col-7 d-flex justify-content-end",4,"ngIf"],[1,"d-flex","justify-content-center"],["type","number",1,"form-control","form-control-ls-xs",3,"ngModel","disabled","ngModelChange"],[1,"text-start"],["processName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["type","number",1,"form-control","form-control-ls-sm",3,"ngModel","disabled","ngModelChange","input"],[1,"py-0","text-center"],[1,"d-flex","justify-content-center","align-items-center"],[1,"input-group-text","text-secondary","combine-INR","border-0"],[1,"total-cost-color"],[1,"col-7","d-flex","justify-content-end"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-3","me-1",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-4",3,"disabled","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Direct Labour Cost"),t.qZA(),t.TgZ(4,"div")(5,"button",3),t.NdJ("click",function(){return o.activeModal.close()}),t._UZ(6,"i",4),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(i){return o.eventHeader(i)}),t.qZA(),t.TgZ(11,"div",9)(12,"table",10)(13,"thead",11)(14,"tr",12)(15,"th",13),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(16,"PF Seq."),t.qZA(),t.TgZ(17,"th",14),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(18,"Process ID"),t.qZA(),t.TgZ(19,"th",15),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(20,"Process Name"),t.qZA(),t.TgZ(21,"th",16),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(22," Output Unit "),t.qZA(),t.TgZ(23,"th",17),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(24,"Spec. Qty."),t.qZA(),t.TgZ(25,"th",18),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(26,"Process Hrs"),t.qZA(),t.TgZ(27,"th",19),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(28,"Lbr Rate/Hr"),t.qZA(),t.TgZ(29,"th",20),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(30,"Lbr Cost"),t.qZA(),t.TgZ(31,"th",21),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(32,"CA Units"),t.qZA(),t.TgZ(33,"th",22),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(34,"Lbr Cost/Unit"),t.qZA()()(),t.TgZ(35,"tbody"),t.YNc(36,P,47,38,"tr",23),t.ALo(37,"slice"),t.ALo(38,"searchFi1ter"),t.qZA()()()()(),t.TgZ(39,"div",24)(40,"div",25),t._UZ(41,"hr",26),t.qZA()(),t.TgZ(42,"div",27)(43,"div",28)(44,"div",29)(45,"div",30),t._uU(46," Total Labour Cost/Unit "),t._UZ(47,"i",31),t.qZA(),t.TgZ(48,"div",32)(49,"span",33),t._uU(50),t.ALo(51,"companyCurrency"),t._UZ(52,"div",34),t.qZA(),t.TgZ(53,"input",35),t.NdJ("ngModelChange",function(i){return o.totalLabourCostPerUnit=i}),t.qZA()()()(),t.YNc(54,L,9,3,"div",36),t.qZA()()()),2&e&&(t.xp6(10),t.Q6J("data",t.l5B(15,y,o.page,o.pageSize,o.collection,o.search)),t.xp6(26),t.Q6J("ngForOf",t.Dn7(37,6,t.xi3(38,10,o.processList,o.search),(o.page-1)*o.pageSize,(o.page-1)*o.pageSize+o.pageSize))("ngForTrackBy",o.trackByFn),t.xp6(14),t.hij(" ",t.lcZ(51,13,"INR")," "),t.xp6(3),t.Q6J("ngModel",o.totalLabourCostPerUnit),t.xp6(1),t.Q6J("ngIf","view"!==o.action))},dependencies:[d.sg,d.O5,f.P,_._L,c.Fj,c.wV,c.JJ,c.On,u.j,d.OU,d.JJ,T.G,h.f],styles:[".form-control-ls-sm[_ngcontent-%COMP%]{margin:0!important;height:2.4rem!important;width:8rem!important;text-align:center!important}.form-control-ls-xs[_ngcontent-%COMP%]{margin:0!important;height:2.4rem!important;width:5rem!important;text-align:center!important}"]}),a})();function J(r,a){if(1&r){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"div",35)(5,"input",36),t.NdJ("ngModelChange",function(o){const i=t.CHM(n).$implicit;return t.KtG(i.toolingDescription=o)}),t.qZA()()(),t.TgZ(6,"td")(7,"div",37)(8,"input",38),t.NdJ("ngModelChange",function(o){const i=t.CHM(n).$implicit;return t.KtG(i.toolingCost=o)})("input",function(){const o=t.CHM(n),s=o.$implicit,i=o.index,l=t.oxw();return t.KtG(l.setToolingCostData(s,i))}),t.qZA()()(),t.TgZ(9,"td")(10,"div",37)(11,"input",38),t.NdJ("ngModelChange",function(o){const i=t.CHM(n).$implicit;return t.KtG(i.CAUnits=o)})("input",function(){const o=t.CHM(n),s=o.$implicit,i=o.index,l=t.oxw();return t.KtG(l.setToolingCostData(s,i))}),t.qZA()()(),t.TgZ(12,"td",39)(13,"div",40)(14,"span",41),t._uU(15),t.ALo(16,"companyCurrency"),t._UZ(17,"div",32),t.qZA(),t.TgZ(18,"span",42),t._uU(19),t.ALo(20,"number"),t.qZA()()()()}if(2&r){const n=a.$implicit,e=a.index;t.xp6(2),t.Oqu(e+1),t.xp6(3),t.Q6J("ngModel",n.toolingDescription),t.xp6(3),t.Q6J("ngModel",n.toolingCost),t.xp6(3),t.Q6J("ngModel",n.CAUnits),t.xp6(4),t.hij(" ",t.lcZ(16,6,"INR")," "),t.xp6(4),t.hij(" ",t.xi3(20,8,null==n?null:n.toolingCostPerUnit,"1.2-2")," ")}}function S(r,a){if(1&r){const n=t.EpF();t.TgZ(0,"div",43)(1,"button",44),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.reset())}),t._uU(2,"\xa0 Reset \xa0"),t.qZA(),t.TgZ(3,"button",45),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.dismissModel())}),t._uU(4,"Save & Close"),t.qZA()()}}let q=(()=>{var r;class a{constructor(e){this.activeModal=e,this.action="create",this.totalToolingCostPerUnit=0,this.toolingCAQty=0,this.toolingCostDetails=[],this.oldToolingCostDetails=[]}ngOnInit(){this.oldToolingCostDetails=JSON.parse(JSON.stringify(this.toolingCostDetails))}deleteTableRow(){"view"!=this.action&&this.toolingCostDetails.length>1&&(this.toolingCostDetails.pop(),this.calTotalToolingCost())}addTableRow(){"view"!=this.action&&this.toolingCostDetails.push({toolingDescription:"",toolingCost:0,CAUnits:this.toolingCAQty,toolingCostPerUnit:0})}dismissModel(){this.activeModal.close({toolingCostDetails:this.toolingCostDetails,totalToolingCostPerUnit:this.totalToolingCostPerUnit})}reset(){this.toolingCostDetails=[],this.toolingCostDetails=JSON.parse(JSON.stringify(this.oldToolingCostDetails)),this.calTotalToolingCost()}setToolingCostData(e,o){e.toolingCost&&e?.CAUnits&&(this.toolingCostDetails[o].toolingCostPerUnit=+(+e?.toolingCost/+e?.CAUnits).toFixed(2)),this.calTotalToolingCost()}calTotalToolingCost(){let e=this.toolingCostDetails.map(o=>o.toolingCostPerUnit||0).reduce((o,s)=>+o+ +s,0);this.totalToolingCostPerUnit=+e.toFixed(2)}}return(r=a).\u0275fac=function(e){return new(e||r)(t.Y36(_.Kz))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-tooling-cost-modal"]],viewQuery:function(e,o){if(1&e&&t.Gf(u.j,5),2&e){let s;t.iGM(s=t.CRH())&&(o.headers=s)}},inputs:{action:"action",totalToolingCostPerUnit:"totalToolingCostPerUnit",toolingCAQty:"toolingCAQty",toolingCostDetails:"toolingCostDetails"},decls:51,vars:6,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"container-fluid","mt-4","px-0"],[1,"row","d-flex","justify-content-center"],[1,"col-10"],[1,"table-responsive","mt-0","text-wrap",2,"min-height","21rem"],[1,"table","table-bordered","mt-0","table-sm"],[1,"bg-info"],[1,"text-white","text-center"],[1,"text-start"],[4,"ngFor","ngForOf"],[1,"border-0"],["colspan","12",1,"border-0","px-0","pt-0"],[1,"row"],[1,"col-12","set-image","px-0","seperate-row"],[1,"minus-icon"],["data-tip","","data-for","infoTip","src","./assets/new_icons/delete_row.svg","width","14","alt","",1,"pointer",3,"click"],["src","./assets/new_icons/separator_row.svg","alt","",1,""],[1,"add-icon"],["data-tip","","data-for","infoTip","src","./assets/new_icons/add_row.svg","width","14","alt","",1,"pointer",3,"click"],[1,"col","mt-1"],[1,"line-border"],[1,"row","mb-4","mt-2","px-5"],[1,"col-6"],[1,"d-flex","align-items-center"],[1,"col-form-label","text-nowrap"],[1,"fa","fa-caret-right","fs-3","mx-2"],[1,"d-flex"],[1,"input-group-text","text-secondary","combine-INR"],[1,"vr","ms-3"],["type","number","readonly","",1,"form-control","border-start-0",3,"ngModel","ngModelChange"],["class","col-6 d-flex justify-content-end",4,"ngIf"],[1,"d-flex","justify-content-start"],["type","text",1,"form-control","form-control-sl",3,"ngModel","ngModelChange"],[1,"d-flex","justify-content-center"],["type","number",1,"form-control","form-control-sl",3,"ngModel","ngModelChange","input"],[1,"py-0","text-center"],[1,"d-flex","justify-content-center","align-items-center"],[1,"input-group-text","text-secondary","combine-INR","border-0"],[1,"total-cost-color"],[1,"col-6","d-flex","justify-content-end"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Tooling Cost"),t.qZA(),t.TgZ(4,"div")(5,"button",3),t.NdJ("click",function(){return o.activeModal.close()}),t._UZ(6,"i",4),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th"),t._uU(15,"SN"),t.qZA(),t.TgZ(16,"th",12),t._uU(17,"Tooling Description"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Tooling Cost"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"CA Units"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Total Cost/Unit"),t.qZA()()(),t.TgZ(24,"tbody"),t.YNc(25,J,21,11,"tr",13),t.TgZ(26,"tr",14)(27,"td",15)(28,"div",16)(29,"div",17)(30,"div",18)(31,"img",19),t.NdJ("click",function(){return o.deleteTableRow()}),t.qZA()(),t._UZ(32,"img",20),t.TgZ(33,"div",21)(34,"img",22),t.NdJ("click",function(){return o.addTableRow()}),t.qZA()()()()()()()()()()(),t.TgZ(35,"div",16)(36,"div",23),t._UZ(37,"hr",24),t.qZA()(),t.TgZ(38,"div",25)(39,"div",26)(40,"div",27)(41,"div",28),t._uU(42," Total Tooling Cost/Unit "),t._UZ(43,"i",29),t.qZA(),t.TgZ(44,"div",30)(45,"span",31),t._uU(46),t.ALo(47,"companyCurrency"),t._UZ(48,"div",32),t.qZA(),t.TgZ(49,"input",33),t.NdJ("ngModelChange",function(i){return o.totalToolingCostPerUnit=i}),t.qZA()()()(),t.YNc(50,S,5,0,"div",34),t.qZA()()()),2&e&&(t.xp6(25),t.Q6J("ngForOf",o.toolingCostDetails),t.xp6(21),t.hij(" ",t.lcZ(47,4,"INR")," "),t.xp6(3),t.Q6J("ngModel",o.totalToolingCostPerUnit),t.xp6(1),t.Q6J("ngIf","view"!==o.action))},dependencies:[d.sg,d.O5,c.Fj,c.wV,c.JJ,c.On,d.JJ,h.f],styles:[".form-control-sl[_ngcontent-%COMP%]{margin:0!important;height:2.4rem!important;width:12rem!important;text-align:center!important}.form-control-tc-lg[_ngcontent-%COMP%]{margin:0!important;height:2.4rem!important;width:16rem!important;text-align:start!important}.set-image[_ngcontent-%COMP%]{width:100%;margin-top:-1rem!important}.seperate-row[_ngcontent-%COMP%]{position:relative}.seperate-row[_ngcontent-%COMP%]   .minus-icon[_ngcontent-%COMP%]{position:absolute;left:-1.1rem;top:-.1rem}.seperate-row[_ngcontent-%COMP%]   .add-icon[_ngcontent-%COMP%]{position:absolute;right:-1.1rem;top:-.1rem}"]}),a})()}}]);