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
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DynamicStylelingComponent } from './dynamic-styleling/dynamic-styleling.component';
import { DirectivesInAngularComponent } from './directives-in-angular/directives-in-angular.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
