"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5925],{5925:(C,r,t)=>{t.r(r),t.d(r,{PlanningModule:()=>f});var d=t(96814),s=t(1076),o=t(65879),m=t(98977),u=t(71567);function h(n,e){if(1&n&&o._UZ(0,"app-custom-menu-header",1),2&n){const l=o.oxw();o.Q6J("menuData",l.menuData)}}const p=[{path:"",component:(()=>{var n;class e{constructor(a,i){this.router=a,this.storageService=i,this.isReport=!1,this.menuData={homeDisplay:!0,homeUrl:"default/planning/home",masterUrl:"/default/planning/tabs/master-tabs",masterTitle:"Masters",masterDisplay:!0,transactionUrl:"/default/planning/tabs/txn-tabs",transactionTitle:"Transactions",transactionDisplay:!0,reportUrl:"/default/planning/tabs/reports-tabs",reportTitle:"Reports",reportDisplay:!0,title:"Planning",type:null,subTitle:""}}ngOnInit(){this.isReport="reports"==this.router.url.split("/")[3];let a=this.storageService.get("menuTitle");a&&this.menuData.title!=a.title&&(this.menuData.title=a.title)}}return(n=e).\u0275fac=function(a){return new(a||n)(o.Y36(s.F0),o.Y36(m.V1))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-planning"]],decls:2,vars:1,consts:[[3,"menuData",4,"ngIf"],[3,"menuData"]],template:function(a,i){1&a&&(o.YNc(0,h,1,1,"app-custom-menu-header",0),o._UZ(1,"router-outlet")),2&a&&o.Q6J("ngIf",!i.isReport)},dependencies:[d.O5,u.i,s.lC],encapsulation:2}),e})(),children:[{path:"",redirectTo:"tabs",pathMatch:"full"},{path:"tabs",loadChildren:()=>t.e(7754).then(t.bind(t,17754)).then(n=>n.TabsModule)},{path:"home",loadChildren:()=>Promise.all([t.e(8009),t.e(5447)]).then(t.bind(t,55447)).then(n=>n.HomeModule)},{path:"master",loadChildren:()=>t.e(3882).then(t.bind(t,43882)).then(n=>n.MasterModule)},{path:"transactions",loadChildren:()=>t.e(8681).then(t.bind(t,98681)).then(n=>n.TransactionsModule)},{path:"reports",loadChildren:()=>t.e(1577).then(t.bind(t,11577)).then(n=>n.ReportsModule)}]}];let c=(()=>{var n;class e{}return(n=e).\u0275fac=function(a){return new(a||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[s.Bz.forChild(p),s.Bz]}),e})();var g=t(56208);let f=(()=>{var n;class e{}return(n=e).\u0275fac=function(a){return new(a||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[d.ez,g.m,c]}),e})()}}]);