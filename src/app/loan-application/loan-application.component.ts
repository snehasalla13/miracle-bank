import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.less']
})
export class LoanApplicationComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  id;
  constructor(private router: Router, private loanService: LoanService) { }

  ngOnInit() {
  }

onSubmit(custid) {
  console.log('bla', this.form.value);
  this.id = custid;
  //console.log('bla', JSON.stringify(this.form.value));
  this.loanService.addCustomer(this.form.value);
    //this.router.navigate(['/success']);
}
}
