import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Billboard } from 'app/billboard/billboard';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class BillboardService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(private http: AuthHttp) { }


  create(billboard: Billboard) {
    const url = environment.url + 'billboards/create';
    this.httpOptions.headers.set('Content-Type', 'application/json');
    return this.http.put(url, billboard, this.httpOptions);
  }

  remove(billboard: Billboard) {
    const url = environment.url + 'billboards/' + billboard.id;
    this.httpOptions.headers.set('Content-Type', 'application/json');
    return this.http.delete(url, this.httpOptions);

  }

  addPublication(publication) {
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

  getBillboards(): Observable<any>{
    return this.http.get(environment.url + 'billboards/list').map(res => res);
  }

  getPublications(idBillboard): Observable<any>{
    return this.http.get(environment.url + 'publications/billboard/' + idBillboard).map(res => res);
  }

}
