import { NgModule } from '@angular/core';
import { NgxPermissionsModule } from 'ngx-permissions';
import { SessionService } from '../../services/session.service';
import { AuthGuard } from '../security/auth.guard';

@NgModule({
  imports: [
    NgxPermissionsModule.forRoot(),
  ],
  providers: [
    SessionService,
    AuthGuard
  ],
  exports: []
})
export class SecurityModule {
}
