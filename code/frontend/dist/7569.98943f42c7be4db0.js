"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7569],{66177:(g,m,s)=>{s.d(m,{Y:()=>A});var t=s(60095),d=s(45594),h=s(43818),e=s(65879),l=s(37285),_=s(96814);function D(i,u){1&i&&e._UZ(0,"img",20)}function p(i,u){1&i&&e._UZ(0,"img",21)}function y(i,u){if(1&i&&(e.TgZ(0,"li",23)(1,"span",24),e._uU(2),e.qZA()()),2&i){const a=e.oxw(),r=a.$implicit,n=a.pages;e.xp6(2),e.AsE(" Page ",r," of ",n[n.length-1]," ")}}function C(i,u){1&i&&e.YNc(0,y,3,2,"li",22),2&i&&e.Q6J("ngIf",u.pages.length>0)}function O(i,u){if(1&i){const a=e.EpF();e.TgZ(0,"ngb-pagination",16),e.NdJ("pageChange",function(n){e.CHM(a);const c=e.oxw();return e.KtG(c.page=n)}),e.YNc(1,D,1,0,"ng-template",17),e.YNc(2,p,1,0,"ng-template",18),e.YNc(3,C,1,1,"ng-template",19),e.qZA()}if(2&i){const a=e.oxw();e.Q6J("collectionSize",a.oldDocumentDetails.length)("page",a.page)("pageSize",a.pageSize)("boundaryLinks",!1)}}function T(i,u){if(1&i&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.ALo(10,"date"),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA()()),2&i){const a=u.$implicit;e.xp6(2),e.Oqu(a.documentNo),e.xp6(2),e.Oqu(e.xi3(5,7,a.documentDate,"dd-MM-YYYY")),e.xp6(3),e.Oqu(a.revisionNo),e.xp6(2),e.Oqu(e.xi3(10,10,a.revisionDate,"dd-MM-YYYY")),e.xp6(3),e.Oqu(a.docCreatedBy),e.xp6(2),e.Oqu(a.docApprovedBy),e.xp6(2),e.Oqu(a.QMSDocumentNo)}}let U=(()=>{class i{constructor(a){this.activeModal=a,this.oldDocumentDetails=[],this.action="",this.column="documentNo",this.direction=1,this.search="",this.page=1,this.pageSize=5,this.collection=0}ngOnInit(){this.collection=this.oldDocumentDetails.length,this.oldDocumentDetails=this.oldDocumentDetails.reverse()}eventHeader(a){switch(a.key){case"SEARCH":this.search=a.value;break;case"EXCEL":case"PAGE":this.page=a.value}}static#e=this.\u0275fac=function(r){return new(r||i)(e.Y36(l.Kz))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-bom-document-revision-history"]],viewQuery:function(r,n){if(1&r&&e.Gf(h.j,5),2&r){let c;e.iGM(c=e.CRH())&&(n.headers=c)}},inputs:{oldDocumentDetails:"oldDocumentDetails",action:"action"},decls:33,vars:2,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"modelPage","pb-4"],[1,"modal-body"],[1,"row","mt-0"],[1,"col-12","d-flex","justify-content-center"],[3,"collectionSize","page","pageSize","boundaryLinks","pageChange",4,"ngIf"],[1,"row","mt-4"],[1,"table-responsive"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],[4,"ngFor","ngForOf"],[3,"collectionSize","page","pageSize","boundaryLinks","pageChange"],["ngbPaginationPrevious",""],["ngbPaginationNext",""],["ngbPaginationPages",""],["src","./assets/new_icons/pagination_prev.svg","width","20rem"],["src","./assets/new_icons/pagination_next.svg","width","20rem"],["class","ngb-custom-pages-item align-self-center",4,"ngIf"],[1,"ngb-custom-pages-item","align-self-center"],[1,"page-label","me-2","ms-1"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"Review History"),e.qZA(),e.TgZ(4,"div")(5,"button",3),e.NdJ("click",function(){return n.activeModal.close()}),e._UZ(6,"i",4),e.qZA()()()(),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8),e.YNc(11,O,4,4,"ngb-pagination",9),e.qZA()(),e.TgZ(12,"div",10)(13,"div",11)(14,"table",12)(15,"thead",13)(16,"tr",14)(17,"th"),e._uU(18,"Document No."),e.qZA(),e.TgZ(19,"th"),e._uU(20,"Document Date"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Revision No."),e.qZA(),e.TgZ(23,"th"),e._uU(24,"Revision Date"),e.qZA(),e.TgZ(25,"th"),e._uU(26,"Doc Created by"),e.qZA(),e.TgZ(27,"th"),e._uU(28,"Doc Reviewed/Approved by"),e.qZA(),e.TgZ(29,"th"),e._uU(30,"QMS Document No."),e.qZA()()(),e.TgZ(31,"tbody"),e.YNc(32,T,17,13,"tr",15),e.qZA()()()()()()),2&r&&(e.xp6(11),e.Q6J("ngIf",n.oldDocumentDetails.length>0),e.xp6(21),e.Q6J("ngForOf",n.oldDocumentDetails))},dependencies:[_.sg,_.O5,l.N9,l.GZ,l.ju,l.Qy,_.uU],styles:[".pagination[_ngcontent-%COMP%]{margin-bottom:0!important}ngb-pagination[_ngcontent-%COMP%]     ul.pagination{margin:0!important}.page-label[_ngcontent-%COMP%]{color:var(--bs-dark);padding:0 1rem;font-size:1.4rem}ngb-pagination[_ngcontent-%COMP%]     ul>li:not(.active)>a{border:none!important;color:var(--bs-white)!important;background-color:#fff!important;box-shadow:none}"]})}return i})();var k=s(16897),M=s(98977);let A=(()=>{class i{get f(){return this.form.controls}constructor(a,r,n,c){this.activeModal=a,this.validationService=r,this.utilityService=n,this.modalService=c,this.documentDetails=[],this.oldDocumentDetails=[],this.documentDetailsObj={},this.action="",this.BOMNo="",this.form=new t.nJ({documentNo:new t.p4(null,[t.kI.required]),documentDate:new t.p4(this.utilityService.getTodayDate("YYYY-MM-DD"),[t.kI.required]),revisionNo:new t.p4(null,[t.kI.required]),revisionDate:new t.p4(this.utilityService.getTodayDate("YYYY-MM-DD"),[t.kI.required]),docCreatedBy:new t.p4(null,[t.kI.required]),docApprovedBy:new t.p4(null,[t.kI.required]),QMSDocumentNo:new t.p4(null,[t.kI.required])})}ngOnInit(){this.documentDetails=[...this.oldDocumentDetails],this.documentDetailsObj&&this.form.patchValue(this.documentDetailsObj),"view"==this.action&&this.form.disable(),this.form.controls.documentNo.setValue(this.BOMNo)}dismissModel(){if(this.validationService.checkErrors(this.form,d._4))return;let a=this.form.value;a&&(this.documentDetails.push(a),this.activeModal.close({documentDetails:this.documentDetails,documentDetailsObj:a}))}openRevisionReview(){this.oldDocumentDetails.length>0&&(this.modalService.open(U,{centered:!0,size:"xl",backdrop:"static",keyboard:!1}).componentInstance.oldDocumentDetails=this.oldDocumentDetails)}static#e=this.\u0275fac=function(r){return new(r||i)(e.Y36(l.Kz),e.Y36(k.RJ),e.Y36(M.tI),e.Y36(l.FF))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-bom-document-details"]],inputs:{oldDocumentDetails:"oldDocumentDetails",documentDetailsObj:"documentDetailsObj",action:"action",BOMNo:"BOMNo"},decls:72,vars:1,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,""],[3,"formGroup"],[1,"row","px-5","mt-4"],[1,"col-6"],[1,"form-label","mb-1"],[1,"text-danger"],[1,"d-flex"],["type","text","formControlName","documentNo","readonly","",1,"form-control","input-margin"],["type","date","formControlName","documentDate",1,"form-control","input-margin"],[1,"row","mt-4","px-5"],["type","text","formControlName","revisionNo",1,"form-control","input-margin"],["type","date","formControlName","revisionDate",1,"form-control","input-margin"],["type","text","formControlName","docCreatedBy",1,"form-control","input-margin"],["type","text","formControlName","docApprovedBy",1,"form-control","input-margin"],[1,"row","mt-3","px-5"],[1,"col"],["type","text","formControlName","QMSDocumentNo",1,"form-control","input-margin"],[1,"line-border","my-5"],[1,"row","px-5"],[1,"text-start","mb-5"],["type","button",1,"btn","bg-primary","px-5",3,"click"],[1,"text-end","mb-5"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"Document Details"),e.qZA(),e.TgZ(4,"div")(5,"button",3),e.NdJ("click",function(){return n.activeModal.close()}),e._UZ(6,"i",4),e.qZA()()(),e.TgZ(7,"div",5)(8,"form",6)(9,"div",7)(10,"div",8)(11,"label",9),e._uU(12," Document No. "),e.TgZ(13,"span",10),e._uU(14,"*"),e.qZA()(),e.TgZ(15,"div",11),e._UZ(16,"input",12),e.qZA()(),e.TgZ(17,"div",8)(18,"label",9),e._uU(19," Document Date "),e.TgZ(20,"span",10),e._uU(21,"*"),e.qZA()(),e.TgZ(22,"div",11),e._UZ(23,"input",13),e.qZA()()(),e.TgZ(24,"div",14)(25,"div",8)(26,"label",9),e._uU(27," Revision No. "),e.TgZ(28,"span",10),e._uU(29,"*"),e.qZA()(),e.TgZ(30,"div",11),e._UZ(31,"input",15),e.qZA()(),e.TgZ(32,"div",8)(33,"label",9),e._uU(34," Revision Date "),e.TgZ(35,"span",10),e._uU(36,"*"),e.qZA()(),e.TgZ(37,"div",11),e._UZ(38,"input",16),e.qZA()()(),e.TgZ(39,"div",14)(40,"div",8)(41,"label",9),e._uU(42," Doc Created by "),e.TgZ(43,"span",10),e._uU(44,"*"),e.qZA()(),e.TgZ(45,"div",11),e._UZ(46,"input",17),e.qZA()(),e.TgZ(47,"div",8)(48,"label",9),e._uU(49," Doc Reviewed/Approved by "),e.TgZ(50,"span",10),e._uU(51,"*"),e.qZA()(),e.TgZ(52,"div",11),e._UZ(53,"input",18),e.qZA()()(),e.TgZ(54,"div",19)(55,"div",20)(56,"label",9),e._uU(57," QMS Document No. "),e.TgZ(58,"span",10),e._uU(59,"*"),e.qZA()(),e.TgZ(60,"div",11),e._UZ(61,"input",21),e.qZA()()(),e._UZ(62,"hr",22),e.qZA(),e.TgZ(63,"div",23)(64,"div",8)(65,"div",24)(66,"button",25),e.NdJ("click",function(){return n.openRevisionReview()}),e._uU(67," Revision History "),e.qZA()()(),e.TgZ(68,"div",8)(69,"div",26)(70,"button",25),e.NdJ("click",function(){return n.dismissModel()}),e._uU(71,"Save & Close"),e.qZA()()()()()()),2&r&&(e.xp6(8),e.Q6J("formGroup",n.form))},dependencies:[t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u],encapsulation:2})}return i})()},13107:(g,m,s)=>{s.d(m,{t:()=>t});const t={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(g,m,s)=>{s.d(m,{J:()=>t});const t=({data:d,headers:h,widths:e,title:l})=>({tableData:{widths:e,headerRows:1,body:[h.map(p=>({text:p.header,style:"header"})),...d.map(p=>h.map(y=>({style:"subheader",text:p[y.key]})))]},title:l})},65129:(g,m,s)=>{s.d(m,{o7:()=>D,W0:()=>_,_D:()=>pe,xD:()=>he,TN:()=>T,CE:()=>O,cz:()=>i,Xg:()=>A,B7:()=>me,cX:()=>c,W5:()=>n,FY:()=>V,t_:()=>$,sm:()=>Me,t8:()=>ke,KY:()=>oe,lX:()=>te,e7:()=>ge,Do:()=>De,PQ:()=>de,OX:()=>ne,rw:()=>re,EW:()=>ie,Tf:()=>Ue,$k:()=>Te});var t=s(13107),d=s(28402);let h=["*","*","*","*","*","*","*","*","*"],e="Bill of Material (BoM) of Child Item",l=[{header:"BoM No.",key:"BOMNo",...t.t},{header:"Item Code",key:"childItemCode",...t.t},{header:"Item Name",key:"childItemName",...t.t},{header:"Item Description",key:"childItemDescription",...t.t},{header:"UoM",key:"UOM",...t.t},{header:"Part Count",key:"partCount",...t.t},{header:"Material Cost",key:"totalMaterialCost",...t.t},{header:"Status",key:"status",...t.t}];const _=o=>({title:e,csvData:o,headers:l}),D=o=>(0,d.J)({data:o,headers:l,widths:h,title:e});let p=["*","*","*","*","*","*","*","*"],y="Bill of Material (BoM) of Gr. Child Item",C=[{header:"BoM No.",key:"BOMNo",...t.t},{header:"Item Code",key:"grandChildItemCode",...t.t},{header:"Item Name",key:"grandChildItemName",...t.t},{header:"Item Description",key:"grandChildItemDescription",...t.t},{header:"UoM",key:"UOM",...t.t},{header:"Part Count",key:"partCount",...t.t},{header:"Material Cost",key:"totalMaterialCost",...t.t},{header:"Status",key:"status",...t.t}];const O=o=>({title:y,csvData:o,headers:C}),T=o=>(0,d.J)({data:o,headers:C,widths:p,title:y});let U=["*","*","*","*","*","*","*","*","*","*"],k="Bill of Material (BoM) of Product",M=[{header:"BoM No.",key:"BOMNo",...t.t},{header:"Product No.",key:"productNo",...t.t},{header:"Product Category",key:"productCategory",...t.t},{header:"Product Name",key:"productName",...t.t},{header:"Product Description",key:"productDescription",...t.t},{header:"UoM",key:"UOM",...t.t},{header:"Part Count",key:"partCount",...t.t},{header:"Material Cost",key:"totalMaterialCost",...t.t},{header:"Status",key:"status",...t.t}];const A=o=>({title:k,csvData:o,headers:M}),i=o=>(0,d.J)({data:o,headers:M,widths:U,title:k});let u=["*","*","*","*","*","*","*","*","*"],a="Bill of Material (BoM) of SKU",r=[{header:"BoM No.",key:"BOMNo",...t.t},{header:"SKU Code",key:"SKUCode",...t.t},{header:"SKU Name",key:"SKUName",...t.t},{header:"SKU Description",key:"SKUDescription",...t.t},{header:"UoM",key:"UOM",...t.t},{header:"Part Count",key:"partCount",...t.t},{header:"Total Material Cost",key:"totalMaterialCost",...t.t},{header:"Status",key:"status",...t.t}];const n=o=>({title:a,csvData:o,headers:r}),c=o=>(0,d.J)({data:o,headers:r,widths:u,title:a});let W=["*","*","*","*","*","*","*","*","*","*"],f="Child Item Master",v=[{header:"Child Item Category ",key:"childItemCategory",...t.t},{header:"Item Code",key:"itemCode",...t.t},{header:"Item Name",key:"itemName",...t.t},{header:"Item Description",key:"itemDescription",...t.t},{header:"UoM",key:"unitOfMeasurement",...t.t},{header:"HSN Code",key:"HSNCode",...t.t},{header:"Item Cost",key:"itemCost",...t.t},{header:"Source of mfg.",key:"sourceOfManufacturing",...t.t},{header:"Shelf Life (Months)",key:"shelfLife",...t.t},{header:"Status",key:"status",...t.t}];const $=o=>({title:f,csvData:o,headers:v}),V=o=>(0,d.J)({data:o,headers:v,widths:W,title:f});let ee=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],P="Gr. Child Item Master",N=[{header:"Gr. Child Item Category ",key:"childItemCategory",...t.t},{header:"Item Code",key:"itemCode",...t.t},{header:"Item Name",key:"itemName",...t.t},{header:"Item Description",key:"itemDescription",...t.t},{header:"UoM",key:"unitOfMeasurement",...t.t},{header:"HSN Code",key:"HSNCode",...t.t},{header:"Item Cost",key:"itemCost",...t.t},{header:"Shelf Life (M) ",key:"shelfLife",...t.t},{header:"Source of mfg.",key:"sourceOfManufacturing",...t.t},{header:"Status",key:"status",...t.t}];const te=o=>({title:P,csvData:o,headers:N}),oe=o=>(0,d.J)({data:o,headers:N,widths:ee,title:P});let ae=["*","*","*","*","*","*","*","*","*","*","*","*"],b="Product Master",Z=[{header:"Product No.",key:"productNo",...t.t},{header:"Product Category/Code",key:"productCategory",...t.t},{header:"Product Name",key:"productName",...t.t},{header:"Product Description",key:"productDescription",...t.t},{header:"HSN Code",key:"hsn",...t.t},{header:"UoM",key:"primaryUnit",...t.t},{header:"Unit Cost",key:"unitCost",...t.t},{header:"Source Of MFG.",key:"sourceOfMFG",...t.t},{header:"Shelf Life [Months]",key:"shelfLife",...t.t},{header:"Storage Temperature",key:"storageTemp",...t.t},{header:"Storage Humidity",key:"storageHumidity",...t.t}];const ie=o=>({title:b,csvData:o,headers:Z}),re=o=>(0,d.J)({data:o,headers:Z,widths:ae,title:b});let se=["*","*","*","*","*","*","*","*","*"],I="Process Resource Management",B=[{header:"Process Name",key:"processName",...t.t},{header:"Work Centre/Machine Name",key:"machineName",...t.t},{header:"# of Manpower",key:"noOfManpower",...t.t},{header:"Output/hr",key:"outputPerHr",...t.t},{header:"Labour Cost/hr",key:"labourCostPerHr",...t.t},{header:"Power consumption cost/hr",key:"powerConsumptionPerHr",...t.t}];const ne=o=>({title:I,csvData:o,headers:B}),de=o=>(0,d.J)({data:o,headers:B,widths:se,title:I});let F=[{header:"Item Code",key:"itemCode",...t.t},{header:"Item Name",key:"itemName",...t.t},{header:"Item Description",key:"itemDescription",...t.t},{header:"UoM",key:"UOM",...t.t},{header:"Qty/SKU Unit",key:"qtyPerSKUUnit",...t.t},{header:"Waste %",key:"wastePercentage",...t.t},{header:"Qty/Part Count",key:"partCount",...t.t},{header:"Unit Cost",key:"unitCost",...t.t},{header:"Item Cost",key:"itemCost",...t.t}];const me=o=>({title:"Bill of Material (BoM) of SKU",csvData:o,headers:F});let H=[{header:"Item Code<",key:"itemCode",...t.t},{header:"Item Name",key:"itemName",...t.t},{header:"Item Description",key:"itemDescription",...t.t},{header:"UoM",key:"UOM",...t.t},{header:"Qty/SKU Unit",key:"qtyPerSKUUnit",...t.t},{header:"Waste %",key:"wastePercentage",...t.t},{header:"Qty/Part Count",key:"partCount",...t.t},{header:"Unit Cost",key:"unitCost",...t.t},{header:"Item Cost",key:"itemCost",...t.t}];const he=o=>({title:"BOM Of Grand Child Part",csvData:o,headers:H});let G=[{header:"Item Code",key:"itemCode",...t.t},{header:"Item Name",key:"itemName",...t.t},{header:"Item Description",key:"itemDescription",...t.t},{header:"UoM",key:"UOM",...t.t},{header:"Qty/SKU Unit",key:"qtyPerSKUUnit",...t.t},{header:"Waste %",key:"wastePercentage",...t.t},{header:"Qty/Part Count",key:"partCount",...t.t},{header:"Unit Cost",key:"unitCost",...t.t},{header:"Item Cost",key:"itemCost",...t.t}];const pe=o=>({title:"Bill of Material (BoM) of D-SKU",csvData:o,headers:G});let ye=["*","*","*","*","*","*","*"],L="Process Master",Y=[{header:"Process ID",key:"processId",...t.t},{header:"Process Name",key:"processName",...t.t},{header:"Source",key:"sourceOfManufacturing",...t.t},{header:"Primary Assets/Allocation",key:"primaryAssetAllocation",...t.t},{header:"Std.Output/H",key:"unitProcessOutput",...t.t},{header:"Labour Rate/Hr",key:"totalRatePerHr",...t.t},{header:"Asset Rate/Hr",key:"totalAllocatedAssetCostPerHr",...t.t}];const De=o=>({title:L,csvData:o,headers:Y}),ge=o=>(0,d.J)({data:o,headers:Y,widths:ye,title:L});let Ce=["*","*","*","*","*","*","*","*","*","*","*"],J="Direct Cost",Q=[{header:"Product Category",key:"productCategory",...t.t},{header:"SKU No.",key:"SKUNo",...t.t},{header:"SKU Name",key:"SKUName",...t.t},{header:"SKU Description",key:"SKUDescription",...t.t},{header:"UoM",key:"UOM",...t.t},{header:"Labour Cost/Unit",key:"totalLabourCostPerUnit",...t.t},{header:"Asset Cost/Unit",key:"totalAssetCostPerUnit",...t.t},{header:"Tooling Cost/Unit",key:"totalToolingCostPerUnit",...t.t},{header:"Total Direct Process Cost/Unit",key:"totalCostPerUnit",...t.t}];const ke=o=>({title:J,csvData:o,headers:Q}),Me=o=>(0,d.J)({data:o,headers:Q,widths:Ce,title:J});let Oe=["*","*","*","*","*","*","*","*","*","*","*","*"],X="SKU Cost Sheet",z=[{header:"SKU No",key:"SKUNo",...t.t},{header:"SKU Name",key:"SKUName",...t.t},{header:"SKU Description",key:"SKUDescription",...t.t},{header:"UoM",key:"UOM",...t.t},{header:"COGS",key:"costOfGoodsSold",...t.t},{header:"OPEX",key:"operatingExpenses",...t.t},{header:"Total COO",key:"totalCostOfOperation",...t.t},{header:"Profit",key:"profit",...t.t},{header:"Selling Price",key:"sellingPrice",...t.t}];const Te=o=>({title:X,csvData:o,headers:z}),Ue=o=>(0,d.J)({data:o,headers:z,widths:Oe,title:X})},45594:(g,m,s)=>{s.d(m,{PM:()=>d,ZA:()=>t,_4:()=>e,vn:()=>h});const t=[{message:"BOM No is Required",key:"BOMNo"},{message:"SKU Code is Required",key:"SKUCode"},{message:"SKU Name is Required",key:"SKUName"},{message:"Part Count is Required",key:"partCount"}],d=[{message:"BOM No is Required",key:"BOMNo"},{message:"Child Item Code is Required",key:"childItemCode"},{message:"Child Item Name is Required",key:"childItemName"},{message:"Part Count is Required",key:"partCount"}],h=[{message:"BOM No is Required",key:"BOMNo"},{message:"Gr. Child Item Code is Required",key:"grandChildItemCode"},{message:"Gr. Child Item Name is Required",key:"grandChildItemName"},{message:"Part Count is Required",key:"partCount"}],e=[{message:"Document No. is Required",key:"documentNo"},{message:"Document Date is Required",key:"documentDate"},{message:"Revision No. is Required",key:"revisionNo"},{message:"Revision Date is Required",key:"revisionDate"},{message:"Doc Created by is Required",key:"docCreatedBy"},{message:"Doc Reviewed/Approved by is Required",key:"docApprovedBy"},{message:"QMS Document No. is Required",key:"QMSDocumentNo"}]}}]);