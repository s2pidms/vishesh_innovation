"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5732],{35732:(p,m,t)=>{t.r(m),t.d(m,{SecurityMasterModule:()=>C});var h=t(96814),c=t(1076),u=t(25116),e=t(65879),a=t(99328),g=t(88354);function v(s,S){if(1&s){const n=e.EpF();e.TgZ(0,"div",5)(1,"div",6),e.NdJ("click",function(){const l=e.CHM(n).$implicit,o=e.oxw();return e.KtG(o.navigateTo(l.url,l.disabled,l.displayName))}),e.TgZ(2,"div",7)(3,"h5",8),e._uU(4),e.qZA()()()()}if(2&s){const n=S.$implicit;e.xp6(1),e.Q6J("ngClass",n.disabled?"disabled":""),e.xp6(3),e.Oqu(n.displayName)}}let M=(()=>{class s{constructor(n,i,d,l,o,r){this.menuTitleService=n,this.appGlobalService=i,this.subModulesService=d,this.spinner=l,this.storageService=o,this.router=r,this.title="",this.menuItemId="",this.cards={},this.cardsData=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll()}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:u.Cv.MASTER}).subscribe(i=>{this.cards=i?.rows.find(o=>"Security Master"==o.title),this.cardsData=this.cards.items.sort((o,r)=>o.order-r.order);let d=3-this.cards.items.length;if(d>0)for(var l=0;l<d;l++)this.cards.items.push({displayName:"Place Holder",disabled:!0,url:null});this.menuTitleService.set({title:`${this.cards.displayName}`,subTitle:null,type:null,subModuleId:this.cards._id})}),this.spinner.hide()}navigateTo(n,i,d){let l={title:d,subTitle:null,type:null,subModuleId:this.cards._id};this.storageService.set("menuTitle",l),i||(this.menuTitleService.set(l),this.router.navigate([n]))}static#t=this.\u0275fac=function(i){return new(i||s)(e.Y36(a.Uh),e.Y36(a.P0),e.Y36(g.M5),e.Y36(a.V),e.Y36(a.V1),e.Y36(c.F0))};static#s=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-security-master"]],decls:5,vars:1,consts:[[1,"row","tablePage",2,"min-height","47rem"],[1,"col-md-11","table-body","shadow-none"],[1,"container-fluid","tabs-card-page"],[1,"row","row-cols-1","row-cols-md-3"],["class","col d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center"],[1,"card","masterCard",3,"ngClass","click"],[1,"card-body","d-flex","align-content-center"],[1,"card-title","align-self-center"]],template:function(i,d){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,v,5,2,"div",4),e.qZA()()()()),2&i&&(e.xp6(4),e.Q6J("ngForOf",d.cardsData))},dependencies:[h.mk,h.sg],encapsulation:2})}return s})();var f=t(56208);const y=[{path:"tab_list",component:M},{path:"user",loadChildren:()=>Promise.all([t.e(5317),t.e(4732)]).then(t.bind(t,44732)).then(s=>s.UserModule)},{path:"role",loadChildren:()=>Promise.all([t.e(5317),t.e(729)]).then(t.bind(t,60729)).then(s=>s.RoleModule)},{path:"menu-item",loadChildren:()=>t.e(6025).then(t.bind(t,96025)).then(s=>s.MenuItemModule)},{path:"sub_module_management",loadChildren:()=>t.e(1956).then(t.bind(t,1956)).then(s=>s.SubModuleManagementModule)},{path:"submodule_permissions",loadChildren:()=>t.e(4035).then(t.bind(t,44035)).then(s=>s.SubmodulePermissionsModule)},{path:"mail_configuration",loadChildren:()=>Promise.all([t.e(5317),t.e(7226)]).then(t.bind(t,77226)).then(s=>s.MailConfigurationModule)},{path:"mail_trigger",loadChildren:()=>Promise.all([t.e(5317),t.e(4098)]).then(t.bind(t,4098)).then(s=>s.MailTriggerModule)},{path:"card_managements",loadChildren:()=>t.e(2245).then(t.bind(t,42245)).then(s=>s.CardManagementsModule)}];let C=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#s=this.\u0275mod=e.oAB({type:s});static#e=this.\u0275inj=e.cJS({imports:[h.ez,c.Bz.forChild(y),f.m]})}return s})()}}]);