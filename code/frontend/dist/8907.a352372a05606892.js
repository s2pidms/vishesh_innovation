"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8907],{78907:(S,m,t)=>{t.r(m),t.d(m,{BusinessLeadMasterModule:()=>T});var h=t(96814),v=t(1076),p=t(25116),s=t(65879),c=t(99328),f=t(88354);function M(e,a){if(1&e){const l=s.EpF();s.TgZ(0,"div",5)(1,"div",6),s.NdJ("click",function(){const i=s.CHM(l).$implicit,d=s.oxw();return s.KtG(d.navigateTo(i.url,i.disabled,i.displayName))}),s.TgZ(2,"div",7)(3,"h5",8),s._uU(4),s.qZA()()()()}if(2&e){const l=a.$implicit;s.xp6(1),s.Q6J("ngClass",l.disabled?"disabled":""),s.xp6(3),s.Oqu(l.displayName)}}let g=(()=>{var e;class a{constructor(n,o,i,d,r,u){this.menuTitleService=n,this.appGlobalService=o,this.subModulesService=i,this.spinner=d,this.storageService=r,this.router=u,this.title="",this.menuItemId="",this.cards={},this.cardsData=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll()}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:p.Cv.MASTER}).subscribe(o=>{this.cards=o?.rows.find(r=>"Business Leads Master"==r.title),this.cardsData=this.cards.items.sort((r,u)=>r.order-u.order);let i=3-this.cards.items.length;if(i>0)for(var d=0;d<i;d++)this.cards.items.push({displayName:"Place Holder",disabled:!0,url:null});this.menuTitleService.set({title:`${this.cards.displayName}`,subTitle:null,type:null,subModuleId:this.cards._id})}),this.spinner.hide()}navigateTo(n,o,i){let d={title:i,subTitle:null,type:null,subModuleId:this.cards._id};this.storageService.set("menuTitle",d),o||(this.menuTitleService.set(d),this.router.navigate([n]))}}return(e=a).\u0275fac=function(n){return new(n||e)(s.Y36(c.Uh),s.Y36(c.P0),s.Y36(f.M5),s.Y36(c.V),s.Y36(c.V1),s.Y36(v.F0))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-business-lead-master"]],decls:5,vars:1,consts:[[1,"row","tablePage",2,"min-height","47rem"],[1,"col-md-11","table-body","shadow-none"],[1,"container-fluid","tabs-card-page"],[1,"row","row-cols-1","row-cols-md-3"],["class","col d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center"],[1,"card","masterCard",3,"ngClass","click"],[1,"card-body","d-flex","align-content-center"],[1,"card-title","align-self-center"]],template:function(n,o){1&n&&(s.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),s.YNc(4,M,5,2,"div",4),s.qZA()()()()),2&n&&(s.xp6(4),s.Q6J("ngForOf",o.cardsData))},dependencies:[h.mk,h.sg],encapsulation:2}),a})();var C=t(56208);const y=[{path:"tab_list",component:g},{path:"questioniers",loadChildren:()=>Promise.all([t.e(7106),t.e(8212),t.e(8955)]).then(t.bind(t,38955)).then(e=>e.QuestioniersModule)},{path:"checklist_particulars",loadChildren:()=>Promise.all([t.e(7106),t.e(8212),t.e(5158)]).then(t.bind(t,85158)).then(e=>e.ChecklistParticularsModule)},{path:"cost_sheet_components",loadChildren:()=>Promise.all([t.e(7106),t.e(8592),t.e(384)]).then(t.bind(t,30384)).then(e=>e.CostSheetComponentsModule)},{path:"d_sku_attributes",loadChildren:()=>t.e(1050).then(t.bind(t,31050)).then(e=>e.DSkuAttributesModule)}];let T=(()=>{var e;class a{}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[h.ez,v.Bz.forChild(y),C.m]}),a})()}}]);