import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admintrainerlist',
  templateUrl: './admintrainerlist.component.html',
  styleUrls: ['./admintrainerlist.component.css']
})
export class AdmintrainerlistComponent implements OnInit {

  constructor(private http: HttpClient) { }
  terror_message='';
  trainers = [];
  get_trainer_list = function() {
    this.http.get("https://localhost:44343/api/Admin/mentorlist").subscribe(
      (result : any[]) => {
        this.trainers = result;
        this.terror_message = ""
      },
      (error) => {
        this.terror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  delete_trainer = function(id) {
    this.http.delete("https://localhost:44343/api/Admin/"+id).subscribe(
      (result) => {
        this.terror_message = "Deleted"
        this.trainers = [];
        this.get_trainer_list()
      },
      (error) => {
        this.terror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  block_trainer = function(id) {
    console.log(id)
    this.http.put("http://localhost:3000/trainer/block/"+id).subscribe(
      (result : any[]) => {
        this.trainers = result;
        console.log(this.trainers)
        this.terror_message = ""
        alert("Trainer Blocked");
        
      },
      (error) => {
        this.terror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  unblock_trainer = function(id) {
    console.log(id)
    this.http.put("http://localhost:3000/trainer/unblock/"+id).subscribe(
      (result : any[]) => {
        this.trainers = result;
        console.log(this.trainers)
        this.terror_message = ""
        alert("Trainer Unblocked");
        
      },
      (error) => {
        this.terror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }



  ngOnInit() {
    this.get_trainer_list();
  } 

}

