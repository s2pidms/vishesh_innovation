"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7837],{7837:(y,m,s)=>{s.r(m),s.d(m,{SKUAttributesModule:()=>C});var r=s(96814),c=s(1076),v=s(25116),t=s(65879),d=s(2742),f=s(88354);const g=function(e,h){return{disabled:e,isDisplayFalse:h}};function p(e,h){if(1&e){const i=t.EpF();t.TgZ(0,"div",5)(1,"div",6),t.NdJ("click",function(){const l=t.CHM(i).$implicit,a=t.oxw();return t.KtG(a.navigateTo(l.url,l.disabled,l.displayName))}),t.TgZ(2,"div",7)(3,"h5",8),t._uU(4),t.qZA()()()()}if(2&e){const i=h.$implicit;t.xp6(1),t.Q6J("ngClass",t.WLB(2,g,i.disabled,!1===i.isDisplay)),t.xp6(3),t.Oqu(i.displayName)}}const S=[{path:"tab_list",component:(()=>{class e{constructor(i,n,o,l,a,u,T){this.menuTitleService=i,this.appGlobalService=n,this.subModulesService=o,this.spinner=l,this.storageService=a,this.router=u,this.activatedRoute=T,this.title="",this.menuItemId="",this.cards={},this.cardsData=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll()}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:"64a6c1e33339d4dc9d8141ad"==this.menuItemId?v.Cv.TRANSACTION:v.Cv.MASTER}).subscribe(n=>{this.cards=n?.rows.find(a=>"SKU Attributes"==a.title),this.cardsData=this.cards.items.sort((a,u)=>a.order-u.order);let o=3-this.cards.items.length;if(o>0)for(var l=0;l<o;l++)this.cards.items.push({displayName:"Place Holder",disabled:!0,url:null});this.menuTitleService.set({title:`${this.cards.displayName}`,subTitle:null,type:null,subModuleId:this.cards._id})}),this.spinner.hide()}navigateTo(i,n,o){let l={title:o,subTitle:null,type:null,subModuleId:this.cards._id};this.storageService.set("menuTitle",l),n||(this.menuTitleService.set(l),this.router.navigate([i],{relativeTo:this.activatedRoute}))}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(d.Uh),t.Y36(d.P0),t.Y36(f.M5),t.Y36(d.V),t.Y36(d.V1),t.Y36(c.F0),t.Y36(c.gz))};static#s=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-sku-attributes"]],decls:5,vars:1,consts:[[1,"row","tablePage",2,"min-height","47rem"],[1,"col-md-11","table-body","shadow-none"],[1,"container-fluid","tabs-card-page"],[1,"row","row-cols-1","row-cols-md-3"],["class","col d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center"],[1,"card","masterCard",3,"ngClass","click"],[1,"card-body","d-flex","align-content-center"],[1,"card-title","align-self-center"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,p,5,5,"div",4),t.qZA()()()()),2&n&&(t.xp6(4),t.Q6J("ngForOf",o.cardsData))},dependencies:[r.mk,r.sg],encapsulation:2})}return e})()},{path:"sku_attribute_tracking",loadChildren:()=>Promise.all([s.e(9840),s.e(1626)]).then(s.bind(s,71626)).then(e=>e.SkuAttributeTrackingModule)},{path:"sku_dimension_master",loadChildren:()=>Promise.all([s.e(9840),s.e(4882),s.e(8606)]).then(s.bind(s,48606)).then(e=>e.SkuDimensionMasterModule)},{path:"sku_material_master",loadChildren:()=>Promise.all([s.e(9840),s.e(4882),s.e(3572),s.e(6082)]).then(s.bind(s,56082)).then(e=>e.SkuMaterialMasterModule)},{path:"sku_ink_master",loadChildren:()=>Promise.all([s.e(9840),s.e(4882),s.e(7544)]).then(s.bind(s,17544)).then(e=>e.SkuInkMasterModule)}];let C=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#s=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[r.ez,c.Bz.forChild(S)]})}return e})()}}]);