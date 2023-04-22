import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {
  students: Student[] = [];
  // Wyświetlić w naszej liście studentów
  constructor(private studentService: StudentService) {
    this.studentService.getStudents()
      .subscribe(data => {
        this.students = data;
        console.log(this.students);
      });
  }

  deleteStudent(id : number){
    console.log("Wciśnięto przycisk usuń dla studenta: " + id);
    alert('Wciśnięto przycisk usuń: ' + id);
  }
}
