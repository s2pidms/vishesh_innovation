"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5821],{25821:(y,r,t)=>{t.r(r),t.d(r,{NPDModule:()=>f});var h=t(96814),m=t(1076),u=t(25116),s=t(65879),a=t(98977),v=t(88354);function g(e,C){if(1&e){const n=s.EpF();s.TgZ(0,"div",5)(1,"div",6),s.NdJ("click",function(){const l=s.CHM(n).$implicit,d=s.oxw();return s.KtG(d.navigateTo(l.url,l.disabled,l.displayName))}),s.TgZ(2,"div",7)(3,"h5",8),s._uU(4),s.qZA()()()()}if(2&e){const n=C.$implicit;s.xp6(1),s.Q6J("ngClass",n.disabled?"disabled":""),s.xp6(3),s.Oqu(n.displayName)}}const p=[{path:"tab_list",component:(()=>{class e{constructor(n,i,o,l,d,c){this.menuTitleService=n,this.appGlobalService=i,this.subModulesService=o,this.spinner=l,this.storageService=d,this.router=c,this.title="",this.menuItemId="",this.cards={},this.cardsData=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll()}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:u.Cv.MASTER}).subscribe(i=>{this.cards=i?.rows?.find(d=>"NPD & Planning Master"==d.title),this.cardsData=this.cards.items.sort((d,c)=>d.order-c.order);let o=3-this.cards.items.length;if(o>0)for(var l=0;l<o;l++)this.cards.items.push({displayName:"Place Holder",disabled:!0,url:null});this.menuTitleService.set({title:`${this.cards.displayName}`,subTitle:null,type:null,subModuleId:this.cards._id})}),this.spinner.hide()}navigateTo(n,i,o){let l={title:o,subTitle:null,type:null,subModuleId:this.cards._id};this.storageService.set("menuTitle",l),i||(this.menuTitleService.set(l),this.router.navigate([n]))}static#t=this.\u0275fac=function(i){return new(i||e)(s.Y36(a.Uh),s.Y36(a.P0),s.Y36(v.M5),s.Y36(a.V),s.Y36(a.V1),s.Y36(m.F0))};static#s=this.\u0275cmp=s.Xpm({type:e,selectors:[["app-npd"]],decls:5,vars:1,consts:[[1,"row","tablePage",2,"min-height","47rem"],[1,"col-md-11","table-body","shadow-none"],[1,"container-fluid","tabs-card-page"],[1,"row","row-cols-1","row-cols-md-3"],["class","col d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center"],[1,"card","masterCard",3,"ngClass","click"],[1,"card-body","d-flex","align-content-center"],[1,"card-title","align-self-center"]],template:function(i,o){1&i&&(s.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),s.YNc(4,g,5,2,"div",4),s.qZA()()()()),2&i&&(s.xp6(4),s.Q6J("ngForOf",o.cardsData))},dependencies:[h.mk,h.sg],encapsulation:2})}return e})()},{path:"questioniers",loadChildren:()=>Promise.all([t.e(8212),t.e(8592),t.e(9008)]).then(t.bind(t,49122)).then(e=>e.QuestioniersModule)},{path:"child_item_category",loadChildren:()=>Promise.all([t.e(8592),t.e(7416)]).then(t.bind(t,82620)).then(e=>e.ChildItemCategoryModule)},{path:"checklist_particulars",loadChildren:()=>Promise.all([t.e(8212),t.e(8592),t.e(4584)]).then(t.bind(t,1847)).then(e=>e.ChecklistParticularsModule)},{path:"cost_sheet_components",loadChildren:()=>Promise.all([t.e(8592),t.e(132)]).then(t.bind(t,93292)).then(e=>e.CostSheetComponentsModule)},{path:"d_sku_attributes",loadChildren:()=>t.e(9724).then(t.bind(t,89724)).then(e=>e.DSkuAttributesModule)}];let f=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#s=this.\u0275mod=s.oAB({type:e});static#e=this.\u0275inj=s.cJS({imports:[h.ez,m.Bz.forChild(p)]})}return e})()}}]);