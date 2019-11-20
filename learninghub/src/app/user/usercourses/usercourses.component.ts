import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './usercourses.component.html',
  styleUrls: ['./usercourses.component.css']
})
export class UsercoursesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  error_message='';
  courses = [];
  get_course_list = function() {
    this.http.get("https://localhost:44343/api/Admin/courses").subscribe(
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
