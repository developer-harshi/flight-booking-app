import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { MessagesComponent } from './messages/messages.component';


import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MessagesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    // { provide: RequestCache, useClass: RequestCacheWithMap },
    // httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

