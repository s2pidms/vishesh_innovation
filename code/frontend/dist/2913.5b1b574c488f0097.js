"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2913],{45622:(v,_,r)=>{r.d(_,{f:()=>R});var p=r(43818),e=r(65879),g=r(37285),f=r(99328),u=r(96814),s=r(60095),O=r(59103);function h(t,l){1&t&&(e.TgZ(0,"div",25),e._uU(1,"Delivery Schedule"),e.qZA())}function M(t,l){1&t&&(e.TgZ(0,"div",25),e._uU(1,"Dispatch Schedule"),e.qZA())}function S(t,l){1&t&&(e.TgZ(0,"div",26),e._uU(1," PO Qty. "),e._UZ(2,"i",27),e.qZA())}function C(t,l){1&t&&(e.TgZ(0,"div",26),e._uU(1," SO Qty. "),e._UZ(2,"i",27),e.qZA())}function T(t,l){1&t&&(e.TgZ(0,"div",28),e._uU(1," Del. Count "),e._UZ(2,"i",27),e.qZA())}function P(t,l){1&t&&(e.TgZ(0,"div",28),e._uU(1," Delivery Count "),e._UZ(2,"i",27),e.qZA())}function x(t,l){1&t&&(e.TgZ(0,"th"),e._uU(1,"Delivery Date"),e.qZA())}function D(t,l){1&t&&(e.TgZ(0,"th"),e._uU(1,"Expected Dispatch Date"),e.qZA())}function Z(t,l){1&t&&(e.TgZ(0,"th"),e._uU(1,"PPIC Date"),e.qZA())}function b(t,l){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"number"),e.qZA()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,null==n?null:n.quantity,"1.2-2")," ")}}const m=function(){return{standalone:!0}};function A(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"input",31),e.NdJ("ngModelChange",function(i){e.CHM(n);const d=e.oxw().$implicit;return e.KtG(d.quantity=i)})("input",function(){e.CHM(n);const i=e.oxw().index,d=e.oxw();return e.KtG(d.setQuantity(i))}),e.qZA()}if(2&t){const n=e.oxw().$implicit;e.Q6J("ngModel",n.quantity)("ngModelOptions",e.DdM(2,m))}}function I(t,l){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const n=e.oxw(2).$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,null==n?null:n.deliveryDate,"dd-MM-YYY")," ")}}function w(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"input",33),e.NdJ("ngModelChange",function(i){e.CHM(n);const d=e.oxw(2).$implicit;return e.KtG(d.deliveryDate=i)}),e.qZA()}if(2&t){const n=e.oxw(2).$implicit,o=e.oxw();e.Q6J("min",o.minDate.toISOString().split("T")[0])("ngModel",n.deliveryDate)("ngModelOptions",e.DdM(3,m))}}const a=function(){return["approve","reject","view","generate","cancel"]};function Q(t,l){if(1&t&&(e.TgZ(0,"td")(1,"div",29),e.YNc(2,I,3,4,"span",19),e.YNc(3,w,1,4,"input",32),e.qZA()()),2&t){const n=e.oxw(2);e.xp6(2),e.Q6J("ngIf",e.DdM(2,a).includes(n.action)),e.xp6(1),e.Q6J("ngIf",!e.DdM(3,a).includes(n.action))}}function U(t,l){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const n=e.oxw(2).$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,null==n?null:n.dispatchDate,"dd-MM-YYY")," ")}}function k(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"input",33),e.NdJ("ngModelChange",function(i){e.CHM(n);const d=e.oxw(2).$implicit;return e.KtG(d.dispatchDate=i)}),e.qZA()}if(2&t){const n=e.oxw(2).$implicit,o=e.oxw();e.Q6J("min",o.minDate.toISOString().split("T")[0])("ngModel",n.dispatchDate)("ngModelOptions",e.DdM(3,m))}}function q(t,l){if(1&t&&(e.TgZ(0,"td")(1,"div",29),e.YNc(2,U,3,4,"span",19),e.YNc(3,k,1,4,"input",32),e.qZA()()),2&t){const n=e.oxw(2);e.xp6(2),e.Q6J("ngIf",e.DdM(2,a).includes(n.action)),e.xp6(1),e.Q6J("ngIf",!e.DdM(3,a).includes(n.action))}}function J(t,l){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const n=e.oxw(2).$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,null==n?null:n.PPICDate,"dd-MM-YYY")," ")}}function N(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"input",33),e.NdJ("ngModelChange",function(i){e.CHM(n);const d=e.oxw(2).$implicit;return e.KtG(d.PPICDate=i)}),e.qZA()}if(2&t){const n=e.oxw(2).$implicit,o=e.oxw();e.Q6J("min",o.minDate.toISOString().split("T")[0])("ngModel",n.PPICDate)("ngModelOptions",e.DdM(3,m))}}function Y(t,l){if(1&t&&(e.TgZ(0,"td")(1,"div",29),e.YNc(2,J,3,4,"span",19),e.YNc(3,N,1,4,"input",32),e.qZA()()),2&t){const n=e.oxw(2);e.xp6(2),e.Q6J("ngIf",e.DdM(2,a).includes(n.action)),e.xp6(1),e.Q6J("ngIf",!e.DdM(3,a).includes(n.action))}}function E(t,l){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td")(4,"div",29),e.YNc(5,b,3,4,"span",19),e.YNc(6,A,1,3,"input",30),e.qZA()(),e.TgZ(7,"td"),e._uU(8),e.ALo(9,"UOMUnitsMaster"),e.qZA(),e.YNc(10,Q,4,4,"td",19),e.YNc(11,q,4,4,"td",19),e.YNc(12,Y,4,4,"td",19),e.qZA()),2&t){const n=l.$implicit,o=e.oxw();e.xp6(2),e.Oqu(null==n?null:n.scheduleNo),e.xp6(3),e.Q6J("ngIf",e.DdM(9,a).includes(o.action)),e.xp6(1),e.Q6J("ngIf",!e.DdM(10,a).includes(o.action)),e.xp6(2),e.Oqu(e.lcZ(9,7,null==n?null:n.UOM)),e.xp6(2),e.Q6J("ngIf","Book Sales Order"!=o.bookSalesOrder),e.xp6(1),e.Q6J("ngIf","Book Sales Order"==o.bookSalesOrder),e.xp6(1),e.Q6J("ngIf","Book Sales Order"==o.bookSalesOrder)}}function B(t,l){1&t&&e._UZ(0,"hr",34)}function K(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"div",35)(1,"button",36),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.dismissModel())}),e._uU(2,"Save & Close"),e.qZA()()}}const L=function(){return["create","edit"]};let R=(()=>{var t;class l{constructor(o,i){this.activeModal=o,this.toastService=i,this.action="edit",this.bookSalesOrder="",this.SOType="",this.POType="",this.POQty=null,this.deliveryCount=null,this.UOM=null,this.deliveryDate=null,this.dispatchDate=null,this.PPICDate=null,this.deliveryScheduleArr=[],this.regularType={},this.btnDisable=!1,this.minDate=new Date}ngOnInit(){this.deliveryCount=this.deliveryCount,this.deliveryScheduleArr&&(this.deliveryScheduleArr=this.deliveryScheduleArr.map(o=>(o.UOM=this.UOM,o))),"Standard PO"==this.POType&&(this.deliveryCount=1),"Book Sales Order"==this.bookSalesOrder&&"Regular"==this.SOType&&(this.deliveryScheduleArr=[],this.deliveryCount=1,this.regularType.dispatchSchedule?this.regularType.dispatchSchedule&&(this.deliveryScheduleArr=this.regularType.dispatchSchedule):this.dispatchDate&&this.deliveryScheduleArr.push({scheduleNo:1,quantity:this.POQty,UOM:this.UOM,dispatchDate:this.dispatchDate,PPICDate:this.PPICDate}))}setTable(){(+this.deliveryCount<1||+this.deliveryCount>5)&&(this.toastService.warning("Please enter a number between 1 to 5"),this.deliveryCount=null);let o=Math.floor(this.POQty/this.deliveryCount),i=this.POQty%this.deliveryCount;this.deliveryScheduleArr=[];for(let d=0;d<this.deliveryCount;d++){let c=o;d===this.deliveryCount-1&&(c+=i),this.dispatchDate&&this.deliveryScheduleArr.push({scheduleNo:d+1,quantity:c,UOM:this.UOM,dispatchDate:this.dispatchDate,PPICDate:this.PPICDate}),this.deliveryDate&&this.deliveryScheduleArr.push({scheduleNo:d+1,quantity:c,UOM:this.UOM,deliveryDate:this.deliveryDate})}}setQuantity(o){if(this.deliveryScheduleArr.map(d=>d.quantity).reduce((d,c)=>d+c,0)>this.POQty)return"Book Sales Order"==this.bookSalesOrder?this.toastService.warning("total qty should not be greater than SO Qty"):"Book Sales Order"!=this.bookSalesOrder&&this.toastService.warning("total qty should not be greater than PO Qty"),void(this.deliveryScheduleArr[o].quantity=0)}dismissModel(){let o={};o.deliverySchedule=this.deliveryScheduleArr,o.deliveryCount=this.deliveryCount,this.activeModal.close(o)}}return(t=l).\u0275fac=function(o){return new(o||t)(e.Y36(g.Kz),e.Y36(f.kl))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-po-schedule-modal"]],viewQuery:function(o,i){if(1&o&&e.Gf(p.j,5),2&o){let d;e.iGM(d=e.CRH())&&(i.headers=d)}},inputs:{action:"action",bookSalesOrder:"bookSalesOrder",SOType:"SOType",POType:"POType",POQty:"POQty",deliveryCount:"deliveryCount",UOM:"UOM",deliveryDate:"deliveryDate",dispatchDate:"dispatchDate",PPICDate:"PPICDate",deliveryScheduleArr:"deliveryScheduleArr",regularType:"regularType"},decls:40,vars:19,consts:[[1,"modelPage"],[1,"modal-header"],["class","heading",4,"ngIf"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"container-fluid"],[1,"row","px-5","mt-5"],[1,"ps-0","col-6"],[1,"d-flex","align-items-center"],["class","col-form-label text-nowrap",4,"ngIf"],["type","number","readonly","",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-6","pe-0"],["for","deliveryCount","class","col-form-label text-nowrap",4,"ngIf"],["type","number","id","deliveryCount","name","deliveryCount","min","1","max","5",1,"form-control",3,"disabled","ngModel","readOnly","input","ngModelChange"],[1,"row","mt-4","px-5"],[1,"table-responsive","ps-0","pe-0",2,"min-height","25rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"row"],[1,"col-12","px-0"],["class","line-border",4,"ngIf"],["class","col-12 text-center pb-3",4,"ngIf"],[1,"heading"],[1,"col-form-label","text-nowrap"],[1,"fa","fa-caret-right","fa-5x","mx-1"],["for","deliveryCount",1,"col-form-label","text-nowrap"],[1,"d-flex","justify-content-center"],["type","number","class","form-control form-control-sch w-25",3,"ngModel","ngModelOptions","ngModelChange","input",4,"ngIf"],["type","number",1,"form-control","form-control-sch","w-25",3,"ngModel","ngModelOptions","ngModelChange","input"],["type","date","class","form-control form-control-sm w-25",3,"min","ngModel","ngModelOptions","ngModelChange",4,"ngIf"],["type","date",1,"form-control","form-control-sm","w-25",3,"min","ngModel","ngModelOptions","ngModelChange"],[1,"line-border"],[1,"col-12","text-center","pb-3"],[1,"btn","btn-primary",3,"click"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,h,2,0,"div",2),e.YNc(3,M,2,0,"div",2),e.TgZ(4,"div")(5,"button",3),e.NdJ("click",function(){return i.dismissModel()}),e._UZ(6,"i",4),e.qZA()()(),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8),e.YNc(11,S,3,0,"div",9),e.YNc(12,C,3,0,"div",9),e.TgZ(13,"input",10),e.NdJ("ngModelChange",function(c){return i.POQty=c}),e.qZA()()(),e.TgZ(14,"div",11)(15,"div",8),e.YNc(16,T,3,0,"div",12),e.YNc(17,P,3,0,"div",12),e.TgZ(18,"input",13),e.NdJ("input",function(){return i.setTable()})("ngModelChange",function(c){return i.deliveryCount=c}),e.qZA()()()(),e.TgZ(19,"div",14)(20,"div",15)(21,"table",16)(22,"thead",17)(23,"tr",18)(24,"th"),e._uU(25,"Schedule #"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Quantity"),e.qZA(),e.TgZ(28,"th"),e._uU(29,"UoM"),e.qZA(),e.YNc(30,x,2,0,"th",19),e.YNc(31,D,2,0,"th",19),e.YNc(32,Z,2,0,"th",19),e.qZA()(),e.TgZ(33,"tbody"),e.YNc(34,E,13,11,"tr",20),e.qZA()()()(),e.TgZ(35,"div",21)(36,"div",22),e.YNc(37,B,1,0,"hr",23),e.qZA()(),e.TgZ(38,"div",21),e.YNc(39,K,3,0,"div",24),e.qZA()()()),2&o&&(e.xp6(2),e.Q6J("ngIf","Book Sales Order"!=i.bookSalesOrder),e.xp6(1),e.Q6J("ngIf","Book Sales Order"==i.bookSalesOrder),e.xp6(8),e.Q6J("ngIf","Book Sales Order"!=i.bookSalesOrder),e.xp6(1),e.Q6J("ngIf","Book Sales Order"==i.bookSalesOrder),e.xp6(1),e.Q6J("ngModel",i.POQty),e.xp6(3),e.Q6J("ngIf","Book Sales Order"!=i.bookSalesOrder),e.xp6(1),e.Q6J("ngIf","Book Sales Order"==i.bookSalesOrder),e.xp6(1),e.Q6J("disabled",!e.DdM(16,L).includes(i.action))("ngModel",i.deliveryCount)("readOnly","Regular"==i.SOType||"Standard PO"==i.POType),e.xp6(12),e.Q6J("ngIf","Book Sales Order"!=i.bookSalesOrder),e.xp6(1),e.Q6J("ngIf","Book Sales Order"==i.bookSalesOrder),e.xp6(1),e.Q6J("ngIf","Book Sales Order"==i.bookSalesOrder),e.xp6(2),e.Q6J("ngForOf",i.deliveryScheduleArr),e.xp6(3),e.Q6J("ngIf",!e.DdM(17,a).includes(i.action)),e.xp6(2),e.Q6J("ngIf",!e.DdM(18,a).includes(i.action)))},dependencies:[u.sg,u.O5,s.Fj,s.wV,s.JJ,s.qQ,s.Fd,s.On,u.JJ,u.uU,O.S],styles:[".fa[_ngcontent-%COMP%]{font-size:1.6rem!important}.form-control-sch[_ngcontent-%COMP%]{margin:0;height:2.4rem!important;width:9rem!important;text-align:center;box-shadow:#00000059 0 2px 5px}"]}),l})()},13107:(v,_,r)=>{r.d(_,{t:()=>p});const p={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(v,_,r)=>{r.d(_,{J:()=>p});const p=({data:e,headers:g,widths:f,title:u})=>({tableData:{widths:f,headerRows:1,body:[g.map(h=>({text:h.header,style:"header"})),...e.map(h=>g.map(M=>({style:"subheader",text:h[M.key]})))]},title:u})}}]);