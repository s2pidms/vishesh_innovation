"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4549],{5166:(B,A,m)=>{m.r(A),m.d(A,{SalaryMasterMSModule:()=>oe});var f=m(1076),P=m(43818),_=m(25116),F=m(83935),q=m(77203),e=m(65879),x=m(68187),h=m(2742),U=m(37285),J=m(88059),g=m(96814),k=m(53421);function E(u,y){if(1&u){const t=e.EpF();e.TgZ(0,"a",30),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,a=e.oxw();return e.KtG(a.openConfirmModal(null==o?null:o._id,null==o?null:o.empCode))}),e._UZ(1,"i",31),e._uU(2," Delete "),e.qZA()}}function O(u,y){if(1&u){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",22),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"td")(20,"div",23),e._UZ(21,"button",24),e.TgZ(22,"div",25)(23,"a",26),e.NdJ("click",function(){const a=e.CHM(t).$implicit,i=e.oxw();return e.KtG(i.navigateTo("../SMMS-form",null==a?null:a._id,"view"))}),e._UZ(24,"i",27),e._uU(25," View "),e.qZA(),e.TgZ(26,"a",26),e.NdJ("click",function(){const a=e.CHM(t).$implicit,i=e.oxw();return e.KtG(i.navigateTo("../SMMS-form",null==a?null:a._id,"edit"))}),e._UZ(27,"i",28),e._uU(28," Edit "),e.qZA(),e.YNc(29,E,3,0,"a",29),e.qZA()()()()}if(2&u){const t=y.$implicit,r=e.oxw();e.xp6(2),e.Oqu(null==t?null:t.empCode),e.xp6(2),e.Oqu(null==t?null:t.empFullName),e.xp6(2),e.Oqu(null==t?null:t.Basic),e.xp6(2),e.Oqu(null==t?null:t.HRA),e.xp6(2),e.Oqu(null==t?null:t.CCA),e.xp6(2),e.Oqu(t.PA),e.xp6(2),e.Oqu(null==t?null:t.empDepartment),e.xp6(2),e.Oqu(null==t?null:t.grossSalaryPerMonth),e.xp6(2),e.Oqu(null==t?null:t.effectFromDateS),e.xp6(5),e.Q6J("accessType",r.rolePermissionActions.viewAction),e.xp6(3),e.Q6J("accessType",r.rolePermissionActions.editAction),e.xp6(3),e.Q6J("ngIf",r.user==r.superAdminId)}}const Y=function(u,y,t,r){return{page:u,pageSize:y,collection:t,search:r,type:"list"}};let R=(()=>{class u{constructor(t,r,o,a,i,l,c,Z,T){this.salaryMasterService=t,this.router=r,this.exportExcelService=o,this.activatedRoute=a,this.spinner=i,this.exportToPDFService=l,this.storageService=c,this.toastService=Z,this.modalService=T,this.page=1,this.pageSize=8,this.collection=0,this.column="empCode",this.direction=1,this.search="",this.tableData=[],this.extraColumns=[],this.superAdminId=_.dA,this.user="",this.rolePermissionActions=_.a1}ngOnInit(){this.user=this.storageService.get("IDMSAUser")?.roles?.find(t=>t==this.superAdminId),this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}trackByFn(t,r){return r?._id}getAll(t=!1,r=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:t};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.salaryMasterService.getAll(o).subscribe(a=>{"EXCEL"==r?this.excelDownload(a.rows):"PDF"==r?this.pdfDownload(a.rows):(this.tableData=a.rows,this.collection=a.count,this.extraColumns=a.extraColumns),this.spinner.hide()})}delete(t){this.spinner.show(),this.salaryMasterService.delete(t).subscribe(r=>{this.spinner.hide(),this.toastService.success(r.message),this.getAll()})}openConfirmModal(t,r){const o=this.modalService.open(q.hn,{centered:!0,size:"md",backdrop:"static",keyboard:!1});o.componentInstance.heading="Confirm Deletion",o.componentInstance.confirmText=`Confirm Deletion of Employee Code ${r} ?`,o.result.then(a=>{"Yes"==a.title&&this.delete(t)},a=>{})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=t.value,this.getAll()}}excelDownload(t){this.exportExcelService.exportExcel((0,F.wT)(t))}pdfDownload(t){let r=(0,F.Zt)(t);this.exportToPDFService.generatePdf(r.tableData,r.title)}navigateTo(t,r,o){this.router.navigate([t],{relativeTo:this.activatedRoute,queryParams:{id:r,action:o}})}onSort({column:t,direction:r}){this.headers.forEach(o=>{o.sortable!==t&&(o.direction="")}),this.column=t,this.direction="asc"==r?1:-1,this.getAll()}static#e=this.\u0275fac=function(r){return new(r||u)(e.Y36(x.NP),e.Y36(f.F0),e.Y36(h.Ol),e.Y36(f.gz),e.Y36(h.V),e.Y36(h.$L),e.Y36(h.V1),e.Y36(h.kl),e.Y36(U.FF))};static#t=this.\u0275cmp=e.Xpm({type:u,selectors:[["app-salary-master-ms-list"]],viewQuery:function(r,o){if(1&r&&e.Gf(P.j,5),2&r){let a;e.iGM(a=e.CRH())&&(o.headers=a)}},decls:36,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","btn-add","px-4",3,"click"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","empCode",3,"sort"],["sortable","empFullName",1,"text-start",3,"sort"],["sortable","Basic",3,"sort"],["sortable","HRA",3,"sort"],["sortable","CCA",3,"sort"],["sortable","PA",3,"sort"],["sortable","empDepartment",3,"sort"],["sortable","grossSalaryPerMonth",3,"sort"],["sortable","effectFromDate",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["href","javascript:void(0)",3,"click",4,"ngIf"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-primary"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Salary Master - Management Staff Summary"),e.qZA()(),e.TgZ(4,"div",3),e._UZ(5,"button",4),e.TgZ(6,"button",5),e.NdJ("click",function(){return o.navigateTo("../SMMS-form",null,"create")}),e._uU(7," Salary Details "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(i){return o.eventHeader(i)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(i){return o.onSort(i)}),e._uU(15,"Employee Code"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(i){return o.onSort(i)}),e._uU(17,"Employee Name"),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(i){return o.onSort(i)}),e._uU(19,"Basic \u20b9"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(i){return o.onSort(i)}),e._uU(21,"HRA \u20b9"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(i){return o.onSort(i)}),e._uU(23,"CCA \u20b9"),e.qZA(),e.TgZ(24,"th",17),e.NdJ("sort",function(i){return o.onSort(i)}),e._uU(25,"PA \u20b9"),e.qZA(),e.TgZ(26,"th",18),e.NdJ("sort",function(i){return o.onSort(i)}),e._uU(27,"Department"),e.qZA(),e.TgZ(28,"th",19),e.NdJ("sort",function(i){return o.onSort(i)}),e._uU(29,"Gross salary (\u20b9)"),e.qZA(),e.TgZ(30,"th",20),e.NdJ("sort",function(i){return o.onSort(i)}),e._uU(31,"WEF Date"),e.qZA(),e.TgZ(32,"th"),e._uU(33,"Action"),e.qZA()()(),e.TgZ(34,"tbody"),e.YNc(35,O,30,12,"tr",21),e.qZA()()()()),2&r&&(e.xp6(4),e.Q6J("accessType",o.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,Y,o.page,o.pageSize,o.collection,o.search)),e.xp6(25),e.Q6J("ngForOf",o.tableData)("ngForTrackBy",o.trackByFn))},dependencies:[J.P,g.sg,g.O5,P.j,k.J],encapsulation:2})}return u})();var n=m(60095),H=m(21631),V=m(22096),L=m(68934),Q=m(16897),G=m(50363);function W(u,y){1&u&&e._UZ(0,"hr",53)}const j=function(u){return{"d-none":u}};function z(u,y){if(1&u){const t=e.EpF();e.TgZ(0,"div",54)(1,"button",55),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.reset())}),e._uU(2,"Reset"),e.qZA(),e.TgZ(3,"button",56),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.submit())}),e._uU(4,"Save"),e.qZA()()}if(2&u){const t=e.oxw();e.Q6J("ngClass",e.VKq(1,j,"View"==t.action))}}function K(u,y){if(1&u){const t=e.EpF();e.TgZ(0,"div",57)(1,"div",36)(2,"div",2)(3,"label",13),e._uU(4),e.qZA()(),e.TgZ(5,"div",42)(6,"span",14),e._uU(7,"\u25b6"),e.qZA()(),e.TgZ(8,"div",43)(9,"div",44),e._uU(10,"\u20b9"),e.qZA(),e.TgZ(11,"input",58),e.NdJ("input",function(o){const i=e.CHM(t).index,l=e.oxw();return e.KtG(l.handleBasicPay(o,i))}),e.qZA()(),e.TgZ(12,"div",43)(13,"div",44),e._uU(14,"\u20b9"),e.qZA(),e._UZ(15,"input",59),e.qZA()()()}if(2&u){const t=y.index,r=e.oxw();e.Q6J("formGroupName",t),e.xp6(4),e.hij(" ",r.fSC[t].controls.earningHead.value," "),e.xp6(7),e.Q6J("readonly","-"!=r.fSC[t].controls.factor.value)}}let X=(()=>{class u{constructor(t,r,o,a,i,l,c,Z){this.formBuilder=t,this.salaryMasterService=r,this.toastService=o,this.activatedRoute=a,this.spinner=i,this.validationService=l,this.utilityService=c,this.location=Z,this.submitted=!1,this.action="create",this.salaryComponentsArr=[],this.masterData={autoIncrementNo:"",employeesOptions:[],employeeContributionRate:0},this.form=this.formBuilder.group({_id:new n.p4(null),salaryMasterNumber:new n.p4(null,[n.kI.required]),employeeId:new n.p4(null,[n.kI.required]),effectFromDate:new n.p4(null,[n.kI.required]),isEmployeeProvidentFund:new n.p4(!1,[n.kI.required]),PFWagesForContribution:new n.p4({value:null,disabled:!0}),salaryComponentDetails:this.formBuilder.array([]),grossSalaryPerMonth:new n.p4(null,[n.kI.required]),grossSalaryPerAnnum:new n.p4(null,[n.kI.required]),employerPFContributionPerMonth:new n.p4(null,[n.kI.required]),employerPFContributionPerAnnum:new n.p4(null,[n.kI.required]),gratuityPerMonth:new n.p4(null,[n.kI.required]),gratuityPerAnnum:new n.p4(null,[n.kI.required]),costTOCompanyCTCPerMonth:new n.p4(null,[n.kI.required]),costTOCompanyCTCPerAnnum:new n.p4(null,[n.kI.required])}),this.handleBasicPay=(T,re)=>{let D=this.form.controls.isEmployeeProvidentFund.value,S=this.form.controls.PFWagesForContribution.value;if("true"==D&&!S)return void this.toastService.error("Please select PF Wages For Contribution.");let d=this.salaryComponentDetails.value;d[re].salaryComponentPerAnnum=Number(12*+ +T.target.value).toFixed(2);let b=d.map(s=>s.earningHead).indexOf("Basic Pay");d=d.map((s,p)=>("-"!=s.factor&&("Percentage Of CTC"==s.earningType&&(s.salaryComponentPerMonth=+this.form.controls.costTOCompanyCTCPerMonth.value/100,s.salaryComponentPerAnnum=12*+s.salaryComponentPerMonth),"Percentage Of Basic"==s.earningType&&(s.salaryComponentPerMonth=(b>=0?+d[b]?.salaryComponentPerMonth:0)*+s.factor/100,s.salaryComponentPerAnnum=12*+s.salaryComponentPerMonth)),s));let N=d.filter(s=>"Percentage Of CTC"!=s.earningType).map(s=>s.salaryComponentPerMonth).reduce((s,p)=>+s+ +p,0).toFixed(2);this.form.controls.grossSalaryPerMonth.setValue((+N).toFixed(2)),this.form.controls.grossSalaryPerAnnum.setValue(Number(12*+N).toFixed(2));let v=+N,C=0,M=+this.masterData.employeeContributionRate;D&&(C="Restricted to 15,000/-"==S?15e3*M/100:"Restricted to 30,000/-"==S?3e4*M/100:"Actual Basic + HRA + CCA"==S?M*d.filter(p=>["Basic Pay","House Rent Allowance","City Compensation Allowance"].includes(p.earningHead)).map(p=>p.salaryComponentPerMonth).reduce((p,I)=>+p+ +I,0)/100:"Actual Basic + HRA + CCA + PA"==S?M*d.filter(p=>["Basic Pay","House Rent Allowance","City Compensation Allowance","Performance Allowance"].includes(p.earningHead)).map(p=>p.salaryComponentPerMonth).reduce((p,I)=>+p+ +I,0)/100:M*(b>=0?+d[b]?.salaryComponentPerMonth:0)/100),"false"==D?(this.form.controls.employerPFContributionPerMonth.setValue((0).toFixed(2)),this.form.controls.employerPFContributionPerAnnum.setValue((0).toFixed(2))):(this.form.controls.employerPFContributionPerMonth.setValue((+C).toFixed(2)),this.form.controls.employerPFContributionPerAnnum.setValue(Number(12*+C).toFixed(2))),v+=C;let w=4.81*(b>=0?+d[b]?.salaryComponentPerMonth:0)/100;this.form.controls.gratuityPerMonth.setValue((+w).toFixed(2)),this.form.controls.gratuityPerAnnum.setValue(Number(12*+w).toFixed(2)),v+=w,this.form.controls.costTOCompanyCTCPerMonth.setValue((+v).toFixed(2)),this.form.controls.costTOCompanyCTCPerAnnum.setValue(Number(12*+v).toFixed(2)),d=d.map((s,p)=>("-"!=s.factor&&"Percentage Of CTC"==s.earningType&&(s.salaryComponentPerMonth=+v/100,s.salaryComponentPerAnnum=12*+s.salaryComponentPerMonth),s.salaryComponentPerMonth=(+s.salaryComponentPerMonth).toFixed(2),s.salaryComponentPerAnnum=(+s.salaryComponentPerAnnum).toFixed(2),s)),this.form.controls.salaryComponentDetails.patchValue(d)}}get f(){return this.form.controls}get fSC(){return this.form.controls.salaryComponentDetails.controls}get salaryComponentDetails(){return this.form.get("salaryComponentDetails")}newSalaryComponentDetails(){return new n.nJ({earningHead:new n.p4(null,[n.kI.required]),factor:new n.p4(null,[n.kI.required]),earningType:new n.p4(null,[n.kI.required]),salaryComponentId:new n.p4(null,[n.kI.required]),salaryComponentPerMonth:new n.p4(null,[n.kI.required]),salaryComponentPerAnnum:new n.p4(null,[n.kI.required])})}addSalaryComponentDetails(){this.salaryComponentDetails.push(this.newSalaryComponentDetails())}ngOnInit(){this.getInitialData()}PFWagesDisable(t){let r=this.form.controls.employerPFContributionPerMonth.value,o=this.form.controls.costTOCompanyCTCPerMonth.value,a=this.form.controls.employerPFContributionPerAnnum.value,i=this.form.controls.costTOCompanyCTCPerAnnum.value;"false"==t.target.value?(this.f.PFWagesForContribution.reset(),this.f.PFWagesForContribution.disable(),this.form.controls.employerPFContributionPerMonth.setValue((0).toFixed(2)),this.form.controls.employerPFContributionPerAnnum.setValue((0).toFixed(2)),this.form.controls.costTOCompanyCTCPerMonth.setValue(Number(o-r).toFixed(2)),this.form.controls.costTOCompanyCTCPerAnnum.setValue(Number(i-a).toFixed(2))):this.f.PFWagesForContribution.enable()}update(t){this.spinner.show(),this.salaryMasterService.update(t._id,t).subscribe(r=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(r.message),this.location.back()})}reset(){this.form.reset(),this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,L.Gw))return;let t=this.form.value;t.isOld=!1,t._id?this.update(t):(delete t._id,this.create(t))}create(t){this.spinner.show(),this.salaryMasterService.create(t).subscribe(r=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(r.message),this.location.back()})}getInitialData(){this.spinner.show(),this.salaryMasterService.getAllMasterData({}).subscribe(t=>{this.masterData=t,this.form.controls.isEmployeeProvidentFund.patchValue("false"),"false"==this.form.controls.isEmployeeProvidentFund.value&&this.f.PFWagesForContribution.disable(),this.salaryComponentDetails.clear();let o=t.salaryComponents.map(l=>(this.addSalaryComponentDetails(),{earningHead:l.earningHead,factor:l.calculationFactor,earningType:l.earningType,salaryComponentId:l._id,salaryComponentPerMonth:"0.00",salaryComponentPerAnnum:"0.00"}));this.salaryComponentsArr=o;let a=o.map(l=>l.earningHead).indexOf("Basic Pay"),i=o[a];o.splice(a,1),o.splice(0,0,i),this.form.controls.salaryComponentDetails.patchValue(o),this.form.controls.salaryMasterNumber.setValue(t.autoIncrementNo),this.activatedRoute.queryParams.pipe((0,H.z)(l=>(this.action=l.action,this.utilityService.accessDenied(this.action),l.id?this.salaryMasterService.getById(l.id):(0,V.of)({})))).subscribe(l=>{if(this.spinner.hide(),0!=Object.keys(l).length){if(l.employeeId&&l.employeeId._id&&(l.employeeId=l.employeeId._id),l.effectFromDate&&(l.effectFromDate=this.utilityService.getFormatDate(l.effectFromDate,"YYYY-MM-DD")),this.salaryComponentDetails.clear(),l.salaryComponentDetails=l.salaryComponentDetails.map(c=>(this.addSalaryComponentDetails(),{earningHead:c?.salaryComponentId?.earningHead,factor:c?.salaryComponentId?.calculationFactor,earningType:c?.salaryComponentId?.earningType,salaryComponentId:c?.salaryComponentId?._id,salaryComponentPerMonth:c.salaryComponentPerMonth,salaryComponentPerAnnum:c.salaryComponentPerAnnum})),l.salaryComponentDetails.length<this.salaryComponentsArr.length)for(let c=0;c<this.salaryComponentsArr.length;c++){const Z=this.salaryComponentsArr[c];l.salaryComponentDetails.some(T=>T.salaryComponentId==Z.salaryComponentId)||(this.addSalaryComponentDetails(),l.salaryComponentDetails.push(Z))}this.form.patchValue(l),"false"==l.isEmployeeProvidentFund?this.f.PFWagesForContribution.disable():this.f.PFWagesForContribution.enable(),this.f.employeeId.disable(),"edit"!=this.action&&this.form.disable()}})})}static#e=this.\u0275fac=function(r){return new(r||u)(e.Y36(n.QS),e.Y36(x.NP),e.Y36(h.kl),e.Y36(f.gz),e.Y36(h.V),e.Y36(Q.RJ),e.Y36(h.tI),e.Y36(g.Ye))};static#t=this.\u0275cmp=e.Xpm({type:u,selectors:[["app-salary-master-ms-form"]],decls:159,vars:18,consts:[[3,"formGroup"],[1,"row"],[1,"col-5","pe-0"],[1,"formCard","ms-0","card","mt-3","h-100"],[1,"container","h-100","d-flex"],[1,"d-flex","flex-column","flex-wrap","justify-content-between","align-content-between"],[1,"flex-fill"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row","mt-3"],[1,"col-6","pe-0","d-flex","justify-content-between","align-items-center"],[1,"form-label"],[1,"text-secondary","fs-5"],[1,"col-6","ps-3","pe-5"],[1,"d-flex","align-items-center"],[1,"col-11"],["bindLabel","label","bindValue","value","formControlName","employeeId",3,"items","clearable"],[1,"row","mt-4"],[1,"text-danger"],[1,"col-5","ps-3","pe-3"],["formControlName","effectFromDate","type","date",1,"form-control"],["formControlName","isEmployeeProvidentFund",1,"form-select",3,"change"],["disabled","",3,"value"],[3,"value"],["formControlName","PFWagesForContribution",1,"form-select"],["disabled","","selected","",3,"value"],[1,"mt-auto"],["class","row line-border mb-3",4,"ngIf"],["class","d-grid gap-2 d-md-flex justify-content-md-center mb-4",3,"ngClass",4,"ngIf"],[1,"col-7","ps-0"],[1,"container"],[1,"row","form-header","mb-2"],[1,"row","mb-1","mt-2"],[1,"col-md-12","mx-auto"],[1,"row","mb-4"],[1,"col-6","pe-0"],[1,"text-primary"],[1,"col-3","text-center"],["formArrayName","salaryComponentDetails"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"col-1","pe-0"],[1,"col-3","d-flex","inputGroup"],[1,"input-group-text"],["formControlName","grossSalaryPerMonth","type","number","readonly","",1,"form-control"],["formControlName","grossSalaryPerAnnum","type","number","readonly","",1,"form-control"],["formControlName","employerPFContributionPerMonth","type","number","readonly","",1,"form-control"],["formControlName","employerPFContributionPerAnnum","type","number","readonly","",1,"form-control"],["formControlName","gratuityPerMonth","type","number","readonly","",1,"form-control"],["formControlName","gratuityPerAnnum","type","number","readonly","",1,"form-control"],["formControlName","costTOCompanyCTCPerMonth","type","number","readonly","",1,"form-control"],["formControlName","costTOCompanyCTCPerAnnum","type","number","readonly","",1,"form-control"],[1,"row","line-border","mb-3"],[1,"d-grid","gap-2","d-md-flex","justify-content-md-center","mb-4",3,"ngClass"],["type","button",1,"btn","bg-primary","px-5","me-5",3,"click"],["type","button",1,"btn","bg-primary","px-5",3,"click"],[3,"formGroupName"],["formControlName","salaryComponentPerMonth","type","number",1,"form-control",3,"readonly","input"],["formControlName","salaryComponentPerAnnum","type","number","readonly","",1,"form-control"]],template:function(r,o){1&r&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"label",9),e._uU(10),e.ALo(11,"titlecase"),e.qZA()()(),e.TgZ(12,"div",10)(13,"div",11)(14,"div",12)(15,"label",13),e._uU(16,"Employee Name"),e.qZA(),e.TgZ(17,"span",14),e._uU(18,"\u25b6"),e.qZA()(),e.TgZ(19,"div",15)(20,"div",16)(21,"div",17),e._UZ(22,"ng-select",18),e.qZA()()()(),e.TgZ(23,"div",19)(24,"div",12)(25,"label",13),e._uU(26," With effect From Date "),e.TgZ(27,"span",20),e._uU(28,"*"),e.qZA()(),e.TgZ(29,"span",14),e._uU(30,"\u25b6"),e.qZA()(),e.TgZ(31,"div",21),e._UZ(32,"input",22),e.qZA()(),e.TgZ(33,"div",19)(34,"div",12)(35,"label",13),e._uU(36," PF Applicability "),e.TgZ(37,"span",20),e._uU(38,"*"),e.qZA()(),e.TgZ(39,"span",14),e._uU(40,"\u25b6"),e.qZA()(),e.TgZ(41,"div",15)(42,"div",16)(43,"div",17)(44,"select",23),e.NdJ("change",function(i){return o.PFWagesDisable(i)}),e.TgZ(45,"option",24),e._uU(46,"Select"),e.qZA(),e.TgZ(47,"option",25),e._uU(48,"Yes"),e.qZA(),e.TgZ(49,"option",25),e._uU(50,"No"),e.qZA()()()()()(),e.TgZ(51,"div",19)(52,"div",12)(53,"label",13),e._uU(54," PF Wages For Contribution "),e.TgZ(55,"span",20),e._uU(56,"*"),e.qZA()(),e.TgZ(57,"span",14),e._uU(58,"\u25b6"),e.qZA()(),e.TgZ(59,"div",15)(60,"div",16)(61,"div",17)(62,"select",26)(63,"option",27),e._uU(64,"Select"),e.qZA(),e.TgZ(65,"option",25),e._uU(66,"Actual Basic"),e.qZA(),e.TgZ(67,"option",25),e._uU(68," Actual Basic + HRA + CCA "),e.qZA(),e.TgZ(69,"option",25),e._uU(70," Actual Basic + HRA + CCA + PA "),e.qZA(),e.TgZ(71,"option",25),e._uU(72," Restricted to 15,000/- "),e.qZA(),e.TgZ(73,"option",25),e._uU(74," Restricted to 30,000/- "),e.qZA()()()()()()()(),e.TgZ(75,"div",28),e.YNc(76,W,1,0,"hr",29),e.YNc(77,z,5,3,"div",30),e.qZA()()()()(),e.TgZ(78,"div",31)(79,"div",3)(80,"div",32)(81,"div",33)(82,"div",8)(83,"label",9),e._uU(84," Salary Master Management Staff "),e.qZA()()(),e.TgZ(85,"div",34)(86,"div",35)(87,"div",36)(88,"div",37)(89,"h3",38),e._uU(90,"Salary-Earning"),e.qZA()(),e.TgZ(91,"div",39)(92,"label",13),e._uU(93,"Monthly"),e.qZA()(),e.TgZ(94,"div",39)(95,"label",13),e._uU(96,"Annual"),e.qZA()()(),e.TgZ(97,"div",40),e.YNc(98,K,16,3,"div",41),e.qZA(),e.TgZ(99,"div",36)(100,"div",2)(101,"label",13),e._uU(102,"Gross Salary"),e.qZA()(),e.TgZ(103,"div",42)(104,"span",14),e._uU(105,"\u25b6"),e.qZA()(),e.TgZ(106,"div",43)(107,"div",44),e._uU(108,"\u20b9"),e.qZA(),e._UZ(109,"input",45),e.qZA(),e.TgZ(110,"div",43)(111,"div",44),e._uU(112,"\u20b9"),e.qZA(),e._UZ(113,"input",46),e.qZA()(),e.TgZ(114,"div",36)(115,"div",2)(116,"label",13),e._uU(117," Employee's PF Contribution "),e.qZA()(),e.TgZ(118,"div",42)(119,"span",14),e._uU(120,"\u25b6"),e.qZA()(),e.TgZ(121,"div",43)(122,"div",44),e._uU(123,"\u20b9"),e.qZA(),e._UZ(124,"input",47),e.qZA(),e.TgZ(125,"div",43)(126,"div",44),e._uU(127,"\u20b9"),e.qZA(),e._UZ(128,"input",48),e.qZA()(),e.TgZ(129,"div",36)(130,"div",2)(131,"label",13),e._uU(132,"Gratuity"),e.qZA()(),e.TgZ(133,"div",42)(134,"span",14),e._uU(135,"\u25b6"),e.qZA()(),e.TgZ(136,"div",43)(137,"div",44),e._uU(138,"\u20b9"),e.qZA(),e._UZ(139,"input",49),e.qZA(),e.TgZ(140,"div",43)(141,"div",44),e._uU(142,"\u20b9"),e.qZA(),e._UZ(143,"input",50),e.qZA()(),e.TgZ(144,"div",36)(145,"div",2)(146,"label",13),e._uU(147," Cost To Company (CTC) "),e.qZA()(),e.TgZ(148,"div",42)(149,"span",14),e._uU(150,"\u25b6"),e.qZA()(),e.TgZ(151,"div",43)(152,"div",44),e._uU(153,"\u20b9"),e.qZA(),e._UZ(154,"input",51),e.qZA(),e.TgZ(155,"div",43)(156,"div",44),e._uU(157,"\u20b9"),e.qZA(),e._UZ(158,"input",52),e.qZA()()()()()()()()()),2&r&&(e.Q6J("formGroup",o.form),e.xp6(10),e.hij("Salary Master Management Staff [",e.lcZ(11,16,o.action),"] "),e.xp6(12),e.Q6J("items",o.masterData.employeesOptions)("clearable",!1),e.xp6(23),e.Q6J("value",null),e.xp6(2),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(14),e.Q6J("value",null),e.xp6(2),e.Q6J("value","Actual Basic"),e.xp6(2),e.Q6J("value","Actual Basic + HRA + CCA"),e.xp6(2),e.Q6J("value","Actual Basic + HRA + CCA + PA"),e.xp6(2),e.Q6J("value","Restricted to 15,000/-"),e.xp6(2),e.Q6J("value","Restricted to 30,000/-"),e.xp6(3),e.Q6J("ngIf","view"!==o.action),e.xp6(1),e.Q6J("ngIf","view"!==o.action),e.xp6(21),e.Q6J("ngForOf",o.salaryComponentDetails.controls))},dependencies:[g.mk,g.sg,g.O5,n._Y,n.YN,n.Kr,n.Fj,n.wV,n.EJ,n.JJ,n.JL,n.sg,n.u,n.x0,n.CE,G.w9,g.rS],encapsulation:2})}return u})();var $=m(56208);const te=[{path:"",redirectTo:"SMMS-list",pathMatch:"full"},{path:"SMMS-list",component:R},{path:"SMMS-form",component:X,resolve:{accessScreen:m(65876).x}}];let oe=(()=>{class u{static#e=this.\u0275fac=function(r){return new(r||u)};static#t=this.\u0275mod=e.oAB({type:u});static#o=this.\u0275inj=e.cJS({imports:[f.Bz.forChild(te),$.m]})}return u})()},13107:(B,A,m)=>{m.d(A,{t:()=>f});const f={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(B,A,m)=>{m.d(A,{J:()=>f});const f=({data:P,headers:_,widths:F,title:q})=>({tableData:{widths:F,headerRows:1,body:[_.map(h=>({text:h.header,style:"header"})),...P.map(h=>_.map(U=>({style:"subheader",text:h[U.key]})))]},title:q})}}]);