"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5447],{55447:(A,c,d)=>{d.r(c),d.d(c,{HomeModule:()=>_});var v=d(96814),u=d(1076),l=d(34702),p=d(60438),m=d(63608),t=d(65879),C=d(74661),h=d(98977),s=d(37285);function f(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div",13)(1,"div",21)(2,"div",20)(3,"div",22)(4,"i",23),t.NdJ("click",function(){t.CHM(o);const a=t.oxw(),n=t.MAs(4);return t.KtG(n.select(a.activeCards+1))}),t.qZA()(),t.TgZ(5,"div",9)(6,"div",24)(7,"div",25)(8,"div",26)(9,"div",27)(10,"h5",18),t._uU(11,"Total No. of SKU_BOM"),t.qZA(),t.TgZ(12,"p",28),t._uU(13),t.qZA()()()(),t.TgZ(14,"div",25)(15,"div",26)(16,"div",27)(17,"h5",18),t._uU(18," Total No. of Child Part_BOM "),t.qZA(),t.TgZ(19,"p",28),t._uU(20),t.qZA()()()(),t.TgZ(21,"div",25)(22,"div",26)(23,"div",27)(24,"h5",18),t._uU(25," Total No. of G. Child Part_BOM "),t.qZA(),t.TgZ(26,"p",28),t._uU(27),t.qZA()()()(),t.TgZ(28,"div",25)(29,"div",26)(30,"div",27)(31,"h5",18),t._uU(32," Total No. of Inhouse Child Part "),t.qZA(),t.TgZ(33,"p",28),t._uU(34),t.qZA()()()()()(),t.TgZ(35,"div",29)(36,"i",30),t.NdJ("click",function(){t.CHM(o);const a=t.oxw(),n=t.MAs(4);return t.KtG(n.select(a.activeCards+1))}),t.qZA()()()()()}if(2&e){const o=t.oxw();t.xp6(13),t.hij(" ",o.dashBoardData.totalNoOfSkuBOM||0," "),t.xp6(7),t.hij(" ",o.dashBoardData.totalNoOfChildPartBOM||0," "),t.xp6(7),t.hij(" ",o.dashBoardData.totalNoOfGrChildPartBOM||0," "),t.xp6(7),t.hij(" ",o.dashBoardData.totalNoOfInHouseChildPart||0," ")}}function g(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div",13)(1,"div",21)(2,"div",20)(3,"div",22)(4,"i",23),t.NdJ("click",function(){t.CHM(o);const a=t.oxw(),n=t.MAs(4);return t.KtG(n.select(a.activeCards-1))}),t.qZA()(),t.TgZ(5,"div",31)(6,"div",24)(7,"div",25)(8,"div",10)(9,"div",27)(10,"h5",18),t._uU(11," Total No. of Inhouse G. Child Part "),t.qZA(),t.TgZ(12,"p",28),t._uU(13),t.qZA()()()(),t.TgZ(14,"div",25)(15,"div",10)(16,"div",27)(17,"h5",18),t._uU(18," Total No. of Outsourced Child Part "),t.qZA(),t.TgZ(19,"p",28),t._uU(20),t.qZA()()()(),t.TgZ(21,"div",25)(22,"div",26)(23,"div",27)(24,"h5",18),t._uU(25," Total No. of Outsourced G. Child Part "),t.qZA(),t.TgZ(26,"p",28),t._uU(27),t.qZA()()()()()(),t.TgZ(28,"div",29)(29,"i",30),t.NdJ("click",function(){t.CHM(o);const a=t.oxw(),n=t.MAs(4);return t.KtG(n.select(a.activeCards-1))}),t.qZA()()()()()}if(2&e){const o=t.oxw();t.xp6(13),t.hij(" ",o.dashBoardData.totalNoOfInHouseGrChildPart||0," "),t.xp6(7),t.hij(" ",o.dashBoardData.totalNoOfOutsourcedChildPart||0," "),t.xp6(7),t.hij(" ",o.dashBoardData.totalNoOfOutsourcedGrChildPart||0," ")}}let Z=(()=>{var e;class r{constructor(i,a,n){this.dashboardService=i,this.menuTitleService=a,this.appGlobalService=n,this.title="",this.active=1,this.activeCards=1,this.dashBoardData={barMonthlyMaintenanceCost:{labels:[],datasets:[{data:[]}]},barMonthlyWOStatusCount:{labels:[],datasets:[{data:[]}]},totalNoOfSkuBOM:0,totalNoOfChildPartBOM:0,totalNoOfGrChildPartBOM:0,totalNoOfInHouseChildPart:0,totalNoOfInHouseGrChildPart:0,totalNoOfOutsourcedChildPart:0,totalNoOfOutsourcedGrChildPart:0},this.lakhInWord="Lakh",this.barChartOptions=m.f.barChartOptions("#fa3264","#fa3264"),this.barChartType="bar",this.barChartPlugins=[p.Z]}ngOnInit(){this.getAllData(),this.title=this.appGlobalService.moduleName,this.menuTitleService.set({title:`${this.title} Overview`,subTitle:null,type:null})}getAllData(){this.dashboardService.getAllPlanning({}).subscribe(i=>{this.dashBoardData=i})}}return(e=r).\u0275fac=function(i){return new(i||e)(t.Y36(C.s),t.Y36(h.Uh),t.Y36(h.P0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],viewQuery:function(i,a){if(1&i&&t.Gf(l.jh,5),2&i){let n;t.iGM(n=t.CRH())&&(a.chart=n.first)}},decls:33,vars:12,consts:[[1,"container-fluid","text-center","dashboard-page"],[1,"row","justify-content-center","mt-5"],[1,"col-md-12","px-0"],["ngbNav","",1,"nav-pills","tabs-card","row",3,"activeId","activeIdChange"],["nav1","ngbNav"],[1,"col","d-grid","pe-2",3,"ngbNavItem"],["ngbNavContent",""],[1,"mt-2",3,"ngbNavOutlet"],[1,"row","mb-4","justify-content-center"],[1,"col-11"],[1,"card","h-100"],[1,"card-body","ms-3","align-items-start"],[1,"row","justify-content-center","mt-4"],[1,"row","mx-1"],[1,"col-md-6"],[1,"d-flex","justify-content-end"],[1,"card","col-11"],[1,"card-body","gh","p-4"],[1,"card-title"],["baseChart","",1,"chart","pointer",3,"data","options","type","plugins"],[1,"d-flex","align-items-center"],[1,"col-md-12"],[1,"col","pt-3","text-start"],["aria-hidden","true",1,"fa","fa-chevron-left","sales-fa-chevron-color","fs-2","pointer",3,"click"],[1,"row","px-2","mb-4"],[1,"col","px-3"],[1,"card"],[1,"card-body"],[1,"card-text"],[1,"col","pt-2","text-end"],["aria-hidden","true",1,"fa","fa-chevron-right","sales-fa-chevron-color","fs-2","pointer",3,"click"],[1,"col-11","text-start"]],template:function(i,a){if(1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"ul",3,4),t.NdJ("activeIdChange",function(N){return a.activeCards=N}),t.TgZ(5,"li",5),t.YNc(6,f,37,4,"ng-template",6),t.qZA(),t.TgZ(7,"li",5),t.YNc(8,g,30,3,"ng-template",6),t.qZA()(),t._UZ(9,"div",7),t.qZA()(),t.TgZ(10,"div",8)(11,"div",9)(12,"div",10)(13,"div",11)(14,"h5"),t._uU(15," Note: CP -Child Part, GCP - Grand Child Part, I- Inhouse, O- Outsourced, mfg - Manufacturing. "),t.qZA()()()()(),t.TgZ(16,"div",12)(17,"div",2)(18,"div",13)(19,"div",14)(20,"div",15)(21,"div",16)(22,"div",17)(23,"h5",18),t._uU(24,"Bom Count"),t.qZA(),t._UZ(25,"canvas",19),t.qZA()()()(),t.TgZ(26,"div",14)(27,"div",20)(28,"div",16)(29,"div",17)(30,"h5",18),t._uU(31,"CP & GCP mfg. Details"),t.qZA(),t._UZ(32,"canvas",19),t.qZA()()()()()()()()),2&i){const n=t.MAs(4);t.xp6(3),t.Q6J("activeId",a.activeCards),t.xp6(2),t.Q6J("ngbNavItem",1),t.xp6(2),t.Q6J("ngbNavItem",2),t.xp6(2),t.Q6J("ngbNavOutlet",n),t.xp6(16),t.Q6J("data",a.dashBoardData.barMonthlyMaintenanceCost)("options",a.barChartOptions)("type",a.barChartType)("plugins",a.barChartPlugins),t.xp6(7),t.Q6J("data",a.dashBoardData.barMonthlyWOStatusCount)("options",a.barChartOptions)("type",a.barChartType)("plugins",a.barChartPlugins)}},dependencies:[l.jh,s.uN,s.Pz,s.nv,s.Is,s.Dy],encapsulation:2}),r})();var T=d(56208);const O=[{path:"",component:Z}];let _=(()=>{var e;class r{}return(e=r).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[v.ez,l.vQ,T.m,u.Bz.forChild(O)]}),r})()}}]);