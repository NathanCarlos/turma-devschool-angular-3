import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/login/pages/login/login.page';
import { RegisterPageComponent } from './features/login/pages/register/register.component';
import { MemberDetailsComponent } from './features/members/pages/member-details/member-details.component';
import { MembersPageComponent } from './features/members/pages/members-page/members-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'members', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'members', component: MembersPageComponent },
  { path: 'member-details/:id', component: MemberDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
