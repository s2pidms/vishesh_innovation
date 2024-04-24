"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8801],{88801:(S,h,a)=>{a.r(h),a.d(h,{AuthModule:()=>x});var C=a(96814),c=a(1076),t=a(65879);let _=(()=>{class e{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-auth"]],decls:1,vars:0,template:function(o,i){1&o&&t._UZ(0,"router-outlet")},dependencies:[c.lC],encapsulation:2})}return e})();var r=a(60095),d=a(88354),s=a(98977),M=a(16897),O=a(1551);function P(e,U){1&e&&t._UZ(0,"img",4)}function v(e,U){if(1&e){const n=t.EpF();t.TgZ(0,"div",5)(1,"div",6)(2,"div",7),t._UZ(3,"img",8),t.qZA()(),t.TgZ(4,"div",9)(5,"div",7),t._UZ(6,"img",10),t.TgZ(7,"form",11),t.NdJ("submit",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.login())}),t.TgZ(8,"div",12)(9,"label",13),t._uU(10," User ID "),t.TgZ(11,"span",14),t._uU(12,"*"),t.qZA()(),t._UZ(13,"input",15)(14,"validation-messages",16),t.qZA(),t.TgZ(15,"div",12)(16,"label",13),t._uU(17," Password "),t.TgZ(18,"span",14),t._uU(19,"*"),t.qZA()(),t._UZ(20,"input",17)(21,"validation-messages",16),t.qZA(),t.TgZ(22,"div",18)(23,"button",19),t._uU(24," Login "),t.qZA()()()()(),t._UZ(25,"div",20),t.TgZ(26,"div",21)(27,"label",22),t._uU(28,"All Rights Reserved 2022"),t.qZA()(),t.TgZ(29,"div",23)(30,"label",22),t._uU(31," Forgot Password ? "),t.TgZ(32,"a",24),t._uU(33," Click Here"),t.qZA()()()()}if(2&e){const n=t.oxw();t.xp6(3),t.Q6J("src",n.logo,t.LSH),t.xp6(3),t.Q6J("src",n.welcomeInfo,t.LSH),t.xp6(1),t.Q6J("formGroup",n.loginForm),t.xp6(7),t.Q6J("control",n.loginForm.controls.email),t.xp6(7),t.Q6J("control",n.loginForm.controls.password)}}const b=[{path:"",component:_,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{class e{get f(){return this.loginForm.controls}constructor(n,o,i,g,p,l,u,m,f,Z){this.menuService=n,this.appGlobalService=o,this.route=i,this.router=g,this.userService=p,this.toastService=l,this.spinner=u,this.storageService=m,this.apiService=f,this.validationService=Z,this.returnUrl="",this.logo="",this.welcomeInfo="",this.isLoading=!1,this.loginForm=new r.nJ({email:new r.p4("",[r.kI.required]),password:new r.p4("",[r.kI.required]),ip:new r.p4("127.0.0.1",[r.kI.required])}),this.findFormErrors=[{message:"User ID is Required",key:"email"},{message:"Password is Required",key:"password"}]}getCompanyURLs(){this.userService.getCompanyURLs({}).subscribe(n=>{this.storageService.set("companyUrlObj",n),this.logo=n.logoUrl,this.welcomeInfo=n.welcomeInfoUrl})}ngAfterViewInit(){setTimeout(()=>{this.isLoading=!0},2e3)}ngOnInit(){this.storageService.remove("IDMSAUser");let n=this.storageService.get("companyUrlObj");n&&Object.keys(n).length?(this.logo=n.logoUrl,this.welcomeInfo=n.welcomeInfoUrl):this.getCompanyURLs(),this.apiService.getIp().subscribe(o=>{this.f.ip.setValue(o.ip)}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/default"}login(){this.validationService.checkErrors(this.loginForm,this.findFormErrors)||(this.spinner.show(),this.userService.login(this.loginForm.value).subscribe(n=>{this.storageService.set("IDMSAUser",n),this.menuService.getAllGlobalData({}).subscribe(i=>{this.appGlobalService.setData(i),this.spinner.hide();const g=i.roles,p=n.roles;let l="./auth/login";for(const u of p){let m=g.find(f=>u==f._id);if(m){l=m.redirectTo;break}}console.log("route",l),this.router.navigate([l]),this.toastService.success("Login done Successfully !!")})}))}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(d.hl),t.Y36(s.P0),t.Y36(c.gz),t.Y36(c.F0),t.Y36(d.KD),t.Y36(s.kl),t.Y36(s.V),t.Y36(s.V1),t.Y36(s.sM),t.Y36(M.RJ))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:4,vars:2,consts:[[1,"container-fluid"],[1,"flashScreen"],["src","./assets/companies/splash.svg","alt","","class","scale-up-center",4,"ngIf"],["class","row loginFlash login-card",4,"ngIf"],["src","./assets/companies/splash.svg","alt","",1,"scale-up-center"],[1,"row","loginFlash","login-card"],[1,"col","part-1"],[1,"text-center"],["alt","",1,"img-fluid",3,"src"],[1,"col","part-2"],["alt","",1,"img-welcome","img-fluid",3,"src"],[1,"text-start",3,"formGroup","submit"],[1,""],[1,"form-label"],[1,"text-danger"],["type","text","placeholder","Enter User Name","formControlName","email","aria-label","Large",1,"form-control"],[1,"error-left",3,"control"],["type","password","placeholder","Enter Password","formControlName","password",1,"form-control"],[1,"d-grid"],["type","submit",1,"btn","btn-primary","login-btn"],[1,"w-100"],[1,"col","text-center","part-3"],[1,"text-label"],[1,"col","text-center","part-4"],["routerLink","/auth1/forget"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,P,1,0,"img",2),t.qZA(),t.YNc(3,v,34,5,"div",3),t.qZA()),2&o&&(t.xp6(2),t.Q6J("ngIf",!i.isLoading),t.xp6(1),t.Q6J("ngIf",i.isLoading))},dependencies:[C.O5,c.rH,O.s,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".container-fluid[_ngcontent-%COMP%]{height:100vh;width:100vw;display:flex;justify-content:center;align-items:center;padding:0;margin:0;font-size:1.6rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]{width:80.016rem;height:45.024rem;padding-top:2.5rem;background-image:url(Hex_pattern.09c260e7c5c9ff86.svg);object-fit:cover;background-repeat:no-repeat;background-size:cover;background-position:100% 100%;border:1px solid var(--bs-primary);border-radius:4px}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;justify-items:center;background-repeat:no-repeat;background-size:cover;background-position:100% 100%}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]{margin-top:6.144rem;width:23.12505rem;height:23.12505rem;display:block;margin-left:auto;margin-right:auto}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;flex-flow:column;align-items:stretch;padding-right:6.5rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .img-welcome[_ngcontent-%COMP%]{padding-left:.5rem;padding-right:.5rem;height:6.144rem;margin-bottom:3.7rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{height:4rem!important;border-radius:2px;margin-bottom:2rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{font-size:1.6rem!important;margin-top:1.8rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-3[_ngcontent-%COMP%]{height:1.8rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-4[_ngcontent-%COMP%]{height:1.8rem;padding-right:6.5rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .text-label[_ngcontent-%COMP%]{font-size:1.6rem}.flashScreen[_ngcontent-%COMP%]{display:grid;place-items:center}.scale-up-center[_ngcontent-%COMP%]{width:23.12505rem;height:23.12505rem;animation:_ngcontent-%COMP%_scale-up-center 3s cubic-bezier(.39,.575,.565,1) 1s both}@keyframes _ngcontent-%COMP%_scale-up-center{0%{transform:rotate(-90deg);opacity:.02}40%{transform:scale(-2)}to{transform:rotate(40deg);transform:scale(-2)}}"]})}return e})()},{path:"register",component:(()=>{class e{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:0,vars:0,template:function(o,i){},encapsulation:2})}return e})()},{path:"forget",component:(()=>{class e{constructor(n,o,i){this.userService=n,this.toastService=o,this.spinner=i,this.form=new r.nJ({email:new r.p4("",[r.kI.required])})}ngOnInit(){}forget(){this.spinner.show(),this.userService.forgetpass(this.form.value).subscribe(n=>{this.toastService.success("Enter new password !!"),this.spinner.hide()})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(d.KD),t.Y36(s.kl),t.Y36(s.V))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-forget"]],decls:19,vars:1,consts:[[1,"container-fluid"],[1,"row","login-card"],[1,"col","part-1"],[1,"text-center"],["src","./assets/companies/login_logo.svg","alt","",1,"img-fluid"],[1,"col","part-2"],[1,"text-start",3,"formGroup"],[1,""],[1,"form-label"],[1,"text-danger"],["type","text","placeholder","Enter User Name","formControlName","email","aria-label","Large",1,"form-control"],[1,"d-grid"],["type","submit",1,"btn","btn-primary","login-btn","mt-4",3,"click"],[1,"w-100"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA()(),t.TgZ(5,"div",5)(6,"div",3),t._uU(7," Find Your Account "),t.TgZ(8,"form",6)(9,"div",7)(10,"label",8),t._uU(11," User ID "),t.TgZ(12,"span",9),t._uU(13,"*"),t.qZA()(),t._UZ(14,"input",10),t.qZA(),t.TgZ(15,"div",11)(16,"button",12),t.NdJ("click",function(){return i.forget()}),t._uU(17," Submit "),t.qZA()()()()(),t._UZ(18,"div",13),t.qZA()()),2&o&&(t.xp6(8),t.Q6J("formGroup",i.form))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".container-fluid[_ngcontent-%COMP%]{height:100vh;width:100vw;display:flex;justify-content:center;align-items:center;padding:0;margin:0;font-size:1.6rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]{width:80.016rem;height:45.024rem;padding-top:2.5rem;background-image:url(Hex_pattern.09c260e7c5c9ff86.svg);object-fit:cover;background-repeat:no-repeat;background-size:cover;background-position:100% 100%;border:1px solid var(--bs-primary);border-radius:4px}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;justify-items:center;background-repeat:no-repeat;background-size:cover;background-position:100% 100%}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]{margin-top:6.144rem;width:23.12505rem;height:23.12505rem;display:block;margin-left:auto;margin-right:auto}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;flex-flow:column;align-items:stretch;padding-right:6.5rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .img-welcome[_ngcontent-%COMP%]{padding-left:.5rem;padding-right:.5rem;height:6.144rem;margin-bottom:3.7rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{height:4rem!important;border-radius:2px;margin-bottom:2rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{font-size:1.6rem!important;margin-top:1.8rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-3[_ngcontent-%COMP%]{height:1.8rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .part-4[_ngcontent-%COMP%]{height:1.8rem;padding-right:6.5rem}.container-fluid[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .text-label[_ngcontent-%COMP%]{font-size:1.6rem}"]})}return e})()}]}];let y=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(b),c.Bz]})}return e})();var w=a(56208);let x=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[C.ez,y,w.m]})}return e})()}}]);