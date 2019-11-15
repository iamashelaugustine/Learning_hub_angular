import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  error_message='';
  courses = [];
  get_course_list = function() {
    this.http.get("http://localhost:3000/course").subscribe(
      (result : any[]) => {
        this.courses = result;
        this.error_message = ""
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  ngOnInit() {
    this.get_course_list();
  }

}
