"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2872],{72872:(b,h,r)=>{r.r(h),r.d(h,{SettingMasterModule:()=>M});var u=r(96814),p=r(1076),g=r(25116),t=r(65879),c=r(2742),v=r(31384);function f(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",5)(1,"div",6),t.NdJ("click",function(){const i=t.CHM(n).$implicit,a=t.oxw();return t.KtG(a.navigateTo(i.url,i.disabled,i.displayName))}),t.TgZ(2,"div",7)(3,"h5",8),t._uU(4),t.qZA()()()()}if(2&e){const n=o.$implicit;t.xp6(1),t.Q6J("ngClass",n.disabled?"disabled":""),t.xp6(3),t.Oqu(n.displayName)}}const S=[{path:"tab_list",component:(()=>{var e;class o{constructor(s,l,i,a,d,m){this.menuTitleService=s,this.appGlobalService=l,this.subModulesService=i,this.spinner=a,this.storageService=d,this.router=m,this.title="",this.menuItemId="",this.cards={},this.cardsData=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll()}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:g.Cv.MASTER}).subscribe(l=>{this.cards=l?.rows.find(d=>"Setting Master"==d.title),this.cardsData=this.cards.items.sort((d,m)=>d.order-m.order);let i=3-this.cards.items.length;if(i>0)for(var a=0;a<i;a++)this.cards.items.push({displayName:"Place Holder",disabled:!0,url:null});this.menuTitleService.set({title:`${this.cards.displayName}`,subTitle:null,type:null,subModuleId:this.cards._id})}),this.spinner.hide()}navigateTo(s,l,i){let a={title:i,subTitle:null,type:null,subModuleId:this.cards._id};this.storageService.set("menuTitle",a),l||(this.menuTitleService.set(a),this.router.navigate([s]))}}return(e=o).\u0275fac=function(s){return new(s||e)(t.Y36(c.Uh),t.Y36(c.P0),t.Y36(v.M5),t.Y36(c.V),t.Y36(c.V1),t.Y36(p.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-setting-master"]],decls:5,vars:1,consts:[[1,"row","tablePage",2,"min-height","47rem"],[1,"col-md-11","table-body","shadow-none"],[1,"container-fluid","tabs-card-page"],[1,"row","row-cols-1","row-cols-md-3"],["class","col d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center"],[1,"card","masterCard",3,"ngClass","click"],[1,"card-body","d-flex","align-content-center"],[1,"card-title","align-self-center"]],template:function(s,l){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,f,5,2,"div",4),t.qZA()()()()),2&s&&(t.xp6(4),t.Q6J("ngForOf",l.cardsData))},dependencies:[u.mk,u.sg],encapsulation:2}),o})()}];let M=(()=>{var e;class o{}return(e=o).\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,p.Bz.forChild(S)]}),o})()}}]);