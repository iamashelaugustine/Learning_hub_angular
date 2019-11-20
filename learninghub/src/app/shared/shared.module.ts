import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { IndexComponent } from './index/index.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursemodalComponent } from './coursemodal/coursemodal.component';



@NgModule({
  declarations: [HomeComponent, NavbarComponent, AboutusComponent, IndexComponent, CoursesComponent, CoursemodalComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
