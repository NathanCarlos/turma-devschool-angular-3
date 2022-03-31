import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login/login.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterPageComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [LoginPageComponent]
})
export class LoginModule { }
