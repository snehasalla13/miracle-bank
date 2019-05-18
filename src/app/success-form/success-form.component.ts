import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-success-form',
  templateUrl: './success-form.component.html',
  styleUrls: ['./success-form.component.less']
})
export class SuccessFormComponent implements OnInit {

  message;

  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.message = this.loanService.message;
    console.log(this.loanService.message);
  }

}
