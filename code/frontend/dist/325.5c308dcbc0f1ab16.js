"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[325],{60325:(T,u,l)=>{l.r(u),l.d(u,{SupportModule:()=>b});var d=l(96814),p=l(1076),h=l(25116),t=l(65879),a=l(2742),m=l(88354);function v(i,y){if(1&i){const e=t.EpF();t.TgZ(0,"div",5)(1,"div",6),t.NdJ("click",function(){const n=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.navigateTo(n.url,n.disabled,n.displayName))}),t.TgZ(2,"div",7)(3,"h5",8),t._uU(4),t.qZA()()()()}if(2&i){const e=y.$implicit;t.xp6(1),t.Q6J("ngClass",e.disabled?"disabled":""),t.xp6(3),t.Oqu(e.displayName)}}let f=(()=>{class i{constructor(e,s,o,n,r,c){this.menuTitleService=e,this.appGlobalService=s,this.subModulesService=o,this.spinner=n,this.storageService=r,this.router=c,this.title="",this.menuItemId="",this.cards={},this.cardsData=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll()}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:h.Cv.MASTER}).subscribe(s=>{this.cards=s?.rows.find(r=>"Support Master"==r.title),this.cardsData=this.cards.items.sort((r,c)=>r.order-c.order);let o=3-this.cards.items.length;if(o>0)for(var n=0;n<o;n++)this.cards.items.push({displayName:"Place Holder",disabled:!0,url:null});this.menuTitleService.set({title:`${this.cards.displayName}`,subTitle:null,type:null,subModuleId:this.cards._id})}),this.spinner.hide()}navigateTo(e,s,o){let n={title:o,subTitle:null,type:null,subModuleId:this.cards._id};this.storageService.set("menuTitle",n),s||(this.menuTitleService.set(n),this.router.navigate([e]))}static#t=this.\u0275fac=function(s){return new(s||i)(t.Y36(a.Uh),t.Y36(a.P0),t.Y36(m.M5),t.Y36(a.V),t.Y36(a.V1),t.Y36(p.F0))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-support"]],decls:5,vars:1,consts:[[1,"row","tablePage",2,"min-height","47rem"],[1,"col-md-11","table-body","shadow-none"],[1,"container-fluid","tabs-card-page"],[1,"row","row-cols-1","row-cols-md-3"],["class","col d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center"],[1,"card","masterCard",3,"ngClass","click"],[1,"card-body","d-flex","align-content-center"],[1,"card-title","align-self-center"]],template:function(s,o){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,v,5,2,"div",4),t.qZA()()()()),2&s&&(t.xp6(4),t.Q6J("ngForOf",o.cardsData))},dependencies:[d.mk,d.sg],encapsulation:2})}return i})();var g=l(56208);const S=[{path:"tab_list",component:f}];let b=(()=>{class i{static#t=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275mod=t.oAB({type:i});static#s=this.\u0275inj=t.cJS({imports:[d.ez,p.Bz.forChild(S),g.m]})}return i})()}}]);