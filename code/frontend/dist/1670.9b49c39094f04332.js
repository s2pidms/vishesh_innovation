"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1670],{71670:(T,h,i)=>{i.r(h),i.d(h,{HrModule:()=>y});var u=i(96814),p=i(1076),v=i(25116),t=i(65879),c=i(2742),f=i(39029);function g(e,a){if(1&e){const l=t.EpF();t.TgZ(0,"div",5)(1,"div",6),t.NdJ("click",function(){const n=t.CHM(l).$implicit,o=t.oxw();return t.KtG(o.navigateTo(n.url,n.disabled,n.displayName))}),t.TgZ(2,"div",7)(3,"h5",8),t._uU(4),t.qZA()()()()}if(2&e){const l=a.$implicit;t.xp6(1),t.Q6J("ngClass",l.disabled?"disabled":""),t.xp6(3),t.Oqu(l.displayName)}}const C=[{path:"tab_list",component:(()=>{var e;class a{constructor(s,r,n,o,d,m){this.menuTitleService=s,this.appGlobalService=r,this.subModulesService=n,this.spinner=o,this.storageService=d,this.router=m,this.title="",this.menuItemId="",this.cards={},this.cardsData=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll()}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:v.Cv.MASTER}).subscribe(r=>{this.cards=r?.rows.find(d=>"HR Master"==d.title),this.cardsData=this.cards.items.sort((d,m)=>d.order-m.order);let n=3-this.cards.items.length;if(n>0)for(var o=0;o<n;o++)this.cards.items.push({displayName:"Place Holder",disabled:!0,url:null});this.menuTitleService.set({title:`${this.cards.displayName}`,subTitle:null,type:null,subModuleId:this.cards._id})}),this.spinner.hide()}navigateTo(s,r,n){let o={title:n,subTitle:null,type:null,subModuleId:this.cards._id};this.storageService.set("menuTitle",o),r||(this.menuTitleService.set(o),this.router.navigate([s]))}}return(e=a).\u0275fac=function(s){return new(s||e)(t.Y36(c.Uh),t.Y36(c.P0),t.Y36(f.M5),t.Y36(c.V),t.Y36(c.V1),t.Y36(p.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-hr"]],decls:5,vars:1,consts:[[1,"row","tablePage",2,"min-height","47rem"],[1,"col-md-11","table-body","shadow-none"],[1,"container-fluid","tabs-card-page"],[1,"row","row-cols-1","row-cols-md-3"],["class","col d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center"],[1,"card","masterCard",3,"ngClass","click"],[1,"card-body","d-flex","align-content-center"],[1,"card-title","align-self-center"]],template:function(s,r){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,g,5,2,"div",4),t.qZA()()()()),2&s&&(t.xp6(4),t.Q6J("ngForOf",r.cardsData))},dependencies:[u.mk,u.sg],encapsulation:2}),a})()},{path:"professional_tax",loadChildren:()=>Promise.all([i.e(3383),i.e(8934)]).then(i.bind(i,58934)).then(e=>e.ProfessionalTaxModule)}];let y=(()=>{var e;class a{}return(e=a).\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,p.Bz.forChild(C)]}),a})()}}]);