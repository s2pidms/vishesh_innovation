"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[78],{70078:(C,h,r)=>{r.r(h),r.d(h,{MaintenanceMasterModule:()=>b});var u=r(96814),p=r(1076),v=r(25116),e=r(65879),d=r(2742),M=r(39029);function f(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"div",5)(1,"div",6),e.NdJ("click",function(){const s=e.CHM(i).$implicit,a=e.oxw();return e.KtG(a.navigateTo(s.url,s.disabled,s.displayName))}),e.TgZ(2,"div",7)(3,"h5",8),e._uU(4),e.qZA()()()()}if(2&t){const i=o.$implicit;e.xp6(1),e.Q6J("ngClass",i.disabled?"disabled":""),e.xp6(3),e.Oqu(i.displayName)}}const g=[{path:"tab_list",component:(()=>{var t;class o{constructor(n,l,s,a,c,m){this.menuTitleService=n,this.appGlobalService=l,this.subModulesService=s,this.spinner=a,this.storageService=c,this.router=m,this.title="",this.menuItemId="",this.cards={},this.cardsData=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll()}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:v.Cv.MASTER}).subscribe(l=>{this.cards=l?.rows.find(c=>"Maintenance Master"==c.title),this.cardsData=this.cards.items.sort((c,m)=>c.order-m.order);let s=3-this.cards.items.length;if(s>0)for(var a=0;a<s;a++)this.cards.items.push({displayName:"Place Holder",disabled:!0,url:null});this.menuTitleService.set({title:`${this.cards.displayName}`,subTitle:null,type:null,subModuleId:this.cards._id})}),this.spinner.hide()}navigateTo(n,l,s){let a={title:s,subTitle:null,type:null,subModuleId:this.cards._id};this.storageService.set("menuTitle",a),l||(this.menuTitleService.set(a),this.router.navigate([n]))}}return(t=o).\u0275fac=function(n){return new(n||t)(e.Y36(d.Uh),e.Y36(d.P0),e.Y36(M.M5),e.Y36(d.V),e.Y36(d.V1),e.Y36(p.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-maintenance-master"]],decls:5,vars:1,consts:[[1,"row","tablePage",2,"min-height","47rem"],[1,"col-md-11","table-body","shadow-none"],[1,"container-fluid","tabs-card-page"],[1,"row","row-cols-1","row-cols-md-3"],["class","col d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center"],[1,"card","masterCard",3,"ngClass","click"],[1,"card-body","d-flex","align-content-center"],[1,"card-title","align-self-center"]],template:function(n,l){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,f,5,2,"div",4),e.qZA()()()()),2&n&&(e.xp6(4),e.Q6J("ngForOf",l.cardsData))},dependencies:[u.mk,u.sg],encapsulation:2}),o})()}];let b=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,p.Bz.forChild(g)]}),o})()}}]);