"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3292],{3292:(C,u,n)=>{n.r(u),n.d(u,{AccountsModule:()=>A});var r=n(96814),l=n(1076),s=n(65879),d=n(99328),i=n(71567);function m(t,e){if(1&t&&s._UZ(0,"app-custom-menu-header",1),2&t){const a=s.oxw();s.Q6J("menuData",a.menuData)}}const h=[{path:"",component:(()=>{var t;class e{constructor(o,c){this.router=o,this.storageService=c,this.isReport=!1,this.menuData={homeDisplay:!0,homeUrl:"default/accounts/home",masterUrl:"/default/accounts/tabs/master-tabs",masterTitle:"Masters",masterDisplay:!0,transactionUrl:"/default/accounts/tabs/txn-tabs",transactionTitle:"Transactions",transactionDisplay:!0,reportUrl:"/default/accounts/tabs/reports-tabs",reportTitle:"Reports",reportDisplay:!0,title:"Accounts",type:null,subTitle:""}}ngOnInit(){this.isReport="reports"==this.router.url.split("/")[3];let o=this.storageService.get("menuTitle");o&&this.menuData.title!=o.title&&(this.menuData.title=o.title)}}return(t=e).\u0275fac=function(o){return new(o||t)(s.Y36(l.F0),s.Y36(d.V1))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-accounts"]],decls:2,vars:1,consts:[[3,"menuData",4,"ngIf"],[3,"menuData"]],template:function(o,c){1&o&&(s.YNc(0,m,1,1,"app-custom-menu-header",0),s._UZ(1,"router-outlet")),2&o&&s.Q6J("ngIf",!c.isReport)},dependencies:[r.O5,i.i,l.lC],encapsulation:2}),e})(),children:[{path:"",redirectTo:"tabs",pathMatch:"full"},{path:"tabs",loadChildren:()=>n.e(27).then(n.bind(n,40027)).then(t=>t.TabsModule)},{path:"home",loadChildren:()=>n.e(5738).then(n.bind(n,35738)).then(t=>t.HomeModule)},{path:"master",loadChildren:()=>n.e(2037).then(n.bind(n,32037)).then(t=>t.MasterModule)},{path:"transactions",loadChildren:()=>Promise.all([n.e(8592),n.e(6268)]).then(n.bind(n,66268)).then(t=>t.TransactionsModule)},{path:"reports",loadChildren:()=>n.e(4806).then(n.bind(n,51859)).then(t=>t.ReportsModule)}]}];let p=(()=>{var t;class e{}return(t=e).\u0275fac=function(o){return new(o||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[l.Bz.forChild(h),l.Bz]}),e})();var f=n(56208);let A=(()=>{var t;class e{}return(t=e).\u0275fac=function(o){return new(o||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[r.ez,f.m,p]}),e})()}}]);