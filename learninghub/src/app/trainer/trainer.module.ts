import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainersigninComponent } from './trainersignin/trainersignin.component';
import { TrainersignupComponent } from './trainersignup/trainersignup.component';
import { TrainerpageComponent } from './trainerpage/trainerpage.component';
import { TrainercompletedComponent } from './trainercompleted/trainercompleted.component';
import { TrainercurrentComponent } from './trainercurrent/trainercurrent.component';
import { TrainereditComponent } from './traineredit/traineredit.component';



@NgModule({
  declarations: [TrainersigninComponent, TrainersignupComponent, TrainerpageComponent, TrainercompletedComponent, TrainercurrentComponent, TrainereditComponent],
  imports: [
    CommonModule
  ]
})
export class TrainerModule { }
