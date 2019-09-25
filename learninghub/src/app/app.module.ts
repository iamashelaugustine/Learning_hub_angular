import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IndexComponent } from './shared/index/index.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { UsersigninComponent } from './user/usersignin/usersignin.component';
import { UsersignupComponent } from './user/usersignup/usersignup.component';
import { UserpageComponent } from './user/userpage/userpage.component';
import { TrainersigninComponent } from './trainer/trainersignin/trainersignin.component';
import { TrainersignupComponent } from './trainer/trainersignup/trainersignup.component';
import { TrainerpageComponent } from './trainer/trainerpage/trainerpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    IndexComponent,
    AboutusComponent,
    UsersigninComponent,
    UsersignupComponent,
    UserpageComponent,
    TrainersigninComponent,
    TrainersignupComponent,
    TrainerpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
