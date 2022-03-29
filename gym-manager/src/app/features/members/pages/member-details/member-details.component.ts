import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../models/member.model';
import { MembersService } from '../../services/members.service';

@Component({
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {

  member?: Member;

  constructor(
    private activedRoute: ActivatedRoute,
    private membersService: MembersService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.member = this.membersService.getById(parseInt(params['id']));
    });
  }

}
