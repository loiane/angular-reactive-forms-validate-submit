import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-flag-form',
  templateUrl: './submit-flag-form.component.html',
  styles: []
})
export class SubmitFlagFormComponent implements OnInit {
  form: FormGroup;
  private formSumitAttempt: boolean;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        street: [null, Validators.required],
        street2: [null],
        zipCode: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        country: [null, Validators.required]
      })
    });
  }

  isFieldValid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSumitAttempt)
    );
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  onSubmit() {
    this.formSumitAttempt = true;
    if (this.form.valid) {
      console.log('form submitted');
    }
  }

  reset() {
    this.form.reset();
    this.formSumitAttempt = false;
  }
}
