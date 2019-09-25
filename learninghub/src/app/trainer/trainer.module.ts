import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainersigninComponent } from './trainersignin/trainersignin.component';
import { TrainersignupComponent } from './trainersignup/trainersignup.component';
import { TrainerpageComponent } from './trainerpage/trainerpage.component';



@NgModule({
  declarations: [TrainersigninComponent, TrainersignupComponent, TrainerpageComponent],
  imports: [
    CommonModule
  ]
})
export class TrainerModule { }
