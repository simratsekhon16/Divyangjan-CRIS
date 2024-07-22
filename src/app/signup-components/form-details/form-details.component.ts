import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      state: ['', Validators.required],
      nearestRailwayStation: ['', Validators.required],
      identityVerificationWithoutAadhaar: [false],
      nameAsPerAadhaar: [''],
      aadhaarNo: [''],
      aadhaarOTP: [''],
      applicantName: [''],
      mobileNo: ['', Validators.required],
      mobileOTP: [''],
      emailId: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      disability: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.setupConditionalValidators();
  }

  setupConditionalValidators() {
    const identityVerificationControl = this.registrationForm.get('identityVerificationWithoutAadhaar');
    if (identityVerificationControl) {
      identityVerificationControl.valueChanges.subscribe(withoutAadhaar => {
        this.updateValidators(withoutAadhaar);
      });
    }
  }

  updateValidators(withoutAadhaar: boolean) {
    const applicantNameControl = this.registrationForm.get('applicantName');
    const nameAsPerAadhaarControl = this.registrationForm.get('nameAsPerAadhaar');
    const aadhaarNoControl = this.registrationForm.get('aadhaarNo');

    if (applicantNameControl && nameAsPerAadhaarControl && aadhaarNoControl) {
      if (withoutAadhaar) {
        applicantNameControl.setValidators(Validators.required);
        nameAsPerAadhaarControl.clearValidators();
        aadhaarNoControl.clearValidators();
      } else {
        applicantNameControl.clearValidators();
        nameAsPerAadhaarControl.setValidators(Validators.required);
        aadhaarNoControl.setValidators(Validators.required);
      }

      applicantNameControl.updateValueAndValidity();
      nameAsPerAadhaarControl.updateValueAndValidity();
      aadhaarNoControl.updateValueAndValidity();
    }
  }

  getOTP(type: 'aadhaar' | 'mobile') {
    // Implement OTP generation logic here
    console.log(`Generating OTP for ${type}`);
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      // Implement form submission logic here
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.registrationForm.controls).forEach(key => {
        const control = this.registrationForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }
}
