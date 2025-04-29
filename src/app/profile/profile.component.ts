import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routes } from '../app.routes';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userName:string | null ='';
  constructor(private route:ActivatedRoute){}

  // ngOnInit() {
  //  this.userName= this.route.snapshot.paramMap.get('name');
  // this.route.queryParams.subscribe(param=>{
  //   this.userName=param['name'];
  // })
  // this.route.data.subscribe(param=>{
  //   this.userName=param['name'];
  // })
  // }

  profileFormGroup=new FormGroup({
    name:new FormControl('name'),
    pswd:new FormControl('password'),
    email:new FormControl('email')
  })

  submitData(){
    console.log(this.profileFormGroup.value);
  }

  setData(){
    this.profileFormGroup.setValue(
      {name:'kali',pswd:'time',email:'123'}
    );
  }
}
