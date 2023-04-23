import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  // TODO!
  // 1) Notyfikacje dla użytkownika
  // 2) Obsługę przycisku anuluj
  student! : Student;

  constructor(private route:ActivatedRoute, 
    private studentService : StudentService){}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    
    //wysłanie żądania GET na serwer po dane studenta o określonym id
    // kiedy dane są dostępne wyświetlamy je w konsoli
    this.studentService.getStudent(Number(id))
      .subscribe(data=>{
        console.log(data);
        this.student = data;
      });
  }

  update(){
    this.studentService.updateStudent(this.student)
      .subscribe(()=>{
        console.log("Udało się zaktualizować studenta na serwerze!");
      });
  }
}
