import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  imports: [],
  templateUrl: './switch-case.component.html',
  styleUrl: './switch-case.component.css'
})
export class SwitchCaseComponent {
  color='black';
  handleColor(val:string){
    this.color=val;
  }
  handleColorByInput(event:Event){
    this.color=(event.target as HTMLInputElement).value;
  }
  handleColorByInputButton(color:HTMLInputElement){
    this.color=color.value;
  }
}
