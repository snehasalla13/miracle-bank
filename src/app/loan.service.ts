import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { RequestOptions } from '@angular/common/http';
import { LoanModel } from './loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }


 addCustomer(formData) {
//   let headers = new HttpHeaders({
//     'Content-Type': 'application/text'
//  });
 //let options = { headers: new HttpHeaders().append('Content-Type', 'application/json') };

 console.log('service', formData);
   return this.http.post('http://fee2fa1d.ngrok.io/api/second', formData,  {headers: this.headers});
 }

//  testAPI() {
//   // console.log('service', formData);
//   return this.http.get('http://b119b159.ngrok.io/api/test', {responseType: 'text'});
// }


getCustomer(id) {
  return this.http.get('https://na1.ai.dm-us.informaticacloud.com/active-bpel/public/rt/5Yg7jlWxU46jbQLX3VaL07/P1' + id);
}
}
