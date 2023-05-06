import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-create-student-reactive',
  templateUrl: './create-student-reactive.component.html',
  styleUrls: ['./create-student-reactive.component.css']
})
export class CreateStudentReactiveComponent {
  addStudentForm = this.formBuilder.group({
    name: ['',[Validators.required, Validators.minLength(3)]],
    email: ['',[Validators.required, Validators.email]]
  });
  isSavingSuccess = false;

  //TODO!
  // 5) Wysłać żądanie post na serwer -> utworzenie nowego studenta

  constructor(private formBuilder : FormBuilder, private studentService : StudentService){
  }

  get f(){
    return this.addStudentForm.controls;
  }

  saveStudent(){
    console.log("sprawdzenia że zapis działa");

    if (this.addStudentForm.invalid){
      return;
    }

    this.studentService.addStudent
      ({name:this.f.name.value, email:this.f.email.value } as Student)
      .subscribe(()=>{
        console.log("udało się dodać studenta");
        this.isSavingSuccess = true;
      });
  }
}
