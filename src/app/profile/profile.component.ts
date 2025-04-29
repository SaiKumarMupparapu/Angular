import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userName:string | null ='';
  constructor(private route:ActivatedRoute){}

  ngOnInit() {
  //  this.userName= this.route.snapshot.paramMap.get('name');
  // this.route.queryParams.subscribe(param=>{
  //   this.userName=param['name'];
  // })
  this.route.data.subscribe(param=>{
    this.userName=param['name'];
  })
  }

}
