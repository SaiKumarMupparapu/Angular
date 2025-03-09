import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-application',
  imports: [],
  templateUrl: './counter-application.component.html',
  styleUrl: './counter-application.component.css'
})
export class CounterApplicationComponent {
  count = 0;

  handleClick(value: string) {
    if(value=='minus'){
      if(this.count>0){
      this.count=this.count-1
      }else{
        // this.count=0
      }
    }else if (value=='plus'){
      this.count=this.count+1
    }else{
      this.count=this.count=0;
    }

  }
}
