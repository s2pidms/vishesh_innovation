"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5865],{75865:(B,f,l)=>{l.r(f),l.d(f,{BillOfMaterialModule:()=>T});var h=l(96814),m=l(1076),p=l(56208),v=l(25116),t=l(65879),c=l(98977),M=l(88354);const g=function(e,n){return{disabled:e,isDisplayFalse:n}};function C(e,n){if(1&e){const s=t.EpF();t.TgZ(0,"div",5)(1,"div",6),t.NdJ("click",function(){const o=t.CHM(s).$implicit,a=t.oxw();return t.KtG(a.navigateTo(o.url,o.disabled,o.displayName))}),t.TgZ(2,"div",7)(3,"h5",8),t._uU(4),t.qZA()()()()}if(2&e){const s=n.$implicit;t.xp6(1),t.Q6J("ngClass",t.WLB(2,g,s.disabled,!1===s.isDisplay)),t.xp6(3),t.Oqu(s.displayName)}}const O=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{var e;class n{constructor(i,d,o,a,r,u,y){this.menuTitleService=i,this.appGlobalService=d,this.subModulesService=o,this.spinner=a,this.storageService=r,this.router=u,this.activatedRoute=y,this.title="",this.menuItemId="",this.cards={},this.cardsData=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll()}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:"64a6c1e33339d4dc9d8141ad"==this.menuItemId?v.Cv.TRANSACTION:v.Cv.MASTER}).subscribe(d=>{this.cards=d?.rows.find(r=>"Bill of Material"==r.title),this.cardsData=this.cards.items.sort((r,u)=>r.order-u.order);let o=3-this.cards.items.length;if(o>0)for(var a=0;a<o;a++)this.cards.items.push({displayName:"Place Holder",disabled:!0,url:null});this.menuTitleService.set({title:`${this.cards.displayName}`,subTitle:null,type:null,subModuleId:this.cards._id})}),this.spinner.hide()}navigateTo(i,d,o){let a={title:o,subTitle:null,type:null,subModuleId:this.cards._id};this.storageService.set("menuTitle",a),d||(this.menuTitleService.set(a),this.router.navigate([i],{relativeTo:this.activatedRoute}))}}return(e=n).\u0275fac=function(i){return new(i||e)(t.Y36(c.Uh),t.Y36(c.P0),t.Y36(M.M5),t.Y36(c.V),t.Y36(c.V1),t.Y36(m.F0),t.Y36(m.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-bill-of-material"]],decls:5,vars:1,consts:[[1,"row","tablePage",2,"min-height","47rem"],[1,"col-md-11","table-body","shadow-none"],[1,"container-fluid","tabs-card-page"],[1,"row","row-cols-1","row-cols-md-3"],["class","col d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center"],[1,"card","masterCard",3,"ngClass","click"],[1,"card-body","d-flex","align-content-center"],[1,"card-title","align-self-center"]],template:function(i,d){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,C,5,5,"div",4),t.qZA()()()()),2&i&&(t.xp6(4),t.Q6J("ngForOf",d.cardsData))},dependencies:[h.mk,h.sg],encapsulation:2}),n})()},{path:"bom_of_sku",loadChildren:()=>Promise.all([l.e(7569),l.e(3373)]).then(l.bind(l,83373)).then(e=>e.BomOfSkuModule)},{path:"bom_of_child_item",loadChildren:()=>Promise.all([l.e(7569),l.e(3158)]).then(l.bind(l,13158)).then(e=>e.BomOfChildItemModule)},{path:"bom_of_gr_child_item",loadChildren:()=>Promise.all([l.e(7569),l.e(6493)]).then(l.bind(l,76493)).then(e=>e.BomOfGrChildItemModule)},{path:"bom_of_product",loadChildren:()=>Promise.all([l.e(7569),l.e(4133)]).then(l.bind(l,82649)).then(e=>e.BomOfProductModule)}];let T=(()=>{var e;class n{}return(e=n).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.ez,p.m,m.Bz.forChild(O)]}),n})()}}]);