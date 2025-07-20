import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Instructor } from '../service/instructor';

@Component({
  selector: 'app-apply-form',
  standalone: false,
  templateUrl: './apply-form.html',
  styleUrls: ['./apply-form.css']
})
export class ApplyForm {

  applyForm: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder, private service: Instructor){
    this.applyForm = this.fb.group({
      name:['',Validators.required],
      certification:["",Validators.required],
      yogaSpecialty:['',Validators.required],
      classPreference:['',Validators.required],
      phoneNumber:['',[Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  async onSubmit(){
    if(this.applyForm.invalid){
      this.applyForm.markAllAsTouched();
      return;
    }

    this.service.addInstructor(this.applyForm.value).subscribe({
      next:() =>{
        this.successMessage ="Application submitted sucessfully";
        this.applyForm.reset();
      },
      error:(err) =>{
        console.error("An error occured while submitting the form: ", err);
      }
    })  }

}
