"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4958],{44958:(y,u,t)=>{t.r(u),t.d(u,{SalesModule:()=>S});var h=t(96814),v=t(1076),p=t(25116),e=t(65879),c=t(2742),g=t(39029);function f(s,a){if(1&s){const o=e.EpF();e.TgZ(0,"div",5)(1,"div",6),e.NdJ("click",function(){const n=e.CHM(o).$implicit,i=e.oxw();return e.KtG(i.navigateTo(n.url,n.disabled,n.displayName))}),e.TgZ(2,"div",7)(3,"h5",8),e._uU(4),e.qZA()()()()}if(2&s){const o=a.$implicit;e.xp6(1),e.Q6J("ngClass",o.disabled?"disabled":""),e.xp6(3),e.Oqu(o.displayName)}}const C=[{path:"tab_list",component:(()=>{var s;class a{constructor(l,d,n,i,r,m){this.menuTitleService=l,this.appGlobalService=d,this.subModulesService=n,this.spinner=i,this.storageService=r,this.router=m,this.title="",this.menuItemId="",this.cards={},this.cardsData=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll()}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:p.Cv.MASTER}).subscribe(d=>{this.cards=d?.rows.find(r=>"Sales Master"==r.title),this.cardsData=this.cards.items.sort((r,m)=>r.order-m.order);let n=3-this.cards.items.length;if(n>0)for(var i=0;i<n;i++)this.cards.items.push({displayName:"Place Holder",disabled:!0,url:null});this.menuTitleService.set({title:`${this.cards.displayName}`,subTitle:null,type:null,subModuleId:this.cards._id})}),this.spinner.hide()}navigateTo(l,d,n){let i={title:n,subTitle:null,type:null,subModuleId:this.cards._id};this.storageService.set("menuTitle",i),d||(this.menuTitleService.set(i),this.router.navigate([l]))}}return(s=a).\u0275fac=function(l){return new(l||s)(e.Y36(c.Uh),e.Y36(c.P0),e.Y36(g.M5),e.Y36(c.V),e.Y36(c.V1),e.Y36(v.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-sales"]],decls:5,vars:1,consts:[[1,"row","tablePage"],[1,"col-md-11","table-body","shadow-none"],[1,"container-fluid","tabs-card-page",2,"min-width","80rem"],[1,"row","row-cols-1","row-cols-md-4"],["class","col d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center"],[1,"card","masterCard",3,"ngClass","click"],[1,"card-body","d-flex","align-content-center"],[1,"card-title","align-self-center"]],template:function(l,d){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,f,5,2,"div",4),e.qZA()()()()),2&l&&(e.xp6(4),e.Q6J("ngForOf",d.cardsData))},dependencies:[h.mk,h.sg],encapsulation:2}),a})()},{path:"sku_category",loadChildren:()=>Promise.all([t.e(3383),t.e(9588)]).then(t.bind(t,99588)).then(s=>s.SkuCategoryModule)},{path:"sku_attributes",loadChildren:()=>t.e(1639).then(t.bind(t,51639)).then(s=>s.SkuAttributesModule)},{path:"product_category",loadChildren:()=>t.e(5630).then(t.bind(t,85630)).then(s=>s.ProductCategoryModule)},{path:"invoice_QR_Code",loadChildren:()=>Promise.all([t.e(9840),t.e(8592),t.e(2164)]).then(t.bind(t,4854)).then(s=>s.InvoiceQRCodeModule)},{path:"sales_uom_unit_master",loadChildren:()=>Promise.all([t.e(8592),t.e(5672)]).then(t.bind(t,15672)).then(s=>s.SalesUomUnitMasterModule)}];let S=(()=>{var s;class a{}return(s=a).\u0275fac=function(l){return new(l||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[h.ez,v.Bz.forChild(C)]}),a})()}}]);