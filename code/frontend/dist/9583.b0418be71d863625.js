"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9583],{69583:(A,g,l)=>{l.r(g),l.d(g,{HomeModule:()=>C});var h=l(96814),c=l(1076),m=l(43818),t=l(65879),u=l(98977),_=l(88354),a=l(74661),r=l(88059);function v(n,p){1&n&&t._UZ(0,"i",26)}function Z(n,p){1&n&&t._UZ(0,"i",27)}function U(n,p){if(1&n&&(t.TgZ(0,"tr")(1,"td",22),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"div",23),t.YNc(13,v,1,0,"i",24),t.YNc(14,Z,1,0,"i",25),t.qZA()(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA()()),2&n){const e=p.$implicit;t.xp6(2),t.Oqu(null==e?null:e.name),t.xp6(2),t.Oqu(null==e?null:e.userType),t.xp6(2),t.Oqu(null==e?null:e.role),t.xp6(2),t.Oqu(null==e?null:e.userEmail),t.xp6(2),t.Oqu(null==e?null:e.status),t.xp6(3),t.Q6J("ngIf","Yes"==e.isLoggedIn),t.xp6(1),t.Q6J("ngIf","No"==e.isLoggedIn),t.xp6(2),t.Oqu(null==e?null:e.lastLoggedIn),t.xp6(2),t.Oqu(null==e?null:e.userIP)}}const f=function(n,p,e,o){return{page:n,pageSize:p,collection:e,search:o,excelDisplay:"none"}};let T=(()=>{class n{constructor(e,o,s,d,i){this.menuTitleService=e,this.service=o,this.spinner=s,this.setting=d,this.appGlobalService=i,this.title="",this.page=1,this.pageSize=10,this.collection=0,this.search="",this.tableData=[],this.column="lastLoggedIn",this.direction=-1,this.dashBoardData={activeUsers:0,activeRoles:0,totalAdminUsers:0,loggedInUsers:0,totalCompanyLocations:0}}ngOnInit(){this.getAll(),this.getAllDashboardData(),this.title=this.appGlobalService.moduleName,this.menuTitleService.set({title:`${this.title} Overview`,subTitle:null,type:null})}trackByFn(e,o){return o?._id}onSort({column:e,direction:o}){this.headers.forEach(s=>{s.sortable!==e&&(s.direction="")}),this.column=e,this.direction="asc"==o?1:-1,this.getAll()}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"EXCEL":this.getAll(!0);break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1){this.spinner.show(),this.service.getAllReport({page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e}).subscribe(s=>{this.tableData=s.rows,this.collection=s.count,this.spinner.hide()})}getAllDashboardData(){this.setting.getAllSetting({}).subscribe(e=>{this.dashBoardData=e})}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(u.Uh),t.Y36(_.KD),t.Y36(u.V),t.Y36(a.s),t.Y36(u.P0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],viewQuery:function(o,s){if(1&o&&t.Gf(m.j,5),2&o){let d;t.iGM(d=t.CRH())&&(s.headers=d)}},decls:62,vars:13,consts:[[1,"container-fluid","text-center","dashboard-page"],[1,"row","mt-5","mx-1"],[1,"col"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"row","mt-3","mx-1"],[3,"data","dataChange"],[1,"table-responsive"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","name",1,"text-start",3,"sort"],["sortable","userType",3,"sort"],["sortable","role",3,"sort"],["sortable","userEmail",3,"sort"],["sortable","status",3,"sort"],["sortable","isLoggedIn",3,"sort"],["sortable","lastLoggedIn",3,"sort"],["sortable","userIP",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,""],["class","fa fa-circle text-success","aria-hidden","true",4,"ngIf"],["class","fa fa-circle text-danger","aria-hidden","true",4,"ngIf"],["aria-hidden","true",1,"fa","fa-circle","text-success"],["aria-hidden","true",1,"fa","fa-circle","text-danger"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h5",5),t._uU(6,"Active Users"),t.qZA(),t.TgZ(7,"p",6),t._uU(8),t.qZA()()()(),t.TgZ(9,"div",2)(10,"div",3)(11,"div",4)(12,"h5",5),t._uU(13,"Active Roles"),t.qZA(),t.TgZ(14,"p",6),t._uU(15),t.qZA()()()(),t.TgZ(16,"div",2)(17,"div",3)(18,"div",4)(19,"h5",5),t._uU(20,"Total Admin Users"),t.qZA(),t.TgZ(21,"p",6),t._uU(22),t.qZA()()()(),t.TgZ(23,"div",2)(24,"div",3)(25,"div",4)(26,"h5",5),t._uU(27,"Logged In Users"),t.qZA(),t.TgZ(28,"p",6),t._uU(29),t.qZA()()()(),t.TgZ(30,"div",2)(31,"div",3)(32,"div",4)(33,"h5",5),t._uU(34,"Total Company Locations"),t.qZA(),t.TgZ(35,"p",6),t._uU(36),t.qZA()()()()(),t.TgZ(37,"div",7)(38,"div",2)(39,"app-setting-header",8),t.NdJ("dataChange",function(i){return s.eventHeader(i)}),t.qZA(),t.TgZ(40,"div",9)(41,"table",10)(42,"thead",11)(43,"tr",12)(44,"th",13),t.NdJ("sort",function(i){return s.onSort(i)}),t._uU(45,"User Name"),t.qZA(),t.TgZ(46,"th",14),t.NdJ("sort",function(i){return s.onSort(i)}),t._uU(47,"User type"),t.qZA(),t.TgZ(48,"th",15),t.NdJ("sort",function(i){return s.onSort(i)}),t._uU(49,"Role"),t.qZA(),t.TgZ(50,"th",16),t.NdJ("sort",function(i){return s.onSort(i)}),t._uU(51,"Email"),t.qZA(),t.TgZ(52,"th",17),t.NdJ("sort",function(i){return s.onSort(i)}),t._uU(53,"Status"),t.qZA(),t.TgZ(54,"th",18),t.NdJ("sort",function(i){return s.onSort(i)}),t._uU(55,"Logged In status"),t.qZA(),t.TgZ(56,"th",19),t.NdJ("sort",function(i){return s.onSort(i)}),t._uU(57,"Last Logged In"),t.qZA(),t.TgZ(58,"th",20),t.NdJ("sort",function(i){return s.onSort(i)}),t._uU(59,"IP Address"),t.qZA()()(),t.TgZ(60,"tbody"),t.YNc(61,U,19,9,"tr",21),t.qZA()()()()()()),2&o&&(t.xp6(8),t.hij(" ",s.dashBoardData.activeUsers," "),t.xp6(7),t.hij(" ",s.dashBoardData.activeRoles," "),t.xp6(7),t.hij(" ",s.dashBoardData.totalAdminUsers," "),t.xp6(7),t.hij(" ",s.dashBoardData.loggedInUsers," "),t.xp6(7),t.hij(" ",s.dashBoardData.totalCompanyLocations," "),t.xp6(3),t.Q6J("data",t.l5B(8,f,s.page,s.pageSize,s.collection,s.search)),t.xp6(22),t.Q6J("ngForOf",s.tableData)("ngForTrackBy",s.trackByFn))},dependencies:[h.sg,h.O5,r.P,m.j],encapsulation:2})}return n})();var b=l(34702),P=l(56208);const y=[{path:"",component:T}];let C=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#s=this.\u0275inj=t.cJS({imports:[h.ez,b.vQ,c.Bz.forChild(y),P.m]})}return n})()},74661:(A,g,l)=>{l.d(g,{s:()=>t});var h=l(37398),c=l(65879),m=l(98977);let t=(()=>{class u{constructor(a){this.http=a,this.routes={salesPath:"/dashboard/sales",businessLeadsPath:"/dashboard/businessLeads",hrPath:"/dashboard/hr",purchasePath:"/dashboard/purchase",productionPath:"/dashboard/production",maintenancePath:"/dashboard/maintenance",qualityPath:"/dashboard/quality",dispatchPath:"/dashboard/dispatch",storePath:"/dashboard/stores",settingPath:"/dashboard/setting",supportPath:"/dashboard/support",planningPath:"/dashboard/planning"}}getAllBusinessLeads(a){return this.http.get(this.routes.businessLeadsPath,a).pipe((0,h.U)(r=>r))}getAllHr(a){return this.http.get(this.routes.hrPath,a).pipe((0,h.U)(r=>r))}getAllSales(a){return this.http.get(this.routes.salesPath,a).pipe((0,h.U)(r=>r))}getAllPurchase(a){return this.http.get(this.routes.purchasePath,a).pipe((0,h.U)(r=>r))}getAllProduction(a){return this.http.get(this.routes.productionPath,a).pipe((0,h.U)(r=>r))}getAllMaintenance(a){return this.http.get(this.routes.maintenancePath,a).pipe((0,h.U)(r=>r))}getAllQuality(a){return this.http.get(this.routes.qualityPath,a).pipe((0,h.U)(r=>r))}getAllDispatch(a){return this.http.get(this.routes.dispatchPath,a).pipe((0,h.U)(r=>r))}getAllStores(a){return this.http.get(this.routes.storePath,a).pipe((0,h.U)(r=>r))}getAllSetting(a){return this.http.get(this.routes.settingPath,a).pipe((0,h.U)(r=>r))}getAllSupport(a){return this.http.get(this.routes.supportPath,a).pipe((0,h.U)(r=>r))}getAllPlanning(a){return this.http.get(this.routes.planningPath,a).pipe((0,h.U)(r=>r))}static#t=this.\u0275fac=function(r){return new(r||u)(c.LFG(m.sM))};static#e=this.\u0275prov=c.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()}}]);