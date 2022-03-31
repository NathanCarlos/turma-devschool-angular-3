import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from 'src/app/features/members/services/members.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPageComponent implements OnInit {

  email: string = "";
  password: string = "";

  error: boolean = false;

  constructor(
    private membersServices: MembersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const member = this.membersServices.authenticate(this.email, this.password);

    if(!member) return this.error = true;

    delete member.password;

    localStorage.setItem('member', JSON.stringify(member));
    return this.router.navigateByUrl('/members');
  }

}
