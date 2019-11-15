import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-adminupdate',
  templateUrl: './adminupdate.component.html',
  styleUrls: ['./adminupdate.component.css']
})
export class AdminupdateComponent implements OnInit {

    
    course_name:string
    start_date:String
    trainer_name:string
    _id
    message:string
    constructor(private route: ActivatedRoute, private http: HttpClient,
      private router: Router) { 
    }
  
    ngOnInit() {
      this.route.params.subscribe(params => {
        this._id = params['id'];
        console.log(this._id);
      });
  
      this.http.get("http://localhost:3000/course/"+this._id).subscribe(
        (result) => {
          this.course_name = result['course_name'];
          this.start_date = result['start_date'];
          this.trainer_name = result['trainer_name'];
           //this.error_message = "Deleted"
          // this.users = [];
          console.log('testing')
          console.log(result)
          // console.log(this.course_name)
          // console.log(this.start_date)
          // console.log(this.trainer_name)
          // this.get_user_list()
        },
        (error) => {
          //this.error_message = "Error occured, check whether Backend is running!";
          console.log(error)
        }
      )
  
    }
  
    submit_form_data(){
      console.log("course_name : " + this.course_name);
      console.log("start_date : " + this.start_date);
      console.log("trainer_name : " + this.trainer_name);
  
      var body = "course_name=" + this.course_name
          + "&start_date=" + this.start_date 
          + "&trainer_name=" + this.trainer_name;
    
      let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  
      this.http.put("http://localhost:3000/course/"+this._id, body, 
                    {headers: headers, responseType:'text'}).subscribe(
        (result) => {
          console.log(result)
          this.message = "Congratulations, succesfully updated !"
          alert(this.message)
        },
        (error) => {
          console.log(error)
          this.message = "Error : Backend is running? or any other error";
          alert(this.message)
        }
      )
    }
  
  }
  