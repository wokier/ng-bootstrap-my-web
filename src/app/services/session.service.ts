import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { User } from '../model/user/user.model';

@Injectable()
export class SessionService {

  private currentUser: User|null;

  constructor(
    private http: HttpClient,
    private permissionsService: NgxPermissionsService) {
  }

  public login(username: string, password: string): Observable<User> {
    return scheduled([new User(username, ['MY_USER'])], asyncScheduler);
  }

  public next(value: User|null) {
    this.currentUser = value;
    this.permissionsService.flushPermissions();
    this.permissionsService.addPermission(value?.habilitations as string[]);
  }

  logout(): Observable<string> {
    return scheduled(['ok'], asyncScheduler);
  }

  getUser() {
    return this.currentUser ? this.currentUser.login : null;
  }
}
