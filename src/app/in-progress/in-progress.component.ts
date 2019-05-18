import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { LoanService } from "../loan.service";

@Component({
  selector: "app-in-progress",
  templateUrl: "./in-progress.component.html",
  styleUrls: ["./in-progress.component.less"]
})
export class InProgressComponent implements OnInit {
  @ViewChild("f") form: NgForm;
  info;
  id;

  approved = false;

  train = {
    in_loan_amt: "",
    in_emp_length: "",
    in_home_ownership: "",
    in_annual_inc: "",
    in_DTI: "",
    in_loan_Type: "",
    in_fico: "",
    in_tenure: "",
    in_Cust_ID: "",
    in_Loan_ID: "",
    in_SSN: "",
    in_credit_score: "",
    in_Status: "",
    in_comments: ""
  };

  status = {
    in_Cust_ID: "",
    in_loan_ID: "",
    in_SSN: "",
    in_Credit_Score: "",
    in_Status: "",
    in_comments: "",
    in_app_apr: "",
    in_app_emi: "",
    in_app_tenure: "",
    in_Appr_amt: "",
    in_mod_amt: "",
    in_mod_tenure: "",
    in_mod_Risk: "",
    in_mod_apr: "",
    in_mod_emi: ""
  };

  // agreement = {
  //   loan : '',
  //   apr : '',
  //   firstname: '',
  //   lastname: "",
  //   phone: "",
  //   state: "",
  //   zipcode: "",
  //   city: ""
  // };

 agreement = {
   loan: '',
   fn: '',
   apr: '',
   ln: '',
   ph: '',
   ci: '',
   zi: '',
   st: ''
 }

  constructor(
    private router: Router,
    private loanService: LoanService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loanService
      .getCustomer(
        localStorage.getItem("cust_id"),
        localStorage.getItem("loan_id")
      )
      .subscribe(res => {
        console.log("Get ", res);
        var r = res;
        this.loanService.setLoan(r);
        this.loanService.loanInfo.subscribe(loan => {
          var l = loan;
          this.info = l;
        });
      });
  }

  getPDF() {
    console.log(event);
    this.agreement.loan = this.info.out_Loan_Amt;
    this.agreement.apr = this.info.out_ML_Sugg_APR;
    this.agreement.fn = this.info.out_FN;
    this.agreement.ln = this.info.out_LS;
    this.agreement.st = this.info.out_State;
    this.agreement.ph = this.info.out_PN;
    this.agreement.zi = this.info.out_Zip;
    this.agreement.ci = this.info.out_City;
    console.log("agreement ", this.agreement);
    this.loanService.generateAgreement(this.agreement).subscribe(res => {
      console.log(res);
    });
  }

  onStatus(status) {
    console.log(status);
    this.status.in_Cust_ID = localStorage.getItem("cust_id");
    this.status.in_loan_ID = localStorage.getItem("loan_id");
    this.status.in_SSN = this.info.out_SSN;
    this.status.in_Credit_Score = this.info.out_Credit_Score;
    this.status.in_Status = status;
    this.status.in_Appr_amt = this.info.out_ML_Sugg_Amt;
    this.status.in_app_tenure = this.info.out_Tenure;
    this.status.in_app_emi = this.info.out_ML_Sugg_EMI;
    this.status.in_app_apr = this.info.out_ML_Sugg_APR;
    this.status.in_mod_amt = this.info.out_ML_Sugg_Amt;
    this.status.in_mod_tenure = this.info.out_Tenure;
    this.status.in_mod_emi = this.info.out_ML_Sugg_EMI;
    this.status.in_mod_apr = this.info.out_ML_Sugg_APR;
    this.status.in_mod_Risk = this.info.out_ML_Risk_Category;

    this.loanService.getStatus(this.status).subscribe(
      res => {
        console.log("payload status ", this.status);
        console.log("res for status ", res);
        var msg = res["Message"];
        console.log(msg);
        if (msg === "Success") {
          this.approved = true;
        } else {
          this.router.navigate(["check"]);
        }
      },
      err => {
        console.log("err for sttaus ", err);
      }
    );
  }

  goBack() {
    this.router.navigate(["check"]);
  }

  onSubmit() {
    //  console.log('bla',this.form.value);

    this.train.in_loan_amt = this.info.out_Loan_Amount;
    this.train.in_emp_length = this.info.out_Emp_Length;
    this.train.in_home_ownership = this.info.out_Home_Owner;
    this.train.in_annual_inc = this.info.out_App_Inc;
    this.train.in_DTI = this.info.out_DTI;
    this.train.in_loan_Type = this.info.out_Loan_Type;
    this.train.in_fico = this.info.out_Fisco;
    this.train.in_tenure = this.info.out_Tenure;
    this.train.in_Cust_ID = localStorage.getItem("cust_id");
    this.train.in_Loan_ID = localStorage.getItem("loan_id");
    this.train.in_SSN = this.info.out_SSN;
    this.train.in_credit_score = this.info.out_Credit_Score;
    this.train.in_Status = this.info.out_Status;
    this.train.in_comments = this.info.out_Comment;

    // console.log("train ",this.train);

    this.loanService.reRunModel(this.train).subscribe(res => {
      var trainedData = res;
      // console.log('info',this.info);
      // console.log("trainedData ", trainedData);
      this.info.out_ML_Risk_Category = trainedData["out_risk_category"];
      this.info.out_ML_Sugg_APR = trainedData["out_apr"];
      this.info.out_ML_Sugg_Amt = trainedData["out_loan_amt"];
      this.info.out_ML_Sugg_EMI = trainedData["out_emi"];
      this.info.out_ML_Sugg_Tenure = trainedData["out_tenure"];
      this.loanService.setLoan(this.info);
      console.log("info", this.info);
    });
  }

  ngOnDestroy() {
    localStorage.removeItem("cust_id");
    localStorage.removeItem("loan_id");
  }
}
