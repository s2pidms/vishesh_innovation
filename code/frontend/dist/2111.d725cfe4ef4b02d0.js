"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2111],{42111:(M,u,e)=>{e.r(u),e.d(u,{PurchaseModule:()=>C});var h=e(96814),l=e(1076),n=e(65879),c=e(2742),d=e(71567);function i(t,a){if(1&t&&n._UZ(0,"app-custom-menu-header",1),2&t){const o=n.oxw();n.Q6J("menuData",o.menuData)}}const m=[{path:"",component:(()=>{var t;class a{constructor(s,r){this.router=s,this.storageService=r,this.isReport=!1,this.menuData={homeDisplay:!0,homeUrl:"default/purchase/home",masterUrl:"/default/purchase/tabs/master-tabs",masterTitle:"Masters",masterDisplay:!0,transactionUrl:"/default/purchase/tabs/txn-tabs",transactionTitle:"Transactions",transactionDisplay:!0,reportUrl:"/default/purchase/tabs/reports-tabs",reportTitle:"Reports",reportDisplay:!0,title:"Purchase",type:null,subTitle:""}}ngOnInit(){this.isReport="reports"==this.router.url.split("/")[3];let s=this.storageService.get("menuTitle");s&&this.menuData.title!=s.title&&(this.menuData.title=s.title)}}return(t=a).\u0275fac=function(s){return new(s||t)(n.Y36(l.F0),n.Y36(c.V1))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-purchase"]],decls:2,vars:1,consts:[[3,"menuData",4,"ngIf"],[3,"menuData"]],template:function(s,r){1&s&&(n.YNc(0,i,1,1,"app-custom-menu-header",0),n._UZ(1,"router-outlet")),2&s&&n.Q6J("ngIf",!r.isReport)},dependencies:[h.O5,l.lC,d.i],encapsulation:2}),a})(),children:[{path:"",redirectTo:"tabs",pathMatch:"full"},{path:"tabs",loadChildren:()=>e.e(3299).then(e.bind(e,13299)).then(t=>t.TabsModule)},{path:"home",loadChildren:()=>Promise.all([e.e(8009),e.e(3646)]).then(e.bind(e,48093)).then(t=>t.HomeModule)},{path:"master",loadChildren:()=>e.e(404).then(e.bind(e,80404)).then(t=>t.MasterModule)},{path:"transactions",loadChildren:()=>e.e(8731).then(e.bind(e,88731)).then(t=>t.TransactionsModule)},{path:"reports",loadChildren:()=>e.e(9599).then(e.bind(e,89599)).then(t=>t.ReportsModule)}]}];let p=(()=>{var t;class a{}return(t=a).\u0275fac=function(s){return new(s||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[l.Bz.forChild(m),l.Bz]}),a})();var f=e(56208);let C=(()=>{var t;class a{}return(t=a).\u0275fac=function(s){return new(s||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[h.ez,p,f.m]}),a})()}}]);