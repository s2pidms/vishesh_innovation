"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9171],{49171:(x,h,r)=>{r.r(h),r.d(h,{CostEstimateCalculatorModule:()=>v});var c=r(96814),d=r(1076),S=r(56208),u=r(43818),t=r(65879),U=r(78212),f=r(88354),g=r(98977),m=r(60095),T=r(50363),D=r(95346),b=r(14906);const K=["elementToPrint"],Z=function(){return{standalone:!0}},M=function(){return[4,8,9]};function y(i,l){if(1&i){const s=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",32),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"div",33)(11,"input",34),t.NdJ("ngModelChange",function(n){const a=t.CHM(s).$implicit;return t.KtG(a.costPerSKUUnit=n)})("input",function(){t.CHM(s);const n=t.oxw(2);return t.KtG(n.change())}),t.qZA()()(),t.TgZ(12,"td"),t._uU(13),t.qZA()()}if(2&i){const s=l.$implicit,o=l.index;t.xp6(2),t.hij(" ",o+1," "),t.xp6(2),t.Oqu(null==s?null:s.componentType),t.xp6(2),t.Oqu(null==s?null:s.costElement),t.xp6(2),t.Oqu(null==s?null:s.SKUUnit),t.xp6(3),t.Q6J("ngModel",s.costPerSKUUnit)("ngModelOptions",t.DdM(8,Z))("readonly",t.DdM(9,M).includes(o)),t.xp6(2),t.Oqu(null==s?null:s.percentage)}}function E(i,l){if(1&i){const s=t.EpF();t.ynx(0),t._UZ(1,"hr",20),t.TgZ(2,"div",21)(3,"table",22)(4,"thead",23)(5,"tr",24)(6,"th",25),t.NdJ("sort",function(n){t.CHM(s);const e=t.oxw();return t.KtG(e.onSort(n))}),t._uU(7,"SN"),t.qZA(),t.TgZ(8,"th",26),t.NdJ("sort",function(n){t.CHM(s);const e=t.oxw();return t.KtG(e.onSort(n))}),t._uU(9," Cost Type "),t.qZA(),t.TgZ(10,"th",27),t.NdJ("sort",function(n){t.CHM(s);const e=t.oxw();return t.KtG(e.onSort(n))}),t._uU(11," Cost Element/Particulars "),t.qZA(),t.TgZ(12,"th",28),t.NdJ("sort",function(n){t.CHM(s);const e=t.oxw();return t.KtG(e.onSort(n))}),t._uU(13,"D-SKU Unit"),t.qZA(),t.TgZ(14,"th",29),t.NdJ("sort",function(n){t.CHM(s);const e=t.oxw();return t.KtG(e.onSort(n))}),t._uU(15," Cost INR/D-SKU Unit "),t.qZA(),t.TgZ(16,"th",30),t.NdJ("sort",function(n){t.CHM(s);const e=t.oxw();return t.KtG(e.onSort(n))}),t._uU(17," % "),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,y,14,10,"tr",31),t.ALo(20,"slice"),t.ALo(21,"searchFi1ter"),t.qZA()()(),t.BQk()}if(2&i){const s=t.oxw();t.xp6(19),t.Q6J("ngForOf",t.Dn7(20,1,t.xi3(21,5,s.masterData.costSheetList,s.search),(s.page-1)*s.pageSize,(s.page-1)*s.pageSize+s.pageSize))}}const A=[{path:"",redirectTo:"cal",pathMatch:"full"},{path:"cal",component:(()=>{var i;class l{constructor(o,n,e,a,p){this.npdMasterService=o,this.costEstimateService=n,this.router=e,this.spinner=a,this.storageService=p,this.page=1,this.pageSize=10,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.tableData=[],this.originTableData=[],this.skuId="",this.SKUName="",this.SKUNo="",this.SKUDescription="",this.primaryUnit="",this.crore="",this.masterData={costSheetList:[],DSKUOptions:[]}}ngOnInit(){this.getAllMasterData()}navigateTo(o,n,e){this.router.navigate([o],{queryParams:{id:n,action:e}})}trackByFn(o,n){return n?._id}reset(){this.skuId="",this.SKUDescription="",this.primaryUnit="",this.crore="Cr",this.masterData.costSheetList=[],this.getAllMasterData()}getAllMasterData(){this.spinner.show(),this.costEstimateService.getAllDSKUCostEstimateMasterData({}).subscribe(o=>{o&&(this.masterData=o,this.originTableData=this.masterData?.costSheetList),this.spinner.hide()})}getAllSOConfirmationById(o){this.spinner.show(),this.SKUNo=o.dSKUNo,this.SKUName=o.SKUName,this.SKUDescription=o.SKUDescription,this.primaryUnit=o.primaryUnit,this.npdMasterService.getAllNPDMasterByDSKUId(this.skuId).subscribe(n=>{this.masterData.costSheetList=n.costSheetInfo&&n.costSheetInfo.length?n?.costSheetInfo:this.originTableData,this.spinner.hide()})}change(){let o=this.masterData?.costSheetList.map(n=>(n.isTotal&&("Direct"==n.componentType&&(n.costPerSKUUnit=+Number(this.masterData?.costSheetList.filter(e=>"Direct"==e.componentType&&!e.isTotal).map(e=>+e.costPerSKUUnit).reduce((e,a)=>e+a)).toFixed(2)),"Indirect"==n.componentType&&(n.costPerSKUUnit=+Number(this.masterData?.costSheetList.filter(e=>"Indirect"==e.componentType&&!e.isTotal).map(e=>+e.costPerSKUUnit).reduce((e,a)=>e+a)).toFixed(2)),"Direct + Indirect"==n.componentType&&(n.costPerSKUUnit=+Number(this.masterData?.costSheetList[this.masterData?.costSheetList.findIndex(e=>"Direct"==e.componentType&&e.isTotal)].costPerSKUUnit+this.masterData?.costSheetList[this.masterData?.costSheetList.findIndex(e=>"Indirect"==e.componentType&&e.isTotal)].costPerSKUUnit).toFixed(2))),n));this.masterData.costSheetList=o.map(n=>(n.percentage=n.costPerSKUUnit&&this.masterData?.costSheetList[this.masterData?.costSheetList.findIndex(e=>"Direct + Indirect"==e.componentType&&e.isTotal)].costPerSKUUnit?+Number(100*n.costPerSKUUnit/this.masterData?.costSheetList[this.masterData?.costSheetList.findIndex(e=>"Direct + Indirect"==e.componentType&&e.isTotal)].costPerSKUUnit).toFixed(2):0,n))}onSort({column:o,direction:n}){this.headers.forEach(e=>{e.sortable!==o&&(e.direction="")}),this.tableData=""===n||""===o?this.tableData:[...this.tableData].sort((e,a)=>{let p="string"==typeof e[o]?e[o].toLowerCase():e[o],C="string"==typeof a[o]?a[o].toLowerCase():a[o];const _=p<C?-1:p>C?1:0;return"asc"===n?_:-_})}printElement(){this.storageService.set("costEstimateCalculateData",{type:"D-SKU",SKUNo:this.SKUNo,SKUName:this.SKUName,SKUDescription:this.SKUDescription,primaryUnit:this.primaryUnit,costSheetArr:this.masterData?.costSheetList}),window.open(`${window.location.origin}#/print/cost_estimate_cal_print?action=print`,"_blank")}}return(i=l).\u0275fac=function(o){return new(o||i)(t.Y36(U.x3),t.Y36(f.yU),t.Y36(d.F0),t.Y36(g.V),t.Y36(g.V1))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-cost-estimate-calculator"]],viewQuery:function(o,n){if(1&o&&(t.Gf(K,5),t.Gf(u.j,5)),2&o){let e;t.iGM(e=t.CRH())&&(n.elementToPrint=e.first),t.iGM(e=t.CRH())&&(n.headers=e)}},decls:31,vars:15,consts:[[1,"row","justify-content-center","form-page"],["elementToPrint",""],[1,"col-md-11","card-form","mb-4"],[1,"row","form-header"],[1,"col","heading","ms-2"],[1,""],[1,"form-body","px-4","py-2"],[1,"row","mx-0"],[1,"col-3","pe-3","ps-0"],[1,"form-label","mb-2"],["bindLabel","dSKUNo","bindValue","_id",3,"items","ngModel","clearable","ngModelChange","change"],[1,"col-3","px-3"],["bindLabel","SKUName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange","change"],[1,"col-3","mt-1","px-3"],[1,"text-danger"],["type","text","readonly","",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","d-flex","align-items-end","pe-0"],["type","button",1,"btn","btn-primary","px-5","me-5",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"],[4,"ngIf"],[1,"line-border"],[1,"table-responsive","text-wrap"],[1,"table","table-bordered","table-sm"],[1,"bg-primary"],[1,"text-white"],["sortable","seq",3,"sort"],["sortable","specificationCode",3,"sort"],["sortable","characteristic",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","testStandard",3,"sort"],["sortable","measuringInstrument",3,"sort"],[4,"ngFor","ngForOf"],[1,"text-start"],[1,"d-flex","justify-content-center"],["type","number",1,"form-control","form-control-cs","w-25",3,"ngModel","ngModelOptions","readonly","ngModelChange","input"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0,1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"label",5),t._uU(6,"Cost Estimate Calculator"),t.qZA()()(),t.TgZ(7,"div",6)(8,"div",7)(9,"div",8)(10,"label",9),t._uU(11," Select D-SKU"),t.qZA(),t.TgZ(12,"ng-select",10),t.NdJ("ngModelChange",function(a){return n.skuId=a})("change",function(a){return n.getAllSOConfirmationById(a)}),t.qZA()(),t.TgZ(13,"div",11)(14,"label",9),t._uU(15),t.ALo(16,"labelTranslate"),t.qZA(),t.TgZ(17,"ng-select",12),t.NdJ("ngModelChange",function(a){return n.skuId=a})("change",function(a){return n.getAllSOConfirmationById(a)}),t.qZA()(),t.TgZ(18,"div",13)(19,"label",9),t._uU(20),t.ALo(21,"labelTranslate"),t.TgZ(22,"span",14),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",15),t.NdJ("ngModelChange",function(a){return n.SKUDescription=a}),t.qZA()(),t.TgZ(25,"div",16)(26,"button",17),t.NdJ("click",function(){return n.reset()}),t._uU(27," Reset "),t.qZA(),t.TgZ(28,"button",18),t.NdJ("click",function(){return n.printElement()}),t._uU(29," Export "),t.qZA()()(),t.YNc(30,E,22,8,"ng-container",19),t.qZA()()()),2&o&&(t.xp6(12),t.Q6J("items",n.masterData.DSKUOptions)("ngModel",n.skuId)("clearable",!1),t.xp6(3),t.hij(" Select ",t.lcZ(16,11,"D-SKU Name"),""),t.xp6(2),t.Q6J("items",n.masterData.DSKUOptions)("clearable",!1)("ngModel",n.skuId),t.xp6(3),t.hij(" ",t.lcZ(21,13,"D-SKU Description")," "),t.xp6(4),t.Q6J("ngModel",n.SKUDescription),t.xp6(4),t.Q6J("disabled",0==n.masterData.costSheetList.length),t.xp6(2),t.Q6J("ngIf",n.masterData.costSheetList.length))},dependencies:[c.sg,c.O5,m.Fj,m.wV,m.JJ,m.On,T.w9,u.j,c.OU,D.G,b.c],encapsulation:2}),l})()}];let v=(()=>{var i;class l{}return(i=l).\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.ez,S.m,d.Bz.forChild(A)]}),l})()}}]);