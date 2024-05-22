"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[142],{60142:(Q,v,u)=>{u.r(v),u.d(v,{MinutesOfMeetingModule:()=>E});var g=u(96814),h=u(1076),a=u(60095),b=u(21631),A=u(22096),f=u(43818),_=u(25116),e=u(65879),M=u(37285);let y=(()=>{var s;class l{constructor(i){this.activeModal=i,this.action="",this.attendedBy=null}ngOnInit(){}dismissModel(){this.activeModal.close(this.attendedBy)}}return(s=l).\u0275fac=function(i){return new(i||s)(e.Y36(M.Kz))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-min-of-meeting-attendees"]],inputs:{action:"action",attendedBy:"attendedBy"},decls:20,vars:2,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,""],[1,"container-fluid"],[1,"row","justify-content-center","mt-4"],[1,"col-12"],[1,"form-label","text-nowrap"],["rows","5",1,"form-control","form-text-area",3,"ngModel","ngModelChange"],[1,"row"],[1,"col","px-0"],[1,"line-border","mt-5","mb-4"],[1,"text-center"],["type","button",1,"btn","bg-primary","px-5","mb-4",3,"disabled","click"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"Attended By"),e.qZA(),e.TgZ(4,"div")(5,"button",3),e.NdJ("click",function(){return t.activeModal.close()}),e._UZ(6,"i",4),e.qZA()()(),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"label",9),e._uU(12,"Attended By"),e.qZA(),e.TgZ(13,"textarea",10),e.NdJ("ngModelChange",function(o){return t.attendedBy=o}),e.qZA()()(),e.TgZ(14,"div",11)(15,"div",12),e._UZ(16,"hr",13),e.qZA()(),e.TgZ(17,"div",14)(18,"button",15),e.NdJ("click",function(){return t.dismissModel()}),e._uU(19," Save & Close "),e.qZA()()()()()),2&i&&(e.xp6(13),e.Q6J("ngModel",t.attendedBy),e.xp6(5),e.Q6J("disabled","view"==t.action))},dependencies:[a.Fj,a.JJ,a.On],styles:[".form-text-area[_ngcontent-%COMP%]{height:auto!important}"]}),l})();const O=[{message:"MoM Code is Required",key:"MOMCode"},{message:"MoM Date is Required",key:"MOMDate"},{message:"MoM Title  is Required",key:"MOMTitle"},{message:"Meeting Type is Required",key:"meetingType"},{message:"Venue is Required",key:"venue"},{message:"Organizer is Required",key:"organizer"},{message:"Attendees is Required",key:"attendedBy"}];var d=u(99328),Z=u(32197),C=u(16897),T=u(88059),D=u(95346),U=u(69205);function w(s,l){if(1&s&&(e.TgZ(0,"option",53),e._uU(1),e.qZA()),2&s){const r=l.$implicit;e.Q6J("value",r.value),e.xp6(1),e.hij(" ",r.label," ")}}function S(s,l){if(1&s&&(e.TgZ(0,"option",53),e._uU(1),e.qZA()),2&s){const r=l.$implicit;e.Q6J("value",r.value),e.xp6(1),e.hij(" ",r.label," ")}}const q=function(){return{standalone:!0}};function x(s,l){if(1&s){const r=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",54)(4,"span",55),e._uU(5),e.ALo(6,"truncate"),e.qZA()(),e.TgZ(7,"td",54)(8,"span",55),e._uU(9),e.ALo(10,"truncate"),e.qZA()(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"date"),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.ALo(16,"date"),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"div",56)(20,"input",57),e.NdJ("ngModelChange",function(t){const o=e.CHM(r).$implicit;return e.KtG(o.remarks=t)}),e.qZA()(),e.TgZ(21,"td")(22,"div",58),e._UZ(23,"button",59),e.TgZ(24,"div",60)(25,"a",61),e.NdJ("click",function(){const t=e.CHM(r),n=t.$implicit,o=t.index,c=e.oxw();return e.KtG(c.patchItem(n,o,"edit"))}),e._UZ(26,"i",62),e._uU(27," Edit "),e.qZA(),e.TgZ(28,"a",61),e.NdJ("click",function(){const n=e.CHM(r).index,o=e.oxw();return e.KtG(o.deleteItem(n))}),e._UZ(29,"i",63),e._uU(30," Delete "),e.qZA()()()()()}if(2&s){const r=l.$implicit,i=l.index,t=e.oxw();e.xp6(2),e.Oqu(1+i+(t.page-1)*t.pageSize),e.xp6(2),e.Q6J("ngbTooltip",r.actionPoint),e.xp6(1),e.hij(" ",e.xi3(6,14,r.actionPoint,50)," "),e.xp6(3),e.Q6J("ngbTooltip",null==r?null:r.owner),e.xp6(1),e.hij(" ",e.xi3(10,17,null==r?null:r.owner,50)," "),e.xp6(3),e.Oqu(e.xi3(13,20,null==r?null:r.targetDate,"dd-MM-YYYY")),e.xp6(3),e.Oqu(e.xi3(16,23,null==r?null:r.reviewDate,"dd-MM-YYYY")),e.xp6(3),e.Oqu(null==r?null:r.status),e.xp6(2),e.Q6J("ngModel",r.remarks)("ngModelOptions",e.DdM(26,q)),e.xp6(5),e.ekj("disable","view"==t.action),e.xp6(3),e.ekj("disable","view"==t.action)}}function k(s,l){if(1&s){const r=e.EpF();e.TgZ(0,"div",64)(1,"button",65),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.reset())}),e._uU(2,"Reset"),e.qZA(),e.TgZ(3,"button",66),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.submit())}),e._uU(4,"Save"),e.qZA()()}}const Y=function(s,l,r,i){return{page:s,pageSize:l,collection:r,search:i,excelDisplay:"none"}},I=function(){return["view"]};let F=(()=>{var s;class l{trackByFn(i,t){return t?._id}get meetingInfoData(){return this.form.get("meetingInfo")}constructor(i,t,n,o,c,p,m,R,j,P){this.router=i,this.activatedRoute=t,this.spinner=n,this.menuTitleService=o,this.toastService=c,this.minutesOfMeetingService=p,this.validationService=m,this.modalService=R,this.utilityService=j,this.storageService=P,this.page=1,this.pageSize=5,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.flag=-1,this.userName={},this.submitted=!1,this.action="create",this.btnDisable=!1,this.meetingType=_.ls,this.meetingStatus=_.SH,this.meetingInfoArr=[],this.isESCPreview=!1,this.form=new a.nJ({_id:new a.p4(null),MOMCode:new a.p4(null,[a.kI.required]),MOMDate:new a.p4(null,[a.kI.required]),MOMTitle:new a.p4(null,[a.kI.required]),meetingType:new a.p4(null,[a.kI.required]),venue:new a.p4(null,[a.kI.required]),organizer:new a.p4(null,[a.kI.required]),attendedBy:new a.p4(null,[a.kI.required]),meetingInfo:new a.nJ({index:new a.p4(-1),actionPoint:new a.p4(""),owner:new a.p4(""),targetDate:new a.p4(this.utilityService.getTodayDate("YYYY-MM-DD")),reviewDate:new a.p4(this.utilityService.getTodayDate("YYYY-MM-DD")),status:new a.p4(null),remarks:new a.p4(null)})})}ngOnInit(){this.userName=this.storageService.get("IDMSAUser")?.name,this.f.organizer.setValue(this.userName),this.getInitialData()}get f(){return this.form.controls}eventHeader(i){switch(i.key){case"SEARCH":this.search=i.value,this.flag=-1;break;case"EXCEL":default:break;case"PAGE":this.page=i.value}}submit(){if(this.submitted=!0,this.form.enable(),this.validationService.checkErrors(this.form,O))return;if(0==this.meetingInfoArr.length)return void this.toastService.warning("at least one row is required !");let i=this.form.value;i.meetingInfo=this.meetingInfoArr,i._id?this.update(i):(delete i._id,this.create(i))}patchItem(i,t,n){i.index=t,i.targetDate=this.utilityService.getFormatDate(i.targetDate,"YYYY-MM-DD"),i.reviewDate=this.utilityService.getFormatDate(i.reviewDate,"YYYY-MM-DD"),this.meetingInfoData.patchValue(i),"view"==n?(this.btnDisable=!0,this.meetingInfoData.disable()):(this.meetingInfoData.enable(),this.btnDisable=!1)}deleteItem(i){"view"!=this.action&&(this.meetingInfoArr.splice(i+(this.page-1)*this.pageSize,1),this.collection=this.meetingInfoArr.length)}update(i){this.spinner.show(),this.minutesOfMeetingService.update(i._id,i).subscribe(t=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(t.message),this.router.navigate(["/default/supports/master/minutes_of_meeting/list"])})}create(i){this.spinner.show(),this.minutesOfMeetingService.create(i).subscribe(t=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(t.message),this.router.navigate(["/default/supports/master/minutes_of_meeting/list"])})}reset(){this.form.reset(),this.meetingInfoArr=[],this.collection=this.meetingInfoArr.length,this.getInitialData()}getInitialData(){this.spinner.show(),this.minutesOfMeetingService.getAllMasterData({}).subscribe(i=>{this.form.controls.MOMCode.setValue(i.autoIncrementNo),this.f.organizer.setValue(this.userName),this.f.MOMDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.meetingInfoData.controls.targetDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.meetingInfoData.controls.reviewDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.activatedRoute.queryParams.pipe((0,b.z)(t=>(this.action=t.action,this.utilityService.accessDenied(this.action),t.id?this.minutesOfMeetingService.getById(t.id):(0,A.of)({})))).subscribe(t=>{this.spinner.hide(),0!=Object.keys(t).length&&(t.MOMDate&&(t.MOMDate=this.utilityService.getFormatDate(t?.MOMDate,"YYYY-MM-DD")),this.meetingInfoArr=t.meetingInfo,this.collection=this.meetingInfoArr.length,this.form.patchValue(t),"view"==this.action&&this.form.disable())}),this.menuTitleService.set({title:"Minutes of Meeting",subTitle:null,type:null})})}addMeetingDetails(){let i=this.meetingInfoData.value;if(!i.actionPoint)return void this.toastService.warning("Action Point is required !");if(!i.owner)return void this.toastService.warning("Owner is required !");if(!i.status)return void this.toastService.warning("Status is required !");if(!i.targetDate)return void this.toastService.warning("Target Date is required !");if(!i.reviewDate)return void this.toastService.warning("Review Date is required !");let t=this.meetingInfoData.value;(t.index||0==t.index)&&t.index>=0?this.meetingInfoArr.splice(t.index,1,t):this.meetingInfoArr.push(t),this.collection=this.meetingInfoArr.length,this.meetingInfoData.reset(),this.meetingInfoData.controls.targetDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.meetingInfoData.controls.reviewDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.collection=this.meetingInfoArr.length}deleteDetails(i){this.meetingInfoArr.splice(i+(this.page-1)*this.pageSize,1),this.collection=this.meetingInfoArr.length}openAttendeesModal(){const i=this.modalService.open(y,{centered:!0,size:"md",backdrop:"static",keyboard:!1});i.componentInstance.action=this.action,i.componentInstance.attendedBy=this.form.controls.attendedBy.value,i.result.then(t=>{t&&["create","edit"].includes(this.action)&&this.form.controls.attendedBy.setValue(t)},t=>{})}onSort({column:i,direction:t}){this.headers.forEach(n=>{n.sortable!==i&&(n.direction="")}),this.meetingInfoArr=""===t||""===i?this.meetingInfoArr:[...this.meetingInfoArr].sort((n,o)=>{let c="string"==typeof n[i]?n[i].toLowerCase():n[i],p="string"==typeof o[i]?o[i].toLowerCase():o[i];const m=c<p?-1:c>p?1:0;return"asc"===t?m:-m})}}return(s=l).\u0275fac=function(i){return new(i||s)(e.Y36(h.F0),e.Y36(h.gz),e.Y36(d.V),e.Y36(d.Uh),e.Y36(d.kl),e.Y36(Z.g),e.Y36(C.RJ),e.Y36(M.FF),e.Y36(d.tI),e.Y36(d.V1))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-minutes-of-meeting-form"]],viewQuery:function(i,t){if(1&i&&e.Gf(f.j,5),2&i){let n;e.iGM(n=e.CRH())&&(t.headers=n)}},decls:129,vars:26,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row"],[1,"col-3"],[1,"col-6","pe-2"],[1,"form-label","mb-0"],[1,"text-danger"],["type","text","formControlName","MOMCode","readonly","",1,"form-control"],[1,"col-6","ps-2","pe-0"],["type","date","formControlName","MOMDate","readonly","",1,"form-control"],["type","text","formControlName","MOMTitle",1,"form-control"],[1,"col-6","ps-0","pe-2"],["formControlName","meetingType",1,"form-select"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","organizer","readonly","",1,"form-control"],["type","text","formControlName","venue",1,"form-control"],[1,"row","line-border"],["formGroupName","meetingInfo",1,"row","mb-4"],[1,"col-3","pe-0"],[1,"form-label"],["type","text","formControlName","actionPoint",1,"form-control"],["type","text","formControlName","owner",1,"form-control"],[1,"col-3","ps-0"],[1,"col-6","pe-0"],["type","Date","formControlName","targetDate",1,"form-control"],["type","Date","formControlName","reviewDate",1,"form-control"],[1,"col-7","pe-4"],["formControlName","status",1,"form-select"],[1,"col-5","ps-2","d-flex","align-items-end","justify-content-end"],[1,"btn","btn-primary",3,"disabled","click"],[1,"col-4"],[3,"data","dataChange"],[1,"table-responsive","mt-0","text-wrap",2,"min-height","18rem"],[1,"table","table-bordered","mt-0","table-sm"],[1,"bg-info"],[1,"text-white"],["sortable","actionPoint",1,"text-start",3,"sort"],["sortable","owner",1,"text-start",3,"sort"],["sortable","targetDate",3,"sort"],["sortable","reviewDate",3,"sort"],["sortable","status",3,"sort"],["sortable","remarks",1,"text-start",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"row","align-items-center","mt-3"],[1,"col-6"],[1,"btn","btn-primary","px-5",3,"click"],[1,"col-6","text-end"],["class","d-grid gap-2 d-md-block",4,"ngIf"],[3,"value"],[1,"text-start"],["placement","right",1,"pointer",3,"ngbTooltip"],[1,"d-flex","justify-content-center"],["type","text",1,"form-control","w-25",3,"ngModel","ngModelOptions","ngModelChange"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-trash","fa-lg","me-2","text-primary"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-5","me-4",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(i,t){1&i&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),e._uU(5),e.ALo(6,"titlecase"),e.qZA()()(),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",6)(11,"div",8)(12,"label",9),e._uU(13," MoM Code "),e.TgZ(14,"span",10),e._uU(15,"*"),e.qZA()(),e._UZ(16,"input",11),e.qZA(),e.TgZ(17,"div",12)(18,"label",9),e._uU(19," MoM Date "),e.TgZ(20,"span",10),e._uU(21,"*"),e.qZA()(),e._UZ(22,"input",13),e.qZA()()(),e.TgZ(23,"div",7)(24,"label",9),e._uU(25," MoM Title "),e.TgZ(26,"span",10),e._uU(27,"*"),e.qZA()(),e._UZ(28,"input",14),e.qZA(),e.TgZ(29,"div",7)(30,"div",6)(31,"div",15)(32,"label",9),e._uU(33," Meeting Type "),e.TgZ(34,"span",10),e._uU(35,"*"),e.qZA()(),e.TgZ(36,"select",16)(37,"option",17),e._uU(38,"Select Meeting Type"),e.qZA(),e.YNc(39,w,2,2,"option",18),e.qZA()(),e.TgZ(40,"div",12)(41,"label",9),e._uU(42," Organizer "),e.TgZ(43,"span",10),e._uU(44,"*"),e.qZA()(),e._UZ(45,"input",19),e.qZA()()(),e.TgZ(46,"div",7)(47,"label",9),e._uU(48," Venue "),e.TgZ(49,"span",10),e._uU(50,"*"),e.qZA()(),e._UZ(51,"input",20),e.qZA()()(),e._UZ(52,"hr",21),e.TgZ(53,"div",22)(54,"div",23)(55,"label",24),e._uU(56,"Action Point "),e.TgZ(57,"span",10),e._uU(58,"*"),e.qZA()(),e._UZ(59,"input",25),e.qZA(),e.TgZ(60,"div",7)(61,"label",24),e._uU(62," Owner "),e.TgZ(63,"span",10),e._uU(64,"*"),e.qZA()(),e._UZ(65,"input",26),e.qZA(),e.TgZ(66,"div",27)(67,"div",6)(68,"div",28)(69,"label",24),e._uU(70," Target Date "),e.TgZ(71,"span",10),e._uU(72,"*"),e.qZA()(),e._UZ(73,"input",29),e.qZA(),e.TgZ(74,"div",28)(75,"label",24),e._uU(76," Review Date"),e.TgZ(77,"span",10),e._uU(78,"*"),e.qZA()(),e._UZ(79,"input",30),e.qZA()()(),e.TgZ(80,"div",7)(81,"div",6)(82,"div",31)(83,"label",9),e._uU(84," Status "),e.TgZ(85,"span",10),e._uU(86,"*"),e.qZA()(),e.TgZ(87,"select",32)(88,"option",17),e._uU(89,"Select Status"),e.qZA(),e.YNc(90,S,2,2,"option",18),e.qZA()(),e.TgZ(91,"div",33)(92,"button",34),e.NdJ("click",function(){return t.addMeetingDetails()}),e._uU(93," (+) Add "),e.qZA()()()(),e._UZ(94,"div",35),e.qZA(),e._UZ(95,"hr",21),e.TgZ(96,"div",4)(97,"app-setting-header",36),e.NdJ("dataChange",function(o){return t.eventHeader(o)}),e.qZA()(),e.TgZ(98,"div",37)(99,"table",38)(100,"thead",39)(101,"tr",40)(102,"th"),e._uU(103,"#"),e.qZA(),e.TgZ(104,"th",41),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(105,"Action Point"),e.qZA(),e.TgZ(106,"th",42),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(107,"Owner"),e.qZA(),e.TgZ(108,"th",43),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(109,"Target Date"),e.qZA(),e.TgZ(110,"th",44),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(111,"Review Date"),e.qZA(),e.TgZ(112,"th",45),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(113,"Status"),e.qZA(),e.TgZ(114,"th",46),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(115,"Remarks"),e.qZA(),e.TgZ(116,"th"),e._uU(117,"Action"),e.qZA()()(),e.TgZ(118,"tbody"),e.YNc(119,x,31,27,"tr",47),e.ALo(120,"slice"),e.ALo(121,"searchFi1ter"),e.qZA()()(),e._UZ(122,"hr",21),e.TgZ(123,"div",48)(124,"div",49)(125,"button",50),e.NdJ("click",function(){return t.openAttendeesModal()}),e._uU(126,"Attendees"),e.qZA()(),e.TgZ(127,"div",51),e.YNc(128,k,5,0,"div",52),e.qZA()()()()),2&i&&(e.Q6J("formGroup",t.form),e.xp6(5),e.hij("Minutes of Meeting (",e.lcZ(6,11,t.action),")"),e.xp6(32),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",t.meetingType),e.xp6(49),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",t.meetingStatus),e.xp6(2),e.Q6J("disabled","view"==t.action),e.xp6(5),e.Q6J("data",e.l5B(20,Y,t.page,t.pageSize,t.collection,t.search)),e.xp6(22),e.Q6J("ngForOf",e.Dn7(120,13,e.xi3(121,17,t.meetingInfoArr,t.search),(t.page-1)*t.pageSize,(t.page-1)*t.pageSize+t.pageSize))("ngForTrackBy",t.trackByFn),e.xp6(9),e.Q6J("ngIf",!e.DdM(25,I).includes(t.action)))},dependencies:[g.sg,g.O5,T.P,M._L,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.sg,a.u,a.x0,a.On,f.j,g.OU,g.rS,g.uU,D.G,U.W],encapsulation:2}),l})();function J(s,l){if(1&s){const r=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td",19,20)(7,"span",21),e._uU(8),e.qZA()(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td")(14,"div",22),e._UZ(15,"button",23),e.TgZ(16,"div",24)(17,"a",25),e.NdJ("click",function(){const n=e.CHM(r).$implicit,o=e.oxw();return e.KtG(o.navigateTo("/default/supports/master/minutes_of_meeting/form",n,"view"))}),e._UZ(18,"i",26),e._uU(19," View "),e.qZA(),e.TgZ(20,"a",25),e.NdJ("click",function(){const n=e.CHM(r).$implicit,o=e.oxw();return e.KtG(o.navigateTo("/default/supports/master/minutes_of_meeting/form",n,"edit"))}),e._UZ(21,"i",27),e._uU(22," Edit "),e.qZA(),e.TgZ(23,"a",25),e.NdJ("click",function(){const n=e.CHM(r).$implicit,o=e.oxw();return e.KtG(o.navigateToPrint("/#/print/mom_print",n,"print",""))}),e._UZ(24,"i",28),e._uU(25," Print "),e.qZA()()()()()}if(2&s){const r=l.$implicit,i=e.MAs(6),t=e.oxw();e.xp6(2),e.Oqu(null==r?null:r.MOMCode),e.xp6(2),e.Oqu(null==r?null:r.MOMDateS),e.xp6(1),e.Udp("width",i.clientWidth),e.xp6(2),e.Q6J("positionTarget",i)("ngbTooltip",r.MOMTitle),e.xp6(1),e.hij(" ",r.MOMTitle," "),e.xp6(2),e.hij(" ",null==r?null:r.meetingType," "),e.xp6(2),e.Oqu(null==r?null:r.organizer),e.xp6(5),e.ekj("disable",(null==r?null:r.createdBy)!=t.userId),e.xp6(3),e.ekj("disable",(null==r?null:r.createdBy)!=t.userId)}}const N=function(s,l,r,i){return{page:s,pageSize:l,collection:r,search:i}};let z=(()=>{var s;class l{constructor(i,t,n,o,c,p,m){this.exportExcelService=i,this.minutesOfMeetingService=t,this.menuTitleService=n,this.router=o,this.spinner=c,this.activatedRoute=p,this.storageService=m,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.userId="",this.statusArray=["Created","Approved"],this.rolePermissionActions=_.a1}ngOnInit(){this.userId=this.storageService.get("IDMSAUser")?._id,this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.menuTitleService.set({title:"Minutes of Meeting",subTitle:null,type:null}),this.getAll()}navigateTo(i,t,n){if(t.createdBy!=this.userId&&"view"==n||t.createdBy!=this.userId&&"edit"==n)return null;this.router.navigate([i],{queryParams:{id:t?._id,action:n}})}trackByFn(i,t){return t?._id}eventHeader(i){switch(i.key){case"SEARCH":this.search=i.value,this.getAll();break;case"EXCEL":this.getAll(!0);break;case"PAGE":this.page=i.value,this.getAll()}}navigateToPrint(i,t,n,o){window.open(`${window.location.origin}${i}?id=${t?._id}&action=${n}&preview=${o}`,"_blank")}getAll(i=!1){this.spinner.show();let t={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:i};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.minutesOfMeetingService.getAll(t).subscribe(n=>{i?this.excelDownload(n.rows):(this.tableData=n.rows,this.collection=n.count,this.spinner.hide())})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(i){let t={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}},n={title:"Minutes of Meeting",csvData:i,headers:[{header:"MoM Code",key:"MOMCode",...t},{header:"MoM Date",key:"MOMDateS",...t},{header:"MoM Title",key:"MOMTitle",...t},{header:"Meeting Type",key:"meetingType",...t},{header:"Organizer",key:"organizer",...t},{header:"Venue",key:"venue",...t}]};this.exportExcelService.exportExcel(n)}onSort({column:i,direction:t}){this.headers.forEach(n=>{n.sortable!==i&&(n.direction="")}),this.column=i,this.direction="asc"==t?1:-1,this.getAll()}}return(s=l).\u0275fac=function(i){return new(i||s)(e.Y36(d.Ol),e.Y36(Z.g),e.Y36(d.Uh),e.Y36(h.F0),e.Y36(d.V),e.Y36(h.gz),e.Y36(d.V1))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-minutes-of-meeting-list"]],viewQuery:function(i,t){if(1&i&&e.Gf(f.j,5),2&i){let n;e.iGM(n=e.CRH())&&(t.headers=n)}},decls:28,vars:8,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],[1,"text-center"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","MOMCode",3,"sort"],["sortable","MOMDateS",3,"sort"],["sortable","MOMTitle",1,"text-start",3,"sort"],["sortable","meetingType",3,"sort"],["sortable","organizer",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["MOMTitle",""],[1,"pointer",3,"positionTarget","ngbTooltip"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-print","fa-lg","me-3","text-primary"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Minutes of Meeting (Entry)"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return t.navigateTo("/default/supports/master/minutes_of_meeting/form",{},"create")}),e._UZ(6,"i",5),e._uU(7," Minutes of Meeting "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(o){return t.eventHeader(o)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(15,"MoM Code"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(17,"MoM Date"),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(19,"MoM Title"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(21,"Meeting Type"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(23,"Organizer"),e.qZA(),e.TgZ(24,"th",17),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(25,"Action"),e.qZA()()(),e.TgZ(26,"tbody"),e.YNc(27,J,26,13,"tr",18),e.qZA()()()()),2&i&&(e.xp6(10),e.Q6J("data",e.l5B(3,N,t.page,t.pageSize,t.collection,t.search)),e.xp6(17),e.Q6J("ngForOf",t.tableData)("ngForTrackBy",t.trackByFn))},dependencies:[g.sg,T.P,M._L,f.j],encapsulation:2}),l})();var L=u(56208);const B=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:z},{path:"form",component:F}];let E=(()=>{var s;class l{}return(s=l).\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[g.ez,h.Bz.forChild(B),L.m]}),l})()}}]);