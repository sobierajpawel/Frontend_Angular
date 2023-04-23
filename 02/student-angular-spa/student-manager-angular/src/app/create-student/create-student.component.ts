import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../models/student';
import { delay } from 'rxjs';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  isValidationRequiredFailed: boolean = false;
  isSavingSuccess = false;
  successMessage = "";
  isSendingPost = false;

  constructor(private studentService: StudentService) { }

  saveStudent(name: string, email: string) {
    this.isValidationRequiredFailed = false;

    // Czy pole email lub name jest puste
    if (!name || !email) {
      //name lub email jest puste
      this.isValidationRequiredFailed = true;
      return;
    }

    this.isSendingPost = true;
    // wywołać nasz serwis
    this.studentService.addStudent({ name, email } as Student)
      .pipe(delay(2000))
      .subscribe(data => {
        console.log(data);
        this.isSendingPost = false;
        this.isSavingSuccess = true;
        this.successMessage = "Udało się dodać studenta. Otrzymał on id:" + data.id;
      });
  }

}
