import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from '@reactivex/rxjs/dist/package';
import { NgxPermissionsService } from 'ngx-permissions';
import { User } from '../model/user/user.model';
// import { Observable } from 'rxjs';

@Injectable()
export class SessionService {

  private static PATH = 'td/api/session';

  private currentUser: User|null;

  constructor(
    private http: HttpClient,
    private permissionsService: NgxPermissionsService) {
  }

  public login(username: string, password: string): Observable<User> {
    return of(new User(username, ['MY_USER']));
  }

  public next(value: User|null) {
    this.currentUser = value;
    this.permissionsService.flushPermissions();
    this.permissionsService.addPermission(value?.habilitations as string[]);
  }

  logout(): Observable<string> {
    return of('ok');
  }

  getUser() {
    return this.currentUser ? this.currentUser.login : null;
  }
}
