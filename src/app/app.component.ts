import { Component } from '@angular/core';
import { ClickEventComponent } from './click-event/click-event.component';
import { CounterApplicationComponent } from './counter-application/counter-application.component';


@Component({
  selector: 'app-root',
  imports: [CounterApplicationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularV19';
  name ='sai kumar';
  d1 =10 ;
  d2=20;
}
