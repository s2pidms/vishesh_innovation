"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8036],{48036:(M,u,s)=>{s.r(u),s.d(u,{QualityMasterModule:()=>g});var d=s(96814),h=s(1076),m=s(25116),t=s(65879),r=s(99328),p=s(88354);function v(e,y){if(1&e){const i=t.EpF();t.TgZ(0,"div",5)(1,"div",6),t.NdJ("click",function(){const n=t.CHM(i).$implicit,o=t.oxw();return t.KtG(o.navigateTo(n.url,n.disabled,n.displayName))}),t.TgZ(2,"div",7)(3,"h5",8),t._uU(4),t.qZA()()()()}if(2&e){const i=y.$implicit;t.xp6(1),t.Q6J("ngClass",i.disabled?"disabled":""),t.xp6(3),t.Oqu(i.displayName)}}const f=[{path:"tab_list",component:(()=>{class e{constructor(i,l,a,n,o,c){this.menuTitleService=i,this.appGlobalService=l,this.subModulesService=a,this.spinner=n,this.storageService=o,this.router=c,this.title="",this.menuItemId="",this.cards={},this.cardsData=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll()}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:m.Cv.MASTER}).subscribe(l=>{this.cards=l?.rows.find(o=>"Quality Master"==o.title),this.cardsData=this.cards.items.sort((o,c)=>o.order-c.order);let a=3-this.cards.items.length;if(a>0)for(var n=0;n<a;n++)this.cards.items.push({displayName:"Place Holder",disabled:!0,url:null});this.menuTitleService.set({title:`${this.cards.displayName}`,subTitle:null,type:null,subModuleId:this.cards._id})}),this.spinner.hide()}navigateTo(i,l,a){let n={title:a,subTitle:null,type:null,subModuleId:this.cards._id};this.storageService.set("menuTitle",n),l||(this.menuTitleService.set(n),this.router.navigate([i]))}static#t=this.\u0275fac=function(l){return new(l||e)(t.Y36(r.Uh),t.Y36(r.P0),t.Y36(p.M5),t.Y36(r.V),t.Y36(r.V1),t.Y36(h.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-quality-master"]],decls:5,vars:1,consts:[[1,"row","tablePage",2,"min-height","47rem"],[1,"col-md-11","table-body","shadow-none"],[1,"container-fluid","tabs-card-page"],[1,"row","row-cols-1","row-cols-md-3"],["class","col d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center"],[1,"card","masterCard",3,"ngClass","click"],[1,"card-body","d-flex","align-content-center"],[1,"card-title","align-self-center"]],template:function(l,a){1&l&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,v,5,2,"div",4),t.qZA()()()()),2&l&&(t.xp6(4),t.Q6J("ngForOf",a.cardsData))},dependencies:[d.mk,d.sg],encapsulation:2})}return e})()},{path:"customer_pdir_mapping",loadChildren:()=>Promise.all([s.e(7106),s.e(8592),s.e(8741)]).then(s.bind(s,68741)).then(e=>e.CustomerPdirMappingModule)}];let g=(()=>{class e{static#t=this.\u0275fac=function(l){return new(l||e)};static#e=this.\u0275mod=t.oAB({type:e});static#s=this.\u0275inj=t.cJS({imports:[d.ez,h.Bz.forChild(f)]})}return e})()}}]);