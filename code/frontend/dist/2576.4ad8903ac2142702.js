"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2576],{2576:(I,m,e)=>{e.r(m),e.d(m,{ChildPartProductionModule:()=>T});var h=e(96814),p=e(1076),v=e(56208),C=e(25116),t=e(65879),c=e(99328),P=e(88354);const f=function(i,l){return{disabled:i,isDisplayFalse:l}};function g(i,l){if(1&i){const s=t.EpF();t.TgZ(0,"div",5)(1,"div",6),t.NdJ("click",function(){const o=t.CHM(s).$implicit,d=t.oxw();return t.KtG(d.navigateTo(o.url,o.disabled,o.displayName))}),t.TgZ(2,"div",7)(3,"h5",8),t._uU(4),t.qZA()()()()}if(2&i){const s=l.$implicit;t.xp6(1),t.Q6J("ngClass",t.WLB(2,f,s.disabled,!1===s.isDisplay)),t.xp6(3),t.Oqu(s.displayName)}}const y=[{path:"tab_list",component:(()=>{var i;class l{constructor(n,a,o,d,r,u){this.menuTitleService=n,this.appGlobalService=a,this.subModulesService=o,this.spinner=d,this.storageService=r,this.router=u,this.title="",this.menuItemId="",this.cards={},this.cardsData=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll()}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:C.Cv.TRANSACTION}).subscribe(a=>{this.cards=a?.rows.find(r=>"Production Entry"==r.title),this.cardsData=this.cards.items.sort((r,u)=>r.order-u.order);let o=3-this.cards.items.length;if(o>0)for(var d=0;d<o;d++)this.cards.items.push({displayName:"Place Holder",disabled:!0,url:null});this.menuTitleService.set({title:`${this.cards.displayName}`,subTitle:null,type:null,subModuleId:this.cards._id})}),this.spinner.hide()}navigateTo(n,a,o){let d={title:o,subTitle:null,type:null,subModuleId:this.cards._id};this.storageService.set("menuTitle",d),a||(this.menuTitleService.set(d),this.router.navigate([n]))}}return(i=l).\u0275fac=function(n){return new(n||i)(t.Y36(c.Uh),t.Y36(c.P0),t.Y36(P.M5),t.Y36(c.V),t.Y36(c.V1),t.Y36(p.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-child-part-production"]],decls:5,vars:1,consts:[[1,"row","tablePage",2,"min-height","47rem"],[1,"col-md-11","table-body","shadow-none"],[1,"container-fluid","tabs-card-page"],[1,"row","row-cols-1","row-cols-md-3"],["class","col d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center"],[1,"card","masterCard",3,"ngClass","click"],[1,"card-body","d-flex","align-content-center"],[1,"card-title","align-self-center"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,g,5,5,"div",4),t.qZA()()()()),2&n&&(t.xp6(4),t.Q6J("ngForOf",a.cardsData))},dependencies:[h.mk,h.sg],encapsulation:2}),l})()},{path:"child_part",loadChildren:()=>Promise.all([e.e(3396),e.e(9828)]).then(e.bind(e,69828)).then(i=>i.ChildPartModule)},{path:"sku_production",loadChildren:()=>Promise.all([e.e(3396),e.e(2735)]).then(e.bind(e,82735)).then(i=>i.SkuProductionModule)},{path:"gr_child_part",loadChildren:()=>Promise.all([e.e(3396),e.e(3326)]).then(e.bind(e,13326)).then(i=>i.GrChildPartModule)}];let T=(()=>{var i;class l{}return(i=l).\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[h.ez,v.m,p.Bz.forChild(y)]}),l})()}}]);