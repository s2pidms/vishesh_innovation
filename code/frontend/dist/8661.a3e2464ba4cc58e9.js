"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8661],{98661:(H,d,n)=>{n.r(d),n.d(d,{HRModule:()=>f});var i=n(96814),l=n(1076),e=n(65879),m=n(99328),h=n(71567);function u(t,s){if(1&t&&e._UZ(0,"app-custom-menu-header",1),2&t){const a=e.oxw();e.Q6J("menuData",a.menuData)}}const c=[{path:"",component:(()=>{var t;class s{constructor(o,r){this.router=o,this.storageService=r,this.isReport=!1,this.menuData={homeDisplay:!0,homeUrl:"default/HR/home",masterUrl:"/default/HR/tabs/master-tabs",masterTitle:"Masters",masterDisplay:!0,transactionUrl:"/default/HR/tabs/txn-tabs",transactionTitle:"Transactions",transactionDisplay:!0,reportUrl:"/default/HR/tabs/reports-tabs",reportTitle:"Reports",reportDisplay:!0,title:"HR",type:null,subTitle:""}}ngOnInit(){this.isReport="reports"==this.router.url.split("/")[3];let o=this.storageService.get("menuTitle");o&&this.menuData.title!=o.title&&(this.menuData.title=o.title)}}return(t=s).\u0275fac=function(o){return new(o||t)(e.Y36(l.F0),e.Y36(m.V1))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-hr-admin"]],decls:2,vars:1,consts:[[3,"menuData",4,"ngIf"],[3,"menuData"]],template:function(o,r){1&o&&(e.YNc(0,u,1,1,"app-custom-menu-header",0),e._UZ(1,"router-outlet")),2&o&&e.Q6J("ngIf",!r.isReport)},dependencies:[i.O5,l.lC,h.i],encapsulation:2}),s})(),children:[{path:"",redirectTo:"tabs",pathMatch:"full"},{path:"tabs",loadChildren:()=>n.e(8259).then(n.bind(n,98259)).then(t=>t.TabsModule)},{path:"home",loadChildren:()=>Promise.all([n.e(8009),n.e(5666)]).then(n.bind(n,25666)).then(t=>t.HomeModule)},{path:"master",loadChildren:()=>n.e(4987).then(n.bind(n,14987)).then(t=>t.MasterModule)},{path:"transactions",loadChildren:()=>n.e(1483).then(n.bind(n,41483)).then(t=>t.TransactionsModule)},{path:"reports",loadChildren:()=>n.e(7629).then(n.bind(n,87629)).then(t=>t.ReportsModule)}]}];let p=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(c),l.Bz]}),s})();var R=n(56208);let f=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.ez,p,R.m]}),s})()}}]);