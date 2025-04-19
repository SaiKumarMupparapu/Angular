import { Component } from '@angular/core';
import { ClickEventComponent } from './click-event/click-event.component';
import { CounterApplicationComponent } from './counter-application/counter-application.component';
import { EventsComponent } from './events/events.component';
import { InputFeidComponent } from './input-feild/input-feid.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { SignalsComponent } from './signals/signals.component';
import { EffectComponent } from './effect/effect.component';
import { ContextualVariablesComponent } from './contextual-variables/contextual-variables.component';


@Component({
  selector: 'app-root',
  imports: [ContextualVariablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
