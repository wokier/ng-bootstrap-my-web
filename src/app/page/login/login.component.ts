import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { User } from '../../model/user/user.model';
import { SessionService } from '../../services/session.service';
import { ToastType, TypeToastComponent } from '../../shared/components/type-toast.component';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;
  isLoading = false;
  private redirect = 'canaux';

  @ViewChild(TypeToastComponent)
  toast: TypeToastComponent;

  constructor(
    public sessionService: SessionService,
    private router: Router,
    private permissionsService: NgxPermissionsService,
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [],
      univers: [],
      password: []
    });
    this.route.queryParams.subscribe(params => {
      this.redirect = params['redirect'] || 'welcome';
    });
  }

  login() {
    if (this.isLoginValid()) {
      this.isLoading = true;
      this.sessionService.login(this.form.get('username')?.value, this.form.get('password')?.value)
        .subscribe({next: (resp: User) => this.onLogin(resp), error: (err: any) => this.onError(err), complete: () => this.isLoading = false});
    }
  }

  onLogin(user: User) {
    this.toast.show(ToastType.INFO, 'Login success');
    this.sessionService.next(user);
    setTimeout(() => {
      this.router.navigate([this.redirect]);
    });
  }

  onError(err: any) {
    this.toast.show(ToastType.INFO, err);
  }

  clear() {
    this.form.reset();
    this.permissionsService.flushPermissions();
  }

  isLoginValid() {
    return this.form?.get('username')?.value && this.form?.get('password')?.value;
  }

  ngOnDestroy() {
    this.toast.hide();
  }
}
