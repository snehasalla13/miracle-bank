import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
//import { RequestOptions } from '@angular/common/http';
import { LoanModel } from "./loan.model";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoanService {
  private headers = new HttpHeaders({ "Content-Type": "application/json" });
  message;
  info;

  private loan = new BehaviorSubject<any>("");
  loanInfo = this.loan.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  addCustomer(formData) {
    console.log("service", formData);
    this.http
      .post("https://flaskapi.azurewebsites.net/api/first", formData, {
        headers: this.headers
      })
      .subscribe(
        (res: { Message: String }) => {
          // console.log('response', res);
          this.message = res.Message;
          // console.log('msg', res.Message);
          this.router.navigate(["/success"]);
        },
        err => {
          console.log("error", err);
        }
      );
  }

  getCustomer(in_Cust_ID, in_Loan_ID) {
    let reqIds = { in_Cust_ID: in_Cust_ID, in_Loan_ID: in_Loan_ID };
    return this.http.post(
      "https://flaskapi.azurewebsites.net/api/third",
      reqIds,
      { headers: this.headers }
    );
  }

  getData() {
    return this.http.post("https://flaskapi.azurewebsites.net/api/second", {
      headers: this.headers
    });
  }

  getStatus(status) {
    return this.http.post(
      "https://flaskapi.azurewebsites.net/api/fifth",
      status,
      { headers: this.headers }
    );
  }

  reRunModel(formData) {
    console.log("service", formData);
    return this.http.post(
      "https://flaskapi.azurewebsites.net/api/fourth",
      formData,
      { headers: this.headers }
    );
  }

  generateAgreement(data) {
    console.log("HERE!");
    return this.http.post("https://3c279d5c.ngrok.io/api/docusign", data, { headers: this.headers });
  }

  setLoan(loan) {
    return this.loan.next(loan);
  }
}
