"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3299],{13299:(Y,m,o)=>{o.r(m),o.d(m,{TabsModule:()=>M});var b=o(96814),d=o(1076),u=o(25116),t=o(65879),r=o(99328),h=o(88354),p=o(7019);const T=function(a){return{cards:a,noOfCards:4,cardClass:"masterCard"}};let v=(()=>{class a{constructor(i,e,s,n,l,c){this.menuTitleService=i,this.appGlobalService=e,this.subModulesService=s,this.spinner=n,this.router=l,this.storageService=c,this.title="",this.menuItemId="",this.cards=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll(),this.menuTitleService.set({title:`${this.title} - Masters`,subTitle:null,type:null})}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:u.Cv.MASTER}).subscribe(e=>{this.cards=e.rows;let s=3-this.cards.length;if(s>0)for(var n=0;n<s;n++)this.cards.push({displayName:"Place Holder",disabled:!0,url:null})}),this.spinner.hide()}navigateTo({url:i,disabled:e,displayName:s,_id:n}){let l={title:s,subTitle:null,type:null,subModuleId:n};this.storageService.set("menuTitle",l),e||(this.menuTitleService.set(l),this.router.navigate([i]))}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(r.Uh),t.Y36(r.P0),t.Y36(h.M5),t.Y36(r.V),t.Y36(d.F0),t.Y36(r.V1))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-master-tabs"]],decls:1,vars:3,consts:[[3,"data","dataChange"]],template:function(e,s){1&e&&(t.TgZ(0,"appTabCard",0),t.NdJ("dataChange",function(l){return s.navigateTo(l)}),t.qZA()),2&e&&t.Q6J("data",t.VKq(1,T,s.cards))},dependencies:[p.z],encapsulation:2})}return a})();const g=function(a){return{cards:a,noOfCards:3,cardClass:"txnCard"}};let C=(()=>{class a{constructor(i,e,s,n,l,c){this.menuTitleService=i,this.appGlobalService=e,this.subModulesService=s,this.spinner=n,this.router=l,this.storageService=c,this.title="",this.menuItemId="",this.cards=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll(),this.menuTitleService.set({title:`${this.title} - Transactions`,subTitle:null,type:null})}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:u.Cv.TRANSACTION}).subscribe(e=>{this.cards=e.rows;let s=3-this.cards.length;if(s>0)for(var n=0;n<s;n++)this.cards.push({displayName:"Place Holder",disabled:!0,url:null})}),this.spinner.hide()}navigateTo({url:i,disabled:e,displayName:s,_id:n}){let l={title:s,subTitle:null,type:null,subModuleId:n};this.storageService.set("menuTitle",l),e||(this.menuTitleService.set(l),this.router.navigate([i]))}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(r.Uh),t.Y36(r.P0),t.Y36(h.M5),t.Y36(r.V),t.Y36(d.F0),t.Y36(r.V1))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-transactions-tabs"]],decls:1,vars:3,consts:[[3,"data","dataChange"]],template:function(e,s){1&e&&(t.TgZ(0,"appTabCard",0),t.NdJ("dataChange",function(l){return s.navigateTo(l)}),t.qZA()),2&e&&t.Q6J("data",t.VKq(1,g,s.cards))},dependencies:[p.z],encapsulation:2})}return a})();const f=function(a){return{cards:a,noOfCards:5,cardClass:"reportCard"}};let I=(()=>{class a{constructor(i,e,s,n,l,c){this.storageService=i,this.menuTitleService=e,this.appGlobalService=s,this.subModulesService=n,this.spinner=l,this.router=c,this.title="",this.menuItemId="",this.cards=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll(),this.menuTitleService.set({title:`${this.title} - Reports`,subTitle:null,type:null})}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:u.Cv.REPORT}).subscribe(e=>{this.cards=e.rows;let s=5-this.cards.length;if(s>0)for(var n=0;n<s;n++)this.cards.push({displayName:"Place Holder",disabled:!0,url:null})}),this.spinner.hide()}navigateTo({url:i,disabled:e,displayName:s,_id:n}){this.storageService.set("menuTitle",{title:s,subTitle:null,type:null,subModuleId:n}),e||window.open(`${window.location.origin}#/${i}`,"_blank")}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(r.V1),t.Y36(r.Uh),t.Y36(r.P0),t.Y36(h.M5),t.Y36(r.V),t.Y36(d.F0))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-reports-tabs"]],decls:1,vars:3,consts:[[3,"data","dataChange"]],template:function(e,s){1&e&&(t.TgZ(0,"appTabCard",0),t.NdJ("dataChange",function(l){return s.navigateTo(l)}),t.qZA()),2&e&&t.Q6J("data",t.VKq(1,f,s.cards))},dependencies:[p.z],encapsulation:2})}return a})();var S=o(56208);const y=[{path:"",redirectTo:"master-tabs",pathMatch:"full"},{path:"master-tabs",component:v},{path:"txn-tabs",component:C},{path:"reports-tabs",component:I}];let M=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#e=this.\u0275mod=t.oAB({type:a});static#s=this.\u0275inj=t.cJS({imports:[b.ez,d.Bz.forChild(y),S.m]})}return a})()}}]);