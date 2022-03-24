import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member.model';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {

  members: Array<Member> = [
    {
      id: 1,
      name: 'Nathan',
      montlhyPayment: 150,
      inclusionDate: new Date(),
      lastPaymentDate: new Date()
    },
    {
      id: 2,
      name: 'Otavio',
      montlhyPayment: 100,
      inclusionDate: new Date(),
      lastPaymentDate: new Date()
    },
    {
      id: 3,
      name: 'Mauricio',
      montlhyPayment: 150,
      inclusionDate: new Date(),
      lastPaymentDate: new Date()
    },
    {
      id: 4,
      name: 'Palloma',
      montlhyPayment: 90,
      inclusionDate: new Date(),
      lastPaymentDate: new Date()
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
