import { ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, Routes } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Users = [
  //   { id: 1, name: 'sai', age: 22 },
  //   { id: 2, name: 'Nagamani', age: 54 },
  //   { id: 3, name: 'srinu', age: 55 },
  //   { id: 4, name: 'shialaja', age: 30 },
  //   { id: 5, name: 'janakiram', age: 32 }

  // ];
  constructor(private router:Router){}

  // goToProf(userName:string){
  //  this.router.navigate(['profile'],{queryParams:{name:userName}})

  // }

}
