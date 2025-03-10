import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
handleEvent(event:Event){
  let value=(event.target as HTMLInputElement).value;
  console.log("function called",event.type)
  console.log(value)
}
}
