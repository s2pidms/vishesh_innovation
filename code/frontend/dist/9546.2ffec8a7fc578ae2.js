"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9546],{39546:(T,p,s)=>{s.r(p),s.d(p,{LabourRateModule:()=>Z});var m=s(96814),h=s(1076),g=s(25116),t=s(65879),y=s(2498),d=s(98977),u=s(60095),C=s(53421),f=s(83344);function b(o,l){if(1&o){const n=t.EpF();t.TgZ(0,"tr")(1,"td",12),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"div",20)(5,"input",21),t.NdJ("ngModelChange",function(e){const a=t.CHM(n).$implicit;return t.KtG(a.monthlySalary=e)})("input",function(){const e=t.CHM(n),i=e.$implicit,a=e.index,c=t.oxw();return t.KtG(c.setSalaryPerHrs(i,a))}),t.qZA()()(),t.TgZ(6,"td")(7,"div",20)(8,"input",21),t.NdJ("ngModelChange",function(e){const a=t.CHM(n).$implicit;return t.KtG(a.daysPerMonth=e)})("input",function(){const e=t.CHM(n),i=e.$implicit,a=e.index,c=t.oxw();return t.KtG(c.setSalaryPerHrs(i,a))}),t.qZA()()(),t.TgZ(9,"td")(10,"div",20)(11,"input",21),t.NdJ("ngModelChange",function(e){const a=t.CHM(n).$implicit;return t.KtG(a.shiftHrs=e)})("input",function(){const e=t.CHM(n),i=e.$implicit,a=e.index,c=t.oxw();return t.KtG(c.setSalaryPerHrs(i,a))}),t.qZA()()(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"div",20)(16,"input",22),t.NdJ("ngModelChange",function(e){const a=t.CHM(n).$implicit;return t.KtG(a.revisionDate=e)}),t.qZA()()()()}if(2&o){const n=l.$implicit;t.xp6(2),t.Oqu(n.category),t.xp6(3),t.Q6J("ngModel",n.monthlySalary),t.xp6(3),t.Q6J("ngModel",n.daysPerMonth),t.xp6(3),t.Q6J("ngModel",n.shiftHrs),t.xp6(2),t.Oqu(n.salaryPerHour),t.xp6(3),t.Q6J("ngModel",n.revisionDate)}}let _=(()=>{var o;class l{constructor(r,e,i,a){this.labourRateMasterService=r,this.spinner=e,this.toastService=i,this.utilityService=a,this.tableData=[],this.rolePermissionActions=g.a1}ngOnInit(){this.getInitialData()}reset(){this.getInitialData()}update(){this.spinner.show(),this.labourRateMasterService.update(this.tableData).subscribe(r=>{this.spinner.hide(),this.toastService.success(r.message),this.getInitialData(),this.reset()})}getInitialData(){this.spinner.show(),this.labourRateMasterService.getAllMasterData({}).subscribe(r=>{this.tableData=r.map(e=>(e.revisionDate=this.utilityService.getFormatDate(e.revisionDate,"YYYY-MM-DD"),e)),this.spinner.hide()})}setSalaryPerHrs(r,e){this.tableData[e].salaryPerHour=r.monthlySalary&&r.daysPerMonth&&r.shiftHrs?+(+r?.monthlySalary/+r?.daysPerMonth/+r?.shiftHrs).toFixed(2):0}trackByFn(r,e){return e?._id}}return(o=l).\u0275fac=function(r){return new(r||o)(t.Y36(y.jf),t.Y36(d.V),t.Y36(d.kl),t.Y36(d.tI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-labour-rate-form"]],decls:36,vars:6,consts:[[1,"formCard","card"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row","mt-4","justify-content-center"],[1,"col-9","px-0"],[1,"table-responsive"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],[1,"text-start"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"row","line-border"],[1,"row","my-3"],["appAccessControl","",1,"col","text-center",3,"accessType"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"click"],[1,"d-flex","justify-content-center"],["type","number",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelChange","input"],["type","date",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelChange"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Labour Rate Master (For Costing)"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"table",9)(11,"thead",10)(12,"tr",11)(13,"th",12),t._uU(14,"Category"),t.qZA(),t.TgZ(15,"th"),t._uU(16),t.ALo(17,"companyCurrency"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Day/Month"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Shift Hrs"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Salary (INR)/Hour"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Revision Dt."),t.qZA()()(),t.TgZ(26,"tbody"),t.YNc(27,b,17,6,"tr",13),t.qZA()()()()()(),t._UZ(28,"hr",14),t.TgZ(29,"div",15)(30,"div",16)(31,"div",17)(32,"button",18),t.NdJ("click",function(){return e.reset()}),t._uU(33,"Reset"),t.qZA(),t.TgZ(34,"button",19),t.NdJ("click",function(){return e.update()}),t._uU(35,"Save"),t.qZA()()()()()()),2&r&&(t.xp6(16),t.hij("Monthly Salary (",t.lcZ(17,4,"INR"),")"),t.xp6(11),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn),t.xp6(3),t.Q6J("accessType",e.rolePermissionActions.createAction))},dependencies:[m.sg,u.Fj,u.wV,u.JJ,u.On,C.J,f.f],encapsulation:2}),l})();var v=s(56208);const M=[{path:"",redirectTo:"form",pathMatch:"full"},{path:"form",component:_}];let Z=(()=>{var o;class l{}return(o=l).\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.ez,h.Bz.forChild(M),v.m]}),l})()}}]);