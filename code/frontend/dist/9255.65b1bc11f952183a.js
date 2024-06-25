"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9255],{59255:(N,T,d)=>{d.r(T),d.d(T,{TabsModule:()=>A});var v=d(96814),p=d(1076),h=d(25116),t=d(65879),l=d(2742),m=d(39029),b=d(7019);const C=function(s){return{cards:s,noOfCards:3,cardClass:"masterCard"}};let g=(()=>{var s;class o{constructor(e,a,i,n,r,c){this.menuTitleService=e,this.appGlobalService=a,this.subModulesService=i,this.spinner=n,this.router=r,this.storageService=c,this.title="",this.menuItemId="",this.cards=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll(),this.menuTitleService.set({title:`${this.title} - Masters`,subTitle:null,type:null})}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:h.Cv.MASTER}).subscribe(a=>{this.cards=a.rows;let i=3-this.cards.length;if(i>0)for(var n=0;n<i;n++)this.cards.push({displayName:"Place Holder",disabled:!0,url:null})}),this.spinner.hide()}navigateTo({url:e,disabled:a,displayName:i,_id:n}){let r={title:i,subTitle:null,type:null,subModuleId:n};this.storageService.set("menuTitle",r),a||(this.menuTitleService.set(r),this.router.navigate([e]))}}return(s=o).\u0275fac=function(e){return new(e||s)(t.Y36(l.Uh),t.Y36(l.P0),t.Y36(m.M5),t.Y36(l.V),t.Y36(p.F0),t.Y36(l.V1))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-master-tabs"]],decls:1,vars:3,consts:[[3,"data","dataChange"]],template:function(e,a){1&e&&(t.TgZ(0,"appTabCard",0),t.NdJ("dataChange",function(n){return a.navigateTo(n)}),t.qZA()),2&e&&t.Q6J("data",t.VKq(1,C,a.cards))},dependencies:[b.z],encapsulation:2}),o})();const f=function(s){return{cards:s,noOfCards:4,cardClass:"txnCard"}};let I=(()=>{var s;class o{constructor(e,a,i,n,r,c){this.menuTitleService=e,this.appGlobalService=a,this.subModulesService=i,this.spinner=n,this.router=r,this.storageService=c,this.title="",this.menuItemId="",this.cards=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll(),this.menuTitleService.set({title:`${this.title} - Transactions`,subTitle:null,type:null})}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:h.Cv.TRANSACTION}).subscribe(a=>{this.cards=a.rows;let i=3-this.cards.length;if(i>0)for(var n=0;n<i;n++)this.cards.push({displayName:"Place Holder",disabled:!0,url:null})}),this.spinner.hide()}navigateTo({url:e,disabled:a,displayName:i,_id:n}){let r={title:i,subTitle:null,type:null,subModuleId:n};this.storageService.set("menuTitle",r),a||(this.menuTitleService.set(r),this.router.navigate([e]))}}return(s=o).\u0275fac=function(e){return new(e||s)(t.Y36(l.Uh),t.Y36(l.P0),t.Y36(m.M5),t.Y36(l.V),t.Y36(p.F0),t.Y36(l.V1))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-transactions-tabs"]],decls:1,vars:3,consts:[[3,"data","dataChange"]],template:function(e,a){1&e&&(t.TgZ(0,"appTabCard",0),t.NdJ("dataChange",function(n){return a.navigateTo(n)}),t.qZA()),2&e&&t.Q6J("data",t.VKq(1,f,a.cards))},dependencies:[b.z],encapsulation:2}),o})();const S=function(s){return{cards:s,noOfCards:4,cardClass:"reportCard"}};let y=(()=>{var s;class o{constructor(e,a,i,n,r,c){this.menuTitleService=e,this.appGlobalService=a,this.subModulesService=i,this.spinner=n,this.router=r,this.storageService=c,this.title="",this.menuItemId="",this.cards=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll(),this.menuTitleService.set({title:`${this.title} - Reports`,subTitle:null,type:null})}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:h.Cv.REPORT}).subscribe(a=>{this.cards=a.rows;let i=3-this.cards.length;if(i>0)for(var n=0;n<i;n++)this.cards.push({displayName:"Place Holder",disabled:!0,url:null})}),this.spinner.hide()}navigateTo({url:e,disabled:a,displayName:i,_id:n}){this.storageService.set("menuTitle",{title:i,subTitle:null,type:null,subModuleId:n}),a||window.open(`${window.location.origin}#/${e}`,"_blank")}}return(s=o).\u0275fac=function(e){return new(e||s)(t.Y36(l.Uh),t.Y36(l.P0),t.Y36(m.M5),t.Y36(l.V),t.Y36(p.F0),t.Y36(l.V1))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-reports-tabs"]],decls:1,vars:3,consts:[[3,"data","dataChange"]],template:function(e,a){1&e&&(t.TgZ(0,"appTabCard",0),t.NdJ("dataChange",function(n){return a.navigateTo(n)}),t.qZA()),2&e&&t.Q6J("data",t.VKq(1,S,a.cards))},dependencies:[b.z],encapsulation:2}),o})();var M=d(56208);const Y=[{path:"",redirectTo:"master-tabs",pathMatch:"full"},{path:"master-tabs",component:g},{path:"txn-tabs",component:I},{path:"reports-tabs",component:y}];let A=(()=>{var s;class o{}return(s=o).\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[v.ez,p.Bz.forChild(Y),M.m]}),o})()}}]);