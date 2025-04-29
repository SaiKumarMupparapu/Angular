import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-for-route',
  imports: [ReactiveFormsModule],
  templateUrl: './login-for-route.component.html',
  styleUrl: './login-for-route.component.css'
})
export class LoginForRouteComponent {
  userName=new FormControl('kumar');
  password=new FormControl('123456789');
  msg:string='';

    checkLogin(){
      if(this.userName.value=='S@i' && this.password.value=="123abc" ){
        this.msg='Welcome ';
      }else{
        this.msg='invalid credentials';
      }
  }
  getInfo(){
        console.log(this.userName.value);
        console.log(this.password.value);
  }
  setValue(){
    this.userName.setValue('Kali');
    this.password.setValue('time');
  }

}
