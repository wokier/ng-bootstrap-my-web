import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../../model/user/user.model';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'my-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  title = 'MY WEB';
  private isLoading: boolean;

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {
  }

  user(): string|null {
    return this.sessionService.getUser();
  }

  logout() {
    this.isLoading = true;
    this.sessionService.logout()
      .subscribe({next: (done: string) => this.doLogout(), error: (err: any) => this.onError(err), complete: () => this.isLoading = false});
  }

  doLogout() {
    this.sessionService.next(null);
    setTimeout(() => {
      this.router.navigate(['login']);
    })
  }

  onError(err: any) {
    window.alert(err);
  }

}
