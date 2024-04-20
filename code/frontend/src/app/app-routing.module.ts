import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'default',
    loadChildren: () =>
      import('./default/default.module').then((m) => m.DefaultModule),
  },
  {
    path: 'print',
    loadChildren: () =>
      import('./print-screen/print-screen.module').then(
        (m) => m.PrintScreenModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
