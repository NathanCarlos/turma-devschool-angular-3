import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @Input()
  student?: Student;

  @Input()
  card: boolean = true;

  constructor(private studentsService: StudentsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  remove() {
    if (this.student && this.student.id) this.studentsService.removeStudent(this.student.id)
    .subscribe((result) => {
      alert(result.message);
      this.router.navigateByUrl('/students');
    });
  }

  update() {
    if (this.student && this.student.id)
    this.studentsService.updateStudent(
      this.student.id, { name: 'Augusto', email: 'augusto123@gmail.com' })
      .subscribe(() => {
        window.location.reload();
      });
  }

}
