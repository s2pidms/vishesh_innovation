"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6554],{46554:(C,i,o)=>{o.r(i),o.d(i,{ProductionModule:()=>p});var l=o(96814),a=o(1076),n=o(65879),r=o(2742),d=o(71567);function h(t,y){if(1&t&&n._UZ(0,"app-custom-menu-header",1),2&t){const s=n.oxw();n.Q6J("menuData",s.menuData)}}const u=[{path:"",component:(()=>{class t{constructor(s,e){this.router=s,this.storageService=e,this.isReport=!1,this.menuData={homeDisplay:!0,homeUrl:"default/production/home",masterUrl:"/default/production/tabs/master-tabs",masterTitle:"Masters",masterDisplay:!0,transactionUrl:"/default/production/tabs/txn-tabs",transactionTitle:"Transactions",transactionDisplay:!0,reportUrl:"/default/production/tabs/reports-tabs",reportTitle:"Reports",reportDisplay:!0,title:"Production",type:null,subTitle:""}}ngOnInit(){this.isReport="reports"==this.router.url.split("/")[3];let s=this.storageService.get("menuTitle");s&&this.menuData.title!=s.title&&(this.menuData.title=s.title)}static#t=this.\u0275fac=function(e){return new(e||t)(n.Y36(a.F0),n.Y36(r.V1))};static#o=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-production"]],decls:2,vars:1,consts:[[3,"menuData",4,"ngIf"],[3,"menuData"]],template:function(e,f){1&e&&(n.YNc(0,h,1,1,"app-custom-menu-header",0),n._UZ(1,"router-outlet")),2&e&&n.Q6J("ngIf",!f.isReport)},dependencies:[l.O5,a.lC,d.i],encapsulation:2})}return t})(),children:[{path:"",redirectTo:"tabs",pathMatch:"full"},{path:"tabs",loadChildren:()=>o.e(9255).then(o.bind(o,59255)).then(t=>t.TabsModule)},{path:"home",loadChildren:()=>Promise.all([o.e(8009),o.e(8722)]).then(o.bind(o,28722)).then(t=>t.HomeModule)},{path:"master",loadChildren:()=>o.e(1094).then(o.bind(o,81094)).then(t=>t.MasterModule)},{path:"transactions",loadChildren:()=>o.e(8608).then(o.bind(o,28608)).then(t=>t.TransactionsModule)},{path:"reports",loadChildren:()=>o.e(5686).then(o.bind(o,15686)).then(t=>t.ReportsModule)}]}];let c=(()=>{class t{static#t=this.\u0275fac=function(e){return new(e||t)};static#o=this.\u0275mod=n.oAB({type:t});static#n=this.\u0275inj=n.cJS({imports:[a.Bz.forChild(u),a.Bz]})}return t})();var m=o(56208);let p=(()=>{class t{static#t=this.\u0275fac=function(e){return new(e||t)};static#o=this.\u0275mod=n.oAB({type:t});static#n=this.\u0275inj=n.cJS({imports:[l.ez,c,m.m]})}return t})()}}]);