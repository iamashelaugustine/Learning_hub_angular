import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UsercompletedComponent } from './usercompleted/usercompleted.component';
import { UsercurrentComponent } from './usercurrent/usercurrent.component';



@NgModule({
  declarations: [UsersigninComponent, UsersignupComponent, UserpageComponent, UsercompletedComponent, UsercurrentComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
