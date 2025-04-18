import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  // data = 100;
  //count=signal(10);
  //signal value data type declaration signal<T>(val);
  //we can declare multiple data types for value by using pipe,signal<T | U>(val)

  // count = signal<number | string>(10);
  // count=signal<number>(10);

  //declaring signal data type they are 2 writableSignal and Computed or readOnly
  // count1:WritableSignal<number>=signal(20);
  // count2:Signal<string>=computed(()=>"sai");

  // constructor() {
  //   effect(() => console.log(this.count()));

  // }
  // updateCount(val: string) {
  //   if (val == 'inc') {
  //     this.count.set(this.count() + 1);
  //   }
  //   else {
  //     if (!(this.count() == 0)) {
  //       this.count.set(this.count() - 1);
  //     }
  //   }
  // }

  // updateCount() {
  //   // this.count.set("sai");
  //   this.count.set(this.count()+10);
  //   // this.count1.update((val)=>val+20);

  // }
  x=signal(10);
  y=signal(20);
  z=computed(()=>this.x()+this.y());

  updateValue(){
    console.log(this.z());
    
  }
  updateXValue(){
    this.x.set(100);
  }


}
