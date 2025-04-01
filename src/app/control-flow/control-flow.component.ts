import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  display=true;
  divOne=true;

  hide(){
    this.display=false;
  }
  show(){
    this.display=true;
  }

  toggle(){
    this.display=!this.display;
  }

  divToggle(){
    this.divOne=!this.divOne;
  }
}
