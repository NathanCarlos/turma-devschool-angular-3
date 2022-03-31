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
      email: "nathan@gmail.com",
      password: "123456",
      montlhyPayment: 150,
      inclusionDate: new Date(),
      lastPaymentDate: new Date()
    },
    {
      id: 2,
      name: 'Otavio',
      email: "otavio@gmail.com",
      password: "123456",
      montlhyPayment: 100,
      inclusionDate: new Date(),
      lastPaymentDate: new Date()
    },
    {
      id: 3,
      name: 'Mauricio',
      email: "mauricio@gmail.com",
      password: "123456",
      montlhyPayment: 150,
      inclusionDate: new Date(),
      lastPaymentDate: new Date()
    },
    {
      id: 4,
      name: 'Palloma',
      email: "palloma@gmail.com",
      password: "123456",
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

  authenticate(email: string, password: string) {
    return this.members.find((member) => member.email === email && member.password === password);
  }
}
