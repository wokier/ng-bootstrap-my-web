import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { LoginComponent } from './page/login/login.component';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { AuthGuard } from './shared/security/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'welcome', component: WelcomeComponent,
    canActivate: [AuthGuard, NgxPermissionsGuard],
    data: only('MY_USER')
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

function only(permissions: string) {
  return {
    permissions: {
      only: permissions
    }
  };
}
