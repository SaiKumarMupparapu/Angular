import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-styleling',
  imports: [],
  templateUrl: './dynamic-styleling.component.html',
  styleUrl: './dynamic-styleling.component.css'
})
export class DynamicStylelingComponent {
  color="Green";
  backgroungColor="Yellow";

  smallFont="20px";
  bigFont="50px";
  normalFont=60;

  

  zoom=false;
  toggleFontSize(){
    this.zoom=!this.zoom;
  }

}
