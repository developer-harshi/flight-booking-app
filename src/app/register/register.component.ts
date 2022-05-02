import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl, ValidationErrors } from '@angular/forms';
import { AirlineService } from '../services/airline.service';
import { Register } from '../models/register.model';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registrationForm:any;
  constructor(private _authService:AuthService,private formbulider: FormBuilder,) { }

  ngOnInit(): void {
    this.registrationForm = this.formbulider.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      Mobile: ['', [Validators.required]],
      // Address: ['', [Validators.required]],
      // Country: ['', [Validators.required]],
      // State: ['', [Validators.required]],
      // City: ['', [Validators.required]],
      // Pincode: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{6}')])]
    });/*,this.passwordMatchingValidator);*/


  }
  onSubmit(  )
  {
    console.log(this.registrationForm);
    // let register=new Register();
    const register=this.registrationForm.value;
    console.log(register);
    this._authService.register(register).subscribe((res) => {
      console.log('Issue added!');
      // this.ngZone.run(() => this.router.navigateByUrl('/issues-list'));
    });

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
