import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css'
})
export class ForLoopComponent {
  users:string[]=['sai','srinivas','shiva','kumar'];

  students=[
    {name:'sai',age:29,email:'sai@gmail.com'},
    {name:'Kumar',age:25,email:'kumar@gmail.com'},
    {name:'Shiva',age:32,email:'shiva@gmail.com'},
    {name:'Srinu',age:35,email:'srinu@gmail.com'}
  ];

  getUserName(name:string,email:string){
    let userName:string=name.concat(email);
    console.log(userName);
    alert("User Name is : "+ userName);
  }
  

}
