import { Component } from '@angular/core';
import { ClickEventComponent } from './click-event/click-event.component';
import { CounterApplicationComponent } from './counter-application/counter-application.component';
import { EventsComponent } from './events/events.component';
import { InputFeidComponent } from './input-feild/input-feid.component';


@Component({
  selector: 'app-root',
  imports: [InputFeidComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularV19';
  name ='sai kumar';
  d1 =10 ;
  d2=20;
}
