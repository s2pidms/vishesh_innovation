"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8317],{78317:(x,p,s)=>{s.r(p),s.d(p,{HomeModule:()=>b});var v=s(96814),h=s(1076),l=s(34702),m=s(60438),C=s(63608),t=s(65879),c=s(99328),g=s(74661),r=s(37285);function Z(i,d){if(1&i){const a=t.EpF();t.TgZ(0,"div",9)(1,"div",17)(2,"div",16)(3,"div",18)(4,"i",19),t.NdJ("click",function(){t.CHM(a);const e=t.oxw(),o=t.MAs(4);return t.KtG(o.select(e.activeCards+1))}),t.qZA()(),t.TgZ(5,"div",20)(6,"div",21)(7,"div",22)(8,"div",23)(9,"div",24)(10,"h5",14),t._uU(11,"Total Equipment"),t.qZA(),t.TgZ(12,"p",14),t._uU(13),t.qZA()()()(),t.TgZ(14,"div",22)(15,"div",23)(16,"div",24)(17,"h5",14),t._uU(18,"Total Equipment Cost"),t.qZA(),t.TgZ(19,"p",25),t._uU(20),t.ALo(21,"number"),t.qZA()()()(),t.TgZ(22,"div",22)(23,"div",26)(24,"div",24)(25,"h5",14),t._uU(26,"Total Assets"),t.qZA(),t.TgZ(27,"p",27),t._uU(28),t.qZA()()()(),t.TgZ(29,"div",22)(30,"div",26)(31,"div",24)(32,"h5",14),t._uU(33,"Total Assets Cost"),t.qZA(),t.TgZ(34,"p",25),t._uU(35),t.ALo(36,"number"),t.qZA()()()(),t.TgZ(37,"div",22)(38,"div",28)(39,"div",24)(40,"h5",14),t._uU(41,"Total Quality Equipment"),t.qZA(),t.TgZ(42,"p",25),t._uU(43),t.qZA()()()()()(),t.TgZ(44,"div",29)(45,"i",30),t.NdJ("click",function(){t.CHM(a);const e=t.oxw(),o=t.MAs(4);return t.KtG(o.select(e.activeCards+1))}),t.qZA()()()()()}if(2&i){const a=t.oxw();t.xp6(13),t.hij(" ",a.dashBoardData.equipmentsDataCount," "),t.xp6(7),t.AsE(" ",t.xi3(21,7,a.dashBoardData.equipmentsData,"1.2-2")," ",a.lakhInWord," "),t.xp6(8),t.hij(" ",a.dashBoardData.assetsDataCount," "),t.xp6(7),t.AsE(" ",t.xi3(36,10,a.dashBoardData.assetsDataCost,"1.2-2")," ",a.lakhInWord," "),t.xp6(8),t.hij(" ",a.dashBoardData.qualityEquipmentCount," ")}}function T(i,d){if(1&i){const a=t.EpF();t.TgZ(0,"div",9)(1,"div",17)(2,"div",16)(3,"div",18)(4,"i",19),t.NdJ("click",function(){t.CHM(a);const e=t.oxw(),o=t.MAs(4);return t.KtG(o.select(e.activeCards-1))}),t.qZA()(),t.TgZ(5,"div",31)(6,"div",21)(7,"div",22)(8,"div",28)(9,"div",24)(10,"h5",14),t._uU(11,"YTD Maintenance Cost"),t.qZA(),t.TgZ(12,"p",25),t._uU(13),t.ALo(14,"number"),t.qZA()()()(),t.TgZ(15,"div",22)(16,"div",28)(17,"div",24)(18,"h5",14),t._uU(19,"Task Scheduling Compliance"),t.qZA(),t.TgZ(20,"p",25),t._uU(21),t.qZA()()()(),t.TgZ(22,"div",22)(23,"div",26)(24,"div",24)(25,"h5",14),t._uU(26,"Task Scheduling Efficiency"),t.qZA(),t.TgZ(27,"p",25),t._uU(28),t.qZA()()()(),t.TgZ(29,"div",22)(30,"div",26)(31,"div",24)(32,"h5",14),t._uU(33,"Work Order Completion Rate"),t.qZA(),t.TgZ(34,"p",25),t._uU(35),t.qZA()()()(),t.TgZ(36,"div",22)(37,"div",26)(38,"div",24)(39,"h5",14),t._uU(40,"Calibration Due"),t.qZA(),t.TgZ(41,"p",25),t._uU(42),t.qZA()()()()()(),t.TgZ(43,"div",29)(44,"i",30),t.NdJ("click",function(){t.CHM(a);const e=t.oxw(),o=t.MAs(4);return t.KtG(o.select(e.activeCards-1))}),t.qZA()()()()()}if(2&i){const a=t.oxw();t.xp6(13),t.AsE(" ",t.xi3(14,6,a.dashBoardData.ytdEquipmentCost,"1.2-2")," ",a.lakhInWord," "),t.xp6(8),t.hij(" ",a.dashBoardData.taskScheduleCompleted,"% "),t.xp6(7),t.hij(" ",a.dashBoardData.taskScheduleEfficiency," "),t.xp6(7),t.hij(" ",a.dashBoardData.workOrderCompletedRate," % "),t.xp6(7),t.hij(" ",a.dashBoardData.calibrationDueCount," ")}}let f=(()=>{var i;class d{constructor(n,e,o,u){this.storageService=n,this.maintenance=e,this.menuTitleService=o,this.appGlobalService=u,this.title="",this.active=1,this.activeCards=1,this.dashBoardData={barMonthlyMaintenanceCost:{labels:[],datasets:[{data:[]}]},barMonthlyWOStatusCount:{labels:[],datasets:[{data:[]}]},assetsDataCount:0,assetsDataCost:0,equipmentsData:0,equipmentsDataCount:0,qualityEquipmentCount:0,ytdEquipmentCost:0,workOrderCompletedRate:0,calibrationDueCount:0,taskScheduleCompleted:0,taskScheduleEfficiency:0,ytdCreditNote:0,totalNoOfDueCalibrationPerDay:0},this.lakhInWord="Lakh",this.barChartOptions=C.f.barChartOptions("#fa3264","#fa3264"),this.barChartType="bar",this.barChartPlugins=[m.Z]}ngOnInit(){this.getAllData(),this.title=this.appGlobalService.moduleName,this.menuTitleService.set({title:`${this.title} Overview`,subTitle:null,type:null})}getAllData(){this.maintenance.getAllMaintenance({}).subscribe(n=>{this.dashBoardData=n})}}return(i=d).\u0275fac=function(n){return new(n||i)(t.Y36(c.V1),t.Y36(g.s),t.Y36(c.Uh),t.Y36(c.P0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-home"]],viewQuery:function(n,e){if(1&n&&t.Gf(l.jh,5),2&n){let o;t.iGM(o=t.CRH())&&(e.chart=o.first)}},decls:27,vars:12,consts:[[1,"container-fluid","text-center","dashboard-page"],[1,"row","justify-content-center","mt-5"],[1,"col-md-12","px-0"],["ngbNav","",1,"nav-pills","tabs-card","row",3,"activeId","activeIdChange"],["nav1","ngbNav"],[1,"col","d-grid","pe-2",3,"ngbNavItem"],["ngbNavContent",""],[1,"mt-2",3,"ngbNavOutlet"],[1,"row","justify-content-center","mt-4"],[1,"row","mx-1"],[1,"col-md-6"],[1,"d-flex","justify-content-end"],[1,"card","col-11"],[1,"card-body","gh","p-4"],[1,"card-title"],["baseChart","",1,"chart","pointer",3,"data","options","type","plugins"],[1,"d-flex","align-items-center"],[1,"col-md-12"],[1,"col","pt-3","text-start"],["aria-hidden","true",1,"fa","fa-chevron-left","sales-fa-chevron-color","fs-2","pointer",3,"click"],[1,"col-11"],[1,"row","px-2","mb-4"],[1,"col","px-3"],[1,"card","flip-box-inner"],[1,"card-body"],[1,"card-text"],[1,"card"],[1,"card-text","card-text1"],[1,"card","h-100"],[1,"col","pt-2","text-end"],["aria-hidden","true",1,"fa","fa-chevron-right","sales-fa-chevron-color","fs-2","pointer",3,"click"],[1,"col-11","text-start"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"ul",3,4),t.NdJ("activeIdChange",function(u){return e.activeCards=u}),t.TgZ(5,"li",5),t.YNc(6,Z,46,13,"ng-template",6),t.qZA(),t.TgZ(7,"li",5),t.YNc(8,T,45,9,"ng-template",6),t.qZA()(),t._UZ(9,"div",7),t.qZA()(),t.TgZ(10,"div",8)(11,"div",2)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"h5",14),t._uU(18,"Maintenance Cost Distribution"),t.qZA(),t._UZ(19,"canvas",15),t.qZA()()()(),t.TgZ(20,"div",10)(21,"div",16)(22,"div",12)(23,"div",13)(24,"h5",14),t._uU(25,"Work Order Status Distribution"),t.qZA(),t._UZ(26,"canvas",15),t.qZA()()()()()()()()),2&n){const o=t.MAs(4);t.xp6(3),t.Q6J("activeId",e.activeCards),t.xp6(2),t.Q6J("ngbNavItem",1),t.xp6(2),t.Q6J("ngbNavItem",2),t.xp6(2),t.Q6J("ngbNavOutlet",o),t.xp6(10),t.Q6J("data",e.dashBoardData.barMonthlyMaintenanceCost)("options",e.barChartOptions)("type",e.barChartType)("plugins",e.barChartPlugins),t.xp6(7),t.Q6J("data",e.dashBoardData.barMonthlyWOStatusCount)("options",e.barChartOptions)("type",e.barChartType)("plugins",e.barChartPlugins)}},dependencies:[l.jh,r.uN,r.Pz,r.nv,r.Is,r.Dy,v.JJ],encapsulation:2}),d})();var A=s(56208);const _=[{path:"",component:f}];let b=(()=>{var i;class d{}return(i=d).\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[v.ez,l.vQ,A.m,h.Bz.forChild(_)]}),d})()}}]);