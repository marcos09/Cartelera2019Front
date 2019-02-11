import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Billboard } from 'app/model/billboard';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BillboardService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(private http: HttpClient) { }

  getBillboards(): Observable<any> {
    return this.http.get(environment.url + 'billboards/list').map(res => res);
  }

  create(billboard: Billboard) {
    const url = environment.url + 'billboards/create';
    this.httpOptions.headers.set('Content-Type', 'application/json');
    return this.http.put(url, billboard, this.httpOptions);
  }

  addPublication(publication) {
    console.log(publication);
    const url = environment.url + 'billboards/' + publication.billboard + '/addPublication';
    this.httpOptions.headers.set('Content-Type', 'application/json');
    return this.http.put(url, publication, this.httpOptions);
  }

  removePublication() {

  }

  addWriteUser() {

  }

  removeWriteUser() {

  }
}
