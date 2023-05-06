import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../models/student';
import { delay, timeout } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  // 2) Wyślemy cały obiekt z html->ts
  // 3) Po prawidłowym wykonaniu operacji przez serwer 
  // - wyświetlimy użytkownikowi informacje o prawidłowym usunięciu.

  students: Student[] = [];
  isDataReady: boolean = false;
  isStudentRemoved = false;
  removedStudentName = "";

  constructor(private studentService: StudentService) {

  }

  ngOnInit(): void {
    this.studentService.getStudents()
      .pipe(delay(2000))
      .subscribe(data => {
        this.students = data;
        console.log(this.students);
        this.isDataReady = true;
      });
  }

  deleteStudent(student:Student) {
   // wywołanie metody studentsservice - wyśle żądanie DELETE 
   this.studentService.deleteStudent(student)
   .subscribe(() =>{
      this.students = this.students.filter(s=>s !== student);
      console.log("Usunięto studenta " + student.id);
      this.isStudentRemoved = true;
      this.removedStudentName = student.name;
    });
  }
}
