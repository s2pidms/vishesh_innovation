"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8722],{28722:(y,l,e)=>{e.r(l),e.d(l,{HomeModule:()=>C});var u=e(96814),p=e(1076),d=e(34702),v=e(63608),c=e(60438),t=e(65879),h=e(98977),m=e(74661);const g=[{path:"",component:(()=>{var o;class s{constructor(i,a,n){this.menuTitleService=i,this.productionService=a,this.appGlobalService=n,this.title="",this.dashBoardData={barChartDataEmpPaidSalary:{labels:[],datasets:[{data:[]}]},barChartDataFGIEntry:{labels:[],datasets:[{data:[]}]},totalRequisitions:0,approvedRequisitions:0,pendingRequisitions:0,totalFGInwardEntries:0,totalGoodsRequisitionCreatedPerDay:0,totalGoodsIssueAgainstGRPerDay:0,totalSKUProducedPerDay:0,totalChildPartProducedPerDay:0,totalGrandChildPartProducedPerDay:0},this.barChartOptions=v.f.barChartOptions("#007dfa","#007dfa"),this.barChartPlugins=[c.Z],this.barChartType="bar"}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuTitleService.set({title:`${this.title} Overview`,subTitle:null,type:null}),this.getAllData()}getAllData(){this.productionService.getAllProduction({}).subscribe(i=>{this.dashBoardData=i})}}return(o=s).\u0275fac=function(i){return new(i||o)(t.Y36(h.Uh),t.Y36(m.s),t.Y36(h.P0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],viewQuery:function(i,a){if(1&i&&t.Gf(d.jh,5),2&i){let n;t.iGM(n=t.CRH())&&(a.chart=n.first)}},decls:43,vars:12,consts:[[1,"container-fluid","text-center","dashboard-page"],[1,"row","mt-5","mx-1"],[1,"col"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-text2"],[1,"row","mx-4","mt-5"],[1,"col-md-6","px-2"],[1,"card-body","py-5"],["baseChart","",1,"chart","pointer",3,"data","options","type","plugins"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h5",5),t._uU(6,"Total Requisitions"),t.qZA(),t.TgZ(7,"p",6),t._uU(8),t.qZA()()()(),t.TgZ(9,"div",2)(10,"div",3)(11,"div",4)(12,"h5",5),t._uU(13,"Approved Requisitions"),t.qZA(),t.TgZ(14,"p",6),t._uU(15),t.qZA()()()(),t.TgZ(16,"div",2)(17,"div",3)(18,"div",4)(19,"h5",5),t._uU(20,"Pending Requisitions"),t.qZA(),t.TgZ(21,"p",6),t._uU(22),t.qZA()()()(),t.TgZ(23,"div",2)(24,"div",3)(25,"div",4)(26,"h5",5),t._uU(27,"Total FG Inward Entries"),t.qZA(),t.TgZ(28,"p",6),t._uU(29),t.qZA()()()()(),t.TgZ(30,"div",7)(31,"div",8)(32,"div",3)(33,"div",9)(34,"h5",5),t._uU(35,"Requisitions Trend"),t.qZA(),t._UZ(36,"canvas",10),t.qZA()()(),t.TgZ(37,"div",8)(38,"div",3)(39,"div",9)(40,"h5",5),t._uU(41,"Finished Goods Inventory Entry trend"),t.qZA(),t._UZ(42,"canvas",10),t.qZA()()()()()),2&i&&(t.xp6(8),t.Oqu(a.dashBoardData.totalRequisitions),t.xp6(7),t.Oqu(a.dashBoardData.approvedRequisitions),t.xp6(7),t.Oqu(a.dashBoardData.pendingRequisitions),t.xp6(7),t.Oqu(a.dashBoardData.totalFGInwardEntries),t.xp6(7),t.Q6J("data",a.dashBoardData.barChartDataEmpPaidSalary)("options",a.barChartOptions)("type",a.barChartType)("plugins",a.barChartPlugins),t.xp6(6),t.Q6J("data",a.dashBoardData.barChartDataFGIEntry)("options",a.barChartOptions)("type",a.barChartType)("plugins",a.barChartPlugins))},dependencies:[d.jh],encapsulation:2}),s})()}];let C=(()=>{var o;class s{}return(o=s).\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,d.vQ,p.Bz.forChild(g)]}),s})()}}]);