import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserpageComponent } from './userpage/userpage.component';



@NgModule({
  declarations: [UsersigninComponent, UsersignupComponent, UserpageComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
