import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { CheckApplicationsComponent } from './check-applications/check-applications.component';
import { SuccessFormComponent } from './success-form/success-form.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ViewStatusComponent } from './view-status/view-status.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'loan', component: LoanApplicationComponent},
  {path: 'success', component: SuccessFormComponent},
  {path: 'check', component: CheckApplicationsComponent},
  {path: 'inprogress', component: InProgressComponent},
  {path: 'topbar', component: TopBarComponent},
  {path: 'view', component: ViewStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
