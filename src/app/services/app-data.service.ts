import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import { environment } from 'environments/environment';

@Injectable()
export class AppDataService {
  constructor(private http: AuthHttp) {
  }

  getCities() {
    return this.http.get(environment.url + 'springjwt/cities').map(res => res.json());
  }

  getUsers() {
    return this.http.get(environment.url  + 'springjwt/users').map(res => res.json());
  }
}
