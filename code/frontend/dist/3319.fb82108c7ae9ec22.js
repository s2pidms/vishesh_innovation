"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3319],{83319:(N,T,c)=>{c.r(T),c.d(T,{TabsModule:()=>A});var p=c(1076),m=c(25116),e=c(65879),l=c(99328),h=c(88354),b=c(7019);const v=function(a){return{cards:a,noOfCards:4,cardClass:"masterCard"}};let C=(()=>{var a;class o{constructor(t,s,i,n,r,u){this.menuTitleService=t,this.appGlobalService=s,this.subModulesService=i,this.spinner=n,this.router=r,this.storageService=u,this.title="",this.menuItemId="",this.cards=[],this.user={}}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll(),this.menuTitleService.set({title:`${this.title} - Masters`,subTitle:null,type:null}),this.user=this.storageService.get("IDMSAUser").name}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:m.Cv.MASTER}).subscribe(s=>{this.cards=s.rows;let i=4-this.cards.length;if(i>0)for(var n=0;n<i;n++)this.cards.push({displayName:"Place Holder",disabled:!0,url:null})}),this.spinner.hide()}navigateTo({url:t,disabled:s,displayName:i,_id:n}){let r={title:i,subTitle:null,type:null,subModuleId:n};this.storageService.set("menuTitle",r),s||(this.menuTitleService.set(r),this.router.navigate([t]))}}return(a=o).\u0275fac=function(t){return new(t||a)(e.Y36(l.Uh),e.Y36(l.P0),e.Y36(h.M5),e.Y36(l.V),e.Y36(p.F0),e.Y36(l.V1))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-master-tabs"]],decls:1,vars:3,consts:[[3,"data","dataChange"]],template:function(t,s){1&t&&(e.TgZ(0,"appTabCard",0),e.NdJ("dataChange",function(n){return s.navigateTo(n)}),e.qZA()),2&t&&e.Q6J("data",e.VKq(1,v,s.cards))},dependencies:[b.z],encapsulation:2}),o})();const g=function(a){return{cards:a,noOfCards:5,cardClass:"txnCard"}};let f=(()=>{var a;class o{constructor(t,s,i,n,r,u,Y){this.menuTitleService=t,this.appParameterService=s,this.appGlobalService=i,this.subModulesService=n,this.spinner=r,this.router=u,this.storageService=Y,this.title="",this.menuItemId="",this.cards=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.menuTitleService.set({title:`${this.title} - Transactions`,subTitle:null,type:null}),this.getAll(),this.getAppParameterByCode()}getAppParameterByCode(){this.spinner.show(),this.appParameterService.getAppParameterValueByCode("ENABLE_DIRECT_TAX_INVOICE").subscribe(t=>{if("Yes"!=t.appParameterValue)for(let s=0;s<this.cards.length;s++)"Direct Tax Invoice"==this.cards[s].title&&this.cards.splice(s,1);this.spinner.hide()})}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:m.Cv.TRANSACTION}).subscribe(s=>{this.cards=s.rows;let i=5-this.cards.length;if(i>0)for(var n=0;n<i;n++)this.cards.push({displayName:"Place Holder",disabled:!0,url:null})}),this.spinner.hide()}navigateTo({url:t,disabled:s,displayName:i,_id:n}){let r={title:i,subTitle:null,type:null,subModuleId:n};this.storageService.set("menuTitle",r),s||(this.menuTitleService.set(r),this.router.navigate([t]))}}return(a=o).\u0275fac=function(t){return new(t||a)(e.Y36(l.Uh),e.Y36(h.AN),e.Y36(l.P0),e.Y36(h.M5),e.Y36(l.V),e.Y36(p.F0),e.Y36(l.V1))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-transactions-tabs"]],decls:1,vars:3,consts:[[3,"data","dataChange"]],template:function(t,s){1&t&&(e.TgZ(0,"appTabCard",0),e.NdJ("dataChange",function(n){return s.navigateTo(n)}),e.qZA()),2&t&&e.Q6J("data",e.VKq(1,g,s.cards))},dependencies:[b.z],encapsulation:2}),o})();const I=function(a){return{cards:a,noOfCards:5,cardClass:"reportCard"}};let S=(()=>{var a;class o{constructor(t,s,i,n,r,u){this.menuTitleService=t,this.appGlobalService=s,this.subModulesService=i,this.spinner=n,this.router=r,this.storageService=u,this.title="",this.menuItemId="",this.cards=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll(),this.menuTitleService.set({title:`${this.title} - Reports`,subTitle:null,type:null})}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:m.Cv.REPORT}).subscribe(s=>{this.cards=s.rows;let i=5-this.cards.length;if(i>0)for(var n=0;n<i;n++)this.cards.push({displayName:"Place Holder",disabled:!0,url:null})}),this.spinner.hide()}navigateTo({url:t,disabled:s,displayName:i,_id:n}){this.storageService.set("menuTitle",{title:i,subTitle:null,type:null,subModuleId:n}),s||window.open(`${window.location.origin}#/${t}`,"_blank")}}return(a=o).\u0275fac=function(t){return new(t||a)(e.Y36(l.Uh),e.Y36(l.P0),e.Y36(h.M5),e.Y36(l.V),e.Y36(p.F0),e.Y36(l.V1))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-reports-tabs"]],decls:1,vars:3,consts:[[3,"data","dataChange"]],template:function(t,s){1&t&&(e.TgZ(0,"appTabCard",0),e.NdJ("dataChange",function(n){return s.navigateTo(n)}),e.qZA()),2&t&&e.Q6J("data",e.VKq(1,I,s.cards))},dependencies:[b.z],encapsulation:2}),o})();var y=c(56208);const M=[{path:"",redirectTo:"master-tabs",pathMatch:"full"},{path:"master-tabs",component:C},{path:"txn-tabs",component:f},{path:"reports-tabs",component:S}];let A=(()=>{var a;class o{}return(a=o).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[p.Bz.forChild(M),y.m]}),o})()}}]);