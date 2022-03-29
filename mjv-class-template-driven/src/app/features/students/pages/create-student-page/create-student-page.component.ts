import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';

@Component({
  templateUrl: './create-student-page.component.html',
  styleUrls: ['./create-student-page.component.scss']
})
export class CreateStudentPageComponent implements OnInit {

  student: Student = this.studentsService.getDefaultStudent();

  constructor(
    private studentsService: StudentsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(studentForm: NgForm) {
    // const formValue = studentForm.form.value;
    // this.student.name = formValue.name;
    // this.student.email = formValue.email;
    // this.student.password = formValue.password;
    // this.student.monthlyPayment = formValue.monthlyPayment;
    // this.student.course = formValue.course;
    // this.studentsService.createStudent(this.student);
    alert('Aluno adicionado com sucesso!');
    this.router.navigateByUrl('/students');
  }

}
