"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7210],{17210:(C,d,o)=>{o.r(d),o.d(d,{StoresModule:()=>S});var i=o(96814),l=o(1076),s=o(65879),m=o(2742),u=o(71567);function h(t,n){if(1&t&&s._UZ(0,"app-custom-menu-header",1),2&t){const a=s.oxw();s.Q6J("menuData",a.menuData)}}const c=[{path:"",component:(()=>{var t;class n{constructor(e,r){this.router=e,this.storageService=r,this.isReport=!1,this.menuData={homeDisplay:!0,homeUrl:"default/stores/home",masterUrl:"/default/stores/tabs/master-tabs",masterTitle:"Masters",masterDisplay:!0,transactionUrl:"/default/stores/tabs/txn-tabs",transactionTitle:"Transactions",transactionDisplay:!0,reportUrl:"/default/stores/tabs/reports-tabs",reportTitle:"Reports",reportDisplay:!0,title:"Stores",type:null,subTitle:""}}ngOnInit(){this.isReport="reports"==this.router.url.split("/")[3];let e=this.storageService.get("menuTitle");e&&this.menuData.title!=e.title&&(this.menuData.title=e.title)}}return(t=n).\u0275fac=function(e){return new(e||t)(s.Y36(l.F0),s.Y36(m.V1))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-stores"]],decls:2,vars:1,consts:[[3,"menuData",4,"ngIf"],[3,"menuData"]],template:function(e,r){1&e&&(s.YNc(0,h,1,1,"app-custom-menu-header",0),s._UZ(1,"router-outlet")),2&e&&s.Q6J("ngIf",!r.isReport)},dependencies:[i.O5,l.lC,u.i],encapsulation:2}),n})(),children:[{path:"",redirectTo:"tabs",pathMatch:"full"},{path:"tabs",loadChildren:()=>o.e(7811).then(o.bind(o,47811)).then(t=>t.TabsModule)},{path:"home",loadChildren:()=>Promise.all([o.e(8009),o.e(1061)]).then(o.bind(o,41061)).then(t=>t.HomeModule)},{path:"master",loadChildren:()=>o.e(3105).then(o.bind(o,73105)).then(t=>t.MasterModule)},{path:"transactions",loadChildren:()=>o.e(3427).then(o.bind(o,53427)).then(t=>t.TransactionsModule)},{path:"reports",loadChildren:()=>o.e(6979).then(o.bind(o,36979)).then(t=>t.ReportsModule)}]}];let p=(()=>{var t;class n{}return(t=n).\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[l.Bz.forChild(c),l.Bz]}),n})();var f=o(56208);let S=(()=>{var t;class n{}return(t=n).\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[i.ez,p,f.m]}),n})()}}]);