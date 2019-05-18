import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-applications',
  templateUrl: './check-applications.component.html',
  styleUrls: ['./check-applications.component.less']
})
export class CheckApplicationsComponent implements OnInit {

  customerDetails;

  constructor(private loanService: LoanService, private router: Router) { }

  ngOnInit() {
    this.loanService.getData().subscribe((res) => {
      console.log(res);
      this.customerDetails = res['Res'];
      // console.log(this.customerDetails);
    });
  }

  getDetails(cust_id, loan_id) {
    localStorage.setItem('cust_id', cust_id);
    localStorage.setItem('loan_id', loan_id);
    this.loanService.getCustomer(cust_id, loan_id).subscribe((res) => {
      console.log(res);
      this.loanService.setLoan(res);
    })
    this.router.navigate(['inprogress']);
  }

  onSubmit() {
    // console.log(test);


  }
}
