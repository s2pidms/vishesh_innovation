"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7821],{13107:(I,n,o)=>{o.d(n,{t:()=>r});const r={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(I,n,o)=>{o.d(n,{J:()=>r});const r=({data:p,headers:u,widths:y,title:P})=>({tableData:{widths:y,headerRows:1,body:[u.map(d=>({text:d.header,style:"header"})),...p.map(d=>u.map(R=>({style:"subheader",text:d[R.key]})))]},title:P})},93709:(I,n,o)=>{o.d(n,{Ii:()=>f,KD:()=>_,j7:()=>h,cL:()=>s,ve:()=>E,C$:()=>k,Bg:()=>q,y3:()=>B});var r=o(13107),c=o(28402);let d=["*","*","*","*","*","*","*","*"],R="MRN Report - Status Wise",a=[{header:"MRN No.",key:"MRNNumber",...r.t},{header:" MRN Dt.",key:"MRNDate",...r.t},{header:"GRN No.",key:"GRNNumber",...r.t},{header:"GRN Dt.",key:"GRNDate",...r.t},{header:"Supplier Name",key:"supplierName",...r.t},{header:"Supplier Inv. #",key:"supplierInvoice",...r.t},{header:"Invoice Dt.",key:"supplierDate",...r.t},{header:"MRN Status",key:"MRNStatus",...r.t}];const s=i=>({title:R,csvData:i,headers:a}),h=i=>(0,c.J)({data:i,headers:a,widths:d,title:R});let e=[39,39,39,39,39,39,39,39,39,39,39,39],t="MRN Report - Item Wise",l=[{header:"MRN No.",key:"MRNNumber",...r.t},{header:"MRN Dt.",key:"MRNDate",...r.t},{header:"GRN No.",key:"GRNNumber",...r.t},{header:"Item Code",key:"itemCode",...r.t},{header:"Item Name",key:"itemName",...r.t},{header:"Item Description",key:"itemDescription",...r.t},{header:"Batch No.",key:"batchNo",...r.t},{header:"Batch Dt.",key:"batchDate",...r.t},{header:"UoM",key:"UOM",...r.t},{header:"GRN Qty.",key:"GRNQty",...r.t},{header:"Rel Qty.",key:"releasedQty",...r.t},{header:"Rej Qty.",key:"rejectedQty",...r.t}];const _=i=>({title:t,csvData:i,headers:l}),f=i=>(0,c.J)({data:i,headers:l,widths:e,title:t});let v=["*","*","*"],A="PDI Report",S=[{header:"PDIR #",key:"preDispatchCode",...r.t},{header:"PDIR Date",key:"preDispatchDate",...r.t},{header:"Customer",key:"customerName",...r.t}];const k=i=>({title:A,csvData:i,headers:S}),E=i=>(0,c.J)({data:i,headers:S,widths:v,title:A});let T=["*","*","*","*","*"],N="Raw Material Inspection Report ",m=[{header:"MRN No.",key:"MRNNumber",...r.t},{header:"MRN Date",key:"MRNDate",...r.t},{header:"Supplier Name",key:"supplierName",...r.t},{header:"GRN No",key:"GRNNumber",...r.t},{header:"Status",key:"MRNStatus",...r.t}];const B=i=>({title:N,csvData:i,headers:m}),q=i=>(0,c.J)({data:i,headers:m,widths:T,title:N})},7791:(I,n,o)=>{o.d(n,{AM:()=>y,gR:()=>P,ZG:()=>R,Vk:()=>g,oD:()=>c,Du:()=>d});var r=o(37398),p=o(65879),u=o(98977);let y=(()=>{var a;class s{constructor(e){this.http=e,this.routes={createPath:"/quality/mrn/create",getAllPath:"/quality/mrn/getAll",getRMSpecificationByItemIdPath:"/quality/mrn/getRMSpecificationByItemId",getAllMasterDataPath:"/quality/mrn/getAllMasterData",getAllMRNReportsPath:"/quality/mrn/getAllMRNReports",getAllReportsPath:"/quality/mrn/getAllReports",getAllSupplierWiseReportsPath:"/quality/mrn/getAllSupplierWiseReports",getAllItemWiseReportsPath:"/quality/mrn/getAllItemWiseReports",getAllRawMaterialInspectionReportsPath:"/quality/mrn/getAllRawMaterialInspectionReports",getByMRNIdForRMInspectionPath:"/quality/mrn/getByMRNIdForRMInspection",updatePath:t=>`/quality/mrn/update/${t}`,getByIdPath:t=>`/quality/mrn/getById/${t}`,getMRNDetailsByIdPath:t=>`/quality/mrn/getMRNDetailsById/${t}`,deletePath:t=>`/quality/mrn/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getRMSpecificationByItemId(e){return this.http.get(this.routes.getRMSpecificationByItemIdPath,e).pipe((0,r.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReportsPath,e).pipe((0,r.U)(t=>t))}getAllMRNReports(e){return this.http.get(this.routes.getAllMRNReportsPath,e).pipe((0,r.U)(t=>t))}getAllSupplierWiseReports(e){return this.http.get(this.routes.getAllSupplierWiseReportsPath,e).pipe((0,r.U)(t=>t))}getAllItemWiseReports(e){return this.http.get(this.routes.getAllItemWiseReportsPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}getAllRawMaterialInspectionReports(e){return this.http.get(this.routes.getAllRawMaterialInspectionReportsPath,e).pipe((0,r.U)(t=>t))}getByMRNIdForRMInspection(e){return this.http.get(this.routes.getByMRNIdForRMInspectionPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(l=>l))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}getMRNDetailsById(e){return this.http.get(this.routes.getMRNDetailsByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}}return(a=s).\u0275fac=function(e){return new(e||a)(p.LFG(u.sM))},a.\u0275prov=p.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),s})(),P=(()=>{var a;class s{constructor(e){this.http=e,this.routes={createPath:"/quality/PDIREntry/create",getAllPath:"/quality/PDIREntry/getAll",getProductSpecificationBySKUIdPath:"/quality/PDIREntry/getProductSpecificationBySKUId",getAllReportPath:"/quality/PDIREntry/getAllReports",getAllMasterDataPath:"/quality/PDIREntry/getAllMasterData",getAllSalesInvoiceForPDIREntryPath:"/quality/PDIREntry/getAllSalesInvoiceForPDIREntry",updatePath:t=>`/quality/PDIREntry/update/${t}`,getPDIRDetailsBySalesInvoiceIdPath:t=>`/quality/PDIREntry/getPDIRDetailsBySalesInvoiceId/${t}`,getByIdPath:t=>`/quality/PDIREntry/getById/${t}`,getPDIRDetailsByIdPath:t=>`/quality/PDIREntry/getPDIRDetailsById/${t}`,deletePath:t=>`/quality/PDIREntry/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReportPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getProductSpecificationBySKUId(e){return this.http.get(this.routes.getProductSpecificationBySKUIdPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}getAllSalesInvoiceForPDIREntry(e){return this.http.get(this.routes.getAllSalesInvoiceForPDIREntryPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(l=>l))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}getPDIRDetailsById(e){return this.http.get(this.routes.getPDIRDetailsByIdPath(e)).pipe((0,r.U)(t=>t))}getPDIRDetailsBySalesInvoiceId(e){return this.http.get(this.routes.getPDIRDetailsBySalesInvoiceIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}}return(a=s).\u0275fac=function(e){return new(e||a)(p.LFG(u.sM))},a.\u0275prov=p.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),s})(),g=(()=>{var a;class s{constructor(e){this.http=e,this.routes={createPath:"/quality/product-specification/create",getAllPath:"/quality/product-specification/getAll",getAllMasterDataPath:"/quality/product-specification/getAllMasterData",updatePath:t=>`/quality/product-specification/update/${t}`,getByIdPath:t=>`/quality/product-specification/getById/${t}`,deletePath:t=>`/quality/product-specification/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(l=>l))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}}return(a=s).\u0275fac=function(e){return new(e||a)(p.LFG(u.sM))},a.\u0275prov=p.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),s})(),c=(()=>{var a;class s{constructor(e){this.http=e,this.routes={createPath:"/quality/rm-specification/create",getAllPath:"/quality/rm-specification/getAll",getAllMasterDataPath:"/quality/rm-specification/getAllMasterData",updatePath:t=>`/quality/rm-specification/update/${t}`,getByIdPath:t=>`/quality/rm-specification/getById/${t}`,deletePath:t=>`/quality/rm-specification/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(l=>l))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}}return(a=s).\u0275fac=function(e){return new(e||a)(p.LFG(u.sM))},a.\u0275prov=p.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),s})(),d=(()=>{var a;class s{constructor(e){this.http=e,this.routes={createPath:"/quality/specificationMaster/create",getAllPath:"/quality/specificationMaster/getAll",getAllMasterDataPath:"/quality/specificationMaster/getAllMasterData",updatePath:t=>`/quality/specificationMaster/update/${t}`,getByIdPath:t=>`/quality/specificationMaster/getById/${t}`,deletePath:t=>`/quality/specificationMaster/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(l=>l))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}}return(a=s).\u0275fac=function(e){return new(e||a)(p.LFG(u.sM))},a.\u0275prov=p.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),s})(),R=(()=>{var a;class s{constructor(e){this.http=e,this.routes={createPath:"/quality/productCategorySpecification/create",getAllPath:"/quality/productCategorySpecification/getAll",getAllMasterDataPath:"/quality/productCategorySpecification/getAllMasterData",updatePath:t=>`/quality/productCategorySpecification/update/${t}`,getByIdPath:t=>`/quality/productCategorySpecification/getById/${t}`,deletePath:t=>`/quality/productCategorySpecification/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(l=>l))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}}return(a=s).\u0275fac=function(e){return new(e||a)(p.LFG(u.sM))},a.\u0275prov=p.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),s})()}}]);