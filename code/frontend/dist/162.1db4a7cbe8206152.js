"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[162],{20162:(T,h,s)=>{s.r(h),s.d(h,{DynamicLabelCardModule:()=>A});var c=s(96814),p=s(1076),e=s(65879),g=s(88354),u=s(98977),m=s(88059),d=s(60095),b=s(95346);function y(n,l){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"tr")(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td")(7,"input",9),e.NdJ("ngModelChange",function(i){const o=e.CHM(t).$implicit;return e.KtG(o.displayLabelName=i)}),e.qZA()(),e.TgZ(8,"td")(9,"div",10)(10,"button",11),e.NdJ("click",function(){const r=e.CHM(t).$implicit,o=e.oxw();return e.KtG(o.update(r))}),e._uU(11,"Update"),e.qZA()()()(),e.BQk()}if(2&n){const t=l.$implicit,a=l.index,i=e.oxw();e.xp6(3),e.hij(" ",1+a+(i.page-1)*i.pageSize," "),e.xp6(2),e.hij(" ",t.labelName," "),e.xp6(2),e.Q6J("ngModel",t.displayLabelName)}}const f=function(n,l,t,a){return{page:n,pageSize:l,collection:t,search:a,excelDisplay:"none"}};let C=(()=>{class n{constructor(t,a,i,r){this.labelMasterService=t,this.spinner=a,this.toastService=i,this.activatedRoute=r,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.submitted=!1,this.action="create",this.roles=[],this.moduleNames=[],this.view="",this.type="",this.module="",this.labelData=[],this.existingRoles=[]}ngOnInit(){this.activatedRoute.queryParams.subscribe(t=>{t.id&&this.getAll(t.id)})}getAll(t){this.subscription&&this.subscription.unsubscribe(),this.subscription=this.labelMasterService.getAll({menuItemId:t}).subscribe(a=>{this.labelData=a.rows,this.collection=this.labelData.length})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}trackByFn(t,a){return a?._id}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value;break;case"EXCEL":default:break;case"PAGE":this.page=t.value}}reset(){this.type="",this.module=""}update(t){this.spinner.show(),this.labelMasterService.update(t._id,t).subscribe(a=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(a.message),this.reset()})}static#e=this.\u0275fac=function(a){return new(a||n)(e.Y36(g.Ji),e.Y36(u.V),e.Y36(u.kl),e.Y36(p.gz))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-dynamic-label-card"]],decls:22,vars:15,consts:[[1,"listCard","card"],[1,"table-header"],[1,"col","heading"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],[4,"ngFor","ngForOf","ngForTrackBy"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"d-flex","justify-content-center"],[1,"btn","btn-primary","py-0",3,"click"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),e._uU(4,"Label Master"),e.qZA()()(),e.TgZ(5,"div",3)(6,"app-setting-header",4),e.NdJ("dataChange",function(o){return i.eventHeader(o)}),e.qZA(),e.TgZ(7,"table",5)(8,"thead",6)(9,"tr",7)(10,"th"),e._uU(11,"Sr No."),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Label Title"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"Label Display Name"),e.qZA(),e.TgZ(16,"th"),e._uU(17,"Action"),e.qZA()()(),e.TgZ(18,"tbody"),e.YNc(19,y,12,3,"ng-container",8),e.ALo(20,"slice"),e.ALo(21,"searchFi1ter"),e.qZA()()()()),2&a&&(e.xp6(6),e.Q6J("data",e.l5B(10,f,i.page,i.pageSize,i.collection,i.search)),e.xp6(13),e.Q6J("ngForOf",e.Dn7(20,3,e.xi3(21,7,i.labelData,i.search),(i.page-1)*i.pageSize,(i.page-1)*i.pageSize+i.pageSize))("ngForTrackBy",i.trackByFn))},dependencies:[c.sg,m.P,d.Fj,d.JJ,d.On,c.OU,b.G],encapsulation:2})}return n})();var v=s(56208);const Z=[{path:"form",component:C}];let A=(()=>{class n{static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275mod=e.oAB({type:n});static#i=this.\u0275inj=e.cJS({imports:[c.ez,p.Bz.forChild(Z),v.m]})}return n})()}}]);