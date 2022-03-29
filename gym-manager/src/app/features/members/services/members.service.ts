import { Injectable } from '@angular/core';
import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

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
  
  getMembers() {
    return this.members;
  }

  getById(id: number) {
    return this.members.find((member) => member.id === id);
  }

  getByName(name: string) {
    return this.members.filter((member) => member.name.toUpperCase().search(name.toUpperCase()) > -1);
  }
}
