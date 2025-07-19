import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../services/employee';
import { Employeemodel } from '../model/employeemodel';

declare var bootstrap: any; 

@Component({
  selector: 'app-apply-form',
  standalone: false,
  templateUrl: './apply-form.html',
  styleUrls: ['./apply-form.css']
})
export class ApplyForm {
  applyForm: FormGroup;
  showSuccess: boolean = false;

  constructor(private fb: FormBuilder, private empService: Employee) {
    this.applyForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      designation: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(1000)]]
    });
  }

  onSubmit(): void {
    if (this.applyForm.valid) {
      const employee: Employeemodel = {
        id: 0,
        ...this.applyForm.value
      };

      this.empService.addemp(employee).subscribe(() => {
        this.showSuccess = true;
        this.applyForm.reset();
      });
    }
  }

  closePopup() {
    this.showSuccess = false;
  }
}