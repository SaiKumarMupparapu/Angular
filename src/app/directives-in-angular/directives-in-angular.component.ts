import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-in-angular',
  imports: [NgFor, NgIf,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './directives-in-angular.component.html',
  styleUrl: './directives-in-angular.component.css'
})
export class DirectivesInAngularComponent {
//NgFor
  students: string[] = ['sai', 'samba', 'sadha', 'shiva'];

  studentData = [
    { name: 'sai', age: 23, email: 'sai@gmail.com' },
    { name: 'samba', age: 32, email: 'samba@gmail.com' },
    { name: 'sadha', age: 43, email: 'sadha@gmail.com' },
    { name: 'shiva', age: 45, email: 'shiva@gmail.com' }
  ];

  //NgIf
  status: boolean = true;
  id: number = 1;

  incId() {
    if (this.id <4) {
      this.id++;
    }else{
      this.id=1;
    }
  }
  
  toggleBtn(){
    this.status=!this.status;
  }

  //ngSwitch
  color='red';

  changeColor(color:string){
    this.color=color;
  }

  

}
