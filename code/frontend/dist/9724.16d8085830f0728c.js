"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9724],{89724:(A,d,s)=>{s.r(d),s.d(d,{DSkuAttributesModule:()=>S});var m=s(96814),p=s(1076),t=s(65879),c=s(98977),g=s(88354),a=s(60095);function h(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"div",14)(3,"input",15),t.NdJ("ngModelChange",function(r){const l=t.CHM(o).$implicit;return t.KtG(l.order=r)}),t.qZA()()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td")(7,"div",14)(8,"input",16),t.NdJ("ngModelChange",function(r){const l=t.CHM(o).$implicit;return t.KtG(l.tabDisplayName=r)}),t.qZA()()(),t.TgZ(9,"td")(10,"input",17),t.NdJ("ngModelChange",function(r){const l=t.CHM(o).$implicit;return t.KtG(l.status=r)}),t.qZA()()()}if(2&e){const o=i.$implicit;t.xp6(3),t.Q6J("ngModel",o.order),t.xp6(2),t.hij(" ",o.tabName," "),t.xp6(3),t.Q6J("ngModel",o.tabDisplayName),t.xp6(2),t.Q6J("ngModel",o.status)}}let f=(()=>{var e;class i{constructor(n,r,u){this.spinner=n,this.toastService=r,this.attributesConfigurationService=u,this.submitted=!1,this.SKUAttributes={}}ngOnInit(){this.getAllData()}reset(){this.SKUAttributes={},this.getAllData()}submit(){this.spinner.show(),this.attributesConfigurationService.update(this.SKUAttributes._id,this.SKUAttributes).subscribe(n=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(n.message),this.reset()})}getAllData(){this.spinner.show(),this.attributesConfigurationService.getAll({type:"D-SKU"}).subscribe(n=>{this.SKUAttributes=n}),this.spinner.hide()}}return(e=i).\u0275fac=function(n){return new(n||e)(t.Y36(c.V),t.Y36(c.kl),t.Y36(g.B3))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-d-sku-form"]],decls:28,vars:1,consts:[[1,"row","justify-content-center","form-page"],[1,"col-md-11","card-form","pb-4","mb-4"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row","justify-content-center"],[1,"table-responsive"],[1,"table","table-bordered","mt-4"],[1,"bg-primary"],[1,"text-white"],[4,"ngFor","ngForOf"],[1,"d-grid","gap-2","d-md-flex","justify-content-md-center"],["type","button",1,"btn","bg-primary","px-5","me-3",3,"click"],["type","button",1,"btn","bg-primary","px-5",3,"click"],[1,"d-flex","justify-content-center"],["type","number",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelChange"],["type","text",1,"form-control","form-control-smm","w-25",3,"ngModel","ngModelChange"],["type","checkbox",1,"form-check-input",3,"ngModel","ngModelChange"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5,"D-SKU Attributes Configuration "),t.qZA()()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"table",7)(10,"thead",8)(11,"tr",9)(12,"th"),t._uU(13,"Order"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Tab Name"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Tab Display Name"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Status"),t.qZA()()(),t.TgZ(20,"tbody"),t.YNc(21,h,11,4,"tr",10),t.qZA()()(),t.TgZ(22,"div")(23,"div",11)(24,"button",12),t.NdJ("click",function(){return r.reset()}),t._uU(25," Reset "),t.qZA(),t.TgZ(26,"button",13),t.NdJ("click",function(){return r.submit()}),t._uU(27," Save "),t.qZA()()()()()()()),2&n&&(t.xp6(21),t.Q6J("ngForOf",r.SKUAttributes.items))},dependencies:[m.sg,a.Fj,a.wV,a.Wl,a.JJ,a.On],encapsulation:2}),i})();var b=s(19964),C=s(56208);const v=[{path:"form",component:f,resolve:{accessScreen:b.xr}}];let S=(()=>{var e;class i{}return(e=i).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,p.Bz.forChild(v),C.m]}),i})()}}]);