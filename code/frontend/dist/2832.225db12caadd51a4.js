"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2832],{2832:(b,d,i)=>{i.r(d),i.d(d,{LabelMasterModule:()=>f});var c=i(96814),m=i(1076),t=i(65879),o=i(99328);function u(e,g){if(1&e){const s=t.EpF();t.TgZ(0,"div",3)(1,"div",4),t.NdJ("click",function(){const n=t.CHM(s).$implicit,r=t.oxw();return t.KtG(r.navigateTo("./default/settings/master/label_master/dynamic_label_card/form",n.id,n.title))}),t.TgZ(2,"div",5)(3,"h5",6),t._uU(4),t.qZA()()()()}if(2&e){const s=g.$implicit;t.xp6(1),t.Q6J("ngClass",s.disabled?"disabled":""),t.xp6(3),t.Oqu(s.title)}}let h=(()=>{class e{constructor(s,a,l,n,r){this.menuTitleService=s,this.appGlobalService=a,this.spinner=l,this.storageService=n,this.router=r,this.title="",this.menuItemId="",this.cards={},this.cardsData=[]}ngOnInit(){this.cardsData=this.appGlobalService.globalData.menuItems.filter(s=>!["idmsLogoA"].includes(s.activeClass)),this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId}navigateTo(s,a,l){let n={title:l,subTitle:null,type:null,subModuleId:this.cards._id};this.storageService.set("menuTitle",n),this.menuTitleService.set(n),this.router.navigate([s],{queryParams:{id:a}})}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(o.Uh),t.Y36(o.P0),t.Y36(o.V),t.Y36(o.V1),t.Y36(m.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-label-master"]],decls:3,vars:1,consts:[[1,"container-fluid","tabs-card-page","mt-5",2,"width","80rem"],[1,"row","row-cols-1","row-cols-md-4"],["class","col d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center"],[1,"card","masterCard",3,"ngClass","click"],[1,"card-body","d-flex","align-content-center"],[1,"card-title","align-self-center"]],template:function(a,l){1&a&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,u,5,2,"div",2),t.qZA()()),2&a&&(t.xp6(2),t.Q6J("ngForOf",l.cardsData))},dependencies:[c.mk,c.sg],encapsulation:2})}return e})();var p=i(56208);const v=[{path:"tab_list",component:h},{path:"dynamic_label_card",loadChildren:()=>i.e(162).then(i.bind(i,20162)).then(e=>e.DynamicLabelCardModule)}];let f=(()=>{class e{static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275mod=t.oAB({type:e});static#s=this.\u0275inj=t.cJS({imports:[c.ez,m.Bz.forChild(v),p.m]})}return e})()}}]);