import {Injectable} from '@angular/core';
import {JwtHelper} from 'angular2-jwt';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {
  jwtHelper: JwtHelper = new JwtHelper();
  accessToken: string;
  isAdmin: boolean;

  constructor(private http: HttpClient) {
  }

  login(accessToken: string) {
    const decodedToken = this.jwtHelper.decodeToken(accessToken);
    console.log(decodedToken);

    this.isAdmin = decodedToken.authorities.some(el => el === 'ADMIN_USER');
    this.accessToken = accessToken;

    localStorage.setItem(environment.TOKEN_NAME, accessToken);
  }

  logout() {
    this.accessToken = null;
    this.isAdmin = false;
    localStorage.removeItem(environment.TOKEN_NAME);
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  isUser(): boolean {
    return this.accessToken && !this.isAdmin;
  }

  getUserById(id: number): Observable<any>{
    return this.http.get(environment.url + 'users/' + id).map(res => res);
  }


}
