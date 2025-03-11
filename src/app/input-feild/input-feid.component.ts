import { Component } from '@angular/core';

@Component({
  selector: 'app-input-feid',
  imports: [],
  templateUrl: './input-feid.component.html',
  styleUrl: './input-feid.component.css'
})
export class InputFeidComponent {

  userName = "";

  setUserName(event: Event) {
    const name = (event.target as HTMLInputElement).value;
    this.userName = name;
    console.log(name);
  }
  saveUserName(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
    alert("User Name saved ");
  }

  handleTemplateRef(value:string){
    this.userName=value;
    console.log(this.userName);
    alert(this.userName);
  }

}
