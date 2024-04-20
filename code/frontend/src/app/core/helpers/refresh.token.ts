
// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
// } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';

// @Injectable()
// export class RefreshTokenService {
// refreshTokenMethod(
//     request: HttpRequest<any>,
//     next: HttpHandler,
//     // loginHistoryModel: LoginResponseModel
//   ): Observable<HttpEvent<any>> {
//     return from(this.signupService.refreshToken(loginHistoryModel)).pipe(
//       switchMap((res: LoginResponseModel) => {
//         // this.signupService.clearLoginResponse();
//         this.signupService.saveResponse(JSON.stringify(res));
//         request = request.clone({
//           setHeaders: {
//             Authorization: 'Bearer ' + res.access_token,
//           },
//         });
//         return next.handle(request);
//       }),
//       catchError((error) => {
//         //Refresh Token Issue.
//         if (error.status == 403) {
//           this.redirectLogout();
//         }
//         return throwError(() => error);
//       })
//     );
//   }
//   redirectLogout() {
//     this.signupService.clearLoginResponse();
//     this.router.navigateByUrl('/', { skipLocationChange: true }).then(
//       () => {
//         this.router.navigate(['current-opening']);
//       },
//       catchError((error) => {
//         return throwError(() => error);
//       })
//     );
//   }
// }