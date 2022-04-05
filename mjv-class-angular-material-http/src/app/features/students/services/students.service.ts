import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: Array<Student> = [];

  options = { 
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private httpClient: HttpClient) { }

  getDefaultStudent(): Student {
    const dateToday = moment().format('YYYY/MM/DD');
    return {
      name: '',
      email: '',
      password: '',
      monthlyPayment: 0,
      inclusionDate: dateToday,
      lastMontlyPayment: dateToday,
      validRegistration: true,
      course: ''
    }
  }
  getStudents() {
    return this.httpClient.get<Array<Student>>(environment.baseUrlBackend, this.options);
  }

  getStudentByEmailAndPassword(email: string | undefined, password: string | undefined) {
    return this.students.find((student) => student.email === email && student.password === password);
  }

  getStudentById(id: number) {
    return this.httpClient.get<Student>(`${environment.baseUrlBackend}/id/${id}`, this.options);
  }

  getStudentByName(name: string) {
    return this.students.find((student) => student.name === name);
  }

  getStudentsByFilterName(name: string) {
    return this.students.filter((student) => student.name.toUpperCase().search(name.toUpperCase()) > -1);
  }

  getStudentsByFilterId(id: number) {
    const student = this.getStudentById(Number(id));
    if(!student) {
      return [];
    }
    return [student];
  }

  createStudent(student: Student) {
    return this.httpClient.post(`${environment.baseUrlBackend}/create`, student, this.options);
  }

  removeStudent(id: number) {
    return this.httpClient.delete<any>(`${environment.baseUrlBackend}/remove/${id}`, this.options);
  }

  updateStudent(id: number, body: { email: string, name: string }) {
    return this.httpClient.put<any>(`${environment.baseUrlBackend}/update/${id}`, body, this.options);
  } 
}
