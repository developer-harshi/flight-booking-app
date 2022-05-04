import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageAirlinesComponent } from './manage-airlines/manage-airlines.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },  /*admin services*/
  { path: 'manageairlines', component: ManageAirlinesComponent }  /*admin services*/


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
