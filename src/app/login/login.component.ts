import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl, ValidationErrors } from '@angular/forms';
import { AirlineService } from '../services/airline.service';
import { AuthService } from '../services/auth.service';
import {UserForLogin } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any;
  constructor(private _authService:AuthService,private formbulider: FormBuilder) { }



  ngOnInit(): void {
    this.loginForm = this.formbulider.group({

      userName: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]

      // Address: ['', [Validators.required]],
      // Country: ['', [Validators.required]],
      // State: ['', [Validators.required]],
      // City: ['', [Validators.required]],
      // Pincode: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{6}')])]
    });/*,this.passwordMatchingValidator);*/
  }
  onSubmit()
  {
    console.log(this.loginForm.value);
        // const token = this.authService.authUser(loginForm.value);
        this._authService.authUser(this.loginForm.value).subscribe(
            (response: UserForLogin) => {
                console.log(response);
                const user = response;
                if (user) {
                    localStorage.setItem('token', user.token);
                    localStorage.setItem('userName', user.userName);
                    // this.alertify.success('Login Successful');
                    // this.router.navigate(['/']);
                }
            }
        );
  }
  get f(){
    return this.loginForm.controls;
  }

}
