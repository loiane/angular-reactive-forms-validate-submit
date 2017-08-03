import { SubmitFlagFormComponent } from './submit-flag-form/submit-flag-form.component';
import { ValidateFieldsSubmitFormComponent } from './validate-fields-submit-form/validate-fields-submit-form.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'simpleForm', component: SimpleFormComponent },
      { path: 'validateSubmit', component: ValidateFieldsSubmitFormComponent },
      { path: 'submitFlag', component: SubmitFlagFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
