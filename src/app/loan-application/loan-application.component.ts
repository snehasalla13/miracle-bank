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
  constructor(private router: Router, private loanService: LoanService) { }

  ngOnInit() {
    // this.loanService.testAPI().subscribe((result) => {
    //   console.log(result);
    // })
  }

onSubmit() {
  console.log('bla', this.form.value);
  //console.log('bla', JSON.stringify(this.form.value));
  this.loanService.addCustomer(this.form.value)
  .subscribe((res) => {
    console.log('response', res);
    this.router.navigate(['/success']);
  },
   (err) => {
     console.log('error', err);
  });
    //this.router.navigate(['/success']);
}
}
