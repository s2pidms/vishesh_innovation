"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1541],{61541:(T,h,e)=>{e.r(h),e.d(h,{FinanceMasterModule:()=>M});var c=e(96814),m=e(1076),u=e(25116),t=e(65879),d=e(99328),v=e(88354);function p(s,y){if(1&s){const i=t.EpF();t.TgZ(0,"div",5)(1,"div",6),t.NdJ("click",function(){const a=t.CHM(i).$implicit,o=t.oxw();return t.KtG(o.navigateTo(a.url,a.disabled,a.displayName))}),t.TgZ(2,"div",7)(3,"h5",8),t._uU(4),t.qZA()()()()}if(2&s){const i=y.$implicit;t.xp6(1),t.Q6J("ngClass",i.disabled?"disabled":""),t.xp6(3),t.Oqu(i.displayName)}}let f=(()=>{class s{constructor(i,n,l,a,o,r){this.menuTitleService=i,this.appGlobalService=n,this.subModulesService=l,this.spinner=a,this.storageService=o,this.router=r,this.title="",this.menuItemId="",this.cards={},this.cardsData=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll()}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:u.Cv.MASTER}).subscribe(n=>{this.cards=n?.rows.find(o=>"Finance Master"==o.title),this.cardsData=this.cards.items.sort((o,r)=>o.order-r.order);let l=3-this.cards.items.length;if(l>0)for(var a=0;a<l;a++)this.cards.items.push({displayName:"Place Holder",disabled:!0,url:null});this.menuTitleService.set({title:`${this.cards.displayName}`,subTitle:null,type:null,subModuleId:this.cards._id})}),this.spinner.hide()}navigateTo(i,n,l){let a={title:l,subTitle:null,type:null,subModuleId:this.cards._id};this.storageService.set("menuTitle",a),n||(this.menuTitleService.set(a),this.router.navigate([i]))}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(d.Uh),t.Y36(d.P0),t.Y36(v.M5),t.Y36(d.V),t.Y36(d.V1),t.Y36(m.F0))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-finance-master"]],decls:5,vars:1,consts:[[1,"row","tablePage",2,"min-height","47rem"],[1,"col-md-11","table-body","shadow-none"],[1,"container-fluid","tabs-card-page"],[1,"row","row-cols-1","row-cols-md-3"],["class","col d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center"],[1,"card","masterCard",3,"ngClass","click"],[1,"card-body","d-flex","align-content-center"],[1,"card-title","align-self-center"]],template:function(n,l){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,p,5,2,"div",4),t.qZA()()()()),2&n&&(t.xp6(4),t.Q6J("ngForOf",l.cardsData))},dependencies:[c.mk,c.sg],encapsulation:2})}return s})();var g=e(56208);const C=[{path:"tab_list",component:f},{path:"asset_class",loadChildren:()=>Promise.all([e.e(7106),e.e(3997)]).then(e.bind(e,73997)).then(s=>s.AssetClassModule)},{path:"cost_head",loadChildren:()=>e.e(7766).then(e.bind(e,67766)).then(s=>s.CostHeadModule)}];let M=(()=>{class s{static#t=this.\u0275fac=function(n){return new(n||s)};static#e=this.\u0275mod=t.oAB({type:s});static#s=this.\u0275inj=t.cJS({imports:[c.ez,m.Bz.forChild(C),g.m]})}return s})()}}]);