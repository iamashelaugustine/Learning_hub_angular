import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-trainersignup',
  templateUrl: './trainersignup.component.html',
  styleUrls: ['./trainersignup.component.css']
})

export class TrainersignupComponent implements OnInit {
  trainer_name;
  email_id;
  techs;
  time_slot;
  linkedin_id;
  experience;
  pass_word;
  message='';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  myFunction() {
    var x = document.getElementById("trainer_name3");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  submit_form_data(){
    console.log("trainer_name : " + this.trainer_name);
    console.log("email_id : " + this.email_id);
    console.log("techs : " + this.techs);
    console.log("time_slot : " + this.time_slot);
    console.log("linkedin_id : " + this.linkedin_id);
    console.log("experience : " + this.experience);
    console.log("pass_word : " + this.pass_word);


    var body = "trainer_name=" + this.trainer_name 
        + "&email_id=" + this.email_id 
        + "&techs=" + this.techs 
        + "&time_slot=" + this.time_slot 
        + "&linkedin_id=" + this.linkedin_id 
        + "&experience=" + this.experience 
        + "&pass_word=" + this.pass_word;
	
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    this.http.post("http://localhost:3000/trainer/", body, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Congratulations, You have successfully registered"
      },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running? or Registered already?";
      }
    )
  }

}
