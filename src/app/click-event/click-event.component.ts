import { Component } from '@angular/core';

@Component({
  selector: 'app-click-event',
  imports: [],
  templateUrl: './click-event.component.html',
  styleUrl: './click-event.component.css'
})
export class ClickEventComponent {
  handleClick(){
    alert("function called after clicking the button")
    this.f2();
  }
f2(){
  alert("f2 called from handle click function");
  console.log("f2 called from handle click function")
}
}
