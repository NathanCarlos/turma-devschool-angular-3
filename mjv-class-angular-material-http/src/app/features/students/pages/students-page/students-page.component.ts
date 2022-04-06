import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  longText = 'dsajjkhdsajkdhsajkdhsajkdhsakjdsa';

  students: Array<Student> = [];

  filteredStudents: Array<Student> = [];

  checked: boolean = false;
  indeterminate: boolean = true;

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.studentsService.getStudents().subscribe((students) => {
      this.students = students;
      this.filteredStudents = this.students;
    });
  }

  findStudentByFilter(event: any, type: 'Name' | 'Id') {
    const value = event.target.value;
    const students = type === 'Id' ? this.studentsService.getStudentsByFilterId(value) : this.studentsService.getStudentsByFilterName(value);
    // if(value.length === 0) {
    //   return this.filteredStudents = this.students;
    // }
    // return this.filteredStudents = students;
  }

}
