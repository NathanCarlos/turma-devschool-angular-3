import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member.model';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {

  members: Array<Member> = this.membersService.getMembers();

  filteredMembers: Array<Member> = this.members;

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
  }

  findById(event: any) {
    const value = event.target.value;

    if(!value) return this.filteredMembers = this.members;

    const member = this.membersService.getById(parseInt(value));

    if(!member) return this.filteredMembers = this.members;

    return this.filteredMembers = [member];
  }

  findByName(event: any) {
    const value = event.target.value;

    if(!value) return this.filteredMembers = this.members;

    const members = this.membersService.getByName(value);

    if(members.length === 0) return this.filteredMembers = this.members;
    
    return this.filteredMembers = members;
  }

}
