import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  getStudents(){
    return this.http.get<Student[]>(this.studentsUrl);
  }

  getStudent(id:number){
    const url = `${this.studentsUrl}/${id}`;
    return this.http.get<Student>(url);
  }

  deleteStudent(student: Student){
    const url = `${this.studentsUrl}/${student.id}`;
    return this.http.delete<Student>(url);
  }

  addStudent(student: Student){
    return this.http.post<Student>(this.studentsUrl, student);
  }

  updateStudent(student:Student){
    const url = `${this.studentsUrl}/${student.id}`;
    return this.http.put<Student>(url,student);
  }
}
