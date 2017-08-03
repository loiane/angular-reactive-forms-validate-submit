import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-flag-form',
  templateUrl: './submit-flag-form.component.html',
  styles: []
})
export class SubmitFlagFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  onSubmit() {}

}
