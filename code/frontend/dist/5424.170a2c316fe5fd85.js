"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5424],{34183:(S,f,a)=>{a.r(f),a.d(f,{SkuProcessFlowModule:()=>rt});var p=a(96814),h=a(1076),g=a(43818),C=a(25116),v=a(94653),t=a(65879),d=a(37285),u=a(99328),b=a(78212),l=a(60095),F=a(50363),Z=a(95346),U=a(59103);const P=function(){return{standalone:!0}};function M(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",40)(1,"div",41)(2,"div",42),t._UZ(3,"i",43),t.qZA(),t.TgZ(4,"div")(5,"input",44),t.NdJ("ngModelChange",function(o){t.CHM(e);const i=t.oxw();return t.KtG(i.search=o)}),t.qZA()()()()}if(2&r){const e=t.oxw();t.xp6(5),t.Q6J("ngModel",e.search)("ngModelOptions",t.DdM(2,P))}}const y=function(){return["view"]};function x(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",24)(1,"div",45)(2,"label",46),t._uU(3,"Select All"),t.qZA(),t.TgZ(4,"input",47),t.NdJ("change",function(o){t.CHM(e);const i=t.oxw();return t.KtG(i.setAssetData(o))}),t.qZA()()()}if(2&r){const e=t.oxw();t.xp6(4),t.Q6J("disabled",t.DdM(1,y).includes(e.action))}}function k(r,c){1&r&&t._UZ(0,"img",52)}function D(r,c){1&r&&t._UZ(0,"img",53)}function N(r,c){if(1&r&&(t.TgZ(0,"li",55)(1,"span",56),t._uU(2),t.qZA()()),2&r){const e=t.oxw(),s=e.$implicit,o=e.pages;t.xp6(2),t.AsE(" Page ",s," of ",o[o.length-1]," ")}}function q(r,c){1&r&&t.YNc(0,N,3,2,"li",54),2&r&&t.Q6J("ngIf",c.pages.length>0)}function J(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"ngb-pagination",48),t.NdJ("pageChange",function(o){t.CHM(e);const i=t.oxw();return t.KtG(i.page=o)}),t.YNc(1,k,1,0,"ng-template",49),t.YNc(2,D,1,0,"ng-template",50),t.YNc(3,q,1,1,"ng-template",51),t.qZA()}if(2&r){const e=t.oxw();t.Q6J("collectionSize",e.tableData.length)("page",e.page)("pageSize",e.pageSize)("boundaryLinks",!1)}}function L(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"div",57)(3,"input",58),t.NdJ("ngModelChange",function(o){const n=t.CHM(e).$implicit;return t.KtG(n.select=o)}),t.qZA()()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td",59,60)(8,"span",61),t._uU(9),t.qZA()(),t.TgZ(10,"td",59,62)(12,"span",61),t._uU(13),t.qZA()(),t.TgZ(14,"td"),t._uU(15),t.ALo(16,"UOMUnitsMaster"),t.qZA(),t.TgZ(17,"td",59,63)(19,"span",61),t._uU(20),t.qZA()()()}if(2&r){const e=c.$implicit,s=t.MAs(7),o=t.MAs(11),i=t.MAs(18),n=t.oxw();t.xp6(3),t.Q6J("ngModel",e.select)("disabled",t.DdM(21,y).includes(n.action)),t.xp6(2),t.Oqu(e.SKUNo),t.xp6(1),t.Udp("width",s.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.SKUName)("positionTarget",s),t.xp6(1),t.hij(" ",e.SKUName," "),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.SKUDescription)("positionTarget",o),t.xp6(1),t.hij(" ",e.SKUDescription," "),t.xp6(2),t.Oqu(t.lcZ(16,19,e.primaryUnit)),t.xp6(2),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.productCategory)("positionTarget",i),t.xp6(1),t.hij(" ",e.productCategory," ")}}let K=(()=>{class r{constructor(e,s,o,i,n){this.activeModal=e,this.spinner=s,this.skuProcessFlowService=o,this.activatedRoute=i,this.toastService=n,this.SKUId=0,this.action="create",this.collection=0,this.page=1,this.pageSize=6,this.column="SKUNo",this.direction=1,this.search="",this.active=1,this.isPreview=!1,this.tableData=[],this.originTableData=[],this.productCategories=[],this.productCategoriesFilterBy=null,this.isConditionPreview=!1,this.isESCPreview=!1}trackByFn(e,s){return s?._id}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}dismissModel(){let e={SKU:this.SKUId,SKUArray:this.tableData.filter(s=>s.select)};this.spinner.show(),this.skuProcessFlowService.createCopy(e).subscribe(s=>{this.toastService.success(s.message),this.spinner.hide(),this.activeModal.close()})}filterData(){this.spinner.show(),this.tableData=this.originTableData.filter(e=>{if(e?.productCategory==this.productCategoriesFilterBy)return e}),this.spinner.hide()}reset(){this.productCategoriesFilterBy=null,this.tableData=this.tableData.map(e=>(e.select=!1,e)),this.tableData=this.originTableData}getAll(e=!1,s=""){this.spinner.show(),this.skuProcessFlowService.getAllCopyFlowMasterData({page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e}).subscribe(i=>{this.tableData=i?.SKUList,this.originTableData=i?.SKUList,this.productCategories=i?.productCategoryOptions,this.collection=i.count,this.spinner.hide()})}setAssetData(e){this.tableData=this.tableData.map(s=>(s.select=e.target.checked,s))}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value;break;case"EXCEL":default:break;case"PAGE":this.page=e.value}}onSort({column:e,direction:s}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.tableData=""===s||""===e?this.tableData:[...this.tableData].sort((o,i)=>{let n="string"==typeof o[e]?o[e].toLowerCase():o[e],m="string"==typeof i[e]?i[e].toLowerCase():i[e];const _=n<m?-1:n>m?1:0;return"asc"===s?_:-_})}static#t=this.\u0275fac=function(s){return new(s||r)(t.Y36(d.Kz),t.Y36(u.V),t.Y36(b.dM),t.Y36(h.gz),t.Y36(u.kl))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-copy-process-flow-modal"]],viewQuery:function(s,o){if(1&s&&t.Gf(g.j,5),2&s){let i;t.iGM(i=t.CRH())&&(o.headers=i)}},inputs:{SKUId:"SKUId",action:"action"},decls:58,vars:17,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"row","my-4","px-5"],[1,"col-3","ps-4","separate-row","pe-4"],[1,"form-label","mb-1"],["bindLabel","label","bindValue","value",3,"items","ngModel","clearable","ngModelChange","change"],[1,"col-4","align-self-end","separate-image","ps-3"],[1,"image-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"disabled"],["type","button",1,"btn","btn-primary","px-4",3,"disabled","click"],[1,"row"],[1,"col","px-0"],[1,"line-border"],[1,"container-fluid","pb-3"],[1,"col-12","mt-4","px-5"],[1,"row","justify-content-between"],["class","col-4 mb-4",4,"ngIf"],["class","col-4",4,"ngIf"],[1,"col-4","d-flex","justify-content-center"],[3,"collectionSize","page","pageSize","boundaryLinks","pageChange",4,"ngIf"],[1,"col-4"],[1,"table-responsive",2,"min-height","23rem"],[1,"table","table-bordered","table-sticky","mt-1"],[1,"bg-primary"],[1,"text-white"],["sortable","select",3,"sort"],["sortable","SKUNo",3,"sort"],["sortable","SKUName",1,"text-start",3,"sort"],["sortable","SKUDescription",1,"text-start",3,"sort"],["sortable","primaryUnit",3,"sort"],["sortable","productCategory",1,"text-start",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"col","px-0","mt-4"],[1,"row","px-4","py-3"],[1,"col","d-flex","justify-content-center"],["type","button",1,"btn","btn-primary","px-4",3,"click"],[1,"col-4","mb-4"],[1,"d-flex"],["id","basic-addon1",1,"set-input-group-text","input-group-text","bg-primary"],["aria-hidden","true",1,"fa","fa-search","text-white"],["type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[1,""],[1,"form-label","mb-1","me-2"],["type","checkbox",1,"form-check-input",3,"disabled","change"],[3,"collectionSize","page","pageSize","boundaryLinks","pageChange"],["ngbPaginationPrevious",""],["ngbPaginationNext",""],["ngbPaginationPages",""],["src","./assets/new_icons/pagination_prev.svg","width","20rem"],["src","./assets/new_icons/pagination_next.svg","width","20rem"],["class","ngb-custom-pages-item align-self-center",4,"ngIf"],[1,"ngb-custom-pages-item","align-self-center"],[1,"page-label","me-2","ms-1"],[1,"d-flex","justify-content-center"],["type","checkbox",1,"form-check-input",3,"ngModel","disabled","ngModelChange"],[1,"text-start"],["SKUName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["SKUDescription",""],["productCategory",""]],template:function(s,o){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Apply Copied Process Flow"),t.qZA(),t.TgZ(4,"div")(5,"button",3),t.NdJ("click",function(){return o.activeModal.close()}),t._UZ(6,"i",4),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"label",7),t._uU(10," Filter By"),t.qZA(),t.TgZ(11,"ng-select",8),t.NdJ("ngModelChange",function(n){return o.productCategoriesFilterBy=n})("change",function(){return o.filterData()}),t.qZA()(),t.TgZ(12,"div",9)(13,"span",10),t._UZ(14,"img",11),t.qZA(),t.TgZ(15,"button",12),t._uU(16," Apply Filter "),t.qZA(),t.TgZ(17,"button",13),t.NdJ("click",function(){return o.reset()}),t._uU(18," Reset Filter "),t.qZA()()(),t.TgZ(19,"div",14)(20,"div",15),t._UZ(21,"hr",16),t.qZA()(),t.TgZ(22,"div",17)(23,"div",14)(24,"div",18)(25,"div",19),t.YNc(26,M,6,3,"div",20),t.YNc(27,x,5,2,"div",21),t.TgZ(28,"div",22),t.YNc(29,J,4,4,"ngb-pagination",23),t.qZA(),t._UZ(30,"div",24),t.qZA(),t.TgZ(31,"div",25)(32,"table",26)(33,"thead",27)(34,"tr",28)(35,"th",29),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(36,"Select"),t.qZA(),t.TgZ(37,"th",30),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(38,"SKU No."),t.qZA(),t.TgZ(39,"th",31),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(40,"SKU Name"),t.qZA(),t.TgZ(41,"th",32),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(42," SKU Description "),t.qZA(),t.TgZ(43,"th",33),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(44,"UoM"),t.qZA(),t.TgZ(45,"th",34),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(46," Product Category "),t.qZA()()(),t.TgZ(47,"tbody"),t.YNc(48,L,21,22,"tr",35),t.ALo(49,"slice"),t.ALo(50,"searchFi1ter"),t.qZA()()()()(),t.TgZ(51,"div",14)(52,"div",36),t._UZ(53,"hr",16),t.qZA()(),t.TgZ(54,"div",37)(55,"div",38)(56,"button",39),t.NdJ("click",function(){return o.dismissModel()}),t._uU(57," Apply Copied Process Flow "),t.qZA()()()()()),2&s&&(t.xp6(11),t.Q6J("items",o.productCategories)("ngModel",o.productCategoriesFilterBy)("clearable",!1),t.xp6(4),t.Q6J("disabled",o.productCategoriesFilterBy),t.xp6(2),t.Q6J("disabled",!o.productCategoriesFilterBy),t.xp6(9),t.Q6J("ngIf",!o.productCategoriesFilterBy),t.xp6(1),t.Q6J("ngIf",o.productCategoriesFilterBy),t.xp6(2),t.Q6J("ngIf",o.tableData.length>0),t.xp6(19),t.Q6J("ngForOf",t.Dn7(49,10,t.xi3(50,14,o.tableData,o.search),(o.page-1)*o.pageSize,(o.page-1)*o.pageSize+o.pageSize))("ngForTrackBy",o.trackByFn))},dependencies:[p.sg,p.O5,d.N9,d.GZ,d.ju,d.Qy,d._L,l.Fj,l.Wl,l.JJ,l.On,F.w9,g.j,p.OU,Z.G,U.S],styles:[".pagination[_ngcontent-%COMP%]{margin-bottom:0!important}ngb-pagination[_ngcontent-%COMP%]     ul.pagination{margin:0!important}.page-label[_ngcontent-%COMP%]{color:var(--bs-dark);padding:0 1rem;font-size:1.4rem}ngb-pagination[_ngcontent-%COMP%]     ul>li:not(.active)>a{border:none!important;color:var(--bs-white)!important;background-color:#fff!important;box-shadow:none}.fa[_ngcontent-%COMP%]{font-size:1.6rem!important}.set-input-group-text[_ngcontent-%COMP%]{border-radius:0!important;height:2.8rem!important;width:3rem}"]})}return r})(),I=(()=>{class r{constructor(e){this.activeModal=e,this.action="",this.totalAmounts={},this.btnDisable=!1,this.page=1,this.pageSize=5,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.customerContactInfoArray=[]}ngOnInit(){}dismissModel(){this.activeModal.close(this.totalAmounts)}trackByFn(e,s){return s?._id}static#t=this.\u0275fac=function(s){return new(s||r)(t.Y36(d.Kz))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-status-summary-modal"]],viewQuery:function(s,o){if(1&s&&t.Gf(g.j,5),2&s){let i;t.iGM(i=t.CRH())&&(o.headers=i)}},inputs:{action:"action",totalAmounts:"totalAmounts",customerContactInfoArray:"customerContactInfoArray"},decls:42,vars:3,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"container-fluid","px-0","mt-4"],[1,"row","justify-content-center","px-5","mt-4"],[1,"col-12"],[1,"row","mt-4"],[1,"col-6","pe-0"],[1,"form-label","text-nowrap"],[1,"col-1","px-2","d-flex","align-items-center","justify-content-end"],[1,"ms-1","me-2","text-secondary"],[1,"col-5","ps-0","setInputMargin"],["type","number","readonly","",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-label"],["type","text","readonly","",1,"form-control",3,"ngModel","ngModelChange"],[1,"line-border","my-4"],[1,"row"],[1,"col","text-center","mb-4"],["type","button",1,"btn","bg-primary","px-5",3,"click"]],template:function(s,o){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Status Summary"),t.qZA(),t.TgZ(4,"div")(5,"button",3),t.NdJ("click",function(){return o.activeModal.close()}),t._UZ(6,"i",4),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"label",10),t._uU(13," Active SKU Count "),t.qZA()(),t.TgZ(14,"div",11)(15,"span",12),t._uU(16,"\u25b6"),t.qZA()(),t.TgZ(17,"div",13)(18,"input",14),t.NdJ("ngModelChange",function(n){return o.totalAmounts.activeSKUCount=n}),t.qZA()()(),t.TgZ(19,"div",8)(20,"div",9)(21,"label",15),t._uU(22," SKU linked with Process Flow "),t.qZA()(),t.TgZ(23,"div",11)(24,"span",12),t._uU(25,"\u25b6"),t.qZA()(),t.TgZ(26,"div",13)(27,"input",14),t.NdJ("ngModelChange",function(n){return o.totalAmounts.SKULinkedWithPF=n}),t.qZA()()(),t.TgZ(28,"div",8)(29,"div",9)(30,"label",10),t._uU(31," SKU not linked with Process Flow "),t.qZA()(),t.TgZ(32,"div",11)(33,"span",12),t._uU(34,"\u25b6"),t.qZA()(),t.TgZ(35,"div",13)(36,"input",16),t.NdJ("ngModelChange",function(n){return o.totalAmounts.SKUNotLinkedWithPF=n}),t.qZA()()()()(),t._UZ(37,"hr",17),t.TgZ(38,"div",18)(39,"div",19)(40,"button",20),t.NdJ("click",function(){return o.dismissModel()}),t._uU(41,"Close"),t.qZA()()()()()),2&s&&(t.xp6(18),t.Q6J("ngModel",o.totalAmounts.activeSKUCount),t.xp6(9),t.Q6J("ngModel",o.totalAmounts.SKULinkedWithPF),t.xp6(9),t.Q6J("ngModel",o.totalAmounts.SKUNotLinkedWithPF))},dependencies:[l.Fj,l.wV,l.JJ,l.On],encapsulation:2})}return r})();var w=a(88059),Q=a(53421),T=a(14906),E=a(84231);function O(r,c){1&r&&t._UZ(0,"div",35)}function j(r,c){1&r&&t._UZ(0,"div",36)}function z(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",20,21)(5,"span",22),t._uU(6),t.qZA()(),t.TgZ(7,"td",20,23)(9,"span",22),t._uU(10),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"SalesUOMUnitMaster"),t.qZA(),t.TgZ(14,"td",20,24)(16,"span",22),t._uU(17),t.qZA()(),t.TgZ(18,"td")(19,"span",25),t.YNc(20,O,1,0,"div",26),t.YNc(21,j,1,0,"div",27),t.qZA()(),t.TgZ(22,"td")(23,"div",28),t._UZ(24,"button",29),t.TgZ(25,"div",30)(26,"a",31),t.NdJ("click",function(){const i=t.CHM(e).$implicit,n=t.oxw();return t.KtG(n.navigateTo("../form",i,"processFlow"))}),t._UZ(27,"i",32),t._uU(28," + Process Flow "),t.qZA(),t.TgZ(29,"a",31),t.NdJ("click",function(){const i=t.CHM(e).$implicit,n=t.oxw();return t.KtG(n.navigateTo("../form",i,"view"))}),t._UZ(30,"i",33),t._uU(31," View "),t.qZA(),t.TgZ(32,"a",31),t.NdJ("click",function(){const i=t.CHM(e).$implicit,n=t.oxw();return t.KtG(n.navigateTo("../form",i,"edit"))}),t._UZ(33,"i",32),t._uU(34," Edit "),t.qZA(),t.TgZ(35,"a",31),t.NdJ("click",function(){const i=t.CHM(e).$implicit,n=t.oxw();return t.KtG(n.openCopyProcessFlowModal(i))}),t._UZ(36,"img",34),t._uU(37," Copy Process Flow "),t.qZA()()()()()}if(2&r){const e=c.$implicit,s=t.MAs(4),o=t.MAs(8),i=t.MAs(15),n=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.SKUNo),t.xp6(1),t.Udp("width",s.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.SKUName)("positionTarget",s),t.xp6(1),t.hij(" ",null==e?null:e.SKUName," "),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.SKUDescription)("positionTarget",o),t.xp6(1),t.hij(" ",null==e?null:e.SKUDescription," "),t.xp6(2),t.Oqu(t.lcZ(13,31,null==e?null:e.primaryUnit)),t.xp6(2),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.productCategory)("positionTarget",i),t.xp6(1),t.hij(" ",null==e?null:e.productCategory," "),t.xp6(3),t.Q6J("ngIf","Active"==(null==e?null:e.PFStatus)),t.xp6(1),t.Q6J("ngIf","Inactive"==(null==e?null:e.PFStatus)),t.xp6(5),t.ekj("disable","Active"===(null==e?null:e.PFStatus)),t.Q6J("accessType",n.rolePermissionActions.editAction),t.xp6(3),t.ekj("disable","Inactive"===(null==e?null:e.PFStatus)),t.Q6J("accessType",n.rolePermissionActions.viewAction),t.xp6(3),t.ekj("disable","Inactive"===(null==e?null:e.PFStatus)),t.Q6J("accessType",n.rolePermissionActions.editAction),t.xp6(3),t.ekj("disable","Inactive"===(null==e?null:e.PFStatus)),t.Q6J("accessType",n.rolePermissionActions.editAction)}}const Y=function(r,c,e,s){return{page:r,pageSize:c,collection:e,search:s,type:"list",excelDisplay:"none"}};let B=(()=>{class r{constructor(e,s,o,i,n,m,_){this.exportExcelService=e,this.skuProcessFlowService=s,this.router=o,this.spinner=i,this.activatedRoute=n,this.exportToPDFService=m,this.modalService=_,this.page=1,this.pageSize=8,this.collection=0,this.column="SKUNo",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=C.a1,this.totalAmounts={}}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,s,o){return"Inactive"==s.PFStatus&&"processFlow"==o||"Active"==s.PFStatus&&["edit","view"].includes(o)?void this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:s?._id,action:o}}):null}trackByFn(e,s){return s?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1,s=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.skuProcessFlowService.getAll(o).subscribe(i=>{"EXCEL"==s?this.excelDownload(i?.rows):"PDF"==s?this.pdfDownload(i?.rows):(this.tableData=i?.rows,this.totalAmounts=i?.totalAmounts,this.collection=i.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(e){this.exportExcelService.exportExcel((0,v.gQ)(e))}pdfDownload(e){let s=(0,v.XZ)(e);this.exportToPDFService.generatePdf(s.tableData,s.title)}openStatusSummaryModal(){const e=this.modalService.open(I,{centered:!0,size:"md",backdrop:"static",keyboard:!1});e.componentInstance.totalAmounts=this.totalAmounts,e.result.then(s=>{s&&console.log("success",s)},s=>{})}openCopyProcessFlowModal(e){if("Active"==e.PFStatus){const s=this.modalService.open(K,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});s.componentInstance.SKUId=e._id,s.result.then(o=>{console.log("success",o),this.getAll()},o=>{})}}onSort({column:e,direction:s}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==s?1:-1,this.getAll()}static#t=this.\u0275fac=function(s){return new(s||r)(t.Y36(u.Ol),t.Y36(b.dM),t.Y36(h.F0),t.Y36(u.V),t.Y36(h.gz),t.Y36(u.$L),t.Y36(d.FF))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-sku-process-flow-list"]],viewQuery:function(s,o){if(1&s&&t.Gf(g.j,5),2&s){let i;t.iGM(i=t.CRH())&&(o.headers=i)}},decls:33,vars:14,consts:[[1,"listCard","card"],[1,"table-header","text-center"],[1,"heading"],[1,"line-border","mt-1"],[1,"table-responsive",2,"min-height","37rem"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","SKUNo",3,"sort"],["sortable","SKUName",1,"text-start",3,"sort"],["sortable","SKUDescription",1,"text-start",3,"sort"],["sortable","primaryUnit",3,"sort"],["sortable","productCategory",1,"text-start",3,"sort"],["sortable","PFStatus",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"line-border"],[1,"row","mt-3","ms-1"],[1,"col-12"],["type","button",1,"btn","btn-primary","px-4",3,"click"],[1,"text-start"],["SKUName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["SKUDescription",""],["productCategory",""],[1,"d-flex","justify-content-center"],["class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["src","./assets/images/new.svg","width","14",1,"me-3"],[1,"statusActive"],[1,"statusInActive"]],template:function(s,o){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"SKU Process Flow Summary"),t.qZA()(),t._UZ(4,"hr",3),t.TgZ(5,"div",4)(6,"app-setting-header",5),t.NdJ("dataChange",function(n){return o.eventHeader(n)}),t.qZA(),t.TgZ(7,"table",6)(8,"thead",7)(9,"tr",8)(10,"th",9),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(11,"SKU No."),t.qZA(),t.TgZ(12,"th",10),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(13),t.ALo(14,"labelTranslate"),t.qZA(),t.TgZ(15,"th",11),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(16),t.ALo(17,"labelTranslate"),t.qZA(),t.TgZ(18,"th",12),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(19,"UoM"),t.qZA(),t.TgZ(20,"th",13),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(21,"Product Category"),t.qZA(),t.TgZ(22,"th",14),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(23,"PF Status"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Action"),t.qZA()()(),t.TgZ(26,"tbody"),t.YNc(27,z,38,33,"tr",15),t.qZA()()(),t._UZ(28,"hr",16),t.TgZ(29,"div",17)(30,"div",18)(31,"button",19),t.NdJ("click",function(){return o.openStatusSummaryModal()}),t._uU(32," Status Summary "),t.qZA()()()()),2&s&&(t.xp6(6),t.Q6J("data",t.l5B(9,Y,o.page,o.pageSize,o.collection,o.search)),t.xp6(7),t.hij(" ",t.lcZ(14,5,"SKU Name")," "),t.xp6(3),t.hij(" ",t.lcZ(17,7,"SKU Description")," "),t.xp6(11),t.Q6J("ngForOf",o.tableData)("ngForTrackBy",o.trackByFn))},dependencies:[p.sg,p.O5,w.P,d._L,g.j,Q.J,T.c,E.Q],encapsulation:2})}return r})();var G=a(21631),H=a(22096);function R(r,c){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==e?null:e.seq," ")}}const W=function(){return{standalone:!0}};function $(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"input",44),t.NdJ("ngModelChange",function(o){t.CHM(e);const i=t.oxw().$implicit;return t.KtG(i.seq=o)}),t.qZA()}if(2&r){const e=t.oxw().$implicit;t.Q6J("ngModel",e.seq)("ngModelOptions",t.DdM(2,W))}}const A=function(){return["view","Converted to SKU"]};function X(r,c){if(1&r&&(t.TgZ(0,"tr")(1,"td")(2,"div",33),t.YNc(3,R,2,1,"span",34),t.YNc(4,$,1,3,"input",35),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",36,37)(9,"span",38),t._uU(10),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td",36,39)(15,"span",38),t._uU(16),t.qZA()(),t.TgZ(17,"td",40)(18,"div",41)(19,"span",42),t._uU(20," AU "),t._UZ(21,"div",43),t.qZA(),t.TgZ(22,"span",4),t._uU(23),t.qZA()()()()),2&r){const e=c.$implicit,s=t.MAs(8),o=t.MAs(14),i=t.oxw();t.xp6(3),t.Q6J("ngIf",t.DdM(15,A).includes(i.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(16,A).includes(i.action)),t.xp6(2),t.hij(" ",e.processId," "),t.xp6(1),t.Udp("width",s.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.processName)("positionTarget",s),t.xp6(1),t.hij(" ",e.processName," "),t.xp6(2),t.Oqu(e.sourceOfManufacturing),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.primaryAssetAllocation)("positionTarget",o),t.xp6(1),t.hij(" ",e.primaryAssetAllocation," "),t.xp6(7),t.hij(" ",e.unitProcessOutput," ")}}function V(r,c){1&r&&t._UZ(0,"hr",18)}function tt(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",6)(1,"div",45)(2,"div",46)(3,"button",47),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.reset())}),t._uU(4,"Reset"),t.qZA(),t.TgZ(5,"button",48),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.ESCPreview())}),t._uU(6,"Esc"),t.qZA(),t.TgZ(7,"button",49),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.preview())}),t._uU(8,"Preview"),t.qZA(),t.TgZ(9,"button",50),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.submit())}),t._uU(10," Save "),t.qZA()()()()}if(2&r){const e=t.oxw();t.xp6(9),t.Q6J("disabled",!e.isPreview)}}const et=function(r,c,e,s){return{page:r,pageSize:c,collection:e,search:s,excelDisplay:"none"}};let ot=(()=>{class r{get f(){return this.form.controls}constructor(e,s,o,i,n,m){this.skuProcessFlowService=e,this.spinner=s,this.toastService=o,this.activatedRoute=i,this.utilityService=n,this.location=m,this.isPreview=!1,this.isESCPreview=!1,this.page=1,this.pageSize=6,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.ESCPreviewArr=[],this.filterSKUList=[],this.itemCategoryList="",this.skuList="",this.action="create",this.submitted=!1,this.rolePermissionActions=C.a1,this.masterData={processMasterList:[]},this.form=new l.nJ({_id:new l.p4(null),productCategory:new l.p4(null),SKU:new l.p4(null),SKUNo:new l.p4(null),SKUName:new l.p4(null),SKUDescription:new l.p4(null),PFDetails:new l.p4([]),PFStatus:new l.p4(null)})}ngOnInit(){this.getInitialData()}trackByFn(e,s){return s?._id}reset(){this.form.reset(),this.collection=this.masterData?.processMasterList.length,this.getInitialData()}submit(){if(this.submitted=!0,this.form.enable(),0==this.masterData.processMasterList.length)return void this.toastService.warning("At least one row is Required");let e={SKU:this.form.value.SKU,PFDetails:this.form.value.PFDetails};e.PFDetails=this.masterData?.processMasterList.filter(s=>s.seq>0).sort((s,o)=>s.seq-o.seq),this.create(e)}create(e){this.spinner.show(),this.skuProcessFlowService.create(e).subscribe(s=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(s.message),this.location.back()})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value;break;case"EXCEL":default:break;case"PAGE":this.page=e.value}}getInitialData(){this.spinner.show(),this.skuProcessFlowService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.collection=this.masterData?.processMasterList?.length,this.spinner.hide(),this.activatedRoute.queryParams.pipe((0,G.z)(s=>(this.action=s.action,this.utilityService.accessDenied(this.action),s.id?this.skuProcessFlowService.getBySKUId(s.id):(0,H.of)({})))).subscribe(s=>{if(this.spinner.hide(),0!=Object.keys(s).length){if(s.PFDetails){s.PFDetails=s.PFDetails;let o=this.masterData?.processMasterList;this.masterData.processMasterList=s.PFDetails;for(const i of s.PFDetails)o=o.filter(n=>n.processId!=i.processId),this.ESCPreviewArr=[...s.PFDetails,...o];this.collection=this.masterData?.processMasterList.length}this.form.patchValue(s),this.f.SKU.setValue(s?._id),"create"!=this.action&&(this.isPreview=!0,this.form.disable())}})})}preview(){this.search="",this.isESCPreview=!0,this.ESCPreviewArr=this.masterData?.processMasterList,this.masterData.processMasterList=this.masterData?.processMasterList.filter(e=>e.seq>0).sort((e,s)=>e.seq-s.seq),this.masterData.processMasterList.length>0&&(this.isPreview=!0),this.collection=this.masterData?.processMasterList.length}ESCPreview(){this.search="",this.isPreview=!1,this.masterData.processMasterList=this.ESCPreviewArr,this.collection=this.masterData.processMasterList.length}onSort({column:e,direction:s}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.masterData.processMasterList=""===s||""===e?this.masterData?.processMasterList:[...this.masterData?.processMasterList].sort((o,i)=>{let n="string"==typeof o[e]?o[e].toLowerCase():o[e],m="string"==typeof i[e]?i[e].toLowerCase():i[e];const _=n<m?-1:n>m?1:0;return"asc"===s?_:-_})}static#t=this.\u0275fac=function(s){return new(s||r)(t.Y36(b.dM),t.Y36(u.V),t.Y36(u.kl),t.Y36(h.gz),t.Y36(u.tI),t.Y36(p.Ye))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-sku-process-flow-form"]],viewQuery:function(s,o){if(1&s&&t.Gf(g.j,5),2&s){let i;t.iGM(i=t.CRH())&&(o.headers=i)}},decls:58,vars:27,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading","ms-2"],[1,""],[1,"form-body"],[1,"row"],[1,"col-5"],[1,"col-4"],[1,"form-label"],[1,"text-danger"],["formControlName","SKUNo","type","text","readonly","",1,"form-control"],[1,"col-8"],["formControlName","SKUName","type","text","readonly","",1,"form-control"],[1,"col-7"],[1,"col-5","pe-0"],["formControlName","SKUDescription","type","text","readonly","",1,"form-control"],["formControlName","productCategory","type","text","readonly","",1,"form-control"],[1,"row","line-border"],[3,"data","dataChange"],[1,"table-responsive",2,"min-height","22rem"],[1,"table","table-bordered","table-sticky","mt-1"],[1,"bg-primary"],[1,"text-white"],["sortable","seq",3,"sort"],["sortable","processId",3,"sort"],["sortable","processName",1,"text-start",3,"sort"],["sortable","sourceOfManufacturing",3,"sort"],["sortable","primaryAssetAllocation",1,"text-start",3,"sort"],["sortable","unitProcessOutput",1,"text-start",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],["class","row line-border",4,"ngIf"],["class","row",4,"ngIf"],[1,"d-flex","justify-content-center"],[4,"ngIf"],["class","form-control form-control-sm","type","number",3,"ngModel","ngModelOptions","ngModelChange",4,"ngIf"],[1,"text-start"],["processName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["primaryAssetAllocation",""],[1,"p-0","text-center"],[1,"d-flex","align-items-center"],[1,"input-group-text","border","border-0","text-muted","combine-INR"],[1,"vr","ms-3"],["type","number",1,"form-control","form-control-sm",3,"ngModel","ngModelOptions","ngModelChange"],[1,"col","text-center"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-3","me-1",3,"click"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"]],template:function(s,o){1&s&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",6)(11,"div",8)(12,"label",9),t._uU(13,"SKU No. "),t._UZ(14,"span",10),t.qZA(),t._UZ(15,"input",11),t.qZA(),t.TgZ(16,"div",12)(17,"label",9),t._uU(18),t.ALo(19,"labelTranslate"),t._UZ(20,"span",10),t.qZA(),t._UZ(21,"input",13),t.qZA()()(),t.TgZ(22,"div",14)(23,"div",6)(24,"div",15)(25,"label",9),t._uU(26),t.ALo(27,"labelTranslate"),t._UZ(28,"span",10),t.qZA(),t._UZ(29,"input",16),t.qZA(),t.TgZ(30,"div",14)(31,"label",9),t._uU(32,"Product Category"),t.qZA(),t._UZ(33,"input",17),t.qZA()()()()(),t._UZ(34,"hr",18),t.TgZ(35,"app-setting-header",19),t.NdJ("dataChange",function(n){return o.eventHeader(n)}),t.qZA(),t.TgZ(36,"div",20)(37,"table",21)(38,"thead",22)(39,"tr",23)(40,"th",24),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(41,"Sequence"),t.qZA(),t.TgZ(42,"th",25),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(43,"Process ID"),t.qZA(),t.TgZ(44,"th",26),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(45,"Process Name"),t.qZA(),t.TgZ(46,"th",27),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(47,"Source"),t.qZA(),t.TgZ(48,"th",28),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(49," Primary Asset/s Allocation "),t.qZA(),t.TgZ(50,"th",29),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(51,"Std. Output/Hr"),t.qZA()()(),t.TgZ(52,"tbody"),t.YNc(53,X,24,17,"tr",30),t.ALo(54,"slice"),t.ALo(55,"searchFi1ter"),t.qZA()()(),t.YNc(56,V,1,0,"hr",31),t.YNc(57,tt,11,1,"div",32),t.qZA()()),2&s&&(t.Q6J("formGroup",o.form),t.xp6(5),t.hij("",t.lcZ(6,9,o.action)," Process Flow"),t.xp6(13),t.hij("",t.lcZ(19,11,"SKU Name")," "),t.xp6(8),t.hij("",t.lcZ(27,13,"SKU Description")," "),t.xp6(9),t.Q6J("data",t.l5B(22,et,o.page,o.pageSize,o.collection,o.search)),t.xp6(18),t.Q6J("ngForOf",t.Dn7(54,15,t.xi3(55,19,o.masterData.processMasterList,o.search),(o.page-1)*o.pageSize,(o.page-1)*o.pageSize+o.pageSize))("ngForTrackBy",o.trackByFn),t.xp6(3),t.Q6J("ngIf","view"!=o.action),t.xp6(1),t.Q6J("ngIf","view"!=o.action))},dependencies:[p.sg,p.O5,w.P,d._L,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.sg,l.u,l.On,g.j,p.OU,p.rS,Z.G,T.c],encapsulation:2})}return r})();var st=a(19964),it=a(56208);const nt=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:B},{path:"form",component:ot,resolve:{accessScreen:st.xr}}];let rt=(()=>{class r{static#t=this.\u0275fac=function(s){return new(s||r)};static#e=this.\u0275mod=t.oAB({type:r});static#o=this.\u0275inj=t.cJS({imports:[p.ez,h.Bz.forChild(nt),it.m]})}return r})()},13107:(S,f,a)=>{a.d(f,{t:()=>p});const p={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(S,f,a)=>{a.d(f,{J:()=>p});const p=({data:h,headers:g,widths:C,title:v})=>({tableData:{widths:C,headerRows:1,body:[g.map(u=>({text:u.header,style:"header"})),...h.map(u=>g.map(b=>({style:"subheader",text:u[b.key]})))]},title:v})}}]);