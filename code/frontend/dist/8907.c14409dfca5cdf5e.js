"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8907],{78907:(T,h,s)=>{s.r(h),s.d(h,{BusinessLeadMasterModule:()=>M});var r=s(96814),u=s(1076),m=s(25116),t=s(65879),o=s(2742),v=s(88354);function p(e,y){if(1&e){const i=t.EpF();t.TgZ(0,"div",5)(1,"div",6),t.NdJ("click",function(){const l=t.CHM(i).$implicit,d=t.oxw();return t.KtG(d.navigateTo(l.url,l.disabled,l.displayName))}),t.TgZ(2,"div",7)(3,"h5",8),t._uU(4),t.qZA()()()()}if(2&e){const i=y.$implicit;t.xp6(1),t.Q6J("ngClass",i.disabled?"disabled":""),t.xp6(3),t.Oqu(i.displayName)}}let f=(()=>{class e{constructor(i,n,a,l,d,c){this.menuTitleService=i,this.appGlobalService=n,this.subModulesService=a,this.spinner=l,this.storageService=d,this.router=c,this.title="",this.menuItemId="",this.cards={},this.cardsData=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll()}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:m.Cv.MASTER}).subscribe(n=>{this.cards=n?.rows.find(d=>"Business Leads Master"==d.title),this.cardsData=this.cards.items.sort((d,c)=>d.order-c.order);let a=3-this.cards.items.length;if(a>0)for(var l=0;l<a;l++)this.cards.items.push({displayName:"Place Holder",disabled:!0,url:null});this.menuTitleService.set({title:`${this.cards.displayName}`,subTitle:null,type:null,subModuleId:this.cards._id})}),this.spinner.hide()}navigateTo(i,n,a){let l={title:a,subTitle:null,type:null,subModuleId:this.cards._id};this.storageService.set("menuTitle",l),n||(this.menuTitleService.set(l),this.router.navigate([i]))}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(o.Uh),t.Y36(o.P0),t.Y36(v.M5),t.Y36(o.V),t.Y36(o.V1),t.Y36(u.F0))};static#s=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-business-lead-master"]],decls:5,vars:1,consts:[[1,"row","tablePage",2,"min-height","47rem"],[1,"col-md-11","table-body","shadow-none"],[1,"container-fluid","tabs-card-page"],[1,"row","row-cols-1","row-cols-md-3"],["class","col d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center"],[1,"card","masterCard",3,"ngClass","click"],[1,"card-body","d-flex","align-content-center"],[1,"card-title","align-self-center"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,p,5,2,"div",4),t.qZA()()()()),2&n&&(t.xp6(4),t.Q6J("ngForOf",a.cardsData))},dependencies:[r.mk,r.sg],encapsulation:2})}return e})();var g=s(56208);const C=[{path:"tab_list",component:f},{path:"questioniers",loadChildren:()=>Promise.all([s.e(3383),s.e(8212),s.e(8955)]).then(s.bind(s,38955)).then(e=>e.QuestioniersModule)},{path:"checklist_particulars",loadChildren:()=>Promise.all([s.e(3383),s.e(8212),s.e(5158)]).then(s.bind(s,85158)).then(e=>e.ChecklistParticularsModule)},{path:"d_sku_attributes",loadChildren:()=>s.e(1050).then(s.bind(s,31050)).then(e=>e.DSkuAttributesModule)}];let M=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#s=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[r.ez,u.Bz.forChild(C),g.m]})}return e})()}}]);