import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl, ValidationErrors } from '@angular/forms';
import { AirlineService } from '../services/airline.service';
import { Register } from '../models/register.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm=new FormGroup(
    {
      userName:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,Validators.required),
      confirmPassword:new FormControl(null,Validators.required),
      contactNumber:new FormControl(null,[Validators.required]),
      contactAddress:new FormControl(null,[Validators.required])

    },this.passwordMatchingValidator

  );
  constructor(private _airlineService:AirlineService) { }

  ngOnInit(): void {


  }
  onSubmit(  )
  {
    console.log(this.registrationForm)
  }
  // import { AbstractControl, ValidatorFn } from '@angular/forms';
  // export default class Validation {
  //   static match

  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
      { notmatched: true }
  };
  get f(){
    return this.registrationForm.controls;
  }

}
