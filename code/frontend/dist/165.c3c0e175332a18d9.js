"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[165],{40165:(T,l,t)=>{t.r(l),t.d(l,{SalesModule:()=>p});var i=t(96814),o=t(1076),e=t(65879),h=t(99328),r=t(71567);function d(s,C){if(1&s&&e._UZ(0,"app-custom-menu-header",1),2&s){const n=e.oxw();e.Q6J("menuData",n.menuData)}}let m=(()=>{class s{constructor(n,a){this.router=n,this.storageService=a,this.isReport=!1,this.menuData={homeDisplay:!0,homeUrl:"default/sales/home",masterUrl:"/default/sales/tabs/master-tabs",masterTitle:"Masters",masterDisplay:!0,transactionUrl:"/default/sales/tabs/txn-tabs",transactionTitle:"Transactions",transactionDisplay:!0,reportUrl:"/default/sales/tabs/reports-tabs",reportTitle:"Reports",reportDisplay:!0,title:"Sales",type:null,subTitle:""}}ngOnInit(){this.isReport="reports"==this.router.url.split("/")[3];let n=this.storageService.get("menuTitle");n&&this.menuData.title!=n.title&&(this.menuData.title=n.title)}static#t=this.\u0275fac=function(a){return new(a||s)(e.Y36(o.F0),e.Y36(h.V1))};static#s=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-sales"]],decls:3,vars:1,consts:[[3,"menuData",4,"ngIf"],[3,"menuData"]],template:function(a,f){1&a&&(e.YNc(0,d,1,1,"app-custom-menu-header",0),e.TgZ(1,"div"),e._UZ(2,"router-outlet"),e.qZA()),2&a&&e.Q6J("ngIf",!f.isReport)},dependencies:[i.O5,o.lC,r.i],encapsulation:2})}return s})();var u=t(56208);const c=[{path:"",component:m,children:[{path:"",redirectTo:"tabs",pathMatch:"full"},{path:"tabs",loadChildren:()=>t.e(3319).then(t.bind(t,83319)).then(s=>s.TabsModule)},{path:"home",loadChildren:()=>Promise.all([t.e(8009),t.e(2468)]).then(t.bind(t,72468)).then(s=>s.HomeModule)},{path:"master",loadChildren:()=>t.e(6022).then(t.bind(t,96022)).then(s=>s.MasterModule)},{path:"transactions",loadChildren:()=>t.e(2676).then(t.bind(t,32676)).then(s=>s.TransactionsModule)},{path:"reports",loadChildren:()=>t.e(4171).then(t.bind(t,54171)).then(s=>s.ReportsModule)}]}];let p=(()=>{class s{static#t=this.\u0275fac=function(a){return new(a||s)};static#s=this.\u0275mod=e.oAB({type:s});static#e=this.\u0275inj=e.cJS({imports:[i.ez,o.Bz.forChild(c),u.m]})}return s})()}}]);