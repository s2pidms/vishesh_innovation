"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[854],{30854:(P,d,r)=>{r.r(d),r.d(d,{DskuCostSheetPrintScreenModule:()=>C});var a=r(96814),c=r(1076),g=r(56208),t=r(65879),u=r(78212),m=r(99328),s=r(60095),f=r(83344);function v(o,p){if(1&o){const n=t.EpF();t.TgZ(0,"button",46),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.windowPrint())}),t._UZ(1,"img",47),t._uU(2,"\xa0\xa0 Print "),t.qZA()}}const b=function(){return{" bg-white input-group-text text-secondary border border-0":!0}};function h(o,p){if(1&o&&(t.TgZ(0,"tr",48)(1,"td",49),t._uU(2),t.qZA(),t.TgZ(3,"td",50),t._uU(4),t.qZA(),t.TgZ(5,"td",49)(6,"div",51)(7,"span",52),t._uU(8),t.ALo(9,"companyCurrency"),t._UZ(10,"div",53),t.qZA(),t.TgZ(11,"span"),t._uU(12),t.qZA()()(),t.TgZ(13,"td",49),t._uU(14),t.qZA()()),2&o){const n=p.$implicit;t.xp6(2),t.Oqu(null==n?null:n.srNo),t.xp6(2),t.hij(" ",null==n?null:n.costHead," "),t.xp6(3),t.Q6J("ngClass",t.DdM(8,b)),t.xp6(1),t.hij(" ",t.lcZ(9,6,"INR")," "),t.xp6(4),t.hij(" ",null==n?null:n.costPerUnit," "),t.xp6(2),t.hij(" ",null==n?null:n.percentage," ")}}const Z=[{path:"",component:(()=>{class o{constructor(n,i,e){this.costSheetForDSKUService=n,this.activatedRoute=i,this.spinner=e,this.tableData={},this.pdfAction=""}ngOnInit(){this.activatedRoute.queryParams.subscribe(n=>{this.pdfAction=n.action,this.getDetailsById(n.id)})}getDetailsById(n){this.spinner.show(),this.costSheetForDSKUService.getByIdForPdf(n).subscribe(i=>{this.tableData=i,this.spinner.hide()})}windowPrint(){window.print()}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(u.q7),t.Y36(c.gz),t.Y36(m.V))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-dsku-cost-sheet-print-screen"]],decls:128,vars:15,consts:[[1,"container-fluid","printScreen"],[1,"row","justify-content-center"],["colspan","12",1,"text-center","col-10"],["class","btn btn-primary","type","button",3,"click",4,"ngIf"],[1,"page","py-3"],[1,"row","justify-content-center","mb-5","m-0"],[1,"table-responsive","shadow"],[1,"table"],["colspan","12",1,"paddingLR-lg","border-bottom-0"],[1,"text-start"],["width","200px",3,"src"],["colspan","12",1,"text-center","border-bottom-0","border-top-0"],[1,"fs-3"],[1,"border-bottom"],["colspan","12",1,"paddingLR-lg","border-top-0"],[1,"row","justify-content-between"],[1,"col-12","h-100","p-0","mt-4"],[1,"row"],[1,"col-3","px-0","text-dark"],[1,"col-1","ps-0","d-flex","align-items-center"],[1,"vr"],[1,"col-8","px-0","text-dark"],[1,"col-6"],[1,"py-4"],[1,"col-12","px-0","mb-4"],[1,"table-responsive","mb-0","px-0"],[1,"table","table-bordered","table-sticky"],["colspan","1",1,"text-center","srNo"],["colspan","3",1,"text-start","costHead"],["colspan","1",1,"text-center","costUnit"],["colspan","1",1,"text-center","percentage"],["class","text-wrap",4,"ngFor","ngForOf"],[1,"row","d-flex","justify-content-center"],[1,"col-5"],[1,"row","g-3","align-items-center","justify-content-end"],[1,"col-auto"],["for","inputPassword6",1,"col-form-label","text-dark"],[1,"col-3"],["type","text","readonly","","id","inputPassword6","aria-describedby","passwordHelpInline",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-auto","p-0"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"row","g-3","align-items-center","justify-content-start"],["colspan","12",1,"p-0"],[1,"row","d-flex","align-items-center","paddingLR-sm"],[1,"col-auto","ps-0"],["type","button",1,"btn","btn-primary",3,"click"],["src","./assets/images/print.png","width","20px","height","14px",1,"mb-2"],[1,"text-wrap"],["colspan","1",1,"text-center"],["colspan","3"],[1,"d-flex","justify-content-start","align-items-center"],[3,"ngClass"],[1,"vr","ms-3"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,v,3,0,"button",3),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"table",7)(8,"tr")(9,"td",8)(10,"div",9),t._UZ(11,"img",10),t.qZA()()(),t.TgZ(12,"tr")(13,"th",11)(14,"div",12),t._uU(15,"D-SKU Cost Sheet"),t.qZA()()(),t.TgZ(16,"tr",13)(17,"td",14)(18,"div",15)(19,"div",16)(20,"table",7)(21,"tr")(22,"td")(23,"div",17)(24,"div",18),t._uU(25,"D-SKU No."),t.qZA(),t.TgZ(26,"div",19),t._UZ(27,"div",20),t.qZA(),t.TgZ(28,"div",21),t._uU(29),t.qZA()()()(),t.TgZ(30,"tr")(31,"td")(32,"div",17)(33,"div",18),t._uU(34,"D-SKU Name"),t.qZA(),t.TgZ(35,"div",19),t._UZ(36,"div",20),t.qZA(),t.TgZ(37,"div",21),t._uU(38),t.qZA()()()(),t.TgZ(39,"tr")(40,"td",22)(41,"div",17)(42,"div",18),t._uU(43,"D-SKU Description"),t.qZA(),t.TgZ(44,"div",19),t._UZ(45,"div",20),t.qZA(),t.TgZ(46,"div",21),t._uU(47),t.qZA()()()(),t.TgZ(48,"tr")(49,"td")(50,"div",17)(51,"div",18),t._uU(52,"UoM"),t.qZA(),t.TgZ(53,"div",19),t._UZ(54,"div",20),t.qZA(),t.TgZ(55,"div",21),t._uU(56),t.qZA()()()(),t.TgZ(57,"tr")(58,"td")(59,"div",17)(60,"div",18),t._uU(61,"Product Category"),t.qZA(),t.TgZ(62,"div",19),t._UZ(63,"div",20),t.qZA(),t.TgZ(64,"div",21),t._uU(65),t.qZA()()()(),t.TgZ(66,"tr")(67,"td")(68,"div",17)(69,"div",18),t._uU(70,"Customer Name"),t.qZA(),t.TgZ(71,"div",19),t._UZ(72,"div",20),t.qZA(),t.TgZ(73,"div",21),t._uU(74),t.qZA()()()()()(),t._UZ(75,"div",23),t.qZA(),t.TgZ(76,"div",17)(77,"div",24)(78,"div",25)(79,"table",26)(80,"thead")(81,"tr")(82,"th",27),t._uU(83,"SN"),t.qZA(),t.TgZ(84,"th",28),t._uU(85," Particulars/Cost Head "),t.qZA(),t.TgZ(86,"th",29),t._uU(87,"Cost/Unit"),t.qZA(),t.TgZ(88,"th",30),t._uU(89,"%"),t.qZA()()(),t.TgZ(90,"tbody"),t.YNc(91,h,15,9,"tr",31),t.qZA()()()()(),t.TgZ(92,"div",32)(93,"div",33)(94,"div",34)(95,"div",35)(96,"label",36),t._uU(97," Profit Before Tax (PBT) : "),t.qZA()(),t.TgZ(98,"div",37)(99,"input",38),t.NdJ("ngModelChange",function(l){return e.tableData.profitBeforeTaxPercent=l}),t.qZA()()()(),t.TgZ(100,"div",39)(101,"span",40),t._UZ(102,"img",41),t.qZA()(),t.TgZ(103,"div",33)(104,"div",42)(105,"div",35)(106,"label",36),t._uU(107," Profit After Tax (PAT) : "),t.qZA()(),t.TgZ(108,"div",37)(109,"input",38),t.NdJ("ngModelChange",function(l){return e.tableData.profitAfterTaxPercent=l}),t.qZA()()()()()()(),t.TgZ(110,"tr",13)(111,"td",43)(112,"div",44)(113,"div",45),t._uU(114),t.ALo(115,"date"),t.qZA(),t.TgZ(116,"div",39)(117,"span",40),t._UZ(118,"img",41),t.qZA()(),t.TgZ(119,"div",35),t._uU(120," This is a computer generated report, hence no signature required "),t.qZA()()()(),t.TgZ(121,"tr")(122,"td",43)(123,"div",44)(124,"div",45),t._uU(125," Please Note: "),t._UZ(126,"br"),t._uU(127," This document contains confidential information. If you are not the intended recipient, you are not authorized to use or disclose the information in any form. If you received this document in error, please destroy it along with any copies and notify the sender immediately. "),t.qZA()()()()()()()()()()()),2&i&&(t.xp6(3),t.Q6J("ngIf","pdf"!=e.pdfAction),t.xp6(8),t.s9C("src",null==e.tableData?null:e.tableData.logoUrl,t.LSH),t.xp6(18),t.hij(" ",null==e.tableData?null:e.tableData.DSKUNo," "),t.xp6(9),t.hij(" ",null==e.tableData?null:e.tableData.DSKUName," "),t.xp6(9),t.hij(" ",null==e.tableData?null:e.tableData.DSKUDescription," "),t.xp6(9),t.hij(" ",null==e.tableData?null:e.tableData.UOM," "),t.xp6(9),t.hij(" ",null==e.tableData?null:e.tableData.productCategory," "),t.xp6(9),t.hij(" ",null==e.tableData?null:e.tableData.customerName," "),t.xp6(17),t.Q6J("ngForOf",e.tableData.DSKUCostDetails),t.xp6(8),t.Q6J("ngModel",e.tableData.profitBeforeTaxPercent),t.xp6(10),t.Q6J("ngModel",e.tableData.profitAfterTaxPercent),t.xp6(5),t.hij(" Document Date: ",t.xi3(115,12,null==e.tableData?null:e.tableData.createdAt,"dd-MM-YYYY")," "))},dependencies:[a.mk,a.sg,a.O5,s.Fj,s.JJ,s.On,a.uU,f.f],styles:[".table-responsive[_ngcontent-%COMP%]{overflow-x:inherit;font-size:1.4rem}.table-responsive[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;font-family:Arial,Helvetica,sans-serif!important;color:#000!important}.table-responsive[_ngcontent-%COMP%]   .paddingLR-lg[_ngcontent-%COMP%]{padding:3rem 6rem}.table-responsive[_ngcontent-%COMP%]   .paddingLR-sm[_ngcontent-%COMP%]{padding:1rem 6rem}.table-responsive[_ngcontent-%COMP%]   .border-bottom[_ngcontent-%COMP%]{border-bottom:2px solid #007daf!important}.table-responsive[_ngcontent-%COMP%]   .srNo[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   .costHead[_ngcontent-%COMP%]{background-color:#007daf!important;font-weight:400!important;color:#fff!important}.table-responsive[_ngcontent-%COMP%]   .costUnit[_ngcontent-%COMP%]{background-color:#007daf!important;font-weight:400!important;color:#fff!important;width:14rem!important}.table-responsive[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%]{background-color:#007daf!important;font-weight:400!important;color:#fff!important;width:10rem!important}.table-responsive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#7d7d7d;height:28px}@media print{button[_ngcontent-%COMP%]{display:none!important}.page[_ngcontent-%COMP%]{margin:0;border:initial;border-radius:initial;width:initial;min-height:initial;box-shadow:initial;background:initial;page-break-after:always}*[_ngcontent-%COMP%]{font-size:1.7rem!important;font-weight:600!important;margin:0;font-family:Arial,Helvetica,sans-serif!important;line-height:1.9rem;color:#000!important}.table-responsive[_ngcontent-%COMP%]{overflow-x:inherit;font-size:1.4rem}.table-responsive[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;font-family:Arial,Helvetica,sans-serif!important;color:#000!important}.table-responsive[_ngcontent-%COMP%]   .paddingLR-lg[_ngcontent-%COMP%]{padding:3rem 6rem}.table-responsive[_ngcontent-%COMP%]   .paddingLR-sm[_ngcontent-%COMP%]{padding:1rem 6rem}.table-responsive[_ngcontent-%COMP%]   .border-bottom[_ngcontent-%COMP%]{border-bottom:2px solid #007daf!important}.table-responsive[_ngcontent-%COMP%]   .srNo[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   .costHead[_ngcontent-%COMP%]{background-color:#007daf!important;font-weight:400!important;color:#fff!important}.table-responsive[_ngcontent-%COMP%]   .costUnit[_ngcontent-%COMP%]{background-color:#007daf!important;font-weight:400!important;color:#fff!important;width:14rem!important}.table-responsive[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%]{background-color:#007daf!important;font-weight:400!important;color:#fff!important;width:10rem!important}.table-responsive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#7d7d7d;height:28px}@page{size:Letter!important;margin:0}}"]})}return o})()}];let C=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[a.ez,c.Bz.forChild(Z),g.m]})}return o})()}}]);