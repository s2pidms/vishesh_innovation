"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8801],{88801:(S,_,c)=>{c.r(_),c.d(_,{AuthModule:()=>Z});var v=c(96814),g=c(1076),t=c(65879);let M=(()=>{var n;class i{constructor(){}ngOnInit(){}}return(n=i).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth"]],decls:1,vars:0,template:function(e,a){1&e&&t._UZ(0,"router-outlet")},dependencies:[g.lC],encapsulation:2}),i})();var r=c(60095),p=c(39029),s=c(2742),O=c(16897),P=c(1551);function b(n,i){1&n&&t._UZ(0,"img",4)}function y(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"div",5)(1,"div",6)(2,"div",7),t._UZ(3,"img",8),t.qZA()(),t.TgZ(4,"div",9)(5,"div",7),t._UZ(6,"img",10),t.TgZ(7,"form",11),t.NdJ("submit",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.login())}),t.TgZ(8,"div",12)(9,"label",13),t._uU(10," User ID "),t.TgZ(11,"span",14),t._uU(12,"*"),t.qZA()(),t._UZ(13,"input",15)(14,"validation-messages",16),t.qZA(),t.TgZ(15,"div",12)(16,"label",13),t._uU(17," Password "),t.TgZ(18,"span",14),t._uU(19,"*"),t.qZA()(),t._UZ(20,"input",17)(21,"validation-messages",16),t.qZA(),t.TgZ(22,"div",18)(23,"button",19),t._uU(24," Login "),t.qZA()()()()(),t._UZ(25,"div",20),t.TgZ(26,"div",21)(27,"label",22),t._uU(28,"All Rights Reserved 2022"),t.qZA()(),t.TgZ(29,"div",23)(30,"label",22),t._uU(31," Forgot Password ? "),t.TgZ(32,"a",24),t._uU(33," Click Here"),t.qZA()()()()}if(2&n){const o=t.oxw();t.xp6(3),t.Q6J("src",o.logo,t.LSH),t.xp6(3),t.Q6J("src",o.welcomeInfo,t.LSH),t.xp6(1),t.Q6J("formGroup",o.loginForm),t.xp6(7),t.Q6J("control",o.loginForm.controls.email),t.xp6(7),t.Q6J("control",o.loginForm.controls.password)}}const w=[{path:"",component:M,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{var n;class i{get f(){return this.loginForm.controls}constructor(e,a,l,u,f,m,h,d,C,A){this.menuService=e,this.appGlobalService=a,this.route=l,this.router=u,this.userService=f,this.toastService=m,this.spinner=h,this.storageService=d,this.apiService=C,this.validationService=A,this.returnUrl="",this.logo="",this.welcomeInfo="",this.isLoading=!1,this.loginForm=new r.nJ({email:new r.p4("",[r.kI.required]),password:new r.p4("",[r.kI.required]),ip:new r.p4("127.0.0.1",[r.kI.required])}),this.findFormErrors=[{message:"User ID is Required",key:"email"},{message:"Password is Required",key:"password"}]}getCompanyURLs(){this.userService.getCompanyURLs({}).subscribe(e=>{this.storageService.set("companyUrlObj",e),this.logo=e.logoUrl,this.welcomeInfo=e.welcomeInfoUrl})}ngAfterViewInit(){setTimeout(()=>{this.isLoading=!0},2e3)}ngOnInit(){this.storageService.remove("IDMSAUser");let e=this.storageService.get("companyUrlObj");e&&Object.keys(e).length?(this.logo=e.logoUrl,this.welcomeInfo=e.welcomeInfoUrl):this.getCompanyURLs(),this.apiService.getIp().subscribe(a=>{this.f.ip.setValue(a.ip)}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/default"}login(){this.validationService.checkErrors(this.loginForm,this.findFormErrors)||(this.spinner.show(),this.userService.login(this.loginForm.value).subscribe(e=>{this.storageService.set("IDMSAUser",e),this.menuService.getAllGlobalData({}).subscribe(l=>{this.appGlobalService.setData(l),this.spinner.hide();const u=l.roles,f=e.roles;let m="./auth/login";for(const h of f){let d=u.find(C=>h==C._id);if(d){m=d.redirectTo;break}}console.log("route",m),this.router.navigate([m]),this.toastService.success("Login done Successfully !!")})}))}}return(n=i).\u0275fac=function(e){return new(e||n)(t.Y36(p.hl),t.Y36(s.P0),t.Y36(g.gz),t.Y36(g.F0),t.Y36(p.KD),t.Y36(s.kl),t.Y36(s.V),t.Y36(s.V1),t.Y36(s.sM),t.Y36(O.RJ))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:4,vars:2,consts:[[1,"container-fluid"],[1,"flashScreen"],["src","./assets/companies/splash.svg","alt","","class","scale-up-center",4,"ngIf"],["class","row loginFlash login-card",4,"ngIf"],["src","./assets/companies/splash.svg","alt","",1,"scale-up-center"],[1,"row","loginFlash","login-card"],[1,"col","part-1"],[1,"text-center"],["alt","",1,"img-fluid",3,"src"],[1,"col","part-2"],["alt","",1,"img-welcome","img-fluid",3,"src"],[1,"text-start",3,"formGroup","submit"],[1,""],[1,"form-label"],[1,"text-danger"],["type","text","placeholder","Enter User Name","formControlName","email","aria-label","Large",1,"form-control"],[1,"error-left",3,"control"],["type","password","placeholder","Enter Password","formControlName","password",1,"form-control"],[1,"d-grid"],["type","submit",1,"btn","btn-primary","login-btn"],[1,"w-100"],[1,"col","text-center","part-3"],[1,"text-label"],[1,"col","text-center","part-4"],["routerLink","/auth1/forget"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,b,1,0,"img",2),t.qZA(),t.YNc(3,y,34,5,"div",3),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",!a.isLoading),t.xp6(1),t.Q6J("ngIf",a.isLoading))},dependencies:[v.O5,g.rH,P.s,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".container-fluid[_ngcontent-%COMP%]{height:100vh;width:100vw;display:flex;justify-content:center;align-items:center;padding:0;margin:0;font-size:1.6rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]{width:80.016rem;height:45.024rem;padding-top:2.5rem;background-image:url(Hex_pattern.09c260e7c5c9ff86.svg);object-fit:cover;background-repeat:no-repeat;background-size:cover;background-position:100% 100%;border:1px solid var(--bs-primary);border-radius:4px}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;justify-items:center;background-repeat:no-repeat;background-size:cover;background-position:100% 100%}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]{margin-top:6.144rem;width:23.12505rem;height:23.12505rem;display:block;margin-left:auto;margin-right:auto}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;flex-flow:column;align-items:stretch;padding-right:6.5rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .img-welcome[_ngcontent-%COMP%]{padding-left:.5rem;padding-right:.5rem;height:6.144rem;margin-bottom:3.7rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{height:4rem!important;border-radius:2px;margin-bottom:2rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{font-size:1.6rem!important;margin-top:1.8rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-3[_ngcontent-%COMP%]{height:1.8rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-4[_ngcontent-%COMP%]{height:1.8rem;padding-right:6.5rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .text-label[_ngcontent-%COMP%]{font-size:1.6rem}.flashScreen[_ngcontent-%COMP%]{display:grid;place-items:center}.scale-up-center[_ngcontent-%COMP%]{width:23.12505rem;height:23.12505rem;animation:_ngcontent-%COMP%_scale-up-center 3s cubic-bezier(.39,.575,.565,1) 1s both}@keyframes _ngcontent-%COMP%_scale-up-center{0%{transform:rotate(-90deg);opacity:.02}40%{transform:scale(-2)}to{transform:rotate(40deg);transform:scale(-2)}}"]}),i})()},{path:"register",component:(()=>{var n;class i{constructor(){}ngOnInit(){}}return(n=i).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-register"]],decls:0,vars:0,template:function(e,a){},encapsulation:2}),i})()},{path:"forget",component:(()=>{var n;class i{constructor(e,a,l){this.userService=e,this.toastService=a,this.spinner=l,this.form=new r.nJ({email:new r.p4("",[r.kI.required])})}ngOnInit(){}forget(){this.spinner.show(),this.userService.forgetpass(this.form.value).subscribe(e=>{this.toastService.success("Enter new password !!"),this.spinner.hide()})}}return(n=i).\u0275fac=function(e){return new(e||n)(t.Y36(p.KD),t.Y36(s.kl),t.Y36(s.V))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-forget"]],decls:19,vars:1,consts:[[1,"container-fluid"],[1,"row","login-card"],[1,"col","part-1"],[1,"text-center"],["src","./assets/companies/login_logo.svg","alt","",1,"img-fluid"],[1,"col","part-2"],[1,"text-start",3,"formGroup"],[1,""],[1,"form-label"],[1,"text-danger"],["type","text","placeholder","Enter User Name","formControlName","email","aria-label","Large",1,"form-control"],[1,"d-grid"],["type","submit",1,"btn","btn-primary","login-btn","mt-4",3,"click"],[1,"w-100"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA()(),t.TgZ(5,"div",5)(6,"div",3),t._uU(7," Find Your Account "),t.TgZ(8,"form",6)(9,"div",7)(10,"label",8),t._uU(11," User ID "),t.TgZ(12,"span",9),t._uU(13,"*"),t.qZA()(),t._UZ(14,"input",10),t.qZA(),t.TgZ(15,"div",11)(16,"button",12),t.NdJ("click",function(){return a.forget()}),t._uU(17," Submit "),t.qZA()()()()(),t._UZ(18,"div",13),t.qZA()()),2&e&&(t.xp6(8),t.Q6J("formGroup",a.form))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".container-fluid[_ngcontent-%COMP%]{height:100vh;width:100vw;display:flex;justify-content:center;align-items:center;padding:0;margin:0;font-size:1.6rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]{width:80.016rem;height:45.024rem;padding-top:2.5rem;background-image:url(Hex_pattern.09c260e7c5c9ff86.svg);object-fit:cover;background-repeat:no-repeat;background-size:cover;background-position:100% 100%;border:1px solid var(--bs-primary);border-radius:4px}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;justify-items:center;background-repeat:no-repeat;background-size:cover;background-position:100% 100%}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]{margin-top:6.144rem;width:23.12505rem;height:23.12505rem;display:block;margin-left:auto;margin-right:auto}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;flex-flow:column;align-items:stretch;padding-right:6.5rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .img-welcome[_ngcontent-%COMP%]{padding-left:.5rem;padding-right:.5rem;height:6.144rem;margin-bottom:3.7rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{height:4rem!important;border-radius:2px;margin-bottom:2rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{font-size:1.6rem!important;margin-top:1.8rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-3[_ngcontent-%COMP%]{height:1.8rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-4[_ngcontent-%COMP%]{height:1.8rem;padding-right:6.5rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .text-label[_ngcontent-%COMP%]{font-size:1.6rem}"]}),i})()}]}];let x=(()=>{var n;class i{}return(n=i).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(w),g.Bz]}),i})();var U=c(56208);let Z=(()=>{var n;class i{}return(n=i).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[v.ez,x,U.m]}),i})()}}]);