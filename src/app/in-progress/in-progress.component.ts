import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.less']
})
export class InProgressComponent implements OnInit {

  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.loanService.getCustomer('5Yg7jlWxU46jbQLX3VaL07').subscribe( (res) => {
    console.log(res);
    });
  }

  onSubmit() {
    console.log('success');
  }

}
