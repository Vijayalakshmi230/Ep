import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Biketaxi } from '../services/biketaxi';

@Component({
  selector: 'app-apply-form',
  standalone: false,
  templateUrl: './apply-form.html',
  styleUrl: './apply-form.css'
})
export class ApplyForm {
  bikeForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private bikeService: Biketaxi,
    private router: Router
  ) {
    this.bikeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      bikenumber: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(50)]],
      phonenumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  submitForm() {
    if (this.bikeForm.valid) {
      this.bikeService.addBiketaxi(this.bikeForm.value).subscribe(() => {
        this.isFormSubmitted = true;
      });
    }
  }

  closeSuccessMessage() {
    this.isFormSubmitted = false;
    this.router.navigate(['/bikedetails']);
  }
}
