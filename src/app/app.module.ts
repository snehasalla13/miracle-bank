import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router } from '@angular/router';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { CheckApplicationsComponent } from './check-applications/check-applications.component';
import { SuccessFormComponent } from './success-form/success-form.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ViewStatusComponent } from './view-status/view-status.component';


@NgModule({
  declarations: [
    AppComponent,
    LoanApplicationComponent,
    InProgressComponent,
    CheckApplicationsComponent,
    SuccessFormComponent,
    TopBarComponent,
    ViewStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
