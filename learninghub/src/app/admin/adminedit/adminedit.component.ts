import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminedit',
  templateUrl: './adminedit.component.html',
  styleUrls: ['./adminedit.component.css']
})
 
export class AdmineditComponent implements OnInit {
  courses =[]
  constructor(private http: HttpClient) { }
  get_course_list = function() {
    this.http.get("http://localhost:3000/course/").subscribe(
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

  delete_course = function(_id) {
    this.http.delete("http://localhost:3000/course/"+_id).subscribe(
      (result) => {
        //this.course = result;
        this.error_message = "Deleted"
        this.users = [];
        this.get_course_list()
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }
  ngOnInit() {
    this.get_course_list()
  }

}

